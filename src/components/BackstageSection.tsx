import { BACKSTAGE_ITEMS } from '../data/landingData';
import { ThemeConfig } from '../types';
import { Camera, CheckCircle2 } from 'lucide-react';

interface BackstageSectionProps {
  theme: ThemeConfig;
}

export const BackstageSection = ({ theme }: BackstageSectionProps) => {
  return (
    <section id="bastidores" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} mb-2`}>
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bastidores & Atendimento</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme.textPrimary} tracking-tight`}>
            O Cuidado com Cada Detalhe
          </h2>
          <p className={`text-sm sm:text-base ${theme.textSecondary} max-w-xl mx-auto mt-2`}>
            Ambiente planejado para você se sentir à vontade, com rigor em biossegurança e acolhimento humano.
          </p>
        </div>

        {/* Backstage Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BACKSTAGE_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl overflow-hidden ${theme.cardBg} border ${theme.cardBorder} shadow-xl group`}
            >
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 mb-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-200 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
