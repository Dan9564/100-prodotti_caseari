'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Grazie per averci contattato. Ti risponderemo al più presto!");
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full">
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
  );
}
