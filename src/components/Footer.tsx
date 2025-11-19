
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#1a1d21] text-white pt-24 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-24">
                {/* Brand */}
                <div className="max-w-sm">
                    <h2 className="text-4xl font-extrabold italic mb-6 tracking-tight">Caly</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                        {t.footer.desc}
                    </p>
                    <div className="flex gap-4">
                        <SocialIcon icon={<Facebook size={18} />} />
                        <SocialIcon icon={<Twitter size={18} />} />
                        <SocialIcon icon={<Linkedin size={18} />} />
                        <SocialIcon icon={<Instagram size={18} />} />
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-20">
                    <div>
                        <h4 className="font-bold mb-6 text-lg tracking-wide">{t.footer.links.title}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.home}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.about}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.process}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.pricing}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-lg tracking-wide">{t.footer.legal.title}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.legal.terms}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.legal.privacy}</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold mb-6 text-lg tracking-wide">{t.footer.contactTitle}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer transition-colors">(000) 000-0000</li>
                            <li className="hover:text-white cursor-pointer transition-colors">kontakt@caly.si</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                {t.footer.rights}
            </div>
        </div>
            
        {/* Giant Watermark effect */}
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.03] select-none font-black text-[30vw] leading-none text-white translate-y-1/4 translate-x-10 z-0">
            Caly
        </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 rounded-full border border-gray-700 bg-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-white hover:border-white transition-all transform hover:-translate-y-1">
        {icon}
    </a>
);
