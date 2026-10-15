import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer | null = null;
    let animFrameId: number;
    let isDisposed = false;

    try {
      const width = container.clientWidth || 500;
      const height = container.clientHeight || 500;

      // Initialize Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 1.8, 6.2);

      // Lighting Rig: Warm Key Light, Cool Rim Light, Soft Ambient Fill
      const keyLight = new THREE.DirectionalLight(0xFFE8C8, 2.8);
      keyLight.position.set(4, 6, 4);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0xD9B44A, 1.6);
      rimLight.position.set(-5, 4, -4);
      scene.add(rimLight);

      const ambientLight = new THREE.AmbientLight(0xF1E6CC, 0.9);
      scene.add(ambientLight);

      // Main Scene Pivot Group
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // 1. PROCEDURAL ITTAR ROLL-ON BOTTLE
      const bottleGroup = new THREE.Group();
      bottleGroup.position.set(1.1, -0.4, 0.4);

      // Glass Body: LatheGeometry
      const bottlePoints: THREE.Vector2[] = [];
      bottlePoints.push(new THREE.Vector2(0, 0));
      bottlePoints.push(new THREE.Vector2(0.55, 0.04));
      bottlePoints.push(new THREE.Vector2(0.58, 0.2));
      bottlePoints.push(new THREE.Vector2(0.58, 1.8));
      bottlePoints.push(new THREE.Vector2(0.54, 2.0));
      bottlePoints.push(new THREE.Vector2(0.35, 2.2));
      bottlePoints.push(new THREE.Vector2(0.35, 2.45));
      bottlePoints.push(new THREE.Vector2(0.28, 2.45));

      const bottleGeom = new THREE.LatheGeometry(bottlePoints, 32);
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xFDFBF7,
        transmission: 0.88,
        opacity: 1,
        transparent: true,
        roughness: 0.12,
        ior: 1.52,
        thickness: 0.8,
        specularIntensity: 1.2,
        depthWrite: false
      });
      const bottleMesh = new THREE.Mesh(bottleGeom, glassMat);
      bottleMesh.castShadow = true;
      bottleGroup.add(bottleMesh);

      // Inner Liquid Column
      const liquidPoints: THREE.Vector2[] = [];
      liquidPoints.push(new THREE.Vector2(0, 0.12));
      liquidPoints.push(new THREE.Vector2(0.48, 0.14));
      liquidPoints.push(new THREE.Vector2(0.50, 1.6));
      liquidPoints.push(new THREE.Vector2(0, 1.6));

      const liquidGeom = new THREE.LatheGeometry(liquidPoints, 32);
      const liquidMat = new THREE.MeshStandardMaterial({
        color: 0xC48B57, // Warm terracotta amber
        roughness: 0.2,
        metalness: 0.1,
        transparent: true,
        opacity: 0.88
      });
      const liquidMesh = new THREE.Mesh(liquidGeom, liquidMat);
      bottleGroup.add(liquidMesh);

      // Gold Neck Ring
      const neckGeom = new THREE.CylinderGeometry(0.38, 0.38, 0.12, 32);
      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xB8902B,
        metalness: 0.88,
        roughness: 0.22
      });
      const neckMesh = new THREE.Mesh(neckGeom, goldMat);
      neckMesh.position.y = 2.25;
      bottleGroup.add(neckMesh);

      // Roll-on applicator ball
      const ballGeom = new THREE.SphereGeometry(0.22, 24, 24);
      const ballMat = new THREE.MeshStandardMaterial({
        color: 0xEEE5D0,
        roughness: 0.35,
        metalness: 0.05
      });
      const ballMesh = new THREE.Mesh(ballGeom, ballMat);
      ballMesh.position.y = 2.45;
      bottleGroup.add(ballMesh);

      // Fluted Gold Cap (slightly hovering or resting)
      const capGeom = new THREE.CylinderGeometry(0.42, 0.42, 0.75, 32);
      const capMesh = new THREE.Mesh(capGeom, goldMat);
      capMesh.position.set(0, 2.9, 0);
      bottleGroup.add(capMesh);

      // Bottle Shadow
      const shadowGeom = new THREE.PlaneGeometry(1.6, 1.6);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: 0x2E1B0F,
        transparent: true,
        opacity: 0.22
      });
      const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.y = -0.01;
      bottleGroup.add(shadowMesh);

      mainGroup.add(bottleGroup);

      // 2. PROCEDURAL TRADITIONAL COPPER DEG (Kannauj Alembic Cauldron)
      const degGroup = new THREE.Group();
      degGroup.position.set(-1.2, -0.6, -0.2);

      // Copper Deg Pot: LatheGeometry
      const degPoints: THREE.Vector2[] = [];
      degPoints.push(new THREE.Vector2(0, 0));
      degPoints.push(new THREE.Vector2(0.9, 0.05));
      degPoints.push(new THREE.Vector2(1.25, 0.4));
      degPoints.push(new THREE.Vector2(1.4, 0.9));
      degPoints.push(new THREE.Vector2(1.2, 1.5));
      degPoints.push(new THREE.Vector2(0.8, 1.9));
      degPoints.push(new THREE.Vector2(0.75, 2.1));
      degPoints.push(new THREE.Vector2(0.85, 2.2)); // rim flange

      const degGeom = new THREE.LatheGeometry(degPoints, 36);
      const copperMat = new THREE.MeshStandardMaterial({
        color: 0xBA6838, // Rich oxidized Kannauj copper
        metalness: 0.85,
        roughness: 0.32
      });
      const degMesh = new THREE.Mesh(degGeom, copperMat);
      degMesh.castShadow = true;
      degGroup.add(degMesh);

      // Sarposh (Lid) sealed with clay collar
      const lidGeom = new THREE.ConeGeometry(0.8, 0.5, 32);
      const lidMesh = new THREE.Mesh(lidGeom, copperMat);
      lidMesh.position.y = 2.45;
      degGroup.add(lidMesh);

      // Clay sealing collar around neck (Multani mitti / raw mud seal)
      const clayCollarGeom = new THREE.TorusGeometry(0.82, 0.1, 16, 32);
      const clayMat = new THREE.MeshStandardMaterial({
        color: 0x8A5A36,
        roughness: 0.92,
        metalness: 0.02
      });
      const clayCollar = new THREE.Mesh(clayCollarGeom, clayMat);
      clayCollar.rotation.x = Math.PI / 2;
      clayCollar.position.y = 2.2;
      degGroup.add(clayCollar);

      // Chonga (Curved Bamboo Pipe to the receiver)
      const pipeCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.1, 2.6, 0),
        new THREE.Vector3(0.7, 2.8, 0.2),
        new THREE.Vector3(1.5, 2.4, 0.4),
        new THREE.Vector3(2.0, 1.2, 0.6),
        new THREE.Vector3(2.1, 0.2, 0.6)
      ]);
      const bambooGeom = new THREE.TubeGeometry(pipeCurve, 32, 0.07, 12, false);
      const bambooMat = new THREE.MeshStandardMaterial({
        color: 0xD4B26F, // Natural seasoned bamboo
        roughness: 0.65,
        metalness: 0.05
      });
      const bambooPipe = new THREE.Mesh(bambooGeom, bambooMat);
      degGroup.add(bambooPipe);

      // Deg Shadow
      const degShadowMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(3.2, 3.2),
        shadowMat
      );
      degShadowMesh.rotation.x = -Math.PI / 2;
      degShadowMesh.position.y = -0.01;
      degGroup.add(degShadowMesh);

      mainGroup.add(degGroup);

      // 3. FRAGRANCE WISPS (Golden Floating Dust Particles)
      const particleCount = 65;
      const particlePositions = new Float32Array(particleCount * 3);
      const particleYBase = new Float32Array(particleCount);
      const particleVelocities = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 3.5;
        const y = Math.random() * 3.5 - 0.5;
        particlePositions[i * 3 + 1] = y;
        particleYBase[i] = y;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 2.5;
        particleVelocities[i] = 0.005 + Math.random() * 0.008;
      }

      const particleGeom = new THREE.BufferGeometry();
      particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

      const particleMat = new THREE.PointsMaterial({
        color: 0xD9B44A,
        size: 0.045,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });
      const particleSystem = new THREE.Points(particleGeom, particleMat);
      scene.add(particleSystem);

      setIsLoaded(true);

      // Mouse Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetRotX = 0;
      let targetRotY = 0;

      const handlePointerMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotY = mouseX * 0.25;
        targetRotX = -mouseY * 0.15;
      };

      window.addEventListener('pointermove', handlePointerMove);

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        if (isDisposed) return;
        animFrameId = requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const time = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          // Slow continuous rotation of the bottle
          bottleGroup.rotation.y += delta * 0.45;

          // Gentle breathing movement on deg
          degGroup.rotation.y = Math.sin(time * 0.3) * 0.08;

          // Smooth mouse parallax damping
          mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.04;
          mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.04;

          // Animate fragrance particles upward
          const positions = particleGeom.attributes.position.array as Float32Array;
          for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 1] += particleVelocities[i];
            positions[i * 3] += Math.sin(time * 2 + i) * 0.001;
            if (positions[i * 3 + 1] > 3.5) {
              positions[i * 3 + 1] = -0.5;
            }
          }
          particleGeom.attributes.position.needsUpdate = true;
        }

        renderer?.render(scene, camera);
      };

      animate();

      return () => {
        isDisposed = true;
        cancelAnimationFrame(animFrameId);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('resize', handleResize);

        // Clean up geometries and materials
        bottleGeom.dispose();
        glassMat.dispose();
        liquidGeom.dispose();
        liquidMat.dispose();
        neckGeom.dispose();
        goldMat.dispose();
        ballGeom.dispose();
        ballMat.dispose();
        capGeom.dispose();
        degGeom.dispose();
        copperMat.dispose();
        lidGeom.dispose();
        clayCollarGeom.dispose();
        clayMat.dispose();
        bambooGeom.dispose();
        bambooMat.dispose();
        shadowGeom.dispose();
        shadowMat.dispose();
        particleGeom.dispose();
        particleMat.dispose();

        if (renderer && renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch {
      setWebglError(true);
    }
  }, []);

  if (webglError) {
    // Static SVG Fallback
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#E4D2A8]/20 border border-[#B8902B]/30 rounded-[3px]">
        <svg viewBox="0 0 300 240" className="w-64 h-52 text-[#5A3A22]" fill="none" stroke="currentColor">
          <circle cx="150" cy="120" r="90" stroke="#B8902B" strokeWidth="1" strokeDasharray="3 3" />
          {/* Deg silhouette */}
          <path d="M70 180 C70 120 120 120 120 90 L130 90 L130 180 Z" fill="#BA6838" fillOpacity="0.4" stroke="#5A3A22" strokeWidth="1.5" />
          {/* Bottle silhouette */}
          <path d="M180 80 L195 80 L195 180 L180 180 Z" fill="#C48B57" fillOpacity="0.5" stroke="#5A3A22" strokeWidth="1.5" />
          <circle cx="187" cy="74" r="5" fill="#B8902B" />
        </svg>
        <p className="font-serif text-xs text-[#5A3A22] mt-2 italic text-center">
          Traditional hydro-distillation in copper degs · Handcrafted Kannauj Flacon
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-xs font-serif text-[#8A5A36]">
          Sculpting copper deg & botanical flacon in 3D...
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" />
      {/* Subtle indicator banner at bottom right */}
      <div className="absolute bottom-3 right-4 px-2 py-0.5 bg-[#F1E6CC]/85 border border-[#B8902B]/40 rounded-[2px] text-[10px] font-mono text-[#5A3A22] pointer-events-none">
        Procedural Deg & Flacon · Three.js
      </div>
    </div>
  );
};
