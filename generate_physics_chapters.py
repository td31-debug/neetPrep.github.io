# -*- coding: utf-8 -*-
"""
Generate complete, rich HTML for the 4 Physics Chapters:
1. Current Electricity (phy-currelec)
2. Moving Charges and Magnetism (phy-magcharge)
3. Magnetism and Matter (phy-magmatter)
4. Electromagnetic Induction (phy-emi)
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

phy_navs = '''
      <!-- Physics: Current Electricity Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-phy-currelec" style="display: none;" aria-label="Current Electricity Topic Index">
        <a href="#sec-phy-ce-current" class="study-index-link active">1. Current & Drift</a>
        <a href="#sec-phy-ce-mobility" class="study-index-link">3. Mobility</a>
        <a href="#sec-phy-ce-resistance" class="study-index-link">4. Resistance & Ohm's Law</a>
        <a href="#sec-phy-ce-resistivity" class="study-index-link">5. Resistivity & Conductivity</a>
        <a href="#sec-phy-ce-temp" class="study-index-link">8. Temp Dependence</a>
        <a href="#sec-phy-ce-combinations" class="study-index-link">9. Series & Parallel R</a>
        <a href="#sec-phy-ce-cells" class="study-index-link">10. Cells, EMF & r</a>
        <a href="#sec-phy-ce-kirchhoff" class="study-index-link">14. Kirchhoff's Rules</a>
        <a href="#sec-phy-ce-bridges" class="study-index-link">16. Wheatstone & Meter Bridge</a>
        <a href="#sec-phy-ce-power" class="study-index-link">18. Energy, Power & Heating</a>
        <a href="#sec-phy-ce-instruments" class="study-index-link">21. Ammeter & Voltmeter</a>
        <a href="#sec-phy-ce-why" class="study-index-link">25. "Why" Questions & Must Do</a>
      </div>

      <!-- Physics: Moving Charges Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-phy-magcharge" style="display: none;" aria-label="Moving Charges Topic Index">
        <a href="#sec-phy-mc-intro" class="study-index-link active">1. B-Field & Lorentz Force</a>
        <a href="#sec-phy-mc-motion" class="study-index-link">3. Circular & Helical Motion</a>
        <a href="#sec-phy-mc-cyclotron" class="study-index-link">4. Cyclotron</a>
        <a href="#sec-phy-mc-force" class="study-index-link">5. Conductor Force & Parallel Wires</a>
        <a href="#sec-phy-mc-torque" class="study-index-link">8. Torque & Magnetic Moment</a>
        <a href="#sec-phy-mc-galv" class="study-index-link">10. Moving Coil Galvanometer</a>
        <a href="#sec-phy-mc-biotsavart" class="study-index-link">15. Biot–Savart Law & Wires</a>
        <a href="#sec-phy-mc-ampere" class="study-index-link">19. Ampere's Law & Solenoid</a>
        <a href="#sec-phy-mc-why" class="study-index-link">26. "Why" Questions & Must Do</a>
      </div>

      <!-- Physics: Magnetism and Matter Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-phy-magmatter" style="display: none;" aria-label="Magnetism and Matter Topic Index">
        <a href="#sec-phy-mm-barmagnet" class="study-index-link active">1. Bar Magnet & Axial/Eq Field</a>
        <a href="#sec-phy-mm-torque" class="study-index-link">7. Torque & Potential Energy</a>
        <a href="#sec-phy-mm-earth" class="study-index-link">9. Earth's Magnetism & Dip</a>
        <a href="#sec-phy-mm-materials" class="study-index-link">13. Dia, Para & Ferromagnetism</a>
        <a href="#sec-phy-mm-hysteresis" class="study-index-link">21. Hysteresis & Magnets</a>
        <a href="#sec-phy-mm-why" class="study-index-link">31. "Why" Questions & Must Do</a>
      </div>

      <!-- Physics: Electromagnetic Induction Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-phy-emi" style="display: none;" aria-label="EMI Topic Index">
        <a href="#sec-phy-emi-flux" class="study-index-link active">1. Flux & Faraday's Laws</a>
        <a href="#sec-phy-emi-lenz" class="study-index-link">4. Lenz's Law & Energy</a>
        <a href="#sec-phy-emi-motional" class="study-index-link">5. Motional EMF & Current</a>
        <a href="#sec-phy-emi-eddy" class="study-index-link">9. Eddy Currents</a>
        <a href="#sec-phy-emi-inductance" class="study-index-link">10. Self & Mutual Induction</a>
        <a href="#sec-phy-emi-generator" class="study-index-link">17. AC Generator</a>
        <a href="#sec-phy-emi-why" class="study-index-link">23. "Why" Questions & Must Do</a>
      </div>
'''

def get_current_electricity_html():
    return '''
<div id="chapter-phy-currelec-container" style="display: none;">
  <!-- TOPIC 1 & 2: Electric Current & Drift Velocity -->
  <article class="study-topic-block" id="sec-phy-ce-current" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">1-2</span> Electric Current & Drift Velocity in Conductors</h3>
      <span class="subject-pill phy">Class 12 Physics &bull; Ch. 3</span>
    </div>

    <p class="study-body-text">
      <strong>Electric Current:</strong> Defined as the rate of flow of electric charge across any cross-section of a conductor.
      <br>&bull; Average Current: <code>I = Q / t</code>
      <br>&bull; Instantaneous Current: <code>I = dQ / dt</code>
      <br>&bull; <strong>SI Unit:</strong> Ampere (A), where <code>1 A = 1 C/s</code>. Conventional current direction is taken along the direction of positive charge flow, which is <strong>opposite to the direction of electron flow</strong>.
    </p>

    <h4 style="color: var(--phy-primary); margin: 1rem 0 0.4rem; font-size: 0.95rem;">Microscopic Model & Drift Velocity:</h4>
    <p class="study-body-text">
      In a metallic conductor, free electrons undergo constant random thermal collisions with positive metal ions at speeds of ~10⁵–10⁶ m/s, resulting in zero net macroscopic flow. In the presence of an applied electric field <code>E</code>, electrons experience an electrostatic force <code>F = -eE</code> and acquire a steady average drift velocity:
    </p>
    <div class="chemical-equation-box" style="font-size: 1rem; color: #fff;">
      vd = (e · E · τ) / m
    </div>
    <p class="study-body-text" style="font-size: 0.85rem; color: var(--text-secondary);">
      where <strong>e</strong> = electronic charge (1.6×10⁻¹⁹ C), <strong>E</strong> = electric field, <strong>τ</strong> = mean relaxation time (average time between two successive collisions), and <strong>m</strong> = electron mass (9.1×10⁻³¹ kg).
    </p>

    <h4 style="color: var(--phy-primary); margin: 1rem 0 0.4rem; font-size: 0.95rem;">Relation Between Current and Drift Velocity:</h4>
    <div class="chemical-equation-box" style="font-size: 1.05rem; color: var(--phy-primary);">
      I = n · e · A · vd
    </div>
    <p class="study-body-text">
      where <strong>n</strong> is the free electron number density (carriers/m³), <strong>A</strong> is the conductor cross-sectional area, and <strong>Current Density</strong> <code>j = I / A = n · e · vd</code> (a vector quantity pointing along E).
    </p>

    <div class="neet-trap-alert" style="border-left: 3px solid var(--phy-primary);">
      <span style="font-size: 1.25rem;">⚡</span>
      <div>
        <strong>Why is drift velocity very small (~10⁻⁴ m/s) yet a bulb lights up instantly?</strong>
        Electrons suffer frequent collisions with lattice ions (τ ≈ 10⁻¹⁴ s), preventing unbounded acceleration. However, the electric field propagates through the wire at nearly the speed of light (~3×10⁸ m/s), initiating coordinated electron drift everywhere in the circuit almost instantaneously!
      </div>
    </div>

    <div class="study-checkpoint-card" data-explanation="Current I = n*e*A*vd. If diameter is halved, area A is reduced to 1/4. For constant current I, drift velocity vd must increase by 4 times!">
      <div class="study-checkpoint-header">
        <span>Checkpoint Recall 3.1</span>
        <span style="color: var(--accent-emerald);">CBSE Board Numerical</span>
      </div>
      <p>A steady current flows through a metallic wire of non-uniform cross-section. If the wire diameter is halved at a constriction, how does the drift velocity change?</p>
      <div class="study-opt-grid">
        <button class="study-opt-btn" data-correct="false">A. Halved</button>
        <button class="study-opt-btn" data-correct="false">B. Doubled</button>
        <button class="study-opt-btn" data-correct="true">C. Four times</button>
        <button class="study-opt-btn" data-correct="false">D. Unchanged</button>
      </div>
      <div class="study-chk-feedback"></div>
    </div>
  </article>

  <!-- TOPIC 3: Mobility -->
  <article class="study-topic-block" id="sec-phy-ce-mobility" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">3</span> Mobility of Charge Carriers</h3>
      <span class="subject-pill phy">Carrier Dynamics</span>
    </div>
    <p class="study-body-text">
      Mobility (<strong>μ</strong>) is defined as the magnitude of drift velocity acquired per unit electric field:
    </p>
    <div class="chemical-equation-box">
      μ = vd / E = (e · τ) / m
    </div>
    <p class="study-body-text">
      &bull; <strong>SI Unit:</strong> <code>m² · V⁻¹ · s⁻¹</code> (or <code>m² / (V · s)</code>).
      <br>&bull; Mobility is always defined as a <strong>positive quantity</strong> regardless of charge carrier sign (for electrons, <code>μe = eτe / me</code>; for holes, <code>μh = eτh / mh</code>).
      <br>&bull; Since electron mass is much smaller than effective hole mass, <strong>electron mobility is significantly higher than hole mobility</strong> (μe &gt; μh).
    </p>
  </article>

  <!-- TOPIC 4 to 7: Resistance, Ohm's Law, Resistivity & Conductivity -->
  <article class="study-topic-block" id="sec-phy-ce-resistance" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">4-7</span> Ohm's Law, Resistance, Resistivity & Conductivity</h3>
      <span class="subject-pill phy">Constitutive Laws</span>
    </div>
    <p class="study-body-text">
      <strong>Ohm's Law:</strong> The potential difference <code>V</code> across the ends of a conductor is directly proportional to the current <code>I</code> flowing through it, provided physical conditions (temperature, pressure, mechanical strain) remain constant:
    </p>
    <div class="chemical-equation-box">
      V = I · R &nbsp;&nbsp;⇒&nbsp;&nbsp; Vector Form: j = σ · E
    </div>

    <h4 style="color: var(--phy-primary); margin: 0.8rem 0 0.3rem; font-size: 0.95rem;">Resistance of a Conductor:</h4>
    <div class="chemical-equation-box">
      R = ρ · (l / A) = (m / (n · e² · τ)) · (l / A)
    </div>
    <p class="study-body-text">
      where <strong>l</strong> is length, <strong>A</strong> is cross-sectional area, and <strong>ρ</strong> is the electrical resistivity of the material.
      <br>&bull; <strong>Resistivity (ρ):</strong> <code>ρ = (R · A) / l = m / (n · e² · τ)</code>. Material property; independent of dimensions; depends only on material nature and temperature. SI unit: <strong>Ω &bull; m</strong>.
      <br>&bull; <strong>Conductivity (σ):</strong> Reciprocal of resistivity: <code>σ = 1 / ρ = (n · e² · τ) / m</code>. SI unit: <strong>Siemens per metre (S &bull; m⁻¹ or Ω⁻¹ &bull; m⁻¹)</strong>.
    </p>

    <div class="concept-callout">
      <span class="callout-icon">💡</span>
      <div>
        <strong>Ohmic vs Non-Ohmic Conductors:</strong>
        <br>&bull; <strong>Ohmic Conductors:</strong> Obey Ohm's law with linear V-I characteristics passing through the origin (e.g., metals at constant temperature, dilute electrolytes).
        <br>&bull; <strong>Non-Ohmic Conductors:</strong> Do not obey Ohm's law; V-I relation is non-linear, non-unique, or asymmetric upon reversing V (e.g., p-n junction diode, LED, vacuum tube, thyristor, GaAs).
      </div>
    </div>
  </article>

  <!-- TOPIC 8: Temperature Dependence of Resistance -->
  <article class="study-topic-block" id="sec-phy-ce-temp" data-visual="phy-ce-temp">
    <div class="topic-header-row">
      <h3><span class="section-num">8</span> Temperature Dependence of Resistance</h3>
      <span class="subject-pill phy">Thermal Coefficients</span>
    </div>
    <p class="study-body-text">
      The resistance of a metallic conductor varies with temperature according to:
    </p>
    <div class="chemical-equation-box">
      R_T = R₀ [1 + α (T - T₀)] &nbsp;&nbsp;⇒&nbsp;&nbsp; ρ_T = ρ₀ [1 + α (T - T₀)]
    </div>
    <p class="study-body-text">
      where <strong>α</strong> is the temperature coefficient of resistance (SI unit: <strong>K⁻¹</strong> or <strong>°C⁻¹</strong>):
      <br>&bull; <strong>Metals:</strong> Positive α (<code>α &gt; 0</code>). As temperature increases, lattice ions vibrate more vigorously, reducing mean relaxation time τ (more collisions) ⟶ <strong>Resistance increases</strong>.
      <br>&bull; <strong>Semiconductors & Insulators:</strong> Negative α (<code>α &lt; 0</code>). Increasing temperature breaks covalent bonds, causing carrier density <code>n</code> to increase exponentially, dominating over collision effects ⟶ <strong>Resistance decreases</strong>.
      <br>&bull; <strong>Standard Alloys (Constantan, Manganin, Nichrome):</strong> Extremely small positive α and high resistivity; resistance changes negligibly with temperature, making them ideal for standard resistors, resistance boxes, and meter bridges!
    </p>
  </article>

  <!-- TOPIC 9: Combination of Resistors -->
  <article class="study-topic-block" id="sec-phy-ce-combinations" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">9</span> Combination of Resistors (Series & Parallel)</h3>
      <span class="subject-pill phy">Circuit Analysis</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin: 0.6rem 0;">
      <div class="model-meta-card" style="margin-bottom: 0;">
        <span style="color: var(--accent-cyan); font-weight: 700;">Resistors in Series</span>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          <code>R_eq = R₁ + R₂ + R₃ + ...</code><br>
          &bull; Same current through each resistor.<br>
          &bull; Potential divides: <code>V = V₁ + V₂ + ...</code><br>
          &bull; Equivalent resistance is greater than the largest individual resistance.
        </p>
      </div>
      <div class="model-meta-card" style="margin-bottom: 0;">
        <span style="color: var(--accent-emerald); font-weight: 700;">Resistors in Parallel</span>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          <code>1 / R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...</code><br>
          &bull; Same voltage across each resistor.<br>
          &bull; Current divides: <code>I = I₁ + I₂ + ...</code><br>
          &bull; Equivalent resistance is smaller than the smallest individual resistance.
        </p>
      </div>
    </div>
  </article>

  <!-- TOPIC 10 to 13: Cells, EMF, Internal Resistance & Combinations -->
  <article class="study-topic-block" id="sec-phy-ce-cells" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">10-13</span> Cells, EMF, Internal Resistance & Combinations</h3>
      <span class="subject-pill phy">Sources of EMF</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Electromotive Force (EMF, E):</strong> Maximum potential difference between cell terminals in an open circuit (no current drawn): <code>E = W / q</code> (Unit: Volt).
      <br>&bull; <strong>Internal Resistance (r):</strong> Opposition to current flow offered by the electrolyte and electrodes inside the cell.
      <br>&bull; <strong>Terminal Potential Difference (V):</strong> Potential difference across terminals when current <code>I</code> flows through external load <code>R</code>:
    </p>
    <div class="chemical-equation-box">
      V = E - I · r &nbsp;&nbsp;and&nbsp;&nbsp; I = E / (R + r)
    </div>
    <p class="study-body-text" style="font-size: 0.82rem; color: var(--accent-amber);">
      📌 <strong>When cell is charging:</strong> Current is pushed into the positive terminal, so <code>V = E + I · r</code> (Terminal voltage exceeds EMF!).
    </p>

    <h4 style="color: var(--phy-primary); margin: 0.8rem 0 0.3rem; font-size: 0.95rem;">Combinations of n Identical Cells:</h4>
    <p class="study-body-text">
      &bull; <strong>Cells in Series:</strong> <code>E_eq = n · E</code>, <code>r_eq = n · r</code> ⟶ <code>I = (n · E) / (R + n · r)</code>. Most advantageous when external resistance is very large (<code>R ≫ nr</code>).
      <br>&bull; <strong>Cells in Parallel:</strong> <code>E_eq = E</code>, <code>r_eq = r / n</code> ⟶ <code>I = E / (R + r/n)</code>. Most advantageous when external resistance is very small (<code>R ≪ r</code>).
      <br>&bull; <strong>Mixed Combination:</strong> m rows of n cells: Maximum current occurs when <code>R = (n · r) / m</code> (Internal resistance equals external load resistance).
    </p>
  </article>

  <!-- TOPIC 14 & 15: Kirchhoff's Rules & Circuit Solving -->
  <article class="study-topic-block" id="sec-phy-ce-kirchhoff" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">14-15</span> Kirchhoff's Circuit Rules & Sign Conventions</h3>
      <span class="subject-pill phy">Major Board Derivation</span>
    </div>
    <p class="study-body-text">
      <strong>1. Kirchhoff's First Rule (Junction Rule):</strong>
      <br>At any junction, the algebraic sum of currents entering the junction equals the sum leaving it:
    </p>
    <div class="chemical-equation-box">
      Σ I_in = Σ I_out &nbsp;&nbsp;(Conservation of Electric Charge)
    </div>
    <p class="study-body-text">
      <strong>2. Kirchhoff's Second Rule (Loop Rule):</strong>
      <br>The algebraic sum of changes in potential around any closed mesh/loop is zero:
    </p>
    <div class="chemical-equation-box">
      Σ ΔV = 0 &nbsp;&nbsp;(Conservation of Energy)
    </div>
    <div class="neet-trap-alert" style="border-left: 3px solid var(--phy-primary);">
      <span style="font-size: 1.25rem;">⚖️</span>
      <div>
        <strong>CBSE Loop Rule Sign Conventions:</strong>
        <br>&bull; Traversing a resistor in direction of current: <strong>- I · R</strong> (potential drop).
        <br>&bull; Traversing a resistor opposite to current: <strong>+ I · R</strong> (potential rise).
        <br>&bull; Traversing a cell from negative to positive terminal: <strong>+ E</strong> (potential gain).
        <br>&bull; Traversing a cell from positive to negative terminal: <strong>- E</strong> (potential loss).
      </div>
    </div>
  </article>

  <!-- TOPIC 16 & 17: Wheatstone Bridge & Meter Bridge -->
  <article class="study-topic-block" id="sec-phy-ce-bridges" data-visual="phy-ce-bridge">
    <div class="topic-header-row">
      <h3><span class="section-num">16-17</span> Wheatstone Bridge & Meter Bridge</h3>
      <span class="subject-pill phy">Practical Measurement</span>
    </div>
    <p class="study-body-text">
      <strong>Balanced Wheatstone Bridge:</strong> Four resistors P, Q, R, S arranged in a quadrilateral bridge. When no current flows through the central galvanometer (<code>I_g = 0</code>):
    </p>
    <div class="chemical-equation-box">
      P / Q = R / S &nbsp;&nbsp;(Bridge Balance Condition)
    </div>
    <p class="study-body-text">
      <strong>Meter Bridge (Practical Application):</strong> Consists of a 1-metre (100 cm) uniform manganin wire. A known resistance R is placed in the left gap and an unknown resistance S in the right gap. If the null balance point is found at distance <code>l</code> cm from the zero end:
    </p>
    <div class="chemical-equation-box">
      R / S = l / (100 - l) &nbsp;&nbsp;⇒&nbsp;&nbsp; S = R · (100 - l) / l
    </div>
    <div class="concept-callout">
      <span class="callout-icon">🎯</span>
      <div>
        <strong>Why is balance point preferably near the middle (40–60 cm)?</strong>
        The bridge sensitivity is maximum when all four arms have nearly equal resistance, which minimizes fractional error in measuring length <code>Δl / l</code> and end resistance corrections!
      </div>
    </div>
  </article>

  <!-- TOPIC 18 to 20: Electrical Energy, Power & Heating -->
  <article class="study-topic-block" id="sec-phy-ce-power" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">18-20</span> Electrical Energy, Power & Joule Heating</h3>
      <span class="subject-pill phy">Thermal Effects</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Electrical Work & Energy:</strong> <code>W = V · I · t = I² · R · t = (V² / R) · t</code> (Unit: Joule).
      <br>&bull; <strong>Electrical Power:</strong> <code>P = V · I = I² · R = V² / R</code> (Unit: Watt, where 1 W = 1 J/s).
      <br>&bull; <strong>Commercial Unit:</strong> Kilowatt-hour (kWh) or Board of Trade unit:
    </p>
    <div class="chemical-equation-box">
      1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J
    </div>
    <p class="study-body-text">
      &bull; <strong>Joule's Law of Heating:</strong> Heat produced <code>H = I² · R · t</code>. Applications: Electric heater, iron, toaster, electric fuse (alloy of lead and tin with low melting point and high resistance).
    </p>
  </article>

  <!-- TOPIC 21: Instruments (Ammeter & Voltmeter) -->
  <article class="study-topic-block" id="sec-phy-ce-instruments" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">21</span> Electrical Measurement Instruments</h3>
      <span class="subject-pill phy">Ammeter vs Voltmeter</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;">
      <div class="model-meta-card" style="margin-bottom: 0;">
        <span style="color: var(--accent-cyan); font-weight: 700;">Ammeter (Current Measurement)</span>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          &bull; Connected in <strong>series</strong> with circuit element.<br>
          &bull; Has <strong>very low resistance</strong> so it does not decrease circuit current.<br>
          &bull; <strong>Ideal Ammeter Resistance:</strong> <code>R_A = 0</code>.
        </p>
      </div>
      <div class="model-meta-card" style="margin-bottom: 0;">
        <span style="color: var(--accent-emerald); font-weight: 700;">Voltmeter (Potential Difference)</span>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          &bull; Connected in <strong>parallel</strong> across circuit element.<br>
          &bull; Has <strong>very high resistance</strong> so it draws negligible bypass current.<br>
          &bull; <strong>Ideal Voltmeter Resistance:</strong> <code>R_V = ∞</code>.
        </p>
      </div>
    </div>
  </article>

  <!-- TOPIC 25: Important "Why" Questions & MUST DO -->
  <article class="study-topic-block" id="sec-phy-ce-why" data-visual="phy-ce-drift">
    <div class="topic-header-row">
      <h3><span class="section-num">25</span> High-Yield CBSE "Why" Questions & MUST-DO Checklist</h3>
      <span class="subject-pill phy">Board Q&A Bank</span>
    </div>

    <div style="display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-top: 0.6rem;">
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why does resistance of metals increase with temperature?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          As temperature rises, amplitude of lattice ion vibrations increases. Free electrons collide more frequently, reducing relaxation time τ. Since <code>ρ = m / (ne²τ)</code>, decreased τ results in increased resistivity.
        </p>
      </div>
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why does terminal voltage become less than EMF when a cell supplies current?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          When current flows, some energy is lost as heat across the electrolyte's internal resistance r (potential drop = Ir). Hence <code>V = E - Ir &lt; E</code>.
        </p>
      </div>
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why is an ammeter connected in series and voltmeter in parallel?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          Series connection ensures the entire branch current passes through the ammeter. Parallel connection ensures the voltmeter experiences the exact potential difference across the desired two nodes.
        </p>
      </div>
    </div>

    <div class="neet-trap-alert" style="margin-top: 0.8rem; border-left: 3px solid var(--accent-rose);">
      <span style="font-size: 1.25rem;">⭐</span>
      <div>
        <strong>CBSE BOARD MUST-DO DERIVATION CHECKLIST:</strong>
        <br>1. Drift velocity <code>vd = eEτ/m</code> and <code>I = neAvd</code>.
        <br>2. Deduction of Ohm's law from microscopic drift theory (<code>ρ = m / ne²τ</code>).
        <br>3. Series & parallel combinations of cells (equivalent E and r).
        <br>4. Kirchhoff's rules application to multiloop circuits.
        <br>5. Balanced Wheatstone bridge condition (<code>P/Q = R/S</code>) using loop rule.
        <br>6. Meter bridge formula for unknown resistance.
      </div>
    </div>
  </article>
</div>
'''

def get_moving_charges_html():
    return '''
<div id="chapter-phy-magcharge-container" style="display: none;">
  <!-- TOPIC 1 & 2: Magnetic Field & Lorentz Force -->
  <article class="study-topic-block" id="sec-phy-mc-intro" data-visual="phy-mc-lorentz">
    <div class="topic-header-row">
      <h3><span class="section-num">1-2</span> Magnetic Field & Lorentz Force on Moving Charges</h3>
      <span class="subject-pill phy">Class 12 Physics &bull; Ch. 4</span>
    </div>
    <p class="study-body-text">
      <strong>Magnetic Field (B):</strong> Space surrounding a magnet or current-carrying conductor in which magnetic forces are experienced. SI unit: <strong>Tesla (T)</strong>, where <code>1 T = 1 N / (A · m) = 10⁴ Gauss</code>.
      <br>&bull; <strong>Magnetic Field Lines:</strong> Closed continuous loops (emerge from North, enter South outside; continue South to North inside). Tangent gives B direction. Field lines <strong>never intersect</strong> (otherwise two directions would exist at a single point, which is impossible!).
    </p>

    <h4 style="color: var(--phy-primary); margin: 0.8rem 0 0.3rem; font-size: 0.95rem;">Magnetic Lorentz Force:</h4>
    <div class="chemical-equation-box">
      F = q (v × B) &nbsp;&nbsp;⇒&nbsp;&nbsp; F = q · v · B · sin θ
    </div>
    <p class="study-body-text">
      &bull; <strong>Special Cases:</strong>
      <br>&nbsp;&nbsp;&bull; Charge at rest (<code>v = 0</code>) ⟶ <code>F = 0</code> (A stationary charge experiences zero magnetic force!).
      <br>&nbsp;&nbsp;&bull; Motion parallel/antiparallel (<code>θ = 0° or 180°</code>) ⟶ <code>F = 0</code>.
      <br>&nbsp;&nbsp;&bull; Motion perpendicular (<code>θ = 90°</code>) ⟶ Maximum force <code>F_max = q · v · B</code>.
      <br>&bull; <strong>Direction:</strong> Given by Right-Hand Thumb Rule or Fleming's Left-Hand Rule. For negative charges (electrons), the force direction is exactly reversed!
    </p>
  </article>

  <!-- TOPIC 3: Motion in Magnetic Field -->
  <article class="study-topic-block" id="sec-phy-mc-motion" data-visual="phy-mc-lorentz">
    <div class="topic-header-row">
      <h3><span class="section-num">3</span> Motion of a Charged Particle in Uniform B-Field</h3>
      <span class="subject-pill phy">Circular & Helical Trajectories</span>
    </div>
    <p class="study-body-text">
      <strong>Case A: Velocity Perpendicular to B (θ = 90°):</strong>
      <br>The magnetic force acts as the centripetal force: <code>q · v · B = (m · v²) / r</code>.
    </p>
    <div class="chemical-equation-box">
      r = (m · v) / (q · B) &nbsp;|&nbsp; T = (2π · m) / (q · B) &nbsp;|&nbsp; f = (q · B) / (2π · m)
    </div>
    <p class="study-body-text">
      &bull; <strong>CRITICAL NCERT INSIGHT:</strong> Time period <code>T</code> and frequency <code>f</code> are <strong>completely independent of the particle's speed v and orbit radius r</strong>! Faster particles travel along larger circles, completing each revolution in the exact same time.
      <br><br>
      <strong>Case B: Velocity at Oblique Angle (Helical Path):</strong>
      <br>&bull; Parallel component <code>v_∥ = v cos θ</code> is unaffected (causes uniform translation along B).
      <br>&bull; Perpendicular component <code>v_⊥ = v sin θ</code> causes circular motion with radius <code>r = (m · v_⊥) / (qB)</code>.
      <br>&bull; Resultant path is a <strong>Helix</strong> with pitch <code>p = v_∥ · T = (v cos θ) · (2πm / qB)</code>.
    </p>
  </article>

  <!-- TOPIC 4: Cyclotron -->
  <article class="study-topic-block" id="sec-phy-mc-cyclotron" data-visual="phy-mc-lorentz">
    <div class="topic-header-row">
      <h3><span class="section-num">4</span> The Cyclotron Particle Accelerator</h3>
      <span class="subject-pill phy">Classic Board Derivation</span>
    </div>
    <p class="study-body-text">
      <strong>Principle:</strong> A charged particle is repeatedly accelerated across an alternating electric field while a perpendicular magnetic field bends it into expanding semicircular paths inside two hollow D-shaped metal chambers (dees).
      <br>&bull; <strong>Cyclotron Resonance Frequency:</strong> <code>f_c = (q · B) / (2π · m)</code>.
      <br>&bull; <strong>Maximum Kinetic Energy:</strong> When particle exits at dee radius R:
    </p>
    <div class="chemical-equation-box">
      K_max = ½ m v_max² = (q² · B² · R²) / (2m)
    </div>
    <div class="neet-trap-alert" style="border-left: 3px solid var(--accent-rose);">
      <span style="font-size: 1.25rem;">⚠️</span>
      <div>
        <strong>Limitations of Cyclotron:</strong>
        <br>1. Cannot accelerate neutral particles (neutrons) as they experience zero electric/magnetic force.
        <br>2. Cannot accelerate electrons effectively because their tiny mass causes relativistic mass increase <code>m = m₀ / √(1 - v²/c²)</code> at relatively low energies, falling out of resonance with the oscillator!
      </div>
    </div>
  </article>

  <!-- TOPIC 5 to 7: Force on Conductor & Parallel Wires -->
  <article class="study-topic-block" id="sec-phy-mc-force" data-visual="phy-mc-wires">
    <div class="topic-header-row">
      <h3><span class="section-num">5-7</span> Force on Conductor & Between Parallel Wires</h3>
      <span class="subject-pill phy">B-Field Forces</span>
    </div>
    <p class="study-body-text">
      <strong>Force on Current-Carrying Conductor:</strong> <code>F = I (L × B)</code> ⟶ <code>F = B · I · L · sin θ</code>. Direction given by Fleming's Left-Hand Rule.
      <br><br>
      <strong>Force Between Two Long Parallel Conductors:</strong>
    </p>
    <div class="chemical-equation-box">
      F / L = (μ₀ · I₁ · I₂) / (2π · d)
    </div>
    <p class="study-body-text">
      &bull; <strong>Currents in same direction:</strong> <strong>ATTRACT</strong> each other.
      <br>&bull; <strong>Currents in opposite direction:</strong> <strong>REPEL</strong> each other.
      <br>&bull; <strong>Definition of Ampere:</strong> 1 Ampere is that steady current which, when maintained in two straight parallel conductors of infinite length placed 1 metre apart in vacuum, produces between them a force of <code>2 × 10⁻⁷ N per metre of length</code>.
    </p>
  </article>

  <!-- TOPIC 8 & 9: Torque & Magnetic Dipole Moment -->
  <article class="study-topic-block" id="sec-phy-mc-torque" data-visual="phy-mc-lorentz">
    <div class="topic-header-row">
      <h3><span class="section-num">8-9</span> Torque on Current Loop & Magnetic Dipole Moment</h3>
      <span class="subject-pill phy">Dipole Interactions</span>
    </div>
    <p class="study-body-text">
      A planar current loop placed in a uniform magnetic field experiences zero net force but a net deflecting torque:
    </p>
    <div class="chemical-equation-box">
      τ = m × B &nbsp;&nbsp;⇒&nbsp;&nbsp; τ = N · I · A · B · sin θ
    </div>
    <p class="study-body-text">
      where <strong>m = N · I · A</strong> is the magnetic dipole moment of the loop (SI unit: <code>A · m²</code> or <code>J / T</code>).
      <br>&bull; Maximum torque at <code>θ = 90°</code> (loop plane parallel to B).
      <br>&bull; Zero torque at <code>θ = 0° or 180°</code> (loop plane perpendicular to B).
    </p>
  </article>

  <!-- TOPIC 10 to 14: Moving Coil Galvanometer -->
  <article class="study-topic-block" id="sec-phy-mc-galv" data-visual="phy-mc-galv">
    <div class="topic-header-row">
      <h3><span class="section-num">10-14</span> Moving Coil Galvanometer & Conversions</h3>
      <span class="subject-pill phy">Core Board Instrument</span>
    </div>
    <p class="study-body-text">
      <strong>Principle:</strong> A current-carrying coil placed in a magnetic field experiences a deflecting torque <code>τ = N · I · A · B</code>. Under a <strong>radial magnetic field</strong> (produced by concave pole pieces and a soft iron core), the coil plane is always parallel to field lines (sin θ = 1).
      <br>At equilibrium, deflecting torque = restoring torque: <code>N · I · A · B = k · θ</code>.
    </p>
    <div class="chemical-equation-box">
      θ = (N · A · B / k) · I &nbsp;&nbsp;⇒&nbsp;&nbsp; Deflection θ ∝ Current I
    </div>
    <p class="study-body-text">
      &bull; <strong>Current Sensitivity:</strong> <code>θ / I = (N · A · B) / k</code>.
      <br>&bull; <strong>Voltage Sensitivity:</strong> <code>θ / V = (N · A · B) / (k · G)</code>.
      <br>&bull; <strong>Conversion into Ammeter:</strong> Connect a small shunt <code>S = (I_g · G) / (I - I_g)</code> in <strong>parallel</strong>.
      <br>&bull; <strong>Conversion into Voltmeter:</strong> Connect high resistance <code>R = (V / I_g) - G</code> in <strong>series</strong>.
    </p>
  </article>

  <!-- TOPIC 15 to 18: Biot-Savart Law & Circular Loops -->
  <article class="study-topic-block" id="sec-phy-mc-biotsavart" data-visual="phy-mc-lorentz">
    <div class="topic-header-row">
      <h3><span class="section-num">15-18</span> Biot–Savart Law & Magnetic Fields of Currents</h3>
      <span class="subject-pill phy">Field Derivations</span>
    </div>
    <p class="study-body-text">
      <strong>Biot–Savart Law:</strong> Magnetic field <code>dB</code> due to an infinitesimal current element <code>I · dl</code>:
    </p>
    <div class="chemical-equation-box">
      dB = (μ₀ / 4π) · (I · dl · sin θ) / r² &nbsp;&nbsp;where&nbsp;&nbsp; μ₀ / 4π = 10⁻⁷ T·m/A
    </div>
    <p class="study-body-text">
      &bull; <strong>Long Straight Wire:</strong> <code>B = (μ₀ · I) / (2π · r)</code> (Direction given by Right-Hand Thumb Rule).
      <br>&bull; <strong>Centre of Circular Loop (N turns):</strong> <code>B = (μ₀ · N · I) / (2R)</code>.
      <br>&bull; <strong>Axis of Circular Loop at distance x:</strong>
    </p>
    <div class="chemical-equation-box">
      B_axis = (μ₀ · N · I · R²) / [2 (R² + x²)^(3/2)]
    </div>
  </article>

  <!-- TOPIC 19 to 21: Ampere's Law, Solenoid & Toroid -->
  <article class="study-topic-block" id="sec-phy-mc-ampere" data-visual="phy-mc-lorentz">
    <div class="topic-header-row">
      <h3><span class="section-num">19-21</span> Ampere's Circuital Law, Solenoid & Toroid</h3>
      <span class="subject-pill phy">Circuital Theorems</span>
    </div>
    <p class="study-body-text">
      <strong>Ampere's Circuital Law:</strong> The line integral of magnetic field <code>B</code> around any closed loop equals <code>μ₀</code> times the total current enclosed by the loop:
    </p>
    <div class="chemical-equation-box">
      ∮ B · dl = μ₀ · I_enclosed
    </div>
    <p class="study-body-text">
      &bull; <strong>Long Ideal Solenoid:</strong> <code>B = μ₀ · n · I</code> (where <code>n = N / L</code> is turns per unit length). Field inside is uniform and parallel to the axis; field outside is negligibly weak (~0).
      <br>&bull; <strong>Toroid (Endless Solenoid):</strong> <code>B = (μ₀ · N · I) / (2π · r)</code> inside the core; zero in open space inside and outside the toroid.
    </p>
  </article>

  <!-- TOPIC 26: "Why" Questions & MUST DO -->
  <article class="study-topic-block" id="sec-phy-mc-why" data-visual="phy-mc-lorentz">
    <div class="topic-header-row">
      <h3><span class="section-num">26</span> Board "Why" Questions & MUST-DO Checklist</h3>
      <span class="subject-pill phy">High-Yield Revisions</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-top: 0.6rem;">
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why does a magnetic field not change the kinetic energy of a charged particle?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          Magnetic force <code>F = q(v × B)</code> is perpendicular to velocity <code>v</code> at every instant. Power delivered <code>P = F · v = 0</code>. By work-energy theorem, work done is zero, so speed and KE remain constant.
        </p>
      </div>
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why is a radial magnetic field used in a moving coil galvanometer?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          In a radial field, field lines always lie in the plane of the coil (θ = 90°), making deflecting torque maximum and constant for a given current, which ensures a linear scale (<code>θ ∝ I</code>).
        </p>
      </div>
    </div>
  </article>
</div>
'''

def get_magnetism_matter_html():
    return '''
<div id="chapter-phy-magmatter-container" style="display: none;">
  <!-- TOPIC 1 to 6: Bar Magnet & Dipole -->
  <article class="study-topic-block" id="sec-phy-mm-barmagnet" data-visual="phy-mm-dipole">
    <div class="topic-header-row">
      <h3><span class="section-num">1-6</span> Bar Magnet, Magnetic Dipole & Field Lines</h3>
      <span class="subject-pill phy">Class 12 Physics &bull; Ch. 5</span>
    </div>
    <p class="study-body-text">
      <strong>Bar Magnet as a Magnetic Dipole:</strong> Consists of two equal and opposite magnetic poles separated by magnetic length <code>2l</code>.
      <br>&bull; <strong>Magnetic Dipole Moment:</strong> <code>M = m · (2l)</code> (SI unit: <code>A · m²</code> or <code>J / T</code>). Direction points from <strong>South Pole to North Pole</strong> inside the magnet.
      <br>&bull; <strong>Magnetic Monopoles Do Not Exist:</strong> Cutting a bar magnet in half produces two smaller complete dipoles; isolated magnetic monopoles have never been observed!
    </p>

    <h4 style="color: var(--phy-primary); margin: 0.8rem 0 0.3rem; font-size: 0.95rem;">Fields of a Short Bar Magnet (r ≫ l):</h4>
    <div class="chemical-equation-box">
      B_axial = (μ₀ / 4π) · (2M / r³) &nbsp;|&nbsp; B_equatorial = (μ₀ / 4π) · (M / r³)
    </div>
    <p class="study-body-text" style="font-weight: 700; color: var(--phy-primary);">
      ✦ Crucial Board Relation: B_axial = 2 · B_equatorial (at the same distance r).
    </p>
  </article>

  <!-- TOPIC 7 & 8: Torque & Potential Energy -->
  <article class="study-topic-block" id="sec-phy-mm-torque" data-visual="phy-mm-dipole">
    <div class="topic-header-row">
      <h3><span class="section-num">7-8</span> Torque & Potential Energy of Magnetic Dipole</h3>
      <span class="subject-pill phy">Uniform B-Field</span>
    </div>
    <p class="study-body-text">
      When a magnetic dipole with moment <code>M</code> is placed in a uniform magnetic field <code>B</code>:
    </p>
    <div class="chemical-equation-box">
      τ = M × B = M · B · sin θ &nbsp;|&nbsp; U = - M · B = - M · B · cos θ
    </div>
    <p class="study-body-text">
      &bull; <strong>Stable Equilibrium:</strong> <code>θ = 0°</code> (M parallel to B) ⟶ <code>τ = 0</code>, <code>U = -MB</code> (Minimum potential energy).
      <br>&bull; <strong>Unstable Equilibrium:</strong> <code>θ = 180°</code> (M antiparallel to B) ⟶ <code>τ = 0</code>, <code>U = +MB</code> (Maximum potential energy).
      <br>&bull; <strong>Work Done to rotate dipole from θ₁ to θ₂:</strong> <code>W = -MB (cos θ₂ - cos θ₁)</code>.
    </p>
  </article>

  <!-- TOPIC 9 to 12: Earth's Magnetism -->
  <article class="study-topic-block" id="sec-phy-mm-earth" data-visual="phy-mm-earth">
    <div class="topic-header-row">
      <h3><span class="section-num">9-12</span> Earth's Magnetism & Magnetic Elements</h3>
      <span class="subject-pill phy">Major Numerical Topic</span>
    </div>
    <p class="study-body-text">
      Earth behaves like a giant magnetic dipole tilted at ~11.3° to its geographic rotational axis. Its magnetic South pole lies near the geographic North pole.
    </p>
    <h4 style="color: var(--phy-primary); margin: 0.8rem 0 0.3rem; font-size: 0.95rem;">The Three Magnetic Elements:</h4>
    <p class="study-body-text">
      1. <strong>Magnetic Declination (D):</strong> Angle between geographic meridian and magnetic meridian at a place.
      <br>2. <strong>Angle of Dip or Magnetic Inclination (δ):</strong> Angle made by Earth's total magnetic field with the horizontal plane:
      <br>&nbsp;&nbsp;&bull; At Magnetic Equator: <code>δ = 0°</code> (needle rests horizontally).
      <br>&nbsp;&nbsp;&bull; At Magnetic Poles: <code>δ = 90°</code> (needle rests vertically).
      <br>3. <strong>Horizontal Component (B_H):</strong>
    </p>
    <div class="chemical-equation-box">
      B_H = B · cos δ &nbsp;|&nbsp; B_V = B · sin δ &nbsp;⇒&nbsp; tan δ = B_V / B_H &nbsp;|&nbsp; B = √(B_H² + B_V²)
    </div>
  </article>

  <!-- TOPIC 13 to 20: Magnetic Materials -->
  <article class="study-topic-block" id="sec-phy-mm-materials" data-visual="phy-mm-materials">
    <div class="topic-header-row">
      <h3><span class="section-num">13-20</span> Classification of Magnetic Materials</h3>
      <span class="subject-pill phy">Dia vs Para vs Ferro</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Magnetisation (M):</strong> Net magnetic dipole moment per unit volume: <code>M = m_net / V</code> (Unit: <code>A / m</code>).
      <br>&bull; <strong>Magnetic Intensity (H):</strong> Applied magnetising field: <code>B = μ₀ (H + M)</code>.
      <br>&bull; <strong>Magnetic Susceptibility (χ_m):</strong> <code>χ_m = M / H</code>. Dimensionless measure of material response.
      <br>&bull; <strong>Relative Permeability:</strong> <code>μ_r = 1 + χ_m = μ / μ₀</code>.
    </p>
    <table class="study-data-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Susceptibility (χ_m)</th>
          <th>Relative Permeability (μ_r)</th>
          <th>Temperature Law</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Diamagnetic</strong></td>
          <td>Small & negative (-1 ≤ χ &lt; 0)</td>
          <td>0 ≤ μ_r &lt; 1</td>
          <td>Independent of Temp</td>
          <td>Bi, Cu, Pb, H₂O, NaCl, Au</td>
        </tr>
        <tr>
          <td><strong>Paramagnetic</strong></td>
          <td>Small & positive (0 &lt; χ &lt; ε)</td>
          <td>μ_r slightly &gt; 1</td>
          <td>Curie Law: <code>χ = C / T</code></td>
          <td>Al, Pt, Mn, Cr, O₂, Na</td>
        </tr>
        <tr>
          <td><strong>Ferromagnetic</strong></td>
          <td>Very large positive (χ ≫ 1000)</td>
          <td>μ_r ≫ 1000</td>
          <td>Curie-Weiss above T_c: <code>χ = C/(T - T_c)</code></td>
          <td>Fe, Co, Ni, Gd, Alnico</td>
        </tr>
      </tbody>
    </table>
  </article>

  <!-- TOPIC 21 to 27: Hysteresis & Permanent vs Electromagnets -->
  <article class="study-topic-block" id="sec-phy-mm-hysteresis" data-visual="phy-mm-materials">
    <div class="topic-header-row">
      <h3><span class="section-num">21-27</span> Magnetic Hysteresis & Technical Magnets</h3>
      <span class="subject-pill phy">Materials Engineering</span>
    </div>
    <p class="study-body-text">
      <strong>Hysteresis:</strong> The lagging of magnetisation <code>B</code> behind the magnetising field <code>H</code> in ferromagnetic materials.
      <br>&bull; <strong>Retentivity (Remanence):</strong> Value of B remaining when H is reduced to zero.
      <br>&bull; <strong>Coercivity:</strong> Reverse magnetising field (-H) required to reduce residual B to zero.
      <br>&bull; <strong>Hysteresis Loss:</strong> Energy dissipated as heat per cycle of magnetisation equals the <strong>area of the B-H loop</strong>!
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-top: 0.6rem;">
      <div class="model-meta-card" style="margin-bottom: 0;">
        <span style="color: var(--accent-rose); font-weight: 700;">Permanent Magnets (Steel, Alnico)</span>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          &bull; <strong>High Retentivity:</strong> Stays strongly magnetised.<br>
          &bull; <strong>High Coercivity:</strong> Resistant to stray demagnetisation.<br>
          &bull; Broad B-H loop; hard magnetic material.
        </p>
      </div>
      <div class="model-meta-card" style="margin-bottom: 0;">
        <span style="color: var(--accent-cyan); font-weight: 700;">Electromagnets & Cores (Soft Iron)</span>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          &bull; <strong>High Initial Permeability:</strong> Produces intense B for small I.<br>
          &bull; <strong>Low Coercivity & Retentivity:</strong> Demagnetises readily.<br>
          &bull; Narrow B-H loop (minimal hysteresis heat loss in transformers).
        </p>
      </div>
    </div>
  </article>

  <!-- TOPIC 31: "Why" Questions & MUST DO -->
  <article class="study-topic-block" id="sec-phy-mm-why" data-visual="phy-mm-dipole">
    <div class="topic-header-row">
      <h3><span class="section-num">31</span> Board "Why" Questions & MUST-DO Checklist</h3>
      <span class="subject-pill phy">High-Yield Revisions</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-top: 0.6rem;">
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why do magnetic field lines form continuous closed loops?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          Because isolated magnetic monopoles do not exist. In Gauss's law for magnetism, net magnetic flux through any closed surface is always zero (<code>∮ B · dA = 0</code>). Lines that emerge from North must loop back and enter South.
        </p>
      </div>
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why does a ferromagnetic substance become paramagnetic above Curie temperature?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          Thermal agitation overcomes the exchange coupling between adjacent atomic magnetic moments, destroying domain alignment. The domains break up into randomly oriented individual atomic dipoles.
        </p>
      </div>
    </div>
  </article>
</div>
'''

def get_emi_html():
    return '''
<div id="chapter-phy-emi-container" style="display: none;">
  <!-- TOPIC 1 to 3: Magnetic Flux & Faraday's Laws -->
  <article class="study-topic-block" id="sec-phy-emi-flux" data-visual="phy-emi-faraday">
    <div class="topic-header-row">
      <h3><span class="section-num">1-3</span> Magnetic Flux & Faraday's Laws of Induction</h3>
      <span class="subject-pill phy">Class 12 Physics &bull; Ch. 6</span>
    </div>
    <p class="study-body-text">
      <strong>Magnetic Flux (Φ_B):</strong> Total number of magnetic field lines crossing an area A:
    </p>
    <div class="chemical-equation-box">
      Φ_B = B · A = B · A · cos θ &nbsp;&nbsp;(SI Unit: Weber, Wb = T · m²)
    </div>
    <p class="study-body-text">
      <strong>Faraday's Laws of Induction:</strong>
      <br>&bull; <strong>First Law:</strong> Whenever magnetic flux linked with a closed circuit changes, an electromotive force (EMF) is induced, persisting as long as the flux continues to change.
      <br>&bull; <strong>Second Law:</strong> The magnitude of induced EMF is directly proportional to the rate of change of magnetic flux:
    </p>
    <div class="chemical-equation-box">
      ε = - N · (dΦ_B / dt)
    </div>
  </article>

  <!-- TOPIC 4: Lenz's Law -->
  <article class="study-topic-block" id="sec-phy-emi-lenz" data-visual="phy-emi-faraday">
    <div class="topic-header-row">
      <h3><span class="section-num">4</span> Lenz's Law & Conservation of Energy</h3>
      <span class="subject-pill phy">Foundational Board Topic</span>
    </div>
    <p class="study-body-text">
      <strong>Statement:</strong> The polarity of induced EMF is such that it tends to produce a current which <em>opposes the change in magnetic flux that produces it</em>.
    </p>
    <div class="neet-trap-alert" style="border-left: 3px solid var(--phy-primary);">
      <span style="font-size: 1.25rem;">⚡</span>
      <div>
        <strong>Why is Lenz's Law a Consequence of Energy Conservation?</strong>
        <br>When a magnet's North pole approaches a coil, induced current flows counter-clockwise, forming a North pole to repel the approaching magnet. An external agent must do mechanical work to push the magnet against this repulsive magnetic force. This mechanical work is precisely converted into electrical energy. If induced current instead attracted the magnet, infinite kinetic energy would be created from nothing, violating energy conservation!
      </div>
    </div>
  </article>

  <!-- TOPIC 5 to 8: Motional EMF & Current -->
  <article class="study-topic-block" id="sec-phy-emi-motional" data-visual="phy-emi-motional">
    <div class="topic-header-row">
      <h3><span class="section-num">5-8</span> Motional EMF, Current & Power Dissipation</h3>
      <span class="subject-pill phy">Moving Conductors</span>
    </div>
    <p class="study-body-text">
      When a straight conducting rod of length <code>l</code> moves with velocity <code>v</code> perpendicular to uniform magnetic field <code>B</code>:
    </p>
    <div class="chemical-equation-box">
      ε = B · l · v &nbsp;|&nbsp; I = (B · l · v) / R &nbsp;|&nbsp; F_ext = (B² · l² · v) / R &nbsp;|&nbsp; P = (B² · l² · v²) / R
    </div>
    <p class="study-body-text">
      &bull; <strong>Fleming's Right-Hand Rule:</strong> Stretch thumb, forefinger, and middle finger mutually perpendicular:
      <br>&nbsp;&nbsp;&bull; <strong>Thumb:</strong> Direction of motion of conductor (v).
      <br>&nbsp;&nbsp;&bull; <strong>Forefinger:</strong> Direction of magnetic field (B).
      <br>&nbsp;&nbsp;&bull; <strong>Middle finger:</strong> Direction of induced current (I).
    </p>
  </article>

  <!-- TOPIC 9: Eddy Currents -->
  <article class="study-topic-block" id="sec-phy-emi-eddy" data-visual="phy-emi-motional">
    <div class="topic-header-row">
      <h3><span class="section-num">9</span> Eddy Currents (Foucault Currents)</h3>
      <span class="subject-pill phy">Bulk Conductor Phenomena</span>
    </div>
    <p class="study-body-text">
      Circulating induced currents produced in the bulk mass of metallic conductors when exposed to changing magnetic flux.
      <br>&bull; <strong>Applications:</strong>
      <br>&nbsp;&nbsp;1. <em>Electromagnetic Braking:</em> In high-speed trains, strong electro-magnets induce eddy currents in rails, creating opposing torque that stops trains smoothly.
      <br>&nbsp;&nbsp;2. <em>Induction Furnace:</em> High-frequency eddy currents generate rapid Joule heating (I²Rt) to melt metals in vacuum.
      <br>&nbsp;&nbsp;3. <em>Dead-Beat Galvanometers:</em> A metallic coil frame induces eddy currents that damp needle oscillation rapidly.
      <br>&bull; <strong>Disadvantage & Reduction:</strong> Causes unwanted heating and power loss in transformers and motor cores. Minimized by constructing cores from <strong>thin laminated sheets</strong> insulated by varnish!
    </p>
  </article>

  <!-- TOPIC 10 to 15: Self & Mutual Inductance -->
  <article class="study-topic-block" id="sec-phy-emi-inductance" data-visual="phy-emi-faraday">
    <div class="topic-header-row">
      <h3><span class="section-num">10-15</span> Self & Mutual Inductance</h3>
      <span class="subject-pill phy">Inductive Inertia</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Self-Induction (Electrical Inertia):</strong> Production of induced EMF in a coil due to change of current in the same coil:
    </p>
    <div class="chemical-equation-box">
      ε = - L · (dI / dt) &nbsp;&nbsp;(SI Unit: Henry, H = V·s/A)
    </div>
    <p class="study-body-text">
      &bull; <strong>Self-Inductance of Long Solenoid:</strong> <code>L = (μ₀ · N² · A) / l = μ₀ · n² · A · l</code>.
      <br>&bull; <strong>Energy Stored in Inductor:</strong> <code>U = ½ L · I²</code> &nbsp;&nbsp;(Magnetic Energy Density <code>u_B = B² / 2μ₀</code>).
      <br><br>
      &bull; <strong>Mutual Induction:</strong> Production of induced EMF in a secondary coil due to current variation in a neighbouring primary coil:
    </p>
    <div class="chemical-equation-box">
      ε₂ = - M · (dI₁ / dt) &nbsp;|&nbsp; Two Coaxial Solenoids: M = (μ₀ · N₁ · N₂ · A) / l
    </div>
  </article>

  <!-- TOPIC 17 to 19: AC Generator -->
  <article class="study-topic-block" id="sec-phy-emi-generator" data-visual="phy-emi-generator">
    <div class="topic-header-row">
      <h3><span class="section-num">17-19</span> The AC Generator (Alternator)</h3>
      <span class="subject-pill phy">Major Board 5-Marker</span>
    </div>
    <p class="study-body-text">
      <strong>Principle:</strong> Works on Electromagnetic Induction. Mechanical rotation of a coil in a magnetic field changes the flux linkage <code>Φ_B = N B A cos(ωt)</code>.
    </p>
    <div class="chemical-equation-box">
      e = - dΦ_B / dt = N · B · A · ω · sin(ωt) = e₀ · sin(ωt)
    </div>
    <p class="study-body-text">
      &bull; <strong>Peak EMF:</strong> <code>e₀ = N · B · A · ω = 2π · f · N · B · A</code>.
      <br>&bull; <strong>Construction Essentials:</strong> Armature coil, strong field magnets, two slip rings (continuous contact without reversing polarity), and carbon brushes connecting to external load circuit.
    </p>
  </article>

  <!-- TOPIC 23: "Why" Questions & MUST DO -->
  <article class="study-topic-block" id="sec-phy-emi-why" data-visual="phy-emi-faraday">
    <div class="topic-header-row">
      <h3><span class="section-num">23</span> Board "Why" Questions & MUST-DO Checklist</h3>
      <span class="subject-pill phy">High-Yield Revisions</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-top: 0.6rem;">
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why does a spark occur when an inductive circuit is suddenly switched off?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          Current drops from I to 0 in a very short duration (dt ≈ 0). This massive rate of change <code>-dI/dt</code> induces a tremendous self-induced back-EMF <code>ε = -L(dI/dt)</code> across the switch gap, ionizing air and creating an electric spark!
        </p>
      </div>
      <div class="model-meta-card" style="margin-bottom: 0; padding: 0.6rem;">
        <strong style="color: var(--phy-primary);">Q: Why are transformer cores laminated?</strong>
        <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
          Laminations break up large continuous conductive loops into thin sheets insulated by varnish. This dramatically increases electrical resistance along the eddy current circulation plane, cutting heat energy losses.
        </p>
      </div>
    </div>
  </article>
</div>
'''

print("Physics generator module ready.")
