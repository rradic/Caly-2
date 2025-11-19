
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const images = [
    "https://picsum.photos/seed/salonbarber/600/400",
    "https://picsum.photos/seed/salonwomen/600/400",
    "https://picsum.photos/seed/salonhair/600/400"
];

export const WhySalonsLoveCaly: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-neutral-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.why.title}</h2>
        </div>

        <div className="space-y-32">
          {t.why.items.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                  <img src={images[index]} alt={feature.title} className="w-full h-auto object-cover" />
                  {/* Decorative blob */}
                  <div className={`absolute -z-10 w-full h-full top-4 ${index % 2 === 0 ? '-left-4 bg-yellow-200' : '-right-4 bg-blue-200'} rounded-[2.5rem]`}></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold mb-8 leading-snug">{feature.title}</h3>
                
                {feature.description ? (
                    <p className="text-gray-600 text-xl leading-relaxed mb-6">{feature.description}</p>
                ) : (
                    <ul className="space-y-6">
                        {feature.checks && feature.checks.map((check, i) => (
                        <li key={i} className="flex items-start gap-4">
                            <div className="bg-caly-yellow rounded-full p-1 mt-1 shrink-0">
                                <CheckCircle className="w-4 h-4 text-black" />
                            </div>
                            <span className="text-gray-800 text-lg">{check}</span>
                        </li>
                        ))}
                    </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
