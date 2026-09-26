// ==========================================================================
// 3D Moveable Models Lab - Three.js WebGL Interactive Engine
// Physics, Chemistry & Biology 3D Models
// ==========================================================================

export class ThreeModelsLab {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.currentModelId = 'water';
    this.currentModelGroup = null;
    this.animationFrameId = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hotspots = [];
    this.isRotating = true;
    this.wireframeMode = false;
    this.heartBpm = 72;
    this.clock = new THREE.Clock();

    // Physics Bohr model state
    this.bohrElectron = null;
    this.bohrAngle = 0;
    this.bohrRadius = 2.2;
    this.bohrLevel = 2; // n = 2

    // Callbacks
    this.onHotspotClick = null;

    this.init();
  }

  init() {
    if (!this.container) return;

    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x070b14, 0.035);

    // Camera setup
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    this.camera.position.set(0, 1.8, 7.5);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // Orbit Controls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxDistance = 20;
    this.controls.minDistance = 2;

    // Lighting
    this.setupLighting();

    // Resize listener
    window.addEventListener('resize', () => this.handleResize());

    // Click/Raycast listener
    this.container.addEventListener('pointerdown', (e) => this.handleClick(e));

    // Load default model
    this.loadModel('water');

    // Start loop
    this.animate();
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    this.scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x00f2fe, 1.2);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    this.scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xa855f7, 0.8);
    fillLight.position.set(-5, -3, -5);
    this.scene.add(fillLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.6, 15);
    pointLight.position.set(0, 0, 4);
    this.scene.add(pointLight);
  }

  loadModel(modelId) {
    this.currentModelId = modelId;

    if (this.currentModelGroup) {
      this.scene.remove(this.currentModelGroup);
      this.currentModelGroup = null;
    }
    this.hotspots = [];
    this.bohrElectron = null;

    this.camera.position.set(0, 1.5, 7.5);
    this.controls.target.set(0, 0, 0);

    const group = new THREE.Group();

    switch (modelId) {
      case 'water':
        this.buildWaterMolecule(group);
        break;
      case 'methane':
        this.buildMethaneMolecule(group);
        break;
      case 'dna':
        this.buildDnaHelix(group);
        break;
      case 'heart':
        this.buildHumanHeart(group);
        break;
      case 'bohr':
        this.buildBohrAtom(group);
        break;
      default:
        this.buildWaterMolecule(group);
    }

    this.currentModelGroup = group;
    this.scene.add(group);
  }

  // ==========================================
  // CHEMISTRY: Water (H₂O) Molecule
  // ==========================================
  buildWaterMolecule(group) {
    const oGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const oMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.25,
      metalness: 0.1,
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.3
    });
    const oMesh = new THREE.Mesh(oGeo, oMat);
    oMesh.userData = {
      title: "Oxygen Atom (Partial Negative Charge)",
      desc: "Electronegative center with two lone pairs of electrons. Carries a partial negative charge (δ⁻ ≈ -0.66e), creating a strong dipole moment with hydrogen."
    };
    group.add(oMesh);
    this.hotspots.push(oMesh);

    const bondAngleRad = (104.5 * Math.PI) / 180;
    const bondLength = 1.8;
    const hGeo = new THREE.SphereGeometry(0.48, 24, 24);
    const hMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3, metalness: 0.1 });

    const h1Pos = new THREE.Vector3(
      Math.sin(bondAngleRad / 2) * bondLength,
      -Math.cos(bondAngleRad / 2) * bondLength,
      0
    );
    const h2Pos = new THREE.Vector3(
      -Math.sin(bondAngleRad / 2) * bondLength,
      -Math.cos(bondAngleRad / 2) * bondLength,
      0
    );

    const h1Mesh = new THREE.Mesh(hGeo, hMat);
    h1Mesh.position.copy(h1Pos);
    h1Mesh.userData = {
      title: "Hydrogen Atom 1 (Partial Positive Charge)",
      desc: "Carries partial positive charge (δ⁺). Donates its single electron density towards the highly electronegative oxygen atom."
    };
    group.add(h1Mesh);
    this.hotspots.push(h1Mesh);

    const h2Mesh = new THREE.Mesh(hGeo, hMat);
    h2Mesh.position.copy(h2Pos);
    h2Mesh.userData = {
      title: "Hydrogen Atom 2 (Partial Positive Charge)",
      desc: "Second polarized proton. Responsible for forming directional intermolecular hydrogen bonds with neighboring oxygen atoms."
    };
    group.add(h2Mesh);
    this.hotspots.push(h2Mesh);

    this.createCovalentBond(group, new THREE.Vector3(0, 0, 0), h1Pos, 0.12, 0x94a3b8);
    this.createCovalentBond(group, new THREE.Vector3(0, 0, 0), h2Pos, 0.12, 0x94a3b8);

    const dir = new THREE.Vector3(0, 1, 0);
    const origin = new THREE.Vector3(0, -0.6, 0);
    const length = 2.4;
    const arrowHelper = new THREE.ArrowHelper(dir, origin, length, 0x00f2fe, 0.4, 0.25);
    arrowHelper.userData = {
      title: "Net Dipole Moment (1.85 Debye)",
      desc: "Water is a bent polar molecule with asymmetric charge distribution. Resultant dipole moment μ = 1.85 Debye, responsible for its high dielectric constant."
    };
    group.add(arrowHelper);

    this.addNeighborWater(group, new THREE.Vector3(3.2, 1.2, 0), h1Pos, "Hydrogen Bond (Strength ~20 kJ/mol)");
    this.addNeighborWater(group, new THREE.Vector3(-3.2, 1.2, 0), h2Pos, "Hydrogen Bond (High Boiling Point Reason)");
  }

  addNeighborWater(parent, center, connectTo, hBondLabel) {
    const neighborGroup = new THREE.Group();
    neighborGroup.position.copy(center);

    const oMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0xef4444, transparent: true, opacity: 0.75 })
    );
    neighborGroup.add(oMesh);

    const h1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, transparent: true, opacity: 0.75 })
    );
    h1.position.set(0.6, -0.6, 0.2);
    neighborGroup.add(h1);

    const h2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, transparent: true, opacity: 0.75 })
    );
    h2.position.set(-0.6, -0.6, -0.2);
    neighborGroup.add(h2);

    parent.add(neighborGroup);

    const hBondCurve = new THREE.LineCurve3(connectTo, center);
    const hBondGeo = new THREE.TubeGeometry(hBondCurve, 12, 0.04, 8, false);
    const hBondMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });
    const hBondMesh = new THREE.Mesh(hBondGeo, hBondMat);
    hBondMesh.userData = {
      title: hBondLabel,
      desc: "Intermolecular electrostatic attraction between partial positive H of one molecule and lone pair of oxygen on an adjacent molecule. Leads to water's abnormally high heat capacity and anomalous expansion."
    };
    parent.add(hBondMesh);
    this.hotspots.push(hBondMesh);
  }

  // ==========================================
  // CHEMISTRY: Methane (CH₄)
  // ==========================================
  buildMethaneMolecule(group) {
    const cGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const cMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.3, roughness: 0.4 });
    const cMesh = new THREE.Mesh(cGeo, cMat);
    cMesh.userData = {
      title: "Carbon Center (sp³ Hybridized)",
      desc: "Carbon forms 4 equivalent sp³ hybrid orbitals directed towards the corners of a regular tetrahedron, minimizing electron repulsion (VSEPR theory)."
    };
    group.add(cMesh);
    this.hotspots.push(cMesh);

    const r = 2.0;
    const vertices = [
      new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(r),
      new THREE.Vector3(-1, -1, 1).normalize().multiplyScalar(r),
      new THREE.Vector3(-1, 1, -1).normalize().multiplyScalar(r),
      new THREE.Vector3(1, -1, -1).normalize().multiplyScalar(r)
    ];

    const hGeo = new THREE.SphereGeometry(0.42, 24, 24);
    const hMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });

    vertices.forEach((pos, idx) => {
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.copy(pos);
      hMesh.userData = {
        title: `Hydrogen Atom ${idx + 1} (1s Orbital)`,
        desc: "Overlaps with one carbon sp³ hybrid orbital to form a strong, localized C-H σ (sigma) covalent bond."
      };
      group.add(hMesh);
      this.hotspots.push(hMesh);

      this.createCovalentBond(group, new THREE.Vector3(0, 0, 0), pos, 0.1, 0x64748b);
    });

    const cageGeo = new THREE.BufferGeometry().setFromPoints([
      vertices[0], vertices[1],
      vertices[1], vertices[2],
      vertices[2], vertices[0],
      vertices[0], vertices[3],
      vertices[1], vertices[3],
      vertices[2], vertices[3]
    ]);
    const cageMat = new THREE.LineBasicMaterial({ color: 0x00f2fe, opacity: 0.4, transparent: true });
    const cage = new THREE.LineSegments(cageGeo, cageMat);
    cage.userData = {
      title: "Tetrahedral Bond Angle: 109.5°",
      desc: "Symmetric tetrahedral geometry ensures all 4 C-H bond dipoles vectorially cancel out. Net dipole moment μ = 0 Debye (non-polar molecule)."
    };
    group.add(cage);
    this.hotspots.push(cage);
  }

  // ==========================================
  // BIOLOGY: DNA Double Helix
  // ==========================================
  buildDnaHelix(group) {
    const turns = 2.5;
    const pointsPerTurn = 30;
    const totalPoints = Math.floor(turns * pointsPerTurn);
    const radius = 1.4;
    const height = 7.0;
    const dy = height / totalPoints;
    const dTheta = (turns * 2 * Math.PI) / totalPoints;

    const strand1Points = [];
    const strand2Points = [];

    const baseColors = [
      { name: "Adenine = Thymine", c1: 0xef4444, c2: 0x38bdf8, info: "Purine A paired with Pyrimidine T via 2 Hydrogen Bonds." },
      { name: "Guanine ≡ Cytosine", c1: 0x10b981, c2: 0xf59e0b, info: "Purine G paired with Pyrimidine C via 3 Hydrogen Bonds (Higher thermal stability, Tm)." }
    ];

    for (let i = 0; i < totalPoints; i++) {
      const theta = i * dTheta;
      const y = -height / 2 + i * dy;

      const p1 = new THREE.Vector3(radius * Math.cos(theta), y, radius * Math.sin(theta));
      const p2 = new THREE.Vector3(radius * Math.cos(theta + Math.PI), y, radius * Math.sin(theta + Math.PI));

      strand1Points.push(p1);
      strand2Points.push(p2);

      if (i % 2 === 0) {
        const pair = baseColors[(i / 2) % 2];
        const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

        const r1 = this.createCovalentBond(group, p1, midPoint, 0.08, pair.c1);
        const r2 = this.createCovalentBond(group, midPoint, p2, 0.08, pair.c2);

        r1.userData = {
          title: pair.name,
          desc: `${pair.info} Follows Chargaff's Rule: [A] = [T] and [G] = [C]. Diameter of B-DNA is 2.0 nm.`
        };
        r2.userData = r1.userData;
        this.hotspots.push(r1);
      }
    }

    const curve1 = new THREE.CatmullRomCurve3(strand1Points);
    const curve2 = new THREE.CatmullRomCurve3(strand2Points);

    const tubeGeo1 = new THREE.TubeGeometry(curve1, 100, 0.12, 8, false);
    const tubeGeo2 = new THREE.TubeGeometry(curve2, 100, 0.12, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.3, metalness: 0.2 });

    const backbone1 = new THREE.Mesh(tubeGeo1, tubeMat);
    const backbone2 = new THREE.Mesh(tubeGeo2, tubeMat);

    backbone1.userData = {
      title: "Sugar-Phosphate Backbone (5' to 3')",
      desc: "Composed of alternating deoxyribose sugar and phosphate groups linked by 3'-5' phosphodiester bonds. Highly negatively charged."
    };
    backbone2.userData = {
      title: "Antiparallel Complementary Strand (3' to 5')",
      desc: "Runs antiparallel to the first strand. 10 base pairs per helical pitch (3.4 nm per complete turn, 0.34 nm per base step in B-DNA)."
    };

    group.add(backbone1);
    group.add(backbone2);
    this.hotspots.push(backbone1);
    this.hotspots.push(backbone2);
  }

  // ==========================================
  // BIOLOGY: Beating Human Heart
  // ==========================================
  buildHumanHeart(group) {
    this.heartGroup = new THREE.Group();

    const lvGeo = new THREE.ConeGeometry(1.3, 2.5, 32);
    lvGeo.rotateZ(Math.PI);
    const muscleMat = new THREE.MeshStandardMaterial({
      color: 0xd92626,
      roughness: 0.4,
      metalness: 0.1,
      emissive: 0x550a0a,
      emissiveIntensity: 0.2
    });
    const lvMesh = new THREE.Mesh(lvGeo, muscleMat);
    lvMesh.position.set(-0.35, -0.6, 0);
    lvMesh.userData = {
      title: "Left Ventricle (Thickest Myocardium)",
      desc: "Pumps oxygenated blood under high systemic pressure (120 mmHg) into the Aorta. Wall is 3x thicker than right ventricle."
    };
    this.heartGroup.add(lvMesh);
    this.hotspots.push(lvMesh);

    const rvGeo = new THREE.ConeGeometry(1.1, 2.2, 32);
    rvGeo.rotateZ(Math.PI);
    const rvMat = new THREE.MeshStandardMaterial({ color: 0xbe123c, roughness: 0.4 });
    const rvMesh = new THREE.Mesh(rvGeo, rvMat);
    rvMesh.position.set(0.65, -0.5, 0.3);
    rvMesh.userData = {
      title: "Right Ventricle (Pulmonary Pump)",
      desc: "Receives deoxygenated blood from Right Atrium via Tricuspid valve and pumps it into Pulmonary Artery under low pressure (25 mmHg)."
    };
    this.heartGroup.add(rvMesh);
    this.hotspots.push(rvMesh);

    const laMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.3 })
    );
    laMesh.position.set(-0.75, 0.9, -0.2);
    laMesh.userData = {
      title: "Left Atrium (Receives 4 Pulmonary Veins)",
      desc: "Thin-walled chamber that receives oxygen-rich blood returning from the lungs through four pulmonary veins."
    };
    this.heartGroup.add(laMesh);
    this.hotspots.push(laMesh);

    const raMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.9, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3 })
    );
    raMesh.position.set(0.85, 0.8, 0.2);
    raMesh.userData = {
      title: "Right Atrium & Sinoatrial (SA) Node",
      desc: "Receives deoxygenated venous blood from Superior & Inferior Vena Cava. Contains the SA Node (Natural Pacemaker) generating 70-75 impulses/min."
    };
    this.heartGroup.add(raMesh);
    this.hotspots.push(raMesh);

    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.2, 0.6, 0),
      new THREE.Vector3(-0.2, 1.8, 0),
      new THREE.Vector3(0.3, 2.3, -0.2),
      new THREE.Vector3(0.9, 1.8, -0.4),
      new THREE.Vector3(0.9, 0.2, -0.5)
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 32, 0.35, 16, false);
    const aortaMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.25, metalness: 0.2 });
    const aortaMesh = new THREE.Mesh(aortaGeo, aortaMat);
    aortaMesh.userData = {
      title: "Aorta & Systemic Arterial System",
      desc: "The largest artery in the human body. Distributes oxygenated blood to all organs and systemic tissues at highest systolic pressure."
    };
    this.heartGroup.add(aortaMesh);
    this.hotspots.push(aortaMesh);

    const paCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.4, 0.5, 0.4),
      new THREE.Vector3(0.1, 1.5, 0.3),
      new THREE.Vector3(-0.7, 1.7, 0.1)
    ]);
    const paGeo = new THREE.TubeGeometry(paCurve, 24, 0.3, 16, false);
    const paMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3 });
    const paMesh = new THREE.Mesh(paGeo, paMat);
    paMesh.userData = {
      title: "Pulmonary Artery Trunk",
      desc: "The ONLY artery in the human body that carries DEOXYGENATED blood (from RV to the lungs for gas exchange)."
    };
    this.heartGroup.add(paMesh);
    this.hotspots.push(paMesh);

    group.add(this.heartGroup);
  }

  // ==========================================
  // PHYSICS: Bohr Hydrogen Atom Model
  // ==========================================
  buildBohrAtom(group) {
    // Nucleus (Proton)
    const nucleusGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.5,
      roughness: 0.2
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    nucleus.userData = {
      title: "Atomic Nucleus (Positive Charge +e)",
      desc: "Positively charged center with mass concentrated at core. Provides electrostatic Coulomb attractive force F = (k e²) / r² that holds orbiting electron."
    };
    group.add(nucleus);
    this.hotspots.push(nucleus);

    // Quantized Orbits (n = 1, 2, 3, 4)
    const orbits = [
      { n: 1, r: 1.2, energy: "-13.6 eV", name: "Ground State (n = 1)" },
      { n: 2, r: 2.2, energy: "-3.40 eV", name: "1st Excited State (n = 2)" },
      { n: 3, r: 3.2, energy: "-1.51 eV", name: "2nd Excited State (n = 3)" },
      { n: 4, r: 4.2, energy: "-0.85 eV", name: "3rd Excited State (n = 4)" }
    ];

    orbits.forEach(orb => {
      const ringGeo = new THREE.RingGeometry(orb.r - 0.02, orb.r + 0.02, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: orb.n === 2 ? 0x00f2fe : 0x475569,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.userData = {
        title: `${orb.name} | Energy: ${orb.energy}`,
        desc: `Quantized orbital radius rₙ = 0.529 n² Å. Angular momentum is quantized: L = mvr = n(h / 2π). No radiation is emitted in these stationary orbits.`
      };
      group.add(ring);
      this.hotspots.push(ring);
    });

    // Orbiting Electron
    const eGeo = new THREE.SphereGeometry(0.2, 24, 24);
    const eMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.8
    });
    this.bohrElectron = new THREE.Mesh(eGeo, eMat);
    this.bohrElectron.position.set(this.bohrRadius, 0, 0);
    this.bohrElectron.userData = {
      title: "Orbiting Electron (Negative Charge -e)",
      desc: "Revolves in stationary non-radiating Bohr orbits. In n=2, orbital velocity v = (2.18 × 10⁶ / n) m/s."
    };
    group.add(this.bohrElectron);
    this.hotspots.push(this.bohrElectron);
  }

  // Trigger Quantum Transition in Bohr Model
  triggerQuantumJump(newLevel) {
    if (this.currentModelId !== 'bohr' || !this.bohrElectron) return;
    const radii = { 1: 1.2, 2: 2.2, 3: 3.2, 4: 4.2 };
    this.bohrLevel = newLevel;
    this.bohrRadius = radii[newLevel] || 2.2;
  }

  createCovalentBond(parent, p1, p2, radius, colorHex) {
    const dir = new THREE.Vector3().subVectors(p2, p1);
    const len = dir.length();
    const half = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

    const geo = new THREE.CylinderGeometry(radius, radius, len, 16);
    const mat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.3, metalness: 0.1 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(half);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    parent.add(mesh);
    return mesh;
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    const elapsed = this.clock.getElapsedTime();

    if (this.isRotating && this.currentModelGroup) {
      this.currentModelGroup.rotation.y += 0.005;
    }

    if (this.currentModelId === 'heart' && this.heartGroup) {
      const beatFreq = (this.heartBpm / 60) * Math.PI * 2;
      const pulse = Math.sin(elapsed * beatFreq);
      const scaleVal = 1.0 + Math.max(0, pulse) * 0.12;
      this.heartGroup.scale.set(scaleVal, scaleVal, scaleVal);
    }

    if (this.currentModelId === 'bohr' && this.bohrElectron) {
      this.bohrAngle += 0.04 / (this.bohrLevel * 0.7);
      this.bohrElectron.position.x = this.bohrRadius * Math.cos(this.bohrAngle);
      this.bohrElectron.position.z = this.bohrRadius * Math.sin(this.bohrAngle);
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  handleClick(event) {
    const rect = this.container.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.hotspots, true);

    if (intersects.length > 0) {
      let target = intersects[0].object;
      while (target && !target.userData?.title && target.parent) {
        target = target.parent;
      }
      if (target && target.userData?.title && this.onHotspotClick) {
        this.onHotspotClick(target.userData);
      }
    }
  }

  toggleRotation() {
    this.isRotating = !this.isRotating;
    return this.isRotating;
  }

  resetView() {
    this.camera.position.set(0, 1.5, 7.5);
    this.controls.target.set(0, 0, 0);
    if (this.currentModelGroup) {
      this.currentModelGroup.rotation.set(0, 0, 0);
    }
  }

  toggleWireframe() {
    this.wireframeMode = !this.wireframeMode;
    if (this.currentModelGroup) {
      this.currentModelGroup.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.wireframe = this.wireframeMode;
        }
      });
    }
    return this.wireframeMode;
  }

  setHeartBpm(bpm) {
    this.heartBpm = bpm;
  }

  handleResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
