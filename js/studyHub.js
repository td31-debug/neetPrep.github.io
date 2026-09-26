// ==========================================================================
// Aakash Chemistry Study Hub - Chapter 8: Aldehydes, Ketones & Carboxylic Acids
// Interactive Scrollytelling Engine & Dynamic Chemical Visual Stage
// ==========================================================================

export class StudyHub {
  constructor() {
    this.visualStage = document.getElementById('study-visual-stage');
    this.stageTitle = document.getElementById('study-stage-title');
    this.stageSubtitle = document.getElementById('study-stage-subtitle');
    this.stageBadge = document.getElementById('study-stage-badge');
    
    this.currentDiagramId = 'carbonyl-structure';
    this.observer = null;
    this.playAudio = null;

    // Interactive State Variables
    this.currentTollensState = 'unmixed';
    this.currentFehlingState = 'unmixed';
    this.currentIodoformState = 'unmixed';
    this.currentStepNuAdd = 1;
    this.currentAldolStep = 1;
    this.currentPkaAcid = 'acetic';

    this.init();
  }

  setAudioCallback(fn) {
    this.playAudio = fn;
  }

  init() {
    this.setupScrollObserver();
    this.setupQuickIndex();
    this.renderDiagram(this.currentDiagramId);
    this.setupCheckpointQuizzes();
    this.setupMobileControls();
  }

  // =========================================================================
  // SCROLLYTELLING INTERSECTION OBSERVER
  // Binds right-column text scroll to left-column visual diagram
  // =========================================================================
  setupScrollObserver() {
    const studySections = document.querySelectorAll('.study-topic-block');
    if (!studySections.length) return;

    const options = {
      root: null,
      rootMargin: '-15% 0px -55% 0px',
      threshold: [0.1, 0.5]
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const diagramId = entry.target.getAttribute('data-visual');
          const topicId = entry.target.id;
          if (diagramId && diagramId !== this.currentDiagramId) {
            this.switchDiagram(diagramId);
          }
          this.highlightQuickIndex(topicId);
        }
      });
    }, options);

    studySections.forEach(sec => this.observer.observe(sec));
  }

  setupQuickIndex() {
    const indexLinks = document.querySelectorAll('.study-index-link');
    indexLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (this.playAudio) this.playAudio('pop');
        }
      });
    });
  }

  highlightQuickIndex(activeTopicId) {
    const links = document.querySelectorAll('.study-index-link');
    links.forEach(l => {
      const match = l.getAttribute('href') === `#${activeTopicId}`;
      l.classList.toggle('active', match);
    });
  }

  setupMobileControls() {
    const toggleVisualBtn = document.getElementById('btn-toggle-mobile-stage');
    const visualSticky = document.getElementById('study-visual-container');
    
    toggleVisualBtn?.addEventListener('click', () => {
      visualSticky?.classList.toggle('mobile-expanded');
      const isExpanded = visualSticky?.classList.contains('mobile-expanded');
      toggleVisualBtn.innerHTML = isExpanded ? '✕ Close 3D/2D Visual Stage' : '🔬 View Interactive Stage & Diagrams';
      if (this.playAudio) this.playAudio('pop');
    });
  }

  switchDiagram(diagramId) {
    this.currentDiagramId = diagramId;
    this.renderDiagram(diagramId);
    if (this.visualStage) {
      this.visualStage.classList.add('stage-fade');
      setTimeout(() => this.visualStage.classList.remove('stage-fade'), 300);
    }
  }

  // =========================================================================
  // DYNAMIC VISUAL STAGE RENDERER
  // =========================================================================
  renderDiagram(diagramId) {
    if (!this.visualStage) return;

    switch (diagramId) {
      case 'carbonyl-structure':
        this.renderCarbonylStructure();
        break;
      case 'prep-matrix':
        this.renderPreparationMatrix();
        break;
      case 'nu-addition':
        this.renderNucleophilicAddition();
        break;
      case 'distinction-tests':
        this.renderDistinctionTests();
        break;
      case 'aldol-cannizzaro':
        this.renderAldolCannizzaro();
        break;
      case 'carboxylic-dimer':
        this.renderCarboxylicDimer();
        break;
      case 'acidity-ladder':
        this.renderAcidityLadder();
        break;
      case 'hvz-decarb':
        this.renderHvzDecarboxylation();
        break;
      default:
        this.renderCarbonylStructure();
    }
  }

  // 1. Carbonyl Group Structure & Orbital Overlap
  renderCarbonylStructure() {
    this.updateStageMeta('Carbonyl Group Orbital Architecture', 'Planar sp² carbon with electron-rich carbonyl oxygen', 'NCERT Sec 8.1.2');
    this.visualStage.innerHTML = `
      <div class="stage-svg-wrap">
        <svg viewBox="0 0 540 320" class="responsive-study-svg">
          <!-- Background Grids & Guidelines -->
          <rect width="540" height="320" rx="14" fill="#090e1c"/>
          <line x1="80" y1="160" x2="460" y2="160" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>

          <!-- Carbon-Oxygen σ Bond -->
          <line x1="200" y1="160" x2="340" y2="160" stroke="#38bdf8" stroke-width="7" stroke-linecap="round"/>
          <text x="270" y="152" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">σ-bond (1.23 Å)</text>

          <!-- Carbon-R1 and Carbon-R2 σ Bonds (120° Angle) -->
          <line x1="200" y1="160" x2="110" y2="90" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="200" y1="160" x2="110" y2="230" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>

          <!-- 120° Angle Arc -->
          <path d="M 155,125 A 50 50 0 0 1 155,195" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3,3"/>
          <text x="175" y="165" fill="#f59e0b" font-size="12" font-weight="800">120°</text>

          <!-- Substituent Balls -->
          <circle cx="110" cy="90" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="110" y="94" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">R₁</text>

          <circle cx="110" cy="230" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="110" y="234" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">R₂/H</text>

          <!-- π-Bond Cloud (Above and Below Plane) -->
          <ellipse cx="270" cy="115" rx="55" ry="18" fill="rgba(236, 72, 153, 0.28)" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="270" y="119" fill="#f472b6" font-size="10" font-weight="800" text-anchor="middle">π-cloud (above)</text>

          <ellipse cx="270" cy="205" rx="55" ry="18" fill="rgba(236, 72, 153, 0.28)" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="270" y="209" fill="#f472b6" font-size="10" font-weight="800" text-anchor="middle">π-cloud (below)</text>

          <!-- Carbon Atom Center (sp² hybridized) -->
          <circle cx="200" cy="160" r="26" fill="#1e293b" stroke="#00f2fe" stroke-width="3"/>
          <text x="200" y="165" fill="#00f2fe" font-size="18" font-weight="900" text-anchor="middle">C</text>
          <!-- Electrophilic δ+ marker -->
          <rect x="180" y="115" width="40" height="20" rx="6" fill="rgba(0, 242, 254, 0.15)" stroke="#00f2fe"/>
          <text x="200" y="129" fill="#00f2fe" font-size="11" font-weight="800" text-anchor="middle">δ⁺ (Nu⁻ target)</text>

          <!-- Oxygen Atom Center -->
          <circle cx="340" cy="160" r="26" fill="#1e293b" stroke="#f43f5e" stroke-width="3"/>
          <text x="340" y="165" fill="#f43f5e" font-size="18" font-weight="900" text-anchor="middle">O</text>
          <!-- Nucleophilic δ- marker -->
          <rect x="320" y="115" width="40" height="20" rx="6" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e"/>
          <text x="340" y="129" fill="#f43f5e" font-size="11" font-weight="800" text-anchor="middle">δ⁻ (Base)</text>

          <!-- Oxygen Lone Pairs -->
          <circle cx="375" cy="145" r="3" fill="#f43f5e"/>
          <circle cx="382" cy="152" r="3" fill="#f43f5e"/>
          <circle cx="375" cy="175" r="3" fill="#f43f5e"/>
          <circle cx="382" cy="168" r="3" fill="#f43f5e"/>

          <!-- Dipole Moment Vector Arrow -->
          <defs>
            <marker id="arrow-dipole" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
            </marker>
          </defs>
          <line x1="210" y1="260" x2="330" y2="260" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrow-dipole)"/>
          <line x1="210" y1="253" x2="210" y2="267" stroke="#10b981" stroke-width="3"/>
          <text x="270" y="285" fill="#10b981" font-size="12" font-weight="800" text-anchor="middle">Dipole Moment μ ≈ 2.3 – 2.8 D (High Polarity)</text>
        </svg>
      </div>

      <div class="stage-control-panel">
        <div class="stage-prop-grid">
          <div class="prop-card">
            <span>Carbon Hybridization</span>
            <strong style="color: var(--accent-cyan);">sp² (Trigonal Planar)</strong>
          </div>
          <div class="prop-card">
            <span>C=O Bond Length</span>
            <strong style="color: var(--accent-blue);">1.23 Å (vs 1.43 Å C-O)</strong>
          </div>
          <div class="prop-card">
            <span>Electronegativity Diff</span>
            <strong style="color: var(--accent-rose);">ΔEN = 3.5 - 2.5 = 1.0</strong>
          </div>
          <div class="prop-card">
            <span>NEET Reactivity Rule</span>
            <strong style="color: var(--accent-amber);">Aldehydes > Ketones</strong>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Preparation Matrix of Aldehydes & Ketones
  renderPreparationMatrix() {
    this.updateStageMeta('Master Preparation Matrix', 'Click reagents to view mechanism & NCERT high-yield conditions', 'NCERT Sec 8.2');
    
    const reactions = {
      'rosenmund': {
        name: 'Rosenmund Reduction',
        rxn: 'R-COCl + H₂ ⟶ R-CHO + HCl',
        reagent: 'Pd - BaSO₄ (poisoned with quinoline or sulfur)',
        trap: 'CRITICAL NEET TRAP: BaSO₄ acts as a catalyst poison to prevent further reduction of aldehyde to primary alcohol. Formaldehyde cannot be prepared by this method because formyl chloride (HCOCl) is unstable at room temperature.',
        substrate: 'Acyl Chloride (Acid Chloride)'
      },
      'stephen': {
        name: 'Stephen Reaction',
        rxn: 'R-C≡N + SnCl₂ + HCl ⟶ R-CH=NH·HCl ⟶[H₃O⁺] R-CHO',
        reagent: 'SnCl₂ / dry HCl followed by H₃O⁺ hydrolysis',
        trap: 'DIBAL-H (Diisobutylaluminium hydride) also selectively reduces nitriles and esters to aldehydes at 195 K (-78°C).',
        substrate: 'Nitrile (Alkyl Cyanide)'
      },
      'etard': {
        name: 'Etard Reaction',
        rxn: 'Toluene + 2 CrO₂Cl₂ ⟶ Chromium complex ⟶[H₃O⁺] Benzaldehyde',
        reagent: 'Chromyl chloride (CrO₂Cl₂) in CS₂ or CCl₄ solvent',
        trap: 'Forms a brown chromium complex [C₆H₅CH(OCrOHCl₂)₂] which upon aqueous hydrolysis gives benzaldehyde without over-oxidation to benzoic acid.',
        substrate: 'Toluene (Methylbenzene)'
      },
      'gattermann': {
        name: 'Gattermann-Koch Reaction',
        rxn: 'Benzene + CO + HCl ⟶[anh. AlCl₃ / CuCl] Benzaldehyde',
        reagent: 'Carbon monoxide (CO) + HCl gas in presence of anhydrous AlCl₃ / CuCl',
        trap: 'Electrophile is formyl cation [H-C⁺=O] generated in situ. Excellent industrial synthesis for aromatic aldehydes.',
        substrate: 'Benzene / Arenes'
      },
      'ozonolysis': {
        name: 'Ozonolysis of Alkenes',
        rxn: '>C=C< + O₃ ⟶ Ozonide ⟶[Zn / H₂O] 2 >C=O',
        reagent: '1. O₃ (Ozone), 2. Zn dust / H₂O (reductive cleavage)',
        trap: 'Reductive workup with Zn dust prevents H₂O₂ from oxidizing aldehydes to carboxylic acids. If oxidative workup (H₂O₂), carboxylic acids form.',
        substrate: 'Alkenes'
      }
    };

    let activeKey = 'rosenmund';

    const renderReactionView = (key) => {
      const r = reactions[key];
      return `
        <div class="prep-rxn-display">
          <div class="prep-header-bar">
            <h4>${r.name}</h4>
            <span class="subject-pill chem">${r.substrate}</span>
          </div>
          <div class="chemical-equation-box">${r.rxn}</div>
          <div class="prep-reagent-row">
            <span>Catalyst & Reagent:</span>
            <strong>${r.reagent}</strong>
          </div>
          <div class="neet-trap-alert">
            <span style="font-size: 1.1rem;">⚠️</span>
            <p>${r.trap}</p>
          </div>
        </div>
      `;
    };

    this.visualStage.innerHTML = `
      <div class="stage-matrix-nav">
        <button class="stage-chip-btn active" data-rxn="rosenmund">Rosenmund</button>
        <button class="stage-chip-btn" data-rxn="stephen">Stephen / DIBAL-H</button>
        <button class="stage-chip-btn" data-rxn="etard">Etard (Toluene)</button>
        <button class="stage-chip-btn" data-rxn="gattermann">Gattermann-Koch</button>
        <button class="stage-chip-btn" data-rxn="ozonolysis">Ozonolysis</button>
      </div>
      <div id="prep-rxn-content-area">
        ${renderReactionView(activeKey)}
      </div>
    `;

    const btns = this.visualStage.querySelectorAll('.stage-chip-btn');
    btns.forEach(b => {
      b.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'));
        b.classList.add('active');
        const k = b.getAttribute('data-rxn');
        const area = document.getElementById('prep-rxn-content-area');
        if (area) area.innerHTML = renderReactionView(k);
        if (this.playAudio) this.playAudio('pop');
      });
    });
  }

  // 3. Nucleophilic Addition Reaction Mechanism
  renderNucleophilicAddition() {
    this.updateStageMeta('Nucleophilic Addition Mechanism', 'Step 1: Planar Nu attack ⟶ Step 2: Protonation', 'NCERT Sec 8.4.1');

    this.visualStage.innerHTML = `
      <div class="stage-svg-wrap">
        <svg viewBox="0 0 520 280" class="responsive-study-svg">
          <rect width="520" height="280" rx="14" fill="#090e1c"/>

          <!-- Step 1: Reactants -->
          <g id="mech-step-1" class="mech-step-group">
            <!-- Planar Carbonyl -->
            <line x1="80" y1="120" x2="140" y2="120" stroke="#38bdf8" stroke-width="5"/>
            <line x1="80" y1="128" x2="140" y2="128" stroke="#ec4899" stroke-width="3"/>
            <circle cx="80" cy="124" r="16" fill="#1e293b" stroke="#00f2fe" stroke-width="2"/>
            <text x="80" y="129" fill="#00f2fe" font-size="12" font-weight="900" text-anchor="middle">Cδ⁺</text>
            <circle cx="140" cy="124" r="16" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
            <text x="140" y="129" fill="#f43f5e" font-size="12" font-weight="900" text-anchor="middle">Oδ⁻</text>

            <!-- Nucleophile attacking from above (Nu⁻) -->
            <circle cx="80" cy="40" r="16" fill="#10b981" stroke="#34d399" stroke-width="2"/>
            <text x="80" y="45" fill="#070b14" font-size="11" font-weight="900" text-anchor="middle">Nu⁻</text>
            
            <!-- Curved Arrow -->
            <path d="M 80,58 Q 65,85 76,105" fill="none" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-dipole)"/>
            <text x="110" y="180" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">Planar sp² (120°)</text>
            <text x="110" y="196" fill="#00f2fe" font-size="10" font-weight="800" text-anchor="middle">Slow (Rate Determining)</text>
          </g>

          <!-- Reaction Arrow 1 -->
          <line x1="180" y1="124" x2="230" y2="124" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arrow-dipole)"/>
          <text x="205" y="112" fill="#94a3b8" font-size="10" font-weight="800" text-anchor="middle">Step 1</text>

          <!-- Step 2: Tetrahedral Alkoxide Intermediate -->
          <g id="mech-step-2" class="mech-step-group">
            <circle cx="280" cy="124" r="18" fill="#1e293b" stroke="#a855f7" stroke-width="2.5"/>
            <text x="280" y="129" fill="#a855f7" font-size="13" font-weight="900" text-anchor="middle">C</text>

            <line x1="280" y1="106" x2="280" y2="60" stroke="#10b981" stroke-width="3.5"/>
            <circle cx="280" cy="50" r="14" fill="#10b981"/>
            <text x="280" y="54" fill="#070b14" font-size="10" font-weight="800" text-anchor="middle">Nu</text>

            <line x1="298" y1="124" x2="335" y2="124" stroke="#f43f5e" stroke-width="3"/>
            <circle cx="345" cy="124" r="14" fill="#f43f5e"/>
            <text x="345" y="128" fill="#fff" font-size="11" font-weight="800" text-anchor="middle">O⁻</text>

            <line x1="270" y1="138" x2="245" y2="170" stroke="#64748b" stroke-width="3"/>
            <line x1="290" y1="138" x2="310" y2="170" stroke="#64748b" stroke-width="3"/>
            <text x="280" y="200" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">Tetrahedral sp³ (109.5°)</text>
          </g>

          <!-- Reaction Arrow 2 -->
          <line x1="380" y1="124" x2="420" y2="124" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arrow-dipole)"/>
          <text x="400" y="112" fill="#94a3b8" font-size="10" font-weight="800" text-anchor="middle">+ H⁺</text>

          <!-- Step 3: Neutral Addition Product -->
          <g id="mech-step-3" class="mech-step-group">
            <circle cx="470" cy="124" r="18" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
            <text x="470" y="129" fill="#10b981" font-size="13" font-weight="900" text-anchor="middle">C</text>

            <line x1="470" y1="106" x2="470" y2="60" stroke="#10b981" stroke-width="3"/>
            <circle cx="470" cy="50" r="12" fill="#10b981"/>
            <text x="470" y="54" fill="#070b14" font-size="9" font-weight="800" text-anchor="middle">Nu</text>

            <line x1="488" y1="124" x2="510" y2="124" stroke="#38bdf8" stroke-width="3"/>
            <text x="515" y="128" fill="#38bdf8" font-size="10" font-weight="800">OH</text>
            <text x="470" y="180" fill="#10b981" font-size="11" font-weight="800" text-anchor="middle">Addition Product</text>
          </g>
        </svg>
      </div>

      <div class="stage-control-panel">
        <h4 style="font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--accent-cyan);">Relative Reactivity Towards Nucleophilic Attack:</h4>
        <div class="reactivity-ladder-box">
          <span class="reactivity-tag high">HCHO (Formaldehyde)</span>
          <span style="color: var(--accent-cyan); font-weight: 800;">></span>
          <span class="reactivity-tag mid">CH₃CHO (Acetaldehyde)</span>
          <span style="color: var(--accent-cyan); font-weight: 800;">></span>
          <span class="reactivity-tag low">CH₃COCH₃ (Acetone)</span>
          <span style="color: var(--accent-cyan); font-weight: 800;">></span>
          <span class="reactivity-tag vlow">PhCHO (Benzaldehyde)</span>
        </div>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.5rem;">
          • <strong>Steric Reason</strong>: Bulky alkyl groups crowd the transition state.<br>
          • <strong>Electronic Reason</strong>: Alkyl (+I) groups disperse δ⁺ charge on carbon.
        </div>
      </div>
    `;
  }

  // 4. Distinction Tests Interactive Lab (Tollens, Fehling, Iodoform)
  renderDistinctionTests() {
    this.updateStageMeta('Interactive NEET Distinction Lab', 'Click test buttons to simulate live chemical transformations', 'NCERT Sec 8.4.3');

    this.visualStage.innerHTML = `
      <div class="distinction-lab-grid">
        <!-- Test 1: Tollens' Test -->
        <div class="test-tube-card" id="card-tollens">
          <div class="test-tube-viewport">
            <div class="test-tube-glass" id="tube-tollens">
              <div class="test-tube-liquid liquid-clear" id="liquid-tollens"></div>
              <div class="silver-mirror-layer" id="mirror-tollens"></div>
            </div>
          </div>
          <h4>Tollens' Test (Silver Mirror)</h4>
          <span class="test-formula">[Ag(NH₃)₂]⁺ OH⁻</span>
          <p class="test-note">Aldehydes oxidize to RCOO⁻ while Ag⁺ reduces to metallic silver mirror.</p>
          <button class="btn-test-action" id="btn-run-tollens">Add Aldehyde & Warm ➔</button>
        </div>

        <!-- Test 2: Fehling's Test -->
        <div class="test-tube-card" id="card-fehling">
          <div class="test-tube-viewport">
            <div class="test-tube-glass" id="tube-fehling">
              <div class="test-tube-liquid liquid-blue" id="liquid-fehling"></div>
              <div class="red-ppt-layer" id="ppt-fehling"></div>
            </div>
          </div>
          <h4>Fehling's Test (Cu²⁺ Reduction)</h4>
          <span class="test-formula">Fehling A + B (Alkaline Tartrate)</span>
          <p class="test-note">Aliphatic aldehydes give red Cu₂O ppt. Aromatic aldehydes (PhCHO) DO NOT react!</p>
          <button class="btn-test-action" id="btn-run-fehling">Add Aliphatic Aldehyde ➔</button>
        </div>

        <!-- Test 3: Iodoform Test -->
        <div class="test-tube-card" id="card-iodoform">
          <div class="test-tube-viewport">
            <div class="test-tube-glass" id="tube-iodoform">
              <div class="test-tube-liquid liquid-yellow" id="liquid-iodoform"></div>
              <div class="yellow-crystal-layer" id="ppt-iodoform"></div>
            </div>
          </div>
          <h4>Iodoform Test (CHI₃ Ppt)</h4>
          <span class="test-formula">I₂ + NaOH (NaOI)</span>
          <p class="test-note">Positive for CH₃-CO- or CH₃-CH(OH)- groups. Forms yellow antiseptic CHI₃.</p>
          <button class="btn-test-action" id="btn-run-iodoform">Test Acetone (CH₃COCH₃) ➔</button>
        </div>
      </div>
    `;

    // Button event listeners
    document.getElementById('btn-run-tollens')?.addEventListener('click', () => {
      const mirror = document.getElementById('mirror-tollens');
      const liquid = document.getElementById('liquid-tollens');
      if (mirror && liquid) {
        mirror.classList.toggle('active');
        liquid.style.background = mirror.classList.contains('active') ? '#64748b' : 'rgba(255,255,255,0.15)';
        if (this.playAudio) this.playAudio('correct');
      }
    });

    document.getElementById('btn-run-fehling')?.addEventListener('click', () => {
      const ppt = document.getElementById('ppt-fehling');
      const liquid = document.getElementById('liquid-fehling');
      if (ppt && liquid) {
        ppt.classList.toggle('active');
        liquid.style.background = ppt.classList.contains('active') ? '#b91c1c' : '#0284c7';
        if (this.playAudio) this.playAudio('correct');
      }
    });

    document.getElementById('btn-run-iodoform')?.addEventListener('click', () => {
      const ppt = document.getElementById('ppt-iodoform');
      const liquid = document.getElementById('liquid-iodoform');
      if (ppt && liquid) {
        ppt.classList.toggle('active');
        liquid.style.background = ppt.classList.contains('active') ? '#ca8a04' : '#fef08a';
        if (this.playAudio) this.playAudio('correct');
      }
    });
  }

  // 5. Aldol Condensation vs Cannizzaro Reaction
  renderAldolCannizzaro() {
    this.updateStageMeta('Aldol vs Cannizzaro Decision Pathway', 'Presence vs Absence of α-Hydrogen atoms', 'NCERT Sec 8.4.4');

    this.visualStage.innerHTML = `
      <div class="decision-tree-container">
        <div class="tree-root-box">
          <span style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700;">DECISION POINT:</span>
          <h4>Does Carbonyl Molecule Possess α-Hydrogen Atoms?</h4>
        </div>

        <div class="tree-branches-row">
          <!-- Branch A: Has α-Hydrogen -->
          <div class="tree-branch-card aldol">
            <div class="branch-badge" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">YES: Has α-H (CH₃CHO, Acetone)</div>
            <h3>Aldol Condensation</h3>
            <div class="tree-reagent-tag">Reagent: Dilute Base (dil. NaOH, Ba(OH)₂)</div>
            <div class="mechanism-steps-list">
              <div class="mech-step">
                <strong>Step 1:</strong> Base removes acidic α-H ⟶ Resonance stabilized Enolate ion.
              </div>
              <div class="mech-step">
                <strong>Step 2:</strong> Enolate attacks 2nd carbonyl molecule ⟶ β-Hydroxyaldehyde (Aldol).
              </div>
              <div class="mech-step">
                <strong>Step 3:</strong> Heating (-H₂O) ⟶ α,β-Unsaturated Aldehyde (But-2-enal).
              </div>
            </div>
            <div class="chemical-equation-box">2 CH₃CHO ⟶[dil. NaOH] CH₃-CH(OH)-CH₂-CHO ⟶[Δ, -H₂O] CH₃-CH=CH-CHO</div>
          </div>

          <!-- Branch B: NO α-Hydrogen -->
          <div class="tree-branch-card cannizzaro">
            <div class="branch-badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">NO: Zero α-H (HCHO, PhCHO)</div>
            <h3>Cannizzaro Reaction</h3>
            <div class="tree-reagent-tag">Reagent: Concentrated Base (50% NaOH / KOH)</div>
            <div class="mechanism-steps-list">
              <div class="mech-step">
                <strong>Self Oxidation-Reduction:</strong> Disproportionation reaction.
              </div>
              <div class="mech-step">
                <strong>1 Molecule Reduced:</strong> Alcohol (Methanol / Benzyl alcohol).
              </div>
              <div class="mech-step">
                <strong>1 Molecule Oxidized:</strong> Salt of carboxylic acid (HCOONa / PhCOONa).
              </div>
            </div>
            <div class="chemical-equation-box">2 HCHO + conc. NaOH ⟶ CH₃OH (Methanol) + HCOONa (Sodium Formate)</div>
          </div>
        </div>
      </div>
    `;
  }

  // 6. Carboxylic Acids Dimer Structure & Hydrogen Bonding
  renderCarboxylicDimer() {
    this.updateStageMeta('Carboxylic Acid Cyclic Dimerization', '8-Membered ring formed by 2 strong hydrogen bonds', 'NCERT Sec 8.6.2');

    this.visualStage.innerHTML = `
      <div class="stage-svg-wrap">
        <svg viewBox="0 0 540 260" class="responsive-study-svg">
          <rect width="540" height="260" rx="14" fill="#090e1c"/>

          <!-- Left Carboxylic Acid Molecule -->
          <text x="70" y="135" fill="#fff" font-size="16" font-weight="800">R</text>
          <line x1="88" y1="130" x2="140" y2="130" stroke="#94a3b8" stroke-width="4"/>

          <circle cx="150" cy="130" r="18" fill="#1e293b" stroke="#00f2fe" stroke-width="2.5"/>
          <text x="150" y="135" fill="#00f2fe" font-size="14" font-weight="900" text-anchor="middle">C</text>

          <!-- Top Carbonyl O of Left Molecule -->
          <line x1="150" y1="112" x2="150" y2="65" stroke="#f43f5e" stroke-width="4"/>
          <circle cx="150" cy="55" r="14" fill="#f43f5e"/>
          <text x="150" y="60" fill="#fff" font-size="11" font-weight="800" text-anchor="middle">O</text>

          <!-- Bottom Hydroxyl of Left Molecule -->
          <line x1="150" y1="148" x2="150" y2="195" stroke="#38bdf8" stroke-width="3"/>
          <text x="140" y="210" fill="#38bdf8" font-size="13" font-weight="800">O — H</text>

          <!-- Right Carboxylic Acid Molecule (Inverted) -->
          <circle cx="390" cy="130" r="18" fill="#1e293b" stroke="#00f2fe" stroke-width="2.5"/>
          <text x="390" y="135" fill="#00f2fe" font-size="14" font-weight="900" text-anchor="middle">C</text>
          <line x1="408" y1="130" x2="460" y2="130" stroke="#94a3b8" stroke-width="4"/>
          <text x="470" y="135" fill="#fff" font-size="16" font-weight="800">R</text>

          <!-- Top Hydroxyl of Right Molecule -->
          <line x1="390" y1="112" x2="390" y2="65" stroke="#38bdf8" stroke-width="3"/>
          <text x="375" y="60" fill="#38bdf8" font-size="13" font-weight="800">H — O</text>

          <!-- Bottom Carbonyl O of Right Molecule -->
          <line x1="390" y1="148" x2="390" y2="195" stroke="#f43f5e" stroke-width="4"/>
          <circle cx="390" cy="205" r="14" fill="#f43f5e"/>
          <text x="390" y="210" fill="#fff" font-size="11" font-weight="800" text-anchor="middle">O</text>

          <!-- Intermolecular Hydrogen Bond Top -->
          <line x1="170" y1="55" x2="370" y2="55" stroke="#10b981" stroke-width="3" stroke-dasharray="5,4"/>
          <text x="270" y="45" fill="#10b981" font-size="11" font-weight="800" text-anchor="middle">H-Bond (O···H)</text>

          <!-- Intermolecular Hydrogen Bond Bottom -->
          <line x1="190" y1="205" x2="370" y2="205" stroke="#10b981" stroke-width="3" stroke-dasharray="5,4"/>
          <text x="270" y="225" fill="#10b981" font-size="11" font-weight="800" text-anchor="middle">H-Bond (H···O)</text>

          <rect x="210" y="110" width="120" height="36" rx="8" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981"/>
          <text x="270" y="132" fill="#10b981" font-size="11" font-weight="800" text-anchor="middle">8-Membered Ring</text>
        </svg>
      </div>

      <div class="stage-control-panel">
        <div class="stage-prop-grid">
          <div class="prop-card">
            <span>Boiling Point Effect</span>
            <strong style="color: var(--accent-emerald);">Higher than Alcohols</strong>
          </div>
          <div class="prop-card">
            <span>Acetic Acid B.P.</span>
            <strong style="color: var(--accent-cyan);">118°C (vs Ethanol 78°C)</strong>
          </div>
          <div class="prop-card">
            <span>Dimerization Solvent</span>
            <strong style="color: var(--accent-amber);">Vapour state & Benzene</strong>
          </div>
          <div class="prop-card">
            <span>Molecular Mass</span>
            <strong style="color: var(--accent-purple);">Apparent mass = 2× (120 g/mol)</strong>
          </div>
        </div>
      </div>
    `;
  }

  // 7. Carboxylic Acid Acidity Ladder & pKa Ranking
  renderAcidityLadder() {
    this.updateStageMeta('Acidity Ladder & Resonance Stabilization', 'Lower pKa = Stronger Acid. Electron withdrawing groups increase acidity', 'NCERT Sec 8.6.4');

    const acids = [
      { name: 'Trichloroacetic Acid (CCl₃COOH)', pka: 0.65, strength: 'Extremely Strong', color: '#ef4444' },
      { name: 'Dichloroacetic Acid (CHCl₂COOH)', pka: 1.29, strength: 'Very Strong', color: '#f97316' },
      { name: 'Fluoroacetic Acid (CH₂FCOOH)', pka: 2.59, strength: 'Strong (-I effect)', color: '#f59e0b' },
      { name: 'Chloroacetic Acid (CH₂ClCOOH)', pka: 2.87, strength: 'Strong', color: '#eab308' },
      { name: 'Formic Acid (HCOOH)', pka: 3.75, strength: 'Moderate (No +I alkyl)', color: '#84cc16' },
      { name: 'Benzoic Acid (C₆H₅COOH)', pka: 4.19, strength: 'Moderate', color: '#10b981' },
      { name: 'Acetic Acid (CH₃COOH)', pka: 4.76, strength: 'Weak (+I of CH₃)', color: '#06b6d4' },
      { name: 'Phenol (C₆H₅OH)', pka: 10.0, strength: 'Very Weak (pKa 10)', color: '#a855f7' },
      { name: 'Ethanol (C₂H₅OH)', pka: 16.0, strength: 'Neutral/Extremely Weak', color: '#64748b' }
    ];

    this.visualStage.innerHTML = `
      <div class="acidity-ladder-card">
        <div style="margin-bottom: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
          <strong>Resonance Stabilization of Carboxylate Ion:</strong>
          Two equivalent resonance structures with negative charge delocalized symmetrically over both oxygen atoms (hybrid C-O bond order = 1.5).
        </div>

        <div class="acidity-bars-container">
          ${acids.map(a => `
            <div class="acid-bar-item">
              <div class="acid-bar-label">
                <span>${a.name}</span>
                <strong style="color: ${a.color};">pKa: ${a.pka}</strong>
              </div>
              <div class="acid-bar-track">
                <div class="acid-bar-fill" style="width: ${Math.max(5, (18 - a.pka) / 18 * 100)}%; background: ${a.color};"></div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.75rem;">
          <span style="font-size: 1.1rem;">💡</span>
          <p><strong>NEET Golden Rule:</strong> Acidity ∝ -I / -M effect ∝ 1 / pKa ∝ Ka. Electron withdrawing groups (-NO₂ > -CN > -F > -Cl > -Br > -I > -Ph) stabilize carboxylate ion.</p>
        </div>
      </div>
    `;
  }

  // 8. HVZ & Decarboxylation Reactions
  renderHvzDecarboxylation() {
    this.updateStageMeta('Special Reactions: HVZ & Decarboxylation', 'Hell-Volhard-Zelinsky α-halogenation and Kolbe / Soda-lime pathways', 'NCERT Sec 8.6.5');

    this.visualStage.innerHTML = `
      <div class="special-rxn-grid">
        <div class="rxn-card-item">
          <div class="rxn-card-badge">Hell-Volhard-Zelinsky (HVZ)</div>
          <h4>α-Halogenation of Carboxylic Acids</h4>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin: 0.4rem 0;">
            Requires at least ONE α-hydrogen atom. Reagent: <strong>X₂ / Red Phosphorus</strong> followed by H₂O workup.
          </p>
          <div class="chemical-equation-box">R-CH₂-COOH + Br₂ ⟶[Red P / H₂O] R-CH(Br)-COOH (α-Bromo Acid)</div>
          <div style="font-size: 0.72rem; color: #f59e0b; margin-top: 0.35rem;">
            ⚠️ Formic acid (HCOOH) and Benzoic acid (C₆H₅COOH) DO NOT undergo HVZ because they lack α-hydrogens!
          </div>
        </div>

        <div class="rxn-card-item">
          <div class="rxn-card-badge">Decarboxylation</div>
          <h4>Soda-Lime Decarboxylation</h4>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin: 0.4rem 0;">
            Reagent: <strong>Soda-lime (NaOH + CaO in 3:1 ratio)</strong> with heat.
          </p>
          <div class="chemical-equation-box">R-COONa + NaOH ⟶[CaO, Δ] R-H (Alkane with 1 less carbon) + Na₂CO₃</div>
          <div style="font-size: 0.72rem; color: #38bdf8; margin-top: 0.35rem;">
            📌 CaO keeps NaOH dry (hygroscopic protection) and lowers the fusing temperature.
          </div>
        </div>
      </div>
    `;
  }

  updateStageMeta(title, subtitle, badge) {
    if (this.stageTitle) this.stageTitle.textContent = title;
    if (this.stageSubtitle) this.stageSubtitle.textContent = subtitle;
    if (this.stageBadge) this.stageBadge.textContent = badge;
  }

  // =========================================================================
  // INTERACTIVE CHECKPOINT QUIZZES
  // Instant recall quizzes embedded inside study notes
  // =========================================================================
  setupCheckpointQuizzes() {
    const quizContainers = document.querySelectorAll('.study-checkpoint-card');
    quizContainers.forEach(container => {
      const options = container.querySelectorAll('.study-opt-btn');
      const feedback = container.querySelector('.study-chk-feedback');

      options.forEach(opt => {
        opt.addEventListener('click', () => {
          const isCorrect = opt.getAttribute('data-correct') === 'true';
          options.forEach(o => {
            o.disabled = true;
            if (o.getAttribute('data-correct') === 'true') {
              o.classList.add('correct');
            } else if (o === opt) {
              o.classList.add('wrong');
            }
          });

          if (feedback) {
            feedback.style.display = 'block';
            feedback.className = `study-chk-feedback ${isCorrect ? 'correct' : 'wrong'}`;
            feedback.innerHTML = isCorrect ? 
              `<strong>✓ Correct!</strong> ${container.getAttribute('data-explanation') || 'Well done!'}` :
              `<strong>✕ Incorrect!</strong> ${container.getAttribute('data-explanation') || 'Review NCERT notes above.'}`;
          }

          if (this.playAudio) this.playAudio(isCorrect ? 'correct' : 'wrong');
        });
      });
    });
  }
}
