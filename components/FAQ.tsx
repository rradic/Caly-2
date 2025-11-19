
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-neutral-50 py-24" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{t.faq.title}</h2>
          <p className="text-gray-500">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md">
              <button 
                className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="mr-4 text-lg">{i + 1}. {item.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="text-gray-900" /> : <ChevronDown size={20} className="text-gray-400" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-40 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 text-base leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
