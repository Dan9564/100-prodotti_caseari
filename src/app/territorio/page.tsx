import React from 'react';
import Image from 'next/image';
import { Sun, CloudRain, Wheat, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverCard } from '@/components/ui/Motion';

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
              <h2 className="font-serif text-3xl text-brand-blue font-bold mb-12">Logistica Efficiente</h2>
            </FadeIn>
            <FadeIn className="relative max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 overflow-hidden" delay={0.2}>
               {/* Map Container - using intrinsic ratio to ensure pins stay aligned */}
               <div className="relative w-full aspect-[1.35/1] bg-blue-50/30 rounded-lg overflow-hidden">
                 <Image 
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_political_chart_blank.svg/1024px-Europe_political_chart_blank.svg.png" 
                   alt="Mappa Europa"
                   fill
                   className="object-cover opacity-30 mix-blend-multiply"
                 />
                 
                 {/* Overlay Container for Points and Lines */}
                 <div className="absolute inset-0 w-full h-full">
                    {/* Connection Line SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#CE2B37" />
                          <stop offset="50%" stopColor="#C5A059" />
                          <stop offset="100%" stopColor="#003399" />
                        </linearGradient>
                      </defs>
                      {/* Path from Salerno (approx 56, 78) to Paris (approx 38, 48) on this specific map projection */}
                      <path 
                        d="M 56 78 Q 45 65 38 48" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="0.5" 
                        strokeDasharray="1 1"
                        className="animate-pulse"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>

                    {/* Salerno Point */}
                    <div className="absolute top-[78%] left-[56%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
                      <MapPin className="text-italy-red fill-current animate-bounce" size={32} />
                      <span className="bg-white px-3 py-1 text-xs font-bold shadow-md rounded mt-1 whitespace-nowrap text-brand-blue">
                        Salerno
                      </span>
                    </div>

                    {/* Paris Point */}
                    <div className="absolute top-[48%] left-[38%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
                      <MapPin className="text-brand-blue fill-current animate-bounce" style={{ animationDelay: '0.5s' }} size={32} />
                      <span className="bg-white px-3 py-1 text-xs font-bold shadow-md rounded mt-1 whitespace-nowrap text-brand-blue">
                        Parigi
                      </span>
                    </div>
                 </div>
               </div>
               
               <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-brand-blue mb-2">Partenza: Piana del Sele</h4>
                    <p className="text-sm text-gray-600">I prodotti vengono ritirati direttamente dai caseifici partner subito dopo la produzione.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-brand-blue mb-2">Trasporto Controllato</h4>
                    <p className="text-sm text-gray-600">Mezzi refrigerati a temperatura costante garantiscono la catena del freddo.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-brand-blue mb-2">Arrivo: Parigi</h4>
                    <p className="text-sm text-gray-600">Consegna entro 24/48 ore nei migliori ristoranti e punti vendita della capitale.</p>
                  </div>
               </div>
            </FadeIn>
         </div>
       </section>
    </div>
  );
}
