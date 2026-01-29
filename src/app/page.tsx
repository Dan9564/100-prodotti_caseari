'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '@/constants';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, SlideUp } from '@/components/ui/Motion';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <Image
            src="/images/Sfondo.webp"
            alt="Piana del Sele"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/60 to-transparent z-0" />

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center z-10">
          <StaggerContainer className="max-w-2xl" staggerDelay={0.15}>
            <StaggerItem>
              <span className="inline-block px-4 py-1 mb-6 border border-brand-gold text-brand-gold text-sm font-semibold tracking-widest uppercase bg-brand-blue/50 backdrop-blur-sm rounded-sm">
                Eccellenza Italiana
              </span>
            </StaggerItem>
            <StaggerItem>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              L&apos;autentico sapore <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-italy-green via-white to-italy-red">
                dell&apos;Italia
              </span>
              <br /> sulla tua tavola.
            </h1>
          </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-gray-200 mb-8 font-light italic max-w-xl">
                &quot;{COMPANY_INFO.claim}&quot;
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prodotti" className="px-8 py-4 bg-white text-brand-blue font-bold uppercase tracking-wide hover:bg-gray-100 transition shadow-lg text-center rounded-sm">
                  Scopri i Prodotti
                </Link>
                <Link href="/contatti" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wide hover:bg-white hover:text-brand-blue transition text-center rounded-sm">
                  Contatta per Export
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="font-serif text-4xl text-brand-blue font-bold mb-4">I Nostri Valori</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12" staggerDelay={0.2}>
            <StaggerItem>
              <HoverCard className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                  <Star size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-serif text-brand-blue">Qualità Premium</h3>
                <p className="text-gray-600 leading-relaxed">Selezioniamo solo i migliori produttori per garantire un&apos;esperienza gustativa superiore e costante nel tempo.</p>
              </HoverCard>
            </StaggerItem>
            <StaggerItem>
              <HoverCard className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                  <ShieldCheck size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-serif text-brand-blue">Origine Certificata</h3>
                <p className="text-gray-600 leading-relaxed">Prodotti DOP e IGP provenienti da filiere controllate, tracciabili e autentiche al 100%, senza compromessi.</p>
              </HoverCard>
            </StaggerItem>
            <StaggerItem>
              <HoverCard className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                  <Heart size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-serif text-brand-blue">Tradizione & Passione</h3>
                <p className="text-gray-600 leading-relaxed">Portiamo in Francia non solo cibo, ma la storia e la cultura gastronomica millenaria del territorio italiano.</p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SlideUp>
              <h2 className="font-serif text-4xl text-brand-blue font-bold mb-3">Selezione Esclusiva</h2>
              <p className="text-gray-500 text-lg">Alcune delle nostre eccellenze più richieste dai migliori ristoratori.</p>
            </SlideUp>
            <Link href="/prodotti" className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:text-brand-gold transition uppercase tracking-wide text-sm group">
              Vedi Catalogo Completo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {PRODUCTS.slice(0, 3).map((product) => (
              <StaggerItem key={product.id}>
                <HoverCard className="bg-white group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 rounded-lg border border-gray-100 h-full flex flex-col">
                  <div className="h-64 overflow-hidden relative">
                    {product.image ? (
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover transform group-hover:scale-110 transition duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                        <span>Immagine non disponibile</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex gap-2 items-end z-10">
                      {product.id === '1' ? (
                        <div className="w-24 h-12 relative drop-shadow-md">
                          <Image src="/images/logo_dop_e-_consorzio.svg" alt="DOP e Consorzio" fill className="object-contain" />
                        </div>
                      ) : (
                        product.isDop && (
                          <div className="w-10 h-10 relative drop-shadow-md">
                            <Image src="/images/Dop.svg" alt="DOP" fill className="object-contain" />
                          </div>
                        )
                      )}
                      {product.isIgp && (
                        <div className="w-10 h-10 relative drop-shadow-md">
                          <Image src="/images/Igp.svg" alt="IGP" fill className="object-contain" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-xs text-brand-gold font-bold uppercase tracking-wider mb-2">{product.category}</span>
                    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-3 group-hover:text-italy-green transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">{product.description}</p>
                    <Link href="/prodotti" className="text-brand-blue font-bold text-xs uppercase tracking-widest border-b-2 border-transparent group-hover:border-brand-blue transition-all inline-block pb-1 self-start">
                      Scheda Prodotto
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="text-center md:hidden">
             <Link href="/prodotti" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-gold transition uppercase tracking-wide text-sm">
              Vedi Catalogo Completo <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold opacity-10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <FadeIn className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sei un distributore o un ristoratore?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-light">
            Diventa nostro partner e porta la vera qualità italiana ai tuoi clienti. 
            Offriamo soluzioni personalizzate per l&apos;importazione diretta.
          </p>
          <Link href="/contatti" className="inline-block bg-brand-gold text-white text-lg font-bold px-12 py-5 rounded-sm hover:bg-white hover:text-brand-blue transition-all transform hover:-translate-y-1 shadow-xl uppercase tracking-wider">
            Richiedi Catalogo & Listino Prezzi
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
