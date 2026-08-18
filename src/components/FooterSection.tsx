import { EXPERT_DATA } from '../data/landingData';
import { ThemeConfig } from '../types';
import { MapPin, Instagram, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

interface FooterSectionProps {
  theme: ThemeConfig;
}

export const FooterSection = ({ theme }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`pt-12 pb-24 sm:pb-12 ${theme.sectionAltBg} border-t ${theme.dividerColor} text-slate-400 text-xs`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Col 1: Expert Info */}
          <div className="md:col-span-5 space-y-3">
            <h3 className={`text-base font-bold ${theme.textPrimary}`}>
              {EXPERT_DATA.name}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              {EXPERT_DATA.role} • {EXPERT_DATA.cro} <br />
              {EXPERT_DATA.croClinica}
            </p>
            <p className="text-[11px] text-emerald-400 font-medium">
              🔹 Odontologia 🔹 Nutrição 🔹 Psicologia
            </p>
            <p className="text-xs text-slate-400">
              Cuidado integrado da saúde do sorriso e bem-estar em Canelinha e região.
            </p>
          </div>

          {/* Col 2: Location & Address */}
          <div className="md:col-span-4 space-y-2">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${theme.textPrimary}`}>
              Localização do Consultório
            </h4>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                {EXPERT_DATA.location.address} <br />
                {EXPERT_DATA.location.neighborhood} • {EXPERT_DATA.location.city} <br />
                CEP {EXPERT_DATA.location.cep}
              </p>
            </div>
            <div className="pt-1">
              <a
                href={EXPERT_DATA.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors font-semibold underline underline-offset-2"
              >
                Abrir rota no Google Maps →
              </a>
            </div>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${theme.textPrimary}`}>
              Canais Oficiais
            </h4>
            <div className="space-y-2">
              <a
                href={EXPERT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>{EXPERT_DATA.instagramHandle}</span>
              </a>

              <a
                href={EXPERT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {currentYear} {EXPERT_DATA.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Página em conformidade com o Código de Ética Odontológica (CFO).</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
