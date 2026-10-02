# -*- coding: utf-8 -*-
"""
Assembles all 10 new chapters into index.html:
- 4 Physics Chapters
- 4 Biology Chapters (2 Botany + 2 Zoology)
- 2 Chemistry Chapters
"""

import sys
import re
sys.stdout.reconfigure(encoding='utf-8')

from generate_physics_chapters import (
    phy_navs,
    get_current_electricity_html,
    get_moving_charges_html,
    get_magnetism_matter_html,
    get_emi_html
)
from generate_biology_chapters import (
    bio_navs,
    get_botany_ch2_html,
    get_botany_ch3_html,
    get_zoology_ch2_html,
    get_zoology_ch3_html
)
from generate_chemistry_extra import (
    chem_extra_navs,
    get_chemical_kinetics_html,
    get_coordination_compounds_html
)

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Navigation Tab Title
old_nav_tab = '<button class="nav-tab active" data-target="view-study" id="tab-study">\n        <span>📖</span> Chemistry Study Hub (Ch. 6 - 10)\n      </button>'
new_nav_tab = '<button class="nav-tab active" data-target="view-study" id="tab-study">\n        <span>📖</span> Master Study Hub (Physics, Chemistry &amp; Biology)\n      </button>'
if old_nav_tab in html:
    html = html.replace(old_nav_tab, new_nav_tab, 1)
else:
    # Try alternate match if whitespace differs
    import re
    html = re.sub(
        r'<button class="nav-tab active" data-target="view-study" id="tab-study">[\s\S]*?Chemistry Study Hub[\s\S]*?</button>',
        new_nav_tab,
        html,
        count=1
    )

# 2. Update Chapter Selector Bar in study banner to feature all 15 chapters with subject scoping
old_selector_marker = '<div class="study-ch-selector-bar" style="display: flex; gap: 0.5rem; margin-top: 1.1rem; flex-wrap: wrap;">'
new_selector_bar = '''<div class="study-ch-selector-bar" style="display: flex; gap: 0.5rem; margin-top: 1.1rem; flex-wrap: wrap;">
          <!-- Subject Filter Pills -->
          <div style="display: flex; gap: 0.4rem; width: 100%; margin-bottom: 0.4rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.6rem;">
            <button class="study-subj-filter-btn active" data-subj-filter="all" style="padding: 0.25rem 0.8rem; border-radius: 999px; font-size: 0.78rem; font-weight: 700; cursor: pointer; background: rgba(255,255,255,0.1); border: 1px solid var(--border-subtle); color: #fff;">🌟 All 15 Chapters</button>
            <button class="study-subj-filter-btn" data-subj-filter="physics" style="padding: 0.25rem 0.8rem; border-radius: 999px; font-size: 0.78rem; font-weight: 700; cursor: pointer; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); color: var(--phy-primary);">⚛️ Physics (4)</button>
            <button class="study-subj-filter-btn" data-subj-filter="chemistry" style="padding: 0.25rem 0.8rem; border-radius: 999px; font-size: 0.78rem; font-weight: 700; cursor: pointer; background: rgba(0,242,254,0.1); border: 1px solid rgba(0,242,254,0.3); color: var(--chem-primary);">🧪 Chemistry (7)</button>
            <button class="study-subj-filter-btn" data-subj-filter="biology" style="padding: 0.25rem 0.8rem; border-radius: 999px; font-size: 0.78rem; font-weight: 700; cursor: pointer; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); color: var(--bio-primary);">🧬 Biology (4)</button>
          </div>

          <!-- Physics Chapters -->
          <button class="study-ch-btn" data-chapter="phy-currelec" data-subject="physics" style="border-left: 3px solid var(--phy-primary);">⚡ Current Electricity</button>
          <button class="study-ch-btn" data-chapter="phy-magcharge" data-subject="physics" style="border-left: 3px solid var(--phy-primary);">🧲 Moving Charges &amp; Magnetism</button>
          <button class="study-ch-btn" data-chapter="phy-magmatter" data-subject="physics" style="border-left: 3px solid var(--phy-primary);">🧭 Magnetism &amp; Matter</button>
          <button class="study-ch-btn" data-chapter="phy-emi" data-subject="physics" style="border-left: 3px solid var(--phy-primary);">🔄 Electromagnetic Induction</button>

          <!-- Chemistry Chapters -->
          <button class="study-ch-btn active" data-chapter="ch6" data-subject="chemistry" style="border-left: 3px solid var(--chem-primary);">🧪 Ch. 6: Haloalkanes</button>
          <button class="study-ch-btn" data-chapter="ch7" data-subject="chemistry" style="border-left: 3px solid var(--chem-primary);">🍷 Ch. 7: Alcohols &amp; Phenols</button>
          <button class="study-ch-btn" data-chapter="ch8" data-subject="chemistry" style="border-left: 3px solid var(--chem-primary);">⚗️ Ch. 8: Carbonyls &amp; Acids</button>
          <button class="study-ch-btn" data-chapter="ch9" data-subject="chemistry" style="border-left: 3px solid var(--chem-primary);">🧬 Ch. 9: Amines</button>
          <button class="study-ch-btn" data-chapter="ch10" data-subject="chemistry" style="border-left: 3px solid var(--chem-primary);">🧫 Ch. 10: Biomolecules</button>
          <button class="study-ch-btn" data-chapter="chem-kinetics" data-subject="chemistry" style="border-left: 3px solid var(--chem-primary);">⏱️ Chemical Kinetics</button>
          <button class="study-ch-btn" data-chapter="chem-coordination" data-subject="chemistry" style="border-left: 3px solid var(--chem-primary);">💠 Coordination Compounds</button>

          <!-- Biology Chapters (Botany & Zoology) -->
          <button class="study-ch-btn" data-chapter="bio-bot2" data-subject="biology" style="border-left: 3px solid var(--bio-primary);">🌿 Botany: Inheritance &amp; Variation</button>
          <button class="study-ch-btn" data-chapter="bio-bot3" data-subject="biology" style="border-left: 3px solid var(--bio-primary);">🧬 Botany: Molecular Basis</button>
          <button class="study-ch-btn" data-chapter="bio-zoo2" data-subject="biology" style="border-left: 3px solid var(--bio-primary);">🚼 Zoology: Reproductive Health</button>
          <button class="study-ch-btn" data-chapter="bio-zoo3" data-subject="biology" style="border-left: 3px solid var(--bio-primary);">🐒 Zoology: Evolution</button>
'''

old_pills_block = '''        <div class="study-ch-selector-bar" style="display: flex; gap: 0.5rem; margin-top: 1.1rem; flex-wrap: wrap;">
          <button class="study-ch-btn active" data-chapter="ch6">🧪 Ch. 6: Haloalkanes</button>
          <button class="study-ch-btn" data-chapter="ch7">🍷 Ch. 7: Alcohols, Phenols &amp; Ethers</button>
          <button class="study-ch-btn" data-chapter="ch8">⚗️ Ch. 8: Carbonyls &amp; Acids</button>
          <button class="study-ch-btn" data-chapter="ch9">🧬 Ch. 9: Amines</button>
          <button class="study-ch-btn" data-chapter="ch10">🧫 Ch. 10: Biomolecules</button>
        </div>'''

if old_pills_block in html:
    html = html.replace(old_pills_block, new_selector_bar + '        </div>', 1)
else:
    print("WARNING: Could not find exact old_pills_block, using regex replacement.")
    html = re.sub(
        r'<div class="study-ch-selector-bar"[\s\S]*?Ch\. 10: Biomolecules</button>\s*</div>',
        new_selector_bar + '        </div>',
        html,
        count=1
    )

# 3. Add Catalog Cards for the 10 new chapters inside chapter-card-grid
new_catalog_cards = '''
          <!-- ================= PHYSICS CHAPTERS ================= -->
          <div class="catalog-chapter-card" data-chapter="phy-currelec" data-subject="physics" style="border-top: 3px solid var(--phy-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(245,158,11,0.2); color: var(--phy-primary);">Physics Ch. 3</span>
              <span class="ch-weightage-badge">NEET Weightage: ~10%</span>
            </div>
            <h4>Current Electricity</h4>
            <p class="ch-summary">
              Drift velocity vd, mobility, microscopic Ohm's law, temperature coefficients (metals vs semiconductors), series/parallel cells, Kirchhoff's circuit rules, Wheatstone &amp; Meter bridge.
            </p>
            <div class="ch-stats-row">
              <span>📖 25 Curriculum Sections</span>
              <span>⚡ 3 Visual Simulators</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="phy-currelec" style="background: var(--gradient-amber); color: #000;">
              Launch Current Electricity →
            </button>
          </div>

          <div class="catalog-chapter-card" data-chapter="phy-magcharge" data-subject="physics" style="border-top: 3px solid var(--phy-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(245,158,11,0.2); color: var(--phy-primary);">Physics Ch. 4</span>
              <span class="ch-weightage-badge">NEET Weightage: ~8%</span>
            </div>
            <h4>Moving Charges &amp; Magnetism</h4>
            <p class="ch-summary">
              Lorentz force, circular &amp; helical orbits, cyclotron resonance, parallel wire forces, torque on current loop, moving coil galvanometer conversions, Biot-Savart and Ampere's circuital law.
            </p>
            <div class="ch-stats-row">
              <span>📖 26 Comprehensive Topics</span>
              <span>🧲 3 Dynamic Labs</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="phy-magcharge" style="background: var(--gradient-amber); color: #000;">
              Launch Moving Charges →
            </button>
          </div>

          <div class="catalog-chapter-card" data-chapter="phy-magmatter" data-subject="physics" style="border-top: 3px solid var(--phy-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(245,158,11,0.2); color: var(--phy-primary);">Physics Ch. 5</span>
              <span class="ch-weightage-badge">NEET Weightage: ~6%</span>
            </div>
            <h4>Magnetism and Matter</h4>
            <p class="ch-summary">
              Short bar magnet axial vs equatorial fields (B_axial = 2 B_eq), magnetic dipole potential energy, Earth's magnetic elements (BH, BV, dip angle), Dia/Para/Ferro comparison, and Hysteresis loop.
            </p>
            <div class="ch-stats-row">
              <span>📖 31 Core Sections</span>
              <span>🧭 3 Interactive Views</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="phy-magmatter" style="background: var(--gradient-amber); color: #000;">
              Launch Magnetism &amp; Matter →
            </button>
          </div>

          <div class="catalog-chapter-card" data-chapter="phy-emi" data-subject="physics" style="border-top: 3px solid var(--phy-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(245,158,11,0.2); color: var(--phy-primary);">Physics Ch. 6</span>
              <span class="ch-weightage-badge">NEET Weightage: ~8%</span>
            </div>
            <h4>Electromagnetic Induction</h4>
            <p class="ch-summary">
              Faraday's laws, Lenz's law &amp; energy conservation, motional EMF (Blv), eddy currents &amp; magnetic damping, self and mutual inductance of solenoids, and AC generator sinusoidal derivation.
            </p>
            <div class="ch-stats-row">
              <span>📖 23 Deep-Dive Topics</span>
              <span>🔄 3 Induction Stages</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="phy-emi" style="background: var(--gradient-amber); color: #000;">
              Launch EMI Module →
            </button>
          </div>

          <!-- ================= EXTRA CHEMISTRY CHAPTERS ================= -->
          <div class="catalog-chapter-card" data-chapter="chem-kinetics" data-subject="chemistry" style="border-top: 3px solid var(--chem-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(0,242,254,0.2); color: var(--chem-primary);">Chemistry Physical</span>
              <span class="ch-weightage-badge">NEET Weightage: ~8%</span>
            </div>
            <h4>Chemical Kinetics</h4>
            <p class="ch-summary">
              Reaction rates, order vs molecularity, integrated rate equations for zero and first order, half-life formulas, Arrhenius activation energy profile, and collision theory.
            </p>
            <div class="ch-stats-row">
              <span>📖 27 Focused Topics</span>
              <span>⏱️ Rate &amp; t½ Simulators</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="chem-kinetics">
              Launch Chemical Kinetics →
            </button>
          </div>

          <div class="catalog-chapter-card" data-chapter="chem-coordination" data-subject="chemistry" style="border-top: 3px solid var(--chem-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(0,242,254,0.2); color: var(--chem-primary);">Chemistry Inorganic</span>
              <span class="ch-weightage-badge">NEET Weightage: ~10%</span>
            </div>
            <h4>Coordination Compounds</h4>
            <p class="ch-summary">
              Werner's valencies, ligand denticity &amp; chelate effect, IUPAC nomenclature, structural &amp; stereoisomerism (cisplatin), VBT hybridisation, and Crystal Field Theory (CFT) Δo vs Δt.
            </p>
            <div class="ch-stats-row">
              <span>📖 50 High-Yield Topics</span>
              <span>💠 CFT &amp; Isomer Labs</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="chem-coordination">
              Launch Coordination Module →
            </button>
          </div>

          <!-- ================= BIOLOGY CHAPTERS ================= -->
          <div class="catalog-chapter-card" data-chapter="bio-bot2" data-subject="biology" style="border-top: 3px solid var(--bio-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(16,185,129,0.2); color: var(--bio-primary);">Botany Ch. 2</span>
              <span class="ch-weightage-badge">NEET Weightage: ~12%</span>
            </div>
            <h4>Principles of Inheritance &amp; Variation</h4>
            <p class="ch-summary">
              Mendel's 7 pairs of contrasting traits, monohybrid (3:1, 1:2:1) &amp; dihybrid (9:3:3:1) crosses, test cross, Sutton-Boveri theory, Morgan's Drosophila linkage &amp; recombination, and genetic disorders.
            </p>
            <div class="ch-stats-row">
              <span>📖 25 Rigorous Topics</span>
              <span>🌿 Punnett &amp; Pedigree Stages</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="bio-bot2" style="background: var(--gradient-emerald); color: #fff;">
              Launch Botany Ch. 2 →
            </button>
          </div>

          <div class="catalog-chapter-card" data-chapter="bio-bot3" data-subject="biology" style="border-top: 3px solid var(--bio-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(16,185,129,0.2); color: var(--bio-primary);">Botany Ch. 3</span>
              <span class="ch-weightage-badge">NEET Weightage: ~10%</span>
            </div>
            <h4>Molecular Basis of Inheritance</h4>
            <p class="ch-summary">
              DNA structure &amp; Chargaff rules, nucleosome packaging, semiconservative replication (Meselson-Stahl), transcription &amp; splicing, genetic code, translation, Lac Operon, and DNA fingerprinting.
            </p>
            <div class="ch-stats-row">
              <span>📖 33 Landmark Topics</span>
              <span>🧬 Lac Operon &amp; DNA Models</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="bio-bot3" style="background: var(--gradient-emerald); color: #fff;">
              Launch Botany Ch. 3 →
            </button>
          </div>

          <div class="catalog-chapter-card" data-chapter="bio-zoo2" data-subject="biology" style="border-top: 3px solid var(--bio-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(16,185,129,0.2); color: var(--bio-primary);">Zoology Ch. 2</span>
              <span class="ch-weightage-badge">NEET Weightage: ~6%</span>
            </div>
            <h4>Reproductive Health</h4>
            <p class="ch-summary">
              Population explosion, natural &amp; barrier contraception, IUDs (Lippes, Cu-T, LNG-20), oral pill Saheli, surgical sterilisation, MTP Act, STIs pathogen matrix, and ART (IVF, ZIFT, GIFT, ICSI).
            </p>
            <div class="ch-stats-row">
              <span>📖 25 Clinical Sections</span>
              <span>🚼 ART &amp; IUD Decision Matrix</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="bio-zoo2" style="background: var(--gradient-emerald); color: #fff;">
              Launch Zoology Ch. 2 →
            </button>
          </div>

          <div class="catalog-chapter-card" data-chapter="bio-zoo3" data-subject="biology" style="border-top: 3px solid var(--bio-primary);">
            <div class="card-top-row">
              <span class="ch-number-badge" style="background: rgba(16,185,129,0.2); color: var(--bio-primary);">Zoology Ch. 3</span>
              <span class="ch-weightage-badge">NEET Weightage: ~8%</span>
            </div>
            <h4>Evolution</h4>
            <p class="ch-summary">
              Chemical evolution &amp; Miller-Urey experiment, paleontological evidence, homologous vs analogous organs, Darwinian natural selection &amp; adaptive radiation, Hardy-Weinberg law, and human evolution timeline.
            </p>
            <div class="ch-stats-row">
              <span>📖 35 Evolutionary Concepts</span>
              <span>🐒 Hardy-Weinberg Calculator</span>
            </div>
            <button class="btn-primary card-launch-btn" data-chapter="bio-zoo3" style="background: var(--gradient-emerald); color: #fff;">
              Launch Zoology Ch. 3 →
            </button>
          </div>
'''

catalog_end_marker = '          <!-- Card 5: Chapter 10 -->[\s\S]*?Launch Chapter 10 Module →\s*</button>\s*</div>'
html = re.sub(
    r'(<!-- Card 5: Chapter 10 -->[\s\S]*?Launch Chapter 10 Module →\s*</button>\s*</div>)',
    r'\1\n' + new_catalog_cards,
    html,
    count=1
)

# 4. Insert the new quick navbars right after quick-nav-ch10
all_new_navs = phy_navs + chem_extra_navs + bio_navs
quick_nav_ch10_end = '      <!-- Chapter 10 Quick Index -->[\s\S]*?</div>'
html = re.sub(
    r'(<!-- Chapter 10 Quick Index -->[\s\S]*?</div>)',
    r'\1\n' + all_new_navs,
    html,
    count=1
)

# 5. Insert the 10 reading containers right after chapter-10-container
all_new_containers = (
    get_current_electricity_html() + '\n' +
    get_moving_charges_html() + '\n' +
    get_magnetism_matter_html() + '\n' +
    get_emi_html() + '\n' +
    get_chemical_kinetics_html() + '\n' +
    get_coordination_compounds_html() + '\n' +
    get_botany_ch2_html() + '\n' +
    get_botany_ch3_html() + '\n' +
    get_zoology_ch2_html() + '\n' +
    get_zoology_ch3_html()
)

html = html.replace('<!-- END CHAPTER 10 CONTAINER -->', '<!-- END CHAPTER 10 CONTAINER -->\n' + all_new_containers, 1)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("index.html successfully updated with all 10 new chapters!")
