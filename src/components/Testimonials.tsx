
import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const stories = [
  {
    name: "Nika, Hair Salon from Maribor",
    quote: "\"Since using Caly, I haven't missed a single client. The reminders work flawlessly and I finally have more time for work instead of organizing appointments.\"",
    image: "https://picsum.photos/seed/salonchair/400/300",
    hasVideo: false
  },
  {
    name: "Sarah, Salon Owner",
    quote: "The automated system saved me 10 hours a week. It's incredible.",
    image: "https://picsum.photos/seed/salonowner/400/300",
    hasVideo: true
  },
  {
    name: "Matej, Barber Shop",
    quote: "\"My no-show rate dropped to almost zero in the first month.\"",
    image: "https://picsum.photos/seed/salonclient/400/300",
    hasVideo: true
  }
];

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.testimonials.title}</h2>
          <p className="text-gray-500">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div 
                key={i} 
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-md">
                <img src={story.image} alt={story.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                {story.hasVideo && (
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black shadow-lg cursor-pointer hover:scale-110 transition-transform group-hover:bg-white">
                            <Play size={20} fill="currentColor" className="ml-1" />
                        </div>
                    </div>
                )}
              </div>
              
              <div className="mt-2">
                 <button className="bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 hover:bg-gray-700 transition-colors">
                    {story.hasVideo ? t.testimonials.btnWatch : t.testimonials.btnRead}
                 </button>
                 <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">{story.quote}</p>
                 <p className="text-gray-400 text-xs font-medium">– {story.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
