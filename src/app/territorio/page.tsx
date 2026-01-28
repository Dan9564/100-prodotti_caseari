import React from 'react';
import Image from 'next/image';
import { Sun, CloudRain, Wheat } from 'lucide-react';
import type { Metadata } from 'next';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverCard } from '@/components/ui/Motion';
import InteractiveMap from '@/components/ui/InteractiveMapWrapper';

export const metadata: Metadata = {
  title: 'Il Territorio',
  description: 'Alla scoperta della Piana del Sele, terra di bufale e tradizioni casearie millenarie.',
};

export default function TerritoryPage() {
  return (
    <div className="flex flex-col">
       {/* Hero */}
       <div className="relative h-[60vh] flex items-center justify-center">
         <div className="absolute inset-0 z-0">
           <Image 
            src="/images/Sfondo_territorio.avif" 
            alt="Campagna Italiana" 
            fill
            className="object-cover"
            priority
           />
           <div className="absolute inset-0 bg-black/40"></div>
         </div>
         <div className="relative z-10 text-center text-white p-6">
           <SlideUp delay={0.1}>
             <span className="text-italy-green font-bold tracking-widest uppercase mb-2 block">Il Cuore della Produzione</span>
           </SlideUp>
           <SlideUp delay={0.2} className="font-serif text-5xl md:text-7xl font-bold mb-6">
             Piana del Sele
           </SlideUp>
           <FadeIn delay={0.4} className="text-xl max-w-2xl mx-auto font-light">
             Dove il sole, la terra e l&apos;acqua creano l&apos;habitat perfetto per l&apos;oro bianco.
           </FadeIn>
         </div>
       </div>

       {/* Narrative Section */}
       <section className="py-24 bg-white">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn className="prose prose-lg text-gray-600">
              <h2 className="font-serif text-4xl text-brand-blue font-bold mb-6">Una Terra Unica</h2>
              <p className="mb-4 leading-relaxed">
                La Piana del Sele non è solo un luogo geografico, è un ecosistema perfetto. Situata in Campania, questa vasta pianura alluvionale è la culla della <strong>Mozzarella di Bufala Campana DOP</strong>.
              </p>
              <p className="mb-8 leading-relaxed">
                Qui, il clima mite, influenzato dalla brezza del Mar Tirreno, e la ricchezza delle acque sorgive creano le condizioni ideali per l&apos;allevamento delle bufale. È un legame indissolubile tra territorio e prodotto: non si può replicare altrove lo stesso sapore, la stessa consistenza, la stessa anima.
              </p>
              <StaggerContainer className="mt-8 flex gap-8" staggerDelay={0.2}>
                 <StaggerItem className="flex flex-col items-center">
                    <Sun className="text-brand-gold mb-2" size={24} />
                    <span className="text-sm font-bold text-brand-blue">Clima Mite</span>
                 </StaggerItem>
                 <StaggerItem className="flex flex-col items-center">
                    <CloudRain className="text-brand-blue mb-2" size={24} />
                    <span className="text-sm font-bold text-brand-blue">Acqua Pura</span>
                 </StaggerItem>
                 <StaggerItem className="flex flex-col items-center">
                    <Wheat className="text-italy-green mb-2" size={24} />
                    <span className="text-sm font-bold text-brand-blue">Foraggio Fresco</span>
                 </StaggerItem>
              </StaggerContainer>
            </FadeIn>
            <SlideUp className="relative h-[500px] w-full" delay={0.3}>
              <div className="absolute inset-0 rounded-lg shadow-2xl z-10 overflow-hidden">
                <Image 
                  src="/images/Bufale_territorio.webp" 
                  alt="Bufale al pascolo" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-brand-blue/10 rounded-lg -z-0 hidden md:block"></div>
            </SlideUp>
         </div>
       </section>

       {/* Emotional Connection */}
       <section className="py-20 bg-italy-white">
         <div className="container mx-auto px-6 text-center">
           <FadeIn>
             <h2 className="font-serif text-3xl text-brand-blue font-bold mb-12">Dal Produttore al Consumatore</h2>
           </FadeIn>
           <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.2}>
              <StaggerItem>
                <HoverCard className="bg-white p-8 rounded shadow-sm hover:shadow-md transition">
                  <span className="text-4xl font-serif text-gray-200 block mb-4">01</span>
                  <h3 className="font-bold text-brand-blue text-lg mb-2">Raccolta</h3>
                  <p className="text-sm text-gray-600">Latte fresco raccolto quotidianamente nelle migliori fattorie della Piana.</p>
                </HoverCard>
              </StaggerItem>
              <StaggerItem>
                <HoverCard className="bg-white p-8 rounded shadow-sm hover:shadow-md transition">
                  <span className="text-4xl font-serif text-gray-200 block mb-4">02</span>
                  <h3 className="font-bold text-brand-blue text-lg mb-2">Lavorazione</h3>
                  <p className="text-sm text-gray-600">Le mani esperte dei casari filano la pasta secondo metodi secolari.</p>
                </HoverCard>
              </StaggerItem>
              <StaggerItem>
                <HoverCard className="bg-white p-8 rounded shadow-sm hover:shadow-md transition">
                  <span className="text-4xl font-serif text-gray-200 block mb-4">03</span>
                  <h3 className="font-bold text-brand-blue text-lg mb-2">Viaggio</h3>
                  <p className="text-sm text-gray-600">Un trasporto rapido e refrigerato verso la Francia per garantire freschezza assoluta.</p>
                </HoverCard>
              </StaggerItem>
           </StaggerContainer>
         </div>
       </section>

       {/* Map Section */}
       <section className="bg-gray-100 py-20">
         <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl text-brand-blue font-bold mb-12">Dal Cuore dell'Italia alla Francia</h2>
            </FadeIn>
            <FadeIn className="relative max-w-4xl mx-auto h-[500px]" delay={0.2}>
                <InteractiveMap />
            </FadeIn>
         </div>
       </section>
    </div>
  );
}
