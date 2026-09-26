# -*- coding: utf-8 -*-
import os

study_section_html = '''
    <!-- ======================================================================
         VIEW 0: AAKASH CHEMISTRY STUDY HUB (CHAPTER 8)
         ====================================================================== -->
    <section id="view-study" class="view-section active">
      <!-- Chapter Hero Banner -->
      <div class="study-header-banner">
        <div class="study-breadcrumb">
          <span>Aakash Chemistry</span>
          <span class="sep">/</span>
          <span>Class 12 Medical NEET</span>
          <span class="sep">/</span>
          <span style="color: var(--accent-cyan); font-weight: 700;">Unit XII: Organic Chemistry</span>
        </div>
        <h2>Chapter 8: Aldehydes, Ketones and Carboxylic Acids</h2>
        <p>
          Master NCERT and Aakash curriculum with dynamic split-screen scrollytelling. Explore orbital hybridization, reaction matrices, distinction tests, and pKa rankings with live diagrams on the left as you study.
        </p>
      </div>

      <!-- Quick Index Sticky Bar -->
      <div class="study-quick-nav-bar" aria-label="Topic Index">
        <a href="#sec-intro" class="study-index-link active">1. Introduction</a>
        <a href="#sec-nomenclature" class="study-index-link">2. Nomenclature & Structure</a>
        <a href="#sec-prep-carbonyl" class="study-index-link">3. Preparation (Aldehydes & Ketones)</a>
        <a href="#sec-phys-carbonyl" class="study-index-link">4. Physical Properties</a>
        <a href="#sec-uses-carbonyl" class="study-index-link">5. Reactions & Uses</a>
        <a href="#sec-carboxylic-intro" class="study-index-link">6. Carboxylic Acids</a>
        <a href="#sec-prep-carboxylic" class="study-index-link">7. Preparation (Carboxylic)</a>
        <a href="#sec-phys-carboxylic" class="study-index-link">8. Physical Properties (Acids)</a>
        <a href="#sec-chem-carboxylic" class="study-index-link">9. Chemical Properties & Acidity</a>
      </div>

      <!-- Mobile Toggle for Sticky Visual Stage -->
      <div class="mobile-stage-toggle-bar">
        <button class="btn-mobile-stage-toggle" id="btn-toggle-mobile-stage">
          🔬 View Interactive Stage & Diagrams
        </button>
      </div>

      <!-- Main Scrollytelling Split Grid -->
      <div class="study-layout">
        <!-- Left Sticky Visual Column -->
        <aside class="study-visual-sticky" id="study-visual-container">
          <div class="stage-header-bar">
            <div>
              <h3 id="study-stage-title">Carbonyl Group Orbital Architecture</h3>
              <p id="study-stage-subtitle">Planar sp² carbon with electron-rich carbonyl oxygen</p>
            </div>
            <span class="stage-badge-ncert" id="study-stage-badge">NCERT Sec 8.1</span>
          </div>

          <div class="study-visual-viewport" id="study-visual-stage">
            <!-- Dynamically populated by StudyHub engine -->
          </div>

          <div style="font-size: 0.72rem; color: var(--text-muted); text-align: center; border-top: 1px solid var(--border-subtle); padding-top: 0.5rem;">
            ✦ Visual updates automatically as you scroll through topics on the right.
          </div>
        </aside>

        <!-- Right Scrolling In-Depth Reading Column -->
        <div class="study-content-column">

          <!-- TOPIC 1: Introduction -->
          <article class="study-topic-block" id="sec-intro" data-visual="carbonyl-structure">
            <div class="topic-header-row">
              <h3><span class="section-num">1</span> Introduction to Carbonyl Compounds</h3>
              <span class="subject-pill chem">Theory & Occurrence</span>
            </div>

            <p class="study-body-text">
              Carbonyl compounds are organic substances containing the <strong>carbon-oxygen double bond (&gt;C=O)</strong>, which constitutes one of the most vital functional groups in organic and biological chemistry.
            </p>

            <p class="study-body-text">
              In <strong>aldehydes</strong>, the carbonyl group is bonded to at least one hydrogen atom and one alkyl or aryl group (general formula <strong>R-CHO</strong>, with formaldehyde <strong>HCHO</strong> having two hydrogens). In <strong>ketones</strong>, the carbonyl carbon is bonded to two carbon substituents (general formula <strong>R-CO-R'</strong>), which may be aliphatic or aromatic.
            </p>

            <div class="neet-trap-alert">
              <span style="font-size: 1.15rem;">🌿</span>
              <div>
                <strong>Natural Occurrence & Fragrances (High-Yield NEET Recall):</strong>
                <ul style="margin-top: 0.3rem; padding-left: 1.2rem; font-size: 0.82rem;">
                  <li><strong>Vanillin</strong>: 4-hydroxy-3-methoxybenzaldehyde, extracted from vanilla beans.</li>
                  <li><strong>Salicylaldehyde</strong>: 2-hydroxybenzaldehyde, found in meadowsweet.</li>
                  <li><strong>Cinnamaldehyde</strong>: 3-phenylprop-2-enal, extracted from cinnamon bark.</li>
                  <li><strong>Acetophenone</strong>: Naturally present in apples, bananas, and apricots.</li>
                </ul>
              </div>
            </div>

            <p class="study-body-text">
              Carbonyl compounds play a foundational role in living organisms. Carbohydrates (aldoses and ketoses), nucleic acids, microbial pheromones, and steroid hormones (progesterone, cortisone, testosterone) all contain carbonyl groups. Industrially, they are manufactured in millions of tonnes annually as solvents, polymer precursors (e.g. Bakelite), adhesives, and pharmaceuticals.
            </p>

            <!-- Micro Checkpoint Quiz 1 -->
            <div class="study-checkpoint-card" data-explanation="Cinnamaldehyde is 3-phenylprop-2-enal, responsible for the characteristic aroma of cinnamon bark.">
              <div class="study-checkpoint-header">
                <span>Checkpoint Recall 8.1</span>
                <span style="color: var(--accent-emerald);">NEET Match Test</span>
              </div>
              <p>Which naturally occurring aromatic aldehyde gives the characteristic aroma to cinnamon?</p>
              <div class="study-opt-grid">
                <button class="study-opt-btn" data-correct="false">A. Vanillin</button>
                <button class="study-opt-btn" data-correct="false">B. Salicylaldehyde</button>
                <button class="study-opt-btn" data-correct="true">C. Cinnamaldehyde</button>
                <button class="study-opt-btn" data-correct="false">D. Benzaldehyde</button>
              </div>
              <div class="study-chk-feedback"></div>
            </div>
          </article>

          <!-- TOPIC 2: Nomenclature and Structure of Carbonyl Group -->
          <article class="study-topic-block" id="sec-nomenclature" data-visual="carbonyl-structure">
            <div class="topic-header-row">
              <h3><span class="section-num">2</span> Nomenclature and Structure of Carbonyl Group</h3>
              <span class="subject-pill chem">IUPAC & Bonding</span>
            </div>

            <p class="study-body-text">
              Under IUPAC nomenclature:
              <br>• For open-chain aldehydes, the suffix <strong>'-al'</strong> replaces the terminal '-e' of the parent alkane. The carbonyl carbon is always numbered as <strong>C-1</strong>.
              <br>• For cyclic aldehydes where the -CHO group is directly attached to a ring, the suffix <strong>'carbaldehyde'</strong> is appended to the full name of the cycloalkane (e.g. <em>Cyclohexanecarbaldehyde</em>).
              <br>• For ketones, the suffix <strong>'-one'</strong> replaces the terminal '-e' of the alkane, with the carbonyl position designated by the lowest locant (e.g. <em>Pentan-2-one</em>).
            </p>

            <table class="study-data-table">
              <thead>
                <tr>
                  <th>Structure</th>
                  <th>Common Name</th>
                  <th>IUPAC Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HCHO</td>
                  <td>Formaldehyde</td>
                  <td>Methanal</td>
                </tr>
                <tr>
                  <td>CH₃CHO</td>
                  <td>Acetaldehyde</td>
                  <td>Ethanal</td>
                </tr>
                <tr>
                  <td>CH₃COCH₃</td>
                  <td>Acetone / Dimethyl ketone</td>
                  <td>Propan-2-one</td>
                </tr>
                <tr>
                  <td>CH₃CH₂CH(CH₃)CHO</td>
                  <td>α-Methylbutyraldehyde</td>
                  <td>2-Methylbutanal</td>
                </tr>
                <tr>
                  <td>C₆H₅CHO</td>
                  <td>Benzaldehyde</td>
                  <td>Benzenecarbaldehyde</td>
                </tr>
                <tr>
                  <td>C₆H₅COCH₃</td>
                  <td>Acetophenone</td>
                  <td>1-Phenylethan-1-one</td>
                </tr>
                <tr>
                  <td>C₆H₅COC₆H₅</td>
                  <td>Benzophenone</td>
                  <td>Diphenylmethanone</td>
                </tr>
              </tbody>
            </table>

            <h4 style="color: var(--accent-cyan); font-size: 1.05rem; margin-top: 0.5rem;">Electronic Structure & Polar Nature of &gt;C=O</h4>
            <p class="study-body-text">
              The carbonyl carbon is <strong>sp² hybridized</strong> and forms three coplanar σ-bonds directed towards the corners of an equilateral triangle with bond angles of approximately <strong>120°</strong>. The fourth valence electron resides in an unhybridized 2p orbital perpendicular to the σ-plane, overlapping sideways with an oxygen 2p orbital to form a <strong>π-bond</strong>.
            </p>

            <div class="chemical-equation-box">
              Resonance in Carbonyl Group:  &gt;C=O  ⟷  &gt;C⁺—O⁻  (Electrophilic Cδ⁺ / Nucleophilic Oδ⁻)
            </div>

            <div class="neet-trap-alert">
              <span style="font-size: 1.15rem;">🎯</span>
              <div>
                <strong>Key Examination Insights (VSEPR & Dipole Moment):</strong>
                <br>• The C=O bond length is <strong>1.23 Å</strong>, significantly shorter than the C-O single bond (1.43 Å).
                <br>• Oxygen has electronegativity 3.5 versus carbon's 2.5. This ΔEN = 1.0 creates a large permanent dipole moment (<strong>μ = 2.3 to 2.8 D</strong>).
                <br>• Consequently, carbonyl compounds are substantially more polar than isomeric ethers (μ ≈ 1.15 D).
              </div>
            </div>

            <!-- Micro Checkpoint Quiz 2 -->
            <div class="study-checkpoint-card" data-explanation="The carbonyl carbon atom forms 3 σ-bonds with sp² hybridization, giving a trigonal planar geometry with ~120° bond angles.">
              <div class="study-checkpoint-header">
                <span>Checkpoint Recall 8.2</span>
                <span style="color: var(--accent-cyan);">Hybridization</span>
              </div>
              <p>The state of hybridization and spatial geometry of the carbonyl carbon atom in aldehydes is:</p>
              <div class="study-opt-grid">
                <button class="study-opt-btn" data-correct="false">A. sp³ / Tetrahedral</button>
                <button class="study-opt-btn" data-correct="true">B. sp² / Trigonal Planar</button>
                <button class="study-opt-btn" data-correct="false">C. sp / Linear</button>
                <button class="study-opt-btn" data-correct="false">D. dsp² / Square Planar</button>
              </div>
              <div class="study-chk-feedback"></div>
            </div>
          </article>

          <!-- TOPIC 3: Preparation of Aldehydes and Ketones -->
          <article class="study-topic-block" id="sec-prep-carbonyl" data-visual="prep-matrix">
            <div class="topic-header-row">
              <h3><span class="section-num">3</span> Preparation of Aldehydes and Ketones</h3>
              <span class="subject-pill chem">Reactions & Mechanisms</span>
            </div>

            <p class="study-body-text">
              Preparation methods are divided into general methods (producing both) and exclusive specialized syntheses.
            </p>

            <h4 style="color: var(--accent-cyan); font-size: 1rem;">A. General Methods</h4>
            <div class="chemical-equation-box">
              1. Controlled Oxidation of Alcohols:<br>
              • R-CH₂OH + PCC (Pyridinium chlorochromate in CH₂Cl₂) ⟶ R-CHO (Stops at aldehyde!)<br>
              • R-CH(OH)-R' + CrO₃ (or K₂Cr₂O₇ / H⁺) ⟶ R-CO-R' (Ketone)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              2. Catalytic Dehydrogenation over Heated Copper at 573 K:<br>
              • 1° Alcohol: R-CH₂OH ⟶[Cu, 573 K] R-CHO + H₂↑<br>
              • 2° Alcohol: R-CH(OH)-R' ⟶[Cu, 573 K] R-CO-R' + H₂↑<br>
              • 3° Alcohol (NEET TRAP!): Dehydrates to Alkene instead! ((CH₃)₃C-OH ⟶ (CH₃)₂C=CH₂ + H₂O)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              3. Kucherov Hydration of Alkynes (HgSO₄ / H₂SO₄ at 333 K):<br>
              • Ethyne: HC≡CH + H₂O ⟶[Hg²⁺ / H⁺, 333 K] [CH₂=CH-OH] ⟶ CH₃CHO (Only ethyne yields aldehyde!)<br>
              • Propyne: CH₃-C≡CH + H₂O ⟶[Markovnikov] [CH₃-C(OH)=CH₂] ⟶ CH₃COCH₃ (Acetone)
            </div>

            <h4 style="color: var(--accent-emerald); font-size: 1rem; margin-top: 0.75rem;">B. Exclusive Syntheses for Aldehydes</h4>
            <div class="chemical-equation-box">
              1. Rosenmund Reduction:<br>
              R-COCl + H₂ ⟶[Pd - BaSO₄ / Quinoline] R-CHO + HCl<br>
              (BaSO₄ poisons the Pd catalyst, halting reduction before alcohol formation)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              2. Stephen Reaction & DIBAL-H:<br>
              • R-C≡N + SnCl₂ + HCl ⟶ R-CH=NH·HCl ⟶[H₃O⁺] R-CHO<br>
              • R-C≡N ⟶[1. DIBAL-H (195 K) / 2. H₂O] R-CHO  (Ester: R-COOR' ⟶ R-CHO)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              3. Etard Reaction (Toluene to Benzaldehyde):<br>
              C₆H₅-CH₃ + 2 CrO₂Cl₂ (in CS₂) ⟶ Brown Chromium Complex ⟶[H₃O⁺] C₆H₅-CHO
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              4. Gattermann-Koch Reaction:<br>
              Benzene + CO + HCl ⟶[anh. AlCl₃ / CuCl] Benzaldehyde
            </div>

            <h4 style="color: var(--accent-amber); font-size: 1rem; margin-top: 0.75rem;">C. Exclusive Syntheses for Ketones</h4>
            <div class="chemical-equation-box">
              1. From Dialkylcadmium with Acyl Chlorides:<br>
              2 R-COCl + R'₂Cd ⟶ 2 R-CO-R' + CdCl₂<br>
              (R'₂Cd is less nucleophilic than Grignard, preventing addition to the product ketone!)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              2. From Nitriles with Grignard Reagent:<br>
              CH₃-C≡N + C₆H₅MgBr ⟶[ether] CH₃-C(=NMgBr)-C₆H₅ ⟶[H₃O⁺] C₆H₅-CO-CH₃ (Acetophenone)
            </div>

            <!-- Micro Checkpoint Quiz 3 -->
            <div class="study-checkpoint-card" data-explanation="Barium sulphate (BaSO₄) acts as a catalyst poison for Palladium in Rosenmund reduction, preventing the aldehyde from being further reduced to an alcohol.">
              <div class="study-checkpoint-header">
                <span>Checkpoint Recall 8.3</span>
                <span style="color: var(--accent-rose);">Named Reactions</span>
              </div>
              <p>In the Rosenmund reduction of benzoyl chloride to benzaldehyde, the specific role of BaSO₄ is to:</p>
              <div class="study-opt-grid">
                <button class="study-opt-btn" data-correct="false">A. Act as a dehydrating agent</button>
                <button class="study-opt-btn" data-correct="true">B. Poison the Pd catalyst to prevent reduction to alcohol</button>
                <button class="study-opt-btn" data-correct="false">C. Promote complete reduction to toluene</button>
                <button class="study-opt-btn" data-correct="false">D. Neutralize generated HCl gas</button>
              </div>
              <div class="study-chk-feedback"></div>
            </div>
          </article>

          <!-- TOPIC 4: Physical Properties of Aldehydes and Ketones -->
          <article class="study-topic-block" id="sec-phys-carbonyl" data-visual="nu-addition">
            <div class="topic-header-row">
              <h3><span class="section-num">4</span> Physical Properties of Aldehydes and Ketones</h3>
              <span class="subject-pill chem">Boiling Points & Solubility</span>
            </div>

            <p class="study-body-text">
              1. <strong>Physical State & Odour:</strong>
              <br>• Methanal is a pungent gas at room temperature (b.p. 252 K).
              <br>• Ethanal is a volatile liquid boiling at 294 K (21°C).
              <br>• Other aldehydes and ketones containing up to 11 carbons are colourless liquids; higher members are solids.
              <br>• Lower aldehydes possess sharp pungent odours. As molecular size increases, odour becomes less pungent and more fragrant/fruity (widely used in perfumery).
            </p>

            <p class="study-body-text">
              2. <strong>Boiling Point Comparisons (High-Yield Order):</strong>
              <br>Carbonyl compounds have <strong>dipole-dipole attractions</strong> because of the polar C=O group. They lack intermolecular hydrogen bonding with themselves (unlike alcohols and carboxylic acids).
            </p>

            <div class="neet-trap-alert">
              <span style="font-size: 1.15rem;">🌡️</span>
              <div>
                <strong>NEET Standard Boiling Point Hierarchy (Comparable Molecular Weight ≈ 58 - 60 g/mol):</strong>
                <br><strong>Carboxylic Acids</strong> (CH₃COOH: 118°C) &gt; <strong>Alcohols</strong> (CH₃CH₂CH₂OH: 97°C) &gt; <strong>Ketones</strong> (CH₃COCH₃: 56°C) &gt; <strong>Aldehydes</strong> (CH₃CH₂CHO: 49°C) &gt; <strong>Ethers</strong> (C₂H₅OCH₃: 11°C) &gt; <strong>Alkanes</strong> (n-Butane: -0.5°C).
              </div>
            </div>

            <p class="study-body-text">
              3. <strong>Solubility in Water:</strong>
              <br>Lower aldehydes and ketones (Methanal, Ethanal, Propanone) are <strong>miscible with water in all proportions</strong> because they form intermolecular hydrogen bonds with water molecules through their carbonyl oxygen:
              <br><code>&gt;C=O ··· H—O—H</code>
              <br>Solubility drops sharply as alkyl chain length increases beyond 4 carbons, because the non-polar hydrophobic hydrocarbon chain overpowers the polar interaction.
            </p>
          </article>

          <!-- TOPIC 5: Uses of Aldehydes and Ketones (& Key Chemical Reactions) -->
          <article class="study-topic-block" id="sec-uses-carbonyl" data-visual="distinction-tests">
            <div class="topic-header-row">
              <h3><span class="section-num">5</span> Chemical Reactions & Uses of Aldehydes and Ketones</h3>
              <span class="subject-pill chem">Distinction Tests & Reactions</span>
            </div>

            <h4 style="color: var(--accent-cyan); font-size: 1rem;">A. Nucleophilic Addition & Reactivity Order</h4>
            <p class="study-body-text">
              Aldehydes are generally much more reactive than ketones towards nucleophilic attack due to:
              <br>1. <strong>Steric effect</strong>: Two alkyl groups in ketones crowd the transition state more than one alkyl group in aldehydes.
              <br>2. <strong>Electronic (+I) effect</strong>: Two electron-releasing alkyl groups in ketones reduce the partial positive charge (δ⁺) on carbonyl carbon more effectively.
            </p>
            <div class="chemical-equation-box">
              Relative Reactivity:  HCHO &gt; CH₃CHO &gt; CH₃CH₂CHO &gt; CH₃COCH₃ &gt; C₆H₅CHO &gt; C₆H₅COCH₃
            </div>

            <h4 style="color: var(--accent-emerald); font-size: 1rem; margin-top: 0.75rem;">B. NEET Distinction Tests</h4>
            <div class="chemical-equation-box">
              1. Tollens' Test (Silver Mirror Test):<br>
              R-CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ ⟶ R-COO⁻ + 2 Ag↓ (Silver Mirror) + 4 NH₃ + 2 H₂O<br>
              (Positive for ALL aldehydes; negative for ketones)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              2. Fehling's Test:<br>
              R-CHO + 2 Cu²⁺ + 5 OH⁻ ⟶ R-COO⁻ + Cu₂O↓ (Red-Brown Ppt) + 3 H₂O<br>
              (Positive for ALIPHATIC aldehydes only! Aromatic aldehydes like Benzaldehyde DO NOT react!)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              3. Iodoform Reaction (Haloform Test):<br>
              CH₃-CO-R + 3 I₂ + 4 NaOH ⟶ R-COONa + CHI₃↓ (Yellow Ppt, m.p. 119°C) + 3 NaI + 3 H₂O<br>
              (Positive for all methyl ketones and acetaldehyde CH₃CHO, plus CH₃-CH(OH)- alcohols)
            </div>

            <h4 style="color: var(--accent-amber); font-size: 1rem; margin-top: 0.75rem;">C. Aldol Condensation vs Cannizzaro Reaction</h4>
            <p class="study-body-text">
              • <strong>Aldol Condensation:</strong> Aldehydes/ketones having <strong>at least one α-hydrogen</strong> heated with dilute alkali (dil. NaOH) form β-hydroxyaldehydes (aldol), which upon heating lose H₂O to form α,β-unsaturated carbonyl compounds (e.g. But-2-enal from ethanal).
              <br>• <strong>Cannizzaro Reaction:</strong> Aldehydes having <strong>no α-hydrogen</strong> (HCHO, C₆H₅CHO, (CH₃)₃C-CHO) undergo disproportionation (self oxidation-reduction) with concentrated alkali (50% NaOH) to give one molecule of alcohol and one molecule of carboxylic acid salt.
            </p>

            <h4 style="color: var(--accent-purple); font-size: 1rem; margin-top: 0.75rem;">D. Prominent Industrial & Medical Uses</h4>
            <p class="study-body-text">
              • <strong>Formalin:</strong> 40% aqueous solution of formaldehyde, widely used to preserve biological specimens and embalm tissue.
              <br>• <strong>Bakelite:</strong> Formed by condensation polymerization of phenol and formaldehyde.
              <br>• <strong>Acetone:</strong> Foremost laboratory and industrial solvent for cellulose acetate, nitrocellulose, lacquers, and varnishes.
              <br>• <strong>Benzaldehyde:</strong> Known as oil of bitter almonds, used in perfumery, cosmetics, and dye synthesis.
            </p>

            <!-- Micro Checkpoint Quiz 4 -->
            <div class="study-checkpoint-card" data-explanation="Aromatic aldehydes like benzaldehyde (C₆H₅CHO) do not reduce Fehling's solution due to resonance stabilization of the carbonyl group with the benzene ring.">
              <div class="study-checkpoint-header">
                <span>Checkpoint Recall 8.4</span>
                <span style="color: var(--accent-emerald);">Distinction Tests</span>
              </div>
              <p>Which of the following carbonyl compounds does NOT give a red precipitate with Fehling's solution?</p>
              <div class="study-opt-grid">
                <button class="study-opt-btn" data-correct="false">A. Acetaldehyde (CH₃CHO)</button>
                <button class="study-opt-btn" data-correct="false">B. Propionaldehyde (CH₃CH₂CHO)</button>
                <button class="study-opt-btn" data-correct="true">C. Benzaldehyde (C₆H₅CHO)</button>
                <button class="study-opt-btn" data-correct="false">D. Formaldehyde (HCHO)</button>
              </div>
              <div class="study-chk-feedback"></div>
            </div>
          </article>

          <!-- TOPIC 6: Carboxylic Acids Structure & Nomenclature -->
          <article class="study-topic-block" id="sec-carboxylic-intro" data-visual="carboxylic-dimer">
            <div class="topic-header-row">
              <h3><span class="section-num">6</span> Carboxylic Acids: Structure and Nomenclature</h3>
              <span class="subject-pill chem">Resonance & Bonding</span>
            </div>

            <p class="study-body-text">
              Carboxylic acids contain the <strong>carboxyl functional group (-COOH)</strong>, comprised of a carbonyl group (&gt;C=O) attached directly to a hydroxyl group (-OH).
            </p>

            <h4 style="color: var(--accent-cyan); font-size: 1rem;">Resonance of the Carboxyl Group</h4>
            <p class="study-body-text">
              Unlike simple carbonyl compounds, the lone pair of electrons on the hydroxyl oxygen is delocalized into the carbonyl π-system:
            </p>
            <div class="chemical-equation-box">
              R-C(=O)-OH  ⟷  R-C(-O⁻)=O⁺H
            </div>
            <p class="study-body-text">
              <strong>Consequence for Reactivity:</strong> This resonance delocalization reduces the partial positive charge on the carbonyl carbon. Therefore, the carbonyl carbon in carboxylic acids is <em>much less electrophilic</em> than in aldehydes and ketones, and carboxylic acids <strong>do not undergo nucleophilic addition reactions</strong> characteristic of aldehydes and ketones.
            </p>

            <table class="study-data-table">
              <thead>
                <tr>
                  <th>Formula</th>
                  <th>Common Name</th>
                  <th>IUPAC Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HCOOH</td>
                  <td>Formic acid (from red ants, formica)</td>
                  <td>Methanoic acid</td>
                </tr>
                <tr>
                  <td>CH₃COOH</td>
                  <td>Acetic acid (from vinegar, acetum)</td>
                  <td>Ethanoic acid</td>
                </tr>
                <tr>
                  <td>CH₃CH₂COOH</td>
                  <td>Propionic acid</td>
                  <td>Propanoic acid</td>
                </tr>
                <tr>
                  <td>CH₃(CH₂)₂COOH</td>
                  <td>Butyric acid (from butter, butyrum)</td>
                  <td>Butanoic acid</td>
                </tr>
                <tr>
                  <td>(COOH)₂</td>
                  <td>Oxalic acid</td>
                  <td>Ethanedioic acid</td>
                </tr>
                <tr>
                  <td>C₆H₅COOH</td>
                  <td>Benzoic acid</td>
                  <td>Benzenecarboxylic acid</td>
                </tr>
              </tbody>
            </table>
          </article>

          <!-- TOPIC 7: Methods for Preparation of Carboxylic Acids -->
          <article class="study-topic-block" id="sec-prep-carboxylic" data-visual="carboxylic-dimer">
            <div class="topic-header-row">
              <h3><span class="section-num">7</span> Methods for Preparation of Carboxylic Acids</h3>
              <span class="subject-pill chem">Synthetic Routes</span>
            </div>

            <p class="study-body-text">
              Carboxylic acids can be synthesized through multiple reliable laboratory and industrial routes:
            </p>

            <div class="chemical-equation-box">
              1. Oxidation of 1° Alcohols & Aldehydes:<br>
              R-CH₂OH ⟶[alkaline KMnO₄ or Jones reagent CrO₃ / H₂SO₄] R-COOH
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              2. Oxidation of Alkylbenzenes (Vigorous KMnO₄ Oxidation):<br>
              C₆H₅-CH₃ (or C₆H₅-CH₂CH₃) ⟶[KMnO₄ - KOH, Δ] C₆H₅-COOK ⟶[H₃O⁺] C₆H₅-COOH<br>
              (NEET Rule: Any alkyl group with at least one benzylic hydrogen oxidizes to -COOH. tert-Butylbenzene fails to react!)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              3. Hydrolysis of Nitriles and Amides:<br>
              R-C≡N ⟶[H⁺ or OH⁻, H₂O] R-CONH₂ (Amide) ⟶[H₃O⁺, Δ] R-COOH + NH₄⁺
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              4. Grignard Reagent with Dry Ice (Carbon Dioxide):<br>
              R-MgX + O=C=O ⟶[dry ether] R-COOMgX ⟶[H₃O⁺] R-COOH + Mg(OH)X<br>
              (Extremely useful method for ascending the carbon chain by one carbon atom!)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              5. Hydrolysis of Acyl Chlorides, Anhydrides, and Esters:<br>
              • R-COCl + H₂O ⟶ R-COOH + HCl<br>
              • R-COOR' + H₂O ⇌[H⁺] R-COOH + R'-OH  (or Saponification with NaOH)
            </div>

            <!-- Micro Checkpoint Quiz 5 -->
            <div class="study-checkpoint-card" data-explanation="tert-Butylbenzene lacks benzylic hydrogens (the benzylic carbon is bonded to 3 methyl groups), so it resists oxidation by alkaline KMnO₄.">
              <div class="study-checkpoint-header">
                <span>Checkpoint Recall 8.5</span>
                <span style="color: var(--accent-amber);">Oxidation Traps</span>
              </div>
              <p>Which of the following alkylbenzenes will NOT yield benzoic acid on heating with alkaline KMnO₄?</p>
              <div class="study-opt-grid">
                <button class="study-opt-btn" data-correct="false">A. Toluene</button>
                <button class="study-opt-btn" data-correct="false">B. Ethylbenzene</button>
                <button class="study-opt-btn" data-correct="false">C. Isopropylbenzene (Cumene)</button>
                <button class="study-opt-btn" data-correct="true">D. tert-Butylbenzene</button>
              </div>
              <div class="study-chk-feedback"></div>
            </div>
          </article>

          <!-- TOPIC 8: Physical Properties of Carboxylic Acids -->
          <article class="study-topic-block" id="sec-phys-carboxylic" data-visual="carboxylic-dimer">
            <div class="topic-header-row">
              <h3><span class="section-num">8</span> Physical Properties of Carboxylic Acids</h3>
              <span class="subject-pill chem">Dimerization & B.P.</span>
            </div>

            <p class="study-body-text">
              1. <strong>Unusually High Boiling Points:</strong>
              <br>Carboxylic acids boil at significantly higher temperatures than alcohols, aldehydes, ketones, or ethers of comparable molecular mass. For example, ethanoic acid (M = 60) boils at 118°C, while propan-1-ol (M = 60) boils at 97°C.
            </p>

            <div class="neet-trap-alert">
              <span style="font-size: 1.15rem;">🔗</span>
              <div>
                <strong>Explanation of Stable Cyclic Dimerization:</strong>
                <br>In carboxylic acids, the hydroxyl group is strongly polarized by the adjacent carbonyl oxygen. Two molecules of carboxylic acid form an exceptionally stable <strong>8-membered cyclic dimer</strong> held by two intermolecular hydrogen bonds.
                <br>• These dimers persist even in the vapour phase and in non-polar solvents like benzene.
                <br>• In benzene, the measured molecular mass of acetic acid is <strong>120 g/mol</strong> (double the formula mass of 60 g/mol!).
              </div>
            </div>

            <p class="study-body-text">
              2. <strong>Water Solubility:</strong>
              <br>Aliphatic carboxylic acids having up to 4 carbon atoms (methanoic, ethanoic, propanoic, butanoic) are miscible with water in all proportions because of strong hydrogen bonding with water molecules.
              <br>Solubility diminishes rapidly for higher carboxylic acids due to the increasing size of the hydrophobic hydrocarbon portion. Benzoic acid is practically insoluble in cold water.
            </p>
          </article>

          <!-- TOPIC 9: Chemical Properties of Carboxylic Acids -->
          <article class="study-topic-block" id="sec-chem-carboxylic" data-visual="acidity-ladder">
            <div class="topic-header-row">
              <h3><span class="section-num">9</span> Chemical Properties & Acidity of Carboxylic Acids</h3>
              <span class="subject-pill chem">Acidity, HVZ & Decarboxylation</span>
            </div>

            <h4 style="color: var(--accent-rose); font-size: 1.05rem;">A. Acidity and Carboxylate Ion Resonance</h4>
            <p class="study-body-text">
              Carboxylic acids are the most acidic simple organic compounds. They react with active metals (Na, K) to liberate H₂, with strong bases (NaOH) to form salts, and with weak bases like <strong>NaHCO₃</strong> to generate brisk effervescence of <strong>CO₂ gas</strong>:
            </p>
            <div class="chemical-equation-box">
              R-COOH + NaHCO₃ ⟶ R-COONa + H₂O + CO₂↑  (Brisk Effervescence)
            </div>
            <p class="study-body-text" style="font-size: 0.85rem; color: var(--accent-amber);">
              📌 <strong>Crucial NEET Distinction:</strong> Phenols DO NOT liberate CO₂ from aqueous NaHCO₃ because phenols are weaker acids (pKa ≈ 10) than carbonic acid (pKa ≈ 6.4). Carboxylic acids (pKa ≈ 4-5) are stronger than carbonic acid.
            </p>

            <h4 style="color: var(--accent-cyan); font-size: 1rem; margin-top: 0.75rem;">Why is Carboxylate Ion More Stable than Phenoxide Ion?</h4>
            <p class="study-body-text">
              In carboxylate ion (RCOO⁻), the negative charge is delocalized over <strong>two identical highly electronegative oxygen atoms</strong> (bond length 1.27 Å, bond order 1.5). In phenoxide ion, the negative charge is delocalized onto less electronegative carbon atoms of the benzene ring. Hence, carboxylate is far more stable, making carboxylic acids much stronger acids than phenols!
            </p>

            <div class="neet-trap-alert">
              <span style="font-size: 1.15rem;">⚖️</span>
              <div>
                <strong>Effect of Substituents on Acidity (Decreasing Order of -I / -M Effect):</strong>
                <br><code>-CF₃ &gt; -NO₂ &gt; -CN &gt; -F &gt; -Cl &gt; -Br &gt; -I &gt; -Ph</code>
                <br>• Electron-withdrawing groups disperse negative charge ⟶ stabilize RCOO⁻ ⟶ <strong>Increase acidity (lower pKa)</strong>.
                <br>• Electron-donating (+I) alkyl groups intensify negative charge ⟶ <strong>Decrease acidity</strong>.
                <br><code>CF₃COOH &gt; CCl₃COOH &gt; CHCl₂COOH &gt; NO₂CH₂COOH &gt; FCH₂COOH &gt; ClCH₂COOH &gt; HCOOH &gt; C₆H₅COOH &gt; CH₃COOH</code>
              </div>
            </div>

            <h4 style="color: var(--accent-emerald); font-size: 1rem; margin-top: 0.75rem;">B. Reactions Involving C-OH Cleavage</h4>
            <div class="chemical-equation-box">
              1. Anhydride Formation: 2 CH₃COOH ⟶[P₂O₅, Δ] (CH₃CO)₂O + H₂O<br>
              2. Esterification (Fischer): R-COOH + R'-OH ⇌[H₂SO₄] R-COOR' + H₂O<br>
              3. Acid Chlorides: R-COOH + SOCl₂ ⟶ R-COCl + SO₂↑ + HCl↑ (SOCl₂ preferred as byproducts are gases!)<br>
              4. With Ammonia: CH₃COOH + NH₃ ⇌ CH₃COONH₄ ⟶[Δ, -H₂O] CH₃CONH₂ (Acetamide)
            </div>

            <h4 style="color: var(--accent-amber); font-size: 1rem; margin-top: 0.75rem;">C. Hell-Volhard-Zelinsky (HVZ) & Decarboxylation</h4>
            <div class="chemical-equation-box">
              1. Hell-Volhard-Zelinsky (HVZ) Reaction:<br>
              R-CH₂-COOH + Br₂ ⟶[Red P / H₂O] R-CH(Br)-COOH (α-Bromocarboxylic acid)<br>
              (Requires at least one α-hydrogen atom! Formic acid & Benzoic acid do NOT undergo HVZ!)
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              2. Soda-Lime Decarboxylation:<br>
              R-COONa + NaOH ⟶[CaO, Δ] R-H (Alkane with one less carbon) + Na₂CO₃
            </div>
            <div class="chemical-equation-box" style="margin-top: 0.5rem;">
              3. Aromatic Electrophilic Ring Substitution:<br>
              -COOH is meta-directing and deactivating. Nitration gives m-nitrobenzoic acid.<br>
              (NEET TRAP: Benzoic acid does NOT undergo Friedel-Crafts alkylation or acylation because the Lewis acid AlCl₃ coordinates with the -COOH group!)
            </div>

            <!-- Micro Checkpoint Quiz 6 -->
            <div class="study-checkpoint-card" data-explanation="Formic acid (HCOOH) possesses no α-carbon and therefore zero α-hydrogen atoms, making it incapable of undergoing the Hell-Volhard-Zelinsky (HVZ) α-halogenation.">
              <div class="study-checkpoint-header">
                <span>Checkpoint Recall 8.6</span>
                <span style="color: var(--accent-rose);">HVZ Reaction</span>
              </div>
              <p>Which of the following carboxylic acids CANNOT undergo the Hell-Volhard-Zelinsky (HVZ) reaction?</p>
              <div class="study-opt-grid">
                <button class="study-opt-btn" data-correct="false">A. Propanoic acid</button>
                <button class="study-opt-btn" data-correct="false">B. Ethanoic acid</button>
                <button class="study-opt-btn" data-correct="true">C. Methanoic acid (Formic acid)</button>
                <button class="study-opt-btn" data-correct="false">D. 2-Methylpropanoic acid</button>
              </div>
              <div class="study-chk-feedback"></div>
            </div>
          </article>

        </div>
      </div>
    </section>
'''

# Read current index.html
with open(r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update the navigation bar: Add the Study Hub button
nav_search = '<nav class="nav-tabs" aria-label="Main Tool Navigation">'
new_nav_button = '''<nav class="nav-tabs" aria-label="Main Tool Navigation">
      <button class="nav-tab active" data-target="view-study" id="tab-study">
        <span>📖</span> Aakash Study Hub (Ch. 8)
      </button>'''

if 'id="tab-study"' not in html:
    html = html.replace(nav_search, new_nav_button, 1)
    # Remove active class from tab-3d
    html = html.replace('<button class="nav-tab active" data-target="view-3d-models" id="tab-3d">', '<button class="nav-tab" data-target="view-3d-models" id="tab-3d">', 1)

# 2. Insert the Study Section before view-3d-models
view_3d_marker = '    <section id="view-3d-models" class="view-section active">'
replacement_3d = '    <section id="view-3d-models" class="view-section">'

if 'id="view-study"' not in html:
    html = html.replace(view_3d_marker, study_section_html + '\n' + replacement_3d, 1)

with open(r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("index.html updated successfully with Aakash Study Hub (Chapter 8)!")
