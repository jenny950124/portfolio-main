import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function ShipModel() {
  const { scene } = useGLTF('/flying_ship.glb');
  return <primitive object={scene} scale={3.5} position={[0, -1.2, 0]} />;
}
useGLTF.preload('/flying_ship.glb');

const FlyingShip = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.4;
      audio.loop = true;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Audio play failed:', e);
      });
    }
  };

  return (
    <div style={{ width: '100%', height: '520px', position: 'relative' }}>
      <audio ref={audioRef} src="/flyingsound.mp3" preload="auto" />

      {/* 🔊/🔇 토글 버튼 */}
      <button
        onClick={handleToggleSound}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 10,
          padding: '8px 16px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: '#fff',
          color: '#ff4b5c',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        {isPlaying ? '🔇 Stop Sound' : '🔊 Play Sound'}
      </button>

      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <Suspense fallback={<span style={{ color: 'white' }}>Loading...</span>}>
          <ShipModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default FlyingShip;
