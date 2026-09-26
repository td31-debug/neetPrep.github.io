// ==========================================================================
// Visual Learning Simulators - Physics, Chemistry & Biology Sandboxes
// ==========================================================================

export class SimulatorsManager {
  constructor() {
    this.stoichCanvas = document.getElementById('stoich-canvas');
    this.solutionCanvas = document.getElementById('solution-canvas');
    this.projectileCanvas = document.getElementById('projectile-canvas');

    this.stoichCtx = this.stoichCanvas?.getContext('2d');
    this.solutionCtx = this.solutionCanvas?.getContext('2d');
    this.projectileCtx = this.projectileCanvas?.getContext('2d');

    // Chemistry: Stoichiometry State
    this.reactions = {
      'h2_o2': {
        name: '2H₂ + O₂ → 2H₂O',
        r1: { name: 'H₂', m: 2.0, coeff: 2, color: '#38bdf8' },
        r2: { name: 'O₂', m: 32.0, coeff: 1, color: '#ef4444' },
        p: { name: 'H₂O', m: 18.0, coeff: 2, color: '#10b981' },
        pyqId: 46
      },
      'n2_h2': {
        name: 'N₂ + 3H₂ → 2NH₃ (Haber\'s)',
        r1: { name: 'N₂', m: 28.0, coeff: 1, color: '#a855f7' },
        r2: { name: 'H₂', m: 2.0, coeff: 3, color: '#38bdf8' },
        p: { name: 'NH₃', m: 17.0, coeff: 2, color: '#10b981' },
        pyqId: 40
      },
      'h2_cl2': {
        name: 'H₂ + Cl₂ → 2HCl',
        r1: { name: 'H₂', m: 2.0, coeff: 1, color: '#38bdf8' },
        r2: { name: 'Cl₂', m: 71.0, coeff: 1, color: '#fbbf24' },
        p: { name: 'HCl', m: 36.5, coeff: 2, color: '#10b981' },
        pyqId: 44
      },
      'mg_o2': {
        name: '2Mg + O₂ → 2MgO',
        r1: { name: 'Mg', m: 24.0, coeff: 2, color: '#cbd5e1' },
        r2: { name: 'O₂', m: 32.0, coeff: 1, color: '#ef4444' },
        p: { name: 'MgO', m: 40.0, coeff: 2, color: '#10b981' },
        pyqId: 45
      },
      'naoh_hcl': {
        name: 'NaOH + HCl → NaCl + H₂O',
        r1: { name: 'NaOH', m: 40.0, coeff: 1, color: '#38bdf8' },
        r2: { name: 'HCl', m: 36.5, coeff: 1, color: '#f43f5e' },
        p: { name: 'NaCl', m: 58.5, coeff: 1, color: '#10b981' },
        pyqId: 38
      }
    };
    this.currentReactionKey = 'h2_o2';
    this.molesR1 = 2.0;
    this.molesR2 = 1.0;
    this.stoichParticles = [];
    this.isReacting = false;

    // Chemistry: Solution Sandbox State
    this.solutes = {
      'naoh': { name: 'Sodium Hydroxide (NaOH)', m: 40.0, nFactor: 1, ions: ['Na⁺', 'OH⁻'] },
      'nacl': { name: 'Sodium Chloride (NaCl)', m: 58.5, nFactor: 1, ions: ['Na⁺', 'Cl⁻'] },
      'h2so4': { name: 'Sulfuric Acid (H₂SO₄)', m: 98.0, nFactor: 2, ions: ['2H⁺', 'SO₄²⁻'] },
      'urea': { name: 'Urea (NH₂CONH₂)', m: 60.0, nFactor: 1, ions: ['Urea (Non-electrolyte)'] },
      'na2co3': { name: 'Sodium Carbonate (Na₂CO₃)', m: 106.0, nFactor: 2, ions: ['2Na⁺', 'CO₃²⁻'] }
    };
    this.currentSoluteKey = 'naoh';
    this.soluteMassG = 20.0;
    this.solutionVolumeMl = 250;
    this.solutionDensity = 1.15;
    this.solutionIons = [];

    // Physics: Projectile Motion State
    this.projAngleDeg = 45;
    this.projSpeed = 30; // m/s
    this.projGravity = 9.8; // m/s^2
    this.projTime = 0;
    this.projTrajectory = [];
    this.isLaunching = false;

    this.onJumpToQuestion = null;

    this.init();
  }

  init() {
    this.initStoichiometry();
    this.initSolutionBeaker();
    this.initSigFigsAnalyzer();
    this.initProjectileMotion();
    this.startAnimationLoops();
  }

  // ==========================================
  // SIMULATOR 1: Stoichiometry
  // ==========================================
  initStoichiometry() {
    const rxnSelect = document.getElementById('stoich-rxn-select');
    const r1Slider = document.getElementById('stoich-r1-slider');
    const r2Slider = document.getElementById('stoich-r2-slider');
    const btnReact = document.getElementById('btn-stoich-react');

    rxnSelect?.addEventListener('change', (e) => {
      this.currentReactionKey = e.target.value;
      this.updateStoichLabels();
      this.resetStoichParticles();
      this.calculateStoichiometry();
    });

    r1Slider?.addEventListener('input', (e) => {
      this.molesR1 = parseFloat(e.target.value);
      const el = document.getElementById('stoich-r1-val');
      if (el) el.textContent = `${this.molesR1.toFixed(1)} mol`;
      this.resetStoichParticles();
      this.calculateStoichiometry();
    });

    r2Slider?.addEventListener('input', (e) => {
      this.molesR2 = parseFloat(e.target.value);
      const el = document.getElementById('stoich-r2-val');
      if (el) el.textContent = `${this.molesR2.toFixed(1)} mol`;
      this.resetStoichParticles();
      this.calculateStoichiometry();
    });

    btnReact?.addEventListener('click', () => {
      this.triggerReactionAnimation();
    });

    document.getElementById('btn-jump-pyq')?.addEventListener('click', () => {
      const rxn = this.reactions[this.currentReactionKey];
      if (rxn?.pyqId && this.onJumpToQuestion) {
        this.onJumpToQuestion(rxn.pyqId);
      }
    });

    this.updateStoichLabels();
    this.resetStoichParticles();
    this.calculateStoichiometry();
  }

  updateStoichLabels() {
    const rxn = this.reactions[this.currentReactionKey];
    if (!rxn) return;

    const titleEl = document.getElementById('stoich-rxn-title');
    const r1El = document.getElementById('stoich-r1-name');
    const r2El = document.getElementById('stoich-r2-name');

    if (titleEl) titleEl.textContent = rxn.name;
    if (r1El) r1El.textContent = `Reactant 1: ${rxn.r1.name} (${rxn.r1.m} g/mol)`;
    if (r2El) r2El.textContent = `Reactant 2: ${rxn.r2.name} (${rxn.r2.m} g/mol)`;
  }

  resetStoichParticles() {
    if (!this.stoichCanvas) return;
    this.stoichParticles = [];
    const rxn = this.reactions[this.currentReactionKey];

    const pCount1 = Math.round(this.molesR1 * 8);
    const pCount2 = Math.round(this.molesR2 * 8);

    for (let i = 0; i < pCount1; i++) {
      this.stoichParticles.push({
        x: Math.random() * (this.stoichCanvas.width - 20) + 10,
        y: Math.random() * (this.stoichCanvas.height - 20) + 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: 6,
        color: rxn.r1.color,
        type: 'r1'
      });
    }

    for (let i = 0; i < pCount2; i++) {
      this.stoichParticles.push({
        x: Math.random() * (this.stoichCanvas.width - 20) + 10,
        y: Math.random() * (this.stoichCanvas.height - 20) + 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: 7,
        color: rxn.r2.color,
        type: 'r2'
      });
    }
  }

  triggerReactionAnimation() {
    this.isReacting = true;
    const rxn = this.reactions[this.currentReactionKey];

    const eqR1 = this.molesR1 / rxn.r1.coeff;
    const eqR2 = this.molesR2 / rxn.r2.coeff;

    const limiting = eqR1 < eqR2 ? 'r1' : 'r2';
    const prodMoles = Math.min(eqR1, eqR2) * rxn.p.coeff;
    const productParticlesCount = Math.round(prodMoles * 8);

    setTimeout(() => {
      this.stoichParticles = [];
      for (let i = 0; i < productParticlesCount; i++) {
        this.stoichParticles.push({
          x: Math.random() * (this.stoichCanvas.width - 20) + 10,
          y: Math.random() * (this.stoichCanvas.height - 20) + 10,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          radius: 9,
          color: rxn.p.color,
          type: 'p'
        });
      }

      const excessType = limiting === 'r1' ? 'r2' : 'r1';
      const excessMoles = limiting === 'r1' ? (this.molesR2 - eqR1 * rxn.r2.coeff) : (this.molesR1 - eqR2 * rxn.r1.coeff);
      const excessParticlesCount = Math.round(excessMoles * 8);

      for (let i = 0; i < excessParticlesCount; i++) {
        this.stoichParticles.push({
          x: Math.random() * (this.stoichCanvas.width - 20) + 10,
          y: Math.random() * (this.stoichCanvas.height - 20) + 10,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: excessType === 'r1' ? 6 : 7,
          color: excessType === 'r1' ? rxn.r1.color : rxn.r2.color,
          type: excessType
        });
      }
      this.isReacting = false;
    }, 400);
  }

  calculateStoichiometry() {
    const rxn = this.reactions[this.currentReactionKey];
    if (!rxn) return;

    const eqR1 = this.molesR1 / rxn.r1.coeff;
    const eqR2 = this.molesR2 / rxn.r2.coeff;

    let lrName = '';
    let excessName = '';
    let prodMoles = 0;
    let excessMoles = 0;

    if (eqR1 < eqR2) {
      lrName = rxn.r1.name;
      excessName = rxn.r2.name;
      prodMoles = eqR1 * rxn.p.coeff;
      excessMoles = this.molesR2 - (eqR1 * rxn.r2.coeff);
    } else {
      lrName = rxn.r2.name;
      excessName = rxn.r1.name;
      prodMoles = eqR2 * rxn.p.coeff;
      excessMoles = this.molesR1 - (eqR2 * rxn.r1.coeff);
    }

    const productMass = prodMoles * rxn.p.m;
    const excessMass = excessMoles * (excessName === rxn.r1.name ? rxn.r1.m : rxn.r2.m);

    const elLR = document.getElementById('res-limiting-reagent');
    const elYield = document.getElementById('res-product-yield');
    const elExcess = document.getElementById('res-excess-left');
    const elBadge = document.getElementById('res-pyq-badge');

    if (elLR) elLR.textContent = lrName;
    if (elYield) elYield.textContent = `${prodMoles.toFixed(2)} mol (${productMass.toFixed(1)} g)`;
    if (elExcess) elExcess.textContent = `${excessMoles.toFixed(2)} mol (${excessMass.toFixed(1)} g ${excessName})`;
    if (elBadge) elBadge.textContent = `PYQ #${rxn.pyqId}`;
  }

  // ==========================================
  // SIMULATOR 2: Solution Concentration
  // ==========================================
  initSolutionBeaker() {
    const soluteSelect = document.getElementById('solute-select');
    const massSlider = document.getElementById('solute-mass-slider');
    const volSlider = document.getElementById('solution-vol-slider');
    const densitySlider = document.getElementById('solution-density-slider');

    soluteSelect?.addEventListener('change', (e) => {
      this.currentSoluteKey = e.target.value;
      this.calculateSolution();
    });

    massSlider?.addEventListener('input', (e) => {
      this.soluteMassG = parseFloat(e.target.value);
      const el = document.getElementById('solute-mass-val');
      if (el) el.textContent = `${this.soluteMassG.toFixed(1)} g`;
      this.calculateSolution();
    });

    volSlider?.addEventListener('input', (e) => {
      this.solutionVolumeMl = parseInt(e.target.value);
      const el = document.getElementById('solution-vol-val');
      if (el) el.textContent = `${this.solutionVolumeMl} mL`;
      this.calculateSolution();
    });

    densitySlider?.addEventListener('input', (e) => {
      this.solutionDensity = parseFloat(e.target.value);
      const el = document.getElementById('solution-density-val');
      if (el) el.textContent = `${this.solutionDensity.toFixed(2)} g/mL`;
      this.calculateSolution();
    });

    this.calculateSolution();
  }

  calculateSolution() {
    const solute = this.solutes[this.currentSoluteKey];
    if (!solute) return;

    const molesSolute = this.soluteMassG / solute.m;
    const volLitres = this.solutionVolumeMl / 1000;
    const molarity = molesSolute / volLitres;

    const massSolutionG = this.solutionVolumeMl * this.solutionDensity;
    const massSolventKg = Math.max(0.001, (massSolutionG - this.soluteMassG) / 1000);
    const molality = molesSolute / massSolventKg;
    const normality = molarity * solute.nFactor;

    const molesWater = (massSolutionG - this.soluteMassG) / 18.0;
    const moleFraction = molesSolute / (molesSolute + molesWater);

    const elM = document.getElementById('res-molarity');
    const elm = document.getElementById('res-molality');
    const elN = document.getElementById('res-normality');
    const elX = document.getElementById('res-mole-fraction');

    if (elM) elM.textContent = `${molarity.toFixed(3)} M`;
    if (elm) elm.textContent = `${molality.toFixed(3)} m`;
    if (elN) elN.textContent = `${normality.toFixed(3)} N`;
    if (elX) elX.textContent = `${moleFraction.toFixed(4)}`;

    this.solutionIons = [];
    const ionCount = Math.min(50, Math.round(molarity * 12) + 6);
    for (let i = 0; i < ionCount; i++) {
      this.solutionIons.push({
        x: Math.random() * 160 + 60,
        y: Math.random() * 100 + 100,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        label: solute.ions[i % solute.ions.length]
      });
    }
  }

  // ==========================================
  // SIMULATOR 3: Significant Figures Analyzer
  // ==========================================
  initSigFigsAnalyzer() {
    const input = document.getElementById('sigfigs-input');
    const resultCount = document.getElementById('sigfigs-count');
    const breakdownEl = document.getElementById('sigfigs-breakdown');

    const evaluate = () => {
      const val = (input?.value || '').trim();
      if (!val) {
        if (resultCount) resultCount.textContent = '0';
        if (breakdownEl) breakdownEl.innerHTML = 'Type a measurement above to analyze';
        return;
      }

      const analysis = this.analyzeSignificantFigures(val);
      if (resultCount) resultCount.textContent = analysis.count;
      if (breakdownEl) breakdownEl.innerHTML = analysis.htmlBreakdown;
    };

    input?.addEventListener('input', evaluate);
    evaluate();
  }

  analyzeSignificantFigures(str) {
    const baseStr = str.split(/[xX*eE]/)[0].trim().replace(/[^0-9.]/g, '');
    if (!baseStr) return { count: 0, htmlBreakdown: 'Invalid numeric string' };

    let count = 0;
    let htmlParts = [];
    const hasDecimal = baseStr.includes('.');

    let firstNonZero = -1;
    let lastNonZero = -1;

    for (let i = 0; i < baseStr.length; i++) {
      if (baseStr[i] >= '1' && baseStr[i] <= '9') {
        if (firstNonZero === -1) firstNonZero = i;
        lastNonZero = i;
      }
    }

    if (firstNonZero === -1) {
      return {
        count: hasDecimal ? baseStr.replace('.', '').length : 1,
        htmlBreakdown: `<span style="color: #94a3b8">Zeros only. Significant figures: ${hasDecimal ? baseStr.replace('.', '').length : 1}</span>`
      };
    }

    for (let i = 0; i < baseStr.length; i++) {
      const char = baseStr[i];
      if (char === '.') {
        htmlParts.push(`<span style="color: #64748b; font-weight: 800;">.</span>`);
        continue;
      }

      if (char >= '1' && char <= '9') {
        count++;
        htmlParts.push(`<span style="color: #00f2fe; font-weight: 800; border-bottom: 2px solid #00f2fe;">${char}</span>`);
      } else if (char === '0') {
        if (i < firstNonZero) {
          htmlParts.push(`<span style="color: #f43f5e; opacity: 0.6; text-decoration: line-through;">${char}</span>`);
        } else if (i > firstNonZero && i < lastNonZero) {
          count++;
          htmlParts.push(`<span style="color: #10b981; font-weight: 800; border-bottom: 2px solid #10b981;">${char}</span>`);
        } else if (i > lastNonZero) {
          if (hasDecimal) {
            count++;
            htmlParts.push(`<span style="color: #fbbf24; font-weight: 800; border-bottom: 2px solid #fbbf24;">${char}</span>`);
          } else {
            htmlParts.push(`<span style="color: #94a3b8; opacity: 0.6;">${char}</span>`);
          }
        }
      }
    }

    const rules = [
      `<div><span style="color: #00f2fe">● Cyan:</span> Non-zero digits are always significant.</div>`,
      `<div><span style="color: #10b981">● Emerald:</span> Captive zeros between non-zeros are significant.</div>`,
      `<div><span style="color: #f43f5e">● Red:</span> Leading zeros before first non-zero are NOT significant.</div>`,
      `<div><span style="color: #fbbf24">● Gold:</span> Trailing zeros after decimal point ARE significant.</div>`
    ];

    return {
      count,
      htmlBreakdown: `
        <div style="font-family: var(--font-mono); font-size: 1.5rem; letter-spacing: 0.15em; margin-bottom: 0.75rem;">
          ${htmlParts.join('')}
        </div>
        <div style="font-size: 0.78rem; display: flex; flex-direction: column; gap: 0.25rem;">
          ${rules.join('')}
        </div>
      `
    };
  }

  // ==========================================
  // SIMULATOR 4: Physics Projectile Motion
  // ==========================================
  initProjectileMotion() {
    const angleSlider = document.getElementById('proj-angle-slider');
    const speedSlider = document.getElementById('proj-speed-slider');
    const btnLaunch = document.getElementById('btn-proj-launch');

    angleSlider?.addEventListener('input', (e) => {
      this.projAngleDeg = parseFloat(e.target.value);
      const el = document.getElementById('proj-angle-val');
      if (el) el.textContent = `${this.projAngleDeg}°`;
      this.calculateProjectile();
    });

    speedSlider?.addEventListener('input', (e) => {
      this.projSpeed = parseFloat(e.target.value);
      const el = document.getElementById('proj-speed-val');
      if (el) el.textContent = `${this.projSpeed} m/s`;
      this.calculateProjectile();
    });

    btnLaunch?.addEventListener('click', () => {
      this.launchProjectile();
    });

    this.calculateProjectile();
  }

  calculateProjectile() {
    const rad = (this.projAngleDeg * Math.PI) / 180;
    const u = this.projSpeed;
    const g = this.projGravity;

    const timeOfFlight = (2 * u * Math.sin(rad)) / g;
    const maxHeight = (u * u * Math.sin(rad) * Math.sin(rad)) / (2 * g);
    const range = (u * u * Math.sin(2 * rad)) / g;

    const elTime = document.getElementById('res-proj-time');
    const elHeight = document.getElementById('res-proj-height');
    const elRange = document.getElementById('res-proj-range');

    if (elTime) elTime.textContent = `${timeOfFlight.toFixed(2)} s`;
    if (elHeight) elHeight.textContent = `${maxHeight.toFixed(1)} m`;
    if (elRange) elRange.textContent = `${range.toFixed(1)} m`;

    this.drawProjectileTrajectoryPreview(range, maxHeight);
  }

  drawProjectileTrajectoryPreview(range, maxHeight) {
    if (!this.projectileCtx || !this.projectileCanvas) return;
    const ctx = this.projectileCtx;
    const w = this.projectileCanvas.width;
    const h = this.projectileCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Ground line
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, h - 30);
    ctx.lineTo(w - 30, h - 30);
    ctx.stroke();

    // Scale factors
    const maxPlotX = Math.max(80, range * 1.15);
    const maxPlotY = Math.max(30, maxHeight * 1.4);
    const scaleX = (w - 70) / maxPlotX;
    const scaleY = (h - 70) / maxPlotY;

    // Draw Parabolic Curve
    const rad = (this.projAngleDeg * Math.PI) / 180;
    const u = this.projSpeed;
    const g = this.projGravity;
    const T = (2 * u * Math.sin(rad)) / g;

    ctx.beginPath();
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;

    for (let t = 0; t <= T; t += T / 60) {
      const x = u * Math.cos(rad) * t;
      const y = u * Math.sin(rad) * t - 0.5 * g * t * t;

      const px = 35 + x * scaleX;
      const py = (h - 30) - y * scaleY;

      if (t === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Apex Marker (Max Height)
    const apexX = 35 + (range / 2) * scaleX;
    const apexY = (h - 30) - maxHeight * scaleY;
    ctx.beginPath();
    ctx.arc(apexX, apexY, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();

    // Launch Cannon Marker
    ctx.beginPath();
    ctx.arc(35, h - 30, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.fill();
  }

  launchProjectile() {
    this.calculateProjectile();
  }

  // Animation Loop for Canvases
  startAnimationLoops() {
    const loop = () => {
      this.drawStoichCanvas();
      this.drawSolutionCanvas();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  drawStoichCanvas() {
    if (!this.stoichCtx || !this.stoichCanvas) return;
    const ctx = this.stoichCtx;
    const w = this.stoichCanvas.width;
    const h = this.stoichCanvas.height;

    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(4, 4, w - 8, h - 8);

    for (const p of this.stoichParticles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < p.radius + 6 || p.x > w - p.radius - 6) p.vx *= -1;
      if (p.y < p.radius + 6 || p.y > h - p.radius - 6) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  drawSolutionCanvas() {
    if (!this.solutionCtx || !this.solutionCanvas) return;
    const ctx = this.solutionCtx;
    const w = this.solutionCanvas.width;
    const h = this.solutionCanvas.height;

    ctx.clearRect(0, 0, w, h);

    const beakerX = 40;
    const beakerY = 20;
    const beakerW = w - 80;
    const beakerH = h - 35;

    const fillFraction = Math.max(0.1, Math.min(0.9, this.solutionVolumeMl / 1000));
    const liquidTopY = (beakerY + beakerH) - (beakerH * fillFraction);

    const solute = this.solutes[this.currentSoluteKey];
    const moles = this.soluteMassG / solute.m;
    const molarity = moles / (this.solutionVolumeMl / 1000);
    const alpha = Math.min(0.85, 0.2 + (molarity / 4.0) * 0.65);

    const grad = ctx.createLinearGradient(0, liquidTopY, 0, beakerY + beakerH);
    grad.addColorStop(0, `rgba(0, 242, 254, ${alpha})`);
    grad.addColorStop(1, `rgba(56, 189, 248, ${alpha * 0.9})`);

    ctx.fillStyle = grad;
    ctx.fillRect(beakerX + 6, liquidTopY, beakerW - 12, (beakerY + beakerH) - liquidTopY);

    ctx.beginPath();
    ctx.moveTo(beakerX + 6, liquidTopY);
    ctx.quadraticCurveTo(beakerX + beakerW / 2, liquidTopY + 8, beakerX + beakerW - 6, liquidTopY);
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    for (const ion of this.solutionIons) {
      ion.x += ion.vx;
      ion.y += ion.vy;

      if (ion.x < beakerX + 15 || ion.x > beakerX + beakerW - 15) ion.vx *= -1;
      if (ion.y < liquidTopY + 15 || ion.y > beakerY + beakerH - 10) ion.vy *= -1;

      ctx.fillStyle = '#ffffff';
      ctx.fillText(ion.label, ion.x, ion.y);
    }

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(beakerX - 8, beakerY);
    ctx.lineTo(beakerX, beakerY);
    ctx.lineTo(beakerX, beakerY + beakerH);
    ctx.lineTo(beakerX + beakerW, beakerY + beakerH);
    ctx.lineTo(beakerX + beakerW, beakerY);
    ctx.lineTo(beakerX + beakerW + 8, beakerY);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    for (let v = 200; v <= 800; v += 200) {
      const frac = v / 1000;
      const y = (beakerY + beakerH) - (beakerH * frac);
      ctx.beginPath();
      ctx.moveTo(beakerX, y);
      ctx.lineTo(beakerX + 18, y);
      ctx.stroke();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '9px Plus Jakarta Sans';
      ctx.textAlign = 'left';
      ctx.fillText(`${v}mL`, beakerX + 22, y + 3);
    }
  }
}
