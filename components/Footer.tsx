import React from 'react';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-900 pt-20 pb-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-6 flex flex-col justify-between h-full">
          <div>
            <h2 className="font-display text-6xl md:text-9xl font-bold tracking-tighter text-white opacity-20 hover:opacity-100 transition-opacity cursor-default">
              MCPHERSON
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-600 mt-8 uppercase tracking-widest">
            © 2025 McPherson Brand. All Rights Reserved.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Sitemap</h4>
          <ul className="space-y-4 font-display text-xl uppercase text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Media</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Join The Roster</h4>
          <div className="flex border-b border-neutral-700 pb-2">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent w-full outline-none text-white font-mono text-sm placeholder-neutral-700 uppercase"
            />
            <button className="text-white hover:text-neutral-400 uppercase font-bold text-sm">Submit</button>
          </div>
          
          <div className="flex gap-6 mt-12">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Instagram /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Youtube /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Mail /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};