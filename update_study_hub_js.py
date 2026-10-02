# -*- coding: utf-8 -*-
import re

with open('js/studyHub.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Add Imports
import_marker = "import { DiagramsCh10 } from './diagramsCh10.js';"
new_imports = """import { DiagramsCh10 } from './diagramsCh10.js';
import { DiagramsPhysics } from './diagramsPhysics.js';
import { DiagramsBiology } from './diagramsBiology.js';
import { DiagramsChemistryExtra } from './diagramsChemistryExtra.js';"""

code = code.replace(import_marker, new_imports, 1)

# 2. Add Module Instances in constructor
inst_marker = "    this.diagramsCh10 = new DiagramsCh10(this);"
new_inst = """    this.diagramsCh10 = new DiagramsCh10(this);
    this.diagramsPhysics = new DiagramsPhysics(this);
    this.diagramsBiology = new DiagramsBiology(this);
    this.diagramsChemExtra = new DiagramsChemistryExtra(this);"""

code = code.replace(inst_marker, new_inst, 1)

# 3. Replace chapterMeta
old_meta_marker = "    // Chapter Metadata\n    this.chapterMeta = {"
new_meta = """    // Chapter Metadata (Physics, Chemistry & Biology - 15 Chapters)
    this.chapterMeta = {
      // ===== PHYSICS =====
      'phy-currelec': {
        title: 'Class 12 Physics — Current Electricity',
        desc: 'Drift velocity vd, mobility, microscopic Ohm\\'s law, temperature coefficients (metals vs semiconductors), series/parallel cells, Kirchhoff\\'s circuit rules, and Wheatstone & Meter Bridge.',
        defaultDiagram: 'phy-ce-drift',
        subject: 'physics'
      },
      'phy-magcharge': {
        title: 'Class 12 Physics — Moving Charges and Magnetism',
        desc: 'Lorentz force, circular & helical motion, cyclotron accelerator, parallel wire forces, torque on current loop, moving coil galvanometer conversions, Biot-Savart and Ampere\\'s circuital law.',
        defaultDiagram: 'phy-mc-lorentz',
        subject: 'physics'
      },
      'phy-magmatter': {
        title: 'Class 12 Physics — Magnetism and Matter',
        desc: 'Short bar magnet axial and equatorial fields (B_axial = 2 B_eq), magnetic dipole potential energy, Earth\\'s magnetic elements (BH, BV, dip angle), Dia/Para/Ferro comparison, and Hysteresis loop.',
        defaultDiagram: 'phy-mm-dipole',
        subject: 'physics'
      },
      'phy-emi': {
        title: 'Class 12 Physics — Electromagnetic Induction',
        desc: 'Faraday\\'s laws, Lenz\\'s law & energy conservation, motional EMF (Blv), eddy currents & magnetic damping, self and mutual inductance of solenoids, and AC generator sinusoidal derivation (e = e₀ sin ωt).',
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
        desc: 'Werner\\'s primary & secondary valencies, ligand denticity & chelate effect, systematic IUPAC nomenclature, structural & stereoisomerism (cisplatin), VBT hybridisation, and Crystal Field Theory (CFT) octahedral & tetrahedral splitting.',
        defaultDiagram: 'chem-coord-cft',
        subject: 'chemistry'
      },

      // ===== BIOLOGY =====
      'bio-bot2': {
        title: 'Botany Chapter 2: Principles of Inheritance and Variation',
        desc: 'Mendel\\'s 7 pairs of contrasting traits, monohybrid (3:1, 1:2:1) & dihybrid (9:3:3:1) crosses, test cross, Sutton-Boveri chromosomal theory, Morgan\\'s Drosophila linkage & recombination, sex determination, and Mendelian & chromosomal disorders.',
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
        desc: 'Chemical evolution & Miller-Urey experiment, paleontological & comparative anatomical evidence (homology vs analogy), Darwin\\'s natural selection & adaptive radiation (finches, marsupials), Hardy-Weinberg equilibrium, and full human evolution sequence.',
        defaultDiagram: 'bio-evo-homology',
        subject: 'biology'
      }
    };"""

code = re.sub(
    r'    // Chapter Metadata\s*this\.chapterMeta = \{[\s\S]*?defaultDiagram: \'ch10-glucose-structure\'\s*\}\s*\};',
    new_meta,
    code,
    count=1
)

# 4. Add setupSubjectFilters to init()
init_marker = "    this.setupCheckpointQuizzes();\n    this.setupMobileControls();\n  }"
new_init = """    this.setupCheckpointQuizzes();
    this.setupMobileControls();
    this.setupSubjectFilters();
  }"""
code = code.replace(init_marker, new_init, 1)

# 5. Replace switchChapter to handle all 15 chapters
old_switch_chapter = """  switchChapter(chId) {
    if (!chId) return;
    this.currentChapter = chId;
    if (this.playAudio) this.playAudio('pop');

    // Update active pill button state
    const chBtns = document.querySelectorAll('.study-ch-btn');
    chBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-chapter') === chId);
    });

    // Update chapter title and description in banner
    const meta = this.chapterMeta[chId];
    const bannerTitle = document.getElementById('study-active-chapter-title');
    const bannerDesc = document.getElementById('study-active-chapter-desc');
    if (bannerTitle && meta) bannerTitle.textContent = meta.title;
    if (bannerDesc && meta) bannerDesc.textContent = meta.desc;

    // Toggle Chapter Content Containers (ONLY active chapter is displayed)
    const allChapters = ['ch6', 'ch7', 'ch8', 'ch9', 'ch10'];
    allChapters.forEach(c => {
      const num = c.replace('ch', '');
      const container = document.getElementById(`chapter-${num}-container`);
      const navBar = document.getElementById(`quick-nav-${c}`);
      
      const isCurrent = (c === chId);
      if (container) container.style.display = isCurrent ? 'block' : 'none';
      if (navBar) navBar.style.display = isCurrent ? 'flex' : 'none';
    });"""

new_switch_chapter = """  switchChapter(chId) {
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
    });"""

code = code.replace(old_switch_chapter, new_switch_chapter, 1)

# 6. Replace setupScrollObserver to handle all container IDs
old_observer_container = """    // Only observe sections inside the currently active chapter container
    const num = this.currentChapter.replace('ch', '');
    const activeContainer = document.getElementById(`chapter-${num}-container`);"""

new_observer_container = """    // Only observe sections inside the currently active chapter container
    const containerId = (this.currentChapter.startsWith('phy-') || this.currentChapter.startsWith('bio-') || this.currentChapter.startsWith('chem-'))
      ? `chapter-${this.currentChapter}-container`
      : `chapter-${this.currentChapter.replace('ch', '')}-container`;
    const activeContainer = document.getElementById(containerId);"""

code = code.replace(old_observer_container, new_observer_container, 1)

# 7. Add Subject Filter methods
filter_methods = """  // =========================================================================
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

"""

code = code.replace("  setupChapterSwitcher() {", filter_methods + "  setupChapterSwitcher() {", 1)

# 8. Add visual stage dispatchers in renderDiagram
old_default = """      default:
        if (this.currentChapter === 'ch6') {
          this.renderCh6Classification();
        } else {
          this.renderCarbonylStructure();
        }"""

new_default = """      default:
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
        }"""

code = code.replace(old_default, new_default, 1)

with open('js/studyHub.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("js/studyHub.js successfully updated for all 15 chapters!")
