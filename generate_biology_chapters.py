# -*- coding: utf-8 -*-
"""
Generate complete, rich HTML for the 4 Biology Chapters:
1. Botany Ch. 2: Principles of Inheritance and Variation (bio-bot2)
2. Botany Ch. 3: Molecular Basis of Inheritance (bio-bot3)
3. Zoology Ch. 2: Reproductive Health (bio-zoo2)
4. Zoology Ch. 3: Evolution (bio-zoo3)
"""

import sys
sys.stdout.reconfigure(encoding='utf-8')

bio_navs = '''
      <!-- Biology: Botany Ch. 2 Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-bio-bot2" style="display: none;" aria-label="Inheritance & Variation Topic Index">
        <a href="#sec-bio-inh-intro" class="study-index-link active">1. Intro & Mendel</a>
        <a href="#sec-bio-inh-monohybrid" class="study-index-link">3. Monohybrid & Crosses</a>
        <a href="#sec-bio-inh-laws" class="study-index-link">4. Mendel's Laws</a>
        <a href="#sec-bio-inh-dihybrid" class="study-index-link">5. Dihybrid Cross</a>
        <a href="#sec-bio-inh-linkage" class="study-index-link">8. Morgan & Linkage</a>
        <a href="#sec-bio-inh-sex" class="study-index-link">11. Sex Determination</a>
        <a href="#sec-bio-inh-disorders" class="study-index-link">14. Mendelian & Chromosomal</a>
        <a href="#sec-bio-inh-traps" class="study-index-link">25. High-Yield & Traps</a>
      </div>

      <!-- Biology: Botany Ch. 3 Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-bio-bot3" style="display: none;" aria-label="Molecular Basis Topic Index">
        <a href="#sec-bio-mol-dna" class="study-index-link active">1. DNA Proof & Experiments</a>
        <a href="#sec-bio-mol-struct" class="study-index-link">3. Structure & Chargaff</a>
        <a href="#sec-bio-mol-packaging" class="study-index-link">6. Nucleosome Packaging</a>
        <a href="#sec-bio-mol-rep" class="study-index-link">7. Semiconservative Replication</a>
        <a href="#sec-bio-mol-transcription" class="study-index-link">11. Central Dogma & Transcription</a>
        <a href="#sec-bio-mol-code" class="study-index-link">18. Genetic Code & Translation</a>
        <a href="#sec-bio-mol-operon" class="study-index-link">25. Lac Operon Regulation</a>
        <a href="#sec-bio-mol-hgp" class="study-index-link">29. HGP & DNA Fingerprint</a>
      </div>

      <!-- Biology: Zoology Ch. 2 Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-bio-zoo2" style="display: none;" aria-label="Reproductive Health Topic Index">
        <a href="#sec-bio-rh-intro" class="study-index-link active">1. Intro & Population</a>
        <a href="#sec-bio-rh-contraception" class="study-index-link">4. Contraception & IUDs</a>
        <a href="#sec-bio-rh-surgical" class="study-index-link">11. Surgical & MTP</a>
        <a href="#sec-bio-rh-stis" class="study-index-link">13. STIs & Prevention</a>
        <a href="#sec-bio-rh-art" class="study-index-link">18. Infertility & ART Matrix</a>
        <a href="#sec-bio-rh-traps" class="study-index-link">25. High-Yield & Traps</a>
      </div>

      <!-- Biology: Zoology Ch. 3 Quick Index -->
      <div class="study-quick-nav-bar" id="quick-nav-bio-zoo3" style="display: none;" aria-label="Evolution Topic Index">
        <a href="#sec-bio-evo-origin" class="study-index-link active">1. Origin of Life & Miller</a>
        <a href="#sec-bio-evo-evidences" class="study-index-link">4. Evidences & Homology</a>
        <a href="#sec-bio-evo-darwin" class="study-index-link">10. Darwin & Finches</a>
        <a href="#sec-bio-evo-modern" class="study-index-link">15. Modern Theory & Drift</a>
        <a href="#sec-bio-evo-hw" class="study-index-link">21. Hardy-Weinberg Principle</a>
        <a href="#sec-bio-evo-selection" class="study-index-link">24. Types of Selection</a>
        <a href="#sec-bio-evo-human" class="study-index-link">27. Human Evolution Sequence</a>
        <a href="#sec-bio-evo-traps" class="study-index-link">35. High-Yield & Traps</a>
      </div>
'''

def get_botany_ch2_html():
    return '''
<div id="chapter-bio-bot2-container" style="display: none;">
  <!-- TOPIC 1 & 2: Intro & Mendel's 7 Traits -->
  <article class="study-topic-block" id="sec-bio-inh-intro" data-visual="bio-inh-traits">
    <div class="topic-header-row">
      <h3><span class="section-num">1-2</span> Heredity, Variation & Mendel's Garden Pea</h3>
      <span class="subject-pill bio">Botany &bull; Ch. 2</span>
    </div>
    <p class="study-body-text">
      <strong>Gregor Johann Mendel (Father of Genetics)</strong> conducted hybridization experiments on garden pea (<em>Pisum sativum</em>) for 7 years (1856–1863) and proposed the laws of inheritance.
      <br>&bull; <strong>Why Mendel Chose Pea Plant:</strong> Easily available, short life span, bisexual flowers, naturally self-pollinating but easily cross-pollinated artificially, produces numerous fertile offspring, and possesses clearly distinguishable contrasting traits!
    </p>

    <h4 style="color: var(--bio-primary); margin: 0.8rem 0 0.3rem; font-size: 0.95rem;">The 7 Pairs of Contrasting Characters in Garden Pea:</h4>
    <table class="study-data-table">
      <thead>
        <tr>
          <th>Character</th>
          <th>Dominant Trait</th>
          <th>Recessive Trait</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Stem Height</strong></td><td>Tall</td><td>Dwarf</td></tr>
        <tr><td><strong>Flower Colour</strong></td><td>Violet</td><td>White</td></tr>
        <tr><td><strong>Flower Position</strong></td><td>Axial</td><td>Terminal</td></tr>
        <tr><td><strong>Pod Shape</strong></td><td>Inflated</td><td>Constricted</td></tr>
        <tr><td><strong>Pod Colour</strong></td><td>Green</td><td>Yellow</td></tr>
        <tr><td><strong>Seed Shape</strong></td><td>Round</td><td>Wrinkled</td></tr>
        <tr><td><strong>Seed Colour</strong></td><td>Yellow</td><td>Green</td></tr>
      </tbody>
    </table>

    <div class="neet-trap-alert" style="border-left: 3px solid var(--accent-rose);">
      <span style="font-size: 1.25rem;">⚠️</span>
      <div>
        <strong>CRITICAL NEET REPEATED TRAP:</strong>
        Notice the inversion between Seed Colour and Pod Colour:
        <br>&bull; <strong>Seed Colour:</strong> YELLOW is Dominant, Green is Recessive.
        <br>&bull; <strong>Pod Colour:</strong> GREEN is Dominant, Yellow is Recessive!
      </div>
    </div>
  </article>

  <!-- TOPIC 3: Monohybrid Cross -->
  <article class="study-topic-block" id="sec-bio-inh-monohybrid" data-visual="bio-inh-ratios">
    <div class="topic-header-row">
      <h3><span class="section-num">3</span> Monohybrid Cross, Test Cross & Back Cross</h3>
      <span class="subject-pill bio">Mendelian Ratios</span>
    </div>
    <p class="study-body-text">
      A cross involving a single pair of contrasting characters (e.g., Pure Tall <code>TT</code> × Pure Dwarf <code>tt</code>):
      <br>&bull; <strong>F₁ Generation:</strong> All heterozygous Tall (<code>Tt</code>).
      <br>&bull; <strong>F₂ Generation (Selfing Tt × Tt):</strong>
    </p>
    <div class="chemical-equation-box">
      F₂ Phenotypic Ratio = 3 Tall : 1 Dwarf (3 : 1)<br>
      F₂ Genotypic Ratio = 1 TT : 2 Tt : 1 tt (1 : 2 : 1)
    </div>
    <p class="study-body-text">
      &bull; <strong>Test Cross:</strong> Cross of an individual displaying a dominant phenotype (genotype unknown: TT or Tt) with a <strong>homozygous recessive parent (tt)</strong>:
      <br>&nbsp;&nbsp;&bull; If dominant parent is <code>Tt</code> ⟶ 1 Tall (Tt) : 1 Dwarf (tt) (<strong>Ratio = 1 : 1</strong>).
      <br>&nbsp;&nbsp;&bull; If dominant parent is <code>TT</code> ⟶ 100% Tall offspring.
      <br>&bull; <em>Every test cross is a back cross, but NOT every back cross is a test cross!</em>
    </p>
  </article>

  <!-- TOPIC 4: Mendel's Laws -->
  <article class="study-topic-block" id="sec-bio-inh-laws" data-visual="bio-inh-ratios">
    <div class="topic-header-row">
      <h3><span class="section-num">4</span> Mendel's Laws of Inheritance</h3>
      <span class="subject-pill bio">Genetic Postulates</span>
    </div>
    <p class="study-body-text">
      1. <strong>Law of Dominance:</strong> Characters are controlled by discrete units called factors (genes) which occur in pairs. In a dissimilar pair, one factor dominates (dominant allele) and the other is masked (recessive allele).
      <br><br>
      2. <strong>Law of Segregation (Purity of Gametes):</strong> During gamete formation, the two alleles of a gene pair separate/segregate from each other so that each gamete receives only one allele. <em>Alleles do not show any blending!</em> (Universal law without exception).
      <br><br>
      3. <strong>Law of Independent Assortment:</strong> When two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair during gamete formation (Applies only to unlinked genes on different chromosomes!).
    </p>
  </article>

  <!-- TOPIC 5 to 7: Dihybrid Cross -->
  <article class="study-topic-block" id="sec-bio-inh-dihybrid" data-visual="bio-inh-ratios">
    <div class="topic-header-row">
      <h3><span class="section-num">5-7</span> Dihybrid Cross & Probability in Genetics</h3>
      <span class="subject-pill bio">Punnett Squares</span>
    </div>
    <p class="study-body-text">
      Cross involving two pairs of contrasting traits (Round Yellow <code>RRYY</code> × Wrinkled Green <code>rryy</code>):
      <br>&bull; <strong>F₁:</strong> All Round Yellow (<code>RrYy</code>). Produces 4 types of gametes in equal ratio: <code>RY, Ry, rY, ry</code> (1 : 1 : 1 : 1).
      <br>&bull; <strong>F₂ Generation (16 combinations via Reginald C. Punnett Square):</strong>
    </p>
    <div class="chemical-equation-box">
      F₂ Phenotypic Ratio = 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1)<br>
      F₂ Genotypic Ratio = 1:2:1 : 2:4:2 : 1:2:1 (9 Distinct Genotypes)
    </div>
    <p class="study-body-text">
      &bull; <strong>Chromosomal Theory of Inheritance:</strong> Proposed by <strong>Walter Sutton & Theodor Boveri (1902)</strong>. Pointed out that chromosomal behaviour during meiosis parallels gene behaviour (both occur in pairs, segregate during gamete formation, and assort independently).
    </p>
  </article>

  <!-- TOPIC 8 to 10: Morgan, Linkage & Recombination -->
  <article class="study-topic-block" id="sec-bio-inh-linkage" data-visual="bio-inh-ratios">
    <div class="topic-header-row">
      <h3><span class="section-num">8-10</span> T.H. Morgan, Linkage & Genetic Mapping</h3>
      <span class="subject-pill bio">Fly Room Discoveries</span>
    </div>
    <p class="study-body-text">
      <strong>Thomas Hunt Morgan (Father of Experimental Genetics)</strong> chose fruit fly (<em>Drosophila melanogaster</em>) because: cultured on simple synthetic medium, life cycle ~2 weeks, single mating produces hundreds of progeny, clear male/female dimorphism, and distinct hereditary variations visible under low-power microscope!
      <br>&bull; <strong>Linkage:</strong> Physical association of genes on the same chromosome. Complete linkage produces only parental types (0% recombinants).
      <br>&bull; <strong>Recombination:</strong> Generation of non-parental gene combinations due to crossing over during <strong>pachytene of prophase-I</strong>:
    </p>
    <div class="chemical-equation-box">
      Recombination Frequency (%) = (Number of Recombinants / Total Offspring) × 100
    </div>
    <p class="study-body-text">
      &bull; <strong>Genetic Maps:</strong> Alfred Sturtevant used recombination frequency as a measure of physical distance between genes: <code>1% Recombination = 1 Map Unit = 1 centimorgan (cM)</code>.
    </p>
  </article>

  <!-- TOPIC 11 & 12: Sex Determination -->
  <article class="study-topic-block" id="sec-bio-inh-sex" data-visual="bio-inh-disorders">
    <div class="topic-header-row">
      <h3><span class="section-num">11-12</span> Mechanisms of Sex Determination</h3>
      <span class="subject-pill bio">Chromosomal Systems</span>
    </div>
    <p class="study-body-text">
      1. <strong>XX – XY System (Humans & Drosophila):</strong> Male heterogamety. Female produces only X ova; male produces 50% X and 50% Y sperms. <em>The father determines the sex of the child!</em>
      <br>2. <strong>XX – XO System (Grasshopper):</strong> Male heterogamety. Male has only one X chromosome (XO); female has two (XX).
      <br>3. <strong>ZW – ZZ System (Birds):</strong> <strong>Female heterogamety!</strong> Female has ZW (heteromorphic); male has ZZ (homomorphic). The mother determines offspring sex!
      <br>4. <strong>Haplodiploidy (Honey Bees):</strong> Males (drones) develop parthenogenetically from unfertilised haploid eggs (n = 16) and have no father and cannot have sons! Females (queen & workers) develop from fertilised diploid eggs (2n = 32).
    </p>
  </article>

  <!-- TOPIC 14 to 24: Mendelian & Chromosomal Disorders -->
  <article class="study-topic-block" id="sec-bio-inh-disorders" data-visual="bio-inh-disorders">
    <div class="topic-header-row">
      <h3><span class="section-num">14-24</span> Mendelian & Chromosomal Disorders</h3>
      <span class="subject-pill bio">Medical Genetics</span>
    </div>
    <h4 style="color: var(--accent-cyan); font-size: 0.95rem;">A. Mendelian Disorders (Single-Gene Mutations):</h4>
    <p class="study-body-text">
      &bull; <strong>Haemophilia (Royal Disease):</strong> X-linked recessive. A single protein in the blood clotting cascade is affected; simple cut leads to non-stop bleeding. Carrier female (XʰX) transmits to 50% of sons.
      <br>&bull; <strong>Colour Blindness:</strong> X-linked recessive defect in red or green cone photoreceptors. Much more common in males (~8%) than females (~0.4%).
      <br>&bull; <strong>Sickle-Cell Anaemia:</strong> Autosomal recessive. Point mutation in 6th codon of β-globin gene from <code>GAG (Glutamic acid) ⟶ GTG (Valine)</code>. Polymerizes under low O₂ into sickle-shaped RBCs.
      <br>&bull; <strong>Phenylketonuria (PKU):</strong> Autosomal recessive inborn error of metabolism. Deficiency of phenylalanine hydroxylase enzyme fails to convert phenylalanine to tyrosine, causing mental retardation.
      <br>&bull; <strong>Thalassemia:</strong> Autosomal recessive quantitative defect (reduced synthesis of α or β globin chains). Contrast with Sickle-cell which is a <em>qualitative defect</em>!
    </p>

    <h4 style="color: var(--accent-rose); font-size: 0.95rem; margin-top: 0.8rem;">B. Chromosomal Disorders (Aneuploidy via Non-Disjunction):</h4>
    <div style="display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-top: 0.4rem;">
      <div class="model-meta-card" style="margin-bottom: 0;">
        <strong style="color: var(--accent-rose);">Down's Syndrome (Trisomy 21):</strong> Karyotype <code>47, XX,+21 or 47, XY,+21</code>. First described by Langdon Down (1866). Short stature, furrowed tongue, broad palm with simian crease, intellectual disability.
      </div>
      <div class="model-meta-card" style="margin-bottom: 0;">
        <strong style="color: var(--accent-cyan);">Klinefelter's Syndrome:</strong> Karyotype <code>47, XXY</code>. Sterile male, overall masculine development with feminine features (gynaecomastia), tall stature.
      </div>
      <div class="model-meta-card" style="margin-bottom: 0;">
        <strong style="color: var(--accent-amber);">Turner's Syndrome:</strong> Karyotype <code>45, XO</code>. Sterile female, rudimentary ovaries, lack of secondary sexual characteristics, webbed neck, short stature.
      </div>
    </div>
  </article>
</div>
'''

def get_botany_ch3_html():
    return '''
<div id="chapter-bio-bot3-container" style="display: none;">
  <!-- TOPIC 1 & 2: Search for Genetic Material -->
  <article class="study-topic-block" id="sec-bio-mol-dna" data-visual="bio-mol-dna">
    <div class="topic-header-row">
      <h3><span class="section-num">1-2</span> Search for Genetic Material & Landmark Experiments</h3>
      <span class="subject-pill bio">Botany &bull; Ch. 3</span>
    </div>
    <p class="study-body-text">
      1. <strong>Griffith's Transformation (1928):</strong> <em>Streptococcus pneumoniae</em>. Smooth (S) virulent strain killed mice; Rough (R) non-virulent did not. Heat-killed S + Live R injected together killed mice! Live virulent S bacteria recovered. Proved a "transforming principle" was transferred from dead S to live R.
      <br><br>
      2. <strong>Avery, MacLeod & McCarty (1944):</strong> Discovered transforming principle was DNA. Proteases and RNases did not inhibit transformation, but <strong>DNase completely inhibited it</strong>!
      <br><br>
      3. <strong>Hershey & Chase Blender Experiment (1952):</strong> Unequivocal proof using T2 bacteriophage:
      <br>&bull; ³²P labelled DNA (radioactivity detected in bacterial pellet).
      <br>&bull; ³⁵S labelled protein coat (radioactivity detected in supernatant).
      <br>Proved DNA is the genetic material passed from virus to bacteria!
    </p>
  </article>

  <!-- TOPIC 3 to 5: Structure of DNA & Chargaff's Rules -->
  <article class="study-topic-block" id="sec-bio-mol-struct" data-visual="bio-mol-dna">
    <div class="topic-header-row">
      <h3><span class="section-num">3-5</span> Structure of DNA & Watson-Crick B-DNA Model</h3>
      <span class="subject-pill bio">Double Helix Geometry</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Nucleotide:</strong> Nitrogenous base + Deoxyribose sugar + Phosphate group (bonded via phosphoester bond to 5′ OH). Nucleotides polymerize via 3′–5′ phosphodiester linkages.
      <br>&bull; <strong>Chargaff's Equimolar Rules (for dsDNA):</strong>
    </p>
    <div class="chemical-equation-box">
      [A] = [T] &nbsp;|&nbsp; [G] = [C] &nbsp;⇒&nbsp; [A + G] = [T + C] &nbsp;⇒&nbsp; (A + G) / (T + C) = 1
    </div>
    <p class="study-body-text">
      &bull; <strong>Watson-Crick Double Helix Parameters:</strong>
      <br>&nbsp;&nbsp;&bull; Two antiparallel polynucleotide chains (5′ ⟶ 3′ and 3′ ⟶ 5′).
      <br>&nbsp;&nbsp;&bull; <code>A = T</code> linked by 2 hydrogen bonds; <code>G ≡ C</code> linked by 3 hydrogen bonds.
      <br>&nbsp;&nbsp;&bull; Right-handed helix pitch = <strong>3.4 nm</strong>; ~<strong>10 bp per turn</strong>; distance between consecutive base pairs = <strong>0.34 nm</strong>; diameter = <strong>2.0 nm</strong>.
    </p>
  </article>

  <!-- TOPIC 6: Packaging of DNA -->
  <article class="study-topic-block" id="sec-bio-mol-packaging" data-visual="bio-mol-dna">
    <div class="topic-header-row">
      <h3><span class="section-num">6</span> Packaging of DNA & The Nucleosome</h3>
      <span class="subject-pill bio">Chromatin Architecture</span>
    </div>
    <p class="study-body-text">
      Human diploid genome contains 6.6 × 10⁹ bp, measuring <strong>2.2 metres long</strong>, packed into a ~10⁻⁶ m nucleus!
      <br>&bull; <strong>Nucleosome:</strong> Negatively charged DNA wrapped around a positively charged <strong>histone octamer</strong> (two copies each of H2A, H2B, H3, H4).
      <br>&bull; Rich in basic amino acids <strong>Lysine and Arginine</strong> (carrying positive charges on side chains).
      <br>&bull; A typical nucleosome contains <strong>200 bp of DNA</strong>. H1 histone seals the entry/exit linker DNA.
      <br>&bull; <strong>Euchromatin:</strong> Loosely packed, stains light, transcriptionally active.
      <br>&bull; <strong>Heterochromatin:</strong> Densely packed, stains dark, transcriptionally inactive!
    </p>
  </article>

  <!-- TOPIC 7 to 10: Semiconservative Replication -->
  <article class="study-topic-block" id="sec-bio-mol-rep" data-visual="bio-mol-dna">
    <div class="topic-header-row">
      <h3><span class="section-num">7-10</span> DNA Replication & Meselson-Stahl Proof</h3>
      <span class="subject-pill bio">Semiconservative Mechanism</span>
    </div>
    <p class="study-body-text">
      <strong>Meselson & Stahl Experiment (1958):</strong> Proved semiconservative replication in <em>E. coli</em> using heavy ¹⁵N and light ¹⁴N with CsCl density gradient centrifugation:
      <br>&bull; After Gen 1 (20 min): 100% hybrid density DNA (¹⁵N–¹⁴N).
      <br>&bull; After Gen 2 (40 min): 50% hybrid density + 50% light density (¹⁴N–¹⁴N).
      <br><br>
      <strong>Replication Machinery:</strong>
      <br>&bull; <strong>DNA-dependent DNA Polymerase:</strong> Highly processive; synthesizes only in the <strong>5′ ⟶ 3′ direction</strong>.
      <br>&bull; <strong>Leading Strand:</strong> Continuous synthesis (template 3′ ⟶ 5′).
      <br>&bull; <strong>Lagging Strand:</strong> Discontinuous synthesis producing <strong>Okazaki fragments</strong> (joined together by <strong>DNA ligase</strong>).
    </p>
  </article>

  <!-- TOPIC 11 to 17: Transcription & RNA Processing -->
  <article class="study-topic-block" id="sec-bio-mol-transcription" data-visual="bio-mol-dna">
    <div class="topic-header-row">
      <h3><span class="section-num">11-17</span> Transcription & Eukaryotic RNA Processing</h3>
      <span class="subject-pill bio">Gene Expression</span>
    </div>
    <p class="study-body-text">
      <strong>Transcription Unit:</strong> Promoter (binding site for RNA polymerase), Structural gene, and Terminator.
      <br>&bull; <strong>Template Strand:</strong> 3′ ⟶ 5′ polarity.
      <br>&bull; <strong>Coding Strand:</strong> 5′ ⟶ 3′ polarity (sequence identical to mRNA except T replaced by U).
      <br><br>
      <strong>Eukaryotic RNA Polymerases:</strong>
      <br>&bull; <strong>RNA Polymerase I:</strong> Transcribes 28S, 18S, and 5.8S rRNAs.
      <br>&bull; <strong>RNA Polymerase II:</strong> Transcribes precursor of mRNA (heterogeneous nuclear RNA, <strong>hnRNA</strong>).
      <br>&bull; <strong>RNA Polymerase III:</strong> Transcribes tRNA, 5S rRNA, and snRNAs.
      <br><br>
      <strong>Post-Transcriptional Modifications of hnRNA:</strong>
      <br>&bull; <strong>5′ Capping:</strong> Addition of methyl guanosine triphosphate.
      <br>&bull; <strong>3′ Polyadenylation (Tailing):</strong> 200–300 adenylate residues added.
      <br>&bull; <strong>Splicing:</strong> Non-coding intervening sequences (<strong>introns</strong>) removed; coding sequences (<strong>exons</strong>) joined by spliceosome!
    </p>
  </article>

  <!-- TOPIC 18 to 24: Genetic Code & Translation -->
  <article class="study-topic-block" id="sec-bio-mol-code" data-visual="bio-mol-dna">
    <div class="topic-header-row">
      <h3><span class="section-num">18-24</span> The Genetic Code & Translation</h3>
      <span class="subject-pill bio">Ribosomal Protein Synthesis</span>
    </div>
    <p class="study-body-text">
      <strong>Salient Features of Genetic Code (George Gamow, Nirenberg, Khorana):</strong>
      <br>&bull; <strong>Triplet:</strong> 61 sense codons code for 20 amino acids; 3 stop codons (<code>UAA, UAG, UGA</code>) code for NO amino acid.
      <br>&bull; <strong>Unambiguous & Specific:</strong> One codon codes for only one amino acid.
      <br>&bull; <strong>Degenerate:</strong> Some amino acids are specified by more than one codon (except Methionine <code>AUG</code> and Tryptophan <code>UGG</code>).
      <br>&bull; <strong>Universal:</strong> AUG codes for Methionine from bacteria to humans!
      <br>&bull; <strong>Dual Function of AUG:</strong> Acts as initiation/start codon AND codes for Methionine.
      <br><br>
      &bull; <strong>tRNA (Adaptor Molecule):</strong> Has amino acid acceptor end (CCA-3′) and anticodon loop that pairs complementarily with mRNA codon.
      <br>&bull; <strong>Ribosomes:</strong> Prokaryotic 70S (50S + 30S) & Eukaryotic 80S (60S + 40S). 23S rRNA in bacteria acts as <strong>peptidyl transferase ribozyme</strong>!
    </p>
  </article>

  <!-- TOPIC 25 to 28: Lac Operon -->
  <article class="study-topic-block" id="sec-bio-mol-operon" data-visual="bio-mol-operon">
    <div class="topic-header-row">
      <h3><span class="section-num">25-28</span> Regulation of Gene Expression: The Lac Operon</h3>
      <span class="subject-pill bio">Inducible Model (Jacob & Monod)</span>
    </div>
    <p class="study-body-text">
      Consists of: Regulatory gene <strong>i</strong> (inhibitor/repressor), Promoter <strong>p</strong>, Operator <strong>o</strong>, and three structural genes <strong>z, y, a</strong>:
      <br>&bull; <strong>z gene:</strong> β-galactosidase (hydrolyses lactose into galactose + glucose).
      <br>&bull; <strong>y gene:</strong> Permease (increases cell permeability to β-galactosides).
      <br>&bull; <strong>a gene:</strong> Transacetylase.
      <br><br>
      &bull; <strong>In absence of inducer (Lactose):</strong> Repressor binds operator, blocking RNA polymerase ⟶ <strong>Operon OFF</strong>.
      <br>&bull; <strong>In presence of inducer:</strong> Lactose/allolactose binds repressor, inactivating it. RNA pol transcribes z, y, a ⟶ <strong>Operon ON</strong>.
    </p>
  </article>

  <!-- TOPIC 29 to 33: HGP & DNA Fingerprinting -->
  <article class="study-topic-block" id="sec-bio-mol-hgp" data-visual="bio-mol-dna">
    <div class="topic-header-row">
      <h3><span class="section-num">29-33</span> Human Genome Project & DNA Fingerprinting</h3>
      <span class="subject-pill bio">Genomic Frontiers</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Human Genome Project (1990–2003):</strong> Coordinated mega-project. Human genome contains <strong>3.1647 billion bp</strong>. Average gene = 3000 bases (largest human gene is <em>dystrophin</em> at 2.4 million bases). Less than 2% of the genome codes for proteins! Chromosome 1 has highest genes (2968); Y chromosome has least (231).
      <br><br>
      &bull; <strong>DNA Fingerprinting (Sir Alec Jeffreys):</strong>
      <br>Based on identifying <strong>Variable Number of Tandem Repeats (VNTRs)</strong>, a class of satellite DNA showing high degree of polymorphism.
      <br><strong>Steps:</strong> DNA isolation ⟶ Restriction endonuclease digestion ⟶ Gel electrophoresis ⟶ Southern blotting onto nitrocellulose membrane ⟶ Hybridisation with labelled VNTR probe ⟶ Autoradiography detection.
    </p>
  </article>
</div>
'''

def get_zoology_ch2_html():
    return '''
<div id="chapter-bio-zoo2-container" style="display: none;">
  <!-- TOPIC 1 to 3: Intro & Population Explosion -->
  <article class="study-topic-block" id="sec-bio-rh-intro" data-visual="bio-rh-methods">
    <div class="topic-header-row">
      <h3><span class="section-num">1-3</span> Reproductive Health & Population Explosion</h3>
      <span class="subject-pill bio">Zoology &bull; Ch. 2</span>
    </div>
    <p class="study-body-text">
      <strong>WHO Definition:</strong> Reproductive health implies a total well-being in all aspects of reproduction, including <strong>physical, emotional, behavioural, and social aspects</strong>.
      <br>&bull; India was the first nation in the world to initiate national action plans for family planning in <strong>1951</strong>, now modernized as Reproductive and Child Health Care (<strong>RCH</strong>) programmes.
      <br>&bull; <strong>Causes of Population Explosion:</strong> Rapid decline in death rate, maternal mortality rate (MMR), and infant mortality rate (IMR), coupled with an increase in life expectancy and population in reproducible age group.
    </p>
  </article>

  <!-- TOPIC 4 to 10: Contraception & IUDs -->
  <article class="study-topic-block" id="sec-bio-rh-contraception" data-visual="bio-rh-methods">
    <div class="topic-header-row">
      <h3><span class="section-num">4-10</span> Contraceptive Methods & IUDs</h3>
      <span class="subject-pill bio">Family Planning Devices</span>
    </div>
    <p class="study-body-text">
      1. <strong>Natural / Traditional Methods:</strong>
      <br>&bull; <em>Periodic Abstinence:</em> Avoid coitus during fertile period (days 10–17 of menstrual cycle when ovulation is expected).
      <br>&bull; <em>Coitus Interruptus:</em> Withdrawal of penis before ejaculation.
      <br>&bull; <em>Lactational Amenorrhea:</em> Absence of menstruation during intense breastfeeding due to high prolactin inhibiting gonadotropins (effective up to maximum 6 months postpartum).
      <br><br>
      2. <strong>Barrier Methods:</strong> Condoms (Nirodh), diaphragms, cervical caps, vaults. Condoms offer crucial dual protection against pregnancy AND <strong>STIs/AIDS</strong>!
      <br><br>
      3. <strong>Intra-Uterine Devices (IUDs) — Super High-Yield:</strong>
      <br>&bull; <strong>Non-Medicated IUDs:</strong> <em>Lippes loop</em> (enhances phagocytosis of sperms).
      <br>&bull; <strong>Copper-Releasing IUDs:</strong> <em>Cu-T, Cu7, Multiload 375</em> (released Cu ions suppress sperm motility and fertilising capacity).
      <br>&bull; <strong>Hormone-Releasing IUDs:</strong> <em>Progestasert, LNG-20</em> (render uterus unsuitable for implantation and cervix hostile to sperms).
      <br><br>
      4. <strong>Oral Contraceptive Pills:</strong> Progestogen or Progestogen-Estrogen combinations taken daily for 21 days starting within first 5 days of cycle.
      <br>&bull; <strong>Saheli:</strong> Non-steroidal pill developed by <strong>CDRI Lucknow</strong>; contains <em>centchroman</em>; taken "once-a-week" with high contraceptive value and negligible side effects.
    </p>
  </article>

  <!-- TOPIC 11 & 12: Surgical Methods & MTP -->
  <article class="study-topic-block" id="sec-bio-rh-surgical" data-visual="bio-rh-methods">
    <div class="topic-header-row">
      <h3><span class="section-num">11-12</span> Surgical Sterilisation & MTP</h3>
      <span class="subject-pill bio">Permanent Methods</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Vasectomy:</strong> In males, a small part of the <strong>vas deferens</strong> is cut and tied. <em>Spermatogenesis still occurs</em>, but sperms cannot reach semen.
      <br>&bull; <strong>Tubectomy:</strong> In females, a small part of the <strong>fallopian tubes</strong> is cut and tied. <em>Ovulation and menstrual cycles continue normally</em>, but ovum cannot meet sperm.
      <br><br>
      &bull; <strong>Medical Termination of Pregnancy (MTP):</strong> Legalized in India in <strong>1971</strong> with strict conditions to avoid female foeticide. Safe up to the first trimester (12 weeks of pregnancy); second trimester abortions are far more risky.
    </p>
  </article>

  <!-- TOPIC 13 to 17: STIs -->
  <article class="study-topic-block" id="sec-bio-rh-stis" data-visual="bio-rh-stis">
    <div class="topic-header-row">
      <h3><span class="section-num">13-17</span> Sexually Transmitted Infections (STIs)</h3>
      <span class="subject-pill bio">Pathology & Prevention</span>
    </div>
    <table class="study-data-table">
      <thead>
        <tr>
          <th>Infection</th>
          <th>Causative Organism</th>
          <th>Type & Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Gonorrhoea</strong></td><td>Neisseria gonorrhoeae</td><td>Bacterium</td></tr>
        <tr><td><strong>Syphilis</strong></td><td>Treponema pallidum</td><td>Bacterium</td></tr>
        <tr><td><strong>Chlamydiasis</strong></td><td>Chlamydia trachomatis</td><td>Bacterium</td></tr>
        <tr><td><strong>Genital Herpes</strong></td><td>Herpes simplex virus (HSV)</td><td>Viral (Incurable)</td></tr>
        <tr><td><strong>Genital Warts</strong></td><td>Human papillomavirus (HPV)</td><td>Viral</td></tr>
        <tr><td><strong>Trichomoniasis</strong></td><td>Trichomonas vaginalis</td><td>Protozoan</td></tr>
        <tr><td><strong>Hepatitis-B & HIV</strong></td><td>HBV & HIV</td><td>Viral (Incurable; transmitted via blood/sexual fluids)</td></tr>
      </tbody>
    </table>
    <p class="study-body-text" style="font-size: 0.85rem; color: var(--accent-amber);">
      📌 <strong>Incurable STIs:</strong> Genital herpes, Hepatitis-B, and HIV infections are not completely curable. Other bacterial and protozoan STIs are completely curable if detected early and treated properly!
    </p>
  </article>

  <!-- TOPIC 18 to 25: Infertility & ART Matrix -->
  <article class="study-topic-block" id="sec-bio-rh-art" data-visual="bio-rh-art">
    <div class="topic-header-row">
      <h3><span class="section-num">18-25</span> Infertility & Assisted Reproductive Technologies (ART)</h3>
      <span class="subject-pill bio">Clinical Interventions</span>
    </div>
    <table class="study-data-table">
      <thead>
        <tr>
          <th>Technique</th>
          <th>Full Name</th>
          <th>Target Site & Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>IVF</strong></td>
          <td>In Vitro Fertilisation</td>
          <td>Fertilisation outside body in laboratory ("Test-tube baby") followed by ET.</td>
        </tr>
        <tr>
          <td><strong>ZIFT</strong></td>
          <td>Zygote Intra Fallopian Transfer</td>
          <td>Zygote or early embryo up to <strong>8 blastomeres</strong> transferred into <strong>Fallopian Tube</strong>.</td>
        </tr>
        <tr>
          <td><strong>IUT</strong></td>
          <td>Intra Uterine Transfer</td>
          <td>Embryos with <strong>more than 8 blastomeres</strong> transferred into <strong>Uterus</strong>.</td>
        </tr>
        <tr>
          <td><strong>GIFT</strong></td>
          <td>Gamete Intra Fallopian Transfer</td>
          <td>Transfer of collected ovum into <strong>Fallopian Tube</strong> of female who cannot produce one (in vivo fertilisation).</td>
        </tr>
        <tr>
          <td><strong>ICSI</strong></td>
          <td>Intra Cytoplasmic Sperm Injection</td>
          <td>A single sperm is directly injected into the cytoplasm of the ovum in the laboratory.</td>
        </tr>
        <tr>
          <td><strong>AI / IUI</strong></td>
          <td>Intra-Uterine Insemination</td>
          <td>Semen from husband/donor introduced into uterus; used for low sperm count (oligospermia).</td>
        </tr>
      </tbody>
    </table>
  </article>
</div>
'''

def get_zoology_ch3_html():
    return '''
<div id="chapter-bio-zoo3-container" style="display: none;">
  <!-- TOPIC 1 to 3: Origin of Life & Miller-Urey -->
  <article class="study-topic-block" id="sec-bio-evo-origin" data-visual="bio-evo-homology">
    <div class="topic-header-row">
      <h3><span class="section-num">1-3</span> Origin of Life & Miller-Urey Experiment</h3>
      <span class="subject-pill bio">Zoology &bull; Ch. 3</span>
    </div>
    <p class="study-body-text">
      <strong>Oparin-Haldane Theory:</strong> First forms of life originated from pre-existing non-living organic molecules (chemical evolution) preceded by abiogenesis in a reducing atmosphere (without free O₂).
      <br><br>
      <strong>Stanley Miller & Harold Urey Experiment (1953):</strong>
      <br>&bull; Simulated primitive Earth conditions in a closed glass apparatus: <strong>CH₄, NH₃, H₂, H₂O vapour (ratio 2 : 1 : 2)</strong>.
      <br>&bull; High energy spark discharge at <strong>800°C</strong> using tungsten electrodes.
      <br>&bull; <strong>Result:</strong> Observed formation of simple organic compounds including amino acids (<strong>glycine, alanine, aspartic acid</strong>).
      <br>&bull; <em>Crucial NEET fact:</em> Miller's experiment did NOT synthesize living cells; it demonstrated chemical evolution of organic biomolecules from inorganic precursors!
    </p>
  </article>

  <!-- TOPIC 4 to 9: Evidences for Evolution & Homology vs Analogy -->
  <article class="study-topic-block" id="sec-bio-evo-evidences" data-visual="bio-evo-homology">
    <div class="topic-header-row">
      <h3><span class="section-num">4-9</span> Evidences for Evolution & Comparative Anatomy</h3>
      <span class="subject-pill bio">Homology vs Analogy</span>
    </div>
    <table class="study-data-table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Homologous Organs</th>
          <th>Analogous Organs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Basic Anatomy & Origin</strong></td>
          <td>Same basic structure & embryonic origin</td>
          <td>Different structure & origin</td>
        </tr>
        <tr>
          <td><strong>Function</strong></td>
          <td>Different functions adapted to habitats</td>
          <td>Similar functions in similar habitats</td>
        </tr>
        <tr>
          <td><strong>Evolutionary Mode</strong></td>
          <td><strong>DIVERGENT EVOLUTION</strong></td>
          <td><strong>CONVERGENT EVOLUTION</strong></td>
        </tr>
        <tr>
          <td><strong>Animal Examples</strong></td>
          <td>Forelimbs of human, cheetah, whale, bat</td>
          <td>Wings of butterfly & bird; Eye of octopus & mammal</td>
        </tr>
        <tr>
          <td><strong>Plant Examples</strong></td>
          <td>Thorns of <em>Bougainvillea</em> & tendrils of <em>Cucurbita</em></td>
          <td>Sweet potato (root tuber) & potato (stem tuber)</td>
        </tr>
      </tbody>
    </table>
    <p class="study-body-text" style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.5rem;">
      &bull; <strong>Molecular Evidence:</strong> Comparison of proteins (e.g. Cytochrome c) and nucleic acid sequences reveals evolutionary relatedness (greater similarity = closer common ancestry).
    </p>
  </article>

  <!-- TOPIC 10 to 14: Darwin & Adaptive Radiation -->
  <article class="study-topic-block" id="sec-bio-evo-darwin" data-visual="bio-evo-homology">
    <div class="topic-header-row">
      <h3><span class="section-num">10-14</span> Darwinian Natural Selection & Adaptive Radiation</h3>
      <span class="subject-pill bio">Evolutionary Mechanisms</span>
    </div>
    <p class="study-body-text">
      <strong>Charles Darwin (H.M.S. Beagle, 1859):</strong> Proposed natural selection based on overproduction, struggle for existence, variations, and survival of the fittest.
      <br>&bull; <strong>Adaptive Radiation:</strong> Evolutionary divergence of different species starting from a common ancestral stock radiating into diverse ecological niches:
      <br>&nbsp;&nbsp;1. <em>Darwin's Finches:</em> Original seed-eating finch on Galápagos Islands radiated into insectivorous, vegetarian, and cactus-eating beaks.
      <br>&nbsp;&nbsp;2. <em>Australian Marsupials:</em> Common marsupial ancestor diversified into kangaroo, koala, wombat, bandicoot, Tasmanian tiger cat.
      <br>&nbsp;&nbsp;3. <em>Placental Mammals vs Marsupials:</em> Parallel evolution / convergent evolution (e.g. Anteater & Numbat; Flying squirrel & Flying phalanger).
    </p>
  </article>

  <!-- TOPIC 21 to 23: Hardy-Weinberg Principle -->
  <article class="study-topic-block" id="sec-bio-evo-hw" data-visual="bio-evo-hw">
    <div class="topic-header-row">
      <h3><span class="section-num">21-23</span> Hardy-Weinberg Principle & Population Genetics</h3>
      <span class="subject-pill bio">Equilibrium Mathematics</span>
    </div>
    <p class="study-body-text">
      In a large, randomly mating diploid population without evolutionary disturbances, allele frequencies remain constant from generation to generation:
    </p>
    <div class="chemical-equation-box">
      p + q = 1 &nbsp;&nbsp;and&nbsp;&nbsp; p² + 2pq + q² = 1
    </div>
    <p class="study-body-text">
      where <strong>p</strong> = frequency of dominant allele A, <strong>q</strong> = frequency of recessive allele a, <strong>p²</strong> = homozygous dominant (AA), <strong>2pq</strong> = heterozygous (Aa), and <strong>q²</strong> = homozygous recessive (aa).
      <br><br>
      <strong>Five Factors That Disrupt Hardy-Weinberg Equilibrium:</strong>
      <br>1. Gene Migration / Gene Flow (alleles enter/leave via migration).
      <br>2. Genetic Drift (random allele frequency changes in small populations; e.g. <strong>Founder Effect</strong> & <strong>Bottleneck Effect</strong>).
      <br>3. Mutation (creates novel genetic variations).
      <br>4. Genetic Recombination (shuffles alleles during crossing over).
      <br>5. Natural Selection.
    </p>
  </article>

  <!-- TOPIC 24: Types of Natural Selection -->
  <article class="study-topic-block" id="sec-bio-evo-selection" data-visual="bio-evo-hw">
    <div class="topic-header-row">
      <h3><span class="section-num">24</span> Types of Natural Selection</h3>
      <span class="subject-pill bio">Population Curve Shifts</span>
    </div>
    <p class="study-body-text">
      &bull; <strong>Stabilising Selection:</strong> Favours intermediate mean phenotypes; narrows the distribution peak (e.g., human birth weight ~3 kg survives best).
      <br>&bull; <strong>Directional Selection:</strong> Favours one extreme phenotype; shifts peak in one direction (e.g., <strong>Industrial Melanism</strong> in peppered moth <em>Biston betularia</em> — dark melanic moths favoured in soot-covered polluted areas; DDT resistance in mosquitoes).
      <br>&bull; <strong>Disruptive Selection:</strong> Favours both extreme phenotypes; selects against intermediate mean, creating two distinct peaks.
    </p>
  </article>

  <!-- TOPIC 27 to 34: Human Evolution Sequence -->
  <article class="study-topic-block" id="sec-bio-evo-human" data-visual="bio-evo-human">
    <div class="topic-header-row">
      <h3><span class="section-num">27-34</span> Human Evolution Sequence & Cranial Capacities</h3>
      <span class="subject-pill bio">High-Yield NEET Timeline</span>
    </div>
    <div class="chemical-equation-box" style="font-size: 0.88rem; text-align: center;">
      Dryopithecus ⟶ Ramapithecus ⟶ Australopithecines ⟶ Homo habilis ⟶ Homo erectus ⟶ Neanderthal ⟶ Homo sapiens
    </div>
    <table class="study-data-table" style="margin-top: 0.6rem;">
      <thead>
        <tr>
          <th>Hominid Stage</th>
          <th>Time Period</th>
          <th>Cranial Capacity</th>
          <th>Key NCERT Traits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Dryopithecus</strong></td>
          <td>15 mya</td>
          <td>Ape-like</td>
          <td>Hairy, walked like gorillas and chimpanzees.</td>
        </tr>
        <tr>
          <td><strong>Ramapithecus</strong></td>
          <td>15 mya</td>
          <td>Man-like</td>
          <td>More erect and man-like teeth.</td>
        </tr>
        <tr>
          <td><strong>Australopithecines</strong></td>
          <td>2 mya</td>
          <td>~450–500 cc</td>
          <td>East Africa; bipedal locomotion; hunted with stone weapons; fruit-eaters.</td>
        </tr>
        <tr>
          <td><strong>Homo habilis</strong></td>
          <td>2 mya</td>
          <td><strong>650–800 cc</strong></td>
          <td>First human-like hominid ("Handy man"); tool maker; did not eat meat.</td>
        </tr>
        <tr>
          <td><strong>Homo erectus</strong></td>
          <td>1.5 mya</td>
          <td><strong>900 cc</strong></td>
          <td>Java man; upright posture; definitely ate meat; used fire.</td>
        </tr>
        <tr>
          <td><strong>Neanderthal Man</strong></td>
          <td>100,000–40,000 ya</td>
          <td><strong>1400 cc</strong></td>
          <td>Central Asia; used animal hides; buried dead with rituals.</td>
        </tr>
        <tr>
          <td><strong>Homo sapiens</strong></td>
          <td>75,000–10,000 ya</td>
          <td><strong>~1450 cc</strong></td>
          <td>Ice age origin in Africa; cave paintings (Bhimbetka ~18,000 ya); agriculture (10,000 ya).</td>
        </tr>
      </tbody>
    </table>
  </article>
</div>
'''

print("Biology generator module ready.")
