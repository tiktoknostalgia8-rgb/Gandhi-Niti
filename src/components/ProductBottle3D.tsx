import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ProductBottle3DProps {
  liquidColor: string;
  productName: string;
}

export const ProductBottle3D: React.FC<ProductBottle3DProps> = ({ liquidColor, productName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer | null = null;
    let animFrameId: number;
    let isDisposed = false;

    try {
      const width = container.clientWidth || 400;
      const height = container.clientHeight || 450;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.shadowMap.enabled = true;

      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();

      // Camera: Fixed distance so scroll doesn't zoom
      const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
      camera.position.set(0, 1.2, 5.2);

      // Studio Lighting for Glass & Metals
      const keyLight = new THREE.DirectionalLight(0xFFF0DC, 2.5);
      keyLight.position.set(3, 5, 4);
      keyLight.castShadow = true;
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0xD9B44A, 1.8);
      rimLight.position.set(-4, 3, -3);
      scene.add(rimLight);

      const fillLight = new THREE.DirectionalLight(0xF1E6CC, 1.0);
      fillLight.position.set(0, -2, 3);
      scene.add(fillLight);

      const ambientLight = new THREE.AmbientLight(0xF1E6CC, 0.8);
      scene.add(ambientLight);

      // Main Bottle Group
      const bottleGroup = new THREE.Group();
      scene.add(bottleGroup);

      // Glass Flacon LatheGeometry
      const bottlePoints: THREE.Vector2[] = [];
      bottlePoints.push(new THREE.Vector2(0, 0));
      bottlePoints.push(new THREE.Vector2(0.68, 0.05));
      bottlePoints.push(new THREE.Vector2(0.72, 0.25));
      bottlePoints.push(new THREE.Vector2(0.72, 2.3));
      bottlePoints.push(new THREE.Vector2(0.66, 2.5));
      bottlePoints.push(new THREE.Vector2(0.42, 2.75));
      bottlePoints.push(new THREE.Vector2(0.42, 3.1));
      bottlePoints.push(new THREE.Vector2(0.32, 3.1));

      const glassGeom = new THREE.LatheGeometry(bottlePoints, 36);
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xFAF7EE,
        transmission: 0.9,
        opacity: 1,
        transparent: true,
        roughness: 0.1,
        ior: 1.54,
        thickness: 0.9,
        specularIntensity: 1.4,
        depthWrite: false
      });
      const glassMesh = new THREE.Mesh(glassGeom, glassMat);
      glassMesh.castShadow = true;
      glassMesh.position.y = -1.2;
      bottleGroup.add(glassMesh);

      // Inner Liquid Column with custom liquidColor
      const colorVal = new THREE.Color(liquidColor);
      const liquidPoints: THREE.Vector2[] = [];
      liquidPoints.push(new THREE.Vector2(0, 0.15));
      liquidPoints.push(new THREE.Vector2(0.58, 0.18));
      liquidPoints.push(new THREE.Vector2(0.62, 2.15));
      liquidPoints.push(new THREE.Vector2(0, 2.15));

      const liquidGeom = new THREE.LatheGeometry(liquidPoints, 36);
      const liquidMat = new THREE.MeshStandardMaterial({
        color: colorVal,
        roughness: 0.25,
        metalness: 0.12,
        transparent: true,
        opacity: 0.86
      });
      const liquidMesh = new THREE.Mesh(liquidGeom, liquidMat);
      liquidMesh.position.y = -1.2;
      bottleGroup.add(liquidMesh);

      // Gold Collar & Roll-On Applicator Housing
      const collarGeom = new THREE.CylinderGeometry(0.46, 0.46, 0.2, 32);
      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xB8902B,
        metalness: 0.9,
        roughness: 0.2
      });
      const collarMesh = new THREE.Mesh(collarGeom, goldMat);
      collarMesh.position.y = 1.65;
      bottleGroup.add(collarMesh);

      // Roller Ball
      const ballGeom = new THREE.SphereGeometry(0.28, 24, 24);
      const ballMat = new THREE.MeshStandardMaterial({
        color: 0xFAF6E9,
        roughness: 0.28,
        metalness: 0.05
      });
      const ballMesh = new THREE.Mesh(ballGeom, ballMat);
      ballMesh.position.y = 1.9;
      bottleGroup.add(ballMesh);

      // Gold Fluted Cap resting above
      const capGeom = new THREE.CylinderGeometry(0.52, 0.52, 0.95, 36);
      const capMesh = new THREE.Mesh(capGeom, goldMat);
      capMesh.position.y = 2.55;
      bottleGroup.add(capMesh);

      // Ground Shadow
      const shadowGeom = new THREE.PlaneGeometry(2.5, 2.5);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: 0x2E1B0F,
        transparent: true,
        opacity: 0.24
      });
      const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.y = -1.21;
      bottleGroup.add(shadowMesh);

      // Drag to rotate ONLY (no scroll zoom)
      let isDragging = false;
      let prevPointerX = 0;
      let prevPointerY = 0;
      let idleTimer: NodeJS.Timeout | null = null;
      let autoRotate = true;

      const onPointerDown = (e: PointerEvent) => {
        isDragging = true;
        autoRotate = false;
        setIsInteracting(true);
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
        if (idleTimer) clearTimeout(idleTimer);
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        bottleGroup.rotation.y += deltaX * 0.012;
        bottleGroup.rotation.x = Math.max(-0.4, Math.min(0.4, bottleGroup.rotation.x + deltaY * 0.008));
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      };

      const onPointerUp = () => {
        isDragging = false;
        setIsInteracting(false);
        // Resume auto-rotation after 1.5s idle
        idleTimer = setTimeout(() => {
          autoRotate = true;
        }, 1500);
      };

      const dom = renderer.domElement;
      dom.style.cursor = 'grab';
      dom.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);

      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      // Render Loop
      let clock = new THREE.Clock();

      const animate = () => {
        if (isDisposed) return;
        animFrameId = requestAnimationFrame(animate);

        const delta = clock.getDelta();

        if (autoRotate && !prefersReducedMotion) {
          bottleGroup.rotation.y += delta * 0.55;
          // Return pitch back toward neutral
          bottleGroup.rotation.x += (0 - bottleGroup.rotation.x) * 0.05;
        }

        renderer?.render(scene, camera);
      };

      animate();

      return () => {
        isDisposed = true;
        cancelAnimationFrame(animFrameId);
        if (idleTimer) clearTimeout(idleTimer);
        dom.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('resize', handleResize);

        glassGeom.dispose();
        glassMat.dispose();
        liquidGeom.dispose();
        liquidMat.dispose();
        collarGeom.dispose();
        goldMat.dispose();
        ballGeom.dispose();
        ballMat.dispose();
        capGeom.dispose();
        shadowGeom.dispose();
        shadowMat.dispose();

        if (renderer && renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch {
      setWebglError(true);
    }
  }, [liquidColor]);

  if (webglError) {
    return (
      <div className="w-full h-80 flex flex-col items-center justify-center p-6 bg-[#E4D2A8]/20 border border-[#B8902B]/30 rounded-[3px]">
        <div className="w-24 h-48 rounded-md border border-[#5A3A22] bg-[#F1E6CC] flex flex-col items-center justify-end p-2 relative shadow-md">
          <div className="w-12 h-6 bg-[#B8902B] rounded-t-sm mb-2" />
          <div
            className="w-full rounded-sm"
            style={{ height: '70%', backgroundColor: liquidColor, opacity: 0.85 }}
          />
        </div>
        <span className="font-serif text-xs text-[#5A3A22] mt-3">{productName} · Flacon View</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] md:h-[460px] flex items-center justify-center bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[3px] overflow-hidden select-none">
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute top-3 left-4 px-2 py-0.5 bg-[#F1E6CC]/90 border border-[#B8902B]/40 rounded-[2px] text-[10px] font-mono text-[#5A3A22]">
        {isInteracting ? "Rotating flacon" : "Drag flacon to rotate · Scroll stays fixed"}
      </div>
      <div className="absolute bottom-3 right-4 flex items-center gap-2">
        <span
          className="w-3.5 h-3.5 rounded-full border border-[#5A3A22]"
          style={{ backgroundColor: liquidColor }}
          title={`Botanical liquid tone: ${liquidColor}`}
        />
        <span className="text-[11px] font-mono text-[#8A5A36]">Natural Distillate Tone</span>
      </div>
    </div>
  );
};
