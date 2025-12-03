import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ title, price, img }: { title: string, price: string, img: string }) => (
  <div className="min-w-[300px] md:min-w-[400px] h-[500px] relative group border border-neutral-800 bg-neutral-900 mx-4 overflow-hidden">
    <div className="absolute top-4 left-4 z-10 bg-black text-white text-xs font-mono px-2 py-1 uppercase tracking-widest">
      Limited Drop
    </div>
    
    <div className="w-full h-full flex items-center justify-center bg-[#111]">
        {/* Placeholder for Apparel Image - centered and framed */}
        <img 
            src={img} 
            alt={title}
            className="w-[80%] h-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
        />
    </div>

    {/* Glassmorphism Info Panel */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-white/5 backdrop-blur-md border-t border-white/10 p-6 flex flex-col justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <div>
        <h3 className="font-display text-2xl font-bold uppercase text-white">{title}</h3>
        <p className="font-mono text-sm text-gray-400">Heavyweight Cotton / Oversized</p>
      </div>
      <div className="flex justify-between items-end">
        <span className="font-display text-xl">{price}</span>
        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-300 transition-colors">
          Add to Cart <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </div>
);

export const MerchCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="merch" className="py-24 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-4 mb-12 flex justify-between items-center">
        <div>
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase leading-none">The Shop</h2>
          <p className="font-mono text-gray-500 mt-2 uppercase tracking-widest">Season 01 Collection</p>
        </div>
        <div className="hidden md:flex gap-4">
           {/* Custom Nav arrows could go here */}
        </div>
      </div>

      <div 
        className="flex overflow-x-auto pb-12 no-scrollbar pl-4 md:pl-20"
        ref={scrollRef}
      >
        <ProductCard 
            title="Box Logo Tee" 
            price="$45.00" 
            img="https://picsum.photos/400/400?random=10"
        />
        <ProductCard 
            title="Tech Fleece Hoodie" 
            price="$120.00" 
            img="https://picsum.photos/400/400?random=11"
        />
        <ProductCard 
            title="Tactical Cargo" 
            price="$95.00" 
            img="https://picsum.photos/400/400?random=12"
        />
        <ProductCard 
            title="Sideline Cap" 
            price="$35.00" 
            img="https://picsum.photos/400/400?random=13"
        />
         <ProductCard 
            title="Performance Sock" 
            price="$20.00" 
            img="https://picsum.photos/400/400?random=14"
        />
      </div>
    </section>
  );
};