import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SAPTANGA_ELEMENTS, SaptangaElement } from '../data/saptanga';

interface SaptangaWheel3DProps {
  selectedElementId: string;
  onSelectElement: (element: SaptangaElement) => void;
}

export const SaptangaWheel3D: React.FC<SaptangaWheel3DProps> = ({
  selectedElementId,
  onSelectElement
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer | null = null;
    let animFrameId: number;
    let isDisposed = false;

    try {
      const width = container.clientWidth || 550;
      const height = container.clientHeight || 500;

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

      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();

      // Camera: Slightly elevated isometric look
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
      camera.position.set(0, 3.8, 6.2);
      camera.lookAt(0, 0, 0);

      // Lighting
      const keyLight = new THREE.DirectionalLight(0xFFF2DF, 2.6);
      keyLight.position.set(4, 6, 4);
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0xD9B44A, 1.8);
      rimLight.position.set(-4, 3, -3);
      scene.add(rimLight);

      const ambientLight = new THREE.AmbientLight(0xF1E6CC, 0.9);
      scene.add(ambientLight);

      // Rotating Wheel Group
      const wheelGroup = new THREE.Group();
      scene.add(wheelGroup);

      // Central Sovereign Hub (The State / Dharma)
      const hubGeom = new THREE.CylinderGeometry(0.75, 0.75, 0.25, 36);
      const hubMat = new THREE.MeshStandardMaterial({
        color: 0xB8902B,
        metalness: 0.88,
        roughness: 0.2
      });
      const hubMesh = new THREE.Mesh(hubGeom, hubMat);
      wheelGroup.add(hubMesh);

      // Hub rim ring
      const hubRingGeom = new THREE.TorusGeometry(0.78, 0.04, 16, 36);
      const hubRingMesh = new THREE.Mesh(hubRingGeom, hubMat);
      hubRingMesh.rotation.x = Math.PI / 2;
      wheelGroup.add(hubRingMesh);

      // Outer Rim Orbit Ring
      const orbitRingGeom = new THREE.TorusGeometry(2.35, 0.03, 16, 64);
      const orbitRingMat = new THREE.MeshStandardMaterial({
        color: 0x8A5A36,
        roughness: 0.5,
        metalness: 0.3
      });
      const orbitRingMesh = new THREE.Mesh(orbitRingGeom, orbitRingMat);
      orbitRingMesh.rotation.x = Math.PI / 2;
      wheelGroup.add(orbitRingMesh);

      // 7 Nodes
      const nodeMeshes: THREE.Mesh[] = [];
      const nodeRadius = 2.35;
      const count = 7;

      SAPTANGA_ELEMENTS.forEach((element, idx) => {
        const angle = (idx / count) * Math.PI * 2;
        const x = Math.cos(angle) * nodeRadius;
        const z = Math.sin(angle) * nodeRadius;

        // Spoke from hub to node
        const spokeCurve = new THREE.LineCurve3(
          new THREE.Vector3(Math.cos(angle) * 0.75, 0, Math.sin(angle) * 0.75),
          new THREE.Vector3(x, 0, z)
        );
        const spokeGeom = new THREE.TubeGeometry(spokeCurve, 2, 0.025, 8, false);
        const spokeMat = new THREE.MeshStandardMaterial({
          color: 0xD9B44A,
          metalness: 0.7,
          roughness: 0.3
        });
        const spokeMesh = new THREE.Mesh(spokeGeom, spokeMat);
        wheelGroup.add(spokeMesh);

        // Node Cylinder Seal
        const isSelected = element.id === selectedElementId;
        const nodeGeom = new THREE.CylinderGeometry(0.38, 0.38, 0.18, 32);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: isSelected ? 0x6B1E1E : 0xF1E6CC,
          metalness: isSelected ? 0.4 : 0.2,
          roughness: isSelected ? 0.3 : 0.5
        });
        const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
        nodeMesh.position.set(x, 0, z);
        nodeMesh.userData = { element, originalColor: nodeMat.color.clone() };

        // Gold collar ring around seal node
        const collarGeom = new THREE.TorusGeometry(0.40, 0.03, 16, 32);
        const collarMat = new THREE.MeshStandardMaterial({
          color: 0xB8902B,
          metalness: 0.9,
          roughness: 0.2
        });
        const collarMesh = new THREE.Mesh(collarGeom, collarMat);
        collarMesh.rotation.x = Math.PI / 2;
        nodeMesh.add(collarMesh);

        nodeMeshes.push(nodeMesh);
        wheelGroup.add(nodeMesh);
      });

      // Raycasting for node hover and click
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const getIntersectedNode = (e: MouseEvent | PointerEvent) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(nodeMeshes, true);
        if (intersects.length > 0) {
          let obj: THREE.Object3D | null = intersects[0].object;
          while (obj && !obj.userData?.element && obj.parent) {
            obj = obj.parent;
          }
          return obj?.userData?.element ? (obj as THREE.Mesh) : null;
        }
        return null;
      };

      const handlePointerMove = (e: PointerEvent) => {
        const node = getIntersectedNode(e);
        if (node) {
          container.style.cursor = 'pointer';
          setHoveredName(`${node.userData.element.name} (${node.userData.element.devanagari})`);
        } else {
          container.style.cursor = 'grab';
          setHoveredName(null);
        }
      };

      const handleClick = (e: MouseEvent) => {
        const node = getIntersectedNode(e);
        if (node) {
          onSelectElement(node.userData.element);
        }
      };

      container.addEventListener('pointermove', handlePointerMove);
      container.addEventListener('click', handleClick);

      // Dragging to manually rotate the wheel
      let isDragging = false;
      let prevX = 0;
      let autoRotateSpeed = 0.18;

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        prevX = e.clientX;
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const delta = e.clientX - prevX;
        wheelGroup.rotation.y += delta * 0.008;
        prevX = e.clientX;
      };

      const onMouseUp = () => {
        isDragging = false;
      };

      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

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

        if (!prefersReducedMotion && !isDragging) {
          wheelGroup.rotation.y += delta * autoRotateSpeed;
        }

        // Slight floating bob
        wheelGroup.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.06;

        renderer?.render(scene, camera);
      };

      animate();

      return () => {
        isDisposed = true;
        cancelAnimationFrame(animFrameId);
        container.removeEventListener('pointermove', handlePointerMove);
        container.removeEventListener('click', handleClick);
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('resize', handleResize);

        hubGeom.dispose();
        hubMat.dispose();
        orbitRingGeom.dispose();
        orbitRingMat.dispose();

        if (renderer && renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch {
      setWebglError(true);
    }
  }, [selectedElementId, onSelectElement]);

  if (webglError) {
    // 2D SVG fallback
    return (
      <div className="w-full h-80 flex flex-col items-center justify-center p-6 bg-[#E4D2A8]/25 border border-[#B8902B]/40 rounded-[3px]">
        <svg viewBox="0 0 300 300" className="w-64 h-64">
          <circle cx="150" cy="150" r="110" fill="none" stroke="#B8902B" strokeWidth="1.5" />
          <circle cx="150" cy="150" r="35" fill="#B8902B" fillOpacity="0.2" stroke="#5A3A22" strokeWidth="1" />
          <text x="150" y="154" textAnchor="middle" className="text-[12px] font-serif font-bold fill-[#2E1B0F]">Statecraft</text>
          {SAPTANGA_ELEMENTS.map((el, i) => {
            const angle = (i / 7) * Math.PI * 2;
            const x = 150 + Math.cos(angle) * 110;
            const y = 150 + Math.sin(angle) * 110;
            return (
              <g key={el.id} className="cursor-pointer" onClick={() => onSelectElement(el)}>
                <circle cx={x} cy={y} r="22" fill={el.id === selectedElementId ? "#6B1E1E" : "#F1E6CC"} stroke="#B8902B" strokeWidth="1.2" />
                <text x={x} y={y + 4} textAnchor="middle" className={`text-[10px] font-serif font-semibold ${el.id === selectedElementId ? 'fill-[#F1E6CC]' : 'fill-[#2E1B0F]'}`}>
                  {el.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] md:h-[480px] flex items-center justify-center bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[3px] overflow-hidden select-none">
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute top-3 left-4 px-2 py-0.5 bg-[#F1E6CC]/90 border border-[#B8902B]/40 rounded-[2px] text-[10px] font-mono text-[#5A3A22]">
        {hoveredName ? `Click: ${hoveredName}` : "Click any node or drag to rotate wheel"}
      </div>
      <div className="absolute bottom-3 right-4 text-[10px] font-mono text-[#8A5A36] bg-[#F1E6CC]/80 px-2 py-0.5 rounded-[2px] border border-[#B8902B]/30">
        Seven Pillars · Procedural 3D
      </div>
    </div>
  );
};
