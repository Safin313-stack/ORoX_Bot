import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { robotAudio } from '../utils/soundEffects';
import { RobotTheme, RobotReaction, ROBOT_THEMES } from '../types/robotCustomizer';

interface InteractiveRobot3DProps {
  theme?: RobotTheme;
  reaction?: RobotReaction;
  onTap?: () => void;
  className?: string;
}

// Procedural rounded squircle shape generator
function createSquircleShape(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const w = width / 2;
  const h = height / 2;
  const r = Math.min(radius, w, h);

  shape.moveTo(-w + r, -h);
  shape.lineTo(w - r, -h);
  shape.quadraticCurveTo(w, -h, w, -h + r);
  shape.lineTo(w, h - r);
  shape.quadraticCurveTo(w, h, w - r, h);
  shape.lineTo(-w + r, h);
  shape.quadraticCurveTo(-w, h, -w, h - r);
  shape.lineTo(-w, -h + r);
  shape.quadraticCurveTo(-w, -h, -w + r, -h);

  return shape;
}

// Procedural hollow squircle bezel ring with inner cutout hole
function createSquircleHollowShape(
  outerW: number,
  outerH: number,
  outerR: number,
  innerW: number,
  innerH: number,
  innerR: number
) {
  const shape = createSquircleShape(outerW, outerH, outerR);
  const hole = new THREE.Path();
  const iw = innerW / 2;
  const ih = innerH / 2;
  const ir = Math.min(innerR, iw, ih);

  // Clockwise inner cutout path
  hole.moveTo(-iw + ir, ih);
  hole.lineTo(iw - ir, ih);
  hole.quadraticCurveTo(iw, ih, iw, ih - ir);
  hole.lineTo(iw, -ih + ir);
  hole.quadraticCurveTo(iw, -ih, iw - ir, -ih);
  hole.lineTo(-iw + ir, -ih);
  hole.quadraticCurveTo(-iw, -ih, -iw, -ih + ir);
  hole.lineTo(-iw, ih - ir);
  hole.quadraticCurveTo(-iw, ih, -iw + ir, ih);

  shape.holes.push(hole);
  return shape;
}

// Mochi Heart Eye Shape (from mochi_100_faces.ino Type 4)
function createHeartEyeShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.16);
  s.bezierCurveTo(0.16, 0.28, 0.28, 0.16, 0.24, 0.02);
  s.bezierCurveTo(0.20, -0.10, 0.08, -0.18, 0, -0.26);
  s.bezierCurveTo(-0.08, -0.18, -0.20, -0.10, -0.24, 0.02);
  s.bezierCurveTo(-0.28, 0.16, -0.16, 0.28, 0, 0.16);
  return s;
}

// Mochi Joy Arc Eye Shape (from mochi_100_faces.ino Type 2)
function createJoyEyeShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.22, -0.08);
  s.quadraticCurveTo(0, 0.20, 0.22, -0.08);
  s.quadraticCurveTo(0, 0.10, -0.22, -0.08);
  return s;
}

// Mochi Sleepy Eye Shape (from mochi_100_faces.ino Type 3)
function createSleepyEyeShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.22, 0.04);
  s.quadraticCurveTo(0, -0.16, 0.22, 0.04);
  s.lineTo(0.22, 0.08);
  s.lineTo(-0.22, 0.08);
  s.closePath();
  return s;
}

export const InteractiveRobot3D: React.FC<InteractiveRobot3DProps> = ({
  theme = ROBOT_THEMES[0],
  reaction = 'idle',
  onTap,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Three.js Core References
  const robotGroupRef = useRef<THREE.Group | null>(null);
  const headGroupRef = useRef<THREE.Group | null>(null);
  const bodyGroupRef = useRef<THREE.Group | null>(null);
  const rightArmRef = useRef<THREE.Mesh | null>(null);
  const leftArmRef = useRef<THREE.Mesh | null>(null);
  const leftEyeRef = useRef<THREE.Mesh | null>(null);
  const rightEyeRef = useRef<THREE.Mesh | null>(null);
  const leftEyeHaloRef = useRef<THREE.Mesh | null>(null);
  const rightEyeHaloRef = useRef<THREE.Mesh | null>(null);
  const leftEarRef = useRef<THREE.Mesh | null>(null);
  const rightEarRef = useRef<THREE.Mesh | null>(null);

  // Dynamic Character Accessories Group References
  const charHeadDecorRef = useRef<THREE.Group | null>(null);
  const charBodyDecorRef = useRef<THREE.Group | null>(null);

  // Materials & Lights References for live theme switching
  const bodyMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const accentMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const screenMatRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const eyeMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const eyeHaloMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const rimLightRef = useRef<THREE.DirectionalLight | null>(null);
  const frontGlowLightRef = useRef<THREE.PointLight | null>(null);

  // Mouse tracking targets
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isBlinkingRef = useRef<boolean>(false);
  const activeReactionRef = useRef<RobotReaction>(reaction);
  const spinProgressRef = useRef<number>(0);
  const nodTimeRef = useRef<number>(0);
  const isSpinningRef = useRef<boolean>(false);

  // Sync activeReactionRef and morph eye shapes dynamically
  useEffect(() => {
    activeReactionRef.current = reaction;
    if (reaction === 'spin') {
      isSpinningRef.current = true;
      spinProgressRef.current = 0;
    }
    updateCharacterVisuals(theme);
  }, [reaction, theme]);

  // Helper to re-render character specific eyes & 3D body decorations
  const updateCharacterVisuals = (t: RobotTheme) => {
    // 1. Update eye geometry based on reaction (Action figures keep iconic cute squircle eyes)
    if (leftEyeRef.current && rightEyeRef.current) {
      const curReact = activeReactionRef.current;
      let lGeo: THREE.BufferGeometry;
      let rGeo: THREE.BufferGeometry;

      // Reactions from Mochi 100 Faces override standard eye geometry
      if (curReact === 'love') {
        lGeo = new THREE.ShapeGeometry(createHeartEyeShape());
        rGeo = new THREE.ShapeGeometry(createHeartEyeShape());
      } else if (curReact === 'laugh') {
        lGeo = new THREE.ShapeGeometry(createJoyEyeShape());
        rGeo = new THREE.ShapeGeometry(createJoyEyeShape());
      } else if (curReact === 'sleep') {
        lGeo = new THREE.ShapeGeometry(createSleepyEyeShape());
        rGeo = new THREE.ShapeGeometry(createSleepyEyeShape());
      } else {
        // Iconic, cute, friendly rounded squircle eyes (head remains 100% cute and identical!)
        lGeo = new THREE.ShapeGeometry(createSquircleShape(0.44, 0.50, 0.16));
        rGeo = new THREE.ShapeGeometry(createSquircleShape(0.44, 0.50, 0.16));
      }

      leftEyeRef.current.geometry.dispose();
      rightEyeRef.current.geometry.dispose();
      leftEyeRef.current.geometry = lGeo;
      rightEyeRef.current.geometry = rGeo;

      // Update Halos (Always active for luminous glowing OLED eyes)
      if (leftEyeHaloRef.current && rightEyeHaloRef.current) {
        leftEyeHaloRef.current.visible = true;
        rightEyeHaloRef.current.visible = true;
        leftEyeHaloRef.current.geometry.dispose();
        rightEyeHaloRef.current.geometry.dispose();
        leftEyeHaloRef.current.geometry = lGeo;
        rightEyeHaloRef.current.geometry = rGeo;
        leftEyeHaloRef.current.scale.set(1.25, 1.25, 1);
        rightEyeHaloRef.current.scale.set(1.25, 1.25, 1);
      }
    }

    // 2. Clear previous character decor groups
    if (charHeadDecorRef.current) {
      while (charHeadDecorRef.current.children.length > 0) {
        const obj = charHeadDecorRef.current.children[0];
        charHeadDecorRef.current.remove(obj);
      }
    }
    if (charBodyDecorRef.current) {
      while (charBodyDecorRef.current.children.length > 0) {
        const obj = charBodyDecorRef.current.children[0];
        charBodyDecorRef.current.remove(obj);
      }
    }

    const cType = t.characterType;

    // 3. Add Character Specific Action Figure Accessories & Costumes
    if (cType === 'luffy') {
      // Luffy Iconic Straw Hat on Head
      if (charHeadDecorRef.current) {
        const strawHatGroup = new THREE.Group();
        strawHatGroup.position.set(0, 1.26, 0.08);
        strawHatGroup.rotation.x = -0.12;
        strawHatGroup.rotation.z = 0.05;

        const strawMat = new THREE.MeshStandardMaterial({
          color: 0xdfab35,
          roughness: 0.8,
          metalness: 0.05,
        });

        // Hat Brim
        const brim = new THREE.Mesh(new THREE.CylinderGeometry(1.68, 1.70, 0.07, 32), strawMat);
        strawHatGroup.add(brim);

        // Hat Crown Dome
        const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.96, 1.02, 0.44, 24), strawMat);
        crown.position.set(0, 0.22, 0);
        strawHatGroup.add(crown);

        // Hat Scarlet Red Ribbon Band
        const ribbonMat = new THREE.MeshStandardMaterial({
          color: 0xc81424,
          roughness: 0.45,
        });
        const ribbon = new THREE.Mesh(new THREE.CylinderGeometry(1.03, 1.03, 0.12, 24), ribbonMat);
        ribbon.position.set(0, 0.08, 0);
        strawHatGroup.add(ribbon);

        charHeadDecorRef.current.add(strawHatGroup);
      }

      // Luffy Cartoon Action Figure Body: Scarlet Vest, Golden Sash, Denim Blue Shorts
      if (charBodyDecorRef.current) {
        const vestMat = new THREE.MeshStandardMaterial({
          color: 0xb8141b,
          roughness: 0.7,
        });

        // Left Vest Flap
        const vestL = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.76, 0.08), vestMat);
        vestL.position.set(-0.35, 0.10, 0.82);
        charBodyDecorRef.current.add(vestL);

        // Right Vest Flap
        const vestR = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.76, 0.08), vestMat);
        vestR.position.set(0.35, 0.10, 0.82);
        charBodyDecorRef.current.add(vestR);

        // Yellow Golden Waist Sash Belt
        const sashMat = new THREE.MeshStandardMaterial({
          color: 0xdfab35,
          roughness: 0.65,
        });
        const sash = new THREE.Mesh(new THREE.CylinderGeometry(0.86, 0.90, 0.22, 24), sashMat);
        sash.position.set(0, -0.16, 0);
        charBodyDecorRef.current.add(sash);

        // Sash Knot & Ribbon Tails
        const knot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), sashMat);
        knot.position.set(-0.25, -0.16, 0.86);
        charBodyDecorRef.current.add(knot);

        const knotTail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.32, 0.04), sashMat);
        knotTail.position.set(-0.27, -0.30, 0.86);
        knotTail.rotation.z = -0.15;
        charBodyDecorRef.current.add(knotTail);

        // Denim Blue Shorts
        const denimMat = new THREE.MeshStandardMaterial({
          color: 0x244f80,
          roughness: 0.75,
        });
        const shorts = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.92, 0.18, 24), denimMat);
        shorts.position.set(0, -0.36, 0);
        charBodyDecorRef.current.add(shorts);
      }
    } else if (cType === 'spiderman' && charBodyDecorRef.current) {
      // Spider-Man Cartoon Action Figure Body: Chest Spider Emblem & Web Belt
      const spiderMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0f });
      const spiderBody = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.22, 12), spiderMat);
      spiderBody.position.set(0, 0.14, 0.88);
      spiderBody.rotation.x = Math.PI / 2;
      charBodyDecorRef.current.add(spiderBody);

      // Spider Legs on Chest
      const legMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0f });
      [-0.14, -0.06, 0.06, 0.14].forEach((legY, i) => {
        const legL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.025, 0.02), legMat);
        legL.position.set(-0.12, 0.14 + legY, 0.88);
        legL.rotation.z = i < 2 ? 0.35 : -0.35;
        charBodyDecorRef.current?.add(legL);

        const legR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.025, 0.02), legMat);
        legR.position.set(0.12, 0.14 + legY, 0.88);
        legR.rotation.z = i < 2 ? -0.35 : 0.35;
        charBodyDecorRef.current?.add(legR);
      });

      // Spider Navy Blue Waist Belt
      const beltMat = new THREE.MeshStandardMaterial({ color: 0x0f3b82, roughness: 0.5 });
      const beltMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.88, 0.16, 24), beltMat);
      beltMesh.position.set(0, -0.22, 0);
      charBodyDecorRef.current.add(beltMesh);
    } else if (cType === 'sukuna' && charBodyDecorRef.current) {
      // Sukuna Cartoon Action Figure Body: White Kimono Robe, Obi Sash & Cursed Markings
      const kimonoMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f7, roughness: 0.6 });
      const kimonoWrap = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.94, 0.82, 24), kimonoMat);
      kimonoWrap.position.set(0, 0.02, 0);
      charBodyDecorRef.current.add(kimonoWrap);

      // Black Obi Sash Belt
      const obiMat = new THREE.MeshStandardMaterial({ color: 0x111115, roughness: 0.8 });
      const obiMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.86, 0.88, 0.22, 24), obiMat);
      obiMesh.position.set(0, -0.15, 0);
      charBodyDecorRef.current.add(obiMesh);

      // Cursed Ink Marks across the Robe Torso
      const inkMat = new THREE.MeshBasicMaterial({ color: 0x0c060d });
      const markL = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.04, 0.02), inkMat);
      markL.position.set(-0.25, 0.18, 0.85);
      markL.rotation.z = -0.4;
      charBodyDecorRef.current.add(markL);

      const markR = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.04, 0.02), inkMat);
      markR.position.set(0.25, 0.18, 0.85);
      markR.rotation.z = 0.4;
      charBodyDecorRef.current.add(markR);
    } else if (cType === 'deadpool' && charBodyDecorRef.current) {
      // Deadpool Cartoon Action Figure Body: Tactical Criss-Cross Harness & Pouches
      const harnessMat = new THREE.MeshStandardMaterial({ color: 0x18181c, roughness: 0.7 });
      
      // Strap 1 (Diagonal Left-to-Right)
      const strap1 = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.12, 0.04), harnessMat);
      strap1.position.set(0, 0.12, 0.84);
      strap1.rotation.z = 0.55;
      charBodyDecorRef.current.add(strap1);

      // Strap 2 (Diagonal Right-to-Left)
      const strap2 = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.12, 0.04), harnessMat);
      strap2.position.set(0, 0.12, 0.85);
      strap2.rotation.z = -0.55;
      charBodyDecorRef.current.add(strap2);

      // Metallic Center Buckle
      const buckleMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.8, roughness: 0.2 });
      const buckle = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.05, 16), buckleMat);
      buckle.position.set(0, 0.12, 0.88);
      buckle.rotation.x = Math.PI / 2;
      charBodyDecorRef.current.add(buckle);

      // Utility Belt
      const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.89, 0.14, 24), harnessMat);
      belt.position.set(0, -0.24, 0);
      charBodyDecorRef.current.add(belt);
    } else if (cType === 'lofi' && charBodyDecorRef.current) {
      // Lofi Cartoon Action Figure Body: Cozy Oversized Sage Hoodie with Kangaroo Pouch
      const hoodieMat = new THREE.MeshStandardMaterial({ color: 0x3d5a49, roughness: 0.85 });

      // Hoodie Collar / Hood Fold around the neck
      const collarGeo = new THREE.TorusGeometry(0.82, 0.12, 12, 32);
      const collarMesh = new THREE.Mesh(collarGeo, hoodieMat);
      collarMesh.rotation.x = Math.PI / 2;
      collarMesh.position.set(0, 0.44, 0);
      charBodyDecorRef.current.add(collarMesh);

      // Kangaroo Front Pocket Pouch
      const pouchMat = new THREE.MeshStandardMaterial({ color: 0x324a3c, roughness: 0.85 });
      const pouchMesh = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.32, 0.12), pouchMat);
      pouchMesh.position.set(0, -0.12, 0.84);
      charBodyDecorRef.current.add(pouchMesh);

      // White Hoodie Drawstrings
      const cordMat = new THREE.MeshBasicMaterial({ color: 0xf0f2f5 });
      const cordL = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 8), cordMat);
      cordL.position.set(-0.16, 0.22, 0.86);
      charBodyDecorRef.current.add(cordL);

      const cordR = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 8), cordMat);
      cordR.position.set(0.16, 0.22, 0.86);
      charBodyDecorRef.current.add(cordR);
    } else if (cType === 'ironman' && charBodyDecorRef.current) {
      // Iron Man Cartoon Action Figure Body: Titanium Gold Chest Plate & Cyan Arc Reactor
      const armorPlateMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85, roughness: 0.2 });
      const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.08), armorPlateMat);
      chestPlate.position.set(0, 0.12, 0.82);
      charBodyDecorRef.current.add(chestPlate);

      // Glowing Cyan Arc Reactor on Chest
      const reactorRingMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.15 });
      const ringGeo = new THREE.TorusGeometry(0.22, 0.05, 16, 32);
      const ringMesh = new THREE.Mesh(ringGeo, reactorRingMat);
      ringMesh.position.set(0, 0.12, 0.88);
      charBodyDecorRef.current.add(ringMesh);

      const coreMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
      const coreGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.06, 24);
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreMesh.position.set(0, 0.12, 0.89);
      coreMesh.rotation.x = Math.PI / 2;
      charBodyDecorRef.current.add(coreMesh);

      // Cyan illumination light
      const reactorLight = new THREE.PointLight(0x00f0ff, 2.0, 2.8);
      reactorLight.position.set(0, 0.12, 1.25);
      charBodyDecorRef.current.add(reactorLight);
    }
  };

  // Sync Material and Character updates when theme changes
  useEffect(() => {
    if (!theme) return;
    if (bodyMatRef.current) {
      bodyMatRef.current.color.setHex(theme.bodyColor);
      bodyMatRef.current.roughness = theme.roughness;
      bodyMatRef.current.metalness = theme.metalness;
      bodyMatRef.current.needsUpdate = true;
    }
    if (accentMatRef.current) {
      accentMatRef.current.color.setHex(theme.accentColor);
      accentMatRef.current.emissive.setHex(theme.accentColor);
      accentMatRef.current.needsUpdate = true;
    }
    if (screenMatRef.current) {
      screenMatRef.current.color.setHex(theme.screenColor);
      screenMatRef.current.needsUpdate = true;
    }
    if (eyeMatRef.current) {
      eyeMatRef.current.color.setHex(theme.eyeColor);
      eyeMatRef.current.needsUpdate = true;
    }
    if (eyeHaloMatRef.current) {
      eyeHaloMatRef.current.color.setHex(theme.glowColor);
      eyeHaloMatRef.current.needsUpdate = true;
    }
    if (rimLightRef.current) {
      rimLightRef.current.color.setHex(theme.accentColor);
    }
    if (frontGlowLightRef.current) {
      frontGlowLightRef.current.color.setHex(theme.glowColor);
    }

    updateCharacterVisuals(theme);
  }, [theme]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;
    const initAspect = width / height;
    const initDist = initAspect < 1.0 ? 7.6 / Math.min(1.0, initAspect * 1.12) : 7.6;
    const camera = new THREE.PerspectiveCamera(40, initAspect, 0.1, 100);
    camera.position.set(0, 0, Math.min(10.5, Math.max(7.2, initDist)));

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // --- Studio Lighting Setup ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff2e2, 2.8);
    keyLight.position.set(4, 6, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xcfd8ff, 1.2);
    fillLight.position.set(-6, 2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(theme.accentColor, 3.5);
    rimLight.position.set(0, 3, -6);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    // Front soft eye glow point light
    const frontGlow = new THREE.PointLight(theme.glowColor, 1.2, 5);
    frontGlow.position.set(0, 0.4, 2.5);
    scene.add(frontGlow);
    frontGlowLightRef.current = frontGlow;

    // --- Materials (Standard & Physical) ---
    const bodyMat = new THREE.MeshStandardMaterial({
      color: theme.bodyColor,
      roughness: theme.roughness,
      metalness: theme.metalness,
    });
    bodyMatRef.current = bodyMat;

    const accentMat = new THREE.MeshStandardMaterial({
      color: theme.accentColor,
      roughness: 0.35,
      metalness: 0.15,
      emissive: theme.accentColor,
      emissiveIntensity: 0.28,
    });
    accentMatRef.current = accentMat;

    const screenMat = new THREE.MeshPhysicalMaterial({
      color: theme.screenColor,
      roughness: 0.08,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      reflectivity: 0.95,
    });
    screenMatRef.current = screenMat;

    const eyeMat = new THREE.MeshBasicMaterial({
      color: theme.eyeColor,
      depthTest: true,
      depthWrite: false,
    });
    eyeMatRef.current = eyeMat;

    const eyeHaloMat = new THREE.MeshBasicMaterial({
      color: theme.glowColor,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    eyeHaloMatRef.current = eyeHaloMat;

    // --- Master Hierarchical Robot Group ---
    const robotGroup = new THREE.Group();
    robotGroupRef.current = robotGroup;
    robotGroup.position.set(0, -0.15, 0);
    scene.add(robotGroup);

    // --- 1. Head Group (Pivots independently to track cursor) ---
    const headGroup = new THREE.Group();
    headGroupRef.current = headGroup;
    headGroup.position.set(0, 0.48, 0);
    robotGroup.add(headGroup);

    // Character Head Decor Group
    const charHeadDecor = new THREE.Group();
    charHeadDecorRef.current = charHeadDecor;
    headGroup.add(charHeadDecor);

    // Head Main Casing (Large rounded squircle shape extruded)
    const headWidth = 2.95;
    const headHeight = 2.30;
    const headRadius = 1.05;
    const headDepth = 1.95;

    const headShape = createSquircleShape(headWidth, headHeight, headRadius);
    const headExtrudeSettings = {
      depth: headDepth,
      bevelEnabled: true,
      bevelSegments: 10,
      steps: 2,
      bevelSize: 0.36,
      bevelThickness: 0.36,
    };
    const headGeo = new THREE.ExtrudeGeometry(headShape, headExtrudeSettings);
    headGeo.center();
    const headMesh = new THREE.Mesh(headGeo, bodyMat);
    headMesh.castShadow = true;
    headMesh.receiveShadow = true;
    headGroup.add(headMesh);

    // 2. Recessed Dark Glass OLED Screen Face (Deep glossy black panel)
    const screenWidth = 2.14;
    const screenHeight = 1.48;
    const screenRadius = 0.62;
    const screenShape = createSquircleShape(screenWidth, screenHeight, screenRadius);
    const screenGeo = new THREE.ExtrudeGeometry(screenShape, {
      depth: 0.05,
      bevelEnabled: true,
      bevelSegments: 6,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    });
    screenGeo.center();
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0, 1.35);
    screenMesh.renderOrder = 2;
    headGroup.add(screenMesh);

    // 3. Front Accent Screen Bezel / Rim (Hollow 3D frame encircling the screen)
    const bezelShape = createSquircleHollowShape(2.26, 1.58, 0.68, 2.06, 1.38, 0.58);
    const bezelGeo = new THREE.ExtrudeGeometry(bezelShape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelSegments: 5,
      bevelSize: 0.025,
      bevelThickness: 0.025,
    });
    bezelGeo.center();
    const bezelMesh = new THREE.Mesh(bezelGeo, accentMat);
    bezelMesh.position.set(0, 0, 1.37);
    bezelMesh.renderOrder = 3;
    headGroup.add(bezelMesh);

    // 4. Eyes (Dynamic character geometries floating on OLED screen)
    const eyeShape = createSquircleShape(0.44, 0.50, 0.16);
    const eyeGeo = new THREE.ShapeGeometry(eyeShape);

    // Left Eye
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.36, -0.01, 1.415);
    leftEye.renderOrder = 10;
    headGroup.add(leftEye);
    leftEyeRef.current = leftEye;

    // Right Eye
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.36, -0.01, 1.415);
    rightEye.renderOrder = 10;
    headGroup.add(rightEye);
    rightEyeRef.current = rightEye;

    // Eye Halos
    const haloGeo = new THREE.ShapeGeometry(createSquircleShape(0.62, 0.68, 0.24));
    const leftHalo = new THREE.Mesh(haloGeo, eyeHaloMat);
    leftHalo.position.set(-0.36, -0.01, 1.41);
    leftHalo.renderOrder = 9;
    headGroup.add(leftHalo);
    leftEyeHaloRef.current = leftHalo;

    const rightHalo = new THREE.Mesh(haloGeo, eyeHaloMat);
    rightHalo.position.set(0.36, -0.01, 1.41);
    rightHalo.renderOrder = 9;
    headGroup.add(rightHalo);
    rightEyeHaloRef.current = rightHalo;

    // 5. Ear Speaker Pods (Capsules on sides)
    const earRadius = 0.44;
    const earLength = 0.48;
    const earShape = new THREE.Shape();
    earShape.absarc(0, 0, earRadius, 0, Math.PI * 2, false);
    const earGeo = new THREE.ExtrudeGeometry(earShape, {
      depth: earLength,
      bevelEnabled: true,
      bevelSegments: 8,
      bevelSize: 0.14,
      bevelThickness: 0.14,
    });
    earGeo.center();

    // Left Ear
    const leftEar = new THREE.Mesh(earGeo, accentMat);
    leftEar.rotation.y = Math.PI / 2;
    leftEar.position.set(-1.92, 0, 0);
    headGroup.add(leftEar);
    leftEarRef.current = leftEar;

    // Right Ear
    const rightEar = new THREE.Mesh(earGeo, accentMat);
    rightEar.rotation.y = -Math.PI / 2;
    rightEar.position.set(1.92, 0, 0);
    headGroup.add(rightEar);
    rightEarRef.current = rightEar;

    // 6. Body Group (Torso, stubby stationary arms, legs)
    const bodyGroup = new THREE.Group();
    bodyGroupRef.current = bodyGroup;
    bodyGroup.position.set(0, -1.35, 0);
    robotGroup.add(bodyGroup);

    // Character Body Decor Group
    const charBodyDecor = new THREE.Group();
    charBodyDecorRef.current = charBodyDecor;
    bodyGroup.add(charBodyDecor);

    // Torso
    const torsoGeo = new THREE.CylinderGeometry(0.78, 0.90, 1.05, 32);
    const torsoMesh = new THREE.Mesh(torsoGeo, bodyMat);
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    bodyGroup.add(torsoMesh);

    // Arms: Sleek stationary companion stance (NO HAND WAVING as per specifications)
    const armGeo = new THREE.CapsuleGeometry(0.22, 0.42, 16, 16);
    const leftArm = new THREE.Mesh(armGeo, bodyMat);
    leftArm.position.set(-1.0, 0.18, 0);
    leftArm.rotation.z = Math.PI / 8;
    leftArm.castShadow = true;
    bodyGroup.add(leftArm);
    leftArmRef.current = leftArm;

    const rightArm = new THREE.Mesh(armGeo, bodyMat);
    rightArm.position.set(1.0, 0.18, 0);
    rightArm.rotation.z = -Math.PI / 8;
    rightArm.castShadow = true;
    bodyGroup.add(rightArm);
    rightArmRef.current = rightArm;

    // Legs
    const legGeo = new THREE.CapsuleGeometry(0.29, 0.48, 16, 16);
    const leftLeg = new THREE.Mesh(legGeo, bodyMat);
    leftLeg.position.set(-0.46, -0.68, 0);
    leftLeg.castShadow = true;
    bodyGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, bodyMat);
    rightLeg.position.set(0.46, -0.68, 0);
    rightLeg.castShadow = true;
    bodyGroup.add(rightLeg);

    // Bottom Ambient Soft Shadow Disc
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.38 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -2.35;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Initialize character visuals on mount
    updateCharacterVisuals(theme);

    // --- Window Mouse & Touch Tracking Listeners ---
    const handleWindowMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePosRef.current = { x: nx, y: ny };
    };

    const handleWindowTouch = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const t = e.touches[0];
        const nx = (t.clientX / window.innerWidth) * 2 - 1;
        const ny = -(t.clientY / window.innerHeight) * 2 + 1;
        mousePosRef.current = { x: nx, y: ny };
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('touchstart', handleWindowTouch, { passive: true });
    window.addEventListener('touchmove', handleWindowTouch, { passive: true });

    // Blink timer (blinks every 3.5s)
    const blinkInterval = setInterval(() => {
      isBlinkingRef.current = true;
      setTimeout(() => {
        isBlinkingRef.current = false;
      }, 150);
    }, 3500);

    // --- Animation Render Loop ---
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const currentMood = activeReactionRef.current;

      // Clamped cursor tracking (keeps robot oriented toward user without twisting away)
      const clampedX = Math.max(-0.7, Math.min(0.7, mousePosRef.current.x));
      const clampedY = Math.max(-0.6, Math.min(0.6, mousePosRef.current.y));

      let targetHeadRotY = clampedX * 0.42;
      let targetHeadRotX = -clampedY * 0.25;
      let targetHeadTiltZ = -clampedX * 0.08;
      let targetBodyRotY = clampedX * 0.16;
      let targetBodyRotX = -clampedY * 0.08;
      let bobOffsetY = Math.sin(elapsedTime * 2.2) * 0.08;
      let targetEyeScaleY = isBlinkingRef.current ? 0.08 : 1.0;
      let eyeScaleX = 1.0;

      // --- Mood Reaction Behaviors (Strictly NO hand waving) ---
      if (currentMood === 'nod') {
        // Friendly double nod & listening tilt
        nodTimeRef.current += 0.12;
        targetHeadRotX = -0.22 + Math.sin(nodTimeRef.current * 7) * 0.18;
        bobOffsetY += Math.sin(nodTimeRef.current * 7) * 0.04;
        targetEyeScaleY = 1.15;
      } else if (currentMood === 'dance') {
        bobOffsetY = Math.abs(Math.sin(elapsedTime * 8)) * 0.28;
        targetBodyRotY = Math.sin(elapsedTime * 5) * 0.22;
        targetHeadTiltZ = Math.cos(elapsedTime * 5) * 0.15;
      } else if (currentMood === 'laugh') {
        bobOffsetY += Math.sin(elapsedTime * 22) * 0.07;
        targetHeadRotX = -0.15;
        targetEyeScaleY = 0.3; // laughing squint eyes
      } else if (currentMood === 'love') {
        targetHeadTiltZ = -0.15;
        targetHeadRotX = -0.08;
        bobOffsetY += Math.sin(elapsedTime * 3) * 0.04;
        eyeScaleX = 1.15;
      } else if (currentMood === 'sleep') {
        targetHeadRotX = 0.22; // Head nods down
        bobOffsetY = -0.2 + Math.sin(elapsedTime * 1.2) * 0.03;
        targetEyeScaleY = 0.08; // sleeping closed eyes
      } else if (currentMood === 'shock') {
        targetHeadRotX = -0.25; // Head jerks up
        bobOffsetY = 0.18;
        targetEyeScaleY = 1.45; // wide open eyes
        eyeScaleX = 1.35;
      } else if (currentMood === 'spin') {
        spinProgressRef.current += 0.08;
        targetBodyRotY = spinProgressRef.current * Math.PI * 2;
        if (spinProgressRef.current >= 1.0) {
          activeReactionRef.current = 'idle';
          isSpinningRef.current = false;
          spinProgressRef.current = 0;
          if (robotGroupRef.current) robotGroupRef.current.rotation.y = 0;
        }
      }

      // 1. Head and Body Rotation Lerping
      if (headGroupRef.current) {
        headGroupRef.current.rotation.y = THREE.MathUtils.lerp(
          headGroupRef.current.rotation.y,
          targetHeadRotY,
          0.08
        );
        headGroupRef.current.rotation.x = THREE.MathUtils.lerp(
          headGroupRef.current.rotation.x,
          targetHeadRotX,
          0.08
        );
        headGroupRef.current.rotation.z = THREE.MathUtils.lerp(
          headGroupRef.current.rotation.z,
          targetHeadTiltZ,
          0.08
        );
      }

      if (robotGroupRef.current) {
        if (!isSpinningRef.current) {
          robotGroupRef.current.rotation.y = THREE.MathUtils.lerp(
            robotGroupRef.current.rotation.y,
            targetBodyRotY,
            0.05
          );
        } else {
          robotGroupRef.current.rotation.y = targetBodyRotY;
        }
        robotGroupRef.current.rotation.x = THREE.MathUtils.lerp(
          robotGroupRef.current.rotation.x,
          targetBodyRotX,
          0.05
        );
        robotGroupRef.current.position.y = THREE.MathUtils.lerp(
          robotGroupRef.current.position.y,
          bobOffsetY,
          0.1
        );
      }

      // 2. Arms stay in natural resting stance with subtle breathing oscillation
      const armBreathe = Math.sin(elapsedTime * 2.2) * 0.03;
      if (leftArmRef.current) {
        leftArmRef.current.rotation.z = Math.PI / 8 + armBreathe;
      }
      if (rightArmRef.current) {
        rightArmRef.current.rotation.z = -Math.PI / 8 - armBreathe;
      }

      // 3. Eyes Gaze Tracking + Natural Blinking
      const eyeOffsetX = mousePosRef.current.x * 0.06;
      const eyeOffsetY = mousePosRef.current.y * 0.04;
      const baseLeftX = -0.36 + eyeOffsetX;
      const baseRightX = 0.36 + eyeOffsetX;
      const baseY = -0.01 + eyeOffsetY;

      if (leftEyeRef.current && rightEyeRef.current) {
        leftEyeRef.current.position.x = THREE.MathUtils.lerp(leftEyeRef.current.position.x, baseLeftX, 0.1);
        leftEyeRef.current.position.y = THREE.MathUtils.lerp(leftEyeRef.current.position.y, baseY, 0.1);
        leftEyeRef.current.position.z = 1.415;
        leftEyeRef.current.scale.y = THREE.MathUtils.lerp(leftEyeRef.current.scale.y, targetEyeScaleY, 0.35);
        leftEyeRef.current.scale.x = eyeScaleX;

        rightEyeRef.current.position.x = THREE.MathUtils.lerp(rightEyeRef.current.position.x, baseRightX, 0.1);
        rightEyeRef.current.position.y = THREE.MathUtils.lerp(rightEyeRef.current.position.y, baseY, 0.1);
        rightEyeRef.current.position.z = 1.415;
        rightEyeRef.current.scale.y = THREE.MathUtils.lerp(rightEyeRef.current.scale.y, targetEyeScaleY, 0.35);
        rightEyeRef.current.scale.x = eyeScaleX;
      }

      if (leftEyeHaloRef.current && rightEyeHaloRef.current) {
        leftEyeHaloRef.current.position.x = leftEyeRef.current ? leftEyeRef.current.position.x : baseLeftX;
        leftEyeHaloRef.current.position.y = leftEyeRef.current ? leftEyeRef.current.position.y : baseY;
        leftEyeHaloRef.current.position.z = 1.41;
        leftEyeHaloRef.current.scale.y = targetEyeScaleY * 1.25;
        leftEyeHaloRef.current.scale.x = eyeScaleX * 1.25;

        rightEyeHaloRef.current.position.x = rightEyeRef.current ? rightEyeRef.current.position.x : baseRightX;
        rightEyeHaloRef.current.position.y = rightEyeRef.current ? rightEyeRef.current.position.y : baseY;
        rightEyeHaloRef.current.position.z = 1.41;
        rightEyeHaloRef.current.scale.y = targetEyeScaleY * 1.25;
        rightEyeHaloRef.current.scale.x = eyeScaleX * 1.25;
      }

      // 4. Ear subtle acoustic pulse
      const earPulse = 1.0 + Math.sin(elapsedTime * 3.5) * 0.025;
      if (leftEarRef.current && rightEarRef.current) {
        leftEarRef.current.scale.set(1, 1, earPulse);
        rightEarRef.current.scale.set(1, 1, earPulse);
      }

      renderer.render(scene, camera);
    };

    animate();

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleCanvasTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }
    };

    const handleCanvasTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        const dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
        const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
        const dt = Date.now() - touchStartTime;
        if (dx < 14 && dy < 14 && dt < 450) {
          robotAudio.playNod();
          if (onTap) onTap();
        }
      }
    };

    container.addEventListener('touchstart', handleCanvasTouchStart, { passive: true });
    container.addEventListener('touchend', handleCanvasTouchEnd, { passive: true });

    // Robust Resize handling with ResizeObserver for all device layouts
    const updateDimensions = (nw: number, nh: number) => {
      if (nw <= 0 || nh <= 0) return;
      const aspect = nw / nh;
      camera.aspect = aspect;
      const baseDist = aspect < 1.0 ? 7.6 / Math.min(1.0, aspect * 1.12) : 7.6;
      camera.position.z = Math.min(10.5, Math.max(7.2, baseDist));
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && container) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect) {
            updateDimensions(entry.contentRect.width, entry.contentRect.height);
          }
        }
      });
      resizeObserver.observe(container);
    }

    const handleWindowResize = () => {
      if (!container) return;
      updateDimensions(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      clearInterval(blinkInterval);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('touchstart', handleWindowTouch);
      window.removeEventListener('touchmove', handleWindowTouch);
      window.removeEventListener('resize', handleWindowResize);
      container.removeEventListener('touchstart', handleCanvasTouchStart);
      container.removeEventListener('touchend', handleCanvasTouchEnd);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      cancelAnimationFrame(animId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleClick = () => {
    robotAudio.playNod();
    if (onTap) onTap();
  };

  return (
    <div
      ref={mountRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ touchAction: 'pan-y' }}
      className={`relative w-full h-full select-none cursor-pointer transition-transform duration-300 ${
        isHovered ? 'scale-[1.02]' : 'scale-100'
      } ${className}`}
      title="Move your mouse or touch screen to watch ORoX track your gaze! Click to interact."
    />
  );
};

export default InteractiveRobot3D;
