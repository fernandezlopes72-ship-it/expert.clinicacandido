import { TRUST_CARDS } from '../data/landingData';
import { ThemeConfig, TrustCard } from '../types';
import { UserCheck, ShieldCheck, HeartHandshake, Sparkles, Award, MapPin, CheckCircle } from 'lucide-react';

interface WhyTrustSectionProps {
  theme: ThemeConfig;
}

export const WhyTrustSection = ({ theme }: WhyTrustSectionProps) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="diferenciais" className={`py-12 sm:py-16 ${theme.sectionAltBg} border-y ${theme.dividerColor} relative`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} mb-2`}>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Por Que Confiar no Meu Trabalho</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme.textPrimary} tracking-tight`}>
            Diferenciais que Transformam a Sua Experiência
          </h2>
          <p className={`text-sm sm:text-base ${theme.textSecondary} max-w-xl mx-auto mt-2`}>
            Sem intermediários, sem tratamentos desnecessários e com respeito total ao seu tempo e conforto.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TRUST_CARDS.map((card: TrustCard) => (
            <div
              key={card.id}
              className={`p-5 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} ${theme.cardHoverBorder} transition-all duration-300 shadow-md hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {getIcon(card.iconName)}
                  </div>
                  {card.highlight && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-slate-300">
                      {card.highlight}
                    </span>
                  )}
                </div>

                <h3 className={`text-base font-bold ${theme.textPrimary} mb-2`}>
                  {card.title}
                </h3>

                <p className={`text-xs sm:text-sm ${theme.textSecondary} leading-relaxed font-normal`}>
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle className="w-3 h-3" />
                <span>Garantia de compromisso ético</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
