
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const CtaBlock: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
        <p className="text-gray-400 mb-10 text-lg">{t.cta.subtitle}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            {t.cta.btn1}
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            {t.cta.btn2}
          </button>
        </div>
      </div>
    </section>
  );
};
