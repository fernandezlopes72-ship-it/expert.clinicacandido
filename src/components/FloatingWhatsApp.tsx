import { useState, useEffect } from 'react';
import { EXPERT_DATA } from '../data/landingData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 animate-in slide-in-from-bottom-5 duration-500">
      {/* Floating speech bubble prompt */}
      <div className="relative max-w-[260px] p-3 rounded-2xl bg-slate-900/95 text-white border border-emerald-500/30 shadow-2xl backdrop-blur-md">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-1.5 -left-1.5 p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/10"
          title="Fechar aviso"
        >
          <X className="w-3 h-3" />
        </button>
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-bold text-emerald-400">
            Dr. Filipe • Online agora
          </span>
        </div>
        <p className="text-xs text-slate-200 leading-snug">
          Olá! Deseja agendar sua primeira consulta gratuita no WhatsApp?
        </p>
      </div>

      {/* Main WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={EXPERT_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/70 border border-emerald-300/40 hover:scale-105 transition-all"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
        </div>
        <span>Agendar Consulta</span>
      </a>
    </aside>
  );
};
