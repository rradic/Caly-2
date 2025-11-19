
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PhoneMockup } from './ui/PhoneMockup.tsx';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const SpecialOffer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-honeycomb py-24 overflow-hidden relative" id="pricing">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2 z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {t.offer.title}
          </h2>
          <p className="text-gray-800 mb-8 max-w-xl font-medium text-lg">
            {t.offer.desc}
          </p>

          <ul className="space-y-4 mb-10">
            {t.offer.list.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-lg">
                    <div className="bg-black rounded-full p-0.5">
                        <CheckCircle size={20} className="text-yellow-400 fill-black" />
                    </div>
                    {item}
                </li>
            ))}
          </ul>

          <p className="font-extrabold text-xl mb-8 uppercase tracking-wide">{t.offer.cta}</p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1">
                {t.offer.btn1}
            </button>
             <button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all hover:-translate-y-1">
                {t.offer.btn2}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
             {/* Two phones side by side overlapping */}
             <div className="relative w-[300px] h-[400px] md:h-[500px] mt-10 lg:mt-0">
                 <div className="absolute left-0 top-10 z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                    <PhoneMockup screen="profile" />
                 </div>
                 <div className="absolute right-0 top-0 z-20 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                    <PhoneMockup screen="menu" />
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute bottom-20 -right-6 md:right-10 z-30 bg-white p-6 rounded-2xl shadow-2xl border-2 border-yellow-400 rotate-3 hover:rotate-0 transition-transform">
                    <div className="text-xs font-bold uppercase text-gray-500 tracking-widest mb-1">{t.offer.badge.title}</div>
                    <div className="text-sm font-bold leading-tight">{t.offer.badge.desc}</div>
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xl p-2 rounded-full shadow-lg">🎉</div>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};
