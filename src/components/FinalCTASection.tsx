import { EXPERT_DATA } from '../data/landingData';
import { ThemeConfig } from '../types';
import { MessageCircle, CheckCircle2, Star, Calendar, ShieldCheck } from 'lucide-react';

interface FinalCTASectionProps {
  theme: ThemeConfig;
}

export const FinalCTASection = ({ theme }: FinalCTASectionProps) => {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`relative rounded-3xl p-6 sm:p-12 ${theme.cardBg} border ${theme.cardBorder} shadow-2xl text-center overflow-hidden`}>
          {/* Subtle Top badge */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-300 ml-1">
              Atendimento com excelência e carinho
            </span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-extrabold ${theme.textPrimary} tracking-tight leading-tight mb-4`}>
            Dê o primeiro passo para o sorriso que você sempre sonhou.
          </h2>

          <p className={`text-sm sm:text-lg ${theme.textSecondary} max-w-xl mx-auto mb-8 font-normal leading-relaxed`}>
            Agende agora a sua <strong className="text-emerald-400">primeira avaliação 100% gratuita</strong> diretamente comigo pelo WhatsApp e descubra todas as possibilidades para renovar a sua autoestima.
          </p>

          {/* Big CTA */}
          <div className="space-y-3 mb-6">
            <a
              id="cta-final-whatsapp"
              href={EXPERT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4.5 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 ${theme.ctaGradient} ${theme.ctaShadow}`}
            >
              <MessageCircle className="w-6 h-6 animate-pulse" />
              <span>Garantir Minha Consulta Gratuita no WhatsApp</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Vagas limitadas para avaliações nesta semana
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Escolha o melhor dia e horário
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{EXPERT_DATA.cro}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{EXPERT_DATA.croClinica}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
