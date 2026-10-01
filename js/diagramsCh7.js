// ==========================================================================
// Chapter 7: Alcohols, Phenols and Ethers - Interactive Visual Stage
// High-yield NCERT, CBSE Board & NEET visual simulations
// ==========================================================================

export class DiagramsCh7 {
  constructor(hub) {
    this.hub = hub;
    this.lucasTestState = 'unmixed'; // '1deg' | '2deg' | '3deg' | 'unmixed'
    this.phenolAciditySubstituent = 'unsubstituted'; // 'unsubstituted' | 'p-nitro' | 'p-cresol' | 'picric'
    this.etherCleavageType = 'anisole'; // 'anisole' | 'tert-butyl'
    this.grignardSubstrate = 'hcho'; // 'hcho' | 'ch3cho' | 'acetone'
  }

  // Helper to play audio click
  pop() {
    if (this.hub && this.hub.playAudio) this.hub.playAudio('pop');
  }

  // 1. Structure & Classification of Alcohols (1°, 2°, 3° & Hybridisation)
  renderClassification() {
    this.hub.stageTitle.textContent = "Alcohols Structure & 1° / 2° / 3° Orbital Geometry";
    this.hub.stageSubtitle.textContent = "sp³ hybridised oxygen (108.9° bond angle) & steric crowding";
    this.hub.stageBadge.textContent = "NCERT Sec 7.1 - 7.3";

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="model-meta-card" style="margin-bottom: 0.8rem;">
          <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.88rem;">Bond Angle Anomaly in Methanol (CH₃-OH):</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Oxygen is <strong>sp³ hybridized</strong> with two lone pairs. The C–O–H bond angle is <strong>108.9°</strong> (slightly less than tetrahedral 109.5°) due to lone pair–lone pair electrostatic repulsions.
          </div>
        </div>

        <div class="ch6-matrix-grid">
          <div class="matrix-card active">
            <span class="matrix-badge">Primary (1°)</span>
            <h4>Ethanol (CH₃CH₂OH)</h4>
            <div class="matrix-formula">CH₃—CH₂—OH</div>
            <p>1 α-carbon attached to 1 alkyl group. Highly accessible to nucleophiles and PCC oxidation.</p>
          </div>
          <div class="matrix-card">
            <span class="matrix-badge">Secondary (2°)</span>
            <h4>Propan-2-ol</h4>
            <div class="matrix-formula">(CH₃)₂CH—OH</div>
            <p>1 α-carbon attached to 2 alkyl groups. Forms stable 2° carbocation intermediate.</p>
          </div>
          <div class="matrix-card">
            <span class="matrix-badge">Tertiary (3°)</span>
            <h4>tert-Butyl Alcohol</h4>
            <div class="matrix-formula">(CH₃)₃C—OH</div>
            <p>1 α-carbon attached to 3 alkyl groups. Readily undergoes SN1 & dehydration; resists normal oxidation.</p>
          </div>
        </div>

        <div style="background: rgba(0,210,255,0.06); border: 1px solid rgba(0,210,255,0.25); border-radius: 8px; padding: 0.7rem; margin-top: 0.8rem; font-size: 0.8rem;">
          <span style="color: var(--accent-cyan); font-weight: 700;">Polyhydric Alcohols:</span>
          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 0.35rem;">
            <span class="stat-chip">Ethylene glycol: CH₂OH–CH₂OH (Dihydric)</span>
            <span class="stat-chip">Glycerol: CH₂OH–CHOH–CH₂OH (Trihydric)</span>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Grignard Synthesis of Alcohols
  renderGrignardSynthesis() {
    this.hub.stageTitle.textContent = "Grignard Synthesis of 1°, 2° & 3° Alcohols";
    this.hub.stageSubtitle.textContent = "Nucleophilic addition of R–MgX across the polar carbonyl >C=O bond";
    this.hub.stageBadge.textContent = "NCERT Sec 7.4";

    const substrates = {
      'hcho': {
        name: 'Formaldehyde (HCHO)',
        product: 'Primary (1°) Alcohol',
        eq: 'HCHO + R-MgX → H-CH(OMgX)-R xrightarrow{H₂O} R-CH₂-OH (1° Alcohol)',
        note: 'Formaldehyde is the ONLY carbonyl compound that produces primary alcohols with Grignard reagents!'
      },
      'ch3cho': {
        name: 'Acetaldehyde (CH₃CHO)',
        product: 'Secondary (2°) Alcohol',
        eq: 'CH₃CHO + R-MgX → CH₃-CH(OMgX)-R xrightarrow{H₂O} CH₃-CH(OH)-R (2° Alcohol)',
        note: 'Any aldehyde other than formaldehyde reacts with Grignard to give secondary alcohols.'
      },
      'acetone': {
        name: 'Acetone (CH₃COCH₃)',
        product: 'Tertiary (3°) Alcohol',
        eq: 'CH₃COCH₃ + R-MgX → (CH₃)₂C(OMgX)-R xrightarrow{H₂O} (CH₃)₂C(OH)-R (3° Alcohol)',
        note: 'Ketones react with Grignard reagents to yield tertiary alcohols.'
      }
    };

    const current = substrates[this.grignardSubstrate];

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
          <button class="stage-control-btn ${this.grignardSubstrate === 'hcho' ? 'active' : ''}" id="btn-grig-hcho">Formaldehyde (→ 1°)</button>
          <button class="stage-control-btn ${this.grignardSubstrate === 'ch3cho' ? 'active' : ''}" id="btn-grig-ald">Other Aldehydes (→ 2°)</button>
          <button class="stage-control-btn ${this.grignardSubstrate === 'acetone' ? 'active' : ''}" id="btn-grig-ket">Ketone (→ 3°)</button>
        </div>

        <div class="model-meta-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; color: var(--accent-cyan);">${current.name}</span>
            <span class="stage-badge-ncert" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">${current.product}</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.85rem; margin: 0.6rem 0; padding: 0.5rem; background: rgba(0,0,0,0.3); border-radius: 6px; color: var(--accent-amber);">
            ${current.eq}
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>NEET Key Concept:</strong> ${current.note}
          </div>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px dashed var(--border-subtle); border-radius: 8px; padding: 0.75rem; margin-top: 0.8rem; font-size: 0.8rem;">
          <strong style="color: var(--accent-pink);">Mechanism Step 1:</strong> Carbanionic alkyl group R^(δ-) attacks electrophilic carbonyl carbon C^(δ+).
          <br><strong style="color: var(--accent-emerald);">Mechanism Step 2:</strong> Acidic hydrolysis of the magnesium alkoxide adduct cleaves MgX to furnish the alcohol.
        </div>
      </div>
    `;

    document.getElementById('btn-grig-hcho')?.addEventListener('click', () => {
      this.grignardSubstrate = 'hcho';
      this.pop();
      this.renderGrignardSynthesis();
    });
    document.getElementById('btn-grig-ald')?.addEventListener('click', () => {
      this.grignardSubstrate = 'ch3cho';
      this.pop();
      this.renderGrignardSynthesis();
    });
    document.getElementById('btn-grig-ket')?.addEventListener('click', () => {
      this.grignardSubstrate = 'acetone';
      this.pop();
      this.renderGrignardSynthesis();
    });
  }

  // 3. The Lucas Test Laboratory Simulator
  renderLucasTest() {
    this.hub.stageTitle.textContent = "Lucas Test Laboratory Distinction (1° vs 2° vs 3°)";
    this.hub.stageSubtitle.textContent = "Lucas Reagent: Conc. HCl + Anhydrous ZnCl₂ (Forms insoluble R-Cl)";
    this.hub.stageBadge.textContent = "NCERT High-Yield Test";

    let testTubeHtml = '';
    let explanationHtml = '';

    if (this.lucasTestState === '3deg') {
      testTubeHtml = `
        <div class="test-tube">
          <div class="liquid-fill" style="height: 65%; background: rgba(245, 158, 11, 0.45); border-top: 3px solid rgba(255,255,255,0.8);">
            <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font-size: 0.72rem; color: #fff; font-weight: 700;">
              Immediate Dense Turbidity (0 sec)!
            </div>
          </div>
        </div>
      `;
      explanationHtml = `
        <div style="color: var(--accent-amber); font-weight: 700; font-size: 0.9rem;">Tertiary Alcohol (3°) Result:</div>
        <p style="font-size: 0.82rem; margin-top: 0.3rem;">
          <strong>Instant Turbidity / Cloudiness</strong> develops immediately at room temperature because 3° carbocation forms extremely fast via the SN1 pathway, precipitating insoluble alkyl chloride.
        </p>
      `;
    } else if (this.lucasTestState === '2deg') {
      testTubeHtml = `
        <div class="test-tube">
          <div class="liquid-fill" style="height: 55%; background: rgba(59, 130, 246, 0.4); border-top: 2px dashed rgba(255,255,255,0.6);">
            <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font-size: 0.72rem; color: #fff; font-weight: 700;">
              Turbidity appears in ~5 minutes
            </div>
          </div>
        </div>
      `;
      explanationHtml = `
        <div style="color: var(--accent-cyan); font-weight: 700; font-size: 0.9rem;">Secondary Alcohol (2°) Result:</div>
        <p style="font-size: 0.82rem; margin-top: 0.3rem;">
          <strong>Turbidity appears after 4 to 5 minutes</strong> at room temperature due to moderate stability of the secondary carbocation.
        </p>
      `;
    } else if (this.lucasTestState === '1deg') {
      testTubeHtml = `
        <div class="test-tube">
          <div class="liquid-fill" style="height: 50%; background: rgba(16, 185, 129, 0.25); border-top: 2px solid rgba(16, 185, 129, 0.5);">
            <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font-size: 0.72rem; color: #fff; font-weight: 700;">
              Clear solution (No turbidity at room temp)
            </div>
          </div>
        </div>
      `;
      explanationHtml = `
        <div style="color: var(--accent-emerald); font-weight: 700; font-size: 0.9rem;">Primary Alcohol (1°) Result:</div>
        <p style="font-size: 0.82rem; margin-top: 0.3rem;">
          <strong>Remains clear indefinitely at room temperature</strong>. Produces turbidity only upon prolonged heating because primary carbocation is too unstable to form readily.
        </p>
      `;
    } else {
      testTubeHtml = `
        <div class="test-tube">
          <div class="liquid-fill" style="height: 45%; background: rgba(255, 255, 255, 0.15);">
            <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font-size: 0.72rem; color: var(--text-muted);">
              Select an alcohol degree to test
            </div>
          </div>
        </div>
      `;
      explanationHtml = `
        <div style="color: var(--text-muted); font-size: 0.82rem;">
          Click one of the buttons below to add Lucas reagent (conc. HCl + anh. ZnCl₂) to the test tube.
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="test-tube-wrapper" style="display: flex; gap: 1.5rem; align-items: center; justify-content: center; margin: 1rem 0;">
          ${testTubeHtml}
          <div style="max-width: 260px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.8rem;">
            ${explanationHtml}
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-top: 0.8rem;">
          <button class="stage-control-btn ${this.lucasTestState === '3deg' ? 'active' : ''}" id="btn-lucas-3">Test 3° Alcohol</button>
          <button class="stage-control-btn ${this.lucasTestState === '2deg' ? 'active' : ''}" id="btn-lucas-2">Test 2° Alcohol</button>
          <button class="stage-control-btn ${this.lucasTestState === '1deg' ? 'active' : ''}" id="btn-lucas-1">Test 1° Alcohol</button>
        </div>

        <div style="font-size: 0.78rem; color: var(--text-muted); text-align: center; margin-top: 0.8rem;">
          ✦ Reactivity order: <strong>3° Alcohol &gt; 2° Alcohol &gt; 1° Alcohol</strong> (carbocation stability order).
        </div>
      </div>
    `;

    document.getElementById('btn-lucas-3')?.addEventListener('click', () => {
      this.lucasTestState = '3deg';
      this.pop();
      this.renderLucasTest();
    });
    document.getElementById('btn-lucas-2')?.addEventListener('click', () => {
      this.lucasTestState = '2deg';
      this.pop();
      this.renderLucasTest();
    });
    document.getElementById('btn-lucas-1')?.addEventListener('click', () => {
      this.lucasTestState = '1deg';
      this.pop();
      this.renderLucasTest();
    });
  }

  // 4. Acid-Catalysed Dehydration & Saytzeff Rule
  renderDehydration() {
    this.hub.stageTitle.textContent = "Acid-Catalysed Dehydration & Saytzeff Rule";
    this.hub.stageSubtitle.textContent = "Relative ease: 3° (20% H₂SO₄, 358 K) > 2° (85% H₃PO₄, 440 K) > 1° (conc H₂SO₄, 443 K)";
    this.hub.stageBadge.textContent = "NCERT Sec 7.4.4";

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="model-meta-card" style="margin-bottom: 0.8rem;">
          <div style="font-weight: 700; color: var(--accent-amber); font-size: 0.9rem;">Dehydration of Butan-2-ol:</div>
          <div style="font-family: var(--font-mono); font-size: 0.85rem; margin: 0.5rem 0; color: #fff;">
            CH₃–CH(OH)–CH₂–CH₃ xrightarrow{H⁺, Δ} CH₃–CH=CH–CH₃ (80% Major) + CH₂=CH–CH₂–CH₃ (20% Minor)
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>Saytzeff Rule:</strong> The more substituted alkene (But-2-ene with 6 hyperconjugative α-hydrogens) is thermodynamically more stable than the less substituted terminal alkene (But-1-ene with only 2 α-hydrogens).
          </div>
        </div>

        <div class="mechanism-steps-grid" style="display: grid; gap: 0.5rem; font-size: 0.78rem;">
          <div style="background: rgba(0,210,255,0.08); padding: 0.6rem; border-radius: 6px; border-left: 3px solid var(--accent-cyan);">
            <strong>Step 1 (Fast):</strong> Protonation of hydroxyl group by acid to form oxonium ion: <code>R-OH + H⁺ ⇌ R-OH₂⁺</code>.
          </div>
          <div style="background: rgba(245,158,11,0.08); padding: 0.6rem; border-radius: 6px; border-left: 3px solid var(--accent-amber);">
            <strong>Step 2 (Slow, r.d.s):</strong> Loss of water molecule to generate carbocation intermediate: <code>R-OH₂⁺ → R⁺ + H₂O</code>.
          </div>
          <div style="background: rgba(16,185,129,0.08); padding: 0.6rem; border-radius: 6px; border-left: 3px solid var(--accent-emerald);">
            <strong>Step 3 (Fast):</strong> Elimination of a β-proton from the carbocation to form the stable alkene double bond.
          </div>
        </div>
      </div>
    `;
  }

  // 5. Phenol Acidity & Phenoxide Ion Resonance
  renderPhenolAcidity() {
    this.hub.stageTitle.textContent = "Acidity of Phenols vs Alcohols & NaHCO₃ Anomaly";
    this.hub.stageSubtitle.textContent = "Resonance stabilisation of the phenoxide ion (C₆H₅O⁻)";
    this.hub.stageBadge.textContent = "NCERT Sec 7.4.2";

    const subs = {
      'unsubstituted': {
        name: 'Phenol (C₆H₅OH)',
        pka: 'pKa = 10.0',
        effect: 'Weakly acidic; turns blue litmus red; dissolves in aq. NaOH, but does NOT react with NaHCO₃!'
      },
      'p-nitro': {
        name: 'p-Nitrophenol',
        pka: 'pKa = 7.15 (Over 700x more acidic!)',
        effect: '-NO₂ at para position exerts powerful -M and -I effects, dispersing the negative charge on phenoxide oxygen.'
      },
      'p-cresol': {
        name: 'p-Cresol (4-Methylphenol)',
        pka: 'pKa = 10.2 (Less acidic)',
        effect: '-CH₃ group exhibits +I and hyperconjugation, donating electron density and destabilizing the phenoxide ion.'
      },
      'picric': {
        name: 'Picric Acid (2,4,6-Trinitrophenol)',
        pka: 'pKa = 0.38 (Stronger than acetic acid!)',
        effect: 'Three powerful -NO₂ groups at ortho and para positions disperse negative charge completely. Highly acidic!'
      }
    };

    const cur = subs[this.phenolAciditySubstituent];

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap; margin-bottom: 0.8rem;">
          <button class="stage-control-btn ${this.phenolAciditySubstituent === 'unsubstituted' ? 'active' : ''}" id="btn-ph-unsub">Phenol</button>
          <button class="stage-control-btn ${this.phenolAciditySubstituent === 'p-nitro' ? 'active' : ''}" id="btn-ph-pnitro">p-Nitrophenol</button>
          <button class="stage-control-btn ${this.phenolAciditySubstituent === 'p-cresol' ? 'active' : ''}" id="btn-ph-cresol">p-Cresol</button>
          <button class="stage-control-btn ${this.phenolAciditySubstituent === 'picric' ? 'active' : ''}" id="btn-ph-picric">Picric Acid</button>
        </div>

        <div class="model-meta-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">${cur.name}</span>
            <span class="stage-badge-ncert" style="background: rgba(239,68,68,0.2); color: #f87171;">${cur.pka}</span>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.5;">
            ${cur.effect}
          </p>
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.8rem;">
          <span style="font-size: 1.2rem;">⚠️</span>
          <div>
            <strong>Why does Phenol NOT react with NaHCO₃? (100% Board Favorite):</strong>
            Phenol (pKa ~ 10.0) is a <em>weaker acid than carbonic acid</em> (H₂CO₃, pKa ~ 6.35). An acid-base equilibrium favors the weaker acid; hence phenol cannot displace carbonic acid from sodium bicarbonate.
            <br><em>Order of Acidity:</em> <strong>Carboxylic acids &gt; H₂CO₃ &gt; Phenol &gt; Water &gt; Alcohols</strong>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-ph-unsub')?.addEventListener('click', () => {
      this.phenolAciditySubstituent = 'unsubstituted';
      this.pop();
      this.renderPhenolAcidity();
    });
    document.getElementById('btn-ph-pnitro')?.addEventListener('click', () => {
      this.phenolAciditySubstituent = 'p-nitro';
      this.pop();
      this.renderPhenolAcidity();
    });
    document.getElementById('btn-ph-cresol')?.addEventListener('click', () => {
      this.phenolAciditySubstituent = 'p-cresol';
      this.pop();
      this.renderPhenolAcidity();
    });
    document.getElementById('btn-ph-picric')?.addEventListener('click', () => {
      this.phenolAciditySubstituent = 'picric';
      this.pop();
      this.renderPhenolAcidity();
    });
  }

  // 6. Kolbe's Reaction vs Reimer-Tiemann Reaction
  renderKolbeReimer() {
    this.hub.stageTitle.textContent = "Kolbe's Reaction vs Reimer-Tiemann Reaction";
    this.hub.stageSubtitle.textContent = "Electrophilic substitution by weak electrophiles on activated phenoxide ion";
    this.hub.stageBadge.textContent = "NCERT Named Reactions";

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="matrix-card active" style="margin-bottom: 0.8rem;">
          <div style="display: flex; justify-content: space-between;">
            <span class="matrix-badge" style="background: rgba(16,185,129,0.25); color: var(--accent-emerald);">1. Kolbe's Reaction</span>
            <span style="font-size: 0.75rem; color: var(--accent-cyan);">Electrophile: CO₂</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; margin: 0.4rem 0; color: #fff;">
            Phenol + NaOH → Sodium Phenoxide xrightarrow{1. CO₂, 400 K, 4-7 atm}{2. H⁺} Salicylic Acid (2-Hydroxybenzoic acid)
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Phenoxide ion is far more nucleophilic than phenol and attacks the weak electrophile carbon dioxide (CO₂). Aspirin (acetylsalicylic acid) is manufactured from salicylic acid!
          </p>
        </div>

        <div class="matrix-card" style="border-color: rgba(245,158,11,0.4);">
          <div style="display: flex; justify-content: space-between;">
            <span class="matrix-badge" style="background: rgba(245,158,11,0.25); color: var(--accent-amber);">2. Reimer-Tiemann Reaction</span>
            <span style="font-size: 0.75rem; color: var(--accent-amber);">Electrophile: :CCl₂ (Dichlorocarbene)</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; margin: 0.4rem 0; color: #fff;">
            Phenol + CHCl₃ + aq. NaOH xrightarrow{340 K} Intermediate with -CHCl₂ xrightarrow{NaOH, H⁺} Salicylaldehyde (o-hydroxybenzaldehyde)
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
            <strong>Crucial NEET Point:</strong> The active electrophilic intermediate is neutral <strong>dichlorocarbene (:CCl₂)</strong> generated by α-elimination from chloroform by hydroxide base.
          </p>
        </div>
      </div>
    `;
  }

  // 7. Williamson Ether Synthesis & HI Cleavage
  renderWilliamsonCleavage() {
    this.hub.stageTitle.textContent = "Williamson Ether Synthesis & HI Cleavage Mechanism";
    this.hub.stageSubtitle.textContent = "SN2 backside displacement vs E2 elimination & HI cleavage of ethers";
    this.hub.stageBadge.textContent = "NCERT Sec 7.6";

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="model-meta-card" style="margin-bottom: 0.8rem;">
          <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.9rem;">Williamson Ether Synthesis Rule (NEET Rule):</div>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; margin: 0.4rem 0; color: var(--accent-emerald);">
            R-O⁻Na⁺ (Alkoxide) + R'-X (1° Alkyl Halide) xrightarrow{SN2} R-O-R' + NaX
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>Limitation:</strong> To synthesize tert-butyl methyl ether, one must use <strong>(CH₃)₃C-O⁻Na⁺ + CH₃-I</strong>. If tertiary alkyl halide (CH₃)₃C-Br is treated with CH₃O⁻Na⁺, the alkoxide behaves as a strong base and causes <strong>100% elimination (E2)</strong> to give 2-methylpropene (isobutylene) instead of ether!
          </div>
        </div>

        <div class="model-meta-card" style="border-color: rgba(239,68,68,0.35);">
          <div style="font-weight: 700; color: #f87171; font-size: 0.9rem;">Cleavage of Anisole (Methoxybenzene) by HI:</div>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; margin: 0.4rem 0; color: #fff;">
            C₆H₅-O-CH₃ + HI xrightarrow{373 K} C₆H₅-OH (Phenol) + CH₃-I (Methyl Iodide)
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>Why does Anisole give Phenol and not Iodobenzene?</strong>
            The oxygen-phenyl bond has <em>partial double bond character</em> due to resonance (+M effect) and is much stronger than the oxygen-methyl single bond. Furthermore, sp² aromatic carbon cannot undergo SN2 backside attack by I⁻ ion. Hence, I⁻ attacks the methyl group exclusively!
          </div>
        </div>
      </div>
    `;
  }
}
