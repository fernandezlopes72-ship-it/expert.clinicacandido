import { EXPERT_DATA } from '../data/landingData';
import { ThemeConfig } from '../types';
import { Check, ShieldCheck, Heart, User, Sparkles } from 'lucide-react';

interface AboutExpertSectionProps {
  theme: ThemeConfig;
}

export const AboutExpertSection = ({ theme }: AboutExpertSectionProps) => {
  return (
    <section id="sobre" className={`py-12 sm:py-16 ${theme.sectionAltBg} border-y ${theme.dividerColor} relative`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} mb-2`}>
            <User className="w-3.5 h-3.5" />
            <span>Quem Cuidará do Seu Sorriso</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme.textPrimary} tracking-tight`}>
            Muito prazer, sou o Dr. Filipe K. Cândido
          </h2>
          <p className={`text-sm sm:text-base ${theme.textSecondary} max-w-xl mx-auto mt-2`}>
            Responsável Técnico com registro ativo no CRO 12237 e CRO CLÍNICA 1508
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Expert Photo */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 aspect-[4/5] mx-auto max-w-xs md:max-w-none">
              <img
                src={EXPERT_DATA.images.about}
                alt="Dr. Filipe K. Cândido no consultório"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs font-bold">RT Filipe K. Cândido</p>
                <p className="text-[11px] text-emerald-400">CRO 12237 • Canelinha/SC</p>
              </div>
            </div>
          </div>

          {/* 1st Person Humanized Copy */}
          <div className="md:col-span-7 space-y-4">
            <div className={`p-5 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} shadow-lg space-y-3`}>
              <p className={`text-sm sm:text-base ${theme.textSecondary} leading-relaxed`}>
                Eu acredito que cuidar do sorriso vai muito além de dentes perfeitos. É sobre <strong className={theme.textPrimary}>resgatar a sua autoestima</strong>, devolver a vontade de rir sem esconder a boca e oferecer um tratamento onde você se sinta ouvido e respeitado.
              </p>
              <p className={`text-sm sm:text-base ${theme.textSecondary} leading-relaxed`}>
                Por isso, aqui na clínica em Canelinha, você é atendido <strong className="text-emerald-400">diretamente por mim</strong>. Eu avalio o seu caso de forma personalizada, explico cada detalhe sem jargões complicados e oferecemos um suporte completo integrando <span className={theme.textPrimary}>Odontologia, Nutrição e Psicologia</span>.
              </p>
            </div>

            {/* Bullet Points with Differentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className={`flex items-start gap-2.5 p-3 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs">
                  <span className={`font-bold block ${theme.textPrimary}`}>Atendimento sem pressa</span>
                  <span className={theme.textMuted}>Tempo dedicado exclusivamente para você</span>
                </div>
              </div>

              <div className={`flex items-start gap-2.5 p-3 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs">
                  <span className={`font-bold block ${theme.textPrimary}`}>Zero julgamentos</span>
                  <span className={theme.textMuted}>Ambiente acolhedor e acolhimento empático</span>
                </div>
              </div>

              <div className={`flex items-start gap-2.5 p-3 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs">
                  <span className={`font-bold block ${theme.textPrimary}`}>Anestesia confortável</span>
                  <span className={theme.textMuted}>Técnicas modernas para máximo alívio</span>
                </div>
              </div>

              <div className={`flex items-start gap-2.5 p-3 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs">
                  <span className={`font-bold block ${theme.textPrimary}`}>Planejamento claro</span>
                  <span className={theme.textMuted}>Valores honestos e etapas definidas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
