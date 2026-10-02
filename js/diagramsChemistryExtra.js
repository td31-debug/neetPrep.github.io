// ==========================================================================
// Class 12 Chemistry Extra Modules - Interactive Scrollytelling Visual Stage
// Chapters: Chemical Kinetics, Coordination Compounds
// ==========================================================================

export class DiagramsChemistryExtra {
  constructor(hub) {
    this.hub = hub;
    // Kinetics state
    this.reactionOrder = 'first'; // 'zero' | 'first' | 'arrhenius'
    this.halfLifeCount = 3;

    // Coordination state
    this.complexType = 'octahedral'; // 'octahedral' | 'tetrahedral' | 'werner' | 'isomers'
    this.ligandField = 'strong'; // 'strong' | 'weak'
  }

  pop() {
    if (this.hub && this.hub.playAudio) this.hub.playAudio('pop');
  }

  // =========================================================================
  // 1. CHEMICAL KINETICS VISUAL STAGE
  // =========================================================================
  renderChemicalKinetics(subview = 'order') {
    this.hub.stageTitle.textContent = "Chemical Kinetics & Reaction Rates";
    this.hub.stageSubtitle.textContent = "Order vs molecularity, integrated rate laws, half-life formulas, and Arrhenius activation energy";
    this.hub.stageBadge.textContent = "Physical Chemistry / NEET";

    let contentHtml = '';

    if (subview === 'order') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-kin-order">Zero vs First Order</button>
            <button class="stage-control-btn" id="btn-kin-halflife">Half-Life & Remaining [R]</button>
            <button class="stage-control-btn" id="btn-kin-arrhenius">Arrhenius & Catalyst Ea</button>
          </div>

          <table class="study-data-table" style="font-size: 0.78rem;">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Zero-Order</th>
                <th>First-Order</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rate Law</strong></td>
                <td><code>r = k [R]⁰ = k</code></td>
                <td><code>r = k [R]¹</code></td>
              </tr>
              <tr>
                <td><strong>Integrated Equation</strong></td>
                <td><code>[R]_t = [R]₀ - kt</code></td>
                <td><code>k = (2.303 / t) log([R]₀ / [R]_t)</code></td>
              </tr>
              <tr>
                <td><strong>Half-Life (t½)</strong></td>
                <td><code>t½ = [R]₀ / (2k)</code><br><small style="color: var(--accent-amber);">Proportional to [R]₀!</small></td>
                <td><code>t½ = 0.693 / k</code><br><small style="color: var(--accent-emerald);">Independent of [R]₀!</small></td>
              </tr>
              <tr>
                <td><strong>Linear Plot</strong></td>
                <td><code>[R] vs t</code> (slope = -k)</td>
                <td><code>log[R] vs t</code> (slope = -k/2.303)</td>
              </tr>
              <tr>
                <td><strong>Units of k</strong></td>
                <td><code>mol L⁻¹ s⁻¹</code></td>
                <td><code>s⁻¹</code></td>
              </tr>
            </tbody>
          </table>

          <div class="neet-trap-alert" style="margin-top: 0.8rem;">
            <span style="font-size: 1.25rem;">⚠️</span>
            <div>
              <strong>Order vs Molecularity:</strong>
              <br>• <strong>Order:</strong> Experimentally determined, can be zero, fractional, or whole number. Applies to overall reaction.
              <br>• <strong>Molecularity:</strong> Theoretical number of reacting particles in an elementary step; always integer (1, 2, 3), NEVER zero or fractional!
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'halflife') {
      const n = this.halfLifeCount;
      const frac = (100 / Math.pow(2, n)).toFixed(2);
      const reacted = (100 - frac).toFixed(2);

      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-kin-order">Zero vs First Order</button>
            <button class="stage-control-btn active" id="btn-kin-halflife">Half-Life & Remaining [R]</button>
            <button class="stage-control-btn" id="btn-kin-arrhenius">Arrhenius & Catalyst Ea</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">First-Order Fraction Remaining: [R]t = [R]₀ (½)ⁿ</span>
              <span class="stage-badge-ncert">n = ${n} Half-Lives</span>
            </div>
            <div style="margin-top: 0.6rem;">
              <label style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-bottom: 0.3rem;">
                Select Number of Half-Lives (n): <strong>${n}</strong> (Total time t = ${n} · t½)
              </label>
              <input type="range" min="1" max="6" value="${n}" id="slider-half-life" style="width: 100%; accent-color: var(--accent-cyan);">
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.6rem; text-align: center;">
              <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); padding: 0.6rem; border-radius: 6px;">
                <span style="color: var(--accent-emerald); font-weight: 700;">Remaining [R]t</span><br>
                <strong style="font-size: 1.1rem; color: #fff;">${frac}%</strong>
              </div>
              <div style="background: rgba(244,63,94,0.1); border: 1px solid rgba(244,63,94,0.3); padding: 0.6rem; border-radius: 6px;">
                <span style="color: var(--accent-rose); font-weight: 700;">Reacted Amount</span><br>
                <strong style="font-size: 1.1rem; color: #fff;">${reacted}%</strong>
              </div>
            </div>
            <div style="margin-top: 0.6rem; font-size: 0.8rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
              • 1 half-life = 50% left (50% reacted)<br>
              • 2 half-lives = 25% left (75% reacted)<br>
              • 3 half-lives = 12.5% left (87.5% reacted)<br>
              • <strong>99.9% completion = 10 · t½</strong> (Super-popular NEET numerical!)
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'arrhenius') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-kin-order">Zero vs First Order</button>
            <button class="stage-control-btn" id="btn-kin-halflife">Half-Life & Remaining [R]</button>
            <button class="stage-control-btn active" id="btn-kin-arrhenius">Arrhenius & Catalyst Ea</button>
          </div>

          <div class="model-meta-card">
            <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">
              Arrhenius Equation & Two-Temperature Form:
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-family: var(--font-mono); margin: 0.5rem 0; font-size: 0.85rem;">
              k = A · e^(-Ea / RT)<br>
              log(k₂ / k₁) = [Ea / (2.303 R)] · [(T₂ - T₁) / (T₁ · T₂)]
            </div>
            <div style="font-size: 0.82rem; line-height: 1.6; color: #fff;">
              • <strong>Arrhenius Plot:</strong> <code>log k vs 1/T</code> gives a straight line with <strong>Slope = - Ea / (2.303 R)</strong> and Intercept = <code>log A</code>.<br>
              • <strong>Role of Catalyst:</strong> Provides an alternative reaction pathway with lower activation energy (Ea). <strong>Does NOT change ΔH or Equilibrium Constant (K)!</strong><br>
              • Temperature MUST always be converted to <strong>Kelvin (K = °C + 273.15)</strong>!
            </div>
          </div>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-kin-order')?.addEventListener('click', () => { this.pop(); this.renderChemicalKinetics('order'); });
    document.getElementById('btn-kin-halflife')?.addEventListener('click', () => { this.pop(); this.renderChemicalKinetics('halflife'); });
    document.getElementById('btn-kin-arrhenius')?.addEventListener('click', () => { this.pop(); this.renderChemicalKinetics('arrhenius'); });

    const hlSlider = document.getElementById('slider-half-life');
    hlSlider?.addEventListener('input', (e) => {
      this.halfLifeCount = parseInt(e.target.value);
      this.renderChemicalKinetics('halflife');
    });
  }

  // =========================================================================
  // 2. COORDINATION COMPOUNDS VISUAL STAGE
  // =========================================================================
  renderCoordinationCompounds(subview = 'cft') {
    this.hub.stageTitle.textContent = "Coordination Chemistry & Crystal Field Theory";
    this.hub.stageSubtitle.textContent = "Werner's valencies, IUPAC nomenclature, spectrochemical series, and Δo vs Δt splitting";
    this.hub.stageBadge.textContent = "Inorganic Chemistry / NEET";

    let contentHtml = '';

    if (subview === 'cft') {
      const isStrong = this.ligandField === 'strong';
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-coord-cft">Octahedral CFT (eg & t2g)</button>
            <button class="stage-control-btn" id="btn-coord-werner">Werner's Theory & AgCl</button>
            <button class="stage-control-btn" id="btn-coord-isomers">Isomerism & Cisplatin</button>
          </div>

          <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 0.75rem;">
            <button class="stage-control-btn ${!isStrong ? 'active' : ''}" id="btn-field-weak">Weak Field (Δo < P ⟶ High Spin)</button>
            <button class="stage-control-btn ${isStrong ? 'active' : ''}" id="btn-field-strong">Strong Field (Δo > P ⟶ Low Spin)</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">Octahedral Crystal Field Splitting (Δo)</span>
              <span class="stage-badge-ncert">${isStrong ? 'Low Spin (Paired)' : 'High Spin (Hund Rule)'}</span>
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.82rem; line-height: 1.6; color: #fff;">
              • <strong>eg Orbitals (dx²-y², dz²):</strong> Point directly at ligands ⟶ destabilised to <code>+ 0.6 Δo</code>.<br>
              • <strong>t2g Orbitals (dxy, dyz, dxz):</strong> Point between ligand axes ⟶ stabilised to <code>- 0.4 Δo</code>.<br>
              • <strong>Tetrahedral Splitting:</strong> <code>Δt = (4/9) Δo</code> (t₂ is higher, e is lower; tetrahedral complexes are almost always <strong>high spin</strong> because Δt is too small to overcome pairing energy P).
            </div>
            <div style="margin-top: 0.6rem; padding: 0.5rem; background: rgba(0,0,0,0.3); border-radius: 6px; font-size: 0.8rem;">
              <strong style="color: var(--accent-amber);">Spectrochemical Series (Increasing Field Strength):</strong><br>
              <code>I⁻ &lt; Br⁻ &lt; Cl⁻ &lt; F⁻ &lt; OH⁻ &lt; C₂O₄²⁻ &lt; H₂O &lt; NH₃ &lt; en &lt; CN⁻ &lt; CO</code>
            </div>
          </div>

          <div class="neet-trap-alert" style="margin-top: 0.6rem;">
            <span style="font-size: 1.25rem;">🧲</span>
            <div>
              <strong>Spin-Only Magnetic Moment:</strong> <code>μ = √(n(n + 2)) BM</code> (Bohr Magnetons).
              <br>1 unpaired e⁻ = 1.73 BM | 2 e⁻ = 2.83 BM | 3 e⁻ = 3.87 BM | 4 e⁻ = 4.90 BM | 5 e⁻ = 5.92 BM.
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'werner') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-coord-cft">Octahedral CFT (eg & t2g)</button>
            <button class="stage-control-btn active" id="btn-coord-werner">Werner's Theory & AgCl</button>
            <button class="stage-control-btn" id="btn-coord-isomers">Isomerism & Cisplatin</button>
          </div>

          <table class="study-data-table" style="font-size: 0.78rem;">
            <thead>
              <tr>
                <th>Empirical Formula</th>
                <th>Modern Coordination Formula</th>
                <th>Moles of AgCl Precipitated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>CoCl₃ · 6NH₃</code></td>
                <td><code>[Co(NH₃)₆]Cl₃</code></td>
                <td><strong>3 moles AgCl</strong> (3 ionisable Cl⁻)</td>
              </tr>
              <tr>
                <td><code>CoCl₃ · 5NH₃</code></td>
                <td><code>[Co(NH₃)₅Cl]Cl₂</code></td>
                <td><strong>2 moles AgCl</strong> (2 ionisable Cl⁻)</td>
              </tr>
              <tr>
                <td><code>CoCl₃ · 4NH₃</code></td>
                <td><code>[Co(NH₃)₄Cl₂]Cl</code></td>
                <td><strong>1 mole AgCl</strong> (1 ionisable Cl⁻)</td>
              </tr>
              <tr>
                <td><code>CoCl₃ · 3NH₃</code></td>
                <td><code>[Co(NH₃)₃Cl₃]</code></td>
                <td><strong>0 moles AgCl</strong> (neutral complex!)</td>
              </tr>
            </tbody>
          </table>

          <div class="model-meta-card" style="margin-top: 0.6rem;">
            <strong style="color: var(--accent-cyan);">Alfred Werner's Two Valencies:</strong>
            <br>• <strong>Primary Valency:</strong> Corresponds to oxidation state; ionisable; non-directional; satisfied by negative ions.
            <br>• <strong>Secondary Valency:</strong> Corresponds to coordination number; non-ionisable; directional (defines spatial geometry like octahedral/square planar).
          </div>
        </div>
      `;
    } else if (subview === 'isomers') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-coord-cft">Octahedral CFT (eg & t2g)</button>
            <button class="stage-control-btn" id="btn-coord-werner">Werner's Theory & AgCl</button>
            <button class="stage-control-btn active" id="btn-coord-isomers">Isomerism & Cisplatin</button>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--accent-emerald); font-weight: 700; font-size: 0.85rem;">Linkage Isomerism</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                Arises from <strong>ambidentate ligands</strong> (e.g. <code>-NO₂</code> nitro vs <code>-ONO</code> nitrito; <code>-SCN</code> thiocyanato vs <code>-NCS</code> isothiocyanato).
              </p>
            </div>
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--accent-cyan); font-weight: 700; font-size: 0.85rem;">Ionisation Isomerism</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                Counter ion inside vs outside: <code>[Co(NH₃)₅Br]SO₄</code> (gives BaSO₄ ppt) vs <code>[Co(NH₃)₅SO₄]Br</code> (gives AgBr ppt).
              </p>
            </div>
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--accent-rose); font-weight: 700; font-size: 0.85rem;">Geometrical (Cisplatin)</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                <code>cis-[Pt(NH₃)₂Cl₂]</code> (Cisplatin) is an effective <strong>anticancer therapeutic</strong>; trans-isomer is biologically inactive!
              </p>
            </div>
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--phy-primary); font-weight: 700; font-size: 0.85rem;">Optical Isomerism</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                Non-superimposable mirror images (enantiomers), e.g. <code>[Co(en)₃]³⁺</code> and <code>cis-[Co(en)₂Cl₂]⁺</code>.
              </p>
            </div>
          </div>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-coord-cft')?.addEventListener('click', () => { this.pop(); this.renderCoordinationCompounds('cft'); });
    document.getElementById('btn-coord-werner')?.addEventListener('click', () => { this.pop(); this.renderCoordinationCompounds('werner'); });
    document.getElementById('btn-coord-isomers')?.addEventListener('click', () => { this.pop(); this.renderCoordinationCompounds('isomers'); });

    document.getElementById('btn-field-weak')?.addEventListener('click', () => {
      this.ligandField = 'weak';
      this.pop();
      this.renderCoordinationCompounds('cft');
    });
    document.getElementById('btn-field-strong')?.addEventListener('click', () => {
      this.ligandField = 'strong';
      this.pop();
      this.renderCoordinationCompounds('cft');
    });
  }
}
