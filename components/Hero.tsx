import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background Texture" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Pulsing Logo */}
        <motion.div 
          className="mb-12"
          animate={{ scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L35 80L50 40L65 80L80 20" stroke="white" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
            <path d="M10 20H90" stroke="white" strokeWidth="2" />
            <path d="M50 85V95" stroke="white" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Staggered Headline */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
              className="font-display text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-center uppercase"
            >
              The Voice
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.6, 0.01, -0.05, 0.95] }}
              className="font-display text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-center uppercase text-transparent stroke-white"
              style={{ WebkitTextStroke: '2px white' }}
            >
              Of The
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, -0.05, 0.95] }}
              className="font-display text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-center uppercase text-white"
            >
              Game
            </motion.h1>
          </div>
        </div>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 font-sans text-sm md:text-base tracking-[0.2em] text-gray-400 uppercase"
        >
          Analysis / Culture / Apparel
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};