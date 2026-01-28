import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Le Nostre Eccellenze</h1>
          <p className="text-blue-100 text-lg">Una selezione curata dei migliori sapori italiani.</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-italy-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
          <span className="font-bold text-brand-blue">Nota B2B:</span> Questo catalogo è una vetrina delle nostre tipologie di prodotto. Per l'assortimento completo e i prezzi, <Link to="/contatti" className="text-italy-green underline font-semibold">contattaci per il listino riservato.</Link>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Categories Filter (Visual only for now) */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Tutti', 'Latticini', 'Formaggi Stagionati', 'Salumi', 'Gastronomia'].map((cat, idx) => (
              <button 
                key={cat} 
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition ${
                  idx === 0 
                  ? 'bg-brand-blue text-white shadow-lg' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="h-72 overflow-hidden relative">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-0 left-0 p-4 w-full flex justify-between">
                     {product.isDop && <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md border border-white">DOP</span>}
                     {product.isIgp && <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md border border-white">IGP</span>}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-blue mb-3 group-hover:text-italy-green transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <button className="w-full py-3 border border-brand-blue text-brand-blue text-sm font-bold uppercase tracking-wider hover:bg-brand-blue hover:text-white transition rounded-sm">
                    Richiedi Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Seal Section */}
      <section className="py-16 bg-brand-blue/5 border-t border-brand-blue/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h3 className="font-serif text-2xl font-bold text-brand-blue mb-2">Non trovi quello che cerchi?</h3>
            <p className="text-gray-600">Grazie alla nostra rete capillare in Italia, possiamo reperire prodotti specifici su richiesta per le tue esigenze di ristorazione.</p>
          </div>
          <Link to="/contatti" className="bg-brand-blue text-white px-8 py-3 font-bold rounded-sm shadow-lg hover:bg-brand-blue/90 transition">
            Contatta l'Ufficio Commerciale
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
