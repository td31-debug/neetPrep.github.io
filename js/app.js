// ==========================================================================
// NEET Interactive Learning Hub - Master Application Controller
// Physics, Chemistry & Biology Multi-Disciplinary Hub
// ==========================================================================

import { ThreeModelsLab } from './threeModels.js';
import { DiagramsManager } from './diagrams.js';
import { SimulatorsManager } from './simulators.js';
import { QuizEngine } from './quizEngine.js';
import { StudyHub } from './studyHub.js';

class AppController {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.currentSubject = 'all'; // 'all' | 'physics' | 'chemistry' | 'biology'
    this.currentActiveModel = 'water';

    // Subsystem instances
    this.studyHub = null;
    this.threeLab = null;
    this.diagramsMgr = null;
    this.simulatorsMgr = null;
    this.quizEngine = null;

    this.init();
  }

  init() {
    this.setupAudio();
    this.setupSubjectSwitcher();
    this.setupNavigation();
    this.initSubsystems();
    this.setup3DLabUI();
    this.setupDiagramsUI();
    this.setupKeyboardShortcuts();
  }

  // Web Audio API Sound Synthesizer (Zero external audio files needed)
  setupAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioCtx = new AudioContext();
    }

    const muteBtn = document.getElementById('btn-toggle-sound');
    muteBtn?.addEventListener('click', () => {
      this.isMuted = !this.isMuted;
      muteBtn.classList.toggle('active', !this.isMuted);
      muteBtn.innerHTML = this.isMuted ? '🔇' : '🔊';
    });
  }

  playSound(type) {
    if (this.isMuted || !this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'correct') {
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.1, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.25);
      });
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(130, now + 0.15);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  }

  // =========================================================================
  // SUBJECT SWITCHER: Physics, Chemistry & Biology
  // =========================================================================
  setupSubjectSwitcher() {
    const subjectButtons = document.querySelectorAll('.subject-btn');
    subjectButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const subj = btn.getAttribute('data-subject');
        this.selectSubject(subj);
      });
    });
  }

  selectSubject(subj) {
    this.currentSubject = subj;
    this.playSound('pop');

    // 1. Update button states
    const subjectButtons = document.querySelectorAll('.subject-btn');
    subjectButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-subject') === subj);
    });

    // 2. Filter 3D Models Sidebar
    const modelCards = document.querySelectorAll('.model-selector-card');
    let firstVisibleModel = null;
    let currentModelStillVisible = false;

    modelCards.forEach(card => {
      const cardSubj = card.getAttribute('data-subject');
      const isVisible = subj === 'all' || cardSubj === subj;
      card.classList.toggle('subject-item-hidden', !isVisible);

      if (isVisible) {
        if (!firstVisibleModel) firstVisibleModel = card;
        if (card.getAttribute('data-model') === this.currentActiveModel) {
          currentModelStillVisible = true;
        }
      }
    });

    // Auto-select first visible model if current is filtered out
    if (!currentModelStillVisible && firstVisibleModel) {
      const targetModelId = firstVisibleModel.getAttribute('data-model');
      this.activateModel(targetModelId);
    }

    // 3. Filter Diagrams Sidebar
    const diagramItems = document.querySelectorAll('.diagram-nav-item');
    let firstVisibleDiagram = null;
    let currentDiagramStillVisible = false;

    diagramItems.forEach(item => {
      const itemSubj = item.getAttribute('data-subject');
      const isVisible = subj === 'all' || itemSubj === subj;
      item.classList.toggle('subject-item-hidden', !isVisible);

      if (isVisible) {
        if (!firstVisibleDiagram) firstVisibleDiagram = item;
        if (item.classList.contains('active')) {
          currentDiagramStillVisible = true;
        }
      }
    });

    if (!currentDiagramStillVisible && firstVisibleDiagram) {
      firstVisibleDiagram.click();
    }

    // 4. Filter Simulators Cards
    const simCards = document.querySelectorAll('.sim-card');
    simCards.forEach(card => {
      const cardSubj = card.getAttribute('data-subject');
      const isVisible = subj === 'all' || cardSubj === 'all' || cardSubj === subj;
      card.classList.toggle('subject-item-hidden', !isVisible);
    });

    // 5. Sync with Exam Engine
    if (this.quizEngine) {
      this.quizEngine.setSubject(subj);
    }

    // 6. Sync with Master Study Hub (Physics, Chemistry & Biology)
    if (this.studyHub) {
      this.studyHub.filterSubject(subj);
    }

    // Update study hub tab label dynamically
    const studyTab = document.getElementById('tab-study');
    if (studyTab) {
      if (subj === 'physics') {
        studyTab.innerHTML = '<span>⚛️</span> Physics Study Hub (4 Chs)';
      } else if (subj === 'chemistry') {
        studyTab.innerHTML = '<span>🧪</span> Chemistry Study Hub (7 Chs)';
      } else if (subj === 'biology') {
        studyTab.innerHTML = '<span>🧬</span> Biology Study Hub (4 Chs)';
      } else {
        studyTab.innerHTML = '<span>📖</span> Master Study Hub (15 Chs)';
      }
    }
  }

  // Navigation between the 4 Hubs
  setupNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetViewId = tab.getAttribute('data-target');
        this.switchView(targetViewId);
      });
    });
  }

  switchView(viewId) {
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.view-section');

    tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-target') === viewId));
    sections.forEach(s => s.classList.toggle('active', s.id === viewId));

    this.playSound('pop');

    // Handle 3D viewport canvas resize when tab becomes visible
    if (viewId === 'view-3d-models' && this.threeLab) {
      setTimeout(() => this.threeLab.handleResize(), 50);
    }
  }

  initSubsystems() {
    // 0. Initialize Aakash Study Hub (Chapter 8)
    this.studyHub = new StudyHub();
    this.studyHub.setAudioCallback((type) => this.playSound(type));

    // 1. Initialize 3D Lab
    this.threeLab = new ThreeModelsLab('three-canvas-container');
    this.threeLab.onHotspotClick = (data) => {
      this.playSound('pop');
      document.getElementById('inspector-title').textContent = data.title;
      document.getElementById('inspector-desc').textContent = data.desc;
    };

    // 2. Initialize Diagrams Hub
    this.diagramsMgr = new DiagramsManager('diagram-viewport-canvas', 'diagram-info-card', 'diagram-quiz-prompt');
    this.diagramsMgr.setAudioCallback((type) => this.playSound(type));

    // 3. Initialize Simulators
    this.simulatorsMgr = new SimulatorsManager();
    this.simulatorsMgr.onJumpToQuestion = (pyqId) => {
      this.switchView('view-questions');
      this.quizEngine.jumpToQuestionId(pyqId);
    };

    // 4. Initialize Question Engine
    this.quizEngine = new QuizEngine();
    this.quizEngine.setAudioCallback((type) => this.playSound(type));
    this.quizEngine.onVisualHintRequest = (conceptLink) => {
      if (conceptLink === 'stoich') {
        this.switchView('view-simulators');
      } else if (conceptLink === 'solutions') {
        this.switchView('view-simulators');
        document.getElementById('solute-select')?.focus();
      } else if (conceptLink === 'sigfigs') {
        this.switchView('view-simulators');
        document.getElementById('sigfigs-input')?.focus();
      } else if (conceptLink === 'physics') {
        this.switchView('view-3d-models');
        this.activateModel('bohr');
      } else if (conceptLink === 'bio') {
        this.switchView('view-3d-models');
        this.activateModel('heart');
      } else {
        this.switchView('view-3d-models');
        this.activateModel('water');
      }
    };
  }

  // =========================================================================
  // 3D LAB CONTROLLER & MODEL INSPECTOR
  // =========================================================================
  setup3DLabUI() {
    const modelCards = document.querySelectorAll('.model-selector-card');
    modelCards.forEach(card => {
      card.addEventListener('click', () => {
        const modelId = card.getAttribute('data-model');
        this.activateModel(modelId);
      });
    });

    // Viewport Controls
    const rotateBtn = document.getElementById('btn-3d-rotate');
    rotateBtn?.addEventListener('click', () => {
      const active = this.threeLab.toggleRotation();
      rotateBtn.classList.toggle('active', active);
    });

    document.getElementById('btn-3d-reset')?.addEventListener('click', () => {
      this.threeLab.resetView();
    });

    const wireframeBtn = document.getElementById('btn-3d-wireframe');
    wireframeBtn?.addEventListener('click', () => {
      const active = this.threeLab.toggleWireframe();
      wireframeBtn.classList.toggle('active', active);
    });

    // Heart BPM Slider
    const bpmSlider = document.getElementById('heart-bpm-slider');
    bpmSlider?.addEventListener('input', (e) => {
      const bpm = parseInt(e.target.value);
      document.getElementById('heart-bpm-val').textContent = `${bpm} BPM`;
      this.threeLab.setHeartBpm(bpm);
    });

    // Bohr Quantum Jump Level Buttons
    const jumpBtns = document.querySelectorAll('.btn-quantum-jump');
    jumpBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        jumpBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const lvl = parseInt(btn.getAttribute('data-level'));
        this.threeLab.triggerQuantumJump(lvl);
        this.playSound('pop');

        const labels = {
          1: 'n = 1 (Ground State, r₁ = 0.529 Å, E₁ = -13.6 eV)',
          2: 'n = 2 (1st Excited State, r₂ = 4 r₁, E₂ = -3.40 eV)',
          3: 'n = 3 (2nd Excited State, r₃ = 9 r₁, E₃ = -1.51 eV)',
          4: 'n = 4 (3rd Excited State, r₄ = 16 r₁, E₄ = -0.85 eV)'
        };
        const levelVal = document.getElementById('bohr-level-val');
        if (levelVal) levelVal.textContent = labels[lvl] || `n = ${lvl}`;
      });
    });

    // Inspector Direct PYQ Button
    document.getElementById('btn-inspector-pyq')?.addEventListener('click', () => {
      const pyqMap = {
        'water': 13,
        'methane': 2,
        'dna': 103,
        'heart': 101,
        'bohr': 202
      };
      const targetId = pyqMap[this.currentActiveModel] || 1;
      this.switchView('view-questions');
      this.quizEngine.jumpToQuestionId(targetId);
    });
  }

  activateModel(modelId) {
    this.currentActiveModel = modelId;

    const modelCards = document.querySelectorAll('.model-selector-card');
    modelCards.forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-model') === modelId);
    });

    this.threeLab.loadModel(modelId);
    this.playSound('pop');

    // Update Top Viewport Title
    const modelNames = {
      'water': 'Water Molecule (H₂O) & Hydrogen Bond Network',
      'methane': 'Methane (CH₄) Tetrahedral Geometry (109.5°)',
      'dna': 'DNA Double Helix (Watson-Crick B-DNA Structure)',
      'heart': '3D Beating Human Heart & Cardiac Chambers',
      'bohr': 'Bohr Hydrogen Atom & Stationary Quantum Orbits'
    };
    const titleEl = document.getElementById('viewport-current-model-title');
    if (titleEl) titleEl.textContent = modelNames[modelId] || '3D Model';

    // Show/hide contextual control boxes
    const heartSliderBox = document.getElementById('heart-bpm-control-box');
    if (heartSliderBox) heartSliderBox.style.display = modelId === 'heart' ? 'block' : 'none';

    const bohrControlBox = document.getElementById('bohr-quantum-control-box');
    if (bohrControlBox) bohrControlBox.style.display = modelId === 'bohr' ? 'block' : 'none';

    // Update Right Inspector Content
    this.updateInspectorForModel(modelId);
  }

  updateInspectorForModel(modelId) {
    const titleEl = document.getElementById('inspector-title');
    const descEl = document.getElementById('inspector-desc');
    const hotspotsContainer = document.getElementById('inspector-hotspots-container');
    const pyqDesc = document.getElementById('inspector-pyq-desc');
    const pyqBtn = document.getElementById('btn-inspector-pyq');

    const modelData = {
      'water': {
        title: 'Water Molecule (H₂O)',
        desc: 'Water (H₂O) has a bent V-shaped molecular geometry with an observed bond angle of 104.5° (reduced from tetrahedral 109.5° due to lone-pair / lone-pair repulsion). High dielectric constant and H-bonding network create anomalous expansion with maximum density at 4°C.',
        highlights: [
          { label: 'Dipole Moment (μ)', val: '1.85 Debye', color: 'var(--accent-cyan)' },
          { label: 'H-Bond Strength', val: '~20 kJ / mol', color: 'var(--accent-blue)' },
          { label: 'Maximum Density', val: '4°C (1.000 g/mL)', color: 'var(--accent-emerald)' },
          { label: 'Hybridization of Oxygen', val: 'sp³', color: 'var(--accent-purple)' }
        ],
        pyqText: 'Question 13 & 15 test the number of water molecules in 18 mL, 18 g, and 18 moles.',
        btnText: 'Jump to PYQ #13 (Water Molecules)'
      },
      'methane': {
        title: 'Methane Molecule (CH₄)',
        desc: 'Methane (CH₄) exhibits regular tetrahedral geometry with four identical C-H σ-bonds formed by sp³-s orbital overlap. The perfect tetrahedral symmetry results in exact cancellation of individual bond dipoles, giving a net dipole moment of zero (μ = 0).',
        highlights: [
          { label: 'Bond Angle', val: '109.5° (Tetrahedral)', color: 'var(--accent-cyan)' },
          { label: 'Hybridization of Carbon', val: 'sp³', color: 'var(--accent-purple)' },
          { label: 'Net Dipole Moment (μ)', val: '0.00 Debye', color: 'var(--accent-emerald)' },
          { label: 'Molar Mass', val: '16.04 g/mol', color: 'var(--accent-amber)' }
        ],
        pyqText: 'Question 2 tests Avogadro volume ratio of equal masses of H₂, O₂, and methane.',
        btnText: 'Jump to PYQ #2 (Methane Gas Volume)'
      },
      'dna': {
        title: 'DNA Double Helix (B-DNA)',
        desc: 'Right-handed antiparallel double helix proposed by Watson & Crick (1953). Strands run 5\'→3\' and 3\'→5\'. Stabilized by complementary hydrogen bonding: Adenine pairs with Thymine via 2 H-bonds (A=T); Guanine pairs with Cytosine via 3 H-bonds (G≡C).',
        highlights: [
          { label: 'Helical Pitch', val: '3.4 nm (34 Å)', color: 'var(--accent-emerald)' },
          { label: 'Base Pairs per Turn', val: '10 bp', color: 'var(--accent-cyan)' },
          { label: 'Base Pair Distance', val: '0.34 nm (3.4 Å)', color: 'var(--accent-amber)' },
          { label: 'A=T / G≡C Bonds', val: '2 H-Bonds / 3 H-Bonds', color: 'var(--accent-purple)' }
        ],
        pyqText: 'Question 103 & 105 test Chargaff base ratios and B-DNA pitch dimensions.',
        btnText: 'Jump to PYQ #103 (DNA Chargaff Rule)'
      },
      'heart': {
        title: '3D Beating Human Heart',
        desc: 'Muscular four-chambered pump maintaining systemic and pulmonary double circulation. Autonomic rhythmicity is initiated by the Sinoatrial (SA) node in the right atrium (70-75 impulses/min), propagating through AV node, Bundle of His, and Purkinje fibers.',
        highlights: [
          { label: 'Natural Pacemaker', val: 'SA Node (70-75 bpm)', color: 'var(--accent-rose)' },
          { label: 'Normal Stroke Volume', val: '~70 mL / beat', color: 'var(--accent-cyan)' },
          { label: 'Resting Cardiac Output', val: '~5.0 L / min', color: 'var(--accent-emerald)' },
          { label: 'AV Valves', val: 'Tricuspid & Bicuspid', color: 'var(--accent-amber)' }
        ],
        pyqText: 'Question 101 & 104 test the cardiac pacemaker SA node and stroke volume.',
        btnText: 'Jump to PYQ #101 (Heart Pacemaker)'
      },
      'bohr': {
        title: 'Bohr Hydrogen Atom & Quantum Orbits',
        desc: 'Niels Bohr model of hydrogen: electrons revolve in discrete non-radiating stationary circular orbits. Angular momentum is quantized: L = mvr = n(h / 2π). Orbital radius rₙ is proportional to n² (rₙ ∝ n²), and energy Eₙ = -13.6 / n² eV.',
        highlights: [
          { label: 'Ground Radius (r₁)', val: '0.529 Å (0.0529 nm)', color: 'var(--accent-amber)' },
          { label: 'Radius Proportionality', val: 'rₙ ∝ n² (r₂ = 4 r₁)', color: 'var(--accent-cyan)' },
          { label: 'Ground Energy (E₁)', val: '-13.6 eV', color: 'var(--accent-rose)' },
          { label: '1st Excited Energy (E₂)', val: '-3.40 eV', color: 'var(--accent-purple)' }
        ],
        pyqText: 'Question 202 & 205 test Bohr orbit radius ratio r₂:r₁ = 4:1 and energy levels.',
        btnText: 'Jump to PYQ #202 (Bohr Radius Ratio)'
      }
    };

    const data = modelData[modelId];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (pyqDesc) pyqDesc.textContent = data.pyqText;
    if (pyqBtn) pyqBtn.textContent = data.btnText;

    if (hotspotsContainer) {
      hotspotsContainer.innerHTML = data.highlights.map(h => `
        <div class="hotspot-btn">
          <span>${h.label}</span>
          <strong style="color: ${h.color};">${h.val}</strong>
        </div>
      `).join('');
    }
  }

  // =========================================================================
  // DIAGRAMS HUB CONTROLLER
  // =========================================================================
  setupDiagramsUI() {
    const navItems = document.querySelectorAll('.diagram-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const diagramId = item.getAttribute('data-diagram');
        this.diagramsMgr.loadDiagram(diagramId);
        this.playSound('pop');

        const titles = {
          'mole-roadmap': 'Master Mole Concept Roadmap',
          'heart-anatomy': 'Human Heart Anatomical Section',
          'nephron-system': 'Nephron Tubule & Counter-Current Zones',
          'optics-lens': 'Ray Optics & Convex/Concave Lens Refraction'
        };
        document.getElementById('diagram-current-title').textContent = titles[diagramId] || 'Diagram';
      });
    });

    const modeExplore = document.getElementById('btn-mode-explore');
    const modeQuiz = document.getElementById('btn-mode-recall');

    modeExplore?.addEventListener('click', () => {
      modeExplore.classList.add('active');
      modeQuiz?.classList.remove('active');
      this.diagramsMgr.setMode('explore');
    });

    modeQuiz?.addEventListener('click', () => {
      modeQuiz.classList.add('active');
      modeExplore?.classList.remove('active');
      this.diagramsMgr.setMode('quiz');
    });
  }

  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        this.quizEngine.navigate(1);
      } else if (e.key === 'ArrowLeft') {
        this.quizEngine.navigate(-1);
      } else if (['1', 'a', 'A'].includes(e.key)) {
        const q = this.quizEngine.filteredQuestions[this.quizEngine.currentIndex];
        if (q) this.quizEngine.selectOption(q.id, 0);
      } else if (['2', 'b', 'B'].includes(e.key)) {
        const q = this.quizEngine.filteredQuestions[this.quizEngine.currentIndex];
        if (q) this.quizEngine.selectOption(q.id, 1);
      } else if (['3', 'c', 'C'].includes(e.key)) {
        const q = this.quizEngine.filteredQuestions[this.quizEngine.currentIndex];
        if (q) this.quizEngine.selectOption(q.id, 2);
      } else if (['4', 'd', 'D'].includes(e.key)) {
        const q = this.quizEngine.filteredQuestions[this.quizEngine.currentIndex];
        if (q) this.quizEngine.selectOption(q.id, 3);
      } else if (e.key === 'r' || e.key === 'R') {
        this.threeLab?.resetView();
      } else if (e.key === ' ') {
        e.preventDefault();
        const active = this.threeLab?.toggleRotation();
        document.getElementById('btn-3d-rotate')?.classList.toggle('active', active);
      }
    });
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.neetApp = new AppController();
});
