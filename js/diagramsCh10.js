// ==========================================================================
// Chapter 10: Biomolecules - Interactive Visual Stage
// High-yield NCERT, CBSE Board & NEET visual simulations
// ==========================================================================

export class DiagramsCh10 {
  constructor(hub) {
    this.hub = hub;
    this.glucoseForm = 'alpha'; // 'alpha' | 'beta' | 'open'
    this.disaccharideType = 'sucrose'; // 'sucrose' | 'maltose' | 'lactose'
    this.aminoAcidPh = 'neutral'; // 'acidic' | 'neutral' | 'basic'
    this.proteinLevel = 'secondary'; // 'primary' | 'secondary' | 'tertiary' | 'denaturation'
  }

  pop() {
    if (this.hub && this.hub.playAudio) this.hub.playAudio('pop');
  }

  // 1. Glucose Cyclic Structure, Anomeric Carbon & Mutarotation
  renderGlucoseStructure() {
    this.hub.stageTitle.textContent = "D-Glucose Cyclic Pyranose & Anomeric Carbon (C1)";
    this.hub.stageSubtitle.textContent = "Intramolecular hemiacetal formation between C-1 aldehyde and C-5 hydroxyl group";
    this.hub.stageBadge.textContent = "NCERT Sec 10.1.2";

    let stateInfo = {};
    if (this.glucoseForm === 'alpha') {
      stateInfo = {
        name: 'α-D-Glucopyranose',
        rotation: '[α]D = +112.2°',
        anomeric: 'Hydroxyl group (-OH) on anomeric carbon C-1 points DOWNWARDS (trans to -CH₂OH at C-5).',
        percentage: 'Represents ~36% of glucose molecules at mutarotation equilibrium in water.'
      };
    } else if (this.glucoseForm === 'beta') {
      stateInfo = {
        name: 'β-D-Glucopyranose',
        rotation: '[α]D = +18.7°',
        anomeric: 'Hydroxyl group (-OH) on anomeric carbon C-1 points UPWARDS (cis to -CH₂OH at C-5).',
        percentage: 'More stable due to all equatorial substituents; represents ~64% at mutarotation equilibrium!'
      };
    } else {
      stateInfo = {
        name: 'Open-Chain D-(+)-Glucose (Fischer Projection)',
        rotation: 'Equilibrium mixture: [α]D = +52.7°',
        anomeric: 'Contains free -CHO group at C-1. Exists as only 0.02% of molecules in aqueous solution.',
        percentage: 'Interconverts α and β anomers via mutarotation through this open-chain intermediate.'
      };
    }

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap; margin-bottom: 0.8rem;">
          <button class="stage-control-btn ${this.glucoseForm === 'alpha' ? 'active' : ''}" id="btn-glu-alpha">α-D-Glucose (+112°)</button>
          <button class="stage-control-btn ${this.glucoseForm === 'beta' ? 'active' : ''}" id="btn-glu-beta">β-D-Glucose (+18.7°)</button>
          <button class="stage-control-btn ${this.glucoseForm === 'open' ? 'active' : ''}" id="btn-glu-open">Open Chain & Mutarotation</button>
        </div>

        <div class="model-meta-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">${stateInfo.name}</span>
            <span class="stage-badge-ncert" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">${stateInfo.rotation}</span>
          </div>
          <p style="font-size: 0.82rem; color: #fff; margin-top: 0.4rem;">
            <strong>Anomeric Carbon C-1:</strong> ${stateInfo.anomeric}
          </p>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
            ${stateInfo.percentage}
          </p>
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.8rem;">
          <span style="font-size: 1.25rem;">🌀</span>
          <div>
            <strong>What is Mutarotation? (Classic Board Definition):</strong>
            The spontaneous change in the specific optical rotation of an optically active carbohydrate solution over time until it reaches a stable equilibrium value (+52.7° for glucose).
            <br><code>α-D-Glucose (+112.2°) ⇌ Open Chain Form ⇌ β-D-Glucose (+18.7°)</code>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-glu-alpha')?.addEventListener('click', () => {
      this.glucoseForm = 'alpha';
      this.pop();
      this.renderGlucoseStructure();
    });
    document.getElementById('btn-glu-beta')?.addEventListener('click', () => {
      this.glucoseForm = 'beta';
      this.pop();
      this.renderGlucoseStructure();
    });
    document.getElementById('btn-glu-open')?.addEventListener('click', () => {
      this.glucoseForm = 'open';
      this.pop();
      this.renderGlucoseStructure();
    });
  }

  // 2. Disaccharides & Glycosidic Linkages (Sucrose vs Maltose vs Lactose)
  renderDisaccharides() {
    this.hub.stageTitle.textContent = "Disaccharides & Glycosidic Linkages";
    this.hub.stageSubtitle.textContent = "Oxide linkage formed by condensation of two monosaccharide units with loss of water";
    this.hub.stageBadge.textContent = "NCERT Sec 10.1.3";

    const sugars = {
      'sucrose': {
        name: 'Sucrose (Cane Sugar)',
        linkage: 'α(1 → 2) Glycosidic Linkage between C-1 of α-D-glucose and C-2 of β-D-fructose',
        reducing: 'Non-Reducing Sugar',
        reason: 'Both reducing anomeric centers (C-1 of glucose and C-2 of fructose) are involved in glycosidic linkage; no free hemiacetal or hemiketal group exists.',
        invert: 'Invert Sugar: Dextrorotatory (+66.5°) upon hydrolysis becomes laevorotatory (-39.9°) because laevorotation of D-fructose (-92.4°) exceeds dextrorotation of D-glucose (+52.5°).'
      },
      'maltose': {
        name: 'Maltose (Malt Sugar)',
        linkage: 'α(1 → 4) Glycosidic Linkage between C-1 of one α-D-glucose and C-4 of another α-D-glucose',
        reducing: 'Reducing Sugar',
        reason: 'The C-1 anomeric carbon of the second glucose unit is free and can open to form a reducing aldehyde group; reduces Fehling\'s and Tollens\' reagents.',
        invert: 'Formed during starch digestion by the enzyme salivary or pancreatic amylase (diastase).'
      },
      'lactose': {
        name: 'Lactose (Milk Sugar)',
        linkage: 'β(1 → 4) Glycosidic Linkage between C-1 of β-D-galactose and C-4 of β-D-glucose',
        reducing: 'Reducing Sugar',
        reason: 'The C-1 anomeric carbon of the β-D-glucose unit is free to undergo mutarotation and act as a reducing agent.',
        invert: 'Hydrolyzed by intestinal lactase enzyme into D-galactose and D-glucose.'
      }
    };

    const cur = sugars[this.disaccharideType];

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap; margin-bottom: 0.8rem;">
          <button class="stage-control-btn ${this.disaccharideType === 'sucrose' ? 'active' : ''}" id="btn-dis-suc">Sucrose (Non-Reducing)</button>
          <button class="stage-control-btn ${this.disaccharideType === 'maltose' ? 'active' : ''}" id="btn-dis-mal">Maltose (Reducing)</button>
          <button class="stage-control-btn ${this.disaccharideType === 'lactose' ? 'active' : ''}" id="btn-dis-lac">Lactose (Reducing)</button>
        </div>

        <div class="model-meta-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">${cur.name}</span>
            <span class="stage-badge-ncert" style="background: ${this.disaccharideType === 'sucrose' ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)'}; color: ${this.disaccharideType === 'sucrose' ? '#f87171' : 'var(--accent-emerald)'};">
              ${cur.reducing}
            </span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; margin: 0.5rem 0; padding: 0.45rem; background: rgba(0,0,0,0.3); border-radius: 6px; color: var(--accent-amber);">
            ${cur.linkage}
          </div>
          <p style="font-size: 0.82rem; color: #fff; margin-top: 0.3rem;">
            <strong>Reducing Nature:</strong> ${cur.reason}
          </p>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
            ${cur.invert}
          </p>
        </div>
      </div>
    `;

    document.getElementById('btn-dis-suc')?.addEventListener('click', () => {
      this.disaccharideType = 'sucrose';
      this.pop();
      this.renderDisaccharides();
    });
    document.getElementById('btn-dis-mal')?.addEventListener('click', () => {
      this.disaccharideType = 'maltose';
      this.pop();
      this.renderDisaccharides();
    });
    document.getElementById('btn-dis-lac')?.addEventListener('click', () => {
      this.disaccharideType = 'lactose';
      this.pop();
      this.renderDisaccharides();
    });
  }

  // 3. Amino Acids Zwitterion & Isoelectric Point (pI)
  renderAminoAcidsZwitterion() {
    this.hub.stageTitle.textContent = "Amino Acids Zwitterion & Isoelectric Point (pI)";
    this.hub.stageSubtitle.textContent = "Internal acid-base neutralization creates dipolar amphoteric Zwitterion";
    this.hub.stageBadge.textContent = "NCERT Sec 10.2.1";

    let state = {};
    if (this.aminoAcidPh === 'acidic') {
      state = {
        ph: 'Low pH (Acidic Solution, pH < pI)',
        formula: '⁺H₃N—CH(R)—COOH (Cationic Form)',
        charge: 'Net Positive Charge (+1)',
        migration: 'Migrates towards the Cathode (-) in an electric field.',
        color: 'var(--accent-cyan)'
      };
    } else if (this.aminoAcidPh === 'basic') {
      state = {
        ph: 'High pH (Basic Solution, pH > pI)',
        formula: 'H₂N—CH(R)—COO⁻ (Anionic Form)',
        charge: 'Net Negative Charge (-1)',
        migration: 'Migrates towards the Anode (+) in an electric field.',
        color: '#f87171'
      };
    } else {
      state = {
        ph: 'At Isoelectric Point (pH = pI)',
        formula: '⁺H₃N—CH(R)—COO⁻ (Dipolar Zwitterion)',
        charge: 'Net Electrical Charge = 0',
        migration: 'Does NOT migrate to either electrode; solubility is minimal!',
        color: 'var(--accent-emerald)'
      };
    }

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap; margin-bottom: 0.8rem;">
          <button class="stage-control-btn ${this.aminoAcidPh === 'acidic' ? 'active' : ''}" id="btn-aa-acid">Low pH (Cation)</button>
          <button class="stage-control-btn ${this.aminoAcidPh === 'neutral' ? 'active' : ''}" id="btn-aa-pI">Isoelectric Point (Zwitterion)</button>
          <button class="stage-control-btn ${this.aminoAcidPh === 'basic' ? 'active' : ''}" id="btn-aa-base">High pH (Anion)</button>
        </div>

        <div class="model-meta-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; color: ${state.color}; font-size: 0.95rem;">${state.ph}</span>
            <span class="stage-badge-ncert" style="background: rgba(255,255,255,0.1); color: #fff;">${state.charge}</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 800; color: #fff; margin: 0.6rem 0; padding: 0.45rem; background: rgba(0,0,0,0.3); border-radius: 6px; text-align: center;">
            ${state.formula}
          </div>
          <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>Electrophoretic Behavior:</strong> ${state.migration}
          </p>
        </div>

        <div class="concept-callout" style="margin-top: 0.8rem;">
          <span class="callout-icon">🧬</span>
          <div>
            <strong>Essential vs Non-Essential Amino Acids (NEET Recall):</strong>
            <br>• <strong>10 Essential Amino Acids</strong> (cannot be synthesized by human body, must be ingested): <em>Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Tryptophan, Threonine, Histidine, Arginine</em>.
            <br>• <strong>Glycine</strong> is the ONLY natural amino acid that is <strong>achiral (optically inactive)</strong> because its side chain R is a hydrogen atom!
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-aa-acid')?.addEventListener('click', () => {
      this.aminoAcidPh = 'acidic';
      this.pop();
      this.renderAminoAcidsZwitterion();
    });
    document.getElementById('btn-aa-pI')?.addEventListener('click', () => {
      this.aminoAcidPh = 'neutral';
      this.pop();
      this.renderAminoAcidsZwitterion();
    });
    document.getElementById('btn-aa-base')?.addEventListener('click', () => {
      this.aminoAcidPh = 'basic';
      this.pop();
      this.renderAminoAcidsZwitterion();
    });
  }

  // 4. Protein Structure 1°, 2°, 3°, 4° & Denaturation
  renderProteinStructure() {
    this.hub.stageTitle.textContent = "Four Levels of Protein Architecture & Denaturation";
    this.hub.stageSubtitle.textContent = "Peptide bond (-CO-NH-) condensation & non-covalent stabilizing forces";
    this.hub.stageBadge.textContent = "NCERT Sec 10.2.3";

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="ch6-matrix-grid">
          <div class="matrix-card active">
            <span class="matrix-badge">1° Structure</span>
            <h4>Primary Sequence</h4>
            <p>Specific linear sequence of amino acids joined by rigid, planar covalent peptide bonds (-CO-NH-). Any change destroys function (e.g. Sickle-cell anaemia: Glu → Val at position 6 of β-chain).</p>
          </div>
          <div class="matrix-card">
            <span class="matrix-badge">2° Structure</span>
            <h4>α-Helix & β-Pleated Sheet</h4>
            <p>Conformation of polypeptide backbone stabilized by <strong>intramolecular hydrogen bonds</strong> (α-helix, e.g. keratin in hair) or <strong>intermolecular hydrogen bonds</strong> (β-pleated sheet, e.g. silk fibroin).</p>
          </div>
          <div class="matrix-card">
            <span class="matrix-badge">3° Structure</span>
            <h4>3D Globular / Fibrous</h4>
            <p>Overall folding of the chain stabilized by <strong>disulfide bonds (-S-S-)</strong>, ionic electrostatic interactions, hydrogen bonding, and hydrophobic clustering.</p>
          </div>
          <div class="matrix-card">
            <span class="matrix-badge">4° Structure</span>
            <h4>Quaternary Complex</h4>
            <p>Spatial arrangement of two or more polypeptide subunits (e.g. Adult Hemoglobin consists of 4 subunits: 2α + 2β chains with iron-containing heme prosthetic groups).</p>
          </div>
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.8rem;">
          <span style="font-size: 1.25rem;">🍳</span>
          <div>
            <strong>Denaturation of Proteins (Repeated Board Question):</strong>
            When a native protein is subjected to physical changes (temperature) or chemical changes (pH), hydrogen bonds are broken, globules unfold, and helix uncoils.
            <br>• <strong>Primary structure remains completely intact</strong> (peptide bonds are NOT hydrolyzed under mild denaturation).
            <br>• <strong>Secondary and tertiary structures are destroyed</strong>, resulting in total loss of biological activity.
            <br><em>Examples:</em> Coagulation of egg white on boiling; curdling of milk by lactic acid bacteria.
          </div>
        </div>
      </div>
    `;
  }

  // 5. DNA Watson-Crick Double Helix vs RNA
  renderDnaRnaDoubleHelix() {
    this.hub.stageTitle.textContent = "DNA Double Helix Architecture & Watson-Crick Base Pairing";
    this.hub.stageSubtitle.textContent = "Antiparallel complementary polynucleotide strands joined by specific hydrogen bonds";
    this.hub.stageBadge.textContent = "NCERT Sec 10.5";

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="model-meta-card" style="margin-bottom: 0.8rem;">
          <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.9rem;">Watson-Crick Base Pairing Rules:</div>
          <div style="display: flex; gap: 1rem; margin: 0.5rem 0; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 140px; background: rgba(0,210,255,0.08); padding: 0.5rem; border-radius: 6px; border-left: 3px solid var(--accent-cyan);">
              <strong style="color: var(--accent-cyan);">Adenine = Thymine (A = T)</strong>
              <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.2rem;">2 Hydrogen Bonds</div>
            </div>
            <div style="flex: 1; min-width: 140px; background: rgba(16,185,129,0.08); padding: 0.5rem; border-radius: 6px; border-left: 3px solid var(--accent-emerald);">
              <strong style="color: var(--accent-emerald);">Guanine ≡ Cytosine (G ≡ C)</strong>
              <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.2rem;">3 Hydrogen Bonds (More stable!)</div>
            </div>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
            The two strands are <strong>antiparallel</strong>: one runs in 5' → 3' direction and the other in 3' → 5' direction. The pitch of the helix is 3.4 nm with ~10 base pairs per turn.
          </div>
        </div>

        <table class="study-data-table" style="font-size: 0.78rem;">
          <thead>
            <tr>
              <th>Feature</th>
              <th>DNA</th>
              <th>RNA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sugar Unit</strong></td>
              <td>2'-Deoxy-D-ribose</td>
              <td>D-Ribose</td>
            </tr>
            <tr>
              <td><strong>Pyrimidines</strong></td>
              <td>Cytosine (C) &amp; <strong>Thymine (T)</strong></td>
              <td>Cytosine (C) &amp; <strong>Uracil (U)</strong></td>
            </tr>
            <tr>
              <td><strong>Structure</strong></td>
              <td>Double-stranded helix</td>
              <td>Single-stranded (mRNA, tRNA, rRNA)</td>
            </tr>
            <tr>
              <td><strong>Chemical Stability</strong></td>
              <td>Highly stable (hereditary material)</td>
              <td>Less stable (labile 2'-OH group)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
