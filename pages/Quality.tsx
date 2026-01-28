import React from 'react';
import { CheckCircle, Award, BadgeCheck } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Qualità Certificata</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">La garanzia di portare in tavola solo il vero Made in Italy.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
               <h2 className="font-serif text-3xl text-brand-blue font-bold mb-6">DOP & IGP: Cosa significano?</h2>
               <p className="text-gray-600 mb-6 text-lg">
                 Le denominazioni europee non sono solo etichette, sono promesse. Promesse di origine, di metodo, di storia.
               </p>
               
               <div className="flex gap-6 mb-8 items-start">
                 <div className="w-16 h-16 shrink-0 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs text-center border-2 border-yellow-400 shadow-md">
                   DOP
                 </div>
                 <div>
                   <h3 className="font-bold text-brand-blue text-lg">Denominazione di Origine Protetta</h3>
                   <p className="text-sm text-gray-500 mt-1">Identifica un prodotto originario di un luogo, regione o, in casi eccezionali, di un paese determinati, la cui qualità o le cui caratteristiche sono dovute essenzialmente o esclusivamente ad un particolare ambiente geografico ed ai suoi intrinseci fattori naturali e umani.</p>
                 </div>
               </div>

               <div className="flex gap-6 items-start">
                 <div className="w-16 h-16 shrink-0 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xs text-center border-2 border-yellow-400 shadow-md">
                   IGP
                 </div>
                 <div>
                   <h3 className="font-bold text-brand-blue text-lg">Indicazione Geografica Protetta</h3>
                   <p className="text-sm text-gray-500 mt-1">Indica un prodotto agricolo o alimentare per il quale una determinata qualità, la reputazione o un'altra caratteristica dipende dall'origine geografica, e la cui produzione, trasformazione e/o elaborazione avviene in un'area geografica determinata.</p>
                 </div>
               </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-lg border border-gray-100">
               <h3 className="font-serif text-2xl text-brand-blue font-bold mb-8 text-center">Il Nostro Impegno</h3>
               <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                   <CheckCircle className="text-italy-green shrink-0 mt-1" />
                   <div>
                     <span className="font-bold text-gray-800 block">Tracciabilità Totale</span>
                     <span className="text-sm text-gray-600">Sappiamo esattamente da quale stalla proviene il latte e da quale caseificio proviene il prodotto.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <Award className="text-italy-green shrink-0 mt-1" />
                   <div>
                     <span className="font-bold text-gray-800 block">Selezione dei Fornitori</span>
                     <span className="text-sm text-gray-600">Collaboriamo solo con aziende certificate che rispettano le norme sanitarie UE e il benessere animale.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <BadgeCheck className="text-italy-green shrink-0 mt-1" />
                   <div>
                     <span className="font-bold text-gray-800 block">Catena del Freddo</span>
                     <span className="text-sm text-gray-600">Monitoraggio costante della temperatura durante il trasporto Italia-Francia.</span>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
