import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

function Model({ isRunning, isListening, onArrive }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/mei.glb");
  const { actions } = useAnimations(animations, group);

  const [positionZ, setPositionZ] = useState(-10);
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    console.log("🎞 Available animations:", Object.keys(actions));
  }, [actions]);

  useEffect(() => {
    const runAction = actions['Take 001'];
    const idleAction = actions['Idle'] || actions['Nod'];
    const waveAction = actions['Wave'];

    if (isRunning && runAction) {
      runAction.reset().fadeIn(0.2).play();
    } else if (isListening && !isRunning && idleAction) {
      idleAction.reset().fadeIn(0.3).play();
    } else if (!isListening && !isRunning && idleAction) {
      idleAction.fadeOut(0.2);
    }
  }, [isRunning, isListening, actions]);


  useFrame((state, delta) => {
    if (isRunning && !arrived) {
      setPositionZ((prevZ) => {
        const newZ = prevZ + delta * 5;
        if (newZ >= 0) {
          actions['Take 001']?.fadeOut(0.2);
          actions['Wave']?.reset().fadeIn(0.3).play();
          setArrived(true);
          onArrive();
          return 0;
        }
        return newZ;
      });
    }
  });

  return (
    <group ref={group} position={[0, -2, positionZ]}>
      <primitive object={scene} scale={[0.025, 0.025, 0.025]} rotation={[0, 0, 0]} />
    </group>
  );
}

export function MeiModel({ triggerRun, isListening }) {
  const [arrived, setArrived] = useState(false);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }} style={{ background: 'transparent' }}>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />
          <Suspense fallback={null}>
            <Model isRunning={triggerRun} isListening={isListening} onArrive={() => setArrived(true)} />
          </Suspense>
        </Canvas>
      </div>

    
      {!triggerRun && isListening && (
        <div className="bubble">Write your message so Mei can start running! ✉️</div>
      )}

      {triggerRun && !arrived && (
        <div className="bubble">Mei is on her way to deliver your message! 💌</div>
      )}

      {arrived && (
        <div className="bubble">Message received with love! 💖</div>
      )}
    </>
  );
}

useGLTF.preload("/mei.glb");
