// ==========================================================================
// Class 12 Biology (Botany & Zoology) - Interactive Scrollytelling Visual Stage
// Chapters: Principles of Inheritance & Variation, Molecular Basis of
//           Inheritance, Reproductive Health, Evolution
// ==========================================================================

export class DiagramsBiology {
  constructor(hub) {
    this.hub = hub;
    // Genetics state
    this.monohybridParent = 'Tt';
    this.recombDist = 10; // cM
    this.lacState = 'absent'; // 'absent' | 'present'

    // Reproductive Health state
    this.contraceptiveType = 'iud'; // 'barrier' | 'iud' | 'oral' | 'surgical'

    // Evolution state
    this.hwP = 0.7; // allele frequency p
    this.selectionMode = 'stabilising'; // 'stabilising' | 'directional' | 'disruptive'
  }

  pop() {
    if (this.hub && this.hub.playAudio) this.hub.playAudio('pop');
  }

  // =========================================================================
  // 1. PRINCIPLES OF INHERITANCE AND VARIATION (BOTANY CH. 2)
  // =========================================================================
  renderInheritance(subview = 'traits') {
    this.hub.stageTitle.textContent = "Principles of Inheritance and Variation";
    this.hub.stageSubtitle.textContent = "Mendel's 7 contrasting traits, monohybrid & dihybrid crosses, Morgan's linkage, and chromosomal disorders";
    this.hub.stageBadge.textContent = "Botany Ch. 2 / NEET ~12%";

    let contentHtml = '';

    if (subview === 'traits') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-bio-traits">Mendel's 7 Traits</button>
            <button class="stage-control-btn" id="btn-bio-ratios">Monohybrid & Dihybrid</button>
            <button class="stage-control-btn" id="btn-bio-disorders">Chromosomal Disorders</button>
          </div>

          <table class="study-data-table" style="font-size: 0.78rem;">
            <thead>
              <tr>
                <th>Character</th>
                <th>Dominant Trait</th>
                <th>Recessive Trait</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Stem Height</strong></td>
                <td>Tall (T)</td>
                <td>Dwarf (t)</td>
              </tr>
              <tr>
                <td><strong>Flower Colour</strong></td>
                <td>Violet</td>
                <td>White</td>
              </tr>
              <tr>
                <td><strong>Flower Position</strong></td>
                <td>Axial</td>
                <td>Terminal</td>
              </tr>
              <tr>
                <td><strong>Pod Shape</strong></td>
                <td>Inflated</td>
                <td>Constricted</td>
              </tr>
              <tr>
                <td><strong>Pod Colour</strong></td>
                <td>Green</td>
                <td>Yellow</td>
              </tr>
              <tr>
                <td><strong>Seed Shape</strong></td>
                <td>Round (R)</td>
                <td>Wrinkled (r)</td>
              </tr>
              <tr>
                <td><strong>Seed Colour</strong></td>
                <td>Yellow (Y)</td>
                <td>Green (y)</td>
              </tr>
            </tbody>
          </table>

          <div class="neet-trap-alert" style="margin-top: 0.8rem;">
            <span style="font-size: 1.25rem;">⚠️</span>
            <div>
              <strong>NEET HIGH-FREQUENCY TRAP (Pod vs Seed Colour):</strong>
              <br>• <strong>Seed Colour:</strong> Yellow is DOMINANT, Green is RECESSIVE.
              <br>• <strong>Pod Colour:</strong> Green is DOMINANT, Yellow is RECESSIVE! (Opposite!)
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'ratios') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-bio-traits">Mendel's 7 Traits</button>
            <button class="stage-control-btn active" id="btn-bio-ratios">Monohybrid & Dihybrid</button>
            <button class="stage-control-btn" id="btn-bio-disorders">Chromosomal Disorders</button>
          </div>

          <div class="model-meta-card">
            <span style="color: var(--accent-emerald); font-weight: 700; font-size: 0.95rem;">Key Mendelian Ratios:</span>
            <div style="margin-top: 0.5rem; font-size: 0.82rem; line-height: 1.6; color: #fff;">
              • <strong>Monohybrid F₂ Phenotypic Ratio:</strong> <code>3 : 1</code> (3 Tall : 1 Dwarf)<br>
              • <strong>Monohybrid F₂ Genotypic Ratio:</strong> <code>1 : 2 : 1</code> (1 TT : 2 Tt : 1 tt)<br>
              • <strong>Test Cross Ratio:</strong> <code>1 : 1</code> (Tt × tt ⟶ 1 Tall : 1 Dwarf)<br>
              • <strong>Dihybrid F₂ Phenotypic Ratio:</strong> <code>9 : 3 : 3 : 1</code> (Round Yellow : Round Green : Wrinkled Yellow : Wrinkled Green)<br>
              • <strong>Dihybrid F₂ Genotypic Ratio:</strong> <code>1:2:1 : 2:4:2 : 1:2:1</code> (16 combinations, 9 genotypes, 4 phenotypes).
            </div>
          </div>

          <div class="neet-trap-alert" style="margin-top: 0.8rem;">
            <span style="font-size: 1.25rem;">🧬</span>
            <div>
              <strong>Morgan's Linkage & Recombination:</strong>
              <code>Recombination Frequency (%) = (Recombinants / Total Offspring) × 100</code>
              <br><code>1% Recombination = 1 Map Unit = 1 centimorgan (cM)</code> (Alfred Sturtevant).
              <br>Closely situated genes on same chromosome exhibit strong linkage & low recombination!
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'disorders') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-bio-traits">Mendel's 7 Traits</button>
            <button class="stage-control-btn" id="btn-bio-ratios">Monohybrid & Dihybrid</button>
            <button class="stage-control-btn active" id="btn-bio-disorders">Chromosomal Disorders</button>
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem;">
            <div class="model-meta-card" style="margin-bottom: 0; border-left: 3px solid var(--accent-rose);">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: var(--accent-rose);">Down's Syndrome (Trisomy 21)</strong>
                <span class="stage-badge-ncert">47, XX,+21 or 47, XY,+21</span>
              </div>
              <p style="font-size: 0.8rem; color: #fff; margin-top: 0.3rem;">
                Caused by non-disjunction of 21st chromosome. Short stature, furrowed tongue, partially open mouth, broad palm with characteristic palm crease, mental retardation.
              </p>
            </div>

            <div class="model-meta-card" style="margin-bottom: 0; border-left: 3px solid var(--accent-cyan);">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: var(--accent-cyan);">Klinefelter's Syndrome (Male)</strong>
                <span class="stage-badge-ncert">47, XXY</span>
              </div>
              <p style="font-size: 0.8rem; color: #fff; margin-top: 0.3rem;">
                Extra X chromosome in males. Tall stature, underdeveloped testes, sterile male, development of breast tissue (<strong>Gynaecomastia</strong>).
              </p>
            </div>

            <div class="model-meta-card" style="margin-bottom: 0; border-left: 3px solid var(--accent-amber);">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: var(--accent-amber);">Turner's Syndrome (Female)</strong>
                <span class="stage-badge-ncert">45, XO</span>
              </div>
              <p style="font-size: 0.8rem; color: #fff; margin-top: 0.3rem;">
                Monosomy of X chromosome in females. Sterile female, rudimentary ovaries, webbed neck, short stature, lack of secondary sexual characteristics.
              </p>
            </div>
          </div>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-bio-traits')?.addEventListener('click', () => { this.pop(); this.renderInheritance('traits'); });
    document.getElementById('btn-bio-ratios')?.addEventListener('click', () => { this.pop(); this.renderInheritance('ratios'); });
    document.getElementById('btn-bio-disorders')?.addEventListener('click', () => { this.pop(); this.renderInheritance('disorders'); });
  }

  // =========================================================================
  // 2. MOLECULAR BASIS OF INHERITANCE (BOTANY CH. 3)
  // =========================================================================
  renderMolecularBasis(subview = 'dna') {
    this.hub.stageTitle.textContent = "Molecular Basis of Inheritance";
    this.hub.stageSubtitle.textContent = "DNA double helix dimensions, Hershey-Chase & Meselson-Stahl, Central Dogma, and Lac Operon regulation";
    this.hub.stageBadge.textContent = "Botany Ch. 3 / NEET ~10%";

    let contentHtml = '';

    if (subview === 'dna') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-mol-dna">DNA Double Helix</button>
            <button class="stage-control-btn" id="btn-mol-operon">Lac Operon Switch</button>
            <button class="stage-control-btn" id="btn-mol-expts">Hershey & Meselson Experiments</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--accent-emerald); font-size: 0.95rem;">Watson-Crick B-DNA Model Parameters</span>
              <span class="stage-badge-ncert" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">Right-Handed Helix</span>
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.82rem; line-height: 1.6; color: #fff;">
              • <strong>Helix Pitch:</strong> <code>3.4 nm (34 Å)</code> per turn.<br>
              • <strong>Base Pairs per Turn:</strong> Approximately <code>10 bp</code>.<br>
              • <strong>Distance Between Consecutive Base Pairs:</strong> <code>0.34 nm (3.4 Å)</code>.<br>
              • <strong>Helix Diameter:</strong> <code>2.0 nm (20 Å)</code>.<br>
              • <strong>Antiparallel Strands:</strong> 5′ ⟶ 3′ and 3′ ⟶ 5′.<br>
              • <strong>Hydrogen Bonding:</strong> <code>A = T</code> (2 H-bonds) & <code>G ≡ C</code> (3 H-bonds).<br>
              • <strong>Chargaff's Rule:</strong> <code>[A + G] = [T + C]</code> ⇒ Purines = Pyrimidines; <code>(A + G) / (T + C) = 1</code>.
            </div>
          </div>

          <div class="neet-trap-alert" style="margin-top: 0.8rem;">
            <span style="font-size: 1.25rem;">📐</span>
            <div>
              <strong>Length of Human DNA:</strong> 6.6 × 10⁹ bp × 0.34 × 10⁻⁹ m/bp ≈ <strong>2.2 metres</strong>! Fits inside ~10⁻⁶ m nucleus via Histone Octamer nucleosome supercoiling!
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'operon') {
      const isPresent = this.lacState === 'present';
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-mol-dna">DNA Double Helix</button>
            <button class="stage-control-btn active" id="btn-mol-operon">Lac Operon Switch</button>
            <button class="stage-control-btn" id="btn-mol-expts">Hershey & Meselson Experiments</button>
          </div>

          <div style="display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 0.75rem;">
            <button class="stage-control-btn ${!isPresent ? 'active' : ''}" id="btn-lac-absent">Lactose Absent (OFF State)</button>
            <button class="stage-control-btn ${isPresent ? 'active' : ''}" id="btn-lac-present">Lactose Present (ON State)</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: ${isPresent ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-size: 0.95rem;">
                ${isPresent ? '🟢 OPERON SWITCHED ON (Inducible)' : '🔴 OPERON SWITCHED OFF (Repressed)'}
              </span>
              <span class="stage-badge-ncert">Jacob & Monod</span>
            </div>

            <p style="font-size: 0.82rem; color: #fff; margin-top: 0.4rem;">
              ${isPresent
                ? 'Allolactose (Inducer) binds to the repressor protein, causing conformational change. Inactive repressor CANNOT bind operator. RNA polymerase transcribes polycistronic mRNA!'
                : 'Active repressor protein produced by i-gene binds firmly to the operator region (o). RNA polymerase cannot transcribe the structural genes z, y, a.'}
            </p>

            <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; margin-top: 0.5rem; font-size: 0.82rem;">
              <strong style="color: var(--accent-cyan);">Structural Genes & Enzymes:</strong><br>
              • <strong>z gene:</strong> β-galactosidase (hydrolyses lactose ⟶ glucose + galactose).<br>
              • <strong>y gene:</strong> Permease (increases cell permeability to β-galactosides).<br>
              • <strong>a gene:</strong> Transacetylase (transfers acetyl group to β-galactosides).
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'expts') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-mol-dna">DNA Double Helix</button>
            <button class="stage-control-btn" id="btn-mol-operon">Lac Operon Switch</button>
            <button class="stage-control-btn active" id="btn-mol-expts">Hershey & Meselson Experiments</button>
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem;">
            <div class="model-meta-card" style="margin-bottom: 0;">
              <strong style="color: var(--accent-amber);">Hershey & Chase (1952) — Proof of DNA as Genetic Material:</strong>
              <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
                • ³²P labels DNA (contains phosphorus, no sulfur) ⟶ Radioactivity in bacterial PELLET.<br>
                • ³⁵S labels protein coat (contains methionine/cysteine sulfur, no phosphorus) ⟶ Radioactivity in SUPERNATANT.<br>
                <strong>Conclusion:</strong> DNA is the genetic material that enters the bacteria from bacteriophage!
              </p>
            </div>

            <div class="model-meta-card" style="margin-bottom: 0;">
              <strong style="color: var(--accent-cyan);">Meselson & Stahl (1958) — Semiconservative Replication:</strong>
              <p style="font-size: 0.8rem; color: #fff; margin-top: 0.2rem;">
                • Grown in ¹⁵NH₄Cl (heavy) ⟶ transferred to ¹⁴NH₄Cl (light) in E. coli.<br>
                • <strong>Generation 1 (20 min):</strong> 100% Hybrid (¹⁵N-¹⁴N) intermediate density.<br>
                • <strong>Generation 2 (40 min):</strong> 50% Hybrid (¹⁵N-¹⁴N) + 50% Light (¹⁴N-¹⁴N).<br>
                Separated via CsCl density gradient equilibrium centrifugation!
              </p>
            </div>
          </div>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-mol-dna')?.addEventListener('click', () => { this.pop(); this.renderMolecularBasis('dna'); });
    document.getElementById('btn-mol-operon')?.addEventListener('click', () => { this.pop(); this.renderMolecularBasis('operon'); });
    document.getElementById('btn-mol-expts')?.addEventListener('click', () => { this.pop(); this.renderMolecularBasis('expts'); });

    document.getElementById('btn-lac-absent')?.addEventListener('click', () => {
      this.lacState = 'absent';
      this.pop();
      this.renderMolecularBasis('operon');
    });
    document.getElementById('btn-lac-present')?.addEventListener('click', () => {
      this.lacState = 'present';
      this.pop();
      this.renderMolecularBasis('operon');
    });
  }

  // =========================================================================
  // 3. REPRODUCTIVE HEALTH (ZOOLOGY CH. 2)
  // =========================================================================
  renderReproductiveHealth(subview = 'methods') {
    this.hub.stageTitle.textContent = "Reproductive Health & Assisted Reproductive Technologies";
    this.hub.stageSubtitle.textContent = "Contraception mechanisms, IUD categories, STIs, and ART techniques (IVF, ZIFT, GIFT, IUT, ICSI)";
    this.hub.stageBadge.textContent = "Zoology Ch. 2 / NCERT";

    let contentHtml = '';

    if (subview === 'methods') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-rh-methods">Contraceptive Methods & IUDs</button>
            <button class="stage-control-btn" id="btn-rh-art">ART Comparison Matrix</button>
            <button class="stage-control-btn" id="btn-rh-stis">STIs & Pathogens</button>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.6rem;">
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--accent-cyan); font-weight: 700; font-size: 0.85rem;">Non-Medicated IUD</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                <strong>Lippes Loop:</strong> Increases phagocytosis of sperms within the uterus.
              </p>
            </div>
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--phy-primary); font-weight: 700; font-size: 0.85rem;">Copper-Releasing IUD</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                <strong>Cu-T, Cu7, Multiload 375:</strong> Cu ions suppress sperm motility & fertilising capacity.
              </p>
            </div>
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--accent-rose); font-weight: 700; font-size: 0.85rem;">Hormone-Releasing IUD</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                <strong>Progestasert, LNG-20:</strong> Makes uterus unsuitable for implantation & cervix hostile to sperm.
              </p>
            </div>
            <div class="model-meta-card" style="margin-bottom: 0;">
              <span style="color: var(--accent-emerald); font-weight: 700; font-size: 0.85rem;">Oral Pill (Saheli)</span>
              <p style="font-size: 0.78rem; color: #fff; margin-top: 0.2rem;">
                <strong>Centchroman (CDRI Lucknow):</strong> Non-steroidal, "once-a-week" pill with very few side effects.
              </p>
            </div>
          </div>

          <div class="neet-trap-alert">
            <span style="font-size: 1.25rem;">⚠️</span>
            <div>
              <strong>Surgical Sterilisation Traps:</strong>
              <br>• <strong>Vasectomy:</strong> Vas deferens is cut/tied. Spermatogenesis STILL CONTINUES, but sperms cannot reach semen!
              <br>• <strong>Tubectomy:</strong> Fallopian tubes are cut/tied. Ovulation and menstrual cycles CONTINUE normally!
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'art') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-rh-methods">Contraceptive Methods & IUDs</button>
            <button class="stage-control-btn active" id="btn-rh-art">ART Comparison Matrix</button>
            <button class="stage-control-btn" id="btn-rh-stis">STIs & Pathogens</button>
          </div>

          <table class="study-data-table" style="font-size: 0.78rem;">
            <thead>
              <tr>
                <th>Technique</th>
                <th>What is Transferred?</th>
                <th>Transfer Site</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IVF</strong></td>
                <td>In vitro fertilisation</td>
                <td>Laboratory dishes</td>
              </tr>
              <tr>
                <td><strong>ZIFT</strong></td>
                <td>Zygote / early embryo (≤ 8 blastomeres)</td>
                <td><strong>Fallopian Tube</strong></td>
              </tr>
              <tr>
                <td><strong>IUT</strong></td>
                <td>Embryo with &gt; 8 blastomeres</td>
                <td><strong>Uterus</strong></td>
              </tr>
              <tr>
                <td><strong>GIFT</strong></td>
                <td>Gametes (Ovum collected from donor)</td>
                <td><strong>Fallopian Tube</strong> (in vivo)</td>
              </tr>
              <tr>
                <td><strong>ICSI</strong></td>
                <td>Sperm injected directly into ovum</td>
                <td>Laboratory / in vitro</td>
              </tr>
              <tr>
                <td><strong>IUI / AI</strong></td>
                <td>Semen (from husband or donor)</td>
                <td><strong>Uterus / Vagina</strong></td>
              </tr>
            </tbody>
          </table>

          <div class="model-meta-card" style="margin-top: 0.6rem; background: rgba(0,210,255,0.06); border: 1px solid rgba(0,210,255,0.3);">
            <strong style="color: var(--accent-cyan);">Easy Memory Acronym:</strong>
            <br>• <strong>G</strong>IFT = <strong>G</strong>ametes transferred
            <br>• <strong>Z</strong>IFT = <strong>Z</strong>ygote (≤ 8 cells) to fallopian tube
            <br>• <strong>IUT</strong> = <strong>U</strong>terus transfer (&gt; 8 cells)
            <br>• <strong>ICSI</strong> = <strong>S</strong>perm <strong>I</strong>njection directly into ovum
          </div>
        </div>
      `;
    } else if (subview === 'stis') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-rh-methods">Contraceptive Methods & IUDs</button>
            <button class="stage-control-btn" id="btn-rh-art">ART Comparison Matrix</button>
            <button class="stage-control-btn active" id="btn-rh-stis">STIs & Pathogens</button>
          </div>

          <table class="study-data-table" style="font-size: 0.78rem;">
            <thead>
              <tr>
                <th>STI</th>
                <th>Causative Agent</th>
                <th>Pathogen Nature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gonorrhoea</strong></td>
                <td>Neisseria gonorrhoeae</td>
                <td>Bacterial</td>
              </tr>
              <tr>
                <td><strong>Syphilis</strong></td>
                <td>Treponema pallidum</td>
                <td>Bacterial</td>
              </tr>
              <tr>
                <td><strong>Chlamydiasis</strong></td>
                <td>Chlamydia trachomatis</td>
                <td>Bacterial</td>
              </tr>
              <tr>
                <td><strong>Genital Herpes</strong></td>
                <td>Herpes simplex virus (HSV)</td>
                <td>Viral (Incurable)</td>
              </tr>
              <tr>
                <td><strong>Genital Warts</strong></td>
                <td>Human papillomavirus (HPV)</td>
                <td>Viral</td>
              </tr>
              <tr>
                <td><strong>Trichomoniasis</strong></td>
                <td>Trichomonas vaginalis</td>
                <td>Protozoan</td>
              </tr>
              <tr>
                <td><strong>Hepatitis-B & HIV</strong></td>
                <td>HBV & HIV</td>
                <td>Viral (Incurable)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-rh-methods')?.addEventListener('click', () => { this.pop(); this.renderReproductiveHealth('methods'); });
    document.getElementById('btn-rh-art')?.addEventListener('click', () => { this.pop(); this.renderReproductiveHealth('art'); });
    document.getElementById('btn-rh-stis')?.addEventListener('click', () => { this.pop(); this.renderReproductiveHealth('stis'); });
  }

  // =========================================================================
  // 4. EVOLUTION (ZOOLOGY CH. 3)
  // =========================================================================
  renderEvolution(subview = 'homology') {
    this.hub.stageTitle.textContent = "Evolution & Population Genetics";
    this.hub.stageSubtitle.textContent = "Miller-Urey experiment, Homology vs Analogy, Hardy-Weinberg equilibrium, and Human evolution timeline";
    this.hub.stageBadge.textContent = "Zoology Ch. 3 / NEET High-Yield";

    let contentHtml = '';

    if (subview === 'homology') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn active" id="btn-evo-homology">Homology vs Analogy</button>
            <button class="stage-control-btn" id="btn-evo-hw">Hardy-Weinberg Calculator</button>
            <button class="stage-control-btn" id="btn-evo-human">Human Evolution Timeline</button>
          </div>

          <table class="study-data-table" style="font-size: 0.78rem;">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Homologous Organs</th>
                <th>Analogous Organs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Origin & Anatomy</strong></td>
                <td>Same basic structure & origin</td>
                <td>Different structure & origin</td>
              </tr>
              <tr>
                <td><strong>Function</strong></td>
                <td>Different functions</td>
                <td>Similar functions</td>
              </tr>
              <tr>
                <td><strong>Evolutionary Type</strong></td>
                <td><strong>DIVERGENT Evolution</strong></td>
                <td><strong>CONVERGENT Evolution</strong></td>
              </tr>
              <tr>
                <td><strong>Animal Examples</strong></td>
                <td>Forelimbs of human, cheetah, whale, bat</td>
                <td>Wings of butterfly & bird; Eye of octopus & mammal</td>
              </tr>
              <tr>
                <td><strong>Plant Examples</strong></td>
                <td>Thorn of Bougainvillea & tendril of Cucurbita</td>
                <td>Sweet potato (root tuber) & potato (stem tuber)</td>
              </tr>
            </tbody>
          </table>

          <div class="neet-trap-alert" style="margin-top: 0.8rem;">
            <span style="font-size: 1.25rem;">🐦</span>
            <div>
              <strong>Adaptive Radiation:</strong> Evolution of different species starting from a common ancestor radiating to different ecological niches (e.g. Darwin's Finches in Galápagos & Australian Marsupials). Represents Divergent Evolution!
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'hw') {
      const p = this.hwP;
      const q = (1 - p).toFixed(2);
      const p2 = (p * p).toFixed(2);
      const two_pq = (2 * p * q).toFixed(2);
      const q2 = (q * q).toFixed(2);

      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-evo-homology">Homology vs Analogy</button>
            <button class="stage-control-btn active" id="btn-evo-hw">Hardy-Weinberg Calculator</button>
            <button class="stage-control-btn" id="btn-evo-human">Human Evolution Timeline</button>
          </div>

          <div class="model-meta-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: var(--accent-emerald); font-size: 0.95rem;">Hardy-Weinberg Principle</span>
              <span class="stage-badge-ncert">p² + 2pq + q² = 1</span>
            </div>
            <div style="margin-top: 0.6rem;">
              <label style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-bottom: 0.3rem;">
                Dominant Allele Frequency (p): <strong>${p}</strong> &nbsp;|&nbsp; Recessive Allele Frequency (q): <strong>${q}</strong>
              </label>
              <input type="range" min="10" max="90" value="${p * 100}" id="slider-hw-p" style="width: 100%; accent-color: var(--accent-emerald);">
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.4rem; margin-top: 0.6rem; text-align: center;">
              <div style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
                <span style="color: var(--accent-cyan); font-weight: 700;">p² (AA)</span><br>
                <strong>${p2}</strong>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
                <span style="color: var(--accent-emerald); font-weight: 700;">2pq (Aa)</span><br>
                <strong>${two_pq}</strong>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
                <span style="color: var(--accent-rose); font-weight: 700;">q² (aa)</span><br>
                <strong>${q2}</strong>
              </div>
            </div>
            <div style="margin-top: 0.6rem; font-size: 0.78rem; color: var(--text-secondary); background: rgba(0,0,0,0.2); padding: 0.5rem; border-radius: 6px;">
              • <strong>5 Disturbing Factors:</strong> Gene flow, Genetic drift (Sewall Wright effect / Founder effect), Mutation, Genetic recombination, and Natural selection.
            </div>
          </div>
        </div>
      `;
    } else if (subview === 'human') {
      contentHtml = `
        <div class="interactive-diagram-container">
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; flex-wrap: wrap;">
            <button class="stage-control-btn" id="btn-evo-homology">Homology vs Analogy</button>
            <button class="stage-control-btn" id="btn-evo-hw">Hardy-Weinberg Calculator</button>
            <button class="stage-control-btn active" id="btn-evo-human">Human Evolution Timeline</button>
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 0.45rem;">
            <div class="model-meta-card" style="margin-bottom: 0; padding: 0.5rem 0.7rem;">
              <div style="display: flex; justify-content: space-between;">
                <strong>1. Dryopithecus & Ramapithecus (15 mya)</strong>
                <span class="stage-badge-ncert">Ape/Man-like</span>
              </div>
              <small style="color: var(--text-secondary);">Dryopithecus was ape-like; Ramapithecus was more man-like.</small>
            </div>

            <div class="model-meta-card" style="margin-bottom: 0; padding: 0.5rem 0.7rem;">
              <div style="display: flex; justify-content: space-between;">
                <strong>2. Australopithecines (2 mya)</strong>
                <span class="stage-badge-ncert">Bipedal Walker</span>
              </div>
              <small style="color: var(--text-secondary);">Lived in East African grasslands; essentially ate fruit; hunted with stone weapons.</small>
            </div>

            <div class="model-meta-card" style="margin-bottom: 0; padding: 0.5rem 0.7rem;">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: var(--accent-cyan);">3. Homo habilis (First human-like)</strong>
                <span class="stage-badge-ncert" style="color: var(--accent-cyan);">650 – 800 cc</span>
              </div>
              <small style="color: var(--text-secondary);">Handy man, tool maker; probably did not eat meat.</small>
            </div>

            <div class="model-meta-card" style="margin-bottom: 0; padding: 0.5rem 0.7rem;">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: var(--accent-amber);">4. Homo erectus (1.5 mya)</strong>
                <span class="stage-badge-ncert" style="color: var(--accent-amber);">900 cc</span>
              </div>
              <small style="color: var(--text-secondary);">Java man; upright posture; definitely ate meat; used fire.</small>
            </div>

            <div class="model-meta-card" style="margin-bottom: 0; padding: 0.5rem 0.7rem;">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: var(--accent-rose);">5. Neanderthal Man (100k–40k ya)</strong>
                <span class="stage-badge-ncert" style="color: var(--accent-rose);">1400 cc</span>
              </div>
              <small style="color: var(--text-secondary);">Used hides to protect body; buried their dead; lived in near East & Central Asia.</small>
            </div>

            <div class="model-meta-card" style="margin-bottom: 0; padding: 0.5rem 0.7rem;">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: var(--accent-emerald);">6. Homo sapiens (Modern Man)</strong>
                <span class="stage-badge-ncert" style="color: var(--accent-emerald);">1450 cc</span>
              </div>
              <small style="color: var(--text-secondary);">Arose in Africa during ice age (75,000–10,000 years ago); cave art & agriculture.</small>
            </div>
          </div>
        </div>
      `;
    }

    this.hub.visualStage.innerHTML = contentHtml;

    document.getElementById('btn-evo-homology')?.addEventListener('click', () => { this.pop(); this.renderEvolution('homology'); });
    document.getElementById('btn-evo-hw')?.addEventListener('click', () => { this.pop(); this.renderEvolution('hw'); });
    document.getElementById('btn-evo-human')?.addEventListener('click', () => { this.pop(); this.renderEvolution('human'); });

    const pSlider = document.getElementById('slider-hw-p');
    pSlider?.addEventListener('input', (e) => {
      this.hwP = parseFloat(e.target.value) / 100;
      this.renderEvolution('hw');
    });
  }
}
