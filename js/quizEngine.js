// ==========================================================================
// Immersive Question Answering Engine - NEET 38 Years PYQ Platform
// Physics, Chemistry & Biology Examination
// ==========================================================================

import { NEET_PYQ_QUESTIONS } from './questionsData.js';

export class QuizEngine {
  constructor() {
    this.allQuestions = NEET_PYQ_QUESTIONS;
    this.filteredQuestions = [...this.allQuestions];
    this.currentIndex = 0;
    this.currentSubject = 'all'; // 'all', 'Chemistry', 'Biology', 'Physics'

    this.userResponses = {};
    this.bookmarkedIds = new Set();

    this.currentMode = 'practice';
    this.examTimeRemaining = 45 * 60;
    this.timerInterval = null;
    this.isExamSubmitted = false;

    this.onVisualHintRequest = null;
    this.playAudioFeedback = null;

    this.init();
  }

  setAudioCallback(fn) {
    this.playAudioFeedback = fn;
  }

  setSubject(subject) {
    this.currentSubject = subject;
    const subjectFilter = document.getElementById('filter-subject');
    if (subjectFilter) subjectFilter.value = subject;
    this.applyAllFilters();
  }

  init() {
    this.setupFilters();
    this.setupActionButtons();
    this.applyAllFilters();
  }

  setupFilters() {
    const subjectFilter = document.getElementById('filter-subject');
    const topicFilter = document.getElementById('filter-topic');
    const yearFilter = document.getElementById('filter-year');
    const diffFilter = document.getElementById('filter-diff');
    const modeSelect = document.getElementById('quiz-mode-select');

    subjectFilter?.addEventListener('change', (e) => {
      this.currentSubject = e.target.value;
      this.applyAllFilters();
    });

    topicFilter?.addEventListener('change', () => this.applyAllFilters());
    yearFilter?.addEventListener('change', () => this.applyAllFilters());
    diffFilter?.addEventListener('change', () => this.applyAllFilters());

    modeSelect?.addEventListener('change', (e) => {
      this.currentMode = e.target.value;
      if (this.currentMode === 'exam') {
        this.startExamTimer();
      } else {
        this.stopExamTimer();
      }
      this.renderCurrentQuestion();
    });
  }

  setSubject(subject) {
    this.currentSubject = subject || 'all';
    const subjectFilter = document.getElementById('filter-subject');
    if (subjectFilter) {
      subjectFilter.value = this.currentSubject;
    }
    this.applyAllFilters();
  }

  applyAllFilters() {
    const topicFilter = document.getElementById('filter-topic');
    const yearFilter = document.getElementById('filter-year');
    const diffFilter = document.getElementById('filter-diff');

    const subjVal = this.currentSubject;
    const topicVal = topicFilter?.value || 'all';
    const yearVal = yearFilter?.value || 'all';
    const diffVal = diffFilter?.value || 'all';

    this.filteredQuestions = this.allQuestions.filter(q => {
      const matchesSubj = subjVal === 'all' || q.subject?.toLowerCase() === subjVal.toLowerCase();
      const matchesTopic = topicVal === 'all' || q.topic.toLowerCase().includes(topicVal.toLowerCase());
      const matchesYear = yearVal === 'all' || q.year.includes(yearVal);
      const matchesDiff = diffVal === 'all' || q.difficulty.toLowerCase() === diffVal.toLowerCase();
      return matchesSubj && matchesTopic && matchesYear && matchesDiff;
    });

    this.currentIndex = 0;
    this.renderQuestionPalette();
    this.renderCurrentQuestion();
    this.updateStatsBar();
  }

  setupActionButtons() {
    document.getElementById('btn-prev-q')?.addEventListener('click', () => this.navigate(-1));
    document.getElementById('btn-next-q')?.addEventListener('click', () => this.navigate(1));
    document.getElementById('btn-mark-review')?.addEventListener('click', () => this.toggleMarkReview());
    document.getElementById('btn-bookmark-q')?.addEventListener('click', () => this.toggleBookmark());
    document.getElementById('btn-clear-response')?.addEventListener('click', () => this.clearResponse());
    document.getElementById('btn-submit-exam')?.addEventListener('click', () => this.submitExam());
    document.getElementById('btn-close-scorecard')?.addEventListener('click', () => {
      document.getElementById('scorecard-modal')?.classList.remove('active');
    });
    document.getElementById('btn-retake-quiz')?.addEventListener('click', () => {
      this.resetExam();
      document.getElementById('scorecard-modal')?.classList.remove('active');
    });
  }

  navigate(dir) {
    if (this.filteredQuestions.length === 0) return;
    const newIdx = this.currentIndex + dir;
    if (newIdx >= 0 && newIdx < this.filteredQuestions.length) {
      this.currentIndex = newIdx;
      if (this.playAudioFeedback) this.playAudioFeedback('pop');
      this.renderCurrentQuestion();
      this.updatePaletteHighlight();
    }
  }

  jumpToQuestionId(id) {
    const idx = this.filteredQuestions.findIndex(q => q.id === id);
    if (idx !== -1) {
      this.currentIndex = idx;
      this.renderCurrentQuestion();
      this.updatePaletteHighlight();
    } else {
      this.currentSubject = 'all';
      const subjectFilter = document.getElementById('filter-subject');
      if (subjectFilter) subjectFilter.value = 'all';
      const topicFilter = document.getElementById('filter-topic');
      if (topicFilter) topicFilter.value = 'all';

      this.filteredQuestions = [...this.allQuestions];
      const newIdx = this.filteredQuestions.findIndex(q => q.id === id);
      if (newIdx !== -1) {
        this.currentIndex = newIdx;
        this.renderQuestionPalette();
        this.renderCurrentQuestion();
        this.updatePaletteHighlight();
      }
    }
  }

  renderCurrentQuestion() {
    const container = document.getElementById('question-display-area');
    if (!container) return;

    if (this.filteredQuestions.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
          <h3 style="color: var(--text-muted)">No questions match the selected filter.</h3>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Select "All Subjects" or "All Topics" to see questions.</p>
        </div>
      `;
      return;
    }

    const q = this.filteredQuestions[this.currentIndex];
    const userResp = this.userResponses[q.id];
    const isBookmarked = this.bookmarkedIds.has(q.id);

    const qNumEl = document.getElementById('q-number-chip');
    const qYearEl = document.getElementById('q-year-chip');
    const qTopicEl = document.getElementById('q-topic-chip');
    const qSubjEl = document.getElementById('q-subject-chip');

    if (qNumEl) qNumEl.textContent = `Q${this.currentIndex + 1} of ${this.filteredQuestions.length}`;
    if (qYearEl) qYearEl.textContent = `NEET ${q.year}`;
    if (qTopicEl) qTopicEl.textContent = q.topic;
    if (qSubjEl) {
      const subj = q.subject || 'Chemistry';
      qSubjEl.textContent = subj;
      const pillClass = subj.toLowerCase() === 'biology' ? 'bio' : subj.toLowerCase() === 'physics' ? 'phy' : 'chem';
      qSubjEl.className = `subject-pill ${pillClass}`;
    }

    const bmBtn = document.getElementById('btn-bookmark-q');
    if (bmBtn) {
      bmBtn.style.color = isBookmarked ? 'var(--accent-amber)' : 'var(--text-muted)';
      bmBtn.innerHTML = isBookmarked ? '★ Bookmarked' : '☆ Bookmark';
    }

    const qTextEl = document.getElementById('question-text-content');
    if (qTextEl) qTextEl.textContent = q.question;

    const optionsContainer = document.getElementById('question-options-container');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optText, optIdx) => {
        const optEl = document.createElement('div');
        optEl.className = 'option-item';

        const isSelected = userResp?.selectedOption === optIdx;
        if (isSelected) optEl.classList.add('selected');

        if (this.currentMode === 'practice' && userResp) {
          if (optIdx === q.correct) {
            optEl.classList.add('correct');
          } else if (isSelected && optIdx !== q.correct) {
            optEl.classList.add('wrong');
          }
        } else if (this.isExamSubmitted) {
          if (optIdx === q.correct) optEl.classList.add('correct');
          if (isSelected && optIdx !== q.correct) optEl.classList.add('wrong');
        }

        optEl.innerHTML = `
          <div class="option-key">${letters[optIdx]}</div>
          <div class="option-text">${optText}</div>
        `;

        optEl.addEventListener('click', () => {
          if (this.isExamSubmitted) return;
          this.selectOption(q.id, optIdx);
        });

        optionsContainer.appendChild(optEl);
      });
    }

    const solutionBox = document.getElementById('solution-explanation-box');
    if (solutionBox) {
      const shouldShow = (this.currentMode === 'practice' && userResp) || this.isExamSubmitted;
      if (shouldShow) {
        solutionBox.classList.add('show');
        const solTextEl = document.getElementById('solution-text-content');
        if (solTextEl) solTextEl.textContent = q.solution;

        const formulaEl = document.getElementById('solution-formula-content');
        if (formulaEl) {
          formulaEl.textContent = `Key Formula / Principle: ${q.formula}`;
        }

        const hintBtn = document.getElementById('btn-solution-visual-hint');
        if (hintBtn) {
          hintBtn.onclick = () => {
            if (this.onVisualHintRequest) {
              this.onVisualHintRequest(q.conceptLink || 'mole');
            }
          };
        }
      } else {
        solutionBox.classList.remove('show');
      }
    }

    this.updatePaletteHighlight();
    this.updateStatsBar();
  }

  selectOption(questionId, optionIdx) {
    const q = this.allQuestions.find(item => item.id === questionId);
    if (!q) return;

    const isCorrect = optionIdx === q.correct;
    this.userResponses[questionId] = {
      selectedOption: optionIdx,
      status: 'answered',
      isCorrect: isCorrect,
      timeSpentSec: (this.userResponses[questionId]?.timeSpentSec || 0) + 1
    };

    if (this.currentMode === 'practice') {
      if (isCorrect) {
        if (this.playAudioFeedback) this.playAudioFeedback('correct');
      } else {
        if (this.playAudioFeedback) this.playAudioFeedback('wrong');
      }
    } else {
      if (this.playAudioFeedback) this.playAudioFeedback('pop');
    }

    this.renderCurrentQuestion();
    this.renderQuestionPalette();
  }

  toggleMarkReview() {
    const q = this.filteredQuestions[this.currentIndex];
    if (!q) return;

    const currentResp = this.userResponses[q.id];
    if (currentResp) {
      currentResp.status = currentResp.status === 'review' ? 'answered' : 'review';
    } else {
      this.userResponses[q.id] = {
        selectedOption: null,
        status: 'review',
        isCorrect: false,
        timeSpentSec: 0
      };
    }

    if (this.playAudioFeedback) this.playAudioFeedback('pop');
    this.renderQuestionPalette();
  }

  clearResponse() {
    const q = this.filteredQuestions[this.currentIndex];
    if (!q) return;

    delete this.userResponses[q.id];
    if (this.playAudioFeedback) this.playAudioFeedback('pop');
    this.renderCurrentQuestion();
    this.renderQuestionPalette();
  }

  toggleBookmark() {
    const q = this.filteredQuestions[this.currentIndex];
    if (!q) return;

    if (this.bookmarkedIds.has(q.id)) {
      this.bookmarkedIds.delete(q.id);
    } else {
      this.bookmarkedIds.add(q.id);
    }

    if (this.playAudioFeedback) this.playAudioFeedback('pop');
    this.renderCurrentQuestion();
  }

  renderQuestionPalette() {
    const paletteGrid = document.getElementById('question-palette-grid');
    if (!paletteGrid) return;

    paletteGrid.innerHTML = '';

    this.filteredQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'q-btn';
      btn.textContent = idx + 1;

      const resp = this.userResponses[q.id];
      if (resp) {
        if (resp.status === 'review') {
          btn.classList.add('marked-review');
        } else if (resp.selectedOption !== null) {
          if (this.currentMode === 'practice' || this.isExamSubmitted) {
            btn.classList.add(resp.isCorrect ? 'answered-correct' : 'answered-wrong');
          } else {
            btn.classList.add('answered-correct');
          }
        }
      }

      if (idx === this.currentIndex) {
        btn.classList.add('current');
      }

      btn.addEventListener('click', () => {
        this.currentIndex = idx;
        if (this.playAudioFeedback) this.playAudioFeedback('pop');
        this.renderCurrentQuestion();
      });

      paletteGrid.appendChild(btn);
    });
  }

  updatePaletteHighlight() {
    const buttons = document.querySelectorAll('.palette-grid .q-btn');
    buttons.forEach((btn, idx) => {
      btn.classList.toggle('current', idx === this.currentIndex);
    });
  }

  startExamTimer() {
    this.stopExamTimer();
    this.examTimeRemaining = 45 * 60;
    this.isExamSubmitted = false;

    const timerEl = document.getElementById('exam-timer-digits');
    this.timerInterval = setInterval(() => {
      if (this.examTimeRemaining <= 0) {
        this.stopExamTimer();
        this.submitExam();
        return;
      }
      this.examTimeRemaining--;

      const mins = Math.floor(this.examTimeRemaining / 60);
      const secs = this.examTimeRemaining % 60;
      if (timerEl) {
        timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    }, 1000);
  }

  stopExamTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  submitExam() {
    this.stopExamTimer();
    this.isExamSubmitted = true;

    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    this.filteredQuestions.forEach(q => {
      const resp = this.userResponses[q.id];
      if (resp && resp.selectedOption !== null) {
        if (resp.isCorrect) correctCount++;
        else incorrectCount++;
      } else {
        unattemptedCount++;
      }
    });

    const totalScore = (correctCount * 4) - (incorrectCount * 1);
    const maxPossibleScore = this.filteredQuestions.length * 4;
    const accuracy = correctCount + incorrectCount > 0 
      ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) 
      : 0;

    const modal = document.getElementById('scorecard-modal');
    if (modal) {
      document.getElementById('modal-score-val').textContent = totalScore;
      document.getElementById('modal-max-val').textContent = `/ ${maxPossibleScore}`;
      document.getElementById('modal-correct-count').textContent = correctCount;
      document.getElementById('modal-incorrect-count').textContent = incorrectCount;
      document.getElementById('modal-unattempted-count').textContent = unattemptedCount;
      document.getElementById('modal-accuracy-val').textContent = `${accuracy}%`;

      const scoreCircle = document.getElementById('score-circle-indicator');
      if (scoreCircle) {
        scoreCircle.style.setProperty('--score-pct', `${Math.max(0, Math.min(100, (totalScore / maxPossibleScore) * 100))}%`);
      }

      modal.classList.add('active');

      if (totalScore > 0 && window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      if (this.playAudioFeedback) this.playAudioFeedback('correct');
    }

    this.renderCurrentQuestion();
    this.renderQuestionPalette();
  }

  resetExam() {
    this.userResponses = {};
    this.isExamSubmitted = false;
    this.currentIndex = 0;
    if (this.currentMode === 'exam') {
      this.startExamTimer();
    }
    this.renderQuestionPalette();
    this.renderCurrentQuestion();
  }

  updateStatsBar() {
    const answeredCount = Object.values(this.userResponses).filter(r => r.selectedOption !== null).length;
    const correctCount = Object.values(this.userResponses).filter(r => r.isCorrect).length;

    const elAttempted = document.getElementById('stat-attempted-val');
    const elAccuracy = document.getElementById('stat-accuracy-val');
    const elBookmarks = document.getElementById('stat-bookmarks-val');

    if (elAttempted) elAttempted.textContent = `${answeredCount} / ${this.allQuestions.length}`;
    if (elAccuracy) {
      const acc = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
      elAccuracy.textContent = `${acc}%`;
    }
    if (elBookmarks) elBookmarks.textContent = this.bookmarkedIds.size;
  }
}
