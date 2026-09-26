# -*- coding: utf-8 -*-
import json
import re

# Read current questionsData.js
with open(r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\questionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

json_start = text.find('[')
json_end = text.rfind(']') + 1
all_existing = json.loads(text[json_start:json_end])

# Keep the 64 chemistry questions
chem_questions = [q for q in all_existing if q.get('subject') == 'Chemistry' or q['id'] <= 64]
# Ensure exactly 64 chemistry questions
chem_questions = chem_questions[:64]
for q in chem_questions:
    q['subject'] = 'Chemistry'

def clean_latex(s):
    if not s:
        return s
    # Replace common LaTeX constructs with clean unicode
    s = re.sub(r'\\text\{([^}]+)\}', r'\1', s)
    s = re.sub(r'\\mathrm\{([^}]+)\}', r'\1', s)
    s = re.sub(r'\\mathbf\{([^}]+)\}', r'\1', s)
    s = re.sub(r'\\frac\{([^}]+)\}\{([^}]+)\}', r'(\1) / (\2)', s)
    s = s.replace('\\times', '×')
    s = s.replace('\\div', '÷')
    s = s.replace('\\propto', '∝')
    s = s.replace('\\pm', '±')
    s = s.replace('\\approx', '≈')
    s = s.replace('\\sin', 'sin')
    s = s.replace('\\cos', 'cos')
    s = s.replace('\\tan', 'tan')
    s = s.replace('\\theta', 'θ')
    s = s.replace('\\lambda', 'λ')
    s = s.replace('\\mu', 'μ')
    s = s.replace('\\Delta', 'Δ')
    s = s.replace('\\AA', 'Å')
    s = s.replace('\\implies', '⇒')
    s = s.replace('\\right', '')
    s = s.replace('\\left', '')
    s = s.replace('\\,', ' ')
    s = s.replace('\\;', ' ')
    s = s.replace('\\:', ' ')
    s = s.replace('\\!', '')
    s = s.replace('$', '')
    # clean multiple spaces
    s = re.sub(r'\s+', ' ', s).strip()
    return s

for q in chem_questions:
    if 'formula' in q:
        q['formula'] = clean_latex(q['formula'])
    if 'solution' in q:
        # remove stray $ symbols from solution text
        q['solution'] = q['solution'].replace('$', '')
    if 'question' in q:
        q['question'] = q['question'].replace('$', '')

# 10 NEET High-Yield Biology Questions
bio_questions = [
    {
        "id": 101,
        "subject": "Biology",
        "year": "2024",
        "topic": "Human Physiology - Circulation",
        "difficulty": "Easy",
        "question": "Which of the following is known as the natural pacemaker of the human heart?",
        "options": ["Sinoatrial (SA) node", "Atrioventricular (AV) node", "Bundle of His", "Purkinje fibres"],
        "correct": 0,
        "solution": "The Sinoatrial (SA) node is a specialized patch of cardiac nodal musculature located in the upper right corner of the right atrium. It generates rhythmic electrical action potentials at the highest rate (70-75 impulses per minute) and initiates the cardiac cycle. Hence, it is known as the natural pacemaker.",
        "formula": "Heart Rate = 70-75 impulses/min (SA Node Rhythmicity)",
        "conceptLink": "bio"
    },
    {
        "id": 102,
        "subject": "Biology",
        "year": "2023",
        "topic": "Human Physiology - Excretion",
        "difficulty": "Medium",
        "question": "In the human nephron, which part is highly permeable to water but almost impermeable to electrolytes?",
        "options": ["Ascending limb of Henle's loop", "Descending limb of Henle's loop", "Proximal convoluted tubule (PCT)", "Distal convoluted tubule (DCT)"],
        "correct": 1,
        "solution": "The descending limb of Henle's loop is thin and permeable to water, but virtually impermeable to electrolytes. As filtrate flows down into the hyperosmotic medullary interstitium, water leaves by osmosis, concentrating the filtrate up to 1200 mOsm/L.",
        "formula": "Descending limb: Permeable to H₂O, Impermeable to NaCl",
        "conceptLink": "bio"
    },
    {
        "id": 103,
        "subject": "Biology",
        "year": "2022",
        "topic": "Molecular Basis of Inheritance",
        "difficulty": "Easy",
        "question": "If a double stranded DNA has 20% cytosine, calculate the percentage of adenine in the DNA molecule:",
        "options": ["20%", "30%", "40%", "60%"],
        "correct": 1,
        "solution": "According to Chargaff's rules for double-stranded DNA:\n• % Cytosine = % Guanine = 20%\n• Total (C + G) = 20% + 20% = 40%\n• Remaining (A + T) = 100% - 40% = 60%\n• Since % Adenine = % Thymine, % Adenine = 60% / 2 = 30%.",
        "formula": "%A + %T + %G + %C = 100% (A = T, G ≡ C)",
        "conceptLink": "bio"
    },
    {
        "id": 104,
        "subject": "Biology",
        "year": "2021",
        "topic": "Human Physiology - Circulation",
        "difficulty": "Medium",
        "question": "During a cardiac cycle, if cardiac output is 5.0 L/min and heart rate is 72 beats/min, the stroke volume is approximately:",
        "options": ["50 mL", "70 mL", "90 mL", "100 mL"],
        "correct": 1,
        "solution": "Cardiac Output (CO) = Stroke Volume (SV) × Heart Rate (HR)\nStroke Volume (SV) = Cardiac Output / Heart Rate\nSV = 5000 mL/min / 72 beats/min ≈ 69.4 mL ≈ 70 mL per ventricular systole.",
        "formula": "Cardiac Output = Stroke Volume × Heart Rate",
        "conceptLink": "bio"
    },
    {
        "id": 105,
        "subject": "Biology",
        "year": "2020",
        "topic": "Molecular Basis of Inheritance",
        "difficulty": "Medium",
        "question": "In a complete pitch of B-DNA double helix of length 3.4 nm (34 Å), the number of base pairs present is:",
        "options": ["10", "12", "20", "5"],
        "correct": 0,
        "solution": "In standard Watson-Crick B-DNA:\n• The pitch of the helix is 3.4 nm (34 Å).\n• The distance between two successive base pairs is 0.34 nm (3.4 Å).\n• Number of base pairs per turn = 3.4 nm / 0.34 nm = 10 base pairs.",
        "formula": "Helical Pitch = 3.4 nm = 10 bp × 0.34 nm/bp",
        "conceptLink": "bio"
    },
    {
        "id": 106,
        "subject": "Biology",
        "year": "2023",
        "topic": "Cell Cycle & Cell Division",
        "difficulty": "Easy",
        "question": "The crossing over between non-sister chromatids of homologous chromosomes occurs during which stage of Prophase I?",
        "options": ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
        "correct": 2,
        "solution": "Crossing over is an enzyme-mediated process (catalyzed by recombinase) resulting in exchange of genetic material between non-sister chromatids of homologous chromosomes. It occurs characteristically during the Pachytene stage of Prophase I in Meiosis.",
        "formula": "Crossing Over = Pachytene (Enzyme: Recombinase)",
        "conceptLink": "bio"
    },
    {
        "id": 107,
        "subject": "Biology",
        "year": "2022 Re",
        "topic": "Principles of Inheritance",
        "difficulty": "Medium",
        "question": "In a typical Mendelian dihybrid cross involving pea seed shape and color (RrYy × RrYy), the expected phenotypic ratio in F₂ generation is:",
        "options": ["9 : 3 : 3 : 1", "1 : 2 : 1", "3 : 1", "9 : 7"],
        "correct": 0,
        "solution": "Mendel's Law of Independent Assortment states that alleles of two different genes assort independently of each other. In F₂ dihybrid cross (RrYy × RrYy):\n• 9 Round Yellow (R_Y_)\n• 3 Round Green (R_yy)\n• 3 Wrinkled Yellow (rrY_)\n• 1 Wrinkled Green (rryy)\nRatio = 9 : 3 : 3 : 1.",
        "formula": "Dihybrid Phenotypic Ratio = 9 : 3 : 3 : 1",
        "conceptLink": "bio"
    },
    {
        "id": 108,
        "subject": "Biology",
        "year": "2021",
        "topic": "Photosynthesis in Higher Plants",
        "difficulty": "Medium",
        "question": "Which enzyme catalyzes the primary carbon fixation reaction in C3 plants and is the most abundant protein on Earth?",
        "options": ["PEP carboxylase", "RuBisCO", "Carbonic anhydrase", "ATP synthase"],
        "correct": 1,
        "solution": "RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase) is the primary carboxylating enzyme in C3 plants (Calvin Cycle). It fixes CO₂ to RuBP forming 2 molecules of 3-PGA. RuBisCO constitutes roughly 40-50% of leaf soluble protein and is the most abundant enzyme on Earth.",
        "formula": "CO₂ + RuBP → 2 molecules of 3-PGA (catalyzed by RuBisCO)",
        "conceptLink": "bio"
    },
    {
        "id": 109,
        "subject": "Biology",
        "year": "2024",
        "topic": "Human Reproduction",
        "difficulty": "Easy",
        "question": "The surge of which pituitary gonadotropin directly triggers ovulation and the release of secondary oocyte from the Graafian follicle?",
        "options": ["FSH (Follicle Stimulating Hormone)", "LH (Luteinizing Hormone)", "Prolactin", "Oxytocin"],
        "correct": 1,
        "solution": "Around the midpoint of the menstrual cycle (day 14), high estrogen levels exert positive feedback on the pituitary, causing rapid secretion of LH known as the 'LH Surge'. This maximum level of LH induces the rupture of the mature Graafian follicle and causes ovulation.",
        "formula": "LH Surge (Day 14) → Ovulation & Corpus Luteum Formation",
        "conceptLink": "bio"
    },
    {
        "id": 110,
        "subject": "Biology",
        "year": "2020",
        "topic": "Chemical Coordination & Integration",
        "difficulty": "Easy",
        "question": "Which hormone is secreted by the beta cells of the Islets of Langerhans to decrease blood glucose level?",
        "options": ["Glucagon", "Insulin", "Somatostatin", "Epinephrine"],
        "correct": 1,
        "solution": "Insulin is a peptide hormone secreted by the β-cells of the pancreatic islets. It acts primarily on hepatocytes and adipocytes to enhance cellular glucose uptake and utilization, and stimulates glycogenesis, thereby lowering blood glucose levels (hypoglycemic hormone).",
        "formula": "Insulin: Promotes Cellular Glucose Uptake & Glycogenesis",
        "conceptLink": "bio"
    }
]

# 10 NEET High-Yield Physics Questions
phy_questions = [
    {
        "id": 201,
        "subject": "Physics",
        "year": "2024",
        "topic": "Units, Measurements & Errors",
        "difficulty": "Easy",
        "question": "A student measures the diameter of a wire using a screw gauge with pitch 0.5 mm and 50 circular scale divisions. The least count of the screw gauge is:",
        "options": ["0.01 mm", "0.001 mm", "0.05 mm", "0.1 mm"],
        "correct": 0,
        "solution": "Least Count (L.C.) = Pitch / Total number of circular scale divisions\nL.C. = 0.5 mm / 50 = 0.01 mm = 0.001 cm.",
        "formula": "Least Count = Pitch / Circular Scale Divisions",
        "conceptLink": "physics"
    },
    {
        "id": 202,
        "subject": "Physics",
        "year": "2023",
        "topic": "Modern Physics - Bohr Model",
        "difficulty": "Medium",
        "question": "The ratio of the radius of the 2nd Bohr orbit to the 1st Bohr orbit in a hydrogen atom is:",
        "options": ["2 : 1", "4 : 1", "8 : 1", "1 : 2"],
        "correct": 1,
        "solution": "According to Bohr's model of the hydrogen atom, the orbital radius rₙ is proportional to n² (rₙ ∝ n²).\n• For n = 1: r₁ ∝ 1² = 1\n• For n = 2: r₂ ∝ 2² = 4\nRatio r₂ : r₁ = 4 : 1.",
        "formula": "rₙ = 0.529 (n² / Z) Å ⇒ rₙ ∝ n²",
        "conceptLink": "physics"
    },
    {
        "id": 203,
        "subject": "Physics",
        "year": "2022",
        "topic": "Kinematics - Projectile Motion",
        "difficulty": "Easy",
        "question": "A projectile is thrown with initial speed u at an angle θ with the horizontal. The angle θ for which the horizontal range is maximum is:",
        "options": ["30°", "45°", "60°", "90°"],
        "correct": 1,
        "solution": "Horizontal Range R = (u² sin 2θ) / g.\nRange R is maximum when sin 2θ is maximum (= 1):\n2θ = 90° ⇒ θ = 45°.\nR_max = u² / g.",
        "formula": "R = (u² sin 2θ) / g ⇒ R_max at θ = 45°",
        "conceptLink": "physics"
    },
    {
        "id": 204,
        "subject": "Physics",
        "year": "2021",
        "topic": "Ray Optics",
        "difficulty": "Medium",
        "question": "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 25 cm. The optical power of the combination is:",
        "options": ["+1 D", "-1 D", "+9 D", "-9 D"],
        "correct": 0,
        "solution": "Focal lengths of lenses in contact:\n• Convex lens: f₁ = +20 cm = +0.20 m ⇒ Power P₁ = +1 / 0.20 = +5 D\n• Concave lens: f₂ = -25 cm = -0.25 m ⇒ Power P₂ = -1 / 0.25 = -4 D\nTotal combination power P = P₁ + P₂ = +5 D + (-4 D) = +1 D.",
        "formula": "P = P₁ + P₂ = (1 / f₁) + (1 / f₂)",
        "conceptLink": "physics"
    },
    {
        "id": 205,
        "subject": "Physics",
        "year": "2020",
        "topic": "Modern Physics - Atoms",
        "difficulty": "Medium",
        "question": "The energy of the electron in the ground state of hydrogen atom is -13.6 eV. The energy of the first excited state (n = 2) is:",
        "options": ["-3.4 eV", "-6.8 eV", "-1.51 eV", "-27.2 eV"],
        "correct": 0,
        "solution": "Energy in the nth stationary orbit of hydrogen atom is:\nEₙ = -13.6 / n² eV.\nFor the first excited state (n = 2):\nE₂ = -13.6 / (2)² = -13.6 / 4 = -3.4 eV.",
        "formula": "Eₙ = -13.6 / n² eV",
        "conceptLink": "physics"
    },
    {
        "id": 206,
        "subject": "Physics",
        "year": "2024",
        "topic": "Current Electricity",
        "difficulty": "Medium",
        "question": "A wire of resistance R is stretched uniformly such that its length is doubled while mass remains constant. The new resistance of the wire will be:",
        "options": ["2R", "4R", "R/2", "R/4"],
        "correct": 1,
        "solution": "When wire is stretched, volume V = A × L remains constant. If length doubles (L' = 2L), area halves (A' = A/2).\nResistance R = ρ L / A.\nNew resistance R' = ρ (2L) / (A/2) = 4 (ρ L / A) = 4R.",
        "formula": "R ∝ L² (when volume is conserved upon stretching)",
        "conceptLink": "physics"
    },
    {
        "id": 207,
        "subject": "Physics",
        "year": "2023",
        "topic": "Thermodynamics",
        "difficulty": "Easy",
        "question": "An ideal Carnot engine operates between source temperature 500 K and sink temperature 300 K. Its efficiency is:",
        "options": ["40%", "60%", "20%", "50%"],
        "correct": 0,
        "solution": "Efficiency of a Carnot heat engine η = 1 - (T_sink / T_source)\nη = 1 - (300 / 500) = 1 - 0.60 = 0.40 = 40%.",
        "formula": "Efficiency η = 1 - (T₂ / T₁)",
        "conceptLink": "physics"
    },
    {
        "id": 208,
        "subject": "Physics",
        "year": "2022",
        "topic": "Electrostatics & Capacitance",
        "difficulty": "Medium",
        "question": "A parallel plate air capacitor has capacitance C. If a dielectric slab of dielectric constant K = 5 is inserted filling the space completely, the new capacitance is:",
        "options": ["C / 5", "5 C", "C + 5", "25 C"],
        "correct": 1,
        "solution": "The capacitance of a parallel plate capacitor with dielectric medium is C' = K × C₀.\nWith dielectric constant K = 5 completely filling the gap, C' = 5 C.",
        "formula": "C = K × C₀ = (K ε₀ A) / d",
        "conceptLink": "physics"
    },
    {
        "id": 209,
        "subject": "Physics",
        "year": "2021",
        "topic": "Dual Nature of Matter & Radiation",
        "difficulty": "Easy",
        "question": "The de Broglie wavelength λ associated with a particle of mass m moving with velocity v and momentum p is:",
        "options": ["λ = h / p", "λ = p / h", "λ = h p", "λ = m v / h"],
        "correct": 0,
        "solution": "According to de Broglie's wave-particle hypothesis, every moving particle exhibits wave properties with de Broglie wavelength λ = h / p = h / (m v), where h is Planck's constant.",
        "formula": "λ = h / p = h / (m v)",
        "conceptLink": "physics"
    },
    {
        "id": 210,
        "subject": "Physics",
        "year": "2020",
        "topic": "Wave Optics",
        "difficulty": "Medium",
        "question": "In Young's double slit experiment, if the distance between slits is halved and distance to the screen is doubled, the fringe width becomes:",
        "options": ["Doubled", "Four times", "Halved", "Unchanged"],
        "correct": 1,
        "solution": "Fringe width in YDSE is β = (λ D) / d.\nNew distance to screen D' = 2D.\nNew slit separation d' = d / 2.\nNew fringe width β' = (λ × 2D) / (d / 2) = 4 (λ D / d) = 4 β (four times).",
        "formula": "Fringe Width β = (λ D) / d",
        "conceptLink": "physics"
    }
]

combined = chem_questions + bio_questions + phy_questions
print(f"Total questions: {len(combined)} (Chem: {len(chem_questions)}, Bio: {len(bio_questions)}, Phy: {len(phy_questions)})")

out_text = "export const NEET_PYQ_QUESTIONS = " + json.dumps(combined, indent=2, ensure_ascii=False) + ";\n"

with open(r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\questionsData.js', 'w', encoding='utf-8') as f:
    f.write(out_text)

print("questionsData.js successfully cleaned and updated!")
