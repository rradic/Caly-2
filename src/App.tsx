
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/src/contexts/LanguageContext.tsx';

// Components
import { Header } from '@/src/components/Header.tsx';
import { Hero } from '@/src/components/Hero.tsx';
import { WhySalonsLoveCaly } from '@/src/components/WhySalonsLoveCaly.tsx';
import { CtaBlock } from '@/src/components/CtaBlock.tsx';
import { Testimonials } from '@/src/components/Testimonials.tsx';
import { FeatureGrid } from '@/src/components/FeatureGrid.tsx';
import { SpecialOffer } from '@/src/components/SpecialOffer.tsx';
import { FAQ } from '@/src/components/FAQ.tsx';
import { Contact } from '@/src/components/Contact.tsx';
import { Footer } from '@/src/components/Footer.tsx';

const AppContent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-caly-dark origin-left z-50"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <div id="home">
            <Hero />
        </div>
        <div id="features">
            <WhySalonsLoveCaly />
        </div>
        <div id="demo">
            <CtaBlock />
            <Testimonials />
        </div>
        <div className="bg-neutral-50 py-24">
             <AverageResults />
             <FeatureGrid />
        </div>
        <div id="pricing">
            <SpecialOffer />
        </div>
        <div id="faq">
            <FAQ />
        </div>
        <div id="contact">
            <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

// Inline Mini-Component for the "Average Results" section to match design flow
const AverageResults = () => {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="bg-[#F9F5EF] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-12 shadow-sm border border-neutral-100">
        {/* Fake Phone UI for Stats */}
        <div className="relative w-64 h-[500px] bg-white rounded-[3rem] shadow-xl border-8 border-gray-900 overflow-hidden shrink-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
          <div className="pt-12 px-4 flex flex-col items-center h-full">
            <div className="w-16 h-16 rounded-full bg-yellow-400 mb-3 overflow-hidden">
               <img src="https://picsum.photos/seed/womanface/200" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-lg">Sarah's Salon</h3>
            <p className="text-xs text-gray-500 mb-6">Premium Stylist</p>
            
            <div className="w-full space-y-3">
                <div className="bg-blue-50 p-3 rounded-xl">
                    <div className="text-xs text-blue-600 font-semibold">{t.avg.cards.meeting}</div>
                    <div className="text-[10px] text-blue-400">10:00 AM - 11:00 AM</div>
                </div>
                 <div className="bg-green-50 p-3 rounded-xl">
                    <div className="text-xs text-green-600 font-semibold">{t.avg.cards.project}</div>
                    <div className="text-[10px] text-green-400">2:00 PM - 3:00 PM</div>
                </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.avg.title}</h2>
            <ul className="space-y-4 mb-8">
                {t.avg.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
            <p className="text-gray-500 text-sm mb-8">{t.avg.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 rounded-full border-2 border-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors">{t.avg.btnJoin}</button>
                <button className="px-6 py-3 rounded-full bg-[#F0EAD6] text-gray-800 font-semibold hover:bg-[#e0d8c0] transition-colors border border-[#D0C8B0]">{t.avg.btnStart}</button>
            </div>
        </div>
      </div>
    </section>
  )
}
