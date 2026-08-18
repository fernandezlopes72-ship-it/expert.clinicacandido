import { THEMES } from './data/landingData';
import { HeroSection } from './components/HeroSection';
import { AboutExpertSection } from './components/AboutExpertSection';
import { GallerySection } from './components/GallerySection';
import { WhyTrustSection } from './components/WhyTrustSection';
import { MidCTASection } from './components/MidCTASection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BackstageSection } from './components/BackstageSection';
import { FaqSection } from './components/FaqSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  // Modelo escolhido: Dark Executive & Champagne Gold (Alta conversão, estética premium e autoridade)
  const currentTheme = THEMES['dark-gold'];

  return (
    <div className={`min-h-screen ${currentTheme.bgColor} ${currentTheme.textPrimary} flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans`}>
      {/* Main Landing Page Flow (Mobile First, Sem Menus, 100% Focada em Conversão) */}
      <main className="flex-1 w-full">
        {/* 1. HERO (Primeira Dobra com Foto Grande + Headline 1ª pessoa + CTA WhatsApp) */}
        <HeroSection theme={currentTheme} />

        {/* 2. QUEM SOU EU (Autoridade Pessoal & RT) */}
        <AboutExpertSection theme={currentTheme} />

        {/* 3. RESULTADOS & PROVAS VISUAIS (Antes e Depois com Lightbox) */}
        <GallerySection theme={currentTheme} />

        {/* 4. POR QUE CONFIAR EM MIM? (6 Cards Objetivos) */}
        <WhyTrustSection theme={currentTheme} />

        {/* 5. CTA INTERMEDIÁRIO (Quebra de Objeções) */}
        <MidCTASection theme={currentTheme} />

        {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA (3 Passos) */}
        <HowItWorksSection theme={currentTheme} />

        {/* 7. BASTIDORES & ESTRUTURA (Fotos do Expert em Ação) */}
        <BackstageSection theme={currentTheme} />

        {/* 8. DÚVIDAS FREQUENTES (FAQ) */}
        <FaqSection theme={currentTheme} />

        {/* 9. CTA FINAL (Decisão & Urgência Suave) */}
        <FinalCTASection theme={currentTheme} />
      </main>

      {/* 10. RODAPÉ SIMPLES & COMPLETO */}
      <FooterSection theme={currentTheme} />

      {/* BOTÃO FLUTUANTE DO WHATSAPP (Mobile First com alerta Online) */}
      <FloatingWhatsApp />
    </div>
  );
}
