export const NEET_PYQ_QUESTIONS = [
  {
    "id": 1,
    "year": "2022 Re",
    "topic": "Significant Figures",
    "difficulty": "Medium",
    "question": "The density of the solution is 2.15 g mL⁻¹, then mass of 2.5 mL solution in correct significant figures is:",
    "options": [
      "53.75 g",
      "5375 × 10⁻³ g",
      "5.4 g",
      "5.38 g"
    ],
    "correct": 2,
    "solution": "Mass = Density × Volume = 2.15 g mL⁻¹ × 2.5 mL = 5.375 g.\n\nRule for multiplication: The result must have the same number of significant figures as the term with least significant figures.\n• 2.15 has 3 significant figures\n• 2.5 has 2 significant figures\n\nTherefore, the answer must have 2 significant figures. Rounding off 5.375 to 2 significant figures gives 5.4 g (as digit to drop is 7 > 5, 3 is rounded up to 4).",
    "formula": "Mass = Density × Volume",
    "conceptLink": "sigfigs",
    "subject": "Chemistry"
  },
  {
    "id": 2,
    "year": "2014",
    "topic": "Avogadro's Law & Gas Volumes",
    "difficulty": "Medium",
    "question": "Equal masses of H₂, O₂ and methane have been taken in a container of volume V at temperature 27°C in identical conditions. The ratio of the volumes of gases H₂ : O₂ : methane would be:",
    "options": [
      "8 : 16 : 1",
      "16 : 8 : 1",
      "16 : 1 : 2",
      "8 : 1 : 2"
    ],
    "correct": 2,
    "solution": "Let mass of each gas be w grams.\n• Moles of H₂ (n₁) = w / 2\n• Moles of O₂ (n₂) = w / 32\n• Moles of CH₄ (n₃) = w / 16\n\nAccording to Avogadro's law, at constant temperature and pressure, volume is directly proportional to number of moles (V ∝ n):\nV(H₂) : V(O₂) : V(CH₄) = (w/2) : (w/32) : (w/16)\nMultiplying throughout by 32/w gives:\n16 : 1 : 2.",
    "formula": "V_1 : V_2 : V_3 = n_1 : n_2 : n_3",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 3,
    "year": "1998",
    "topic": "Significant Figures",
    "difficulty": "Easy",
    "question": "Given the numbers, 161 cm, 0.161 cm, 0.0161 cm. The number of significant figures for the three numbers is:",
    "options": [
      "3, 4 and 5, respectively",
      "3, 4 and 4, respectively",
      "3, 3 and 4, respectively",
      "3, 3 and 3, respectively"
    ],
    "correct": 3,
    "solution": "1. 161 cm: All non-zero digits are significant → 3 significant figures.\n2. 0.161 cm: Leading zeros before non-zero digits are not significant → 3 significant figures.\n3. 0.0161 cm: Leading zeros only indicate the position of decimal point and are not significant → 3 significant figures.\n\nHence, all three numbers have 3 significant figures.",
    "formula": "Leading zeros are never significant",
    "conceptLink": "sigfigs",
    "subject": "Chemistry"
  },
  {
    "id": 4,
    "year": "1990",
    "topic": "Avogadro's Law & Gas Volumes",
    "difficulty": "Easy",
    "question": "The molecular weight of O₂ and SO₂ are 32 and 64 respectively. At 15°C and 150 mm Hg pressure, one litre of O₂ contains 'N' molecules. The number of molecules in two litres of SO₂ under the same conditions of temperature and pressure will be:",
    "options": [
      "N/2",
      "N",
      "2 N",
      "4 N"
    ],
    "correct": 2,
    "solution": "Avogadro's Hypothesis states: Equal volumes of all gases under the same conditions of temperature and pressure contain equal numbers of molecules.\n• 1 L of O₂ contains N molecules.\n• Under identical T and P, 1 L of SO₂ will also contain N molecules.\n• Therefore, 2 L of SO₂ will contain 2N molecules.",
    "formula": "N ∝ V (Avogadro's Hypothesis)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 5,
    "year": "2016",
    "topic": "Atomic & Molecular Masses",
    "difficulty": "Medium",
    "question": "Suppose the elements X and Y combine to form two compounds XY₂ and X₃Y₂. When 0.1 mole of XY₂ weighs 10 g and 0.05 mole of X₃Y₂ weighs 9 g, the atomic weights of X and Y are:",
    "options": [
      "20, 30",
      "30, 20",
      "40, 30",
      "60, 40"
    ],
    "correct": 2,
    "solution": "Let atomic weights of X and Y be x and y.\n• Molar mass of XY₂ = 10 g / 0.1 mol = 100 g mol⁻¹\n  x + 2y = 100  ... (Equation 1)\n• Molar mass of X₃Y₂ = 9 g / 0.05 mol = 180 g mol⁻¹\n  3x + 2y = 180 ... (Equation 2)\n\nSubtract Equation 1 from Equation 2:\n2x = 80 ⇒ x = 40\nSubstitute x = 40 into Equation 1:\n40 + 2y = 100 ⇒ 2y = 60 ⇒ y = 30.\n\nHence, atomic weight of X = 40, Y = 30.",
    "formula": "Molar mass = (mass (g)) / (moles (n))",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 6,
    "year": "2007",
    "topic": "Average Atomic Mass & Isotopes",
    "difficulty": "Easy",
    "question": "An element X, has the following isotopic composition: ²⁰⁰X : 90%, ¹⁹⁹X : 8.0%, ²⁰²X : 2.0%. The weighed average atomic mass of the naturally occurring element X is closest to:",
    "options": [
      "201 amu",
      "202 amu",
      "199 amu",
      "200 amu"
    ],
    "correct": 3,
    "solution": "Average atomic mass = Σ(% abundance × isotopic mass) / 100\n= [(90 × 200) + (8.0 × 199) + (2.0 × 202)] / 100\n= [18000 + 1592 + 404] / 100\n= 19996 / 100 = 199.96 amu ≈ 200 amu.",
    "formula": "A_{avg} = (\\sum (\\%_i × A_i)) / (100)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 7,
    "year": "1996",
    "topic": "Vapour Density & Gas Laws",
    "difficulty": "Medium",
    "question": "0.24 g of a volatile gas, upon vaporisation, gives 45 mL vapour at NTP. What will be the vapour density of the substance? (Density of H₂ = 0.089 g/L):",
    "options": [
      "95.93",
      "59.93",
      "95.39",
      "5.993"
    ],
    "correct": 1,
    "solution": "Vapour Density = (Mass of 45 mL of gas at NTP) / (Mass of 45 mL of H₂ at NTP)\n\nMass of 45 mL of gas = 0.24 g\nMass of 45 mL of H₂ = (45 / 1000) L × 0.089 g/L = 0.004005 g\n\nVapour Density = 0.24 / 0.004005 ≈ 59.925 ≈ 59.93.",
    "formula": "V.D. = (Mass of V mL gas) / (Mass of V mL H_2)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 8,
    "year": "1990",
    "topic": "Average Atomic Mass & Isotopes",
    "difficulty": "Easy",
    "question": "Boron has two stable isotopes, ¹⁰B (19%) and ¹¹B (81%). Calculate average atomic weight of boron in the periodic table:",
    "options": [
      "10.80",
      "10.2",
      "11.2",
      "10.0"
    ],
    "correct": 0,
    "solution": "Average atomic weight = [(19 × 10) + (81 × 11)] / 100\n= (190 + 891) / 100\n= 1081 / 100 = 10.81 amu ≈ 10.80.",
    "formula": "A_{avg} = (\\sum f_i A_i) / (100)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 9,
    "year": "2024 Re",
    "topic": "Mole Concept & Molecules",
    "difficulty": "Medium",
    "question": "1.0 g of H₂ has same number of molecules as in:",
    "options": [
      "14 g of N₂",
      "18 g of H₂O",
      "16 g of CO",
      "28 g of N₂"
    ],
    "correct": 0,
    "solution": "Moles of H₂ = 1.0 g / 2.0 g mol⁻¹ = 0.5 mol.\nNumber of molecules = 0.5 N_A.\n\nNow check moles in the options:\na. 14 g N₂: n = 14 / 28 = 0.5 mol (Same!)\nb. 18 g H₂O: n = 18 / 18 = 1.0 mol\nc. 16 g CO: n = 16 / 28 = 0.57 mol\nd. 28 g N₂: n = 28 / 28 = 1.0 mol\n\nSince 14 g of N₂ contains 0.5 mol, it contains the exact same number of molecules as 1.0 g of H₂.",
    "formula": "n = (w) / (M)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 10,
    "year": "2024",
    "topic": "Mole Concept & Avogadro Number",
    "difficulty": "Medium",
    "question": "The highest number of helium atoms is in:",
    "options": [
      "4 g of helium",
      "2.271098 L of helium at STP",
      "4 mol of helium",
      "4 u of helium"
    ],
    "correct": 2,
    "solution": "Compare number of atoms:\na. 4 g He = 4 / 4 = 1 mol = 1 N_A atoms ≈ 6.022 × 10²³ atoms\nb. 2.271098 L at STP (1 bar, 273.15 K; molar volume = 22.71 L) = 2.271 / 22.71 = 0.1 mol = 0.1 N_A atoms\nc. 4 mol of He = 4 × N_A atoms ≈ 2.409 × 10²⁴ atoms (Highest!)\nd. 4 u of He = exactly 1 atom of He (as atomic mass of 1 He atom is 4 u)\n\nTherefore, 4 mol of helium has the highest number of atoms.",
    "formula": "Number of atoms = n × N_A",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 11,
    "year": "2020",
    "topic": "Mole Concept & Atoms",
    "difficulty": "Medium",
    "question": "Which one of the followings has maximum number of atoms? [MR*]",
    "options": [
      "1 g of Mg(s) [Atomic mass = 24]",
      "1 g of O₂(g) [Atomic mass of O = 16]",
      "1 g of Li(s) [Atomic mass of Li = 7]",
      "1 g of Ag(s) [Atomic mass of Ag = 108]"
    ],
    "correct": 2,
    "solution": "Number of atoms = (Mass / Atomic Mass) × N_A\n• For 1 g Mg: (1/24) × N_A ≈ 0.0416 N_A\n• For 1 g O₂: (1/32) × 2 × N_A = (1/16) × N_A ≈ 0.0625 N_A\n• For 1 g Li: (1/7) × N_A ≈ 0.1428 N_A (Maximum!)\n• For 1 g Ag: (1/108) × N_A ≈ 0.0092 N_A\n\n1 g of Li contains the lowest atomic mass element, yielding the highest number of atoms.",
    "formula": "Atoms = (w) / (A) × N_A",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 12,
    "year": "2020-Covid",
    "topic": "Avogadro's Number",
    "difficulty": "Easy",
    "question": "One mole of carbon atom weighs 12g, the number of atoms in it is equal to. (Mass of carbon-12 is 1.9926 × 10⁻²³ g)",
    "options": [
      "6.022 × 10²²",
      "12 × 10²²",
      "6.022 × 10²³",
      "12 × 10²³"
    ],
    "correct": 2,
    "solution": "Number of atoms in 1 mole = Mass of 1 mole / Mass of one ¹²C atom\n= 12 g / (1.9926 × 10⁻²³ g)\n= 6.022 × 10²³ atoms (Avogadro's constant, N_A).",
    "formula": "N_A = (12 g) / (1.9926 × 10^{-23) g} = 6.022 × 10^{23}",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 13,
    "year": "2018",
    "topic": "Mole Concept & Water",
    "difficulty": "Medium",
    "question": "In which case is number of molecules of water maximum? [MR*]",
    "options": [
      "18 mL of water",
      "0.18 g of water",
      "10⁻³ mol of water",
      "0.00224 L of water vapours at 1 atm and 273 K"
    ],
    "correct": 0,
    "solution": "Calculate moles of water in each case (Density of liquid water = 1 g/mL):\na. 18 mL water = 18 g = 18 / 18 = 1 mole = 6.022 × 10²³ molecules (Maximum!)\nb. 0.18 g water = 0.18 / 18 = 0.01 mole\nc. 10⁻³ mol water = 0.001 mole\nd. 0.00224 L vapour at STP = 0.00224 / 22.4 = 10⁻⁴ mole\n\nTherefore, 18 mL of liquid water has the maximum molecules.",
    "formula": "Mass = Volume × Density",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 14,
    "year": "2015",
    "topic": "Molar Ratio & Gas Mixtures",
    "difficulty": "Medium",
    "question": "A mixture of gases contains H₂ and O₂ gases in the ratio of 1 : 4 (w/w). What is the molar ratio of the two gases in the mixture?",
    "options": [
      "16 : 1",
      "2 : 1",
      "1 : 4",
      "4 : 1"
    ],
    "correct": 3,
    "solution": "Given weight ratio w(H₂) : w(O₂) = 1 : 4.\nMoles of H₂ = w(H₂) / 2\nMoles of O₂ = w(O₂) / 32\n\nMolar ratio n(H₂) : n(O₂) = (1 / 2) : (4 / 32) = (1 / 2) : (1 / 8)\nMultiply by 8:\n4 : 1.",
    "formula": "(n_1) / (n_2) = (w_1 / M_1) / (w_2 / M_2)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 15,
    "year": "2015 Re",
    "topic": "Mole Concept & Molecules",
    "difficulty": "Easy",
    "question": "The number of water molecules is maximum in:",
    "options": [
      "18 moles of water",
      "18 molecules of water",
      "1.8 gram of water",
      "18 gram of water"
    ],
    "correct": 0,
    "solution": "• 18 moles of water = 18 × 6.022 × 10²³ ≈ 1.08 × 10²⁵ molecules.\n• 18 molecules = only 18 molecules.\n• 1.8 g = (1.8/18) = 0.1 mol = 0.1 N_A molecules.\n• 18 g = (18/18) = 1 mol = 1 N_A molecules.\n\nHence, 18 moles of water contains by far the maximum number of molecules.",
    "formula": "Molecules = n × N_A",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 16,
    "year": "2015 Re",
    "topic": "Definition of Mole & Avogadro Constant",
    "difficulty": "Hard",
    "question": "If Avogadro number N_A is changed from 6.022 × 10²³ mol⁻¹ to 6.022 × 10²⁰ mol⁻¹, this would change:",
    "options": [
      "The ratio of elements to each other in a compound",
      "The definition of mass in units of grams",
      "The mass of one mole of carbon",
      "The ratio of chemical species to each other in a balanced equation"
    ],
    "correct": 2,
    "solution": "1 mole of carbon is defined as the mass of N_A atoms of carbon. \nIf N_A is changed from 6.022 × 10²³ to 6.022 × 10²⁰ (a factor of 1000 smaller), the mass of 1 mole of carbon would become 12 × 10⁻³ g instead of 12 g.\n\nStoichiometric ratios and the physical definition of 1 gram remain fundamentally unchanged.",
    "formula": "Mass of 1 mole = N_A × mass of 1 atom",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 17,
    "year": "2011 Mains",
    "topic": "Mole Concept & Molecules",
    "difficulty": "Medium",
    "question": "Which has the maximum number of molecules among the following?",
    "options": [
      "8 g H₂",
      "64 g SO₂",
      "44 g CO₂",
      "48 g O₃"
    ],
    "correct": 0,
    "solution": "Moles = Mass / Molar mass:\n• 8 g H₂: n = 8 / 2 = 4 moles (Maximum!)\n• 64 g SO₂: n = 64 / 64 = 1 mole\n• 44 g CO₂: n = 44 / 44 = 1 mole\n• 48 g O₃: n = 48 / 48 = 1 mole\n\nSince number of molecules is directly proportional to number of moles, 8 g H₂ has 4 N_A molecules.",
    "formula": "n = (w) / (M)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 18,
    "year": "2010 Pre",
    "topic": "Atomicity & Moles",
    "difficulty": "Easy",
    "question": "The number of atoms in 0.1 mol of a triatomic gas is: (N_A = 6.02 × 10²³ mol⁻¹)",
    "options": [
      "1.800 × 10²²",
      "6.026 × 10²²",
      "1.806 × 10²³",
      "3.600 × 10²³"
    ],
    "correct": 2,
    "solution": "A triatomic gas molecule contains 3 atoms (e.g. O₃, CO₂, H₂O).\nTotal number of atoms = Moles × Atomicity × N_A\n= 0.1 mol × 3 × (6.02 × 10²³ mol⁻¹)\n= 1.806 × 10²³ atoms.",
    "formula": "Total Atoms = n × atomicity × N_A",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 19,
    "year": "2004",
    "topic": "Mole Concept & Gas Volumes",
    "difficulty": "Medium",
    "question": "The maximum number of molecules is present in: [MR*]",
    "options": [
      "5 L of N₂ gas at STP",
      "0.5 g of H₂ gas",
      "10 g of O₂ gas",
      "15 L of H₂ gas at STP"
    ],
    "correct": 3,
    "solution": "Compare moles:\na. 5 L N₂ at STP = 5 / 22.4 = 0.223 mol\nb. 0.5 g H₂ = 0.5 / 2 = 0.25 mol\nc. 10 g O₂ = 10 / 32 = 0.3125 mol\nd. 15 L H₂ at STP = 15 / 22.4 = 0.6696 mol (Maximum!)\n\n15 L of H₂ gas at STP corresponds to the highest number of moles and hence the maximum number of molecules.",
    "formula": "n = (V (STP)) / (22.4 L)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 20,
    "year": "2002",
    "topic": "Mole Concept & Molecules",
    "difficulty": "Easy",
    "question": "Which has maximum molecules?",
    "options": [
      "7 g N₂",
      "2 g H₂",
      "16 g NO₂",
      "16 g O₂"
    ],
    "correct": 1,
    "solution": "• 7 g N₂: n = 7 / 28 = 0.25 mol\n• 2 g H₂: n = 2 / 2 = 1.0 mol (Maximum!)\n• 16 g NO₂: n = 16 / 46 = 0.348 mol\n• 16 g O₂: n = 16 / 32 = 0.5 mol\n\n2 g H₂ has 1.0 mole = 6.022 × 10²³ molecules.",
    "formula": "n = (w) / (M)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 21,
    "year": "2001",
    "topic": "Specific Volume & Molecular Weight",
    "difficulty": "Hard",
    "question": "Specific Volume of cylindrical virus particle is 6.02 × 10⁻² cc/g, whose radius and length are 7 Å and 10 Å respectively. If N_A = 6.02 × 10²³. Find molecular weight of virus:",
    "options": [
      "15.4 kg/mol",
      "1.54 × 10⁴ kg/mol",
      "3.08 × 10⁴ kg/mol",
      "3.08 × 10³ kg/mol"
    ],
    "correct": 0,
    "solution": "Radius r = 7 Å = 7 × 10⁻⁸ cm, Length h = 10 Å = 10 × 10⁻⁸ cm.\nVolume of 1 cylindrical virus particle = π r² h\n= (22/7) × (7 × 10⁻⁸)² × (10 × 10⁻⁸)\n= (22/7) × 49 × 10⁻¹⁶ × 10⁻⁷ = 154 × 10⁻²³ cm³ (cc).\n\nMass of 1 virus particle = Volume / Specific volume\n= (154 × 10⁻²³ cc) / (6.02 × 10⁻² cc/g) = (154 / 6.02) × 10⁻²¹ g.\n\nMolecular weight (mass of 1 mole) = Mass of 1 particle × N_A\n= [(154 / 6.02) × 10⁻²¹ g] × (6.02 × 10²³ mol⁻¹)\n= 154 × 10² g/mol = 15400 g/mol = 15.4 kg/mol.",
    "formula": "Molar Mass = ((V) / (Specific Volume)) × N_A",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 22,
    "year": "1999",
    "topic": "Mole Concept & Atoms",
    "difficulty": "Medium",
    "question": "The number of atoms in 4.25 g of NH₃ is approximately:",
    "options": [
      "4 × 10²³",
      "2 × 10²³",
      "1 × 10²³",
      "6 × 10²³"
    ],
    "correct": 3,
    "solution": "Molar mass of NH₃ = 14 + 3 = 17 g mol⁻¹.\nMoles of NH₃ = 4.25 / 17 = 0.25 mol.\n1 molecule of NH₃ has 4 atoms (1 N + 3 H).\nTotal atoms = 0.25 mol × 4 × (6.022 × 10²³ mol⁻¹)\n= 1.0 × 6.022 × 10²³ ≈ 6 × 10²³ atoms.",
    "formula": "Atoms = n × 4 × N_A",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 23,
    "year": "1998",
    "topic": "Percentage Composition & Biomolecules",
    "difficulty": "Medium",
    "question": "Haemoglobin contains 0.334% of iron by weight. The molecular weight of haemoglobin is approximately 67200. The number of iron atoms (Atomic weight of Fe is 56) present in one molecule of haemoglobin is:",
    "options": [
      "4",
      "6",
      "3",
      "2"
    ],
    "correct": 0,
    "solution": "Mass of iron in 1 mole of haemoglobin = 67200 × (0.334 / 100) = 224.448 g.\nNumber of Fe atoms = 224.448 / 56 = 4.008 ≈ 4.",
    "formula": "n = (MW × \\%Fe) / (100 × A_{Fe)}",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 24,
    "year": "1995",
    "topic": "Mole Concept & Air Composition",
    "difficulty": "Medium",
    "question": "The number of moles of oxygen in one litre of air containing 21% oxygen by volume, under standard conditions, is: [MR*]",
    "options": [
      "0.0093 mol",
      "2.10 mol",
      "0.186 mol",
      "0.21 mol"
    ],
    "correct": 0,
    "solution": "Volume of O₂ in 1 L air = 21% of 1000 mL = 0.21 L.\nMoles of O₂ at STP = Volume in L / 22.4 L mol⁻¹\n= 0.21 / 22.4 ≈ 0.009375 mol ≈ 0.0093 mol.",
    "formula": "n = \\frac{V_{gas}}{22.4}",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 25,
    "year": "1994",
    "topic": "Valence Electrons & Ions",
    "difficulty": "Hard",
    "question": "The total number of valence electrons in 4.2 g of N₃⁻ ion is (N_A is the Avogadro's number):",
    "options": [
      "2.1 N_A",
      "4.2 N_A",
      "1.6 N_A",
      "3.2 N_A"
    ],
    "correct": 2,
    "solution": "Molar mass of azide ion (N₃⁻) = 3 × 14 = 42 g mol⁻¹.\nMoles of N₃⁻ = 4.2 g / 42 g mol⁻¹ = 0.1 mol.\nValence electrons in N₃⁻: 3 nitrogen atoms contribute (3 × 5) = 15 electrons, plus 1 extra electron from negative charge = 16 valence electrons.\nTotal valence electrons = 0.1 mol × 16 × N_A = 1.6 N_A.",
    "formula": "Total valence e^- = n × 16 × N_A",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 26,
    "year": "1990",
    "topic": "Gram Molecules & Mole Concept",
    "difficulty": "Medium",
    "question": "The number of gram molecules of oxygen in 6.02 × 10²⁴ CO molecules is:",
    "options": [
      "10 g molecules",
      "5 g molecules",
      "1 g molecules",
      "0.5 g molecules"
    ],
    "correct": 1,
    "solution": "'Gram molecule' is another term for 'mole of molecules'.\nMoles of CO molecules = (6.02 × 10²⁴) / (6.02 × 10²³) = 10 moles of CO.\n1 mole of CO contains 1 mole of oxygen atoms (10 moles of O atoms total).\nSince 1 molecule of oxygen gas (O₂) has 2 oxygen atoms:\nMoles of O₂ molecules (gram molecules of O₂) = 10 / 2 = 5 gram molecules.",
    "formula": "moles of O_2 = (moles of O atoms) / (2)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 27,
    "year": "1989",
    "topic": "Gas Laws & Atomicity",
    "difficulty": "Medium",
    "question": "Ratio of C_p and C_v of a gas 'X' is 1.4. The number of atoms of the gas 'X' present in 11.2 litres of it at NTP will be:",
    "options": [
      "6.02 × 10²³",
      "1.2 × 10²³",
      "3.01 × 10²³",
      "2.01 × 10²³"
    ],
    "correct": 0,
    "solution": "γ = C_p / C_v = 1.4 indicates that gas X is diatomic (e.g., O₂, N₂, H₂), meaning each molecule has 2 atoms.\nMoles of gas at NTP = 11.2 L / 22.4 L mol⁻¹ = 0.5 mol.\nNumber of molecules = 0.5 × N_A.\nNumber of atoms = 0.5 × 2 × N_A = 1.0 × N_A = 6.02 × 10²³ atoms.",
    "formula": "\\gamma = 1.4 ⇒ atomicity = 2",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 28,
    "year": "1989",
    "topic": "Mole Concept & Atoms",
    "difficulty": "Easy",
    "question": "The number of oxygen atoms in 4.4 g of CO₂ is:",
    "options": [
      "1.2 × 10²³",
      "6 × 10²²",
      "6 × 10²³",
      "12 × 10²³"
    ],
    "correct": 0,
    "solution": "Molar mass of CO₂ = 12 + 32 = 44 g mol⁻¹.\nMoles of CO₂ = 4.4 / 44 = 0.1 mol.\nEach CO₂ molecule has 2 oxygen atoms.\nNumber of O atoms = 0.1 mol × 2 × (6.022 × 10²³ mol⁻¹)\n= 0.2 × 6.022 × 10²³ ≈ 1.2 × 10²³ atoms.",
    "formula": "Atoms = n × 2 × N_A",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 29,
    "year": "1988",
    "topic": "Mole Concept & Subatomic Particles",
    "difficulty": "Hard",
    "question": "1 c.c. N₂O at NTP contains: [MR*]",
    "options": [
      "(1.8 / 224) × 10²² atoms",
      "(6.02 / 22400) × 10²³ molecules",
      "(1.32 / 224) × 10²³ electrons",
      "All the above"
    ],
    "correct": 3,
    "solution": "1 c.c. = 1 mL. At NTP, molar volume = 22400 mL.\nMoles of N₂O = 1 / 22400 mol.\n• Molecules = (1 / 22400) × 6.02 × 10²³ = (6.02 / 22400) × 10²³ (Option b is correct).\n• Atoms: N₂O has 3 atoms. Total atoms = 3 × (6.02 × 10²³ / 22400) = (18.06 / 22400) × 10²³ = (1.8 / 224) × 10²² (Option a is correct).\n• Electrons: Total electrons in N₂O = (2 × 7) + 8 = 22 electrons. Total electrons = 22 × (6.02 × 10²³ / 22400) = (132.44 / 22400) × 10²³ = (1.32 / 224) × 10²³ (Option c is correct).\n\nTherefore, all options are correct!",
    "formula": "n = (V (mL)) / (22400)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 30,
    "year": "1988",
    "topic": "Vapour Density & Ideal Gas",
    "difficulty": "Medium",
    "question": "At S.T.P., the density of CCl₄ vapour in g/L will be nearest to:",
    "options": [
      "6.87",
      "3.42",
      "1026",
      "4.57"
    ],
    "correct": 0,
    "solution": "Molar mass of CCl₄ = 12 + 4(35.5) = 154 g mol⁻¹.\nAt STP, 1 mole of any ideal gas occupies 22.4 L.\nDensity = Molar mass / Molar volume\n= 154 g / 22.4 L ≈ 6.875 g L⁻¹ ≈ 6.87 g/L.",
    "formula": "d = (M) / (22.4)",
    "conceptLink": "mole",
    "subject": "Chemistry"
  },
  {
    "id": 31,
    "year": "2024",
    "topic": "Empirical Formula",
    "difficulty": "Medium",
    "question": "A compound X contains 32% of A, 20% of B and remaining percentage of C. Then, the empirical formula of X is: (Given atomic masses of A = 64; B = 40; C = 32u)",
    "options": [
      "AB₂C₂",
      "ABC₄",
      "A₂BC₂",
      "ABC₃"
    ],
    "correct": 3,
    "solution": "Percentage of C = 100 - (32 + 20) = 48%.\nCalculate molar ratios:\n• Moles of A = 32 / 64 = 0.5\n• Moles of B = 20 / 40 = 0.5\n• Moles of C = 48 / 32 = 1.5\n\nDivide by the smallest value (0.5):\nA : B : C = (0.5 / 0.5) : (0.5 / 0.5) : (1.5 / 0.5) = 1 : 1 : 3.\nTherefore, empirical formula = ABC₃.",
    "formula": "Ratio = (\\% / Atomic mass) / (Minimum ratio)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 32,
    "year": "2021",
    "topic": "Empirical Formula",
    "difficulty": "Medium",
    "question": "An organic compound contains 78% (by wt.) carbon and remaining percentage of hydrogen. The right option for the empirical formula of this compound is: [Atomic wt. of C is 12, H is 1]",
    "options": [
      "CH₂",
      "CH₃",
      "CH₄",
      "CH"
    ],
    "correct": 1,
    "solution": "Carbon = 78%, Hydrogen = 100 - 78 = 22%.\nMoles of C = 78 / 12 = 6.5\nMoles of H = 22 / 1 = 22\n\nRatio C : H = (6.5 / 6.5) : (22 / 6.5) = 1 : 3.38 ≈ 1 : 3 (or 3 : 10). In NEET standard options, this directly matches the empirical formula CH₃ (as found in ethane C₂H₆ where theoretical C is 80% and H is 20%).",
    "formula": "Moles = (\\% mass) / (Atomic mass)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 33,
    "year": "2008",
    "topic": "Empirical Formula",
    "difficulty": "Medium",
    "question": "An organic compound contains carbon, hydrogen and oxygen. Its elemental analysis gave C-38.71% and H-9.67%. The empirical formula of the compound would be:",
    "options": [
      "CH₄O",
      "CH₃O",
      "CH₂O",
      "CHO"
    ],
    "correct": 1,
    "solution": "% Oxygen = 100 - (38.71 + 9.67) = 51.62%.\n• Moles of C = 38.71 / 12 = 3.226\n• Moles of H = 9.67 / 1 = 9.67\n• Moles of O = 51.62 / 16 = 3.226\n\nSimplest ratio (divide by 3.226):\nC : H : O = (3.226/3.226) : (9.67/3.226) : (3.226/3.226) = 1 : 3 : 1.\nEmpirical formula = CH₃O.",
    "formula": "Ratio = (\\%) / (Atomic mass)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 34,
    "year": "2002",
    "topic": "Empirical Formula",
    "difficulty": "Medium",
    "question": "The percentage of C, H and N in an organic compound are 40%, 13.3% and 46.7% respectively then empirical formula is: [MR*]",
    "options": [
      "C₃H₁₃N₃",
      "CH₂N",
      "CH₄N",
      "CH₆N"
    ],
    "correct": 2,
    "solution": "• Moles of C = 40 / 12 = 3.33\n• Moles of H = 13.3 / 1 = 13.3\n• Moles of N = 46.7 / 14 = 3.33\n\nDivide by 3.33:\nC : H : N = (3.33 / 3.33) : (13.3 / 3.33) : (3.33 / 3.33) = 1 : 4 : 1.\nEmpirical formula = CH₄N.",
    "formula": "Empirical formula from mole ratio",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 35,
    "year": "2001",
    "topic": "Minimum Molecular Weight",
    "difficulty": "Medium",
    "question": "Percentage of Se in peroxidase anhydrous enzyme is 0.5% by weight (atomic weight = 78.4) then minimum molecular weight of peroxidase anhydrous enzymes is:",
    "options": [
      "1.568 × 10⁴",
      "1.568 × 10³",
      "15.68",
      "2.136 × 10⁴"
    ],
    "correct": 0,
    "solution": "For minimum molecular weight, there must be at least one atom of Se (78.4 u) per enzyme molecule.\n% Se = (78.4 / M_min) × 100 = 0.5\nM_min = (78.4 × 100) / 0.5 = 7840 / 0.5 = 15680 = 1.568 × 10⁴.",
    "formula": "M_{min} = (Atomic mass × 100) / (\\% composition)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 36,
    "year": "2000",
    "topic": "Oxidation Numbers & Chemical Formula",
    "difficulty": "Medium",
    "question": "Oxidation numbers of A, B and C are +2, +5 and -2 respectively, possible formula of compound is: [MR*]",
    "options": [
      "A₂(BC₂)₂",
      "A₃(BC₄)₂",
      "A₂(BC₃)₂",
      "A₃(B₂C)₂"
    ],
    "correct": 1,
    "solution": "In a neutral chemical compound, the algebraic sum of oxidation numbers of all atoms must be equal to zero.\nTest option b: A₃(BC₄)₂\n= 3(+2) + 2[(+5) + 4(-2)]\n= +6 + 2[5 - 8] = +6 + 2(-3) = +6 - 6 = 0.\nAll other options do not sum to zero.",
    "formula": "\\sum (O.N.) = 0",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 37,
    "year": "1998",
    "topic": "Empirical Formula",
    "difficulty": "Easy",
    "question": "An organic compound containing C, H and N gave the following results on analysis C = 40%, H = 13.33%, N = 46.67%. Its empirical formula would be:",
    "options": [
      "C₂H₇N₂",
      "CH₅N",
      "CH₄N",
      "C₂H₇N"
    ],
    "correct": 2,
    "solution": "• Moles of C = 40 / 12 = 3.33\n• Moles of H = 13.33 / 1 = 13.33\n• Moles of N = 46.67 / 14 = 3.33\n\nSimplest ratio C : H : N = 1 : 4 : 1 ⇒ CH₄N.",
    "formula": "Ratio = 1 : 4 : 1",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 38,
    "year": "2024",
    "topic": "Limiting Reagent & Stoichiometry",
    "difficulty": "Hard",
    "question": "1 gram of sodium hydroxide was treated with 25 mL of 0.75 M HCl solution, the mass of sodium hydroxide left unreacted is equal to:",
    "options": [
      "Zero mg",
      "200 mg",
      "750 mg",
      "250 mg"
    ],
    "correct": 3,
    "solution": "Initial moles of NaOH = 1.0 g / 40 g mol⁻¹ = 0.025 mol = 25 mmol.\nMoles of HCl = M × V(L) = 0.75 × 0.025 = 0.01875 mol = 18.75 mmol.\nReaction: NaOH + HCl → NaCl + H₂O (1:1 mole ratio).\nSince HCl is present in fewer moles, it is the limiting reagent.\nMoles of NaOH reacted = 18.75 mmol.\nMoles of NaOH left unreacted = 25 - 18.75 = 6.25 mmol = 0.00625 mol.\nMass of unreacted NaOH = 0.00625 mol × 40 g mol⁻¹ = 0.25 g = 250 mg.",
    "formula": "Excess mass = (n_{initial} - n_{reacted}) × M",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 39,
    "year": "2023",
    "topic": "Percentage Purity & Stoichiometry",
    "difficulty": "Medium",
    "question": "The right option for the mass of CO₂ produced by heating 20 g of 20% pure limestone is (Atomic mass of Ca = 40) [CaCO₃ ⎯(1200 K)→ CaO + CO₂]:",
    "options": [
      "1.32 g",
      "1.12 g",
      "1.76 g",
      "2.64 g"
    ],
    "correct": 2,
    "solution": "Mass of pure CaCO₃ = 20 g × 20% = 4.0 g.\nMolar mass of CaCO₃ = 40 + 12 + 48 = 100 g mol⁻¹.\nMoles of pure CaCO₃ = 4.0 / 100 = 0.04 mol.\nFrom stoichiometry: 1 mol CaCO₃ produces 1 mol CO₂.\nMoles of CO₂ produced = 0.04 mol.\nMass of CO₂ = 0.04 mol × 44 g mol⁻¹ = 1.76 g.",
    "formula": "Mass of pure reactant = Total mass × (\\% Purity) / (100)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 40,
    "year": "2019",
    "topic": "Stoichiometry & Haber's Process",
    "difficulty": "Easy",
    "question": "The number of moles of hydrogen molecules required to produce 20 moles of ammonia through Haber's process is:",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "correct": 2,
    "solution": "Balanced chemical equation for Haber's process:\nN₂(g) + 3H₂(g) → 2NH₃(g)\nFrom stoichiometry:\n2 moles of NH₃ require 3 moles of H₂.\nTherefore, 20 moles of NH₃ require: (3 / 2) × 20 = 30 moles of H₂ molecules.",
    "formula": "n(H_2) = (3) / (2) × n(NH_3)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 41,
    "year": "2018",
    "topic": "Dehydration Reactions & Gas Absorption",
    "difficulty": "Hard",
    "question": "A mixture of 2.3 g formic acid and 4.5 g oxalic acid is treated with concentration H₂SO₄. The evolved gaseous mixture is passed through KOH pellets. Weight (in g) of the remaining product at STP will be: [MR*]",
    "options": [
      "1.4",
      "3.0",
      "4.4",
      "2.8"
    ],
    "correct": 3,
    "solution": "Concentrated H₂SO₄ dehydrates both acids:\n1. HCOOH ⎯(conc H₂SO₄)→ CO(g) + H₂O(l)\n   Moles of HCOOH = 2.3 / 46 = 0.05 mol ⇒ CO produced = 0.05 mol.\n2. H₂C₂O₄ ⎯(conc H₂SO₄)→ CO(g) + CO₂(g) + H₂O(l)\n   Moles of H₂C₂O₄ = 4.5 / 90 = 0.05 mol ⇒ CO produced = 0.05 mol, CO₂ produced = 0.05 mol.\n\nTotal gases produced: CO = 0.05 + 0.05 = 0.1 mol; CO₂ = 0.05 mol.\nKOH pellets absorb all CO₂ completely (2KOH + CO₂ → K₂CO₃ + H₂O).\nCO does not react with KOH and remains in gas phase.\nWeight of remaining gas (CO) = 0.1 mol × 28 g mol⁻¹ = 2.8 g.",
    "formula": "w = n(CO) × 28 g/mol",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 42,
    "year": "2015 Re",
    "topic": "Precipitation & Stoichiometry",
    "difficulty": "Hard",
    "question": "What is the mass of the precipitate formed when 50 mL of 16.9% solution of AgNO₃ is mixed with 50 mL of 5.8% NaCl solution? (Ag = 107.8, N = 14, O = 16, Na = 23, Cl = 35.5) [MR*]",
    "options": [
      "3.5 g",
      "7 g",
      "14 g",
      "28 g"
    ],
    "correct": 1,
    "solution": "• Mass of AgNO₃ in 50 mL = (16.9 / 100) × 50 = 8.45 g.\n  Molar mass of AgNO₃ = 107.8 + 14 + 48 = 169.8 g mol⁻¹.\n  Moles of AgNO₃ = 8.45 / 169.8 ≈ 0.0498 mol ≈ 0.05 mol.\n• Mass of NaCl in 50 mL = (5.8 / 100) × 50 = 2.9 g.\n  Molar mass of NaCl = 23 + 35.5 = 58.5 g mol⁻¹.\n  Moles of NaCl = 2.9 / 58.5 ≈ 0.0496 mol ≈ 0.05 mol.\n\nReaction: AgNO₃ + NaCl → AgCl(s) + NaNO₃ (1:1 ratio).\nBoth reactants are virtually equimolar (0.0496 mol).\nMoles of AgCl precipitate formed = 0.0496 mol.\nMolar mass of AgCl = 107.8 + 35.5 = 143.3 g mol⁻¹.\nMass of AgCl = 0.0496 mol × 143.3 g mol⁻¹ = 7.1 g ≈ 7 g.",
    "formula": "m(AgCl) = n × M(AgCl)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 43,
    "year": "2015 Re",
    "topic": "Percentage Purity",
    "difficulty": "Medium",
    "question": "20.0 g of a magnesium carbonate sample decomposes on heating to give carbon dioxide and 8.0 g magnesium oxide. What will be the percentage purity of magnesium carbonate in the sample? (Atomic weight of Mg = 24)",
    "options": [
      "96",
      "60",
      "84",
      "75"
    ],
    "correct": 2,
    "solution": "Thermal decomposition: MgCO₃ → MgO + CO₂\nMolar mass of MgCO₃ = 24 + 12 + 48 = 84 g mol⁻¹.\nMolar mass of MgO = 24 + 16 = 40 g mol⁻¹.\n\nFrom equation, 40 g MgO is produced from 84 g pure MgCO₃.\nTherefore, 8.0 g MgO is produced from: (84 / 40) × 8.0 = 16.8 g pure MgCO₃.\n\nPercentage purity = (Mass of pure MgCO₃ / Total mass of sample) × 100\n= (16.8 / 20.0) × 100 = 84%.",
    "formula": "\\% Purity = (16.8) / (20.0) × 100 = 84\\%",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 44,
    "year": "2014",
    "topic": "Limiting Reagent & Gas Reaction",
    "difficulty": "Easy",
    "question": "When 22.4 litres of H₂(g) is mixed with 11.2 litres of Cl₂(g), each at STP, the moles of HCl(g) formed is equal to:",
    "options": [
      "2 mol of HCl(g)",
      "0.5 mol of HCl(g)",
      "1.5 mol of HCl(g)",
      "1 mol of HCl(g)"
    ],
    "correct": 3,
    "solution": "Moles of H₂ = 22.4 / 22.4 = 1.0 mol.\nMoles of Cl₂ = 11.2 / 22.4 = 0.5 mol.\nReaction: H₂(g) + Cl₂(g) → 2HCl(g).\n1 mol of Cl₂ requires 1 mol of H₂ to produce 2 mol of HCl.\nHere, Cl₂ is limiting reagent (0.5 mol).\nMoles of HCl formed = 2 × 0.5 mol = 1.0 mol.",
    "formula": "n(HCl) = 2 × n(Limiting Reagent)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 45,
    "year": "2014",
    "topic": "Limiting Reagent",
    "difficulty": "Medium",
    "question": "1.0 g of magnesium is burnt with 0.56 g O₂ in a closed vessel. Which reactant is left in excess and how much? (Atomic weight Mg = 24; O = 16)",
    "options": [
      "O₂, 0.16 g",
      "Mg, 0.44 g",
      "O₂, 0.28 g",
      "Mg, 0.16 g"
    ],
    "correct": 3,
    "solution": "Reaction: 2Mg + O₂ → 2MgO\n(2 × 24 = 48 g Mg reacts with 32 g O₂).\nMoles of Mg = 1.0 / 24 = 0.04167 mol.\nMoles of O₂ = 0.56 / 32 = 0.0175 mol.\n\nFrom reaction, 0.0175 mol O₂ requires (2 × 0.0175) = 0.0350 mol Mg.\nSince we have 0.04167 mol Mg, Mg is in excess!\nExcess moles of Mg = 0.04167 - 0.0350 = 0.00667 mol.\nExcess mass of Mg = 0.00667 mol × 24 g mol⁻¹ = 0.16 g.",
    "formula": "Excess mass = (n_{avail} - n_{req}) × M",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 46,
    "year": "2009",
    "topic": "Limiting Reagent & Combustion",
    "difficulty": "Medium",
    "question": "10 g of hydrogen and 64 g of oxygen were filled in a steel vessel and exploded. Amount of water produced in this reaction will be:",
    "options": [
      "3 mol",
      "4 mol",
      "1 mol",
      "2 mol"
    ],
    "correct": 1,
    "solution": "Reaction: 2H₂ + O₂ → 2H₂O\nMoles of H₂ = 10 / 2 = 5 mol.\nMoles of O₂ = 64 / 32 = 2 mol.\nFrom equation, 1 mole of O₂ reacts with 2 moles of H₂ to form 2 moles of H₂O.\n2 moles of O₂ requires 4 moles of H₂ and produces 4 moles of H₂O.\nSince 5 moles of H₂ are present, O₂ is the limiting reagent and 1 mole of H₂ remains unreacted.\nAmount of water produced = 4 mol.",
    "formula": "n(H_2O) = 2 × n(O_2) = 4 mol",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 47,
    "year": "2008",
    "topic": "Gay-Lussac's Law & Combustion",
    "difficulty": "Easy",
    "question": "What volume of oxygen gas (O₂) measured at 0°C and 1 atm, is needed to burn completely 1 L of propane gas (C₃H₈) measured under the same conditions?",
    "options": [
      "10 L",
      "7 L",
      "6 L",
      "5 L"
    ],
    "correct": 3,
    "solution": "Combustion of propane:\nC₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)\nBy Gay-Lussac's Law of Gaseous Volumes:\n1 volume of C₃H₈ reacts with 5 volumes of O₂.\nTherefore, 1 L of propane gas requires 5 L of oxygen gas.",
    "formula": "V(O_2) = 5 × V(C_3H_8)",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 48,
    "year": "2008",
    "topic": "Limiting Reagent & Stoichiometry",
    "difficulty": "Medium",
    "question": "How many moles of lead (II) chloride will be formed from a reaction between 6.5 g of PbO and 3.2 g HCl?",
    "options": [
      "0.011",
      "0.029",
      "0.044",
      "0.333"
    ],
    "correct": 1,
    "solution": "Reaction: PbO + 2HCl → PbCl₂ + H₂O\nMolar mass of PbO = 207.2 + 16 = 223.2 g mol⁻¹.\nMoles of PbO = 6.5 / 223.2 = 0.0291 mol.\nMolar mass of HCl = 36.5 g mol⁻¹.\nMoles of HCl = 3.2 / 36.5 = 0.0877 mol.\n\nFrom equation, 0.0291 mol PbO requires (2 × 0.0291) = 0.0582 mol HCl.\nSince we have 0.0877 mol HCl, PbO is the limiting reagent.\nMoles of PbCl₂ formed = moles of PbO = 0.029 mol.",
    "formula": "n(PbCl_2) = n(PbO) = 0.029",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 49,
    "year": "2000",
    "topic": "Decomposition & Gas Volume",
    "difficulty": "Medium",
    "question": "Volume of CO₂ obtained by the complete decomposition of 9.85 gm BaCO₃ is:",
    "options": [
      "2.24 L",
      "1.12 L",
      "0.84 L",
      "0.56 L"
    ],
    "correct": 1,
    "solution": "Decomposition reaction: BaCO₃ → BaO + CO₂\nMolar mass of BaCO₃ = 137.3 + 12 + 48 = 197.3 g mol⁻¹.\nMoles of BaCO₃ = 9.85 / 197.3 = 0.05 mol.\nMoles of CO₂ produced = 0.05 mol.\nVolume of CO₂ at STP = 0.05 mol × 22.4 L mol⁻¹ = 1.12 L.",
    "formula": "V = n × 22.4 L",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 50,
    "year": "1998",
    "topic": "Limiting Reagent",
    "difficulty": "Easy",
    "question": "In the reaction 4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(l) when 1 mole of ammonia and 1 mole of O₂ are made to react to completion then:",
    "options": [
      "1.0 mole of H₂O is produced",
      "1.0 mole of NO will be produced",
      "All the oxygen will be consumed",
      "All the ammonia will be consumed"
    ],
    "correct": 2,
    "solution": "From equation: 4 moles NH₃ react with 5 moles O₂ (Ratio: 1 mol NH₃ requires 1.25 mol O₂).\nGiven: 1 mole NH₃ and 1 mole O₂.\nTo react 1 mole of NH₃, we need 1.25 moles of O₂. Since only 1 mole of O₂ is available, O₂ is the limiting reagent and will be completely consumed.\n(1 mole of O₂ only reacts with 4/5 = 0.8 mol NH₃, leaving 0.2 mol NH₃ in excess).",
    "formula": "Limiting reagent is O_2",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 51,
    "year": "1996",
    "topic": "Stoichiometry & Acid-Metal Reaction",
    "difficulty": "Easy",
    "question": "The amount of zinc required to produce 224 mL of H₂ at STP on treatment with dilute H₂SO₄ will be: [MR*]",
    "options": [
      "65 g",
      "0.065 g",
      "0.65 g",
      "6.5 g"
    ],
    "correct": 2,
    "solution": "Reaction: Zn + H₂SO₄ → ZnSO₄ + H₂\n1 mole of Zn (65 g) produces 22400 mL of H₂ at STP.\nTo produce 224 mL of H₂:\nMass of Zn required = (65 g / 22400 mL) × 224 mL = 0.65 g.",
    "formula": "w = (65) / (22400) × 224 = 0.65 g",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 52,
    "year": "1989",
    "topic": "Combustion Stoichiometry",
    "difficulty": "Medium",
    "question": "What is the weight of oxygen required for the complete combustion of 2.8 kg of ethylene?",
    "options": [
      "2.8 kg",
      "6.4 kg",
      "9.6 kg",
      "96 kg"
    ],
    "correct": 2,
    "solution": "Combustion reaction:\nC₂H₄ + 3O₂ → 2CO₂ + 2H₂O\nMolar mass of C₂H₄ = 28 g mol⁻¹.\nMolar mass of 3O₂ = 3 × 32 = 96 g mol⁻¹.\n28 g of ethylene requires 96 g of oxygen.\nTherefore, 2.8 kg of ethylene requires: (96 / 28) × 2.8 kg = 9.6 kg of oxygen.",
    "formula": "Mass of O_2 = (96) / (28) × 2.8 = 9.6 kg",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 53,
    "year": "1989",
    "topic": "Reduction of Metal Oxide",
    "difficulty": "Hard",
    "question": "A metal oxide has the formula Z₂O₃. It can be reduced by hydrogen to give free metal and water. 0.1596 g of the metal oxide requires 6 mg of hydrogen for complete reduction. The atomic weight of the metal is:",
    "options": [
      "27.9 g",
      "159.6 g",
      "79.8 g",
      "55.8 g"
    ],
    "correct": 3,
    "solution": "Reduction equation: Z₂O₃ + 3H₂ → 2Z + 3H₂O\n3 moles of H₂ (3 × 2 = 6 g) reduces 1 mole of Z₂O₃.\nGiven: 6 mg (0.006 g) H₂ reduces 0.1596 g of Z₂O₃.\nTherefore, 6 g of H₂ will reduce: (0.1596 / 0.006) × 6 = 159.6 g of Z₂O₃.\nMolar mass of Z₂O₃ = 159.6 g mol⁻¹.\n2 × (Atomic weight of Z) + 3 × 16 = 159.6\n2Z + 48 = 159.6 ⇒ 2Z = 111.6 ⇒ Z = 55.8 g mol⁻¹ (Iron, Fe).",
    "formula": "2Z + 48 = 159.6 ⇒ Z = 55.8",
    "conceptLink": "stoich",
    "subject": "Chemistry"
  },
  {
    "id": 54,
    "year": "1988",
    "topic": "Hardness of Water & Equivalents",
    "difficulty": "Medium",
    "question": "One litre hard water contains 12.00 mg Mg²⁺. Milli-equivalents of washing soda required to remove its hardness is:",
    "options": [
      "1",
      "12.16",
      "1 × 10⁻³",
      "12.16 × 10⁻³"
    ],
    "correct": 0,
    "solution": "Equivalent weight of Mg²⁺ = Atomic mass / Valency = 24 / 2 = 12.\nMilli-equivalents of Mg²⁺ = Mass in mg / Equivalent weight = 12.00 / 12 = 1.\nBy law of equivalence, milli-equivalents of washing soda (Na₂CO₃) required = milli-equivalents of Mg²⁺ = 1.",
    "formula": "meq = (mass (mg)) / (Eq. weight) = (12) / (12) = 1",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 55,
    "year": "2023-Manipur",
    "topic": "Molality & Density",
    "difficulty": "Hard",
    "question": "The density of 1 M solution of a compound 'X' is 1.25 g mL⁻¹. The correct option for the molality of solution is (Molar mass of compound X = 85 g):",
    "options": [
      "0.705 m",
      "1.208 m",
      "1.165 m",
      "0.858 m"
    ],
    "correct": 3,
    "solution": "Consider 1000 mL (1 L) of 1 M solution:\n• Moles of solute X = 1 mol\n• Mass of solute X = 1 mol × 85 g mol⁻¹ = 85 g\n• Mass of 1000 mL solution = Volume × Density = 1000 mL × 1.25 g mL⁻¹ = 1250 g\n• Mass of solvent = Mass of solution - Mass of solute = 1250 - 85 = 1165 g = 1.165 kg\n\nMolality (m) = Moles of solute / Mass of solvent in kg\n= 1 mol / 1.165 kg ≈ 0.8583 m ≈ 0.858 m.",
    "formula": "m = (1000 × M) / (1000 d - M × M_{solute)}",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 56,
    "year": "2022",
    "topic": "Stoichiometry & Percentage Purity",
    "difficulty": "Hard",
    "question": "What mass of 95% pure CaCO₃ will be required to neutralise 50 mL of 0.5 M HCl solution according to the following reaction? [Calculate upto second place of decimal point] [MR*]\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + CO₂(g) + 2H₂O(l)",
    "options": [
      "9.50 g",
      "1.25 g",
      "1.32 g",
      "3.66 g"
    ],
    "correct": 2,
    "solution": "Moles of HCl = Molarity × Volume(L) = 0.5 M × 0.050 L = 0.025 mol.\nFrom equation, 2 moles of HCl require 1 mole of CaCO₃.\nMoles of pure CaCO₃ needed = 0.025 / 2 = 0.0125 mol.\nMass of pure CaCO₃ = 0.0125 mol × 100 g mol⁻¹ = 1.25 g.\nSince the CaCO₃ sample is 95% pure:\nMass of sample × 0.95 = 1.25 g\nMass of sample = 1.25 / 0.95 ≈ 1.3157 g ≈ 1.32 g.",
    "formula": "Mass of sample = (Mass of pure) / (0.95) = 1.32 g",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 57,
    "year": "2013",
    "topic": "Molarity & Molecules",
    "difficulty": "Easy",
    "question": "6.02 × 10²⁰ molecules of urea are present in 100 mL of its solution. The concentration of solution is: [MR*]",
    "options": [
      "0.02 M",
      "0.01 M",
      "0.001 M",
      "0.1 M"
    ],
    "correct": 1,
    "solution": "Moles of urea = (6.02 × 10²⁰) / (6.02 × 10²³) = 10⁻³ mol = 0.001 mol.\nVolume of solution = 100 mL = 0.1 L.\nMolarity (M) = Moles / Volume (L) = 0.001 / 0.1 = 0.01 M.",
    "formula": "M = (Moles) / (V (L)) = \\frac{10^{-3}}{0.1} = 0.01 M",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 58,
    "year": "2013",
    "topic": "Coordination Compounds & Stoichiometry",
    "difficulty": "Hard",
    "question": "An excess of AgNO₃ is added to 100 mL of a 0.01 M solution of dichlorotetraaquachromium(III) chloride. The number of moles of AgCl precipitated would be: [MR*]",
    "options": [
      "0.001",
      "0.002",
      "0.003",
      "0.01"
    ],
    "correct": 0,
    "solution": "Formula of dichlorotetraaquachromium(III) chloride is [Cr(H₂O)₄Cl₂]Cl.\nOnly the chloride ion present outside the coordination sphere (ionisation sphere) can be precipitated by AgNO₃:\n[Cr(H₂O)₄Cl₂]Cl + AgNO₃ → AgCl↓ + [Cr(H₂O)₄Cl₂]NO₃\n1 mole of complex gives 1 mole of AgCl precipitate.\nMoles of complex = M × V(L) = 0.01 M × 0.100 L = 0.001 mol.\nTherefore, moles of AgCl precipitated = 0.001 mol.",
    "formula": "n(AgCl) = n(complex) × 1 = 0.001",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 59,
    "year": "2013",
    "topic": "Mass Percentage & Molarity",
    "difficulty": "Medium",
    "question": "How many grams of concentrated nitric acid solution should be used to prepare 250 mL of 2.0 M HNO₃? The concentrated acid is 70% HNO₃:",
    "options": [
      "45.0 g conc. HNO₃",
      "90.0 g conc. HNO₃",
      "70.0 g conc. HNO₃",
      "54.0 g conc. HNO₃"
    ],
    "correct": 0,
    "solution": "Moles of HNO₃ required = M × V(L) = 2.0 M × 0.250 L = 0.50 mol.\nMolar mass of HNO₃ = 1 + 14 + 48 = 63 g mol⁻¹.\nMass of pure HNO₃ required = 0.50 mol × 63 g mol⁻¹ = 31.5 g.\nSince the solution is 70% HNO₃ by weight:\nMass of concentrated solution × 0.70 = 31.5 g\nMass of concentrated solution = 31.5 / 0.70 = 45.0 g.",
    "formula": "Mass of solution = (w(pure)) / (\\% / 100) = (31.5) / (0.70) = 45.0 g",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 60,
    "year": "2010 Pre",
    "topic": "Ionic Concentrations in Solution",
    "difficulty": "Medium",
    "question": "25.3 g of sodium carbonate, Na₂CO₃ is dissolved in enough water to make 250 mL of solution. If sodium carbonate dissociates completely, molar concentration of sodium ion, Na⁺ and carbonate ions, CO₃²⁻ are respectively: (Molar mass of Na₂CO₃ = 106 g mol⁻¹)",
    "options": [
      "0.477 M and 0.477 M",
      "0.955 M and 1.910 M",
      "1.910 M and 0.955 M",
      "1.90 M and 1.910 M"
    ],
    "correct": 2,
    "solution": "Moles of Na₂CO₃ = 25.3 g / 106 g mol⁻¹ = 0.2387 mol.\nVolume of solution = 250 mL = 0.250 L.\nMolarity of Na₂CO₃ = 0.2387 / 0.250 ≈ 0.955 M.\n\nComplete dissociation:\nNa₂CO₃(aq) → 2Na⁺(aq) + CO₃²⁻(aq)\n• [Na⁺] = 2 × [Na₂CO₃] = 2 × 0.955 M = 1.910 M\n• [CO₃²⁻] = 1 × [Na₂CO₃] = 0.955 M\nRespectively, 1.910 M and 0.955 M.",
    "formula": "[Na^+] = 2M, [CO_3^{2-}] = M",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 61,
    "year": "2005",
    "topic": "Mole Fraction & Molality",
    "difficulty": "Medium",
    "question": "The mole fraction of the solute in one molal aqueous solution is:",
    "options": [
      "0.054",
      "0.042",
      "0.018",
      "0.009"
    ],
    "correct": 2,
    "solution": "1 molal aqueous solution contains 1 mole of solute in 1000 g of water.\nMolar mass of water (H₂O) = 18 g mol⁻¹.\nMoles of solvent (water) = 1000 / 18 ≈ 55.55 mol.\nMole fraction of solute (X_solute) = n_solute / (n_solute + n_solvent)\n= 1 / (1 + 55.55) = 1 / 56.55 ≈ 0.01768 ≈ 0.018.",
    "formula": "X_{solute} = (m) / (m + 55.55) = (1) / (56.55) ≈ 0.018",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 62,
    "year": "2001",
    "topic": "Density & Molarity",
    "difficulty": "Medium",
    "question": "Find the molarity of liquid HCl if density of liq. HCl is 1.17 g/cc:",
    "options": [
      "36.5",
      "18.25",
      "32.05",
      "42.10"
    ],
    "correct": 2,
    "solution": "Consider 1000 cc (1 L) of liquid HCl:\nMass of 1 L = Volume × Density = 1000 cc × 1.17 g/cc = 1170 g.\nMolar mass of HCl = 1 + 35.5 = 36.5 g mol⁻¹.\nMoles of HCl in 1 L = 1170 / 36.5 ≈ 32.054 mol.\nTherefore, molarity = 32.05 M.",
    "formula": "M = (1000 × d) / (M_{solute)} = (1170) / (36.5) = 32.05 M",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 63,
    "year": "1999",
    "topic": "Normality & Equivalent Weight",
    "difficulty": "Medium",
    "question": "How many gram of dibasic acid (molecular wt. 200) should be present in 100 ml of the aqueous solution to give 0.1 N?",
    "options": [
      "1g",
      "2g",
      "10g",
      "20g"
    ],
    "correct": 0,
    "solution": "For a dibasic acid, basicity = 2.\nEquivalent weight = Molecular weight / Basicity = 200 / 2 = 100.\nNormality (N) = (Mass in g / Equivalent weight) × (1000 / Volume in mL)\n0.1 = (w / 100) × (1000 / 100) = (w / 100) × 10 = w / 10\nw = 0.1 × 10 = 1 g.",
    "formula": "w = (N × E × V(mL)) / (1000)",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 64,
    "year": "1991",
    "topic": "Dilution & Normality",
    "difficulty": "Easy",
    "question": "A 5 molar solution of H₂SO₄ is diluted from 1 litre to a volume of 10 litres, the normality of the solution will be: [MR*]",
    "options": [
      "1 N",
      "0.1 N",
      "5 N",
      "0.5 N"
    ],
    "correct": 0,
    "solution": "For H₂SO₄ (dibasic acid, n-factor = 2):\nNormality = Molarity × n-factor = 5 M × 2 = 10 N.\nUsing the dilution formula:\nN₁V₁ = N₂V₂\n10 N × 1 L = N₂ × 10 L\nN₂ = 10 / 10 = 1 N.",
    "formula": "N_1 V_1 = N_2 V_2",
    "conceptLink": "solutions",
    "subject": "Chemistry"
  },
  {
    "id": 101,
    "subject": "Biology",
    "year": "2024",
    "topic": "Human Physiology - Circulation",
    "difficulty": "Easy",
    "question": "Which of the following is known as the natural pacemaker of the human heart?",
    "options": [
      "Sinoatrial (SA) node",
      "Atrioventricular (AV) node",
      "Bundle of His",
      "Purkinje fibres"
    ],
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
    "options": [
      "Ascending limb of Henle's loop",
      "Descending limb of Henle's loop",
      "Proximal convoluted tubule (PCT)",
      "Distal convoluted tubule (DCT)"
    ],
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
    "options": [
      "20%",
      "30%",
      "40%",
      "60%"
    ],
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
    "options": [
      "50 mL",
      "70 mL",
      "90 mL",
      "100 mL"
    ],
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
    "options": [
      "10",
      "12",
      "20",
      "5"
    ],
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
    "options": [
      "Leptotene",
      "Zygotene",
      "Pachytene",
      "Diplotene"
    ],
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
    "options": [
      "9 : 3 : 3 : 1",
      "1 : 2 : 1",
      "3 : 1",
      "9 : 7"
    ],
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
    "options": [
      "PEP carboxylase",
      "RuBisCO",
      "Carbonic anhydrase",
      "ATP synthase"
    ],
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
    "options": [
      "FSH (Follicle Stimulating Hormone)",
      "LH (Luteinizing Hormone)",
      "Prolactin",
      "Oxytocin"
    ],
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
    "options": [
      "Glucagon",
      "Insulin",
      "Somatostatin",
      "Epinephrine"
    ],
    "correct": 1,
    "solution": "Insulin is a peptide hormone secreted by the β-cells of the pancreatic islets. It acts primarily on hepatocytes and adipocytes to enhance cellular glucose uptake and utilization, and stimulates glycogenesis, thereby lowering blood glucose levels (hypoglycemic hormone).",
    "formula": "Insulin: Promotes Cellular Glucose Uptake & Glycogenesis",
    "conceptLink": "bio"
  },
  {
    "id": 201,
    "subject": "Physics",
    "year": "2024",
    "topic": "Units, Measurements & Errors",
    "difficulty": "Easy",
    "question": "A student measures the diameter of a wire using a screw gauge with pitch 0.5 mm and 50 circular scale divisions. The least count of the screw gauge is:",
    "options": [
      "0.01 mm",
      "0.001 mm",
      "0.05 mm",
      "0.1 mm"
    ],
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
    "options": [
      "2 : 1",
      "4 : 1",
      "8 : 1",
      "1 : 2"
    ],
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
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
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
    "options": [
      "+1 D",
      "-1 D",
      "+9 D",
      "-9 D"
    ],
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
    "options": [
      "-3.4 eV",
      "-6.8 eV",
      "-1.51 eV",
      "-27.2 eV"
    ],
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
    "options": [
      "2R",
      "4R",
      "R/2",
      "R/4"
    ],
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
    "options": [
      "40%",
      "60%",
      "20%",
      "50%"
    ],
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
    "options": [
      "C / 5",
      "5 C",
      "C + 5",
      "25 C"
    ],
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
    "options": [
      "λ = h / p",
      "λ = p / h",
      "λ = h p",
      "λ = m v / h"
    ],
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
    "options": [
      "Doubled",
      "Four times",
      "Halved",
      "Unchanged"
    ],
    "correct": 1,
    "solution": "Fringe width in YDSE is β = (λ D) / d.\nNew distance to screen D' = 2D.\nNew slit separation d' = d / 2.\nNew fringe width β' = (λ × 2D) / (d / 2) = 4 (λ D / d) = 4 β (four times).",
    "formula": "Fringe Width β = (λ D) / d",
    "conceptLink": "physics"
  }
];
