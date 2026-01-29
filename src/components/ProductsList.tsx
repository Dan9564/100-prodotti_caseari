'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { PRODUCTS, CATEGORY_BRANDS } from '@/constants';
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
          {['Tutti', 'Latticini', 'Formaggi Stagionati', 'Salumi', 'Pasta', 'Farine', 'Conserve', 'Gastronomia'].map((cat) => (
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

        {/* Brands Section */}
        {CATEGORY_BRANDS[activeCategory] && (
          <FadeIn className="mb-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">Eccellenza Certificata</span>
              <h3 className="text-xl font-serif text-brand-blue font-bold mt-2">I Grandi Marchi di {activeCategory}</h3>
            </div>
            <div className={`${
              activeCategory === 'Salumi' 
                ? 'grid grid-cols-3 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-8 justify-items-center max-w-4xl mx-auto' 
                : activeCategory === 'Pasta'
                  ? 'grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto'
                  : 'flex flex-wrap justify-center items-center gap-8 md:gap-16'
            }`}>
              {CATEGORY_BRANDS[activeCategory].map((brand) => (
                <div key={brand.name} className="relative group transition-transform duration-300 hover:scale-105 cursor-pointer">
                   <div className="relative h-12 w-28 md:h-16 md:w-36">
                     <Image 
                       src={brand.logo} 
                       alt={brand.name} 
                       fill
                       className="object-contain"
                     />
                   </div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

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
                      className="transform group-hover:scale-110 transition duration-700 ease-out object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-0 left-0 p-4 w-full flex justify-between z-10">
                       <div className="flex gap-2"> {/* Wrapper for left-aligned badges */}
                          {product.id === '1' ? (
                            <div className="w-28 h-14 relative drop-shadow-md hover:scale-110 transition-transform">
                              <Image src="/images/logo_dop_e-_consorzio.svg" alt="DOP e Consorzio" fill className="object-contain" />
                            </div>
                          ) : (
                            product.isDop && (
                              <div className="w-12 h-12 relative drop-shadow-md hover:scale-110 transition-transform">
                                <Image src="/images/Dop.svg" alt="DOP" fill className="object-contain" />
                              </div>
                            )
                          )}
                          {product.isIgp && (
                            <div className="w-12 h-12 relative drop-shadow-md hover:scale-110 transition-transform">
                              <Image src="/images/Igp.svg" alt="IGP" fill className="object-contain" />
                            </div>
                          )}
                        </div>
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
