'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '@/constants';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/ui/Motion';

export default function ProductsList() {
  const [activeCategory, setActiveCategory] = useState('Tutti');

  const filteredProducts = activeCategory === 'Tutti' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Categories Filter */}
        <FadeIn className="flex flex-wrap justify-center gap-4 mb-16">
          {['Tutti', 'Latticini', 'Formaggi Stagionati', 'Salumi', 'Gastronomia'].map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                activeCategory === cat 
                ? 'bg-brand-blue text-white shadow-lg' 
                : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <StaggerContainer 
          key={activeCategory} // Force re-stagger on category change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='wait'>
            {filteredProducts.map((product) => (
              <StaggerItem key={product.id} className="h-full">
                <HoverCard className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="h-72 overflow-hidden relative shrink-0">
                     <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-0 left-0 p-4 w-full flex justify-between z-10">
                       {product.isDop && <span className="bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-md border border-white/20">DOP</span>}
                       {product.isIgp && <span className="bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-md border border-white/20">IGP</span>}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-brand-blue mb-3 group-hover:text-italy-green transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>
                    <button 
                      className="w-full py-3 border border-brand-blue text-brand-blue text-sm font-bold uppercase tracking-wider hover:bg-brand-blue hover:text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] rounded-sm mt-auto"
                    >
                      Richiedi Info
                    </button>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>
      </div>
    </section>
  );
}
