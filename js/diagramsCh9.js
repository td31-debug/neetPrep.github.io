// ==========================================================================
// Chapter 9: Amines - Interactive Visual Stage
// High-yield NCERT, CBSE Board & NEET visual simulations
// ==========================================================================

export class DiagramsCh9 {
  constructor(hub) {
    this.hub = hub;
    this.basicitySeries = 'methyl'; // 'methyl' | 'ethyl' | 'gas' | 'aniline'
    this.hinsbergTestTube = '1deg'; // '1deg' | '2deg' | '3deg'
    this.diazoniumReagent = 'sandmeyer-cl';
  }

  pop() {
    if (this.hub && this.hub.playAudio) this.hub.playAudio('pop');
  }

  // 1. Structure & Pyramidal Inversion of Amines
  renderClassificationStructure() {
    this.hub.stageTitle.textContent = "Amines Structure & Trigonal Pyramidal Geometry";
    this.hub.stageSubtitle.textContent = "sp³ hybridised nitrogen with an unshared lone pair of electrons (bond angle ~108°)";
    this.hub.stageBadge.textContent = "NCERT Sec 9.1 - 9.2";

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="model-meta-card" style="margin-bottom: 0.8rem;">
          <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.88rem;">Nitrogen Geometry & Pyramidal Inversion:</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Nitrogen in amines is <strong>sp³ hybridized</strong> with tetrahedral geometry; the shape is <strong>trigonal pyramidal</strong>. The fourth sp³ orbital contains a lone pair of electrons which undergoes rapid <em>pyramidal inversion</em> (umbrella flip). The C–N–C bond angle in trimethylamine is <strong>108°</strong> due to lone pair-bonding pair repulsion.
          </div>
        </div>

        <div class="ch6-matrix-grid">
          <div class="matrix-card active">
            <span class="matrix-badge">Primary (1°)</span>
            <h4>Ethanamine</h4>
            <div class="matrix-formula">CH₃CH₂—NH₂</div>
            <p>2 N–H bonds capable of forming extensive intermolecular hydrogen bonding. Highest b.p. among isomers.</p>
          </div>
          <div class="matrix-card">
            <span class="matrix-badge">Secondary (2°)</span>
            <h4>N-Methylethanamine</h4>
            <div class="matrix-formula">CH₃CH₂—NH—CH₃</div>
            <p>1 N–H bond available for intermolecular H-bonding. Moderate boiling point.</p>
          </div>
          <div class="matrix-card">
            <span class="matrix-badge">Tertiary (3°)</span>
            <h4>Trimethylamine</h4>
            <div class="matrix-formula">(CH₃)₃N</div>
            <p>No N–H bonds! Cannot form intermolecular H-bonding with itself; lowest b.p. among isomeric amines.</p>
          </div>
        </div>

        <div style="background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.25); border-radius: 8px; padding: 0.7rem; margin-top: 0.8rem; font-size: 0.8rem;">
          <span style="color: var(--accent-emerald); font-weight: 700;">Boiling Point Order:</span>
          <strong>1° Amine &gt; 2° Amine &gt; 3° Amine</strong> (due to decreasing number of intermolecular hydrogen bonds).
        </div>
      </div>
    `;
  }

  // 2. The Basicity of Amines & Aniline Delocalisation
  renderBasicityLadder() {
    this.hub.stageTitle.textContent = "Basicity Trends of Amines (Aqueous vs Gas Phase)";
    this.hub.stageSubtitle.textContent = "The interplay of Inductive (+I) effect, Solvation effect & Steric hindrance";
    this.hub.stageBadge.textContent = "NCERT Sec 9.4 (High Yield)";

    let data = {};
    if (this.basicitySeries === 'methyl') {
      data = {
        title: 'Methyl-Substituted Amines in Aqueous Medium',
        order: '(CH₃)₂NH (2°) > CH₃NH₂ (1°) > (CH₃)₃N (3°) > NH₃',
        formula: '2° > 1° > 3° > NH₃ (Rule: 213)',
        pka: 'pKb values: (CH₃)₂NH = 3.27 | CH₃NH₂ = 3.38 | (CH₃)₃N = 4.22 | NH₃ = 4.75',
        explanation: 'Due to the small size of the methyl group, steric hindrance to hydration is minimal. Hydration energy + inductive effect combined makes 2° most basic, followed by 1°, while 3° has steric crowding and only one N–H for hydration.'
      };
    } else if (this.basicitySeries === 'ethyl') {
      data = {
        title: 'Ethyl-Substituted Amines in Aqueous Medium',
        order: '(C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃',
        formula: '2° > 3° > 1° > NH₃ (Rule: 231)',
        pka: 'pKb values: (C₂H₅)₂NH = 3.00 | (C₂H₅)₃N = 3.25 | C₂H₅NH₂ = 3.29 | NH₃ = 4.75',
        explanation: 'For larger ethyl groups, the stronger +I effect of three ethyl groups compensates for steric crowding, pushing the 3° amine ahead of the 1° amine in aqueous solution.'
      };
    } else if (this.basicitySeries === 'gas') {
      data = {
        title: 'Amines in Gas Phase / Non-Aqueous Solvents',
        order: '3° Amine > 2° Amine > 1° Amine > NH₃',
        formula: '3° > 2° > 1° > NH₃ (Pure Inductive Effect)',
        pka: 'Governed solely by electron-donating +I effect of alkyl groups dispersing positive charge on nitrogen.',
        explanation: 'In the gas phase, there is no solvent water to hydrate the substituted ammonium cations. Hence basicity is governed purely by the +I inductive effect of alkyl groups.'
      };
    } else {
      data = {
        title: 'Why is Aniline far less basic than Aliphatic Amines?',
        order: 'Cyclohexylamine >> Ammonia (pKb 4.75) >> Aniline (pKb 9.38)',
        formula: 'Aliphatic Amine > NH₃ >>> Aniline',
        pka: 'Aniline pKb = 9.38 (Nearly a million times less basic than methylamine pKb 3.38!)',
        explanation: 'The unshared lone pair on nitrogen in aniline is delocalized over the benzene ring through resonance across 5 contributors. In contrast, anilinium ion formed upon protonation has only 2 resonance structures, making protonation thermodynamically unfavorable!'
      };
    }

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap; margin-bottom: 0.8rem;">
          <button class="stage-control-btn ${this.basicitySeries === 'methyl' ? 'active' : ''}" id="btn-bas-methyl">Methyl (213)</button>
          <button class="stage-control-btn ${this.basicitySeries === 'ethyl' ? 'active' : ''}" id="btn-bas-ethyl">Ethyl (231)</button>
          <button class="stage-control-btn ${this.basicitySeries === 'gas' ? 'active' : ''}" id="btn-bas-gas">Gas Phase (321)</button>
          <button class="stage-control-btn ${this.basicitySeries === 'aniline' ? 'active' : ''}" id="btn-bas-aniline">Aniline Delocalisation</button>
        </div>

        <div class="model-meta-card">
          <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">${data.title}</div>
          <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 800; color: var(--accent-emerald); margin: 0.5rem 0; padding: 0.45rem; background: rgba(0,0,0,0.3); border-radius: 6px;">
            ${data.order}
          </div>
          <div style="font-size: 0.82rem; color: var(--accent-amber); font-weight: 600;">
            ${data.pka}
          </div>
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.5;">
            ${data.explanation}
          </p>
        </div>

        <div class="neet-trap-alert" style="margin-top: 0.8rem;">
          <span style="font-size: 1.25rem;">💡</span>
          <div>
            <strong>CBSE Mnemonic to Memorize Aqueous Basicity:</strong>
            <br>• For smaller <strong>Methyl (CH₃)</strong> groups: Order is <strong>213</strong> (2° &gt; 1° &gt; 3°)
            <br>• For larger <strong>Ethyl (C₂H₅)</strong> groups: Order is <strong>231</strong> (2° &gt; 3° &gt; 1°)
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-bas-methyl')?.addEventListener('click', () => {
      this.basicitySeries = 'methyl';
      this.pop();
      this.renderBasicityLadder();
    });
    document.getElementById('btn-bas-ethyl')?.addEventListener('click', () => {
      this.basicitySeries = 'ethyl';
      this.pop();
      this.renderBasicityLadder();
    });
    document.getElementById('btn-bas-gas')?.addEventListener('click', () => {
      this.basicitySeries = 'gas';
      this.pop();
      this.renderBasicityLadder();
    });
    document.getElementById('btn-bas-aniline')?.addEventListener('click', () => {
      this.basicitySeries = 'aniline';
      this.pop();
      this.renderBasicityLadder();
    });
  }

  // 3. Hinsberg's Test Laboratory Simulator
  renderHinsbergTest() {
    this.hub.stageTitle.textContent = "Hinsberg's Test Laboratory Simulator (1° vs 2° vs 3°)";
    this.hub.stageSubtitle.textContent = "Reagent: Benzenesulphonyl Chloride (C₆H₅SO₂Cl) + aq. NaOH";
    this.hub.stageBadge.textContent = "CBSE Board Distinction";

    let testTubeHtml = '';
    let explanationHtml = '';

    if (this.hinsbergTestTube === '1deg') {
      testTubeHtml = `
        <div class="test-tube">
          <div class="liquid-fill" style="height: 60%; background: rgba(16, 185, 129, 0.45); border-top: 2px solid rgba(255,255,255,0.8);">
            <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font-size: 0.72rem; color: #fff; font-weight: 700;">
              Clear Solution (Dissolves in NaOH)
            </div>
          </div>
        </div>
      `;
      explanationHtml = `
        <div style="color: var(--accent-emerald); font-weight: 700; font-size: 0.9rem;">Primary (1°) Amine:</div>
        <p style="font-size: 0.82rem; margin-top: 0.3rem;">
          Reacts to form <strong>N-alkylbenzenesulphonamide</strong>. The hydrogen attached to nitrogen is <strong>strongly acidic</strong> due to the powerful electron-withdrawing sulphonyl group (-SO₂-). Hence, it readily reacts with aqueous NaOH to form a soluble sodium salt!
        </p>
      `;
    } else if (this.hinsbergTestTube === '2deg') {
      testTubeHtml = `
        <div class="test-tube">
          <div class="liquid-fill" style="height: 55%; background: rgba(245, 158, 11, 0.45); border-top: 3px solid rgba(255,255,255,0.9);">
            <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font-size: 0.72rem; color: #fff; font-weight: 700;">
              Insoluble Precipitate (Does NOT dissolve in NaOH)
            </div>
          </div>
        </div>
      `;
      explanationHtml = `
        <div style="color: var(--accent-amber); font-weight: 700; font-size: 0.9rem;">Secondary (2°) Amine:</div>
        <p style="font-size: 0.82rem; margin-top: 0.3rem;">
          Reacts to form <strong>N,N-dialkylbenzenesulphonamide</strong>. It has <strong>no hydrogen atom on nitrogen</strong> and is NOT acidic. Therefore, it is completely <strong>insoluble in aqueous alkali (NaOH)</strong>!
        </p>
      `;
    } else {
      testTubeHtml = `
        <div class="test-tube">
          <div class="liquid-fill" style="height: 50%; background: rgba(239, 68, 68, 0.35); border-top: 2px dashed rgba(255,255,255,0.6);">
            <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font-size: 0.72rem; color: #fff; font-weight: 700;">
              No Reaction (Dissolves in HCl)
            </div>
          </div>
        </div>
      `;
      explanationHtml = `
        <div style="color: #f87171; font-weight: 700; font-size: 0.9rem;">Tertiary (3°) Amine:</div>
        <p style="font-size: 0.82rem; margin-top: 0.3rem;">
          Possesses no replaceable hydrogen attached to nitrogen and <strong>does not react with benzenesulphonyl chloride</strong> under normal conditions. It remains insoluble in alkali, but dissolves in aqueous mineral acid!
        </p>
      `;
    }

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="test-tube-wrapper" style="display: flex; gap: 1.5rem; align-items: center; justify-content: center; margin: 0.8rem 0;">
          ${testTubeHtml}
          <div style="max-width: 260px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.8rem;">
            ${explanationHtml}
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
          <button class="stage-control-btn ${this.hinsbergTestTube === '1deg' ? 'active' : ''}" id="btn-hins-1">Test 1° Amine</button>
          <button class="stage-control-btn ${this.hinsbergTestTube === '2deg' ? 'active' : ''}" id="btn-hins-2">Test 2° Amine</button>
          <button class="stage-control-btn ${this.hinsbergTestTube === '3deg' ? 'active' : ''}" id="btn-hins-3">Test 3° Amine</button>
        </div>

        <div style="background: rgba(0,210,255,0.06); border: 1px solid rgba(0,210,255,0.2); border-radius: 8px; padding: 0.6rem; margin-top: 0.8rem; font-size: 0.78rem;">
          ✦ Modern reagent: <strong>p-Toluenesulphonyl chloride</strong> (also used as Hinsberg reagent).
        </div>
      </div>
    `;

    document.getElementById('btn-hins-1')?.addEventListener('click', () => {
      this.hinsbergTestTube = '1deg';
      this.pop();
      this.renderHinsbergTest();
    });
    document.getElementById('btn-hins-2')?.addEventListener('click', () => {
      this.hinsbergTestTube = '2deg';
      this.pop();
      this.renderHinsbergTest();
    });
    document.getElementById('btn-hins-3')?.addEventListener('click', () => {
      this.hinsbergTestTube = '3deg';
      this.pop();
      this.renderHinsbergTest();
    });
  }

  // 4. Diazonium Salt Transformation Hub & Azo Dyes
  renderDiazoniumReactions() {
    this.hub.stageTitle.textContent = "Benzene Diazonium Chloride Reactions & Azo Coupling";
    this.hub.stageSubtitle.textContent = "Synthetic hub: Diazotization of aniline at 273-278 K (0-5 °C)";
    this.hub.stageBadge.textContent = "NCERT Sec 9.7";

    const reactions = {
      'sandmeyer-cl': {
        name: 'Sandmeyer Reaction (Chlorobenzene)',
        eq: 'C₆H₅N₂⁺Cl⁻ xrightarrow{Cu₂Cl₂ / HCl} C₆H₅Cl + N₂↑',
        type: 'Sandmeyer',
        note: 'High yield synthesis of aryl chlorides and bromides using cuprous salts.'
      },
      'sandmeyer-cn': {
        name: 'Sandmeyer Reaction (Benzonitrile)',
        eq: 'C₆H₅N₂⁺Cl⁻ xrightarrow{CuCN / KCN} C₆H₅CN + N₂↑',
        type: 'Sandmeyer',
        note: 'Introduces a nitrile group onto the aromatic ring, which can be hydrolyzed to benzoic acid!'
      },
      'balz-sch': {
        name: 'Balz-Schiemann Reaction (Fluorobenzene)',
        eq: 'C₆H₅N₂⁺Cl⁻ + HBF₄ → C₆H₅N₂⁺BF₄⁻ xrightarrow{Δ} C₆H₅F + BF₃ + N₂↑',
        type: 'Balz-Schiemann',
        note: 'The ONLY reliable laboratory method to prepare pure fluorobenzene from aniline.'
      },
      'phenol': {
        name: 'Hydrolysis to Phenol',
        eq: 'C₆H₅N₂⁺Cl⁻ + H₂O xrightarrow{text{warm, } 323 text{ K}} C₆H₅OH (Phenol) + N₂↑ + HCl',
        type: 'Hydrolysis',
        note: 'Facile conversion of aniline into phenol by warming diazonium salt solution.'
      },
      'azo-phenol': {
        name: 'Azo Coupling with Phenol (Orange Dye)',
        eq: 'C₆H₅N₂⁺Cl⁻ + C₆H₅OH xrightarrow{text{OH⁻, pH 9-10, 273-278 K}} p-Hydroxyazobenzene (Orange Dye)',
        type: 'Azo Coupling',
        note: 'Coupling occurs at the para position of the highly activated phenoxide ion.'
      },
      'azo-aniline': {
        name: 'Azo Coupling with Aniline (Yellow Dye)',
        eq: 'C₆H₅N₂⁺Cl⁻ + C₆H₅NH₂ xrightarrow{text{H⁺, pH 4-5, 273-278 K}} p-Aminoazobenzene (Yellow Dye)',
        type: 'Azo Coupling',
        note: 'Carried out in mildly acidic medium to prevent diazoamino rearrangement.'
      }
    };

    const cur = reactions[this.diazoniumReagent];

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap; margin-bottom: 0.8rem;">
          <button class="stage-control-btn ${this.diazoniumReagent === 'sandmeyer-cl' ? 'active' : ''}" id="btn-dia-cl">Sandmeyer (-Cl)</button>
          <button class="stage-control-btn ${this.diazoniumReagent === 'sandmeyer-cn' ? 'active' : ''}" id="btn-dia-cn">Sandmeyer (-CN)</button>
          <button class="stage-control-btn ${this.diazoniumReagent === 'balz-sch' ? 'active' : ''}" id="btn-dia-f">Balz-Schiemann (-F)</button>
          <button class="stage-control-btn ${this.diazoniumReagent === 'phenol' ? 'active' : ''}" id="btn-dia-oh">Warm H₂O (→ Phenol)</button>
          <button class="stage-control-btn ${this.diazoniumReagent === 'azo-phenol' ? 'active' : ''}" id="btn-dia-azoph">Phenol Dye (Orange)</button>
          <button class="stage-control-btn ${this.diazoniumReagent === 'azo-aniline' ? 'active' : ''}" id="btn-dia-azoan">Aniline Dye (Yellow)</button>
        </div>

        <div class="model-meta-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">${cur.name}</span>
            <span class="stage-badge-ncert" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">${cur.type}</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; margin: 0.5rem 0; padding: 0.45rem; background: rgba(0,0,0,0.3); border-radius: 6px; color: #fff;">
            ${cur.eq}
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>NEET Key Takeaway:</strong> ${cur.note}
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-dia-cl')?.addEventListener('click', () => {
      this.diazoniumReagent = 'sandmeyer-cl';
      this.pop();
      this.renderDiazoniumReactions();
    });
    document.getElementById('btn-dia-cn')?.addEventListener('click', () => {
      this.diazoniumReagent = 'sandmeyer-cn';
      this.pop();
      this.renderDiazoniumReactions();
    });
    document.getElementById('btn-dia-f')?.addEventListener('click', () => {
      this.diazoniumReagent = 'balz-sch';
      this.pop();
      this.renderDiazoniumReactions();
    });
    document.getElementById('btn-dia-oh')?.addEventListener('click', () => {
      this.diazoniumReagent = 'phenol';
      this.pop();
      this.renderDiazoniumReactions();
    });
    document.getElementById('btn-dia-azoph')?.addEventListener('click', () => {
      this.diazoniumReagent = 'azo-phenol';
      this.pop();
      this.renderDiazoniumReactions();
    });
    document.getElementById('btn-dia-azoan')?.addEventListener('click', () => {
      this.diazoniumReagent = 'azo-aniline';
      this.pop();
      this.renderDiazoniumReactions();
    });
  }

  // 5. Gabriel Phthalimide & Hofmann Bromamide
  renderGabrielHofmann() {
    this.hub.stageTitle.textContent = "Gabriel Phthalimide & Hofmann Bromamide Synthesis";
    this.hub.stageSubtitle.textContent = "Two core named reactions for synthesis of primary amines";
    this.hub.stageBadge.textContent = "NCERT Named Reactions";

    this.hub.visualStage.innerHTML = `
      <div class="interactive-diagram-container">
        <div class="matrix-card active" style="margin-bottom: 0.8rem;">
          <div style="display: flex; justify-content: space-between;">
            <span class="matrix-badge" style="background: rgba(0,210,255,0.25); color: var(--accent-cyan);">Gabriel Phthalimide Synthesis</span>
            <span style="font-size: 0.72rem; color: var(--accent-emerald);">Pure 1° Aliphatic Amines Only</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; margin: 0.4rem 0; color: #fff;">
            Phthalimide xrightarrow{KOH} Potassium Phthalimide xrightarrow{R-X (SN2)} N-Alkylphthalimide xrightarrow{aq. NaOH} R-NH₂ (Pure 1° Amine) + Phthalate
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>Why cannot aromatic amines (aniline) be prepared by Gabriel synthesis?</strong>
            Aryl halides do not undergo nucleophilic substitution (SN2) with potassium phthalimide anion due to partial double bond character of Ar–X and electronic repulsion from the benzene π-cloud!
          </div>
        </div>

        <div class="matrix-card" style="border-color: rgba(245,158,11,0.4);">
          <div style="display: flex; justify-content: space-between;">
            <span class="matrix-badge" style="background: rgba(245,158,11,0.25); color: var(--accent-amber);">Hofmann Bromamide Degradation</span>
            <span style="font-size: 0.72rem; color: var(--accent-amber);">Degradation (1 Less Carbon)</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; margin: 0.4rem 0; color: #fff;">
            R-CONH₂ + Br₂ + 4NaOH → R-NH₂ + Na₂CO₃ + 2NaBr + 2H₂O
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
            <strong>Step-down Reaction:</strong> The primary amine formed contains <strong>one carbon atom less</strong> than the parent amide. Migrating alkyl/aryl group shifts to electron-deficient nitrogen (nitrene intermediate pathway).
          </div>
        </div>
      </div>
    `;
  }
}
