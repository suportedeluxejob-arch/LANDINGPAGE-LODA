// ==========================================================================
// 🌐 CONFIGURAÇÕES GERAIS E BRANDING
// ==========================================================================

// Logo Principal - Link da imagem
export const LOGO_URL = "https://iili.io/f8WlKIj.png";

// WhatsApp - Link de Suporte Direto
export const WHATSAPP_SUPPORT_LINK = "https://wa.me/5521969839028";

// ==========================================================================
// 📺 CONTEÚDO DA PÁGINA PRINCIPAL (HERO / VSL)
// ==========================================================================

// Vídeo VSL Principal (YouTube Embed)
export const VSL_VIDEO_URL = "https://www.youtube.com/embed/S0YS75jvgXE";

// Imagens do Carrossel (Lado direito da Hero)
export const HERO_CAROUSEL_IMAGES = [
  "https://iili.io/fSFt2zG.jpg",
  "https://iili.io/fSFtJbs.jpg",
  "https://iili.io/fSFtHen.jpg",
  "https://iili.io/fSFt95X.jpg",
  "https://iili.io/fSFZyJt.jpg",
  "https://iili.io/fSFZmgI.md.jpg"
];

// Feedbacks de Clientes (Imagens de Prova Social)
export const CLIENT_FEEDBACKS = [
  { id: 1, image: "https://iili.io/fvy0kOB.md.jpg" },
  { id: 2, image: "https://iili.io/fvy0vDP.md.jpg" },
  { id: 3, image: "https://iili.io/fvy0UWF.md.jpg" },
  { id: 4, image: "https://iili.io/fvy0Sx1.md.jpg" },
];

// Outras imagens de suporte
export const HERO_IMAGE_URL = HERO_CAROUSEL_IMAGES[0];
export const GAME_COVERS_URL = "https://iili.io/fvtv041.png";
export const TEAMS_IMAGE_URL = "https://iili.io/fvpUFQs.md.png";
export const PLAYERS_IMAGE_URL = "https://iili.io/fvtdt5u.md.png";

// ==========================================================================
// 💳 LINKS DE CHECKOUT - VENDAS PRINCIPAIS
// ==========================================================================

// Checkout Principal EA FC 26
export const CHECKOUT_LINK_EAFC26 = "https://go.invictuspay.app.br/2vrxvz38tq";

// Checkout Principal EA FC 25
export const CHECKOUT_LINK_EAFC25 = "https://go.invictuspay.app.br/s0h0uifvmd";

// Alias genérico para compatibilidade
export const CHECKOUT_LINK = CHECKOUT_LINK_EAFC26;

// ==========================================================================
// 🚀 CONFIGURAÇÃO DE UPSELL (OFERTA PÓS-COMPRA)
// ==========================================================================

// Link do Checkout de UPSELL (Copa Mundial 2026)
export const UPSELL_LINK = "https://go.invictuspay.app.br/jbx98ydahm";

// Imagem do Produto de Upsell
export const UPSELL_IMAGE_URL = "/copa2026.jpg";

// Link para onde o cliente vai se RECUSAR o Upsell (Vai para o Downsell Interno)
export const REJECTION_LINK = "/ultimachance";

// --- DOWNSELL (Última Chance) ---
export const DOWNSELL_CHECKOUT_LINK = "https://go.invictuspay.app.br/iozzl36tvn";
export const DOWNSELL_PRICE = "R$ 19,90";

// Se ele recusar o Downsell (fim da linha)
export const DOWNSELL_REJECTION_LINK = "/acesso-liberado"; // Página de Obrigado Simplificada

// ==========================================================================
// 💰 CONFIGURAÇÃO DE BACK-REDIRECT (PREÇOS PROMOCIONAIS DE SAÍDA)
// ==========================================================================

// --- BACK-REDIRECT FC 26 ---
export const BACK_REDIRECT_FC26_PRICE = "R$ 49,90";
export const BACK_REDIRECT_FC26_LINK = "https://go.invictuspay.app.br/qyipvkefof";
export const BACK_REDIRECT_FC26_IMAGE = "/backredirect_fc26.jpg";

// --- BACK-REDIRECT FC 25 ---
export const BACK_REDIRECT_FC25_PRICE = "R$ 49,90";
export const BACK_REDIRECT_FC25_LINK = "https://go.invictuspay.app.br/qyipvkefof";
export const BACK_REDIRECT_FC25_IMAGE = "/backredirect_fc25.jpg";

// Copy Impactante para os Back-Redirects
export const BACK_REDIRECT_TITLE = "ESPERE! NÃO PERCA O PACOTE DEFINITIVO.";
export const BACK_REDIRECT_SUBTITLE = "O conteúdo global mais completo reunido em uma só licença. A oportunidade final.";
export const BACK_REDIRECT_URGENCY = "ESTA OFERTA EXPIRA EM:";

// ==========================================================================
// 🎮 DADOS DE VERSÕES DO JOGO (PREÇOS E LABELS)
// ==========================================================================

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
        checkoutLink: CHECKOUT_LINK_EAFC26,
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 49,90',
        discount: '-50%',
        checkoutLink: CHECKOUT_LINK_EAFC25,
      },
    ],
  },
  {
    id: 'PC',
    name: 'Computador (PC / Notebook)',
    image: 'https://iili.io/fvbMDlf.md.png',
    versions: [
      {
        eaVersion: 'EA FC 26',
        priceOld: 'R$ 119,90',
        priceNew: 'R$ 59,90',
        discount: '-50%',
        checkoutLink: CHECKOUT_LINK_EAFC26,
      },
      {
        eaVersion: 'EA FC 25',
        priceOld: 'R$ 99,90',
        priceNew: 'R$ 49,90',
        discount: '-50%',
        checkoutLink: CHECKOUT_LINK_EAFC25,
      },
    ],
  },
];

// Fallbacks de preço
export const PRODUCT_PRICE_OLD = GAME_VERSIONS[0].versions[0].priceOld;
export const PRODUCT_PRICE_NEW = GAME_VERSIONS[0].versions[0].priceNew;