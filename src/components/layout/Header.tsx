'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO, NAV_ITEMS } from '@/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div 
        className={cn(
          "bg-brand-blue text-white text-sm hidden md:block overflow-hidden transition-all duration-300 ease-in-out",
          isScrolled ? "h-0 opacity-0 py-0" : "h-auto opacity-100 py-2"
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-italy-green" />
              🇫🇷 {COMPANY_INFO.contacts.rosario.phone}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-italy-red" />
              🇮🇹 {COMPANY_INFO.contacts.francesco.phone}
            </span>
          </div>
          <div className="flex gap-6">
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-gray-200 transition">
              <Mail size={14} />
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 border-gray-100' : 'bg-white py-4'
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "relative rounded-full border-2 border-brand-blue flex items-center justify-center bg-white overflow-hidden group-hover:shadow-lg transition-all duration-300",
              isScrolled ? "w-10 h-10" : "w-12 h-12"
            )}>
               <div className="flex flex-col items-center leading-none">
                 <span className="text-[10px] font-bold text-brand-blue">100%</span>
                 <div className="flex h-1 w-full my-[2px]">
                   <div className="bg-italy-green w-1/3"></div>
                   <div className="bg-white w-1/3"></div>
                   <div className="bg-italy-red w-1/3"></div>
                 </div>
                 <span className="text-[6px] font-bold text-brand-blue">ITALIA</span>
               </div>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-serif font-bold tracking-wide text-brand-blue leading-none transition-all duration-300",
                isScrolled ? "text-lg" : "text-xl"
              )}>
                100% Prodotti Italiani
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                Fabricant et distributeur de produits laitiers et alimentaires italiens
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-semibold tracking-wide uppercase transition-colors duration-300 relative group",
                    isActive ? 'text-brand-blue' : 'text-gray-500 hover:text-brand-blue'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-italy-green via-white to-italy-red transform origin-left transition-transform duration-300",
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  ></span>
                </Link>
              );
            })}
            <Link
              href="/contatti"
              className="bg-brand-blue text-white px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              Export
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-blue p-2 hover:bg-gray-50 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode='wait'>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_ITEMS.map((item, index) => {
                   const isActive = pathname === item.path;
                   return (
                    <motion.div
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        className={cn(
                          "text-lg font-serif block py-2 border-b border-gray-50",
                          isActive ? 'text-brand-blue font-bold' : 'text-gray-600'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="h-px w-full bg-gray-100 my-2"></div>
                <div className="flex flex-col gap-3 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><Phone size={14} className="text-italy-green"/> 🇫🇷 {COMPANY_INFO.contacts.rosario.phone}</p>
                  <p className="flex items-center gap-2"><Phone size={14} className="text-italy-red"/> 🇮🇹 {COMPANY_INFO.contacts.francesco.phone}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
