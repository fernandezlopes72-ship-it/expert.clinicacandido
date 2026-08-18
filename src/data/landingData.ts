import { ThemeConfig, GalleryItem, BackstageItem, TrustCard, StepItem, FaqItem } from '../types';

export const EXPERT_DATA = {
  name: 'Dr. Filipe K. Cândido',
  role: 'Responsável Técnico (RT)',
  cro: 'CRO 12237',
  croClinica: 'CRO CLÍNICA 1508',
  specialties: ['Odontologia de Alta Precisão', 'Cuidado Integrado com Nutrição', 'Suporte com Psicologia'],
  location: {
    address: 'Av. Cantório Florentino da Silva, 1370 - Sala 1',
    neighborhood: 'Centro',
    city: 'Canelinha - SC',
    cep: '88230-000',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Cant%C3%B3rio+Florentino+da+Silva%2C+1370+-+Centro%2C+Canelinha+-+SC',
  },
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=554832641099&text=Ol%C3%A1%2C%20Dr.%20Filipe!%20Gostaria%20de%20agendar%20minha%20primeira%20consulta%20gratuita.&type=phone_number&app_absent=0&utm_source=ig',
  whatsappRaw: '554832641099',
  instagramUrl: 'https://www.instagram.com/clinicacandido',
  instagramHandle: '@clinicacandido',
  images: {
    hero: 'https://i.imgur.com/uiGnMPk.jpeg',
    about: 'https://i.imgur.com/mQUVDMm.jpeg',
    backstage1: 'https://i.imgur.com/KeBNRrO.jpeg',
    backstage2: 'https://i.imgur.com/JSNveLf.jpeg',
  }
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'res-1',
    url: 'https://i.imgur.com/a8N3Mpd.jpeg',
    title: 'Transformação Estética & Harmonização do Sorriso',
    category: 'Estética Dental',
    description: 'Recuperação de proporção, alinhamento e naturalidade para um sorriso renovado.'
  },
  {
    id: 'res-2',
    url: 'https://i.imgur.com/pKd7qX3.jpeg',
    title: 'Reabilitação Funcional e Estética',
    category: 'Reabilitação Oral',
    description: 'Planejamento individualizado devolvendo a segurança para sorrir e mastigar.'
  },
  {
    id: 'res-3',
    url: 'https://i.imgur.com/08U7EAP.jpeg',
    title: 'Harmonia e Naturalidade no Sorriso',
    category: 'Lentes e Resinas',
    description: 'Acabamento refinado respeitando a anatomia e os traços únicos do paciente.'
  }
];

export const BACKSTAGE_ITEMS: BackstageItem[] = [
  {
    id: 'back-1',
    url: 'https://i.imgur.com/KeBNRrO.jpeg',
    title: 'Atendimento Personalizado & Exclusivo',
    subtitle: 'Cada paciente recebe atenção dedicada e individual direto comigo.'
  },
  {
    id: 'back-2',
    url: 'https://i.imgur.com/JSNveLf.jpeg',
    title: 'Tecnologia & Planejamento Minucioso',
    subtitle: 'Ambiente preparado para máxima segurança, conforto e precisão clínica.'
  }
];

export const TRUST_CARDS: TrustCard[] = [
  {
    id: 'trust-1',
    iconName: 'UserCheck',
    title: 'Atendimento 100% Direto Comigo',
    description: 'Você não é repassado para terceiros ou estagiários. Eu conduzo sua avaliação, seu plano e cada etapa do seu tratamento.',
    highlight: 'Acompanhamento do início ao fim'
  },
  {
    id: 'trust-2',
    iconName: 'ShieldCheck',
    title: 'Avaliação Honesta & Sem Vendas Forçadas',
    description: 'Meu compromisso é com a sua saúde. Eu indico apenas o que você realmente precisa, com clareza nos prazos e valores.',
    highlight: 'Transparência total'
  },
  {
    id: 'trust-3',
    iconName: 'HeartHandshake',
    title: 'Atendimento Humanizado Sem Medo',
    description: 'Se você tem trauma ou medo de dentista, nosso protocolo de acolhimento e anestesia confortável foi feito para você.',
    highlight: 'Zero julgamento e máximo conforto'
  },
  {
    id: 'trust-4',
    iconName: 'Sparkles',
    title: 'Visão Integrada de Saúde',
    description: 'Aliamos Odontologia com suporte em Nutrição e Psicologia para cuidar não apenas do dente, mas da sua saúde como um todo.',
    highlight: 'Odonto + Nutrição + Psicologia'
  },
  {
    id: 'trust-5',
    iconName: 'Award',
    title: 'Responsável Técnico Registrado',
    description: 'Atuação com rigor técnico e ético sob CRO 12237 e registro da clínica CRO 1508. Segurança jurídica e sanitária.',
    highlight: 'CRO 12237 / CRO CLÍNICA 1508'
  },
  {
    id: 'trust-6',
    iconName: 'MapPin',
    title: 'Localização Central & Fácil Acesso',
    description: 'Localizado no coração de Canelinha, com ambiente privativo, climatizado e vagas práticas para você e sua família.',
    highlight: 'Centro de Canelinha - SC'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Mande uma mensagem no WhatsApp',
    description: 'Clique em qualquer botão desta página. Você será direcionado diretamente para conversar comigo e minha equipe.',
    badge: 'Menos de 1 minuto'
  },
  {
    number: '02',
    title: 'Escolhemos o melhor horário para você',
    description: 'Encontramos um horário flexível na sua agenda para você vir ao consultório sem correria.',
    badge: 'Agenda flexível'
  },
  {
    number: '03',
    title: 'Avaliação presencial gratuita e personalizada',
    description: 'Faço o exame visual completo do seu sorriso, tiro todas as suas dúvidas e monto seu planejamento sob medida.',
    badge: '100% Gratuita e Sem Compromisso'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'A primeira consulta é realmente 100% gratuita?',
    answer: 'Sim! A primeira consulta de avaliação é totalmente sem custo e sem qualquer compromisso. O objetivo é examinar a saúde do seu sorriso, entender seus desejos e te apresentar um plano de tratamento claro com todas as possibilidades.'
  },
  {
    question: 'Eu tenho muito medo ou vergonha de ir ao dentista. Como serei atendido?',
    answer: 'Você será acolhido com total respeito e empatia. Aqui não existe julgamento pelo tempo que você ficou sem ir ao dentista. Nosso atendimento é humanizado, calmo e com técnicas de anestesia suave para que você se sinta 100% seguro e relaxado.'
  },
  {
    question: 'O Dr. Filipe realmente atende pessoalmente?',
    answer: 'Sim! Como Responsável Técnico (CRO 12237), o Dr. Filipe K. Cândido realiza a sua avaliação e acompanha de perto todo o seu tratamento, garantindo um padrão de excelência consistente.'
  },
  {
    question: 'Onde fica localizado o consultório em Canelinha?',
    answer: 'Estamos localizados no Centro de Canelinha, na Av. Cantório Florentino da Silva, 1370 - Sala 1 (CEP 88230-000), com fácil localização e estacionamento prático.'
  },
  {
    question: 'Como faço para agendar meu horário agora?',
    answer: 'Basta clicar no botão verde do WhatsApp nesta página. Nossa equipe responderá rapidamente para reservar o melhor horário para a sua avaliação gratuita.'
  }
];

export const THEMES: Record<string, ThemeConfig> = {
  'dark-gold': {
    id: 'dark-gold',
    name: 'Modelo 1: Dark Executive & Champagne Gold',
    subtitle: 'Preto ônix de alto padrão, dourado refinado e elegância máxima para estética dental.',
    tag: 'Estilo Premium & Luxo',
    bgColor: 'bg-[#0a0d12]',
    cardBg: 'bg-[#111620]/90 backdrop-blur-md',
    cardBorder: 'border-amber-500/20',
    cardHoverBorder: 'hover:border-amber-400/50',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    textMuted: 'text-slate-400',
    accentColor: 'from-amber-400 via-amber-300 to-yellow-500',
    accentHover: 'hover:from-amber-300 hover:to-yellow-400',
    accentText: 'text-amber-300',
    accentBgSubtle: 'bg-amber-500/10',
    accentBorderSubtle: 'border-amber-500/30',
    badgeBg: 'bg-amber-500/15',
    badgeText: 'text-amber-300',
    badgeBorder: 'border-amber-400/30',
    ctaGradient: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white',
    ctaShadow: 'shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-400/40',
    sectionAltBg: 'bg-[#0f141d]',
    dividerColor: 'border-slate-800',
    heroOverlay: 'from-[#0a0d12] via-[#0a0d12]/80 to-transparent',
  },
  'clean-emerald': {
    id: 'clean-emerald',
    name: 'Modelo 2: Pure Clean Medical & Emerald',
    subtitle: 'Visual médico contemporâneo, fundo claro tecnológico, verde esmeralda e máxima pureza.',
    tag: 'Clínico, Leve & Moderno',
    bgColor: 'bg-[#f4f7f6]',
    cardBg: 'bg-white/95 shadow-xl shadow-emerald-950/5',
    cardBorder: 'border-emerald-100',
    cardHoverBorder: 'hover:border-emerald-400',
    textPrimary: 'text-slate-900',
    textSecondary: 'text-slate-700',
    textMuted: 'text-slate-500',
    accentColor: 'from-emerald-600 via-teal-600 to-emerald-700',
    accentHover: 'hover:from-emerald-500 hover:to-teal-600',
    accentText: 'text-emerald-700 font-semibold',
    accentBgSubtle: 'bg-emerald-50',
    accentBorderSubtle: 'border-emerald-200',
    badgeBg: 'bg-emerald-100/80',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-300',
    ctaGradient: 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white',
    ctaShadow: 'shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-500/30',
    sectionAltBg: 'bg-[#eaf0ee]',
    dividerColor: 'border-emerald-100',
    heroOverlay: 'from-[#f4f7f6] via-[#f4f7f6]/80 to-transparent',
  },
  'warm-sand': {
    id: 'warm-sand',
    name: 'Modelo 3: Warm Sand & Bronze Humanizado',
    subtitle: 'Tons acolhedores de areia nobre, bronze suave e atmosfera acolhedora sem medo de dentista.',
    tag: 'Acolhimento & Humanização',
    bgColor: 'bg-[#181412]',
    cardBg: 'bg-[#231d19]/90 backdrop-blur-md',
    cardBorder: 'border-orange-500/20',
    cardHoverBorder: 'hover:border-orange-400/50',
    textPrimary: 'text-amber-50',
    textSecondary: 'text-orange-100/80',
    textMuted: 'text-orange-200/60',
    accentColor: 'from-orange-400 via-amber-400 to-amber-600',
    accentHover: 'hover:from-orange-300 hover:to-amber-500',
    accentText: 'text-orange-300',
    accentBgSubtle: 'bg-orange-500/10',
    accentBorderSubtle: 'border-orange-500/30',
    badgeBg: 'bg-orange-500/15',
    badgeText: 'text-orange-300',
    badgeBorder: 'border-orange-400/30',
    ctaGradient: 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white',
    ctaShadow: 'shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-500/40',
    sectionAltBg: 'bg-[#1d1714]',
    dividerColor: 'border-stone-800',
    heroOverlay: 'from-[#181412] via-[#181412]/80 to-transparent',
  },
  'royal-navy': {
    id: 'royal-navy',
    name: 'Modelo 4: Royal Navy & Sapphire Authority',
    subtitle: 'Azul marinho profundo, safira cirúrgico e máxima solidez e autoridade odontológica.',
    tag: 'Máxima Autoridade & Confiança',
    bgColor: 'bg-[#09101d]',
    cardBg: 'bg-[#0f1b30]/90 backdrop-blur-md',
    cardBorder: 'border-blue-500/20',
    cardHoverBorder: 'hover:border-cyan-400/50',
    textPrimary: 'text-white',
    textSecondary: 'text-blue-100/80',
    textMuted: 'text-blue-200/60',
    accentColor: 'from-cyan-400 via-blue-400 to-indigo-500',
    accentHover: 'hover:from-cyan-300 hover:to-blue-400',
    accentText: 'text-cyan-300',
    accentBgSubtle: 'bg-blue-500/10',
    accentBorderSubtle: 'border-blue-500/30',
    badgeBg: 'bg-blue-500/15',
    badgeText: 'text-cyan-300',
    badgeBorder: 'border-cyan-400/30',
    ctaGradient: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white',
    ctaShadow: 'shadow-lg shadow-blue-950/80 ring-2 ring-cyan-400/40',
    sectionAltBg: 'bg-[#0c1628]',
    dividerColor: 'border-blue-950',
    heroOverlay: 'from-[#09101d] via-[#09101d]/80 to-transparent',
  }
};
