# -*- coding: utf-8 -*-
import json

# Read existing questions from questionsData.js
with open(r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\questionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract JSON
json_start = text.find('[')
json_end = text.rfind(']') + 1
chem_questions = json.loads(text[json_start:json_end])

# Tag all existing questions with subject: 'Chemistry'
for q in chem_questions:
    q['subject'] = 'Chemistry'

# Add NEET High-Yield Biology Questions
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
        "solution": "The Sinoatrial (SA) node is a specialized patch of cardiac nodal musculature located in the upper right corner of the right atrium. It generates rhythmic electrical action potentials at the highest rate (70-75 per minute) and initiates the cardiac cycle. Hence, it is called the natural pacemaker.",
        "formula": "Heart rate = 70-75 impulses/min (SA node rhythmicity)",
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
        "solution": "The descending limb of the loop of Henle is permeable to water but impermeable to electrolytes. As filtrate flows down into the hyperosmotic renal medulla, water leaves by osmosis, concentrating the filtrate up to 1200 mOsm/L. Conversely, the ascending limb is impermeable to water and actively transports NaCl.",
        "formula": "Descending limb: Permeable to H₂O, Impermeable to NaCl",
        "conceptLink": "bio"
    },
    {
        "id": 103,
        "subject": "Biology",
        "year": "2022",
        "topic": "Molecular Basis of Inheritance",
        "difficulty": "Easy",
        "question": "If a double stranded DNA has 20% of cytosine, calculate the percentage of adenine in the DNA:",
        "options": ["20%", "30%", "40%", "60%"],
        "correct": 1,
        "solution": "According to Chargaff's rule:\n• % Guanine = % Cytosine = 20%\n• Total (G + C) = 20% + 20% = 40%\n• Therefore, (A + T) = 100% - 40% = 60%\n• Since % Adenine = % Thymine: % Adenine = 60% / 2 = 30%.",
        "formula": "%A + %T + %G + %C = 100% \\text{ and } %A = %T, %G = %C",
        "conceptLink": "bio"
    },
    {
        "id": 104,
        "subject": "Biology",
        "year": "2021",
        "topic": "Human Physiology - Circulation",
        "difficulty": "Medium",
        "question": "During a cardiac cycle, if cardiac output is 5 L/min and heart rate is 72 beats/min, the stroke volume is approximately:",
        "options": ["50 mL", "70 mL", "90 mL", "100 mL"],
        "correct": 1,
        "solution": "Cardiac Output (CO) = Stroke Volume (SV) × Heart Rate (HR)\nSV = Cardiac Output / Heart Rate\nSV = 5000 mL/min / 72 beats/min ≈ 69.4 mL ≈ 70 mL per beat.",
        "formula": "CO = SV \\times HR",
        "conceptLink": "bio"
    },
    {
        "id": 105,
        "subject": "Biology",
        "year": "2020",
        "topic": "Molecular Basis of Inheritance",
        "difficulty": "Medium",
        "question": "In a complete pitch of B-DNA double helix of length 3.4 nm, the number of base pairs present is:",
        "options": ["10", "12", "20", "5"],
        "correct": 0,
        "solution": "In B-DNA, the helical pitch is 3.4 nm (34 Å), and the distance between adjacent base pairs is 0.34 nm (3.4 Å). Therefore, there are roughly 10 base pairs (bp) in each complete helical turn.",
        "formula": "\\text{Pitch} = 3.4\\text{ nm} = 10\\text{ bp} \\times 0.34\\text{ nm/bp}",
        "conceptLink": "bio"
    }
]

# Add NEET High-Yield Physics Questions
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
        "solution": "Least Count (L.C.) = Pitch / Total number of circular scale divisions\nL.C. = 0.5 mm / 50 = 0.01 mm (or 0.001 cm).",
        "formula": "\\text{Least Count} = \\frac{\\text{Pitch}}{\\text{Circular scale divisions}}",
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
        "solution": "According to Bohr's model of hydrogen atom, the orbital radius rₙ is proportional to the square of principal quantum number n (rₙ ∝ n²).\n• For n = 1: r₁ ∝ 1² = 1\n• For n = 2: r₂ ∝ 2² = 4\nRatio r₂ : r₁ = 4 : 1.",
        "formula": "r_n = 0.529 \\frac{n^2}{Z} \\text{ \\AA} \\implies r_n \\propto n^2",
        "conceptLink": "physics"
    },
    {
        "id": 203,
        "subject": "Physics",
        "year": "2022",
        "topic": "Kinematics - Projectile Motion",
        "difficulty": "Easy",
        "question": "A projectile is thrown with speed u at an angle θ with the horizontal. The angle for which the horizontal range of the projectile is maximum is:",
        "options": ["30°", "45°", "60°", "90°"],
        "correct": 1,
        "solution": "Horizontal Range R = (u² sin 2θ) / g.\nRange is maximum when sin 2θ = 1 ⇒ 2θ = 90° ⇒ θ = 45°.\nR_max = u² / g.",
        "formula": "R = \\frac{u^2 \\sin 2\\theta}{g}",
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
        "solution": "Focal lengths:\n• Convex lens: f₁ = +20 cm = +0.20 m ⇒ Power P₁ = +1 / 0.20 = +5 D\n• Concave lens: f₂ = -25 cm = -0.25 m ⇒ Power P₂ = -1 / 0.25 = -4 D\nTotal combination power P = P₁ + P₂ = +5 D + (-4 D) = +1 D.",
        "formula": "P = P_1 + P_2 = \\frac{1}{f_1} + \\frac{1}{f_2}",
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
        "solution": "Energy in nth orbit of hydrogen atom is given by Eₙ = -13.6 / n² eV.\nFor first excited state, n = 2:\nE₂ = -13.6 / (2)² = -13.6 / 4 = -3.4 eV.",
        "formula": "E_n = -\\frac{13.6}{n^2} \\text{ eV}",
        "conceptLink": "physics"
    }
]

combined_questions = chem_questions + bio_questions + phy_questions

output_js = 'export const NEET_PYQ_QUESTIONS = ' + json.dumps(combined_questions, indent=2, ensure_ascii=False) + ';\n'

with open(r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\questionsData.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print(f'Successfully updated questionsData.js with total {len(combined_questions)} questions (Chem: {len(chem_questions)}, Bio: {len(bio_questions)}, Phy: {len(phy_questions)})')
