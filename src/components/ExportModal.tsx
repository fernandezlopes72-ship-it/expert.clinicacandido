import { useState } from 'react';
import { ThemeConfig } from '../types';
import { EXPERT_DATA, THEMES } from '../data/landingData';
import { X, Copy, Check, ExternalLink, Code2, Globe } from 'lucide-react';

interface ExportModalProps {
  currentTheme: ThemeConfig;
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal = ({ currentTheme, isOpen, onClose }: ExportModalProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'instructions' | 'html'>('instructions');

  if (!isOpen) return null;

  const generateStandaloneHTML = () => {
    return `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dr. Filipe K. Cândido | Avaliação Odontológica Gratuita em Canelinha</title>
  <meta name="description" content="Agende sua primeira consulta gratuita com o Dr. Filipe K. Cândido em Canelinha. Odontologia humanizada e reabilitação oral." />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="${currentTheme.bgColor} ${currentTheme.textPrimary} antialiased selection:bg-emerald-500 selection:text-white">

  <!-- HERO SECTION -->
  <section class="relative pt-8 pb-14 px-4 max-w-4xl mx-auto text-center">
    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${currentTheme.badgeBg} ${currentTheme.badgeText} border ${currentTheme.badgeBorder} mb-4">
      <span>${EXPERT_DATA.role} • ${EXPERT_DATA.cro} • ${EXPERT_DATA.croClinica}</span>
    </div>

    <!-- FOTO EXPERT -->
    <div class="relative mx-auto mb-6 max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
      <img src="${EXPERT_DATA.images.hero}" alt="Dr. Filipe K. Cândido" class="w-full h-auto object-cover" />
    </div>

    <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
      Eu sou o <span class="text-emerald-400">Dr. Filipe K. Cândido</span>, Dentista em Canelinha.
    </h1>

    <p class="text-sm sm:text-base ${currentTheme.textSecondary} max-w-xl mx-auto mb-6">
      Transformo sorrisos e devolvo a sua segurança com atendimento 100% humanizado, sem dor e sem julgamentos.
    </p>

    <!-- CTA WHATSAPP -->
    <a href="${EXPERT_DATA.whatsappUrl}" target="_blank" class="inline-block w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl transition-all">
      Agendar Primeira Consulta Gratuita no WhatsApp
    </a>
    <p class="text-xs text-slate-400 mt-2">Resposta rápida • 100% Gratuita e Sem Compromisso</p>
  </section>

  <!-- QUEM SOU EU -->
  <section class="py-12 px-4 ${currentTheme.sectionAltBg} border-y ${currentTheme.dividerColor}">
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img src="${EXPERT_DATA.images.about}" alt="Dr. Filipe" class="rounded-2xl shadow-xl w-full max-w-xs mx-auto" />
      <div>
        <h2 class="text-xl sm:text-2xl font-bold mb-3">Muito prazer, sou o Dr. Filipe K. Cândido</h2>
        <p class="text-sm ${currentTheme.textSecondary} mb-4 leading-relaxed">
          Aqui você é atendido diretamente por mim. Cuidamos do seu sorriso com Odontologia, Nutrição e Psicologia integradas para máxima saúde e autoestima.
        </p>
      </div>
    </div>
  </section>

  <!-- RESULTADOS -->
  <section class="py-12 px-4 max-w-4xl mx-auto text-center">
    <h2 class="text-xl sm:text-2xl font-bold mb-6">Transformações Reais de Sorrisos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      <img src="https://i.imgur.com/a8N3Mpd.jpeg" class="rounded-xl shadow-lg w-full h-48 object-cover" />
      <img src="https://i.imgur.com/pKd7qX3.jpeg" class="rounded-xl shadow-lg w-full h-48 object-cover" />
      <img src="https://i.imgur.com/08U7EAP.jpeg" class="rounded-xl shadow-lg w-full h-48 object-cover" />
    </div>
    <p class="text-[11px] text-slate-400 italic">* Resultados podem variar de pessoa para pessoa.</p>
  </section>

  <!-- CTA FINAL -->
  <section class="py-12 px-4 text-center ${currentTheme.sectionAltBg}">
    <h2 class="text-xl sm:text-3xl font-bold mb-4">Dê o primeiro passo para o seu novo sorriso</h2>
    <a href="${EXPERT_DATA.whatsappUrl}" target="_blank" class="inline-block px-8 py-4 rounded-2xl text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl">
      Garantir Minha Consulta Gratuita no WhatsApp
    </a>
  </section>

  <!-- RODAPÉ -->
  <footer class="py-8 px-4 text-center text-xs text-slate-400 border-t ${currentTheme.dividerColor}">
    <p class="font-bold">${EXPERT_DATA.name} • ${EXPERT_DATA.cro} • ${EXPERT_DATA.croClinica}</p>
    <p>${EXPERT_DATA.location.address} - ${EXPERT_DATA.location.city}</p>
    <p class="mt-2"><a href="${EXPERT_DATA.instagramUrl}" target="_blank" class="text-emerald-400">Instagram: ${EXPERT_DATA.instagramHandle}</a></p>
  </footer>
</body>
</html>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateStandaloneHTML());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-2xl w-full bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              Publicar no GitHub & Vercel
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-white/10 bg-black/40 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('instructions')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              activeTab === 'instructions'
                ? 'border-emerald-400 text-emerald-400 bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Passo a Passo de Deploy (GitHub + Vercel)
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              activeTab === 'html'
                ? 'border-emerald-400 text-emerald-400 bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Código HTML Pronto ({currentTheme.name.split(':')[0]})
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300">
          {activeTab === 'instructions' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                <span className="font-bold block text-sm mb-1">
                  🚀 Pronto para Vercel com 100% de performance mobile:
                </span>
                Esta aplicação foi desenvolvida em Vite + React + Tailwind CSS puro, sendo 100% compatível com deploy contínuo gratuito na Vercel e GitHub.
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white mb-1">Opção A: Deploy direto do repositório no GitHub</div>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300 text-xs">
                    <li>Exporte o projeto para seu repositório no GitHub.</li>
                    <li>Acesse <strong>vercel.com</strong> e clique em <em>Add New &gt; Project</em>.</li>
                    <li>Selecione o repositório — a Vercel detecta Vite automaticamente.</li>
                    <li>Clique em <strong>Deploy</strong> e seu domínio próprio já estará no ar!</li>
                  </ol>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white mb-1">Opção B: Usar como arquivo estático único (index.html)</div>
                  <p className="text-xs text-slate-300 mb-2">
                    Você pode copiar o código da aba ao lado e subir um único arquivo <code className="text-emerald-400">index.html</code> no GitHub Pages, Netlify ou Vercel.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">
                Abaixo está o código estático standalone com o modelo ativo ({currentTheme.name}):
              </p>
              <pre className="p-3 rounded-xl bg-black/70 border border-white/10 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-60">
                {generateStandaloneHTML()}
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-white/10 bg-slate-950">
          <span className="text-xs text-slate-400">
            Modelo ativo: <strong className="text-emerald-400">{currentTheme.tag}</strong>
          </span>

          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiado!' : 'Copiar Código'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
