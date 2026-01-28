import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Sfondo.png')" }} 
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/60 to-transparent"></div>
        </div>

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block px-4 py-1 mb-6 border border-brand-gold text-brand-gold text-sm font-semibold tracking-widest uppercase bg-brand-blue/50 backdrop-blur-sm rounded-sm">
              Eccellenza Italiana
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              L'autentico sapore <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-italy-green via-white to-italy-red">
                dell'Italia
              </span>
              <br /> sulla tua tavola.
            </h1>
            <p className="text-xl text-gray-200 mb-8 font-light italic">
              "{COMPANY_INFO.claim}"
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/prodotti" className="px-8 py-4 bg-white text-brand-blue font-bold uppercase tracking-wide hover:bg-gray-100 transition shadow-lg text-center">
                Scopri i Prodotti
              </Link>
              <Link to="/contatti" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wide hover:bg-white hover:text-brand-blue transition text-center">
                Contatta per Export
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-brand-blue font-bold mb-4">I Nostri Valori</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Qualità Premium</h3>
              <p className="text-gray-600">Selezioniamo solo i migliori produttori per garantire un'esperienza gustativa superiore e costante.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Origine Certificata</h3>
              <p className="text-gray-600">Prodotti DOP e IGP provenienti da filiere controllate, tracciabili e autentiche al 100%.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Tradizione & Passione</h3>
              <p className="text-gray-600">Portiamo in Francia non solo cibo, ma la storia e la cultura gastronomica del territorio italiano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl text-brand-blue font-bold mb-2">Selezione Esclusiva</h2>
              <p className="text-gray-500">Alcune delle nostre eccellenze più richieste</p>
            </div>
            <Link to="/prodotti" className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-gold transition">
              Vedi Catalogo Completo <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" 
                  />
                  {(product.isDop || product.isIgp) && (
                    <div className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.isDop ? 'DOP' : 'IGP'}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <span className="text-xs text-brand-gold font-bold uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-xl font-serif font-bold text-brand-blue mt-2 mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{product.description}</p>
                  <Link to="/prodotti" className="text-brand-blue font-semibold text-sm uppercase tracking-wide border-b-2 border-transparent group-hover:border-brand-blue transition-all inline-block pb-1">
                    Scheda Prodotto
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/prodotti" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-gold transition">
              Vedi Catalogo Completo <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Sei un distributore o un ristoratore?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Diventa nostro partner e porta la vera qualità italiana ai tuoi clienti. 
            Offriamo soluzioni personalizzate per l'importazione diretta.
          </p>
          <Link to="/contatti" className="inline-block bg-brand-gold text-white text-lg font-bold px-10 py-4 rounded-sm hover:bg-white hover:text-brand-blue transition transform hover:-translate-y-1 shadow-xl">
            Richiedi Catalogo & Listino Prezzi
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
