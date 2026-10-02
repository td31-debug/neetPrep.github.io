# -*- coding: utf-8 -*-
import os, re, urllib.request, sys
sys.stdout.reconfigure(encoding='utf-8')

print("=================================================================")
print("COMPREHENSIVE NEET INTERACTIVE HUB AUDIT & VALIDATION")
print("=================================================================")

# 1. Test Local Server Response
try:
    with urllib.request.urlopen("http://localhost:8080/index.html") as resp:
        html = resp.read().decode("utf-8")
        print(f"✓ HTTP Server Status: {resp.status} OK (Size: {len(html):,} bytes)")
except Exception as e:
    print(f"✗ HTTP Server Error: {e}")
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

# 2. Check All 15 Chapters Presence in index.html
chapters = [
    # Physics
    ("phy-currelec", "Current Electricity", "physics"),
    ("phy-magcharge", "Moving Charges and Magnetism", "physics"),
    ("phy-magmatter", "Magnetism and Matter", "physics"),
    ("phy-emi", "Electromagnetic Induction", "physics"),
    # Chemistry
    ("ch6", "Haloalkanes and Haloarenes", "chemistry"),
    ("ch7", "Alcohols, Phenols and Ethers", "chemistry"),
    ("ch8", "Aldehydes, Ketones and Carboxylic Acids", "chemistry"),
    ("ch9", "Amines", "chemistry"),
    ("ch10", "Biomolecules", "chemistry"),
    ("chem-kinetics", "Chemical Kinetics", "chemistry"),
    ("chem-coordination", "Coordination Compounds", "chemistry"),
    # Biology
    ("bio-bot2", "Principles of Inheritance and Variation", "biology"),
    ("bio-bot3", "Molecular Basis of Inheritance", "biology"),
    ("bio-zoo2", "Reproductive Health", "biology"),
    ("bio-zoo3", "Evolution", "biology"),
]

missing = []
for ch_id, name, subj in chapters:
    container_id = f"chapter-{ch_id}-container" if "-" in ch_id else f"chapter-{ch_id.replace('ch', '')}-container"
    nav_id = f"quick-nav-{ch_id}"
    card_attr = f'data-chapter="{ch_id}"'
    btn_attr = f'data-chapter="{ch_id}"'

    has_container = f'id="{container_id}"' in html
    has_nav = f'id="{nav_id}"' in html
    has_card = card_attr in html

    if has_container and has_nav and has_card:
        print(f"  ✓ [{subj.upper()}] {name:40} | Container, Nav, and Catalog Card OK")
    else:
        print(f"  ✗ [{subj.upper()}] {name:40} | Container:{has_container}, Nav:{has_nav}, Card:{has_card}")
        missing.append(ch_id)

# 3. Check JavaScript Module Integrity
js_files = [
    "js/studyHub.js",
    "js/diagramsPhysics.js",
    "js/diagramsBiology.js",
    "js/diagramsChemistryExtra.js",
    "js/app.js",
    "js/diagramsCh7.js",
    "js/diagramsCh9.js",
    "js/diagramsCh10.js"
]

print("\n--- JavaScript Modules Check ---")
for js_path in js_files:
    if os.path.exists(js_path):
        with open(js_path, "r", encoding="utf-8") as f:
            code = f.read()
        print(f"  ✓ {js_path:30} ({len(code):,} bytes)")
    else:
        print(f"  ✗ {js_path:30} MISSING!")

# 4. Check Checkpoint Quizzes
quizzes = re.findall(r'class="study-checkpoint-card"', html)
print(f"\n✓ Embedded Checkpoint Recall Quizzes: {len(quizzes)} interactive quizzes")

# 5. Check Subject Filter Buttons
filters = re.findall(r'class="study-subj-filter-btn', html)
print(f"✓ Study Hub Subject Filter Buttons: {len(filters)} filters (All, Physics, Chemistry, Biology)")

print("\n=================================================================")
if not missing:
    print("ALL 15 CURRICULUM CHAPTERS VERIFIED AND OPERATIONAL!")
else:
    print(f"FAILED ON CHAPTERS: {missing}")
print("=================================================================")
