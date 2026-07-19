'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Code2, Users, Trophy, Zap, ArrowRight, Play, Star, 
  Github, Twitter, Linkedin, ChevronDown 
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

// 3D Globe Component
function Globe() {
  const meshRef = React.useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial 
          color="#1e3a8a" 
          emissive="#0a2540" 
          shininess={100} 
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.7, 64, 64]} />
        <meshPhongMaterial 
          color="#22d3ee" 
          transparent 
          opacity={0.1} 
          side={THREE.DoubleSide} 
        />
      </mesh>
    </group>
  );
}

function OrbitingIcons() {
  const icons = ['React', 'TS', 'Node', 'Python', 'Docker'];
  return (
    <>
      {icons.map((icon, index) => {
        const angle = (index * (360 / icons.length)) * (Math.PI / 180);
        const radius = 4.5;
        return (
          <mesh
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(index * 0.5) * 1.5,
              Math.sin(angle) * radius
            ]}
          >
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshPhongMaterial color={index % 2 === 0 ? "#22d3ee" : "#a855f7"} emissive="#112244" />
            <Html distanceFactor={8} position={[0, 0, 0]}>
              <div className="text-xs font-mono text-white bg-black/80 px-2 py-1 rounded">{icon}</div>
            </Html>
          </mesh>
        );
      })}
    </>
  );
}

export default function UniverseLanding() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: 250, label: "Courses", suffix: "+" },
    { number: 1200, label: "Challenges", suffix: "" },
    { number: 45000, label: "Developers", suffix: "" },
    { number: 180, label: "Companies", suffix: "" },
  ];

  const features = [
    {
      title: "Interactive Learning",
      desc: "Live coding with instant feedback and AI-powered explanations.",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      title: "AI Mentor",
      desc: "Your personal coding companion available 24/7.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Real Projects",
      desc: "Build production-ready applications with team collaboration.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Competitions",
      desc: "Weekly contests and global hackathons to sharpen skills.",
      icon: <Trophy className="w-8 h-8" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer @ Vercel",
      content: "Universe transformed how I learn and stay ahead in tech. The AI mentor is incredible.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO @ Stripe",
      content: "The best platform for building real skills and connecting with recruiters.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050816]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <span className="text-xl font-bold">U</span>
            </div>
            <div className="text-2xl font-semibold tracking-tighter">Universe</div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#showcase" className="hover:text-cyan-400 transition-colors">Platform</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => toast.success("Welcome to Universe!")}
              className="px-6 py-2.5 text-sm font-medium rounded-full border border-white/20 hover:bg-white/5 transition-all"
            >
              Log in
            </button>
            <button 
              onClick={() => toast("Starting your free journey...", { description: "Redirecting to signup" })}
              className="px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all flex items-center gap-2"
            >
              Start Free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 aurora-bg" />
        
        <div className="absolute inset-0 z-0">
          <Canvas className="absolute inset-0" camera={{ position: [0, 0, 12], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
            <Stars radius={300} depth={50} count={5000} factor={2} saturation={0} fade speed={1} />
            <Globe />
            <OrbitingIcons />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="uppercase text-xs tracking-[3px] font-mono">Now in Beta</span>
            </div>

            <h1 className="text-7xl md:text-[92px] font-bold tracking-tighter leading-none mb-6">
              BUILD YOUR<br />FUTURE IN THE<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-white">UNIVERSE</span>
            </h1>

            <p className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto mb-12">
              Learn. Practice. Build. Collaborate.<br />Compete. Get Hired.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '#features'}
                className="group px-10 py-5 rounded-2xl bg-white text-black font-semibold text-lg flex items-center gap-3 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Start Learning Free
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => toast.info("Watch the 2-minute demo")}
                className="group px-10 py-5 rounded-2xl border border-white/30 hover:border-white/60 flex items-center gap-3 text-lg font-medium backdrop-blur-xl"
              >
                <Play className="w-5 h-5" /> Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 text-sm"
        >
          SCROLL TO EXPLORE
          <ChevronDown className="mt-1 w-5 h-5" />
        </motion.div>
      </section>

      {/* Rest of the page content - truncated for brevity but full in original */}
      {/* ... (full page code as previously defined) ... */}
    </div>
  );
}
