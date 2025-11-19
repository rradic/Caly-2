
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PhoneMockup } from './ui/PhoneMockup.tsx';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const logos = ["EQT", "Thrive", "Linear", "Kolo", "Unsplash", "Index Ventures", "Primer", "DEPT"];

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBg = useTransform(scrollY, [0, 500], [0, 200]);
  const yPhone = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Mouse parallax (simple interactive simulation)
  const handleMouseMove = (e: React.MouseEvent) => {
      // could implement tilt effect here if needed
  };

  return (
    <>
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-honeycomb overflow-hidden min-h-[90vh] flex flex-col justify-center"
      >
        {/* Animated Background Elements */}
        <motion.div style={{ y: yBg }} className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <motion.div style={{ y: yBg }} className="absolute bottom-20 right-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 max-w-5xl leading-[1.1] mb-8"
            style={{ whiteSpace: 'pre-line' }} // To handle newlines in translation
          >
            {t.hero.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-800 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="mb-20 flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-black text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
              {t.hero.ctaMain}
            </button>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-7xl">
             {/* Left Side Feature List (Desktop Only visual balance) */}
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:flex flex-col gap-6 text-left"
             >
                {t.hero.features.map((feature, i) => (
                    <FeatureItem key={i} text={feature} delay={i * 0.1} />
                ))}
             </motion.div>

             {/* Phone Mockup with Parallax */}
             <motion.div
                 style={{ y: yPhone }}
                 initial={{ y: 100, opacity: 0, rotate: 5 }}
                 animate={{ y: 0, opacity: 1, rotate: 0 }}
                 transition={{ duration: 1, delay: 0.3, type: "spring" }}
                 className="relative z-20"
             >
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-white/30 rounded-[3.5rem] blur-xl group-hover:bg-white/50 transition-colors duration-500"></div>
                    <PhoneMockup screen="calendar" />
                    
                    {/* Floating Badge */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 -right-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[140px] hidden md:block"
                    >
                        <div className="text-3xl font-bold text-yellow-500 mb-1">24/7</div>
                        <div className="text-xs font-semibold text-gray-600 leading-tight">Booking available</div>
                    </motion.div>
                 </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <div className="bg-caly-yellow/30 border-t border-b border-yellow-500/10 py-10 overflow-hidden backdrop-blur-sm">
        <div className="container mx-auto px-4">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100"
           >
              {logos.map((logo, i) => (
                  <span key={i} className="text-lg md:text-xl font-black uppercase tracking-widest text-black/80 drop-shadow-sm hover:scale-110 transition-transform cursor-default">{logo}</span>
              ))}
           </motion.div>
        </div>
      </div>
    </>
  );
};

const FeatureItem = ({ text, delay }: { text: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + delay }}
        className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all hover:bg-white/80"
    >
        <div className="w-3 h-3 bg-black rounded-full shrink-0"></div>
        <span className="font-semibold text-lg text-gray-900">{text}</span>
    </motion.div>
);
