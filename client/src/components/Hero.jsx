import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';

function Box(props) {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2;
        mesh.current.rotation.y += delta * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh
                {...props}
                ref={mesh}
                scale={active ? 1.5 : 1}
                onClick={() => setActive(!active)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={hovered ? '#ec4899' : '#8b5cf6'}
                    wireframe
                    emissive={hovered ? '#ec4899' : '#8b5cf6'}
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    );
}

const Hero = () => {
    return (
        <section className="section hero" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <Box position={[0, 0, 0]} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
                </Canvas>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none', display: 'flex', alignItems: 'center', height: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-panel"
                    style={{
                        display: 'inline-block',
                        padding: '3rem',
                        pointerEvents: 'auto',
                        background: 'rgba(5, 5, 5, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}
                    >
                        Hi, I'm <span style={{
                            background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Bhrigu</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ fontSize: '1.5rem', marginTop: '1rem', color: '#cbd5e1' }}
                    >
                        Aspiring Computer Science Engineer & Full Stack Developer
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        style={{
                            marginTop: '2.5rem',
                            padding: '1rem 2.5rem',
                            background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                            color: '#fff',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)'
                        }}
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        View My Work
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
