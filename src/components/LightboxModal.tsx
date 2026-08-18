import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal = ({ item, onClose }: LightboxModalProps) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/50 text-white">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
              {item.category}
            </span>
            <h3 className="text-sm font-bold text-slate-100 truncate">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative max-h-[75vh] flex items-center justify-center bg-black/80 overflow-hidden">
          <img
            src={item.url}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Disclaimer */}
        <div className="p-4 bg-slate-950/90 text-xs border-t border-white/10 space-y-1.5">
          {item.description && (
            <p className="text-slate-300 font-medium">{item.description}</p>
          )}
          <p className="text-[11px] text-slate-500 italic">
            * Resultados podem variar de pessoa para pessoa. Cada caso requer avaliação clínica individualizada.
          </p>
        </div>
      </div>
    </div>
  );
};
