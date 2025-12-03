import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left' }) => {
  return (
    <div className="w-full py-6 bg-white overflow-hidden flex whitespace-nowrap border-y border-white">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        <h2 className="text-black font-display text-4xl md:text-6xl font-bold tracking-tight uppercase px-4">
          {text.repeat(10)}
        </h2>
      </motion.div>
    </div>
  );
};