import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductsList from '@/components/ProductsList';
import type { Metadata } from 'next';
import { FadeIn, SlideUp } from '@/components/ui/Motion';

export const metadata: Metadata = {
  title: 'I Nostri Prodotti',
  description: 'Scopri la selezione di formaggi, salumi e prodotti gastronomici italiani importati direttamente dalla Piana del Sele.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Prodotti Italiani"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SlideUp className="font-serif text-4xl md:text-5xl font-bold mb-4" delay={0.1}>
            Le Nostre Eccellenze
          </SlideUp>
          <FadeIn className="text-blue-100 text-lg" delay={0.2}>
            Una selezione curata dei migliori sapori italiani.
          </FadeIn>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-italy-white py-6 border-b border-gray-200">
        <FadeIn className="container mx-auto px-6 text-center text-gray-600 text-sm" delay={0.3}>
          <span className="font-bold text-brand-blue">Nota B2B:</span> Questo catalogo è una vetrina delle nostre tipologie di prodotto. Per l&apos;assortimento completo e i prezzi, <Link href="/contatti" className="text-italy-green underline font-semibold">contattaci per il listino riservato.</Link>
        </FadeIn>
      </div>

      {/* Product Grid */}
      <ProductsList />

      {/* Quality Seal Section */}
      <section className="py-16 bg-brand-blue/5 border-t border-brand-blue/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <SlideUp className="md:w-2/3" delay={0.2}>
            <h3 className="font-serif text-2xl font-bold text-brand-blue mb-2">Non trovi quello che cerchi?</h3>
            <p className="text-gray-600">Grazie alla nostra rete capillare in Italia, possiamo reperire prodotti specifici su richiesta per le tue esigenze di ristorazione.</p>
          </SlideUp>
          <FadeIn delay={0.4}>
            <Link href="/contatti" className="bg-brand-blue text-white px-8 py-3 font-bold rounded-sm shadow-lg hover:bg-brand-blue/90 transition inline-block">
              Contatta l&apos;Ufficio Commerciale
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
