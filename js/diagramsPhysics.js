// ==========================================================================
// Class 12 CBSE Physics - Interactive Scrollytelling Visual Stage
// Chapters: Current Electricity, Moving Charges & Magnetism,
//           Magnetism & Matter, Electromagnetic Induction
// ==========================================================================

export class DiagramsPhysics {
  constructor(hub) {
    this.hub = hub;
    // Current Electricity state
    this.driftMaterial = 'copper';
    this.tempMaterial = 'copper'; // 'copper' (metal) | 'silicon' (semiconductor)
    this.tempDelta = 50; // deg C
    this.bridgeL = 40; // cm for meter bridge

    // Moving Charges state
    this.lorentzAngle = 90; // degrees
    this.cyclotronB = 1.0; // Tesla
    this.galvMode = 'ammeter'; // 'ammeter' | 'voltmeter'

    // Magnetism and Matter state
    this.magPosition = 'axial'; // 'axial' | 'equatorial'
    this.dipAngle = 45; // degrees
    this.magneticMaterial = 'ferro'; // 'dia' | 'para' | 'ferro'

    // EMI state
    this.fluxChange = 'increasing'; // 'increasing' | 'decreasing'
    this.acPhase = 0;
  }

  pop() {
    if (this.hub && this.hub.playAudio) this.hub.playAudio('pop');
  }

  // =========================================================================
  // 1. CURRENT ELECTRICITY VISUAL STAGE
  // =========================================================================
  renderCurrentElectricity(subview = 'drift') {
    this.hub.stageTitle.textContent = "Current Electricity & Electron Dynamics";
    this.hub.stageSubtitle.textContent = "Drift velocity (vd), Ohm's law, temperature coefficients and bridge circuits";
    this.hub.stageBadge.textContent = "CBSE Ch. 3 / NEET High-Yield";

    let contentHtml = '';

    if (subview === 'drift') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-phy-drift">Drift Velocity & I=neAvd</button>
            <button class="stage-control-btn" id="btn-phy-temp">R vs Temp (Metals vs Semiconductors)</button>
            <button class="stage-control-btn" id="btn-phy-bridge">Meter Bridge Balance</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">Microscopic Drift Velocity (vd)</span>
              <span class="stage-badge-ncert" style="background: rgba(245,158,11,0.2); color: var(--phy-primary);">vd ≈ 10⁻⁴ m/s</span>
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.82rem; line-height: 1.6; color: #fff;">
              <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-family: var(--font-mono); margin-bottom: 0.5rem;">
                vd = (e · E · τ) / m<br>
                I = n · e · A · vd &nbsp;⇒&nbsp; j = I/A = n · e · vd
              </div>
              • <strong>Random Thermal Velocity:</strong> ~10⁵ to 10⁶ m/s (net directed current = 0).<br>
              • <strong>Drift Velocity:</strong> Order of mere fractions of a mm/s (~10⁻⁴ m/s).<br>
              • <strong>Why Bulb Glows Instantly?</strong> The electric field propagates at speed of light (~3×10⁸ m/s), setting all free electrons into coordinated drift simultaneously!
            </div>
          </div>

          <div class="neet-trap-alert" style="margin-top: 0.8rem; border-left: 3px solid var(--phy-primary);">
            <span style="font-size: 1.25rem;">⚡</span>
            <div>
              <strong>Mobility (μ):</strong> Drift velocity per unit electric field:
              <code>μ = vd / E = eτ / m</code> (SI unit: <code>m² V⁻¹ s⁻¹</code>). Always positive!
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'temp') {
      const alphaVal = this.tempMaterial === 'copper' ? '+0.0039' : '-0.07';
      const trendText = this.tempMaterial === 'copper'
        ? 'METALS (α > 0): Temperature ↑ ⟶ Relaxation time τ ↓ (more electron-lattice collisions) ⟶ Resistance R ↑'
        : 'SEMICONDUCTORS (α < 0): Temperature ↑ ⟶ Covalent bonds break, carrier density n ↑ exponentially ⟶ Resistance R ↓';

      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-phy-drift">Drift Velocity & I=neAvd</button>
            <button class="stage-control-btn active" id="btn-phy-temp">R vs Temp (Metals vs Semiconductors)</button>
            <button class="stage-control-btn" id="btn-phy-bridge">Meter Bridge Balance</button>
          </div>

          <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 0.75rem;">
            <button class="stage-control-btn ${this.tempMaterial === 'copper' ? 'active' : ''}" id="btn-mat-copper">Copper (Metal, α > 0)</button>
            <button class="stage-control-btn ${this.tempMaterial === 'silicon' ? 'active' : ''}" id="btn-mat-silicon">Silicon (Semiconductor, α < 0)</button>
          </div>

          <div class="model-meta-card">
            <div style="font-weight: 700; color: var(--phy-primary); font-size: 0.92rem;">
              Temperature Dependence Formula: <code>R_T = R₀ [1 + α (T - T₀)]</code>
            </div>
            <p style="font-size: 0.82rem; color: #fff; margin-top: 0.5rem;">
              ${trendText}
            </p>
            <div style="margin-top: 0.6rem; font-size: 0.8rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
              • Temperature coefficient <strong>α = (R_T - R₀) / [R₀ (T - T₀)]</strong> (Unit: K⁻¹ or °C⁻¹)<br>
              • <strong>Nichrome / Manganin / Constantan:</strong> Have extremely small positive α and high resistivity; used in standard resistance boxes & meter bridges to minimize temperature drift!
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'bridge') {
      const l = this.bridgeL;
      const r_val = 3; // ohms
      const s_calc = ((100 - l) / l * r_val).toFixed(2);

      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-phy-drift">Drift Velocity & I=neAvd</button>
            <button class="stage-control-btn" id="btn-phy-temp">R vs Temp (Metals vs Semiconductors)</button>
            <button class="stage-control-btn active" id="btn-phy-bridge">Meter Bridge Balance</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--phy-primary); font-size: 0.92rem;">Meter Bridge (Wheatstone Application)</span>
              <span class="stage-badge-ncert" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">R / S = l / (100 - l)</span>
            </div>
            <div style="margin-top: 0.6rem;">
              <label style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-bottom: 0.3rem;">
                Balance Point Jockey Position (l): <strong>${l} cm</strong> (Remaining: ${100 - l} cm)
              </label>
              <input type="range" min="10" max="90" value="${l}" id="slider-bridge-l" style="width: 100%; accent-color: var(--phy-primary);">
            </div>
            <div style="margin-top: 0.6rem; padding: 0.6rem; background: rgba(0,0,0,0.3); border-radius: 6px; font-size: 0.82rem; color: #fff;">
              Known Resistor <strong>R = ${r_val} Ω</strong><br>
              Calculated Unknown <strong>S = R · (100 - l) / l = ${s_calc} Ω</strong>
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.78rem; color: var(--accent-amber);">
              ⚠️ <strong>Board Precautions:</strong> Jockey must be touched gently without dragging (dragging changes wire cross-section uniformity). Balance point should be near center (40–60 cm) to minimize fractional measurement errors!
            </div>
          </div>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    // Event listeners
    document.getElementById('btn-phy-drift')?.addEventListener('click', () => { this.pop(); this.renderCurrentElectricity('drift'); });
    document.getElementById('btn-phy-temp')?.addEventListener('click', () => { this.pop(); this.renderCurrentElectricity('temp'); });
    document.getElementById('btn-phy-bridge')?.addEventListener('click', () => { this.pop(); this.renderCurrentElectricity('bridge'); });

    document.getElementById('btn-mat-copper')?.addEventListener('click', () => {
      this.tempMaterial = 'copper';
      this.pop();
      this.renderCurrentElectricity('temp');
    });
    document.getElementById('btn-mat-silicon')?.addEventListener('click', () => {
      this.tempMaterial = 'silicon';
      this.pop();
      this.renderCurrentElectricity('temp');
    });

    const slider = document.getElementById('slider-bridge-l');
    slider?.addEventListener('input', (e) => {
      this.bridgeL = parseInt(e.target.value);
      this.renderCurrentElectricity('bridge');
    });
  }

  // =========================================================================
  // 2. MOVING CHARGES AND MAGNETISM VISUAL STAGE
  // =========================================================================
  renderMovingCharges(subview = 'lorentz') {
    this.hub.stageTitle.textContent = "Moving Charges & Magnetic Field Interactions";
    this.hub.stageSubtitle.textContent = "Lorentz force, circular & helical motion, cyclotron, parallel wires, and galvanometer conversion";
    this.hub.stageBadge.textContent = "CBSE Ch. 4 / NEET High-Yield";

    let contentHtml = '';

    if (subview === 'lorentz') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-mag-lorentz">Lorentz Force Trajectory</button>
            <button class="stage-control-btn" id="btn-mag-wires">Parallel Conductors (F/L)</button>
            <button class="stage-control-btn" id="btn-mag-galv">Galvanometer Conversion</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">Magnetic Lorentz Force: F = q (v × B)</span>
              <span class="stage-badge-ncert" style="background: rgba(245,158,11,0.2); color: var(--phy-primary);">F = q v B sin θ</span>
            </div>
            <div style="margin-top: 0.6rem; font-size: 0.82rem; line-height: 1.6; color: #fff;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.5rem;">
                <div style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
                  <span style="color: var(--accent-cyan); font-weight: 700;">θ = 90° (Perpendicular):</span><br>
                  • Path: <strong>Uniform Circular</strong><br>
                  • Radius: <code>r = mv / (qB)</code><br>
                  • Period: <code>T = 2πm / (qB)</code><br>
                  • Frequency: <code>f = qB / (2πm)</code> (independent of speed v!)
                </div>
                <div style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
                  <span style="color: var(--accent-rose); font-weight: 700;">0° < θ < 90° (Oblique):</span><br>
                  • Path: <strong>Helical Path</strong><br>
                  • Radius: <code>r = m v_⊥ / (qB)</code><br>
                  • Pitch: <code>p = v_∥ · T = (v cos θ)(2πm / qB)</code>
                </div>
              </div>
              • <strong>Work Done by Magnetic Force = 0:</strong> Since <code>F ⊥ v</code> at all instants, <code>P = F · v = 0</code>. Magnetic force changes direction of velocity, NEVER its speed or kinetic energy!
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'wires') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-mag-lorentz">Lorentz Force Trajectory</button>
            <button class="stage-control-btn active" id="btn-mag-wires">Parallel Conductors (F/L)</button>
            <button class="stage-control-btn" id="btn-mag-galv">Galvanometer Conversion</button>
          </div>

          <div class="model-meta-card">
            <div style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">
              Force Between Two Long Parallel Conductors
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-family: var(--font-mono); margin: 0.5rem 0; font-size: 0.9rem; text-align: center;">
              F / L = (μ₀ · I₁ · I₂) / (2π · d)
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
              <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); padding: 0.6rem; border-radius: 6px;">
                <span style="color: var(--accent-emerald); font-weight: 700;">Parallel (Same Direction):</span>
                <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
                  Magnetic fields between wires oppose each other ⟶ <strong>MUTUAL ATTRACTION</strong>.
                </p>
              </div>
              <div style="background: rgba(244,63,94,0.1); border: 1px solid rgba(244,63,94,0.3); padding: 0.6rem; border-radius: 6px;">
                <span style="color: var(--accent-rose); font-weight: 700;">Antiparallel (Opposite):</span>
                <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
                  Magnetic fields reinforce between wires ⟶ <strong>MUTUAL REPULSION</strong>.
                </p>
              </div>
            </div>
            <div class="neet-trap-alert" style="margin-top: 0.8rem;">
              <span style="font-size: 1.25rem;">📌</span>
              <div>
                <strong>Definition of 1 Ampere:</strong> Constant current which, if maintained in two straight parallel conductors of infinite length placed 1 metre apart in vacuum, produces between them a force equal to <code>2 × 10⁻⁷ N/m</code>!
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'galv') {
      const mode = this.galvMode;
      const g = 50; // ohms
      const ig = 0.01; // A (10 mA)
      const targetI = 1.0; // 1 A
      const targetV = 10.0; // 10 V
      const s_val = ((ig * g) / (targetI - ig)).toFixed(3);
      const r_val = (targetV / ig - g).toFixed(1);

      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-mag-lorentz">Lorentz Force Trajectory</button>
            <button class="stage-control-btn" id="btn-mag-wires">Parallel Conductors (F/L)</button>
            <button class="stage-control-btn active" id="btn-mag-galv">Galvanometer Conversion</button>
          </div>

          <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 0.75rem;">
            <button class="stage-control-btn ${mode === 'ammeter' ? 'active' : ''}" id="btn-galv-ammeter">Convert to Ammeter (Shunt in Parallel)</button>
            <button class="stage-control-btn ${mode === 'voltmeter' ? 'active' : ''}" id="btn-galv-voltmeter">Convert to Voltmeter (High R in Series)</button>
          </div>

          <div class="model-meta-card">
            ${mode === 'ammeter' ? `
              <div style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">Conversion to Ammeter (Range: 0 to 1 A)</div>
              <p style="font-size: 0.82rem; color: #fff; margin-top: 0.3rem;">
                Connect a <strong>small resistance (Shunt S)</strong> in <strong>parallel</strong> with the galvanometer.
              </p>
              <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-family: var(--font-mono); margin: 0.5rem 0; font-size: 0.85rem;">
                S = (Ig · G) / (I - Ig) = (0.01 · 50) / (1 - 0.01) = <strong>${s_val} Ω</strong>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">
                • <strong>Ideal Ammeter Resistance:</strong> R_A = 0 (connected in <strong>series</strong> so it does not alter circuit current).
              </div>
            ` : `
              <div style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">Conversion to Voltmeter (Range: 0 to 10 V)</div>
              <p style="font-size: 0.82rem; color: #fff; margin-top: 0.3rem;">
                Connect a <strong>high resistance (R)</strong> in <strong>series</strong> with the galvanometer.
              </p>
              <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-family: var(--font-mono); margin: 0.5rem 0; font-size: 0.85rem;">
                R = (V / Ig) - G = (10 / 0.01) - 50 = <strong>${r_val} Ω</strong>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">
                • <strong>Ideal Voltmeter Resistance:</strong> R_V = ∞ (connected in <strong>parallel</strong> so it draws negligible current).
              </div>
            `}
          </div>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-mag-lorentz')?.addEventListener('click', () => { this.pop(); this.renderMovingCharges('lorentz'); });
    document.getElementById('btn-mag-wires')?.addEventListener('click', () => { this.pop(); this.renderMovingCharges('wires'); });
    document.getElementById('btn-mag-galv')?.addEventListener('click', () => { this.pop(); this.renderMovingCharges('galv'); });

    document.getElementById('btn-galv-ammeter')?.addEventListener('click', () => {
      this.galvMode = 'ammeter';
      this.pop();
      this.renderMovingCharges('galv');
    });
    document.getElementById('btn-galv-voltmeter')?.addEventListener('click', () => {
      this.galvMode = 'voltmeter';
      this.pop();
      this.renderMovingCharges('galv');
    });
  }

  // =========================================================================
  // 3. MAGNETISM AND MATTER VISUAL STAGE
  // =========================================================================
  renderMagnetismMatter(subview = 'dipole') {
    this.hub.stageTitle.textContent = "Magnetism, Earth's Field & Materials";
    this.hub.stageSubtitle.textContent = "Bar magnet fields (axial vs equatorial), magnetic elements (BH, BV, dip), and Dia/Para/Ferro materials";
    this.hub.stageBadge.textContent = "CBSE Ch. 5 / NCERT";

    let contentHtml = '';

    if (subview === 'dipole') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-matter-dipole">Bar Magnet (B_axial = 2 B_eq)</button>
            <button class="stage-control-btn" id="btn-matter-earth">Earth's Magnetism & Dip (δ)</button>
            <button class="stage-control-btn" id="btn-matter-materials">Dia, Para & Ferromagnetism</button>
          </div>

          <div class="model-meta-card">
            <div style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">
              Short Bar Magnet Field Strengths at Distance r:
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin: 0.5rem 0;">
              <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
                <span style="color: var(--accent-cyan); font-weight: 700;">Axial Position:</span><br>
                <code>B_axial = (μ₀ / 4π) · (2M / r³)</code><br>
                <small style="color: var(--text-secondary);">Direction: Parallel to magnetic dipole moment M (S to N).</small>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
                <span style="color: var(--accent-amber); font-weight: 700;">Equatorial Position:</span><br>
                <code>B_eq = (μ₀ / 4π) · (M / r³)</code><br>
                <small style="color: var(--text-secondary);">Direction: Antiparallel to M (N to S).</small>
              </div>
            </div>
            <div style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); padding: 0.6rem; border-radius: 6px; font-weight: 700; text-align: center; color: var(--phy-primary);">
              CRUCIAL BOARD RESULT: B_axial = 2 · B_equatorial (at same distance r)
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'earth') {
      const dip = this.dipAngle;
      const b_total = 40; // microTesla
      const rad = dip * Math.PI / 180;
      const bh = (b_total * Math.cos(rad)).toFixed(1);
      const bv = (b_total * Math.sin(rad)).toFixed(1);

      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-matter-dipole">Bar Magnet (B_axial = 2 B_eq)</button>
            <button class="stage-control-btn active" id="btn-matter-earth">Earth's Magnetism & Dip (δ)</button>
            <button class="stage-control-btn" id="btn-matter-materials">Dia, Para & Ferromagnetism</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">Earth's Magnetic Elements</span>
              <span class="stage-badge-ncert" style="background: rgba(245,158,11,0.2); color: var(--phy-primary);">Dip: δ = ${dip}°</span>
            </div>
            <div style="margin-top: 0.6rem;">
              <label style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-bottom: 0.3rem;">
                Adjust Angle of Dip (δ): <strong>${dip}°</strong>
              </label>
              <input type="range" min="0" max="90" value="${dip}" id="slider-dip-angle" style="width: 100%; accent-color: var(--phy-primary);">
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.6rem;">
              <div style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-size: 0.82rem; color: #fff;">
                <strong>Horizontal:</strong> <code>B_H = B cos δ = ${bh} μT</code>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px; font-size: 0.82rem; color: #fff;">
                <strong>Vertical:</strong> <code>B_V = B sin δ = ${bv} μT</code>
              </div>
            </div>
            <div style="margin-top: 0.6rem; font-size: 0.8rem; color: var(--text-secondary); background: rgba(0,0,0,0.2); padding: 0.5rem; border-radius: 6px;">
              • <strong>At Magnetic Equator:</strong> δ = 0° ⟶ B_V = 0, B_H = B (needle is completely horizontal).<br>
              • <strong>At Magnetic Poles:</strong> δ = 90° ⟶ B_H = 0, B_V = B (needle is completely vertical).<br>
              • <code>tan δ = B_V / B_H</code> &nbsp;and&nbsp; <code>B = √(B_H² + B_V²)</code>.
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'materials') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-matter-dipole">Bar Magnet (B_axial = 2 B_eq)</button>
            <button class="stage-control-btn" id="btn-matter-earth">Earth's Magnetism & Dip (δ)</button>
            <button class="stage-control-btn active" id="btn-matter-materials">Dia, Para & Ferromagnetism</button>
          </div>

          <table class="study-data-table" style="font-size: 0.78rem;">
            <thead>
              <tr>
                <th>Property</th>
                <th>Diamagnetic</th>
                <th>Paramagnetic</th>
                <th>Ferromagnetic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Field Response</strong></td>
                <td>Feebly repelled</td>
                <td>Feebly attracted</td>
                <td>Strongly attracted</td>
              </tr>
              <tr>
                <td><strong>Susceptibility (χm)</strong></td>
                <td>Small & negative</td>
                <td>Small & positive</td>
                <td>Very large positive</td>
              </tr>
              <tr>
                <td><strong>Permeability (μr)</strong></td>
                <td>0 ≤ μr < 1</td>
                <td>μr slightly > 1</td>
                <td>μr ≫ 1000</td>
              </tr>
              <tr>
                <td><strong>Temp Dependence</strong></td>
                <td>Independent</td>
                <td>Curie Law: χ ∝ 1/T</td>
                <td>Transitions to Para above Curie Temp (Tc)</td>
              </tr>
              <tr>
                <td><strong>Key Examples</strong></td>
                <td>Bi, Cu, Pb, Water, Au</td>
                <td>Al, Pt, O₂, Na</td>
                <td>Fe, Co, Ni, Alnico</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-matter-dipole')?.addEventListener('click', () => { this.pop(); this.renderMagnetismMatter('dipole'); });
    document.getElementById('btn-matter-earth')?.addEventListener('click', () => { this.pop(); this.renderMagnetismMatter('earth'); });
    document.getElementById('btn-matter-materials')?.addEventListener('click', () => { this.pop(); this.renderMagnetismMatter('materials'); });

    const dipSlider = document.getElementById('slider-dip-angle');
    dipSlider?.addEventListener('input', (e) => {
      this.dipAngle = parseInt(e.target.value);
      this.renderMagnetismMatter('earth');
    });
  }

  // =========================================================================
  // 4. ELECTROMAGNETIC INDUCTION (EMI) VISUAL STAGE
  // =========================================================================
  renderEMI(subview = 'faraday') {
    this.hub.stageTitle.textContent = "Electromagnetic Induction & AC Generation";
    this.hub.stageSubtitle.textContent = "Faraday's laws, Lenz's law, motional emf (Blv), mutual/self-inductance, and AC generator";
    this.hub.stageBadge.textContent = "CBSE Ch. 6 / NEET High-Yield";

    let contentHtml = '';

    if (subview === 'faraday') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-emi-faraday">Faraday & Lenz's Law</button>
            <button class="stage-control-btn" id="btn-emi-motional">Motional EMF & Eddy Currents</button>
            <button class="stage-control-btn" id="btn-emi-generator">AC Generator e = e₀ sin ωt</button>
          </div>

          <div class="model-meta-card">
            <div style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">
              Faraday's Law of EMI & Lenz's Law Opposition
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-family: var(--font-mono); margin: 0.5rem 0; font-size: 0.9rem; text-align: center;">
              ε = - N · (dΦ_B / dt) &nbsp;&nbsp;where&nbsp;&nbsp; Φ_B = B · A · cos θ
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.82rem; line-height: 1.6; color: #fff;">
              • <strong>The Negative Sign (Lenz's Law):</strong> The polarity of induced emf is such that it produces a current whose magnetic field <em>opposes the change in magnetic flux</em> producing it.<br>
              • <strong>Conservation of Energy:</strong> Mechanical work done in moving the magnet against opposing magnetic repulsion is converted into electrical energy in the coil!
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.6rem;">
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--accent-cyan); font-weight: 700; font-size: 0.84rem;">Self-Inductance (L)</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                <code>ε = - L (dI/dt)</code><br>
                For Solenoid: <code>L = (μ₀ N² A) / l</code><br>
                Energy stored: <code>U = ½ L I²</code>
              </p>
            </div>
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--accent-emerald); font-weight: 700; font-size: 0.84rem;">Mutual Inductance (M)</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                <code>ε₂ = - M (dI₁/dt)</code><br>
                Coaxial Solenoids: <code>M = (μ₀ N₁ N₂ A) / l</code><br>
                Unit: <strong>Henry (H)</strong>
              </p>
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'motional') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-emi-faraday">Faraday & Lenz's Law</button>
            <button class="stage-control-btn active" id="btn-emi-motional">Motional EMF & Eddy Currents</button>
            <button class="stage-control-btn" id="btn-emi-generator">AC Generator e = e₀ sin ωt</button>
          </div>

          <div class="model-meta-card">
            <div style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">
              Motional Electromotive Force (EMF)
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-family: var(--font-mono); margin: 0.5rem 0; font-size: 0.9rem; text-align: center;">
              ε = B · l · v &nbsp;&nbsp;⇒&nbsp;&nbsp; I = (B · l · v) / R &nbsp;&nbsp;⇒&nbsp;&nbsp; P = (B² · l² · v²) / R
            </div>
            <p style="font-size: 0.82rem; color: #fff;">
              • <strong>Fleming's Right-Hand Rule:</strong> Thumb = Motion (v), Forefinger = Field (B), Middle finger = Induced Current (I).
            </p>
            <div class="neet-trap-alert" style="margin-top: 0.8rem;">
              <span style="font-size: 1.25rem;">🌀</span>
              <div>
                <strong>Eddy Currents (Foucault Currents):</strong>
                Circulating electric currents induced in bulk metallic masses exposed to changing magnetic flux.
                <br>• <strong>Applications:</strong> Electromagnetic braking in trains, Induction furnaces, Dead-beat galvanometers.
                <br>• <strong>Minimization:</strong> Using thin laminated sheets insulated by varnish instead of solid metallic cores in transformers!
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'generator') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-emi-faraday">Faraday & Lenz's Law</button>
            <button class="stage-control-btn" id="btn-emi-motional">Motional EMF & Eddy Currents</button>
            <button class="stage-control-btn active" id="btn-emi-generator">AC Generator e = e₀ sin ωt</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--phy-primary); font-size: 0.95rem;">AC Generator Derivation</span>
              <span class="stage-badge-ncert" style="background: rgba(245,158,11,0.2); color: var(--phy-primary);">e = e₀ sin ωt</span>
            </div>
            <div style="margin-top: 0.6rem; font-size: 0.82rem; line-height: 1.6; color: #fff;">
              • Coil with N turns, area A, rotating at angular speed ω in uniform field B:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<code>Φ_B = N · B · A · cos(ωt)</code><br>
              • By Faraday's Law:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<code>e = - dΦ_B / dt = N · B · A · ω · sin(ωt) = e₀ · sin(ωt)</code><br>
              • <strong>Peak EMF:</strong> <code>e₀ = N · B · A · ω = 2π f · N · B · A</code><br>
              • <strong>Slip Rings & Carbon Brushes:</strong> Maintain continuous electrical connection with the external load while the armature rotates, delivering alternating sinusoidal output.
            </div>
          </div>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-emi-faraday')?.addEventListener('click', () => { this.pop(); this.renderEMI('faraday'); });
    document.getElementById('btn-emi-motional')?.addEventListener('click', () => { this.pop(); this.renderEMI('motional'); });
    document.getElementById('btn-emi-generator')?.addEventListener('click', () => { this.pop(); this.renderEMI('generator'); });
  }
}
