// ========================================
// 🌐 LINKS E CONFIGURAÇÕES PRINCIPAIS
// ========================================

// Logo - EDITÁVEL VIA LINK
// Substitua pela URL da sua logo preferida
export const LOGO_URL = "https://iili.io/f8WlKIj.png";

// ========================================
// 🎭 CARROSSEL DA HERO (LADO DIREITO)
// ========================================
// Adicione ou remova links de imagem aqui para o carrossel que fica ao lado dos preços.
// A primeira imagem da lista será a que aparece primeiro.
export const HERO_CAROUSEL_IMAGES = [
  "https://iili.io/fSFt2zG.jpg",
  "https://iili.io/fSFtJbs.jpg",
  "https://iili.io/fSFtHen.jpg", // <--- Recuperei este link único que você enviou antes
  "https://iili.io/fSFt95X.jpg",
  "https://iili.io/fSFZyJt.jpg",
  "https://iili.io/fSFZmgI.md.jpg"
];

// Imagem fixa (fallback se necessário)
export const HERO_IMAGE_URL = HERO_CAROUSEL_IMAGES[0];
export const GAME_COVERS_URL = "https://iili.io/fvtv041.png";
export const TEAMS_IMAGE_URL = "https://iili.io/fvpUFQs.md.png";
export const PLAYERS_IMAGE_URL = "https://iili.io/fvtdt5u.md.png";

// ========================================
// 🎥 VÍDEO VSL (EDITÁVEL VIA LINK)
// ========================================
// URL do vídeo YouTube (VSL - Video Sales Letter)
// Substitua pela URL do seu vídeo
export const VSL_VIDEO_URL = "https://www.youtube.com/embed/S0YS75jvgXE";

// ========================================
// 👥 FEEDBACKS DE CLIENTES (EDITÁVEL VIA LINKS)
// ========================================
export const CLIENT_FEEDBACKS = [
  {
    id: 1,
    image: "https://iili.io/fvy0kOB.md.jpg",
  },
  {
    id: 2,
    image: "https://iili.io/fvy0vDP.md.jpg",
  },
  {
    id: 3,
    image: "https://iili.io/fvy0UWF.md.jpg",
  },
  {
    id: 4,
    image: "https://iili.io/fvy0Sx1.md.jpg",
  },
];

// WhatsApp - Suporte e Atendimento
// Link com mensagem pré-definida para suporte
export const WHATSAPP_SUPPORT_LINK = "https://wa.me/5521969839028";

// ========================================
// 💳 LINKS DE PAGAMENTO PARA CADA VERSÃO
// ========================================
// IMPORTANTE: Cada versão de jogo tem seu próprio link de pagamento!
// 
// EA FC 26 = Link 1
// EA FC 25 = Link 2
//
// O botão "QUERO ATUALIZAR MEU EA FC HOJE" muda automaticamente
// conforme o usuário seleciona a versão (26 ou 25)

export const CHECKOUT_LINK_EAFC26 = "https://go.invictuspay.app.br/2vrxvz38tq";
export const CHECKOUT_LINK_EAFC25 = "https://go.invictuspay.app.br/s0h0uifvmd";

// ========================================
// 🚀 CONFIGURAÇÃO DE UPSELL (R$ 29,90)
// ========================================
// Imagem do Upsell (Copa do Mundo 2026)
export const UPSELL_IMAGE_URL = "/copa2026.jpg";

// Este é o link do checkout do seu produto de UPSELL (Copa 2026)
export const UPSELL_LINK = "https://go.invictuspay.app.br/jbx98ydahm";

// Este é o link para onde o cliente vai se ele RECUSAR a oferta
// Geralmente é o seu link de Thank You Page ou o link de Redirecionamento da Gateway
export const REJECTION_LINK = "";

// Padrão para compatibilidade com outros componentes (como Pricing.tsx)
export const CHECKOUT_LINK = CHECKOUT_LINK_EAFC26;

// ========================================
// 💰 CONFIGURAÇÃO DE BACK-REDIRECT (ESTRATÉGIA AGRESSIVA)
// ========================================
// Preços extremamente baixos para não perder a venda no "Back Redirect"
export const BACK_REDIRECT_FC26_PRICE = "R$ 49,90";
export const BACK_REDIRECT_FC25_PRICE = "R$ 29,90";

// Links de checkout específicos para o Back Redirect (Crie links com os preços acima na sua gateway)
export const BACK_REDIRECT_FC26_LINK = "https://go.invictuspay.app.br/back26";
export const BACK_REDIRECT_FC25_LINK = "https://go.invictuspay.app.br/back25";

// Imagem específica para o Back Redirect do FC26 (Baseada no pacote definitivo)
export const BACK_REDIRECT_FC26_IMAGE = "/backredirect_fc26.jpg";

// Copy impactante - Estilo Wall Street / Black Hat
export const BACK_REDIRECT_TITLE = "ESPERE! NÃO PERCA O PACOTE DEFINITIVO.";
export const BACK_REDIRECT_SUBTITLE = "O conteúdo global mais completo reunido em uma só licença. A oportunidade final.";
export const BACK_REDIRECT_URGENCY = "ESTA OFERTA EXPIRA EM:";

// ========================================
// 🎮 VERSÕES DISPONÍVEIS COM PREÇOS
// ========================================
export const GAME_VERSIONS = [
  {
    id: 'PS5, PS4, Xbox X|S / One',
    name: 'PS5, PS4, Xbox X|S / One',
    image: 'https://iili.io/fvbfWF4.jpg',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',
        priceNew: 'R$ 59,90',
        discount: '-50%',
        // 👇 QUANDO SELECIONAR EA FC 26, USA ESTE LINK
        checkoutLink: CHECKOUT_LINK_EAFC26,
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 49,90',
        discount: '-50%',
        // 👇 QUANDO SELECIONAR EA FC 25, USA ESTE LINK
        checkoutLink: CHECKOUT_LINK_EAFC25,
      },
    ],
  },
  {
    id: 'PS5, PS4, Xbox X|S / One',
    name: 'PS5, PS4, Xbox X|S / One',
    image: 'https://iili.io/fvbMDlf.md.png',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',
        priceNew: 'R$ 59,90',
        discount: '-50%',
        // 👇 QUANDO SELECIONAR EA FC 26, USA ESTE LINK
        checkoutLink: CHECKOUT_LINK_EAFC26,
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 49,90',
        discount: '-50%',
        // 👇 QUANDO SELECIONAR EA FC 25, USA ESTE LINK
        checkoutLink: CHECKOUT_LINK_EAFC25,
      },
    ],
  },
];

// Padrão para compatibilidade com código existente
export const PRODUCT_PRICE_OLD = GAME_VERSIONS[0].versions[0].priceOld;
export const PRODUCT_PRICE_NEW = GAME_VERSIONS[0].versions[0].priceNew;