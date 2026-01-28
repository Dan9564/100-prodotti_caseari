import React from 'react';
import { Sun, CloudRain, Wheat } from 'lucide-react';

const Territory: React.FC = () => {
  return (
    <div className="flex flex-col">
       {/* Hero */}
       <div className="relative h-[60vh] flex items-center justify-center">
         <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Campagna Italiana" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/40"></div>
         </div>
         <div className="relative z-10 text-center text-white p-6 animate-fade-in-up">
           <span className="text-italy-green font-bold tracking-widest uppercase mb-2 block">Il Cuore della Produzione</span>
           <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Piana del Sele</h1>
           <p className="text-xl max-w-2xl mx-auto font-light">Dove il sole, la terra e l'acqua creano l'habitat perfetto per l'oro bianco.</p>
         </div>
       </div>

       {/* Narrative Section */}
       <section className="py-24 bg-white">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-lg text-gray-600">
              <h2 className="font-serif text-4xl text-brand-blue font-bold mb-6">Una Terra Unica</h2>
              <p>
                La Piana del Sele non è solo un luogo geografico, è un ecosistema perfetto. Situata in Campania, questa vasta pianura alluvionale è la culla della <strong>Mozzarella di Bufala Campana DOP</strong>.
              </p>
              <p>
                Qui, il clima mite, influenzato dalla brezza del Mar Tirreno, e la ricchezza delle acque sorgive creano le condizioni ideali per l'allevamento delle bufale. È un legame indissolubile tra territorio e prodotto: non si può replicare altrove lo stesso sapore, la stessa consistenza, la stessa anima.
              </p>
              <div className="mt-8 flex gap-8">
                 <div className="flex flex-col items-center">
                    <Sun className="text-brand-gold mb-2" size={24} />
                    <span className="text-sm font-bold text-brand-blue">Clima Mite</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <CloudRain className="text-brand-blue mb-2" size={24} />
                    <span className="text-sm font-bold text-brand-blue">Acqua Pura</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <Wheat className="text-italy-green mb-2" size={24} />
                    <span className="text-sm font-bold text-brand-blue">Foraggio Fresco</span>
                 </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1596637508638-316270425a76?auto=format&fit=crop&q=80&w=800" 
                alt="Bufale al pascolo" 
                className="rounded-lg shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-brand-blue/10 rounded-lg -z-0 hidden md:block"></div>
            </div>
         </div>
       </section>

       {/* Emotional Connection */}
       <section className="py-20 bg-italy-white">
         <div className="container mx-auto px-6 text-center">
           <h2 className="font-serif text-3xl text-brand-blue font-bold mb-12">Dal Produttore al Consumatore</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition">
                <span className="text-4xl font-serif text-gray-200 block mb-4">01</span>
                <h3 className="font-bold text-brand-blue text-lg mb-2">Raccolta</h3>
                <p className="text-sm text-gray-600">Latte fresco raccolto quotidianamente nelle migliori fattorie della Piana.</p>
              </div>
              <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition">
                <span className="text-4xl font-serif text-gray-200 block mb-4">02</span>
                <h3 className="font-bold text-brand-blue text-lg mb-2">Lavorazione</h3>
                <p className="text-sm text-gray-600">Le mani esperte dei casari filano la pasta secondo metodi secolari.</p>
              </div>
              <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition">
                <span className="text-4xl font-serif text-gray-200 block mb-4">03</span>
                <h3 className="font-bold text-brand-blue text-lg mb-2">Viaggio</h3>
                <p className="text-sm text-gray-600">Un trasporto rapido e refrigerato verso la Francia per garantire freschezza assoluta.</p>
              </div>
           </div>
         </div>
       </section>
    </div>
  );
};

export default Territory;
