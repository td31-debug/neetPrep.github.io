# -*- coding: utf-8 -*-
import urllib.request
import re

url = 'http://localhost:8080/index.html'
try:
    with urllib.request.urlopen(url) as resp:
        html = resp.read().decode('utf-8')
        print(f'Server Status: {resp.status} OK, HTML Size: {len(html)} bytes')
        
        # Check that unrendered LaTeX is gone
        latex_matches = re.findall(r'\$[a-zA-Z0-9_\^\{\}\\]+\$', html)
        print(f'Unrendered LaTeX in index.html: {len(latex_matches)} matches -> {latex_matches}')
        
        # Check tech badges
        tech_badges = [w for w in ['Dynamic PBR', 'WebGL / Three.js'] if w in html]
        print(f'Tech badges in index.html: {tech_badges}')
        
        # Check Subject Switcher
        print('Subject Switcher present:', 'subject-switcher' in html)
        print('Bohr model present:', 'data-model="bohr"' in html)
        print('Optics diagram present:', 'data-diagram="optics-lens"' in html)
        print('Projectile canvas present:', 'projectile-canvas' in html)
        print('Subject filter dropdown present:', 'filter-subject' in html)
except Exception as e:
    print('Error:', e)
