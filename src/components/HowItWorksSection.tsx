import { HOW_IT_WORKS_STEPS } from '../data/landingData';
import { ThemeConfig } from '../types';
import { HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksSectionProps {
  theme: ThemeConfig;
}

export const HowItWorksSection = ({ theme }: HowItWorksSectionProps) => {
  return (
    <section id="como-funciona" className={`py-12 sm:py-16 ${theme.sectionAltBg} border-y ${theme.dividerColor} relative`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} mb-2`}>
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme.textPrimary} tracking-tight`}>
            Como Funciona a Sua Primeira Consulta
          </h2>
          <p className={`text-sm sm:text-base ${theme.textSecondary} max-w-xl mx-auto mt-2`}>
            Sem burocracia. Em apenas 3 passos você garante seu atendimento presencial gratuito.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`relative p-5 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} shadow-lg flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-emerald-400/70 font-mono">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {step.badge}
                  </span>
                </div>

                <h3 className={`text-base font-bold ${theme.textPrimary} mb-2`}>
                  {step.title}
                </h3>

                <p className={`text-xs sm:text-sm ${theme.textSecondary} leading-relaxed font-normal`}>
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Passo {idx + 1} de 3</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance badge */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Você não paga nada na primeira consulta e não tem nenhuma obrigação de fechar tratamentos.
          </span>
        </div>
      </div>
    </section>
  );
};
