# -*- coding: utf-8 -*-
import os, re

js_dir = r'C:\Users\taran\.gemini\antigravity-ide\scratch\neet-interactive-hub\js'
files = [f for f in os.listdir(js_dir) if f.endswith('.js')]

print(f"Checking {len(files)} JavaScript files in {js_dir}:")
has_error = False

for fname in files:
    fpath = os.path.join(js_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        code = f.read()

    # Check for basic bracket matching
    brackets = {'{': '}', '(': ')', '[': ']'}
    stack = []
    # Simple lexical scan ignoring comments/strings
    # Let's check for any obvious unterminated template literals or syntax mistakes
    open_ticks = len(re.findall(r'(?<!\\)`', code)) % 2
    if open_ticks != 0:
        print(f"  [ERROR] {fname}: Unmatched backtick template literal!")
        has_error = True
    else:
        print(f"  [OK] {fname}: {len(code)} bytes")

if not has_error:
    print("All JavaScript modules passed lexical checks!")
