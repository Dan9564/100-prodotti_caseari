import React from 'react';
import { Target, Users, Map } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-blue font-bold mb-4">La Nostra Storia</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Dalla Piana del Sele alla Francia: un viaggio fatto di passione, famiglia e sapori autentici.</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-gold z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80&w=1000" 
              alt="Produzione casearia tradizionale" 
              className="relative z-10 shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-brand-blue font-bold mb-6">Le Radici del Gusto</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              La nostra azienda nasce con un obiettivo chiaro: colmare la distanza tra i migliori produttori locali italiani e il mercato francese. Fondata sull'esperienza e sulla profonda conoscenza del territorio campano e italiano, <strong>100% Prodotto Italiano</strong> si è affermata come punto di riferimento per chi cerca l'autenticità.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Con sede strategica a <strong>Viry-Châtillon</strong>, garantiamo una logistica efficiente e puntuale, mantenendo intatta la catena del freddo e la freschezza che contraddistingue i nostri prodotti, come la Mozzarella di Bufala che arriva sulle tavole francesi fresca come appena prodotta.
            </p>
            <blockquote className="border-l-4 border-italy-green pl-6 py-2 italic text-gray-700 font-serif text-lg">
              "Non vendiamo solo prodotti, distribuiamo cultura gastronomica."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold">La Nostra Missione</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <Target className="text-brand-gold mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Eccellenza</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Selezioniamo rigorosamente ogni fornitore. Solo chi rispetta i più alti standard di produzione entra nel nostro catalogo.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <Map className="text-brand-gold mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Territorio</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Valorizziamo le piccole produzioni locali e i consorzi di tutela, proteggendo la biodiversità e le tradizioni regionali.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <Users className="text-brand-gold mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Servizio B2B</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Offriamo a ristoratori e distributori un servizio su misura, con consulenza dedicata e consegne rapide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team/Contact Teaser */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl text-brand-blue font-bold mb-8">Un Team Internazionale</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            La sinergia tra la gestione in Francia e il controllo qualità in Italia è la nostra forza. Rosario Sorrentino e Francesco Ricciardi coordinano personalmente ogni fase, dall'ordine alla consegna.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
