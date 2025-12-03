import React from 'react';
import { Play, Mic, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const BentoItem = ({ 
  size, 
  type, 
  title, 
  img, 
  delay 
}: { 
  size: 'large' | 'tall' | 'wide' | 'small', 
  type: 'reel' | 'podcast' | 'tweet', 
  title: string, 
  img: string,
  delay: number
}) => {
  
  const getClasses = () => {
    switch(size) {
      case 'large': return 'col-span-1 md:col-span-2 row-span-2 h-[400px] md:h-[600px]';
      case 'tall': return 'col-span-1 row-span-2 h-[400px] md:h-[600px]';
      case 'wide': return 'col-span-1 md:col-span-2 row-span-1 h-[300px]';
      default: return 'col-span-1 row-span-1 h-[300px]';
    }
  };

  const getIcon = () => {
    switch(type) {
      case 'reel': return <Play className="fill-white" />;
      case 'podcast': return <Mic />;
      case 'tweet': return <Twitter />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      className={`relative group overflow-hidden border border-neutral-800 bg-neutral-900 ${getClasses()}`}
    >
      <img 
        src={img} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-2 text-brand-white">
            <span className="p-2 bg-white/10 backdrop-blur-md rounded-full">
              {getIcon()}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest opacity-70">{type}</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase leading-none text-white">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export const MediaGrid = () => {
  return (
    <section id="media" className="container mx-auto px-4 py-20">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase">Latest Noise</h2>
        <a href="#" className="hidden md:block font-mono text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors">
          View All Content
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <BentoItem 
          size="large" 
          type="reel" 
          title="Game 7 Breakdown: The unseen angle" 
          img="https://picsum.photos/800/800?random=1"
          delay={0}
        />
        <BentoItem 
          size="tall" 
          type="podcast" 
          title="Ep 42: Legacy Talk" 
          img="https://picsum.photos/400/800?random=2"
          delay={1}
        />
        <BentoItem 
          size="small" 
          type="tweet" 
          title="Unpopular Opinion..." 
          img="https://picsum.photos/400/400?random=3"
          delay={2}
        />
         <BentoItem 
          size="wide" 
          type="reel" 
          title="Sideline Access: Pre-game Rituals" 
          img="https://picsum.photos/800/400?random=4"
          delay={3}
        />
        <BentoItem 
          size="small" 
          type="tweet" 
          title="Draft Analysis" 
          img="https://picsum.photos/400/400?random=5"
          delay={4}
        />
      </div>
    </section>
  );
};