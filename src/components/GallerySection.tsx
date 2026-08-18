import { useState, FormEvent } from 'react';
import { GALLERY_ITEMS, EXPERT_DATA } from '../data/landingData';
import { ThemeConfig, GalleryItem } from '../types';
import { Sparkles, Maximize2, Plus, AlertCircle, MessageCircle } from 'lucide-react';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  theme: ThemeConfig;
}

export const GallerySection = ({ theme }: GallerySectionProps) => {
  const activeTheme: ThemeConfig = theme;

  const [items, setItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const handleAddPhoto = (e: FormEvent) => {
    e.preventDefault();
    if (!newUrl.trim()) return;
    const newItem: GalleryItem = {
      id: `res-${Date.now()}`,
      url: newUrl.trim(),
      title: newTitle.trim() || 'Transformação do Sorriso',
      category: 'Estética & Reabilitação',
      description: 'Novo resultado documentado em avaliação clínica.'
    };
    setItems((prev) => [newItem, ...prev]);
    setNewUrl('');
    setNewTitle('');
    setShowAddForm(false);
  };

  return (
    <section id="resultados" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${activeTheme.badgeBg} ${activeTheme.badgeText} border ${activeTheme.badgeBorder} mb-2`}>
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Provas Visuais & Casos Clínicos</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${activeTheme.textPrimary} tracking-tight`}>
            Transformações Reais de Sorrisos
          </h2>
          <p className={`text-sm sm:text-base ${activeTheme.textSecondary} max-w-xl mx-auto mt-2`}>
            Confira alguns dos resultados alcançados com técnica minuciosa e planejamento individual.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group relative rounded-2xl overflow-hidden ${activeTheme.cardBg} border ${activeTheme.cardBorder} ${activeTheme.cardHoverBorder} cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col`}
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Ver em Tela Cheia</span>
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-emerald-300 text-[11px] font-semibold border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Title and Short Description */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-sm font-bold ${activeTheme.textPrimary} mb-1 line-clamp-1`}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className={`text-xs ${activeTheme.textSecondary} line-clamp-2 leading-relaxed`}>
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
                  <span>Toque para ampliar</span>
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extensible Add Photo Button (Ready for user to add more links) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Galeria extensível: você pode adicionar novas fotos e links de resultados a qualquer momento.</span>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/15 shrink-0"
          >
            <Plus className="w-3.5 h-3.5 text-emerald-400" />
            <span>{showAddForm ? 'Fechar Adição' : '+ Adicionar Mais Fotos'}</span>
          </button>
        </div>

        {/* Add Photo Form (if toggled) */}
        {showAddForm && (
          <form
            onSubmit={handleAddPhoto}
            className={`p-4 rounded-2xl ${activeTheme.cardBg} border ${activeTheme.cardBorder} mb-6 space-y-3 animate-in fade-in duration-200`}
          >
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Adicionar Link de Nova Imagem / Caso Clínico
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">URL da Imagem (Imgur, HTTPS, etc):</label>
                <input
                  type="url"
                  required
                  placeholder="https://i.imgur.com/..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Título do Caso (opcional):</label>
                <input
                  type="text"
                  placeholder="Ex: Reabilitação Oral com Resina"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="text-xs px-3 py-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="text-xs px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold"
              >
                Salvar na Galeria
              </button>
            </div>
          </form>
        )}

        {/* Discrete Disclaimer */}
        <p className="text-center text-[11px] text-slate-400 max-w-xl mx-auto italic">
          * Aviso Ético: Resultados podem variar de pessoa para pessoa dependendo da anatomia, biologia e saúde bucal. Fotos publicadas para fins educativos e ilustrativos.
        </p>

        {/* Small CTA below results */}
        <div className="text-center mt-6">
          <a
            href={EXPERT_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Quero saber como ficaria o meu sorriso na avaliação gratuita →</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};
