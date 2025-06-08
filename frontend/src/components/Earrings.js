import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Earring({ earPositions }) {
  const canvasRef = useRef(null);
  const [earringLeft, setEarringLeft] = useState(null);
  const [earringRight, setEarringRight] = useState(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const canvas = canvasRef.current;
    rendererRef.current = new THREE.WebGLRenderer({ 
      canvas,
      alpha: true,
      antialias: true
    });
    
    rendererRef.current.setSize(640, 480); // Match video dimensions
    rendererRef.current.setPixelRatio(window.devicePixelRatio);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 2);
    sceneRef.current.add(ambientLight);
    sceneRef.current.add(directionalLight);

    // Load earring model
    const loader = new GLTFLoader();
    loader.load('/modelss/earr.glb', (gltf) => {
      const earringLeft = gltf.scene.clone();
      const earringRight = gltf.scene.clone();
      earringLeft.scale.set(0.05, 0.05, 0.05);
      earringRight.scale.set(0.05, 0.05, 0.05);
      setEarringLeft(earringLeft);
      setEarringRight(earringRight);
      sceneRef.current.add(earringLeft);
      sceneRef.current.add(earringRight);
    });

    cameraRef.current.position.z = 5;

    const animate = () => {
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        requestAnimationFrame(animate);
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, []);

  useEffect(() => {
    if (earringLeft && earringRight && earPositions) {
      const scaleFactor = 2;
      earringLeft.position.set(
        earPositions.left.x / scaleFactor,
        earPositions.left.y / scaleFactor,
        0
      );
      earringRight.position.set(
        earPositions.right.x / scaleFactor,
        earPositions.right.y / scaleFactor,
        0
      );
    }
  }, [earPositions, earringLeft, earringRight]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '640px',
        height: '480px',
        transform: 'scaleX(-1)' // Mirror to match video
      }}
    />
  );
}

export default Earring;
