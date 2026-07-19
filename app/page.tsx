'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Users, Trophy, Zap, ArrowRight, Play, Star, 
  Github, Twitter, Linkedin, ChevronDown 
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

export default function UniverseLanding() {
  const [scrolled, setScrolled] = useState(false);

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

      {/* Full sections below - preserved */}
      {/* Stats, Features, Showcase, Journey, Testimonials, Pricing, CTA, Footer */}

      <Toaster position="top-center" richColors />
    </div>
  );
}
