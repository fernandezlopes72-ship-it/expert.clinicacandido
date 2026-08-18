import { EXPERT_DATA } from '../data/landingData';
import { ThemeConfig } from '../types';
import { MessageCircle, ShieldCheck, Star, Sparkles, MapPin, CheckCircle2, Clock } from 'lucide-react';

interface HeroSectionProps {
  theme: ThemeConfig;
}

export const HeroSection = ({ theme }: HeroSectionProps) => {
  return (
    <section id="inicio" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} shadow-sm backdrop-blur-md`}>
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>{EXPERT_DATA.role} • {EXPERT_DATA.cro}</span>
          </div>

          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} shadow-sm backdrop-blur-md`}>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{EXPERT_DATA.croClinica}</span>
          </div>

          <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} backdrop-blur-md`}>
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>Canelinha - SC</span>
          </div>
        </div>

        {/* Expert Portrait - Focal Hero Element */}
        <div className="relative mx-auto mb-8 max-w-sm sm:max-w-md">
          {/* Decorative frame rings */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-amber-400/20 to-emerald-400/30 blur-md opacity-70" />
          
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 aspect-[4/5] sm:aspect-[3/4]">
            <img
              src={EXPERT_DATA.images.hero}
              alt="Dr. Filipe K. Cândido - Dentista e Responsável Técnico em Canelinha"
              className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
              loading="eager"
              referrerPolicy="no-referrer"
            />

            {/* Bottom floating badge on image */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between shadow-xl">
              <div>
                <div className="text-xs font-bold text-slate-100 flex items-center gap-1">
                  <span>Dr. Filipe K. Cândido</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-[11px] text-emerald-300 font-medium">
                  Atendimento direto e personalizado
                </div>
              </div>

              <div className="flex items-center gap-1 bg-amber-400/20 border border-amber-400/40 px-2 py-1 rounded-lg">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">5.0</span>
              </div>
            </div>
          </div>

          {/* Quick Floating Trust Pill */}
          <div className="absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 rounded-full bg-emerald-600 text-white font-bold text-[11px] shadow-lg shadow-emerald-950/50 flex items-center gap-1.5 border border-emerald-400/40 animate-bounce duration-1000">
            <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
            <span>1ª Consulta Gratuita</span>
          </div>
        </div>

        {/* Hero Copywriting */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${theme.textPrimary} leading-tight mb-4`}>
            Eu sou o <span className={`bg-gradient-to-r ${theme.accentColor} bg-clip-text text-transparent`}>Dr. Filipe K. Cândido</span>, Dentista em Canelinha.
          </h1>

          <p className={`text-base sm:text-lg ${theme.textSecondary} leading-relaxed mb-6 font-normal`}>
            Transformo sorrisos e devolvo a sua segurança com um atendimento{' '}
            <strong className="text-emerald-400 font-semibold">100% humanizado, sem dor e sem julgamentos</strong>.
            Cuidamos de você do início ao fim com Odontologia, Nutrição e Psicologia integradas.
          </p>

          {/* Core CTA WhatsApp Button */}
          <div className="space-y-3 mb-6">
            <a
              id="cta-hero-whatsapp"
              href={EXPERT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${theme.ctaGradient} ${theme.ctaShadow}`}
            >
              <div className="relative flex items-center justify-center">
                <MessageCircle className="w-6 h-6 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              </div>
              <span className="text-left sm:text-center">
                Agendar Primeira Consulta Gratuita no WhatsApp
              </span>
            </a>

            {/* Microcopy reassurance */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Resposta rápida no WhatsApp
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% Gratuita e Sem Compromisso
              </span>
            </div>
          </div>

          {/* Quick Specialties Pills */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap justify-center items-center gap-2">
            {EXPERT_DATA.specialties.map((item, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium"
              >
                🔹 {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
