
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FeatureGrid: React.FC = () => {
  const { t } = useLanguage();

  // Mapping visual keys to the translation array index is risky if order changes, 
  // but simpler for this refactor without changing structure too much.
  const visuals = ["calendar", "chat", "sms", "history", "settings", "browser"];

  return (
    <section className="container mx-auto px-4 mb-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features.title}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">{t.features.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.features.items.map((f, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-2 text-gray-900">{f.title}</h3>
            <p className="text-gray-500 text-sm mb-8 min-h-[40px]">{f.desc}</p>
            
            {/* Visual Placeholder Container */}
            <div className="w-full h-48 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden relative flex items-center justify-center group-hover:border-gray-200 transition-colors">
               {renderVisual(visuals[i])}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const renderVisual = (type: string) => {
    switch(type) {
        case 'calendar':
            return (
                <div className="w-3/4 bg-white shadow-lg rounded-lg p-4 transform rotate-1 transition-transform group-hover:rotate-0">
                    <div className="flex gap-2 mb-2 border-b pb-2">
                        <div className="text-xs font-bold text-gray-400">Mo</div>
                        <div className="text-xs font-bold text-blue-600 bg-blue-50 rounded px-1">Tu</div>
                        <div className="text-xs font-bold text-gray-400">We</div>
                        <div className="text-xs font-bold text-gray-400">Th</div>
                        <div className="text-xs font-bold text-gray-400">Fr</div>
                    </div>
                    <div className="space-y-2">
                        <div className="bg-blue-100 text-blue-800 text-[10px] p-1 rounded w-full">Emma - Cut & Color</div>
                        <div className="bg-purple-100 text-purple-800 text-[10px] p-1 rounded w-3/4 ml-auto">Sarah - Styling</div>
                    </div>
                </div>
            );
        case 'chat':
             return (
                <div className="w-3/4 bg-blue-100 rounded-2xl p-4 relative">
                    <div className="text-sm font-bold text-blue-900 mb-1">How can I help?</div>
                    <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-blue-300"></div>
                         <div className="text-xs text-blue-700">Nathan, Ramp</div>
                    </div>
                    <div className="absolute -bottom-4 -right-2 bg-white p-2 rounded-lg shadow-sm border animate-bounce">
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            );
        case 'sms':
             return (
                <div className="flex gap-4 items-end">
                    <div className="w-24 h-40 bg-black rounded-xl border-4 border-gray-800 relative flex flex-col items-center justify-center p-2">
                         <div className="w-full bg-gray-800 text-white text-[8px] p-1 rounded mb-2">Reminder: Apt tomorrow at 2pm</div>
                         <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                    </div>
                </div>
            );
        case 'history':
            return (
                <div className="w-5/6 bg-white shadow-md rounded-lg p-3 text-[10px]">
                    <div className="flex justify-between border-b pb-1 mb-1 font-bold text-gray-600">
                        <span>Date</span>
                        <span>Service</span>
                        <span>Amount</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed">
                        <span>12 June</span>
                        <span>Hair Spa</span>
                        <span>$140</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span>10 May</span>
                        <span>Coloring</span>
                        <span>$120</span>
                    </div>
                </div>
            );
         case 'browser':
             return (
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center gap-1 hover:-translate-y-1 transition-transform">
                        <div className="w-10 h-10 rounded-full bg-white shadow p-2"><Globe size={24} className="text-blue-500"/></div>
                    </div>
                     <div className="flex flex-col items-center gap-1 hover:-translate-y-1 transition-transform delay-75">
                        <div className="w-10 h-10 rounded-full bg-white shadow p-2"><Globe size={24} className="text-orange-500"/></div>
                    </div>
                     <div className="flex flex-col items-center gap-1 hover:-translate-y-1 transition-transform delay-100">
                        <div className="w-10 h-10 rounded-full bg-white shadow p-2"><Globe size={24} className="text-blue-400"/></div>
                    </div>
                </div>
             )
        default: 
            return <div className="text-gray-300">Visual</div>
    }
}
