"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function BlockchainSphere() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Sphere geometry
    const sphereGeo = new THREE.SphereGeometry(1.4, 64, 64);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.05,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Outer glow ring
    const ringGeo = new THREE.TorusGeometry(1.8, 0.02, 8, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    const ring2Geo = new THREE.TorusGeometry(2.1, 0.015, 8, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 5;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Orbiting nodes
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);
    const nodeColors = [
      0x3b82f6, 0x8b5cf6, 0x06b6d4, 0x6366f1, 0xa78bfa, 0x60a5fa,
    ];
    const nodes: {
      mesh: THREE.Mesh;
      speed: number;
      radius: number;
      offset: number;
      inclination: number;
    }[] = [];

    for (let i = 0; i < 12; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.06, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: nodeColors[i % nodeColors.length],
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const radius = 1.6 + Math.random() * 0.6;
      const speed = 0.3 + Math.random() * 0.5;
      const offset = Math.random() * Math.PI * 2;
      const inclination = (Math.random() - 0.5) * Math.PI;
      node.position.set(radius, 0, 0);
      nodeGroup.add(node);
      nodes.push({ mesh: node, speed, radius, offset, inclination });
    }

    // Floating particles
    const partCount = 200;
    const partGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 1.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    partGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x6366f1,
      size: 0.03,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(partGeo, partMat);
    scene.add(particleSystem);

    // Connecting lines between nodes
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2,
    });

    // Mouse parallax
    let mouse = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    let t = 0;
    const animate = () => {
      const animId = requestAnimationFrame(animate);
      t += 0.008;

      // Smooth parallax
      target.x += (mouse.x * 0.3 - target.x) * 0.05;
      target.y += (mouse.y * 0.3 - target.y) * 0.05;

      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.001;
      innerSphere.rotation.y -= 0.002;
      ring.rotation.z += 0.004;
      ring2.rotation.z -= 0.003;
      ring2.rotation.y += 0.002;
      particleSystem.rotation.y -= 0.001;

      // Orbit nodes
      nodes.forEach((n, i) => {
        const angle = t * n.speed + n.offset;
        n.mesh.position.x =
          n.radius * Math.cos(angle) * Math.cos(n.inclination);
        n.mesh.position.y =
          n.radius * Math.sin(n.inclination) + Math.sin(t * 0.5 + i) * 0.2;
        n.mesh.position.z =
          n.radius * Math.sin(angle) * Math.cos(n.inclination);
      });

      // Pulsing opacity
      (sphereMat as THREE.MeshBasicMaterial).opacity =
        0.1 + Math.sin(t * 2) * 0.05;
      (ringMat as THREE.MeshBasicMaterial).opacity =
        0.3 + Math.sin(t * 1.5) * 0.15;

      // Apply parallax to scene
      scene.rotation.x = target.y * 0.2;
      scene.rotation.y = target.x * 0.2 + t * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full absolute inset-0" />;
}
