# -*- coding: utf-8 -*-
"""
Generate complete, rich HTML for the 2 Extra Chemistry Chapters:
1. Chemical Kinetics (chem-kinetics)
2. Coordination Compounds (chem-coordination)
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

chem_extra_navs = '''
      <!-- Chemistry: Chemical Kinetics Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-chem-kinetics" style="display: none;" aria-label="Chemical Kinetics Topic Index">
        <a href="#sec-chem-kin-rate" class="study-index-link active">1. Reaction Rate</a>
        <a href="#sec-chem-kin-order" class="study-index-link">6. Rate Law & Order</a>
        <a href="#sec-chem-kin-zero" class="study-index-link">8. Zero-Order Kinetics</a>
        <a href="#sec-chem-kin-first" class="study-index-link">10. First-Order Kinetics</a>
        <a href="#sec-chem-kin-molecularity" class="study-index-link">16. Molecularity vs Order</a>
        <a href="#sec-chem-kin-arrhenius" class="study-index-link">18. Arrhenius Equation</a>
        <a href="#sec-chem-kin-collision" class="study-index-link">24. Collision Theory & Ea</a>
        <a href="#sec-chem-kin-traps" class="study-index-link">27. Formula Chart & Traps</a>
      </div>

      <!-- Chemistry: Coordination Compounds Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-chem-coordination" style="display: none;" aria-label="Coordination Compounds Topic Index">
        <a href="#sec-chem-coord-intro" class="study-index-link active">1. Intro & Ligands</a>
        <a href="#sec-chem-coord-werner" class="study-index-link">10. Werner's Theory</a>
        <a href="#sec-chem-coord-nomen" class="study-index-link">12. IUPAC Nomenclature</a>
        <a href="#sec-chem-coord-isomers" class="study-index-link">18. Structural & Stereoisomerism</a>
        <a href="#sec-chem-coord-vbt" class="study-index-link">28. Valence Bond Theory (VBT)</a>
        <a href="#sec-chem-coord-cft" class="study-index-link">33. Crystal Field Theory (CFT)</a>
        <a href="#sec-chem-coord-props" class="study-index-link">41. Magnetic, Colour & Stability</a>
        <a href="#sec-chem-coord-traps" class="study-index-link">50. Formula Chart & Traps</a>
      </div>
'''

def get_chemical_kinetics_html():
    return '''
<div id="chapter-chem-kinetics-container" style="display: none;">
  <!-- TOPIC 1 to 5: Reaction Rates -->
  <article class="study-topic-block" id="sec-chem-kin-rate" data-visual="chem-kin-order">
    <div class="topic-header-row">
      <h3><span class="section-num">1-5</span> Rates of Chemical Reactions</h3>
      <span class="subject-pill chem">Physical Chemistry &bull; Ch. 4</span>
    </div>
    <p class="study-body-text">
      <strong>Chemical Kinetics:</strong> Branch of chemistry dealing with the rate of chemical reactions, the factors influencing them, and the molecular mechanism.
      <br>For general reaction <code>a A + b B ⟶ c C + d D</code>:
    </p>
    <div class="chemical-equation-box">
      Rate = - (1/a) (Δ[A] / Δt) = - (1/b) (Δ[B] / Δt) = + (1/c) (Δ[C] / Δt) = + (1/d) (Δ[D] / Δt)
    </div>
    <p class="study-body-text">
      &bull; <strong>Negative Sign:</strong> Indicates reactant concentration decreases over time.
      <br>&bull; <strong>Average Rate:</strong> <code>r_avg = - Δ[R] / Δt</code> over a finite time interval.
      <br>&bull; <strong>Instantaneous Rate:</strong> <code>r_inst = - d[R] / dt</code> (tangent slope of [R] vs t plot).
      <br>&bull; <strong>Factors Affecting Rate:</strong> Concentration of reactants, Temperature, Catalyst (lowers activation energy), Surface area, Nature of reactants.
    </p>
  </article>

  <!-- TOPIC 6 & 7: Rate Law & Order of Reaction -->
  <article class="study-topic-block" id="sec-chem-kin-order" data-visual="chem-kin-order">
    <div class="topic-header-row">
      <h3><span class="section-num">6-7</span> Rate Law Expression & Order of Reaction</h3>
      <span class="subject-pill chem">Experimental Kinetics</span>
    </div>
    <p class="study-body-text">
      <strong>Rate Law:</strong> Experimentally determined mathematical expression relating reaction rate to molar concentrations of reactants:
    </p>
    <div class="chemical-equation-box">
      Rate = k [A]^x [B]^y &nbsp;&nbsp;⇒&nbsp;&nbsp; Overall Order n = x + y
    </div>
    <p class="study-body-text">
      &bull; <strong>Order of Reaction:</strong> The sum of powers of concentration terms in the rate law.
      <br>&bull; <em>Crucial NEET fact:</em> Order cannot generally be deduced from stoichiometric coefficients in a balanced equation! It is strictly an experimental quantity.
      <br>&bull; <strong>General Unit of Rate Constant (k):</strong> <code>[k] = (mol / L)^(1 - n) · s⁻¹</code>.
    </p>
  </article>

  <!-- TOPIC 8 & 9: Zero-Order Kinetics -->
  <article class="study-topic-block" id="sec-chem-kin-zero" data-visual="chem-kin-order">
    <div class="topic-header-row">
      <h3><span class="section-num">8-9</span> Zero-Order Reaction Kinetics</h3>
      <span class="subject-pill chem">Integrated Equations</span>
    </div>
    <p class="study-body-text">
      Rate is independent of reactant concentration: <code>- d[R] / dt = k [R]⁰ = k</code>.
    </p>
    <div class="chemical-equation-box">
      [R]_t = [R]₀ - k · t &nbsp;&nbsp;⇒&nbsp;&nbsp; k = ([R]₀ - [R]_t) / t
    </div>
    <p class="study-body-text">
      &bull; <strong>Half-Life (t½):</strong> Time required for concentration to reduce to [R]₀ / 2:
    </p>
    <div class="chemical-equation-box">
      t½ = [R]₀ / (2k) &nbsp;&nbsp;⇒&nbsp;&nbsp; t½ ∝ [R]₀ (Directly proportional to initial concentration!)
    </div>
    <p class="study-body-text">
      &bull; <strong>Plot of [R] vs t:</strong> Straight line with <strong>Slope = -k</strong> and <strong>Intercept = [R]₀</strong>.
      <br>&bull; <strong>Examples:</strong> Decomposition of gaseous NH₃ on hot Pt surface; Photochemical H₂ + Cl₂ ⟶ 2 HCl.
    </p>
  </article>

  <!-- TOPIC 10 to 15: First-Order Kinetics -->
  <article class="study-topic-block" id="sec-chem-kin-first" data-visual="chem-kin-halflife">
    <div class="topic-header-row">
      <h3><span class="section-num">10-15</span> First-Order Reactions & Half-Life</h3>
      <span class="subject-pill chem">Major Numerical Area</span>
    </div>
    <p class="study-body-text">
      Rate is proportional to first power of reactant concentration: <code>r = k [R]</code>.
    </p>
    <div class="chemical-equation-box">
      k = (2.303 / t) · log([R]₀ / [R]_t) &nbsp;&nbsp;or&nbsp;&nbsp; [R]_t = [R]₀ · e^(-kt)
    </div>
    <p class="study-body-text">
      &bull; <strong>Half-Life of First-Order:</strong>
    </p>
    <div class="chemical-equation-box">
      t½ = ln 2 / k = 0.693 / k &nbsp;&nbsp;(Completely INDEPENDENT of initial concentration [R]₀!)
    </div>
    <p class="study-body-text">
      &bull; <strong>Fraction Remaining after n Half-Lives:</strong> <code>[R]_t / [R]₀ = (½)ⁿ</code>.
      <br>&bull; <strong>Pseudo First-Order Reaction:</strong> A higher-order reaction that behaves as first-order when one reactant is present in huge stoichiometric excess (e.g., Acid-catalysed hydrolysis of ethyl acetate: <code>CH₃COOC₂H₅ + H₂O(excess) ⟶ CH₃COOH + C₂H₅OH</code>; Inversion of cane sugar).
    </p>
  </article>

  <!-- TOPIC 16 & 17: Molecularity vs Order -->
  <article class="study-topic-block" id="sec-chem-kin-molecularity" data-visual="chem-kin-order">
    <div class="topic-header-row">
      <h3><span class="section-num">16-17</span> Order vs Molecularity</h3>
      <span class="subject-pill chem">CBSE Comparison</span>
    </div>
    <table class="study-data-table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Order of Reaction</th>
          <th>Molecularity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Definition</strong></td>
          <td>Sum of concentration exponents in rate law</td>
          <td>Number of reacting species in elementary step</td>
        </tr>
        <tr>
          <td><strong>Determination</strong></td>
          <td>Experimentally determined only</td>
          <td>Theoretical mechanism-based concept</td>
        </tr>
        <tr>
          <td><strong>Values</strong></td>
          <td>Can be 0, fraction, integer, or negative</td>
          <td>Always a positive whole integer (1, 2, 3)</td>
        </tr>
        <tr>
          <td><strong>Zero Value?</strong></td>
          <td>Can be zero (Zero-order reaction)</td>
          <td>NEVER zero</td>
        </tr>
        <tr>
          <td><strong>Scope</strong></td>
          <td>Applies to elementary AND complex reactions</td>
          <td>Meaningful ONLY for elementary steps</td>
        </tr>
      </tbody>
    </table>
  </article>

  <!-- TOPIC 18 to 23: Arrhenius Equation -->
  <article class="study-topic-block" id="sec-chem-kin-arrhenius" data-visual="chem-kin-arrhenius">
    <div class="topic-header-row">
      <h3><span class="section-num">18-23</span> Temperature Dependence & The Arrhenius Equation</h3>
      <span class="subject-pill chem">Activation Energy</span>
    </div>
    <p class="study-body-text">
      Generally, reaction rate nearly doubles for every 10°C rise in temperature (Temperature Coefficient ≈ 2 to 3).
    </p>
    <div class="chemical-equation-box">
      k = A · e^(-Ea / RT) &nbsp;&nbsp;⇒&nbsp;&nbsp; log k = log A - (Ea / (2.303 · R · T))
    </div>
    <p class="study-body-text">
      &bull; <strong>Two-Temperature Form (Core Numerical Formula):</strong>
    </p>
    <div class="chemical-equation-box">
      log(k₂ / k₁) = [Ea / (2.303 R)] · [(T₂ - T₁) / (T₁ · T₂)]
    </div>
    <p class="study-body-text">
      &bull; <strong>Arrhenius Plot:</strong> <code>log k vs 1/T</code> gives a straight line with <strong>Slope = - Ea / (2.303 R)</strong> and <strong>Intercept = log A</strong>.
      <br>&bull; <em>Crucial Note:</em> Temperature MUST always be expressed in <strong>Kelvin</strong> (K = °C + 273.15)!
    </p>
  </article>

  <!-- TOPIC 24 to 27: Collision Theory & Traps -->
  <article class="study-topic-block" id="sec-chem-kin-collision" data-visual="chem-kin-arrhenius">
    <div class="topic-header-row">
      <h3><span class="section-num">24-27</span> Collision Theory & Energy Profile</h3>
      <span class="subject-pill chem">Transition State</span>
    </div>
    <p class="study-body-text">
      For an effective chemical reaction, reactant molecules must satisfy TWO criteria simultaneously:
      <br>1. <strong>Energy Barrier:</strong> Molecules must possess minimum energy equal to or exceeding <strong>Threshold Energy</strong> (Activation Energy <code>Ea = E_threshold - E_reactants</code>).
      <br>2. <strong>Orientation Barrier:</strong> Molecules must collide with proper spatial orientation (steric factor P: <code>k = P · Z_AB · e^(-Ea/RT)</code>).
      <br><br>
      <strong>Role of Catalyst:</strong>
      <br>&bull; Provides an alternative reaction pathway with a lower activation energy barrier.
      <br>&bull; <strong>Does NOT alter ΔH (enthalpy of reaction)</strong>!
      <br>&bull; <strong>Does NOT alter Equilibrium Constant (K_eq)</strong>; accelerates forward and backward rates equally!
    </p>
  </article>
</div>
'''

def get_coordination_compounds_html():
    return '''
<div id="chapter-chem-coordination-container" style="display: none;">
  <!-- TOPIC 1 to 9: Intro & Important Terms -->
  <article class="study-topic-block" id="sec-chem-coord-intro" data-visual="chem-coord-cft">
    <div class="topic-header-row">
      <h3><span class="section-num">1-9</span> Coordination Compounds & Ligand Classifications</h3>
      <span class="subject-pill chem">Inorganic Chemistry &bull; Ch. 5</span>
    </div>
    <p class="study-body-text">
      A coordination compound contains a central metal atom/ion surrounded by electron-pair donating ligands via coordinate covalent bonds, enclosed in square brackets <code>[M(L)_n]</code> (Coordination Sphere).
      <br>&bull; <strong>Denticity of Ligands:</strong>
      <br>&nbsp;&nbsp;&bull; <em>Unidentate:</em> One donor atom (<code>H₂O, NH₃, Cl⁻, CN⁻, OH⁻</code>).
      <br>&nbsp;&nbsp;&bull; <em>Bidentate:</em> Two donor atoms (Ethane-1,2-diamine <code>en</code>, Oxalate <code>C₂O₄²⁻</code>).
      <br>&nbsp;&nbsp;&bull; <em>Polydentate:</em> Multiple donor atoms (<code>EDTA⁴⁻</code> is hexadentate!).
      <br>&bull; <strong>Chelate Effect:</strong> Chelating (ring-forming) di- or polydentate ligands form complexes with exceptionally high thermodynamic stability compared to monodentate analogues.
      <br>&bull; <strong>Ambidentate Ligands:</strong> Can coordinate through either of two different donor atoms (e.g., <code>-NO₂⁻</code> nitro vs <code>-ONO⁻</code> nitrito; <code>-SCN⁻</code> thiocyanato vs <code>-NCS⁻</code> isothiocyanato). Gives rise to <strong>Linkage Isomerism</strong>!
    </p>
  </article>

  <!-- TOPIC 10 & 11: Werner's Theory -->
  <article class="study-topic-block" id="sec-chem-coord-werner" data-visual="chem-coord-werner">
    <div class="topic-header-row">
      <h3><span class="section-num">10-11</span> Alfred Werner's Coordination Theory</h3>
      <span class="subject-pill chem">Nobel Prize Foundation</span>
    </div>
    <p class="study-body-text">
      Werner proposed that metals in coordination compounds exhibit two types of valency:
      <br>&bull; <strong>Primary Valency:</strong> Corresponds to the <strong>Oxidation State</strong>; ionisable; non-directional; satisfied by negative ions.
      <br>&bull; <strong>Secondary Valency:</strong> Corresponds to the <strong>Coordination Number</strong>; non-ionisable; directional (defines geometry like octahedral, tetrahedral, square planar); satisfied by neutral molecules or negative ions.
    </p>
    <table class="study-data-table">
      <thead>
        <tr>
          <th>Complex Formula</th>
          <th>Formulation</th>
          <th>Ionisable Cl⁻ (AgCl ppt)</th>
          <th>Total Ions in Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>CoCl₃ · 6NH₃</code></td><td><code>[Co(NH₃)₆]Cl₃</code></td><td>3 moles AgCl</td><td>4 ions (1:3 electrolyte)</td></tr>
        <tr><td><code>CoCl₃ · 5NH₃</code></td><td><code>[Co(NH₃)₅Cl]Cl₂</code></td><td>2 moles AgCl</td><td>3 ions (1:2 electrolyte)</td></tr>
        <tr><td><code>CoCl₃ · 4NH₃</code></td><td><code>[Co(NH₃)₄Cl₂]Cl</code></td><td>1 mole AgCl</td><td>2 ions (1:1 electrolyte)</td></tr>
        <tr><td><code>CoCl₃ · 3NH₃</code></td><td><code>[Co(NH₃)₃Cl₃]</code></td><td>0 moles AgCl</td><td>Non-electrolyte (0 ions)</td></tr>
      </tbody>
    </table>
  </article>

  <!-- TOPIC 12 to 17: IUPAC Nomenclature -->
  <article class="study-topic-block" id="sec-chem-coord-nomen" data-visual="chem-coord-cft">
    <div class="topic-header-row">
      <h3><span class="section-num">12-17</span> IUPAC Nomenclature of Coordination Complexes</h3>
      <span class="subject-pill chem">Systematic Naming</span>
    </div>
    <p class="study-body-text">
      <strong>Core IUPAC Rules:</strong>
      <br>1. Cation is named first in both cationic and anionic complexes.
      <br>2. Inside coordination entity, ligands are named in <strong>alphabetical order</strong> before the central metal.
      <br>3. Anionic ligands end in <code>-o</code> (e.g. chlorido, cyanido, oxalato); neutral ligands use special names (<code>H₂O = aqua, NH₃ = ammine, CO = carbonyl, NO = nitrosyl</code>).
      <br>4. Multiplicity prefixes: <em>di, tri, tetra</em>; or <em>bis, tris, tetrakis</em> for complex ligands containing numerical prefixes (e.g. <em>tris(ethane-1,2-diamine)</em>).
      <br>5. Oxidation state of central metal is indicated by <strong>Roman numerals in parentheses</strong>.
      <br>6. If the complex entity is an <strong>anion</strong>, the metal name ends with suffix <strong>-ate</strong> (e.g., ferrate, cobaltate, cuprate, platinate).
      <br><br>
      <strong>Benchmark Examples:</strong>
      <br>&bull; <code>[Co(NH₃)₆]Cl₃</code>: Hexaamminecobalt(III) chloride
      <br>&bull; <code>[Co(NH₃)₅Cl]Cl₂</code>: Pentaamminechloridocobalt(III) chloride
      <br>&bull; <code>K₄[Fe(CN)₆]</code>: Potassium hexacyanidoferrate(II)
      <br>&bull; <code>[Pt(NH₃)₂Cl₂]</code>: Diamminedichloridoplatinum(II)
    </p>
  </article>

  <!-- TOPIC 18 to 27: Isomerism -->
  <article class="study-topic-block" id="sec-chem-coord-isomers" data-visual="chem-coord-isomers">
    <div class="topic-header-row">
      <h3><span class="section-num">18-27</span> Isomerism: Structural & Stereoisomerism</h3>
      <span class="subject-pill chem">Spatial & Structural Arrangements</span>
    </div>
    <h4 style="color: var(--accent-cyan); font-size: 0.95rem;">A. Structural Isomerism:</h4>
    <p class="study-body-text">
      &bull; <strong>Linkage Isomerism:</strong> Ambidentate ligands (<code>[Co(NH₃)₅(NO₂)]Cl₂</code> yellow vs <code>[Co(NH₃)₅(ONO)]Cl₂</code> red).
      <br>&bull; <strong>Coordination Isomerism:</strong> Interchange of ligands between cationic and anionic entities (<code>[Co(NH₃)₆][Cr(CN)₆]</code> and <code>[Cr(NH₃)₆][Co(CN)₆]</code>).
      <br>&bull; <strong>Ionisation Isomerism:</strong> Exchange of counter ion with a ligand inside coordination sphere (<code>[Co(NH₃)₅SO₄]Br</code> red gives AgBr ppt; <code>[Co(NH₃)₅Br]SO₄</code> violet gives BaSO₄ ppt).
      <br>&bull; <strong>Solvate / Hydrate Isomerism:</strong> Water inside vs outside lattice (<code>[Cr(H₂O)₆]Cl₃</code> violet vs <code>[Cr(H₂O)₅Cl]Cl₂·H₂O</code> grey-green).
    </p>
    <h4 style="color: var(--accent-rose); font-size: 0.95rem; margin-top: 0.8rem;">B. Stereoisomerism:</h4>
    <p class="study-body-text">
      &bull; <strong>Geometrical Isomerism:</strong> Cis-trans in square planar [MA₂B₂] (e.g., <em>cis-platin</em> <code>cis-[Pt(NH₃)₂Cl₂]</code> is an anticancer drug; trans is inactive) and octahedral [MA₄B₂]. Facial (fac) and meridional (mer) isomers in [MA₃B₃] complexes.
      <br>&bull; <strong>Optical Isomerism (Enantiomers):</strong> Non-superimposable mirror images. Common in octahedral complexes with bidentate ligands, e.g. <code>[Co(en)₃]³⁺</code> and <code>cis-[Co(en)₂Cl₂]⁺</code>. <em>(trans-[Co(en)₂Cl₂]⁺ has a plane of symmetry and is optically inactive!).</em>
    </p>
  </article>

  <!-- TOPIC 28 to 32: Valence Bond Theory (VBT) -->
  <article class="study-topic-block" id="sec-chem-coord-vbt" data-visual="chem-coord-cft">
    <div class="topic-header-row">
      <h3><span class="section-num">28-32</span> Valence Bond Theory (VBT) & Hybridisation</h3>
      <span class="subject-pill chem">Bonding Models</span>
    </div>
    <p class="study-body-text">
      Ligands donate lone pairs into vacant hybridised metal orbitals:
      <br>&bull; <strong>Inner Orbital Complex:</strong> Uses <code>(n-1)d</code> orbitals ⟶ <code>d²sp³</code> (Octahedral). Associated with strong-field ligands that force pairing of d-electrons; low-spin / diamagnetic.
      <br>&bull; <strong>Outer Orbital Complex:</strong> Uses outer <code>nd</code> orbitals ⟶ <code>sp³d²</code> (Octahedral). Associated with weak-field ligands; high-spin / paramagnetic.
      <br>&bull; <strong>Coordination Number 4:</strong> <code>sp³</code> (Tetrahedral, e.g., <code>[NiCl₄]²⁻</code> paramagnetic) vs <code>dsp²</code> (Square planar, e.g., <code>[Ni(CN)₄]²⁻</code> diamagnetic).
    </p>
  </article>

  <!-- TOPIC 33 to 40: Crystal Field Theory (CFT) -->
  <article class="study-topic-block" id="sec-chem-coord-cft" data-visual="chem-coord-cft">
    <div class="topic-header-row">
      <h3><span class="section-num">33-40</span> Crystal Field Theory (CFT) & Δo vs Δt Splitting</h3>
      <span class="subject-pill chem">Electrostatic Crystal Field</span>
    </div>
    <p class="study-body-text">
      Treats metal-ligand interactions as electrostatic point charges. Splitting of degenerate d-orbitals:
      <br>&bull; <strong>Octahedral Splitting (Δo):</strong>
      <br>&nbsp;&nbsp;&bull; <code>eg</code> orbitals (dx²-y², dz²) point directly at ligands ⟶ destabilised to <strong>+ 0.6 Δo</strong>.
      <br>&nbsp;&nbsp;&bull; <code>t2g</code> orbitals (dxy, dyz, dxz) point between axes ⟶ stabilised to <strong>- 0.4 Δo</strong>.
      <br>&bull; <strong>Spectrochemical Series:</strong>
    </p>
    <div class="chemical-equation-box" style="font-size: 0.85rem;">
      I⁻ &lt; Br⁻ &lt; SCN⁻ &lt; Cl⁻ &lt; S²⁻ &lt; F⁻ &lt; OH⁻ &lt; C₂O₄²⁻ &lt; H₂O &lt; NCS⁻ &lt; EDTA⁴⁻ &lt; NH₃ &lt; en &lt; CN⁻ &lt; CO
    </div>
    <p class="study-body-text">
      &bull; <strong>High-Spin vs Low-Spin:</strong>
      <br>&nbsp;&nbsp;&bull; Weak-field ligand: <code>Δo &lt; P</code> (Pairing energy) ⟶ electrons enter eg without pairing (High spin).
      <br>&nbsp;&nbsp;&bull; Strong-field ligand: <code>Δo &gt; P</code> ⟶ electrons pair up in t2g first (Low spin).
      <br>&bull; <strong>Tetrahedral Splitting (Δt):</strong> Inverted splitting (e lower, t₂ higher). <code>Δt = (4/9) Δo</code>. Tetrahedral complexes are <strong>always high-spin</strong> because Δt is too small to overcome pairing energy P!
    </p>
  </article>

  <!-- TOPIC 41 to 50: Properties & Applications -->
  <article class="study-topic-block" id="sec-chem-coord-props" data-visual="chem-coord-cft">
    <div class="topic-header-row">
      <h3><span class="section-num">41-50</span> Magnetic Properties, Colour & Bio-Applications</h3>
      <span class="subject-pill chem">Spectroscopy & Applications</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Spin-Only Magnetic Moment:</strong> <code>μ = √(n(n + 2)) BM</code> (where n = number of unpaired electrons).
      <br>&bull; <strong>Colour:</strong> Due to <strong>d–d electronic transitions</strong> across Δo. Observed colour is complementary to the absorbed wavelength. <em>d⁰ (e.g. Sc³⁺, Ti⁴⁺) and d¹⁰ (e.g. Zn²⁺, Cu⁺) complexes are completely COLOURLESS!</em>
      <br><br>
      <strong>Biological & Medicinal Significance (High-Yield NEET Match):</strong>
      <br>&bull; <strong>Haemoglobin:</strong> Red blood pigment containing <strong>Fe²⁺</strong> porphyrin complex.
      <br>&bull; <strong>Chlorophyll:</strong> Green photosynthetic pigment containing <strong>Mg²⁺</strong> porphyrin complex.
      <br>&bull; <strong>Vitamin B₁₂ (Cyanocobalamin):</strong> Anti-pernicious anaemia factor containing <strong>Co³⁺</strong>.
      <br>&bull; <strong>Cisplatin (cis-[Pt(NH₃)₂Cl₂]):</strong> Potent clinical antitumor / anticancer chemotherapeutic.
      <br>&bull; <strong>EDTA (Chelating Agent):</strong> Used in treatment of lead poisoning.
    </p>
  </article>
</div>
'''

print("Chemistry extra generator module ready.")
