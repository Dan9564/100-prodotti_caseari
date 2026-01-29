import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/constants';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';
import { FadeIn, SlideUp } from '@/components/ui/Motion';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta 100% Prodotti Italiani per il listino prezzi e informazioni sulla distribuzione.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <SlideUp className="font-serif text-4xl font-bold mb-4" delay={0.1}>
            Contattaci
          </SlideUp>
          <FadeIn className="text-blue-100" delay={0.2}>
            Siamo a tua disposizione per informazioni commerciali e partnership.
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 -mt-10">
        <FadeIn className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row" delay={0.3}>
          
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
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
