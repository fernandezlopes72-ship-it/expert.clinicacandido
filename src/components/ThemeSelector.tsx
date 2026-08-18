import { useState } from 'react';
import { ThemeId, ThemeConfig } from '../types';
import { THEMES } from '../data/landingData';
import { Palette, Check, Sparkles, Download, ChevronDown, ChevronUp, Eye } from 'lucide-react';

interface ThemeSelectorProps {
  currentTheme: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
  onOpenExportModal: () => void;
}

export const ThemeSelector = ({
  currentTheme,
  onSelectTheme,
  onOpenExportModal
}: ThemeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const activeTheme = THEMES[currentTheme];

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed top-3 right-3 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-xs text-white shadow-xl hover:scale-105 transition-all"
        title="Alterar Modelo Visual"
      >
        <Palette className="w-3.5 h-3.5 text-emerald-400" />
        <span className="font-medium">4 Modelos Disponíveis</span>
      </button>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-white/10 text-white transition-all shadow-xl">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Active model label & switcher trigger */}
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-400">
                Seletor de Modelos (4 Opções)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-mono">
                {activeTheme.tag}
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-200 truncate max-w-[240px] sm:max-w-md">
              {activeTheme.name}
            </p>
          </div>
        </div>

        {/* Right buttons: Switch models dropdown & Vercel/GitHub Export */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-medium text-white transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Trocar Modelo</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-emerald-950/40"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exportar para Vercel</span>
            <span className="sm:hidden">Exportar</span>
          </button>

          <button
            onClick={() => setIsMinimized(true)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            title="Minimizar barra"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Expanded Models Grid */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl px-4 py-4 max-w-6xl mx-auto animate-in fade-in duration-200">
          <div className="mb-2 text-xs text-slate-300 font-medium">
            Escolha o modelo visual que melhor reflete sua estratégia de conversão:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.values(THEMES).map((theme: ThemeConfig) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onSelectTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`text-left p-3 rounded-xl border transition-all relative overflow-hidden group ${
                    isSelected
                      ? 'border-emerald-400 bg-emerald-950/40 ring-2 ring-emerald-400/40'
                      : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold tracking-wide uppercase text-emerald-400">
                      {theme.tag}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950">
                        <Check className="w-3 h-3" /> Ativo
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {theme.name.split(':')[1] || theme.name}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                    {theme.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
