// ==========================================================================
// Class 12 Medical Hub - Multi-Chapter Scrollytelling Engine
// Chapters: 6 (Haloalkanes), 7 (Alcohols/Phenols/Ethers), 8 (Carbonyls),
// 9 (Amines), 10 (Biomolecules)
// ==========================================================================

import { DiagramsCh7 } from './diagramsCh7.js';
import { DiagramsCh9 } from './diagramsCh9.js';
import { DiagramsCh10 } from './diagramsCh10.js';
import { DiagramsPhysics } from './diagramsPhysics.js';
import { DiagramsBiology } from './diagramsBiology.js';
import { DiagramsChemistryExtra } from './diagramsChemistryExtra.js';

export class StudyHub {
  constructor() {
    this.visualStage = document.getElementById('study-visual-stage');
    this.stageTitle = document.getElementById('study-stage-title');
    this.stageSubtitle = document.getElementById('study-stage-subtitle');
    this.stageBadge = document.getElementById('study-stage-badge');
    
    this.currentChapter = 'ch6';
    this.currentDiagramId = 'ch6-classification';
    this.observer = null;
    this.playAudio = null;

    // Module instances
    this.diagramsCh7 = new DiagramsCh7(this);
    this.diagramsCh9 = new DiagramsCh9(this);
    this.diagramsCh10 = new DiagramsCh10(this);
    this.diagramsPhysics = new DiagramsPhysics(this);
    this.diagramsBiology = new DiagramsBiology(this);
    this.diagramsChemExtra = new DiagramsChemistryExtra(this);

    // Chapter Metadata (Physics, Chemistry & Biology - 15 Chapters)
    this.chapterMeta = {
      // ===== PHYSICS =====
      'phy-currelec': {
        title: 'Class 12 Physics — Current Electricity',
        desc: 'Drift velocity vd, mobility, microscopic Ohm\'s law, temperature coefficients (metals vs semiconductors), series/parallel cells, Kirchhoff\'s circuit rules, and Wheatstone & Meter Bridge.',
        defaultDiagram: 'phy-ce-drift',
        subject: 'physics'
      },
      'phy-magcharge': {
        title: 'Class 12 Physics — Moving Charges and Magnetism',
        desc: 'Lorentz force, circular & helical motion, cyclotron accelerator, parallel wire forces, torque on current loop, moving coil galvanometer conversions, Biot-Savart and Ampere\'s circuital law.',
        defaultDiagram: 'phy-mc-lorentz',
        subject: 'physics'
      },
      'phy-magmatter': {
        title: 'Class 12 Physics — Magnetism and Matter',
        desc: 'Short bar magnet axial and equatorial fields (B_axial = 2 B_eq), magnetic dipole potential energy, Earth\'s magnetic elements (BH, BV, dip angle), Dia/Para/Ferro comparison, and Hysteresis loop.',
        defaultDiagram: 'phy-mm-dipole',
        subject: 'physics'
      },
      'phy-emi': {
        title: 'Class 12 Physics — Electromagnetic Induction',
        desc: 'Faraday\'s laws, Lenz\'s law & energy conservation, motional EMF (Blv), eddy currents & magnetic damping, self and mutual inductance of solenoids, and AC generator sinusoidal derivation (e = e₀ sin ωt).',
        defaultDiagram: 'phy-emi-faraday',
        subject: 'physics'
      },

      // ===== CHEMISTRY =====
      'ch6': {
        title: 'Chapter 6: Haloalkanes and Haloarenes',
        desc: 'Master NCERT, CBSE Board theory, and NEET high-yield concepts with split-screen scrollytelling. Dynamic 2D/3D interactive visual stages update automatically on the left as you read!',
        defaultDiagram: 'ch6-classification',
        subject: 'chemistry'
      },
      'ch7': {
        title: 'Chapter 7: Alcohols, Phenols and Ethers',
        desc: 'In-depth NCERT coverage of 1°/2°/3° alcohols, Lucas test, Grignard synthesis, Saytzeff dehydration, Phenol resonance & acidity (why NaHCO₃ fails), Kolbe, Reimer-Tiemann, and Williamson ether cleavage.',
        defaultDiagram: 'ch7-classification',
        subject: 'chemistry'
      },
      'ch8': {
        title: 'Chapter 8: Aldehydes, Ketones and Carboxylic Acids',
        desc: 'Planar sp² carbonyl group, Rosenmund/Stephen preparations, Nucleophilic addition, Tollens/Fehling/Iodoform tests, Aldol condensation, Cannizzaro, and Carboxylic acid acidity ladder.',
        defaultDiagram: 'carbonyl-structure',
        subject: 'chemistry'
      },
      'ch9': {
        title: 'Chapter 9: Amines & Diazonium Salts',
        desc: 'Pyramidal nitrogen inversion, Master Basicity Ladder (213 vs 231 vs gas phase), Gabriel Phthalimide, Hofmann Bromamide (1 less carbon), Carbylamine test, Hinsberg distinction, and Azo dye coupling.',
        defaultDiagram: 'ch9-classification',
        subject: 'chemistry'
      },
      'ch10': {
        title: 'Chapter 10: Biomolecules',
        desc: 'D-Glucose open-chain proof, Haworth cyclic pyranose structures, Anomeric carbon & Mutarotation, Invert sugar, Starch vs Cellulose, Zwitterion & pI, Protein 1°–4° structure & Denaturation, and DNA double helix.',
        defaultDiagram: 'ch10-glucose-structure',
        subject: 'chemistry'
      },
      'chem-kinetics': {
        title: 'Chemistry — Chemical Kinetics',
        desc: 'Average & instantaneous reaction rates, experimental rate law, order vs molecularity, zero & first-order integrated rate equations, half-life formulas, and Arrhenius activation energy profile.',
        defaultDiagram: 'chem-kin-order',
        subject: 'chemistry'
      },
      'chem-coordination': {
        title: 'Chemistry — Coordination Compounds',
        desc: 'Werner\'s primary & secondary valencies, ligand denticity & chelate effect, systematic IUPAC nomenclature, structural & stereoisomerism (cisplatin), VBT hybridisation, and Crystal Field Theory (CFT) octahedral & tetrahedral splitting.',
        defaultDiagram: 'chem-coord-cft',
        subject: 'chemistry'
      },

      // ===== BIOLOGY =====
      'bio-bot2': {
        title: 'Botany Chapter 2: Principles of Inheritance and Variation',
        desc: 'Mendel\'s 7 pairs of contrasting traits, monohybrid (3:1, 1:2:1) & dihybrid (9:3:3:1) crosses, test cross, Sutton-Boveri chromosomal theory, Morgan\'s Drosophila linkage & recombination, sex determination, and Mendelian & chromosomal disorders.',
        defaultDiagram: 'bio-inh-traits',
        subject: 'biology'
      },
      'bio-bot3': {
        title: 'Botany Chapter 3: Molecular Basis of Inheritance',
        desc: 'DNA genetic material proof (Griffith, Hershey-Chase), Watson-Crick B-DNA geometry & Chargaff rules, nucleosome packaging, semiconservative replication (Meselson-Stahl), transcription & splicing, genetic code, translation, Lac Operon, HGP, and DNA fingerprinting.',
        defaultDiagram: 'bio-mol-dna',
        subject: 'biology'
      },
      'bio-zoo2': {
        title: 'Zoology Chapter 2: Reproductive Health',
        desc: 'WHO reproductive health concept, population explosion control, natural, barrier & surgical contraception, IUD categories (Lippes, Cu-T, LNG-20), oral pill Saheli, MTP Act 1971, STIs, and Assisted Reproductive Technologies (IVF, ZIFT, IUT, GIFT, ICSI, IUI).',
        defaultDiagram: 'bio-rh-methods',
        subject: 'biology'
      },
      'bio-zoo3': {
        title: 'Zoology Chapter 3: Evolution',
        desc: 'Chemical evolution & Miller-Urey experiment, paleontological & comparative anatomical evidence (homology vs analogy), Darwin\'s natural selection & adaptive radiation (finches, marsupials), Hardy-Weinberg equilibrium, and full human evolution sequence.',
        defaultDiagram: 'bio-evo-homology',
        subject: 'biology'
      }
    };

    // Interactive State Variables (Chapter 6)
    this.snMechanismMode = 'sn2';
    this.cxBondSelected = 'cl';
    this.ambidentSelected = 'cn';
    this.saytzeffBase = 'etoh';

    // Interactive State Variables (Chapter 8)
    this.currentTollensState = 'unmixed';
    this.currentFehlingState = 'unmixed';
    this.currentIodoformState = 'unmixed';

    this.init();
  }

  setAudioCallback(fn) {
    this.playAudio = fn;
  }

  init() {
    this.setupChapterSwitcher();
    this.setupCatalogControls();
    this.setupScrollObserver();
    this.setupQuickIndex();
    this.renderDiagram(this.currentDiagramId);
    this.setupCheckpointQuizzes();
    this.setupMobileControls();
    this.setupSubjectFilters();
  }

  // =========================================================================
  // CHAPTER CATALOG CONTROLS & SUBPAGE NAVIGATION
  // =========================================================================
  setupCatalogControls() {
    const openBtn = document.getElementById('btn-open-catalog');
    const closeBtn = document.getElementById('btn-close-catalog');
    const catalogSubpage = document.getElementById('chapter-catalog-subpage');
    const readingLayout = document.getElementById('chapter-reading-layout');

    openBtn?.addEventListener('click', () => {
      if (this.playAudio) this.playAudio('pop');
      if (catalogSubpage) catalogSubpage.style.display = 'block';
      if (readingLayout) readingLayout.style.display = 'none';
      catalogSubpage?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    closeBtn?.addEventListener('click', () => {
      if (this.playAudio) this.playAudio('pop');
      if (catalogSubpage) catalogSubpage.style.display = 'none';
      if (readingLayout) readingLayout.style.display = 'grid';
      readingLayout?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Card launch buttons inside catalog subpage
    const launchBtns = document.querySelectorAll('.card-launch-btn, .catalog-chapter-card');
    launchBtns.forEach(el => {
      el.addEventListener('click', (e) => {
        // Prevent double trigger if clicking button inside card
        const chId = el.getAttribute('data-chapter');
        if (chId) {
          this.switchChapter(chId);
          if (catalogSubpage) catalogSubpage.style.display = 'none';
          if (readingLayout) readingLayout.style.display = 'grid';
          readingLayout?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // =========================================================================
  // CHAPTER SWITCHER (Chapters 6, 7, 8, 9, 10)
  // Ensures ONLY the selected chapter's reading content & nav appear!
  // =========================================================================
  // =========================================================================
  // SUBJECT FILTERING FOR CHAPTER BUTTONS & CATALOG
  // =========================================================================
  setupSubjectFilters() {
    const filterBtns = document.querySelectorAll('.study-subj-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subj = btn.getAttribute('data-subj-filter');
        this.filterSubject(subj);
      });
    });
  }

  filterSubject(subj) {
    if (this.playAudio) this.playAudio('pop');

    // Update filter buttons
    const filterBtns = document.querySelectorAll('.study-subj-filter-btn');
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-subj-filter') === subj);
    });

    // Filter chapter selector buttons
    const chBtns = document.querySelectorAll('.study-ch-btn');
    chBtns.forEach(btn => {
      const btnSubj = btn.getAttribute('data-subject');
      const isVisible = (subj === 'all' || btnSubj === subj);
      btn.style.display = isVisible ? 'inline-flex' : 'none';
    });

    // Filter catalog cards
    const catalogCards = document.querySelectorAll('.catalog-chapter-card');
    catalogCards.forEach(card => {
      const cardSubj = card.getAttribute('data-subject');
      const isVisible = (subj === 'all' || cardSubj === subj);
      card.style.display = isVisible ? 'block' : 'none';
    });

    // If current chapter is filtered out, switch to first of selected subject
    const currentMeta = this.chapterMeta[this.currentChapter];
    if (subj !== 'all' && currentMeta && currentMeta.subject !== subj) {
      if (subj === 'physics') this.switchChapter('phy-currelec');
      else if (subj === 'chemistry') this.switchChapter('ch6');
      else if (subj === 'biology') this.switchChapter('bio-bot2');
    }
  }

  setupChapterSwitcher() {
    const chBtns = document.querySelectorAll('.study-ch-btn');
    chBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const chId = btn.getAttribute('data-chapter');
        this.switchChapter(chId);
      });
    });
  }

  switchChapter(chId) {
    if (!chId) return;
    this.currentChapter = chId;
    if (this.playAudio) this.playAudio('pop');

    // Update active pill button state
    const chBtns = document.querySelectorAll('.study-ch-btn');
    chBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-chapter') === chId);
    });

    // Update chapter title, description and breadcrumb in banner
    const meta = this.chapterMeta[chId];
    const bannerTitle = document.getElementById('study-active-chapter-title');
    const bannerDesc = document.getElementById('study-active-chapter-desc');
    if (bannerTitle && meta) bannerTitle.textContent = meta.title;
    if (bannerDesc && meta) bannerDesc.textContent = meta.desc;

    const breadcrumb = document.querySelector('.study-breadcrumb');
    if (breadcrumb && meta) {
      const subjTitle = meta.subject === 'physics' ? 'Physics Grade 12'
        : meta.subject === 'biology' ? 'Biology Grade 12 (Botany & Zoology)'
        : 'Chemistry Grade 12';
      breadcrumb.innerHTML = `
        <span>${subjTitle}</span>
        <span class="sep">/</span>
        <span>NCERT &amp; CBSE Board</span>
        <span class="sep">/</span>
        <span style="color: var(--accent-cyan); font-weight: 700;">Class 12 Medical Hub</span>
      `;
    }

    // Toggle Chapter Content Containers (ONLY active chapter is displayed)
    const allChapters = [
      'phy-currelec', 'phy-magcharge', 'phy-magmatter', 'phy-emi',
      'ch6', 'ch7', 'ch8', 'ch9', 'ch10', 'chem-kinetics', 'chem-coordination',
      'bio-bot2', 'bio-bot3', 'bio-zoo2', 'bio-zoo3'
    ];
    allChapters.forEach(c => {
      const containerId = (c.startsWith('phy-') || c.startsWith('bio-') || c.startsWith('chem-'))
        ? `chapter-${c}-container`
        : `chapter-${c.replace('ch', '')}-container`;
      const container = document.getElementById(containerId);
      const navBar = document.getElementById(`quick-nav-${c}`);
      
      const isCurrent = (c === chId);
      if (container) container.style.display = isCurrent ? 'block' : 'none';
      if (navBar) navBar.style.display = isCurrent ? 'flex' : 'none';
    });

    // Ensure catalog is closed and reading view is visible
    const catalogSubpage = document.getElementById('chapter-catalog-subpage');
    const readingLayout = document.getElementById('chapter-reading-layout');
    if (catalogSubpage) catalogSubpage.style.display = 'none';
    if (readingLayout) readingLayout.style.display = 'grid';

    // Switch visual diagram to chapter default
    if (meta && meta.defaultDiagram) {
      this.switchDiagram(meta.defaultDiagram);
    }

    // Scroll smoothly to top of study layout
    const studySection = document.getElementById('view-study');
    studySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Rebind scroll observer to the active chapter's sections
    setTimeout(() => {
      this.setupScrollObserver();
      this.setupCheckpointQuizzes();
    }, 60);
  }

  // =========================================================================
  // SCROLLYTELLING INTERSECTION OBSERVER
  // Binds right-column text scroll to left-column visual diagram
  // =========================================================================
  setupScrollObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }

    // Only observe sections inside the currently active chapter container
    const containerId = (this.currentChapter.startsWith('phy-') || this.currentChapter.startsWith('bio-') || this.currentChapter.startsWith('chem-'))
      ? `chapter-${this.currentChapter}-container`
      : `chapter-${this.currentChapter.replace('ch', '')}-container`;
    const activeContainer = document.getElementById(containerId);

    if (!activeContainer) return;
    const studySections = activeContainer.querySelectorAll('.study-topic-block');
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
  // DYNAMIC VISUAL STAGE DISPATCHER
  // =========================================================================
  renderDiagram(diagramId) {
    if (!this.visualStage) return;

    switch (diagramId) {
      // Chapter 6 Visuals
      case 'ch6-classification':
        this.renderCh6Classification();
        break;
      case 'ch6-cx-bond':
        this.renderCh6CxBond();
        break;
      case 'ch6-prep-alcohols':
        this.renderCh6PrepAlcohols();
        break;
      case 'ch6-prep-hydrocarbons':
        this.renderCh6PrepHydrocarbons();
        break;
      case 'ch6-halogen-exchange':
        this.renderCh6HalogenExchange();
        break;
      case 'ch6-physical-props':
        this.renderCh6PhysicalProps();
        break;
      case 'ch6-ambident-nu':
        this.renderCh6AmbidentNu();
        break;
      case 'ch6-stereochem-sn':
        this.renderCh6StereochemSn();
        break;
      case 'ch6-elimination-saytzeff':
        this.renderCh6EliminationSaytzeff();
        break;
      case 'ch6-haloarene-reactivity':
        this.renderCh6HaloareneReactivity();
        break;
      case 'ch6-polyhalogen':
        this.renderCh6Polyhalogen();
        break;

      // Chapter 7 Visuals (Alcohols, Phenols and Ethers)
      case 'ch7-classification':
        this.diagramsCh7.renderClassification();
        break;
      case 'ch7-grignard':
        this.diagramsCh7.renderGrignardSynthesis();
        break;
      case 'ch7-lucas-test':
        this.diagramsCh7.renderLucasTest();
        break;
      case 'ch7-dehydration':
        this.diagramsCh7.renderDehydration();
        break;
      case 'ch7-phenol-acidity':
        this.diagramsCh7.renderPhenolAcidity();
        break;
      case 'ch7-kolbe-reimer':
        this.diagramsCh7.renderKolbeReimer();
        break;
      case 'ch7-williamson-cleavage':
        this.diagramsCh7.renderWilliamsonCleavage();
        break;

      // Chapter 8 Visuals (Aldehydes, Ketones and Carboxylic Acids)
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

      // Chapter 9 Visuals (Amines & Diazonium Salts)
      case 'ch9-classification':
        this.diagramsCh9.renderClassificationStructure();
        break;
      case 'ch9-basicity-ladder':
        this.diagramsCh9.renderBasicityLadder();
        break;
      case 'ch9-hinsberg-test':
        this.diagramsCh9.renderHinsbergTest();
        break;
      case 'ch9-diazonium-reactions':
        this.diagramsCh9.renderDiazoniumReactions();
        break;
      case 'ch9-gabriel-hofmann':
        this.diagramsCh9.renderGabrielHofmann();
        break;

      // Chapter 10 Visuals (Biomolecules)
      case 'ch10-glucose-structure':
        this.diagramsCh10.renderGlucoseStructure();
        break;
      case 'ch10-disaccharides':
        this.diagramsCh10.renderDisaccharides();
        break;
      case 'ch10-amino-acids-zwitterion':
        this.diagramsCh10.renderAminoAcidsZwitterion();
        break;
      case 'ch10-protein-structure':
        this.diagramsCh10.renderProteinStructure();
        break;
      case 'ch10-dna-rna':
        this.diagramsCh10.renderDnaRnaDoubleHelix();
        break;
      default:
        // Physics Visual Dispatches
        if (diagramId.startsWith('phy-ce')) {
          this.diagramsPhysics.renderCurrentElectricity(diagramId === 'phy-ce-bridge' ? 'bridge' : (diagramId === 'phy-ce-temp' ? 'temp' : 'drift'));
          break;
        }
        if (diagramId.startsWith('phy-mc')) {
          this.diagramsPhysics.renderMovingCharges(diagramId === 'phy-mc-wires' ? 'wires' : (diagramId === 'phy-mc-galv' ? 'galv' : 'lorentz'));
          break;
        }
        if (diagramId.startsWith('phy-mm')) {
          this.diagramsPhysics.renderMagnetismMatter(diagramId === 'phy-mm-earth' ? 'earth' : (diagramId === 'phy-mm-materials' ? 'materials' : 'dipole'));
          break;
        }
        if (diagramId.startsWith('phy-emi')) {
          this.diagramsPhysics.renderEMI(diagramId === 'phy-emi-motional' ? 'motional' : (diagramId === 'phy-emi-generator' ? 'generator' : 'faraday'));
          break;
        }

        // Biology Visual Dispatches
        if (diagramId.startsWith('bio-inh')) {
          this.diagramsBiology.renderInheritance(diagramId === 'bio-inh-ratios' ? 'ratios' : (diagramId === 'bio-inh-disorders' ? 'disorders' : 'traits'));
          break;
        }
        if (diagramId.startsWith('bio-mol')) {
          this.diagramsBiology.renderMolecularBasis(diagramId === 'bio-mol-operon' ? 'operon' : (diagramId === 'bio-mol-expts' ? 'expts' : 'dna'));
          break;
        }
        if (diagramId.startsWith('bio-rh')) {
          this.diagramsBiology.renderReproductiveHealth(diagramId === 'bio-rh-art' ? 'art' : (diagramId === 'bio-rh-stis' ? 'stis' : 'methods'));
          break;
        }
        if (diagramId.startsWith('bio-evo')) {
          this.diagramsBiology.renderEvolution(diagramId === 'bio-evo-hw' ? 'hw' : (diagramId === 'bio-evo-human' ? 'human' : 'homology'));
          break;
        }

        // Chemistry Extra Visual Dispatches
        if (diagramId.startsWith('chem-kin')) {
          this.diagramsChemExtra.renderChemicalKinetics(diagramId === 'chem-kin-halflife' ? 'halflife' : (diagramId === 'chem-kin-arrhenius' ? 'arrhenius' : 'order'));
          break;
        }
        if (diagramId.startsWith('chem-coord')) {
          this.diagramsChemExtra.renderCoordinationCompounds(diagramId === 'chem-coord-werner' ? 'werner' : (diagramId === 'chem-coord-isomers' ? 'isomers' : 'cft'));
          break;
        }

        if (this.currentChapter === 'ch6') {
          this.renderCh6Classification();
        } else {
          this.renderCarbonylStructure();
        }
    }
  }

  // =========================================================================
  // CHAPTER 6 DIAGRAM RENDERING METHODS
  // =========================================================================

  // 1. Classification Matrix & Hybridization States
  renderCh6Classification() {
    this.updateStageMeta('Haloalkane & Haloarene Classification', 'sp³ vs sp² hybridized carbon holding halogen (X)', 'NCERT Sec 6.1');
    this.visualStage.innerHTML = `
      <div class="stage-svg-wrap">
        <svg viewBox="0 0 540 280" class="responsive-study-svg">
          <rect width="540" height="280" rx="14" fill="#090e1c"/>
          
          <!-- Column 1: sp³ C-X -->
          <g transform="translate(20, 20)">
            <rect width="240" height="240" rx="10" fill="rgba(0, 242, 254, 0.05)" stroke="rgba(0, 242, 254, 0.3)" stroke-width="1.5"/>
            <text x="120" y="26" fill="#00f2fe" font-size="13" font-weight="800" text-anchor="middle">sp³ C — X Classification</text>
            
            <!-- Type 1: Alkyl Halide -->
            <rect x="15" y="42" width="210" height="52" rx="6" fill="#131e33" stroke="rgba(255,255,255,0.08)"/>
            <text x="25" y="60" fill="#38bdf8" font-size="11" font-weight="700">1. Alkyl Halide (Haloalkane)</text>
            <text x="25" y="78" fill="#94a3b8" font-size="9.5" font-family="var(--font-mono)">R—CH₂—X (1°), R₂CH—X (2°), R₃C—X (3°)</text>

            <!-- Type 2: Allylic Halide -->
            <rect x="15" y="104" width="210" height="52" rx="6" fill="#131e33" stroke="rgba(255,255,255,0.08)"/>
            <text x="25" y="122" fill="#10b981" font-size="11" font-weight="700">2. Allylic Halide</text>
            <text x="25" y="140" fill="#94a3b8" font-size="9.5" font-family="var(--font-mono)">CH₂=CH—CH₂—X (Adjacent to C=C)</text>

            <!-- Type 3: Benzylic Halide -->
            <rect x="15" y="166" width="210" height="52" rx="6" fill="#131e33" stroke="rgba(255,255,255,0.08)"/>
            <text x="25" y="184" fill="#f59e0b" font-size="11" font-weight="700">3. Benzylic Halide</text>
            <text x="25" y="202" fill="#94a3b8" font-size="9.5" font-family="var(--font-mono)">Ar—CH₂—X (Adjacent to benzene ring)</text>
          </g>

          <!-- Column 2: sp² C-X -->
          <g transform="translate(280, 20)">
            <rect width="240" height="240" rx="10" fill="rgba(168, 85, 247, 0.05)" stroke="rgba(168, 85, 247, 0.3)" stroke-width="1.5"/>
            <text x="120" y="26" fill="#c084fc" font-size="13" font-weight="800" text-anchor="middle">sp² C — X Classification</text>
            
            <!-- Type 1: Vinylic Halide -->
            <rect x="15" y="55" width="210" height="65" rx="6" fill="#131e33" stroke="rgba(255,255,255,0.08)"/>
            <text x="25" y="78" fill="#ec4899" font-size="11" font-weight="700">1. Vinylic Halide</text>
            <text x="25" y="96" fill="#94a3b8" font-size="9.5" font-family="var(--font-mono)">CH₂=CH—X (Directly on C=C)</text>
            <text x="25" y="110" fill="#f43f5e" font-size="8.5">Resonance partial double bond!</text>

            <!-- Type 2: Aryl Halide -->
            <rect x="15" y="140" width="210" height="65" rx="6" fill="#131e33" stroke="rgba(255,255,255,0.08)"/>
            <text x="25" y="163" fill="#a855f7" font-size="11" font-weight="700">2. Aryl Halide (Haloarene)</text>
            <text x="25" y="181" fill="#94a3b8" font-size="9.5" font-family="var(--font-mono)">C₆H₅—X (Directly on aromatic ring)</text>
            <text x="25" y="195" fill="#f43f5e" font-size="8.5">Low reactivity towards nucleophiles</text>
          </g>
        </svg>
      </div>

      <div class="stage-control-panel">
        <div class="stage-prop-grid">
          <div class="prop-card">
            <span>Allylic & Benzylic Halides</span>
            <strong style="color: var(--accent-emerald);">Highly Reactive (SN1)</strong>
          </div>
          <div class="prop-card">
            <span>Vinylic & Aryl Halides</span>
            <strong style="color: var(--accent-rose);">Inert to Nucleophiles</strong>
          </div>
          <div class="prop-card">
            <span>Number of Halogens</span>
            <strong style="color: var(--accent-cyan);">Mono, Di, Tri, Tetra</strong>
          </div>
          <div class="prop-card">
            <span>Dihalide Types</span>
            <strong style="color: var(--accent-amber);">Geminal (gem) vs Vicinal (vic)</strong>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Nature of C-X Bond & Dipole Anomaly
  renderCh6CxBond() {
    this.updateStageMeta('Nature of C-X Bond & NEET Dipole Anomaly', 'CH₃Cl has greater dipole moment than CH₃F (q × d factor)', 'NCERT Sec 6.4');
    
    this.visualStage.innerHTML = `
      <div class="stage-svg-wrap">
        <svg viewBox="0 0 540 280" class="responsive-study-svg">
          <rect width="540" height="280" rx="14" fill="#090e1c"/>
          
          <!-- Polar Bond Diagram -->
          <circle cx="160" cy="80" r="28" fill="#1e293b" stroke="#00f2fe" stroke-width="3"/>
          <text x="160" y="85" fill="#00f2fe" font-size="18" font-weight="900" text-anchor="middle">C</text>
          <text x="160" y="45" fill="#00f2fe" font-size="11" font-weight="800" text-anchor="middle">δ⁺ (Electrophilic)</text>

          <line x1="188" y1="80" x2="312" y2="80" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>

          <circle cx="340" cy="80" r="28" fill="#1e293b" stroke="#f43f5e" stroke-width="3"/>
          <text x="340" y="85" fill="#f43f5e" font-size="18" font-weight="900" text-anchor="middle">X</text>
          <text x="340" y="45" fill="#f43f5e" font-size="11" font-weight="800" text-anchor="middle">δ⁻ (Electronegative)</text>

          <!-- Dipole Arrow -->
          <line x1="180" y1="125" x2="320" y2="125" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrow-dipole)"/>
          <line x1="180" y1="118" x2="180" y2="132" stroke="#10b981" stroke-width="3"/>
          <text x="250" y="145" fill="#10b981" font-size="11" font-weight="800" text-anchor="middle">Dipole Moment μ = q × d</text>

          <!-- Dipole Moment Ranking Bar -->
          <rect x="30" y="165" width="480" height="95" rx="8" fill="#131e33" stroke="rgba(245, 158, 11, 0.4)"/>
          <text x="50" y="190" fill="#fbbf24" font-size="12" font-weight="800">⚠️ CRITICAL NEET EXAM ANOMALY: Dipole Moment Order</text>
          
          <text x="50" y="215" fill="#fff" font-size="13" font-weight="700">CH₃Cl (1.860 D) &gt; CH₃F (1.847 D) &gt; CH₃Br (1.830 D) &gt; CH₃I (1.636 D)</text>
          <text x="50" y="235" fill="#94a3b8" font-size="10.5">
            Explanation: Although F has higher charge (q), C—Cl has significantly longer bond length (d: 1.78 Å vs 1.39 Å), so product (q × d) is larger for CH₃Cl!
          </text>
        </svg>
      </div>

      <div class="stage-control-panel">
        <div class="stage-prop-grid">
          <div class="prop-card">
            <span>Bond Length Order</span>
            <strong style="color: var(--accent-cyan);">C-I &gt; C-Br &gt; C-Cl &gt; C-F</strong>
          </div>
          <div class="prop-card">
            <span>Bond Enthalpy (Strength)</span>
            <strong style="color: var(--accent-emerald);">C-F &gt; C-Cl &gt; C-Br &gt; C-I</strong>
          </div>
          <div class="prop-card">
            <span>Leaving Group Ability</span>
            <strong style="color: var(--accent-amber);">I⁻ &gt; Br⁻ &gt; Cl⁻ &gt; F⁻</strong>
          </div>
          <div class="prop-card">
            <span>Reactivity to Nucleophiles</span>
            <strong style="color: var(--accent-rose);">R-I &gt; R-Br &gt; R-Cl &gt; R-F</strong>
          </div>
        </div>
      </div>
    `;
  }

  // 3. Preparation from Alcohols & Lucas Test
  renderCh6PrepAlcohols() {
    this.updateStageMeta('Preparation from Alcohols & Darzens Process', 'SOCl₂ reaction produces pure alkyl chloride with gaseous byproducts', 'NCERT Sec 6.5.1');
    this.visualStage.innerHTML = `
      <div class="prep-rxn-display">
        <div class="prep-header-bar">
          <h4>Darzens Halogenation (Thionyl Chloride)</h4>
          <span class="subject-pill chem">Highest Yield & Purity</span>
        </div>
        <div class="chemical-equation-box">
          R—OH + SOCl₂ ⟶[Pyridine] R—Cl + SO₂↑ + HCl↑
        </div>
        <div class="neet-trap-alert">
          <span style="font-size: 1.15rem;">📌</span>
          <p>
            <strong>Why SOCl₂ is the best reagent for converting alcohols to alkyl chlorides:</strong>
            Both byproducts (Sulphur dioxide SO₂ and Hydrogen chloride HCl) are gases and escape immediately, leaving behind essentially pure alkyl chloride without requiring tedious separation!
          </p>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem; margin-top: 0.5rem;">
          <h4 style="font-size: 0.85rem; color: var(--accent-cyan); margin-bottom: 0.4rem;">Lucas Test for Distinguishing 1°, 2°, 3° Alcohols (HCl + anh. ZnCl₂):</h4>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; font-size: 0.76rem;">
            <div style="background: #111a2e; padding: 0.5rem; border-radius: 6px; border-left: 3px solid #f43f5e;">
              <strong style="color: #f43f5e;">3° Alcohol</strong><br>
              Turbidity appears <strong>immediately</strong> at room temperature.
            </div>
            <div style="background: #111a2e; padding: 0.5rem; border-radius: 6px; border-left: 3px solid #f59e0b;">
              <strong style="color: #f59e0b;">2° Alcohol</strong><br>
              Turbidity appears within <strong>5 minutes</strong>.
            </div>
            <div style="background: #111a2e; padding: 0.5rem; border-radius: 6px; border-left: 3px solid #38bdf8;">
              <strong style="color: #38bdf8;">1° Alcohol</strong><br>
              Does NOT produce turbidity at room temp (only upon <strong>heating</strong>).
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 4. Preparation from Hydrocarbons & Markovnikov vs Kharasch
  renderCh6PrepHydrocarbons() {
    this.updateStageMeta('Hydrocarbon Addition: Markovnikov vs Kharasch', 'Peroxide effect applies ONLY to HBr (free radical mechanism)', 'NCERT Sec 6.5.2');
    this.visualStage.innerHTML = `
      <div class="decision-tree-container">
        <div class="tree-root-box">
          <span style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700;">ADDITION OF HX TO ASYMMETRICAL ALKENE:</span>
          <h4>Propene: CH₃—CH=CH₂ + HX</h4>
        </div>

        <div class="tree-branches-row">
          <!-- Branch 1: Markovnikov -->
          <div class="tree-branch-card aldol">
            <div class="branch-badge" style="background: rgba(0, 242, 254, 0.2); color: #00f2fe;">Markovnikov's Rule (HCl, HBr, HI)</div>
            <h3>Ionic Addition</h3>
            <div class="tree-reagent-tag">Reagent: HX (No Peroxides)</div>
            <div class="mechanism-steps-list">
              <div class="mech-step">
                <strong>Mechanism:</strong> Electrophile H⁺ adds to give more stable 2° carbocation [CH₃—C⁺H—CH₃].
              </div>
              <div class="mech-step">
                <strong>Major Product:</strong> 2-Halopropane (CH₃—CHX—CH₃).
              </div>
            </div>
            <div class="chemical-equation-box">CH₃CH=CH₂ + HBr ⟶ CH₃—CH(Br)—CH₃ (2-Bromopropane - Major)</div>
          </div>

          <!-- Branch 2: Anti-Markovnikov -->
          <div class="tree-branch-card cannizzaro">
            <div class="branch-badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">Kharasch Peroxide Effect (HBr ONLY!)</div>
            <h3>Free Radical Addition</h3>
            <div class="tree-reagent-tag">Reagent: HBr + Organic Peroxide (R—O—O—R)</div>
            <div class="mechanism-steps-list">
              <div class="mech-step">
                <strong>Mechanism:</strong> Br• radical attacks first to produce more stable 2° radical [CH₃—C•H—CH₂Br].
              </div>
              <div class="mech-step">
                <strong>Major Product:</strong> 1-Bromopropane (CH₃—CH₂—CH₂Br).
              </div>
            </div>
            <div class="chemical-equation-box">CH₃CH=CH₂ + HBr + Peroxide ⟶ CH₃CH₂CH₂Br (1-Bromopropane - Major)</div>
          </div>
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.5rem;">
          <span>⚠️</span>
          <p>
            <strong>NEET Question Trap:</strong> Why doesn't HCl or HI show the peroxide effect?
            Because for HCl, the H—Cl bond is too strong (step 2 endothermic), while for HI, iodine radicals combine with each other to form I₂ instead of adding to alkene (step 1 endothermic)!
          </p>
        </div>
      </div>
    `;
  }

  // 5. Halogen Exchange & Diazonium Salts
  renderCh6HalogenExchange() {
    this.updateStageMeta('Halogen Exchange & Diazonium Pathways', 'Finkelstein (Iodide), Swarts (Fluoride), Sandmeyer & Balz-Schiemann', 'NCERT Sec 6.5.3');
    this.visualStage.innerHTML = `
      <div class="distinction-lab-grid" style="grid-template-columns: 1fr 1fr;">
        <!-- Card 1: Finkelstein & Swarts -->
        <div class="test-tube-card" style="text-align: left; align-items: flex-start;">
          <h4 style="color: var(--accent-cyan); font-size: 0.95rem;">1. Finkelstein Reaction (Alkyl Iodides)</h4>
          <div class="chemical-equation-box" style="width: 100%; font-size: 0.8rem;">
            R—Cl / R—Br + NaI ⟶[dry acetone] R—I + NaCl↓ / NaBr↓
          </div>
          <p style="font-size: 0.74rem; color: var(--text-muted); margin-top: 0.35rem;">
            Acetone dissolves NaI, but NaCl/NaBr precipitate out, driving the equilibrium forward (Le Chatelier's principle).
          </p>

          <h4 style="color: var(--accent-emerald); font-size: 0.95rem; margin-top: 0.85rem;">2. Swarts Reaction (Alkyl Fluorides)</h4>
          <div class="chemical-equation-box" style="width: 100%; font-size: 0.8rem;">
            R—Br + AgF ⟶ R—F + AgBr↓
          </div>
          <p style="font-size: 0.74rem; color: var(--text-muted); margin-top: 0.35rem;">
            Heavy metallic fluorides (AgF, Hg₂F₂, CoF₃, SbF₃) are used to synthesize fluorocarbons.
          </p>
        </div>

        <!-- Card 2: Diazonium Salt Pathways -->
        <div class="test-tube-card" style="text-align: left; align-items: flex-start;">
          <h4 style="color: var(--accent-amber); font-size: 0.95rem;">3. From Diazonium Salt (Ar-N₂⁺Cl⁻)</h4>
          <div style="font-size: 0.78rem; display: flex; flex-direction: column; gap: 0.35rem; width: 100%;">
            <div style="background: #111a2e; padding: 0.4rem; border-radius: 6px;">
              <strong>Sandmeyer:</strong> Ar-N₂⁺Cl⁻ + Cu₂Cl₂/HCl ⟶ <strong>Ar-Cl</strong> + N₂↑
            </div>
            <div style="background: #111a2e; padding: 0.4rem; border-radius: 6px;">
              <strong>Gattermann:</strong> Ar-N₂⁺Cl⁻ + Cu / HBr ⟶ <strong>Ar-Br</strong> + N₂↑
            </div>
            <div style="background: #111a2e; padding: 0.4rem; border-radius: 6px;">
              <strong>Iodobenzene:</strong> Ar-N₂⁺Cl⁻ + KI, warm ⟶ <strong>Ar-I</strong> + N₂↑ (No Cu catalyst needed!)
            </div>
            <div style="background: #111a2e; padding: 0.4rem; border-radius: 6px;">
              <strong>Balz-Schiemann:</strong> Ar-N₂⁺Cl⁻ + HBF₄ ⟶ Ar-N₂⁺BF₄⁻ ⟶[Δ] <strong>Ar-F</strong> + BF₃ + N₂↑
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 6. Physical Properties & Branching
  renderCh6PhysicalProps() {
    this.updateStageMeta('Physical Properties & Branching Simulator', 'Branching makes molecule spherical, lowering surface area & boiling point', 'NCERT Sec 6.6');
    this.visualStage.innerHTML = `
      <div class="acidity-ladder-card">
        <h4 style="color: var(--accent-cyan); font-size: 0.88rem; margin-bottom: 0.4rem;">
          Boiling Points of Isomeric Bromobutanes (C₄H₉Br):
        </h4>
        <div class="acidity-bars-container">
          <div class="acid-bar-item">
            <div class="acid-bar-label">
              <span>n-Butyl bromide (CH₃CH₂CH₂CH₂Br) - Linear Chain</span>
              <strong style="color: #00f2fe;">375 K (102°C)</strong>
            </div>
            <div class="acid-bar-track"><div class="acid-bar-fill" style="width: 100%; background: #00f2fe;"></div></div>
          </div>

          <div class="acid-bar-item">
            <div class="acid-bar-label">
              <span>Isobutyl bromide ((CH₃)₂CHCH₂Br) - 1 Branch</span>
              <strong style="color: #38bdf8;">364 K (91°C)</strong>
            </div>
            <div class="acid-bar-track"><div class="acid-bar-fill" style="width: 88%; background: #38bdf8;"></div></div>
          </div>

          <div class="acid-bar-item">
            <div class="acid-bar-label">
              <span>sec-Butyl bromide (CH₃CH₂CH(Br)CH₃)</span>
              <strong style="color: #f59e0b;">361 K (88°C)</strong>
            </div>
            <div class="acid-bar-track"><div class="acid-bar-fill" style="width: 82%; background: #f59e0b;"></div></div>
          </div>

          <div class="acid-bar-item">
            <div class="acid-bar-label">
              <span>tert-Butyl bromide ((CH₃)₃CBr) - Compact Sphere</span>
              <strong style="color: #f43f5e;">346 K (73°C)</strong>
            </div>
            <div class="acid-bar-track"><div class="acid-bar-fill" style="width: 65%; background: #f43f5e;"></div></div>
          </div>
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.65rem;">
          <span>📌</span>
          <p>
            <strong>Melting Point of Dihalobenzenes:</strong>
            Para-dichlorobenzene has a much higher melting point (323 K) than ortho (256 K) or meta (249 K) because its symmetrical structure fits closely into the crystal lattice!
          </p>
        </div>
      </div>
    `;
  }

  // 7. Ambident Nucleophiles Electronic Switcher
  renderCh6AmbidentNu() {
    this.updateStageMeta('Ambident Nucleophiles Electronic Switch', 'Ionic vs Covalent bonds determine Carbon vs Nitrogen attack', 'NCERT Sec 6.7.1');
    this.visualStage.innerHTML = `
      <div class="special-rxn-grid">
        <!-- Reagent Pair 1: KCN vs AgCN -->
        <div class="rxn-card-item">
          <div class="rxn-card-badge" style="background: rgba(0,242,254,0.15); color: #00f2fe;">Cyanide Nucleophile</div>
          <h4>KCN (Ionic) vs AgCN (Covalent)</h4>
          <div class="chemical-equation-box" style="font-size: 0.8rem; margin: 0.4rem 0;">
            • R—X + KCN ⟶ R—CN (Alkyl Cyanide / Nitrile) + KX<br>
            • R—X + AgCN ⟶ R—NC (Alkyl Isocyanide) + AgX
          </div>
          <p style="font-size: 0.74rem; color: var(--text-muted);">
            KCN is ionic, so both C and N have lone pairs; attack occurs via Carbon because C—C bond is more stable than C—N bond. AgCN is covalent, so Carbon is bonded to Ag and only Nitrogen's lone pair is free to attack!
          </p>
        </div>

        <!-- Reagent Pair 2: KNO2 vs AgNO2 -->
        <div class="rxn-card-item">
          <div class="rxn-card-badge" style="background: rgba(16,185,129,0.15); color: #10b981;">Nitrite Nucleophile</div>
          <h4>KNO₂ (Ionic) vs AgNO₂ (Covalent)</h4>
          <div class="chemical-equation-box" style="font-size: 0.8rem; margin: 0.4rem 0;">
            • R—X + KNO₂ ⟶ R—O—N=O (Alkyl Nitrite) + KX<br>
            • R—X + AgNO₂ ⟶ R—NO₂ (Nitroalkane) + AgX
          </div>
          <p style="font-size: 0.74rem; color: var(--text-muted);">
            KNO₂ is predominantly ionic (K⁺ [O—N=O]⁻), so attack occurs through negative oxygen. AgNO₂ is covalent (Ag—O—N=O), so attack occurs through nitrogen's lone pair to form nitroalkanes!
          </p>
        </div>
      </div>
    `;
  }

  // 8. Stereochemistry & SN2 vs SN1 Mechanism Stage
  renderCh6StereochemSn() {
    this.updateStageMeta('SN2 (Walden Inversion) vs SN1 (Racemization)', 'Second-order single step vs First-order two steps via carbocation', 'NCERT Sec 6.7.2');
    
    this.visualStage.innerHTML = `
      <div class="stage-matrix-nav">
        <button class="stage-chip-btn ${this.snMechanismMode === 'sn2' ? 'active' : ''}" id="btn-toggle-sn2">SN2 (Bimolecular)</button>
        <button class="stage-chip-btn ${this.snMechanismMode === 'sn1' ? 'active' : ''}" id="btn-toggle-sn1">SN1 (Unimolecular)</button>
      </div>

      <div id="sn-mechanism-viewport">
        ${this.snMechanismMode === 'sn2' ? this.getSn2Html() : this.getSn1Html()}
      </div>
    `;

    document.getElementById('btn-toggle-sn2')?.addEventListener('click', () => {
      this.snMechanismMode = 'sn2';
      this.renderCh6StereochemSn();
      if (this.playAudio) this.playAudio('pop');
    });

    document.getElementById('btn-toggle-sn1')?.addEventListener('click', () => {
      this.snMechanismMode = 'sn1';
      this.renderCh6StereochemSn();
      if (this.playAudio) this.playAudio('pop');
    });
  }

  getSn2Html() {
    return `
      <div class="prep-rxn-display">
        <div class="prep-header-bar">
          <h4>SN2: Concerted Backside Attack</h4>
          <span class="subject-pill chem">Rate = k[R-X][Nu⁻]</span>
        </div>
        
        <div class="chemical-equation-box" style="font-size: 0.8rem;">
          Nu⁻ + C—X ⟶ [Nu···C···X]‡ (Pentacoordinate Transition State) ⟶ Nu—C + X⁻
        </div>

        <div style="background: #111a2e; border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem; font-size: 0.78rem;">
          <strong style="color: var(--accent-cyan);">Key Stereochemical Characteristic:</strong>
          <p style="margin-top: 0.25rem; color: #cbd5e1;">
            100% <strong>Walden Inversion</strong> of configuration. The nucleophile attacks 180° opposite to the leaving group, turning the tetrahedral umbrella inside out!
          </p>
          <div style="margin-top: 0.4rem; color: var(--accent-amber);">
            <strong>Reactivity Order:</strong> CH₃X &gt; 1° (Primary) &gt; 2° &gt; 3° (Tertiary is essentially unreactive due to steric hindrance!).
          </div>
          <div style="margin-top: 0.25rem; color: var(--accent-emerald);">
            <strong>Favored by:</strong> Polar Aprotic Solvents (Acetone, DMSO, DMF) & Strong Nucleophiles.
          </div>
        </div>
      </div>
    `;
  }

  getSn1Html() {
    return `
      <div class="prep-rxn-display">
        <div class="prep-header-bar">
          <h4>SN1: Two-Step Carbocation Pathway</h4>
          <span class="subject-pill chem">Rate = k[R-X]</span>
        </div>

        <div class="chemical-equation-box" style="font-size: 0.8rem;">
          Step 1 (Slow RDS): R₃C—X ⟶ R₃C⁺ (Planar Carbocation) + X⁻<br>
          Step 2 (Fast): R₃C⁺ + Nu⁻ ⟶ R₃C—Nu (Front & Back Attack)
        </div>

        <div style="background: #111a2e; border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem; font-size: 0.78rem;">
          <strong style="color: var(--accent-purple);">Key Stereochemical Characteristic:</strong>
          <p style="margin-top: 0.25rem; color: #cbd5e1;">
            The planar sp² carbocation is symmetrical. Nucleophile can attack from the front or back with roughly equal probability, resulting in <strong>Racemization</strong> (with minor excess inversion due to departing halide ion shielding).
          </p>
          <div style="margin-top: 0.4rem; color: var(--accent-amber);">
            <strong>Reactivity Order:</strong> 3° (Tertiary) &gt; 2° &gt; 1° &gt; CH₃X. (Carbocation stability governs rate!).
          </div>
          <div style="margin-top: 0.25rem; color: var(--accent-cyan);">
            <strong>Allylic & Benzylic Halides:</strong> Show exceptionally high SN1 reactivity due to resonance stabilization of carbocations!
          </div>
        </div>
      </div>
    `;
  }

  // 9. Elimination & Saytzeff vs Hofmann
  renderCh6EliminationSaytzeff() {
    this.updateStageMeta('Elimination Reactions & Saytzeff Regioselectivity', 'More substituted stable alkene is major product', 'NCERT Sec 6.7.3');
    this.visualStage.innerHTML = `
      <div class="decision-tree-container">
        <div class="tree-root-box">
          <span style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700;">DEHYDROHALOGENATION (β-ELIMINATION):</span>
          <h4>2-Bromobutane: CH₃—CH₂—CH(Br)—CH₃ + Base</h4>
        </div>

        <div class="tree-branches-row">
          <div class="tree-branch-card aldol">
            <div class="branch-badge" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">Saytzeff / Zaitsev Rule (Normal Base)</div>
            <h3>Major: More Substituted Alkene</h3>
            <div class="tree-reagent-tag">Reagent: Alcoholic KOH / C₂H₅ONa</div>
            <div class="mechanism-steps-list">
              <div class="mech-step">
                <strong>Base extracts H from β-carbon with fewer hydrogens:</strong>
              </div>
              <div class="mech-step">
                <strong>Product:</strong> But-2-ene (81% Major, 6 α-hydrogens, more stable).
              </div>
            </div>
            <div class="chemical-equation-box">CH₃—CH=CH—CH₃ (But-2-ene - 81% Major)</div>
          </div>

          <div class="tree-branch-card cannizzaro">
            <div class="branch-badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">Hofmann Rule (Bulky Base)</div>
            <h3>Major: Less Substituted Alkene</h3>
            <div class="tree-reagent-tag">Reagent: Bulky Base like (CH₃)₃CO⁻K⁺</div>
            <div class="mechanism-steps-list">
              <div class="mech-step">
                <strong>Steric crowding forces base to attack terminal methyl:</strong>
              </div>
              <div class="mech-step">
                <strong>Product:</strong> But-1-ene (Major with bulky base).
              </div>
            </div>
            <div class="chemical-equation-box">CH₃—CH₂—CH=CH₂ (But-1-ene - Hofmann Major)</div>
          </div>
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.5rem;">
          <span>💥</span>
          <p>
            <strong>Wurtz Reaction:</strong> 2 R-X + 2 Na ⟶[dry ether] R-R + 2 NaX.
            Produces symmetrical alkanes with an even number of carbon atoms. Methane cannot be synthesized by Wurtz reaction!
          </p>
        </div>
      </div>
    `;
  }

  // 10. Reactions of Haloarenes (Dow's, EAS, Fittig, Chloral/DDT)
  renderCh6HaloareneReactivity() {
    this.updateStageMeta('Haloarene Inertness & Activating NO₂ Groups', 'Dow process (623 K, 300 atm) vs mild replacement when -NO₂ is ortho/para', 'NCERT Sec 6.8');
    this.visualStage.innerHTML = `
      <div class="prep-rxn-display">
        <h4 style="color: var(--accent-rose); font-size: 0.95rem;">Why Are Haloarenes Unreactive to Nucleophilic Substitution?</h4>
        <div style="font-size: 0.76rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.25rem;">
          <div>1. <strong>Resonance effect:</strong> Lone pair on chlorine delocalizes with benzene ring, giving C—Cl partial double bond character (shorter 1.69 Å vs 1.78 Å).</div>
          <div>2. <strong>Hybridization:</strong> sp² carbon (33% s-character) is more electronegative than sp³ carbon, holding electrons more tightly.</div>
          <div>3. <strong>Instability of phenyl cation:</strong> Cannot be stabilized by resonance.</div>
        </div>

        <h4 style="color: var(--accent-cyan); font-size: 0.95rem; margin-top: 0.5rem;">Activating Effect of -NO₂ Groups (Dow's Process):</h4>
        <div class="chemical-equation-box" style="font-size: 0.78rem;">
          • Chlorobenzene: ⟶[NaOH, 623 K, 300 atm / H⁺] Phenol (Drastic conditions!)<br>
          • 4-Nitrochlorobenzene: ⟶[NaOH, 443 K / H⁺] 4-Nitrophenol<br>
          • 2,4-Dinitrochlorobenzene: ⟶[NaOH, 368 K / H⁺] 2,4-Dinitrophenol<br>
          • 2,4,6-Trinitrochlorobenzene: ⟶[Warm H₂O, 323 K] Picric Acid (2,4,6-Trinitrophenol)
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.35rem;">
          <span>⚠️</span>
          <p>
            <strong>NEET Exam Note:</strong> -NO₂ groups at the <strong>meta position</strong> show NO activating effect on nucleophilic substitution because the carbanion resonance charge never lands on the meta carbon!
          </p>
        </div>
      </div>
    `;
  }

  // 11. Polyhalogen Compounds & Freon-12 Ozone Depletion
  renderCh6Polyhalogen() {
    this.updateStageMeta('Polyhalogen Compounds Studio', 'Chloroform preservation, Freon-12 synthesis, and DDT structure', 'NCERT Sec 6.9');
    this.visualStage.innerHTML = `
      <div class="special-rxn-grid">
        <div class="rxn-card-item">
          <div class="rxn-card-badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b;">Chloroform Preservation</div>
          <h4>Why CHCl₃ is Stored in Dark Bottles</h4>
          <p style="font-size: 0.76rem; color: var(--text-muted); margin: 0.3rem 0;">
            Chloroform is slowly oxidized by air in presence of light into highly poisonous <strong>Phosgene gas (COCl₂)</strong>:
          </p>
          <div class="chemical-equation-box" style="font-size: 0.76rem;">
            2 CHCl₃ + O₂ ⟶[light] 2 COCl₂ (Phosgene) + 2 HCl
          </div>
          <p style="font-size: 0.74rem; color: var(--accent-emerald); margin-top: 0.3rem;">
            ✓ Stored in dark amber bottles filled to the brim. 1% ethanol is added to convert toxic phosgene to harmless diethyl carbonate (C₂H₅O)₂CO!
          </p>
        </div>

        <div class="rxn-card-item">
          <div class="rxn-card-badge" style="background: rgba(168, 85, 247, 0.15); color: #c084fc;">DDT Synthesis</div>
          <h4>Synthesis from Chloral & Chlorobenzene</h4>
          <p style="font-size: 0.76rem; color: var(--text-muted); margin: 0.3rem 0;">
            p,p'-Dichlorodiphenyltrichloroethane (DDT):
          </p>
          <div class="chemical-equation-box" style="font-size: 0.76rem;">
            CCl₃CHO + 2 C₆H₅Cl ⟶[conc. H₂SO₄] (Cl-C₆H₄)₂CH—CCl₃ + H₂O
          </div>
          <p style="font-size: 0.74rem; color: var(--text-muted); margin-top: 0.3rem;">
            Non-biodegradable and fat-soluble, causing biomagnification in birds and aquatic life; banned worldwide.
          </p>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // CHAPTER 8 DIAGRAM RENDERING METHODS
  // =========================================================================

  // 1. Carbonyl Group Structure & Orbital Overlap
  renderCarbonylStructure() {
    this.updateStageMeta('Carbonyl Group Orbital Architecture', 'Planar sp² carbon with electron-rich carbonyl oxygen', 'NCERT Sec 8.1.2');
    this.visualStage.innerHTML = `
      <div class="stage-svg-wrap">
        <svg viewBox="0 0 540 320" class="responsive-study-svg">
          <rect width="540" height="320" rx="14" fill="#090e1c"/>
          <line x1="80" y1="160" x2="460" y2="160" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>

          <line x1="200" y1="160" x2="340" y2="160" stroke="#38bdf8" stroke-width="7" stroke-linecap="round"/>
          <text x="270" y="152" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">σ-bond (1.23 Å)</text>

          <line x1="200" y1="160" x2="110" y2="90" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="200" y1="160" x2="110" y2="230" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>

          <path d="M 155,125 A 50 50 0 0 1 155,195" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3,3"/>
          <text x="175" y="165" fill="#f59e0b" font-size="12" font-weight="800">120°</text>

          <circle cx="110" cy="90" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="110" y="94" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">R₁</text>

          <circle cx="110" cy="230" r="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
          <text x="110" y="234" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">R₂/H</text>

          <ellipse cx="270" cy="115" rx="55" ry="18" fill="rgba(236, 72, 153, 0.28)" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="270" y="119" fill="#f472b6" font-size="10" font-weight="800" text-anchor="middle">π-cloud (above)</text>

          <ellipse cx="270" cy="205" rx="55" ry="18" fill="rgba(236, 72, 153, 0.28)" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="270" y="209" fill="#f472b6" font-size="10" font-weight="800" text-anchor="middle">π-cloud (below)</text>

          <circle cx="200" cy="160" r="26" fill="#1e293b" stroke="#00f2fe" stroke-width="3"/>
          <text x="200" y="165" fill="#00f2fe" font-size="18" font-weight="900" text-anchor="middle">C</text>
          <rect x="180" y="115" width="40" height="20" rx="6" fill="rgba(0, 242, 254, 0.15)" stroke="#00f2fe"/>
          <text x="200" y="129" fill="#00f2fe" font-size="11" font-weight="800" text-anchor="middle">δ⁺ (Nu⁻ target)</text>

          <circle cx="340" cy="160" r="26" fill="#1e293b" stroke="#f43f5e" stroke-width="3"/>
          <text x="340" y="165" fill="#f43f5e" font-size="18" font-weight="900" text-anchor="middle">O</text>
          <rect x="320" y="115" width="40" height="20" rx="6" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e"/>
          <text x="340" y="129" fill="#f43f5e" font-size="11" font-weight="800" text-anchor="middle">δ⁻ (Base)</text>

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
            <strong style="color: var(--accent-amber);">Aldehydes &gt; Ketones</strong>
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
        rxn: '&gt;C=C&lt; + O₃ ⟶ Ozonide ⟶[Zn / H₂O] 2 &gt;C=O',
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

          <g id="mech-step-1" class="mech-step-group">
            <line x1="80" y1="120" x2="140" y2="120" stroke="#38bdf8" stroke-width="5"/>
            <line x1="80" y1="128" x2="140" y2="128" stroke="#ec4899" stroke-width="3"/>
            <circle cx="80" cy="124" r="16" fill="#1e293b" stroke="#00f2fe" stroke-width="2"/>
            <text x="80" y="129" fill="#00f2fe" font-size="12" font-weight="900" text-anchor="middle">Cδ⁺</text>
            <circle cx="140" cy="124" r="16" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
            <text x="140" y="129" fill="#f43f5e" font-size="12" font-weight="900" text-anchor="middle">Oδ⁻</text>

            <circle cx="80" cy="40" r="16" fill="#10b981" stroke="#34d399" stroke-width="2"/>
            <text x="80" y="45" fill="#070b14" font-size="11" font-weight="900" text-anchor="middle">Nu⁻</text>
            
            <path d="M 80,58 Q 65,85 76,105" fill="none" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-dipole)"/>
            <text x="110" y="180" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">Planar sp² (120°)</text>
            <text x="110" y="196" fill="#00f2fe" font-size="10" font-weight="800" text-anchor="middle">Slow (Rate Determining)</text>
          </g>

          <line x1="180" y1="124" x2="230" y2="124" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arrow-dipole)"/>
          <text x="205" y="112" fill="#94a3b8" font-size="10" font-weight="800" text-anchor="middle">Step 1</text>

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

          <line x1="380" y1="124" x2="420" y2="124" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arrow-dipole)"/>
          <text x="400" y="112" fill="#94a3b8" font-size="10" font-weight="800" text-anchor="middle">+ H⁺</text>

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
          <span class="reactivity-tag high">HCHO</span>
          <span style="color: var(--accent-cyan); font-weight: 800;">&gt;</span>
          <span class="reactivity-tag mid">CH₃CHO</span>
          <span style="color: var(--accent-cyan); font-weight: 800;">&gt;</span>
          <span class="reactivity-tag low">CH₃COCH₃</span>
          <span style="color: var(--accent-cyan); font-weight: 800;">&gt;</span>
          <span class="reactivity-tag vlow">PhCHO</span>
        </div>
      </div>
    `;
  }

  // 4. Distinction Tests Interactive Lab (Tollens, Fehling, Iodoform)
  renderDistinctionTests() {
    this.updateStageMeta('Interactive NEET Distinction Lab', 'Click test buttons to simulate live chemical transformations', 'NCERT Sec 8.4.3');

    this.visualStage.innerHTML = `
      <div class="distinction-lab-grid">
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
          <div class="tree-branch-card aldol">
            <div class="branch-badge" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">YES: Has α-H (CH₃CHO, Acetone)</div>
            <h3>Aldol Condensation</h3>
            <div class="tree-reagent-tag">Reagent: Dilute Base (dil. NaOH)</div>
            <div class="chemical-equation-box">2 CH₃CHO ⟶[dil. NaOH] CH₃-CH(OH)-CH₂-CHO ⟶[Δ, -H₂O] CH₃-CH=CH-CHO</div>
          </div>

          <div class="tree-branch-card cannizzaro">
            <div class="branch-badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">NO: Zero α-H (HCHO, PhCHO)</div>
            <h3>Cannizzaro Reaction</h3>
            <div class="tree-reagent-tag">Reagent: Concentrated Base (50% NaOH)</div>
            <div class="chemical-equation-box">2 HCHO + conc. NaOH ⟶ CH₃OH + HCOONa</div>
          </div>
        </div>
      </div>
    `;
  }

  // 6. Carboxylic Acids Dimer Structure
  renderCarboxylicDimer() {
    this.updateStageMeta('Carboxylic Acid Cyclic Dimerization', '8-Membered ring formed by 2 strong hydrogen bonds', 'NCERT Sec 8.6.2');
    this.visualStage.innerHTML = `
      <div class="stage-svg-wrap">
        <svg viewBox="0 0 540 260" class="responsive-study-svg">
          <rect width="540" height="260" rx="14" fill="#090e1c"/>

          <text x="70" y="135" fill="#fff" font-size="16" font-weight="800">R</text>
          <line x1="88" y1="130" x2="140" y2="130" stroke="#94a3b8" stroke-width="4"/>

          <circle cx="150" cy="130" r="18" fill="#1e293b" stroke="#00f2fe" stroke-width="2.5"/>
          <text x="150" y="135" fill="#00f2fe" font-size="14" font-weight="900" text-anchor="middle">C</text>

          <line x1="150" y1="112" x2="150" y2="65" stroke="#f43f5e" stroke-width="4"/>
          <circle cx="150" cy="55" r="14" fill="#f43f5e"/>
          <text x="150" y="60" fill="#fff" font-size="11" font-weight="800" text-anchor="middle">O</text>

          <line x1="150" y1="148" x2="150" y2="195" stroke="#38bdf8" stroke-width="3"/>
          <text x="140" y="210" fill="#38bdf8" font-size="13" font-weight="800">O — H</text>

          <circle cx="390" cy="130" r="18" fill="#1e293b" stroke="#00f2fe" stroke-width="2.5"/>
          <text x="390" y="135" fill="#00f2fe" font-size="14" font-weight="900" text-anchor="middle">C</text>
          <line x1="408" y1="130" x2="460" y2="130" stroke="#94a3b8" stroke-width="4"/>
          <text x="470" y="135" fill="#fff" font-size="16" font-weight="800">R</text>

          <line x1="390" y1="112" x2="390" y2="65" stroke="#38bdf8" stroke-width="3"/>
          <text x="375" y="60" fill="#38bdf8" font-size="13" font-weight="800">H — O</text>

          <line x1="390" y1="148" x2="390" y2="195" stroke="#f43f5e" stroke-width="4"/>
          <circle cx="390" cy="205" r="14" fill="#f43f5e"/>
          <text x="390" y="210" fill="#fff" font-size="11" font-weight="800" text-anchor="middle">O</text>

          <line x1="170" y1="55" x2="370" y2="55" stroke="#10b981" stroke-width="3" stroke-dasharray="5,4"/>
          <text x="270" y="45" fill="#10b981" font-size="11" font-weight="800" text-anchor="middle">H-Bond (O···H)</text>

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

  // 7. Acidity Ladder & pKa Ranking
  renderAcidityLadder() {
    this.updateStageMeta('Acidity Ladder & Resonance Stabilization', 'Lower pKa = Stronger Acid. Electron withdrawing groups increase acidity', 'NCERT Sec 8.6.4');
    const acids = [
      { name: 'Trichloroacetic Acid (CCl₃COOH)', pka: 0.65, strength: 'Extremely Strong', color: '#ef4444' },
      { name: 'Dichloroacetic Acid (CHCl₂COOH)', pka: 1.29, strength: 'Very Strong', color: '#f97316' },
      { name: 'Fluoroacetic Acid (CH₂FCOOH)', pka: 2.59, strength: 'Strong (-I effect)', color: '#f59e0b' },
      { name: 'Chloroacetic Acid (CH₂ClCOOH)', pka: 2.87, strength: 'Strong', color: '#eab308' },
      { name: 'Formic Acid (HCOOH)', pka: 3.75, strength: 'Moderate', color: '#84cc16' },
      { name: 'Benzoic Acid (C₆H₅COOH)', pka: 4.19, strength: 'Moderate', color: '#10b981' },
      { name: 'Acetic Acid (CH₃COOH)', pka: 4.76, strength: 'Weak (+I of CH₃)', color: '#06b6d4' }
    ];

    this.visualStage.innerHTML = `
      <div class="acidity-ladder-card">
        <div class="acidity-bars-container">
          ${acids.map(a => `
            <div class="acid-bar-item">
              <div class="acid-bar-label">
                <span>${a.name}</span>
                <strong style="color: ${a.color};">pKa: ${a.pka}</strong>
              </div>
              <div class="acid-bar-track">
                <div class="acid-bar-fill" style="width: ${Math.max(5, (6 - a.pka) / 6 * 100)}%; background: ${a.color};"></div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="neet-trap-alert" style="margin-top: 0.5rem;">
          <span>💡</span>
          <p>Acidity ∝ -I / -M effect ∝ 1 / pKa. -CF₃ &gt; -NO₂ &gt; -CN &gt; -F &gt; -Cl &gt; -Br &gt; -I &gt; -Ph.</p>
        </div>
      </div>
    `;
  }

  // 8. HVZ & Decarboxylation
  renderHvzDecarboxylation() {
    this.updateStageMeta('HVZ & Decarboxylation Reactions', 'Hell-Volhard-Zelinsky α-halogenation and soda-lime pathways', 'NCERT Sec 8.6.5');
    this.visualStage.innerHTML = `
      <div class="special-rxn-grid">
        <div class="rxn-card-item">
          <div class="rxn-card-badge">HVZ Reaction</div>
          <h4>α-Halogenation of Carboxylic Acids</h4>
          <div class="chemical-equation-box">R-CH₂-COOH + Br₂ ⟶[Red P / H₂O] R-CH(Br)-COOH</div>
          <div style="font-size: 0.74rem; color: #f59e0b; margin-top: 0.35rem;">
            ⚠️ HCOOH & C₆H₅COOH DO NOT undergo HVZ (lack α-hydrogens)!
          </div>
        </div>

        <div class="rxn-card-item">
          <div class="rxn-card-badge">Decarboxylation</div>
          <h4>Soda-Lime Decarboxylation</h4>
          <div class="chemical-equation-box">R-COONa + NaOH ⟶[CaO, Δ] R-H + Na₂CO₃</div>
          <div style="font-size: 0.74rem; color: #38bdf8; margin-top: 0.35rem;">
            📌 Alkane product has one less carbon atom than the parent acid.
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
        // Prevent duplicate listener binding
        if (opt.hasAttribute('data-bound')) return;
        opt.setAttribute('data-bound', 'true');

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
