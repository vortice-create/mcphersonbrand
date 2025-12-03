import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { MediaGrid } from './components/MediaGrid';
import { MerchCarousel } from './components/MerchCarousel';
import { Marquee } from './components/Marquee';
import { Footer } from './components/Footer';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 mix-blend-difference ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-display font-bold text-2xl tracking-tighter text-white">
            MCPHERSON
          </div>
          <button onClick={() => setIsOpen(true)} className="text-white hover:text-gray-300 transition-colors">
            <Menu size={32} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-white hover:text-gray-400"
            >
              <X size={40} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {['MANIFESTO', 'MEDIA', 'MERCH', 'CONTACT'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-5xl md:text-7xl font-bold text-white hover:text-gray-500 transition-colors tracking-tighter"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] opacity-30 mix-blend-overlay bg-noise"></div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-white selection:text-black overflow-x-hidden">
      <NoiseOverlay />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee text="EST. 2025 // MCPHERSON BRAND // UNCOMPROMISED // THE VOICE OF THE GAME // " direction="left" />
        <Manifesto />
        <Marquee text="LATEST DROPS // BROADCAST // PODCAST // SOCIALS // " direction="right" />
        <MediaGrid />
        <MerchCarousel />
      </main>

      <Footer />
    </div>
  );
}