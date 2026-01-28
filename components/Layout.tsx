import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-blue">
      {/* Top Bar - Contact Info */}
      <div className="bg-brand-blue text-white py-2 text-sm hidden md:block">
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
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full border-2 border-brand-blue flex items-center justify-center bg-white overflow-hidden group-hover:shadow-lg transition">
               {/* Simulating the logo from the prompt description */}
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
              <span className="font-serif font-bold text-xl tracking-wide text-brand-blue leading-none">
                100% Prodotto Italiano
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                Distributeurs Laitiers
              </span>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide uppercase transition-colors duration-300 relative group ${
                    isActive ? 'text-brand-blue' : 'text-gray-500 hover:text-brand-blue'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-italy-green via-white to-italy-red transform origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/contatti"
              className="bg-brand-blue text-white px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition shadow-md"
            >
              Export
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-serif ${isActive ? 'text-brand-blue font-bold' : 'text-gray-600'}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="h-px w-full bg-gray-100 my-2"></div>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <p>🇫🇷 {COMPANY_INFO.contacts.rosario.phone}</p>
                <p>🇮🇹 {COMPANY_INFO.contacts.francesco.phone}</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue text-white pt-16 pb-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
             <div className="mb-6">
               <h3 className="font-serif text-2xl font-bold mb-2">100% Prodotto Italiano</h3>
               <p className="text-gray-400 text-sm">{COMPANY_INFO.claim}</p>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Il partner di fiducia per portare l'eccellenza gastronomica italiana sulle tavole francesi. Tradizione, qualità e origine certificata.
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
                  <NavLink to={item.path} className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                    {item.label}
                  </NavLink>
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
          <p>&copy; {new Date().getFullYear()} 100% Prodotto Italiano. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
