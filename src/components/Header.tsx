
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: 'home' },
    { name: t.nav.features, href: 'features' },
    { name: t.nav.about, href: 'features' }, // Map About to Features for now
    { name: t.nav.demo, href: 'demo' },
    { name: t.nav.pricing, href: 'pricing' },
    { name: t.nav.faq, href: 'faq' },
    { name: t.nav.contact, href: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-caly-yellow py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="text-3xl font-extrabold italic tracking-tight">
            Caly
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA & Language & Mobile Toggle */}
        <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button 
                onClick={() => setLanguage(language === 'en' ? 'sl' : 'en')}
                className="flex items-center gap-1 px-3 py-1 rounded-full hover:bg-black/5 transition-colors font-bold text-sm"
            >
                <Globe size={16} />
                {language.toUpperCase()}
            </button>

            <button onClick={() => scrollToSection('pricing')} className="hidden md:block px-6 py-2.5 bg-white text-black font-semibold rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all border border-gray-200">
                {t.nav.startFree}
            </button>
          
            <button 
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg overflow-hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                className="text-gray-800 font-medium p-2 hover:bg-gray-50 rounded-lg text-left"
                onClick={() => scrollToSection(link.href)}
              >
                {link.name}
              </button>
            ))}
             <button onClick={() => scrollToSection('pricing')} className="w-full py-3 bg-caly-yellow text-black font-bold rounded-lg mt-2">
              {t.nav.startFree}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
