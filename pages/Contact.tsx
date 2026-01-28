import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Grazie per averci contattato. Ti risponderemo al più presto!");
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Contattaci</h1>
          <p className="text-blue-100">Siamo a tua disposizione per informazioni commerciali e partnership.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 -mt-10">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="md:w-1/3 bg-brand-blue text-white p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-bold mb-8">Informazioni</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2">Sede Legale & Logistica</h4>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="shrink-0 mt-1" size={18} />
                    <p>{COMPANY_INFO.address}</p>
                  </div>
                  <p className="text-xs text-blue-200 mt-2 ml-8">SIREN: {COMPANY_INFO.siren}</p>
                </div>

                <div>
                  <h4 className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2">Contatti Diretti</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇫🇷</span>
                      <div>
                        <p className="text-xs text-blue-200 uppercase">{COMPANY_INFO.contacts.rosario.name}</p>
                        <a href={`tel:${COMPANY_INFO.contacts.rosario.phone}`} className="font-bold hover:text-brand-gold">{COMPANY_INFO.contacts.rosario.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇮🇹</span>
                      <div>
                        <p className="text-xs text-blue-200 uppercase">{COMPANY_INFO.contacts.francesco.name}</p>
                        <a href={`tel:${COMPANY_INFO.contacts.francesco.phone}`} className="font-bold hover:text-brand-gold">{COMPANY_INFO.contacts.francesco.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                   <h4 className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2">Email</h4>
                   <div className="flex items-center gap-3">
                     <Mail size={18} />
                     <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-brand-gold">{COMPANY_INFO.email}</a>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-800 text-center">
               <div className="inline-flex flex-col items-center">
                 <span className="text-[10px] uppercase tracking-widest mb-1 opacity-70">Marchio</span>
                 <span className="font-bold">100% Prodotto Italiano</span>
                 <div className="flex h-1 w-16 mt-2">
                   <div className="bg-italy-green w-1/3"></div>
                   <div className="bg-white w-1/3"></div>
                   <div className="bg-italy-red w-1/3"></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3 p-10 md:p-16">
            <h3 className="font-serif text-2xl font-bold text-brand-blue mb-2">Modulo di Contatto</h3>
            <p className="text-gray-500 mb-8 text-sm">Compila il form per richiedere il catalogo completo o un preventivo personalizzato.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome e Cognome *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-brand-blue focus:border-brand-blue p-3 border outline-none transition"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Azienda / Ristorante</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-brand-blue focus:border-brand-blue p-3 border outline-none transition"
                    placeholder="Nome attività"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-brand-blue focus:border-brand-blue p-3 border outline-none transition"
                  placeholder="mario@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio *</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-brand-blue focus:border-brand-blue p-3 border outline-none transition"
                  placeholder="Salve, vorrei ricevere maggiori informazioni su..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="bg-brand-blue text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wide hover:bg-brand-blue/90 transition flex items-center gap-2 shadow-lg"
                >
                  Invia Messaggio <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
