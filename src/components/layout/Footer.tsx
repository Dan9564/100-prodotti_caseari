import React from 'react';
import Link from 'next/link';
import { MapPin, Mail } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
           <div className="mb-6">
             <h3 className="font-serif text-2xl font-bold mb-2">100% Prodotti Italiani</h3>
             <p className="text-gray-400 text-sm">{COMPANY_INFO.claim}</p>
           </div>
           <p className="text-gray-400 text-sm leading-relaxed mb-6">
             Il partner di fiducia per portare l&apos;eccellenza gastronomica italiana sulle tavole francesi. Tradizione, qualità e origine certificata.
           </p>
           <div className="flex gap-2">
             {/* Decorative Flags */}
             <div className="h-1 w-8 bg-italy-green"></div>
             <div className="h-1 w-8 bg-white"></div>
             <div className="h-1 w-8 bg-italy-red"></div>
           </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-brand-gold">Esplora</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-lg mb-6 text-brand-gold">Contatti & Sede</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-brand-gold shrink-0" />
                <p>{COMPANY_INFO.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-brand-gold shrink-0" />
                <p>{COMPANY_INFO.logisticsAddress}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </div>
              <p className="text-xs text-gray-500 mt-2">SIREN: {COMPANY_INFO.siren}</p>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase">Responsabile Francia</span>
                <span className="font-semibold text-white">{COMPANY_INFO.contacts.rosario.name}</span>
                <a href={`tel:${COMPANY_INFO.contacts.rosario.phone}`} className="hover:text-brand-gold transition">
                  🇫🇷 {COMPANY_INFO.contacts.rosario.phone}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase">Responsabile Italia</span>
                <span className="font-semibold text-white">{COMPANY_INFO.contacts.francesco.name}</span>
                <a href={`tel:${COMPANY_INFO.contacts.francesco.phone}`} className="hover:text-brand-gold transition">
                  🇮🇹 {COMPANY_INFO.contacts.francesco.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-blue-900 text-center text-xs text-gray-500">
        <p>&copy; {2021} SAS 100% Italia. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
