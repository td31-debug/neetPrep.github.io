import os, re

files = [
    r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\app.js',
    r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\simulators.js',
    r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\quizEngine.js',
    r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\diagrams.js',
    r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\threeModels.js',
    r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js\questionsData.js',
]

for fp in files:
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    # Check for \u0000 or null bytes or weird invisible tokens
    nulls = [i for i, c in enumerate(content) if ord(c) < 32 and c not in '\n\r\t']
    print(os.path.basename(fp), 'nulls or control chars:', len(nulls))
    if nulls:
        for idx in nulls[:5]:
            print('  at', idx, 'char:', repr(content[idx]), ord(content[idx]))
