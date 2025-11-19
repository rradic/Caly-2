
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronLeft, ChevronRight, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
        reset();
    }, 4000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-20 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            {t.contact.title}
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 bg-white p-2 md:p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <AnimatePresence mode='wait'>
                    {isSubmitted ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-800 mb-2">Success!</h3>
                            <p className="text-green-700">{t.contact.success}</p>
                        </motion.div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-6"
                        >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FloatingInput 
                                    label={t.contact.form.firstName} 
                                    name="firstName" 
                                    register={register} 
                                    isFocused={focusedField === 'firstName'}
                                    onFocus={() => setFocusedField('firstName')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                <FloatingInput 
                                    label={t.contact.form.lastName} 
                                    name="lastName" 
                                    register={register} 
                                    isFocused={focusedField === 'lastName'}
                                    onFocus={() => setFocusedField('lastName')}
                                    onBlur={() => setFocusedField(null)}
                                />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <FloatingInput 
                                    label={t.contact.form.email} 
                                    name="email" 
                                    type="email"
                                    register={register} 
                                    isFocused={focusedField === 'email'}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                <FloatingInput 
                                    label={t.contact.form.phone} 
                                    name="phone" 
                                    register={register} 
                                    isFocused={focusedField === 'phone'}
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                />
                              </div>
                              <div className="relative">
                                 <textarea 
                                    {...register("message")} 
                                    rows={4} 
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-black rounded-xl p-4 pt-6 outline-none transition-all resize-none peer"
                                    placeholder=" "
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                ></textarea>
                                <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-black peer-placeholder-shown:top-4 ${focusedField === 'message' || true ? '-top-2 text-xs bg-white px-1 text-black' : ''}`}>
                                    {t.contact.form.message}
                                </label>
                              </div>

                              <button 
                                type="submit" 
                                className="w-full bg-black text-white rounded-xl px-8 py-4 font-bold text-lg hover:bg-gray-800 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-lg"
                              >
                                {t.contact.form.submit} <Send size={18} />
                              </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
          </motion.div>

          {/* Interactive Calendar Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start"
          >
            <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-xl">March 2025</h3>
                    <div className="flex gap-4 text-gray-400">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeft size={20} /></button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-7 text-center gap-y-6 text-sm mb-4">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
                        <div key={d} className="font-bold text-gray-400 text-xs uppercase tracking-wider">{d}</div>
                    ))}
                    
                    {/* Calendar Days */}
                    {/* Adding some offset for the first day */}
                    <div></div><div></div><div></div>
                    
                    {[...Array(31).keys()].map(d => {
                        const day = d + 1;
                        const isToday = day === 14;
                        const isSelected = day === 24; 
                        const isPast = day < 14;
                        
                        return (
                            <div key={day} className="relative h-10 flex items-center justify-center">
                                <button 
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all
                                        ${isSelected ? 'bg-black text-white shadow-lg scale-110' : 'hover:bg-gray-100'}
                                        ${isToday ? 'border-2 border-yellow-400' : ''}
                                        ${isPast ? 'text-gray-300' : 'text-gray-800'}
                                    `}
                                >
                                    {day}
                                </button>
                                {isSelected && <div className="absolute -bottom-2 w-1 h-1 bg-black rounded-full"></div>}
                            </div>
                        )
                    })}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                     <div className="text-sm font-semibold mb-3 text-gray-500">Available times for Mar 24</div>
                     <div className="flex flex-wrap gap-2">
                        {["09:00", "11:30", "14:00", "16:45"].map(time => (
                            <button key={time} className="px-4 py-2 rounded-lg bg-gray-50 text-sm font-semibold hover:bg-yellow-100 hover:text-yellow-800 transition-colors">
                                {time}
                            </button>
                        ))}
                     </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Inputs
const FloatingInput = ({ label, name, type = "text", register, isFocused, onFocus, onBlur }: any) => (
    <div className="relative">
        <input 
            {...register(name)} 
            type={type}
            className={`peer w-full bg-gray-50 border-2 rounded-xl h-14 px-4 pt-4 outline-none transition-all ${isFocused ? 'border-black bg-white' : 'border-transparent'}`}
            placeholder=" "
            onFocus={onFocus}
            onBlur={onBlur}
        />
        <label className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all pointer-events-none
            peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-black
            peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:text-xs
        `}>
            {label}
        </label>
    </div>
);
