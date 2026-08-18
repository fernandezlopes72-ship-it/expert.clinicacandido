import { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { ThemeConfig } from '../types';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqSectionProps {
  theme: ThemeConfig;
}

export const FaqSection = ({ theme }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className={`py-12 sm:py-16 ${theme.sectionAltBg} border-y ${theme.dividerColor} relative`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} mb-2`}>
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme.textPrimary} tracking-tight`}>
            Tire Suas Dúvidas
          </h2>
          <p className={`text-sm sm:text-base ${theme.textSecondary} max-w-lg mx-auto mt-2`}>
            Tudo o que você precisa saber antes da sua primeira visita ao consultório.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl ${theme.cardBg} border ${theme.cardBorder} overflow-hidden transition-all`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className={`w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors ${
                    isOpen ? 'bg-white/5' : 'hover:bg-white/5'
                  }`}
                >
                  <span className={`text-sm sm:text-base font-bold ${theme.textPrimary} pr-2`}>
                    {item.question}
                  </span>
                  <div className="p-1 rounded-lg bg-white/10 text-emerald-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in duration-200">
                    <p className={theme.textSecondary}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
