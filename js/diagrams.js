// ==========================================================================
// Interactive Labelled Diagrams Hub - SVG Engine & Active Recall Quiz
// Physics, Chemistry & Biology Diagrams
// ==========================================================================

export class DiagramsManager {
  constructor(viewportId, infoCardId, quizPromptId) {
    this.viewport = document.getElementById(viewportId);
    this.infoCard = document.getElementById(infoCardId);
    this.quizPrompt = document.getElementById(quizPromptId);

    this.currentDiagramId = 'mole-roadmap';
    this.currentMode = 'explore';
    this.activeHotspot = null;

    this.quizQueue = [];
    this.currentQuizTarget = null;
    this.quizScore = 0;
    this.quizTotal = 0;

    this.playAudioFeedback = null;
  }

  setAudioCallback(fn) {
    this.playAudioFeedback = fn;
  }

  loadDiagram(diagramId) {
    this.currentDiagramId = diagramId;
    this.render();
    if (this.currentMode === 'quiz') {
      this.startActiveRecallQuiz();
    }
  }

  setMode(mode) {
    this.currentMode = mode;
    this.render();
    if (mode === 'quiz') {
      this.startActiveRecallQuiz();
    } else {
      if (this.quizPrompt) this.quizPrompt.style.display = 'none';
      if (this.infoCard) this.infoCard.style.display = 'none';
    }
  }

  render() {
    if (!this.viewport) return;

    let svgHtml = '';
    switch (this.currentDiagramId) {
      case 'mole-roadmap':
        svgHtml = this.getMoleRoadmapSvg();
        break;
      case 'heart-anatomy':
        svgHtml = this.getHeartAnatomySvg();
        break;
      case 'nephron-system':
        svgHtml = this.getNephronSystemSvg();
        break;
      case 'optics-lens':
        svgHtml = this.getOpticsLensSvg();
        break;
      default:
        svgHtml = this.getMoleRoadmapSvg();
    }

    this.viewport.innerHTML = svgHtml;
    this.attachPinListeners();
  }

  // ==========================================
  // CHEMISTRY: Master Mole Concept Roadmap
  // ==========================================
  getMoleRoadmapSvg() {
    return `
      <svg viewBox="0 0 900 550" class="diagram-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        <g stroke="rgba(255,255,255,0.18)" stroke-width="3" stroke-dasharray="6,6">
          <line x1="220" y1="275" x2="400" y2="275" />
          <line x1="500" y1="275" x2="680" y2="275" />
          <line x1="450" y1="225" x2="450" y2="110" />
          <line x1="450" y1="325" x2="450" y2="440" />
        </g>

        <!-- Node: Mass in Grams -->
        <g class="diagram-node" transform="translate(100, 225)">
          <rect width="130" height="100" rx="16" fill="#131e38" stroke="#38bdf8" stroke-width="2" filter="url(#glowFilter)"/>
          <text x="65" y="42" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="600">GIVEN QUANTITY</text>
          <text x="65" y="70" text-anchor="middle" fill="#38bdf8" font-size="20" font-weight="800">Mass (w)</text>
          <text x="65" y="88" text-anchor="middle" fill="#cbd5e1" font-size="11">in Grams (g)</text>
        </g>

        <!-- Node: Central Moles HUB -->
        <g class="diagram-node" transform="translate(390, 215)">
          <circle cx="60" cy="60" r="68" fill="#1e1338" stroke="#c084fc" stroke-width="3" filter="url(#glowFilter)"/>
          <text x="60" y="48" text-anchor="middle" fill="#d8b4fe" font-size="13" font-weight="700">CENTRAL HUB</text>
          <text x="60" y="78" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="800">MOLES</text>
          <text x="60" y="98" text-anchor="middle" fill="#c084fc" font-size="14" font-weight="600">(n)</text>
        </g>

        <!-- Node: Number of Particles -->
        <g class="diagram-node" transform="translate(670, 225)">
          <rect width="140" height="100" rx="16" fill="#132e25" stroke="#34d399" stroke-width="2" filter="url(#glowFilter)"/>
          <text x="70" y="42" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="600">ENTITIES</text>
          <text x="70" y="70" text-anchor="middle" fill="#34d399" font-size="18" font-weight="800">Particles (N)</text>
          <text x="70" y="88" text-anchor="middle" fill="#cbd5e1" font-size="11">Atoms / Molecules</text>
        </g>

        <!-- Node: Gas Volume at STP -->
        <g class="diagram-node" transform="translate(380, 20)">
          <rect width="140" height="90" rx="16" fill="#2d2211" stroke="#fbbf24" stroke-width="2" filter="url(#glowFilter)"/>
          <text x="70" y="36" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="600">IDEAL GAS</text>
          <text x="70" y="62" text-anchor="middle" fill="#fbbf24" font-size="18" font-weight="800">Volume at STP</text>
          <text x="70" y="80" text-anchor="middle" fill="#cbd5e1" font-size="11">in Litres (L)</text>
        </g>

        <!-- Node: Solution Concentration -->
        <g class="diagram-node" transform="translate(370, 430)">
          <rect width="160" height="95" rx="16" fill="#1b1c36" stroke="#818cf8" stroke-width="2" filter="url(#glowFilter)"/>
          <text x="80" y="35" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="600">AQUEOUS SOLUTION</text>
          <text x="80" y="62" text-anchor="middle" fill="#818cf8" font-size="17" font-weight="800">Molarity (M)</text>
          <text x="80" y="82" text-anchor="middle" fill="#cbd5e1" font-size="11">mol / L of Solution</text>
        </g>

        <!-- Pin 1: Mass to Moles -->
        <g class="diagram-pin" data-id="mass-moles" data-title="Molar Mass Conversion" 
           data-desc="To convert Mass (g) → Moles (n): Divide by Molar Mass (M). Formula: n = w / M. To convert Moles → Mass: Multiply by Molar Mass (w = n × M)."
           data-ncert="NCERT Chemistry Class 11, Chapter 1, Section 1.10.1"
           transform="translate(305, 275)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#00f2fe" opacity="0.3"/>
          <circle cx="0" cy="0" r="12" fill="#00f2fe"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="11" font-weight="900">÷M</text>
        </g>

        <!-- Pin 2: Moles to Particles -->
        <g class="diagram-pin" data-id="moles-particles" data-title="Avogadro's Number Multiplier" 
           data-desc="To convert Moles (n) → Particles (N): Multiply by Avogadro's Number (N_A = 6.022 × 10²³ mol⁻¹). Formula: N = n × N_A. Every 1 mole contains exactly 6.022 × 10²³ particles."
           data-ncert="NCERT Chemistry Class 11, Chapter 1, Section 1.10"
           transform="translate(590, 275)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#10b981" opacity="0.3"/>
          <circle cx="0" cy="0" r="12" fill="#10b981"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="10" font-weight="900">×NA</text>
        </g>

        <!-- Pin 3: Moles to STP Volume -->
        <g class="diagram-pin" data-id="moles-stp" data-title="Molar Volume at STP (22.4 L)" 
           data-desc="At Standard Temperature & Pressure (0°C, 1 atm), 1 mole of any ideal gas occupies 22.4 L (or 22.7 L at 1 bar STP). To convert Moles → Volume: Multiply by 22.4 L. Formula: V = n × 22.4 L."
           data-ncert="NCERT Chemistry Class 11, Chapter 1, Section 1.10.2"
           transform="translate(450, 160)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#f59e0b" opacity="0.3"/>
          <circle cx="0" cy="0" r="12" fill="#f59e0b"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="9" font-weight="900">22.4</text>
        </g>

        <!-- Pin 4: Moles to Molarity -->
        <g class="diagram-pin" data-id="moles-molarity" data-title="Molarity Formula & Dilution" 
           data-desc="Molarity (M) = Moles of Solute / Volume of Solution in Litres. M = (w_B × 1000) / (M_B × V_mL). Dilution formula: M₁V₁ = M₂V₂."
           data-ncert="NCERT Chemistry Class 11, Chapter 1, Section 1.10.3"
           transform="translate(450, 375)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#a855f7" opacity="0.3"/>
          <circle cx="0" cy="0" r="12" fill="#a855f7"/>
          <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="900">÷V</text>
        </g>
      </svg>
    `;
  }

  // ==========================================
  // BIOLOGY: Human Heart & Double Circulation
  // ==========================================
  getHeartAnatomySvg() {
    return `
      <svg viewBox="0 0 900 550" class="diagram-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="heartGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        <path d="M 450,490 C 260,370 200,240 260,150 C 310,80 410,100 450,180 C 490,100 590,80 640,150 C 700,240 640,370 450,490 Z" 
              fill="#181324" stroke="#e11d48" stroke-width="4" filter="url(#heartGlow)"/>

        <path d="M 450,180 L 450,480" stroke="#334155" stroke-width="12" stroke-linecap="round"/>
        <path d="M 230,260 L 440,260" stroke="#334155" stroke-width="8"/>
        <path d="M 460,260 L 670,260" stroke="#334155" stroke-width="8"/>

        <text x="340" y="220" fill="#38bdf8" font-size="18" font-weight="700" text-anchor="middle">Right Atrium</text>
        <text x="340" y="370" fill="#38bdf8" font-size="20" font-weight="800" text-anchor="middle">Right Ventricle</text>
        <text x="560" y="220" fill="#f43f5e" font-size="18" font-weight="700" text-anchor="middle">Left Atrium</text>
        <text x="560" y="370" fill="#f43f5e" font-size="20" font-weight="800" text-anchor="middle">Left Ventricle</text>

        <!-- Aorta Arch Top -->
        <path d="M 490,180 C 490,90 560,40 630,70 C 680,90 680,150 680,200" fill="none" stroke="#f43f5e" stroke-width="26" stroke-linecap="round"/>
        <text x="630" y="45" fill="#fca5a5" font-size="14" font-weight="800">AORTA (Systemic)</text>

        <!-- Pulmonary Artery Trunk -->
        <path d="M 410,230 C 410,120 350,70 270,90" fill="none" stroke="#0284c7" stroke-width="22" stroke-linecap="round"/>
        <text x="210" y="65" fill="#7dd3fc" font-size="14" font-weight="800">PULMONARY ARTERY</text>

        <!-- Pin 1: SA Node -->
        <g class="diagram-pin" data-id="sa-node" data-title="Sinoatrial (SA) Node - Pacemaker"
           data-desc="Located in the upper right corner of the Right Atrium. Generates auto-rhythmic electrical action potentials (70-75/min) that initiate cardiac contraction. Hence known as the natural pacemaker of the heart."
           data-ncert="NCERT Biology Class 11, Chapter 18 (Body Fluids & Circulation)"
           transform="translate(290, 180)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#f59e0b" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#f59e0b"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="10" font-weight="900">SA</text>
        </g>

        <!-- Pin 2: Tricuspid Valve -->
        <g class="diagram-pin" data-id="tricuspid-valve" data-title="Tricuspid Valve"
           data-desc="Guards the opening between the Right Atrium and Right Ventricle. Consists of three muscular cusps or flaps attached to chordae tendineae and papillary muscles to prevent backflow."
           data-ncert="NCERT Biology Class 11, Chapter 18 (Page 283)"
           transform="translate(340, 260)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#38bdf8" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#38bdf8"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="11" font-weight="900">TV</text>
        </g>

        <!-- Pin 3: Bicuspid (Mitral) Valve -->
        <g class="diagram-pin" data-id="bicuspid-valve" data-title="Bicuspid (Mitral) Valve"
           data-desc="Guards the opening between the Left Atrium and Left Ventricle. Consists of two cusps. Subjected to high pressures during left ventricular systole."
           data-ncert="NCERT Biology Class 11, Chapter 18 (Page 283)"
           transform="translate(560, 260)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#f43f5e" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#f43f5e"/>
          <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="900">MV</text>
        </g>

        <!-- Pin 4: Interventricular Septum -->
        <g class="diagram-pin" data-id="septum" data-title="Interventricular Septum"
           data-desc="Thick, robust muscular partition separating oxygenated blood in the Left Ventricle from deoxygenated blood in the Right Ventricle, essential for complete double circulation in birds and mammals."
           data-ncert="NCERT Biology Class 11, Chapter 18 (Page 284)"
           transform="translate(450, 360)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#a855f7" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#a855f7"/>
          <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="900">IVS</text>
        </g>
      </svg>
    `;
  }

  // ==========================================
  // BIOLOGY: The Nephron & Counter-Current
  // ==========================================
  getNephronSystemSvg() {
    return `
      <svg viewBox="0 0 900 550" class="diagram-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="900" height="240" fill="#11192e" opacity="0.6"/>
        <rect x="0" y="240" width="900" height="310" fill="#090d18" opacity="0.8"/>
        <line x1="0" y1="240" x2="900" y2="240" stroke="#334155" stroke-dasharray="8,8" stroke-width="2"/>
        <text x="30" y="230" fill="#64748b" font-size="13" font-weight="700">RENAL CORTEX (300 mOsm/L)</text>
        <text x="30" y="270" fill="#64748b" font-size="13" font-weight="700">RENAL MEDULLA (Up to 1200 mOsm/L)</text>

        <!-- Bowman's Capsule & Glomerulus -->
        <path d="M 200,90 C 160,90 140,140 180,170 C 220,190 250,140 210,100" fill="none" stroke="#fbbf24" stroke-width="12" stroke-linecap="round"/>
        <circle cx="185" cy="135" r="26" fill="#dc2626" opacity="0.8"/>

        <!-- PCT -->
        <path d="M 210,170 Q 250,210 290,160 T 360,180" fill="none" stroke="#fbbf24" stroke-width="10"/>

        <!-- Loop of Henle -->
        <path d="M 360,180 L 360,450 C 360,490 440,490 440,450 L 440,160" fill="none" stroke="#fbbf24" stroke-width="9"/>

        <!-- DCT -->
        <path d="M 440,160 Q 480,120 540,150 T 620,130" fill="none" stroke="#fbbf24" stroke-width="10"/>

        <!-- Collecting Duct -->
        <path d="M 620,130 L 670,130 L 670,510" fill="none" stroke="#34d399" stroke-width="16" stroke-linecap="round"/>
        <text x="690" y="320" fill="#34d399" font-size="14" font-weight="800">Collecting Duct</text>

        <!-- Pin 1: Glomerulus -->
        <g class="diagram-pin" data-id="glomerulus" data-title="Glomerulus & Bowman's Capsule"
           data-desc="Site of Ultrafiltration. Glomerular Filtration Rate (GFR) is normally 125 mL/min (180 L/day). Filtration occurs through 3 layers: capillary endothelium, basement membrane, and podocyte slit pores."
           data-ncert="NCERT Biology Class 11, Chapter 19 (Excretory Products & Elimination)"
           transform="translate(185, 135)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#ef4444" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#ef4444"/>
          <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="900">GFR</text>
        </g>

        <!-- Pin 2: PCT -->
        <g class="diagram-pin" data-id="pct" data-title="Proximal Convoluted Tubule (PCT)"
           data-desc="Lined by simple cuboidal brush border epithelium with extensive microvilli. Reabsorbs 70-80% of electrolytes and water, and nearly 100% of essential nutrients (glucose, amino acids)."
           data-ncert="NCERT Biology Class 11, Chapter 19 (Page 294)"
           transform="translate(290, 160)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#f59e0b" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#f59e0b"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="10" font-weight="900">PCT</text>
        </g>

        <!-- Pin 3: Descending Limb -->
        <g class="diagram-pin" data-id="descending-limb" data-title="Descending Limb of Loop of Henle"
           data-desc="Highly PERMEABLE to water, but almost IMPERMEABLE to electrolytes. As filtrate moves down into hyperosmolar medullary interstitium, water moves out by osmosis, concentrating filtrate up to 1200 mOsm/L."
           data-ncert="NCERT Biology Class 11, Chapter 19 (Page 294)"
           transform="translate(360, 340)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#38bdf8" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#38bdf8"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="9" font-weight="900">H2O</text>
        </g>

        <!-- Pin 4: Ascending Limb -->
        <g class="diagram-pin" data-id="ascending-limb" data-title="Ascending Limb of Loop of Henle"
           data-desc="IMPERMEABLE to water, but allows ACTIVE / passive transport of NaCl into the medullary interstitium. As concentrated filtrate ascends, it becomes progressively dilute (hypotonic to plasma)."
           data-ncert="NCERT Biology Class 11, Chapter 19 (Page 295)"
           transform="translate(440, 340)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#10b981" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#10b981"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="9" font-weight="900">NaCl</text>
        </g>
      </svg>
    `;
  }

  // ==========================================
  // PHYSICS: Ray Optics & Lens Image Formation
  // ==========================================
  getOpticsLensSvg() {
    return `
      <svg viewBox="0 0 900 550" class="diagram-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Principal Axis Line -->
        <line x1="50" y1="275" x2="850" y2="275" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="70" y="260" fill="#94a3b8" font-size="12" font-weight="600">Principal Axis</text>

        <!-- Convex Lens Body -->
        <path d="M 450,75 C 490,175 490,375 450,475 C 410,375 410,175 450,75 Z" 
              fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="3"/>
        <line x1="450" y1="75" x2="450" y2="475" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3"/>

        <!-- Cardinal Points (F1, 2F1, Optical Center O, F2, 2F2) -->
        <circle cx="450" cy="275" r="5" fill="#ffffff"/>
        <text x="450" y="298" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">O</text>

        <circle cx="310" cy="275" r="4" fill="#fbbf24"/>
        <text x="310" y="298" fill="#fbbf24" font-size="13" font-weight="700" text-anchor="middle">F₁</text>

        <circle cx="170" cy="275" r="4" fill="#fbbf24"/>
        <text x="170" y="298" fill="#fbbf24" font-size="13" font-weight="700" text-anchor="middle">2F₁</text>

        <circle cx="590" cy="275" r="4" fill="#fbbf24"/>
        <text x="590" y="298" fill="#fbbf24" font-size="13" font-weight="700" text-anchor="middle">F₂</text>

        <circle cx="730" cy="275" r="4" fill="#fbbf24"/>
        <text x="730" y="298" fill="#fbbf24" font-size="13" font-weight="700" text-anchor="middle">2F₂</text>

        <!-- Upright Object at 2F1 (Height h = 100) -->
        <line x1="170" y1="275" x2="170" y2="175" stroke="#00f2fe" stroke-width="4"/>
        <polygon points="170,165 163,178 177,178" fill="#00f2fe"/>
        <text x="140" y="225" fill="#00f2fe" font-size="13" font-weight="800">Object</text>

        <!-- Ray 1: Parallel to Principal Axis -> Refracts through F2 -->
        <polyline points="170,175 450,175 730,375" fill="none" stroke="#ef4444" stroke-width="2.5"/>

        <!-- Ray 2: Passing through Optical Center O (Undeviated) -->
        <line x1="170" y1="175" x2="730" y2="375" stroke="#10b981" stroke-width="2.5"/>

        <!-- Inverted Real Image at 2F2 -->
        <line x1="730" y1="275" x2="730" y2="375" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="730,385 723,372 737,372" fill="#f59e0b"/>
        <text x="750" y="335" fill="#f59e0b" font-size="13" font-weight="800">Real Image</text>

        <!-- Hotspot Pins -->
        <!-- Pin 1: Convex Lens Power -->
        <g class="diagram-pin" data-id="lens-power" data-title="Convex Lens & Optical Power"
           data-desc="Converging lens. Power P = 1 / f(in meters). Unit is Dioptre (D). For convex lens, f > 0 so P > 0. For concave lens, f < 0 so P < 0. Combination of thin lenses in contact: P = P₁ + P₂."
           data-ncert="NCERT Physics Class 12, Chapter 9 (Ray Optics & Optical Instruments)"
           transform="translate(450, 110)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#38bdf8" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#38bdf8"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="10" font-weight="900">+P</text>
        </g>

        <!-- Pin 2: Lens Formula -->
        <g class="diagram-pin" data-id="lens-formula" data-title="Thin Lens Formula"
           data-desc="Thin Lens Equation: (1/f) = (1/v) - (1/u). Linear magnification m = v / u = (height of image / height of object). For real inverted images, m is negative."
           data-ncert="NCERT Physics Class 12, Chapter 9 (Section 9.5)"
           transform="translate(450, 430)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#a855f7" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#a855f7"/>
          <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="900">1/f</text>
        </g>

        <!-- Pin 3: Object at 2F1 -->
        <g class="diagram-pin" data-id="object-2f" data-title="Object at 2F₁ (Equal Size Image)"
           data-desc="When object is placed at 2F₁, real, inverted image of EXACT SAME SIZE is formed at 2F₂ on the opposite side of the lens. Magnification m = -1."
           data-ncert="NCERT Physics Class 12, Chapter 9 (Ray diagrams)"
           transform="translate(170, 175)">
          <circle cx="0" cy="0" r="16" class="pulse" fill="#00f2fe" opacity="0.4"/>
          <circle cx="0" cy="0" r="12" fill="#00f2fe"/>
          <text x="0" y="4" text-anchor="middle" fill="#070b14" font-size="10" font-weight="900">2F</text>
        </g>
      </svg>
    `;
  }

  attachPinListeners() {
    const pins = this.viewport.querySelectorAll('.diagram-pin');
    pins.forEach((pin) => {
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handlePinClick(pin);
      });
    });
  }

  handlePinClick(pin) {
    const dataId = pin.getAttribute('data-id');
    const title = pin.getAttribute('data-title');
    const desc = pin.getAttribute('data-desc');
    const ncert = pin.getAttribute('data-ncert');

    if (this.currentMode === 'explore') {
      if (this.playAudioFeedback) this.playAudioFeedback('pop');
      this.showInfoCard(title, desc, ncert);
    } else if (this.currentMode === 'quiz') {
      this.evaluateQuizAnswer(dataId, pin);
    }
  }

  showInfoCard(title, desc, ncert) {
    if (!this.infoCard) return;
    this.infoCard.innerHTML = `
      <h4>${title}</h4>
      <p>${desc}</p>
      ${ncert ? `<div class="ncert-tag">📌 ${ncert}</div>` : ''}
    `;
    this.infoCard.style.display = 'block';
  }

  startActiveRecallQuiz() {
    const pins = Array.from(this.viewport.querySelectorAll('.diagram-pin'));
    this.quizQueue = pins.map(pin => ({
      id: pin.getAttribute('data-id'),
      title: pin.getAttribute('data-title'),
      pinElement: pin
    }));

    this.quizScore = 0;
    this.quizTotal = this.quizQueue.length;
    this.shuffle(this.quizQueue);
    this.nextQuizQuestion();
  }

  nextQuizQuestion() {
    if (this.quizQueue.length === 0) {
      if (this.quizPrompt) {
        this.quizPrompt.innerHTML = `
          <span>🎉 Active Recall Complete</span>
          <h3>Score: ${this.quizScore} / ${this.quizTotal}</h3>
          <button class="btn-primary" style="margin-top: 0.5rem; font-size: 0.75rem; padding: 0.35rem 0.75rem;" id="btn-restart-diagram-quiz">Restart Active Recall</button>
        `;
        document.getElementById('btn-restart-diagram-quiz')?.addEventListener('click', () => {
          this.startActiveRecallQuiz();
        });
      }
      return;
    }

    this.currentQuizTarget = this.quizQueue.pop();
    if (this.quizPrompt) {
      this.quizPrompt.style.display = 'block';
      this.quizPrompt.innerHTML = `
        <span>Target Landmark (${this.quizTotal - this.quizQueue.length} / ${this.quizTotal})</span>
        <h3>Click on: "${this.currentQuizTarget.title}"</h3>
      `;
    }
  }

  evaluateQuizAnswer(clickedId, pinElement) {
    if (!this.currentQuizTarget) return;

    if (clickedId === this.currentQuizTarget.id) {
      this.quizScore++;
      if (this.playAudioFeedback) this.playAudioFeedback('correct');
      pinElement.style.filter = 'drop-shadow(0 0 15px #10b981)';
      setTimeout(() => {
        pinElement.style.filter = '';
        this.nextQuizQuestion();
      }, 700);
    } else {
      if (this.playAudioFeedback) this.playAudioFeedback('wrong');
      pinElement.style.filter = 'drop-shadow(0 0 15px #f43f5e)';
      setTimeout(() => {
        pinElement.style.filter = '';
        this.nextQuizQuestion();
      }, 700);
    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
