import { EXPERT_DATA } from '../data/landingData';
import { ThemeConfig } from '../types';
import { MessageCircle, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface MidCTASectionProps {
  theme: ThemeConfig;
}

export const MidCTASection = ({ theme }: MidCTASectionProps) => {
  return (
    <section className="py-10 sm:py-14 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`relative rounded-3xl p-6 sm:p-10 ${theme.cardBg} border ${theme.cardBorder} shadow-2xl overflow-hidden text-center`}>
          {/* Subtle background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder}`}>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sem Medo • Sem Pressão • Sem Julgamentos</span>
            </div>

            <h2 className={`text-xl sm:text-3xl font-extrabold ${theme.textPrimary} tracking-tight leading-snug`}>
              Não deixe para depois a saúde e a beleza do seu sorriso.
            </h2>

            <p className={`text-sm sm:text-base ${theme.textSecondary} leading-relaxed font-normal`}>
              A avaliação inicial é uma oportunidade para tirarmos suas dúvidas com tranquilidade. Você sai sabendo exatamente a saúde dos seus dentes, sem ser obrigado a fechar nada.
            </p>

            <div className="pt-2">
              <a
                id="cta-mid-whatsapp"
                href={EXPERT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 transform hover:-translate-y-0.5 ${theme.ctaGradient} ${theme.ctaShadow}`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar no WhatsApp e Agendar Avaliação Gratuita</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Agendamento rápido em minutos
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% Sem Custo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
