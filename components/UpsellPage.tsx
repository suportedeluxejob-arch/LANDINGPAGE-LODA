import React, { useEffect } from 'react';
import { Check, ShieldAlert, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import { LOGO_URL, UPSELL_LINK, REJECTION_LINK, UPSELL_IMAGE_URL } from '../constants';

export function UpsellPage() {
    const [isImageOpen, setIsImageOpen] = React.useState(false);
    // Rastreamento de visualização do Upsell e Injeção do Script OneClick
    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'ViewContent', { content_name: 'Upsell Copa 2026', value: 29.90, currency: 'BRL' });
        }
        window.scrollTo(0, 0);

        // Injeção do Script InvictusPay OneClick
        const script = document.createElement('script');
        script.src = "https://app.invictuspay.app.br/js/oneclick.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Remove o script se sair da página
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500/30">
            {/* Estilo para animação de pulso */}
            <style>{`
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0); }
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s infinite ease-in-out;
        }
        
        /* Botão InvictusPay - ULTRA NEON & ALTA CONVERSÃO */
        .fornpay_btn {
            background: #22c55e;
            background: linear-gradient(180deg, #5eff82 0%, #16a34a 100%);
            -webkit-border-radius: 15px;
            -moz-border-radius: 15px;
            border-radius: 15px;
            color: #ffffff !important;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            font-size: 24px !important;
            font-weight: 900 !important;
            padding: 26px 20px;
            border: none;
            text-decoration: none;
            display: block;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 0 40px rgba(94, 255, 130, 0.5), 0 15px 35px -5px rgba(0,0,0,0.6);
            text-transform: uppercase;
            letter-spacing: 0.03em;
            position: relative;
            z-index: 10;
            text-shadow: 0 2px 10px rgba(0,0,0,0.4);
            border-top: 2px solid rgba(255,255,255,0.6); /* Brilho no topo */
        }
        
        .fornpay_btn:hover {
            transform: scale(1.04) translateY(-2px);
            filter: brightness(1.2);
            box-shadow: 0 0 60px rgba(94, 255, 130, 0.7), 0 25px 45px -10px rgba(0,0,0,0.7);
        }

        .fornpay_btn:active {
            transform: scale(0.96);
            filter: brightness(0.9);
        }

        .fornpay_downsell {
            color: #ffffff;
            font-family: 'Inter', system-ui, sans-serif;
            margin-top: 30px;
            font-size: 15px!important;
            font-weight: 500;
            text-decoration: underline;
            display: block;
            cursor: pointer;
            text-align: center;
            opacity: 0.5;
            transition: all 0.2s ease;
        }
        .fornpay_downsell:hover {
            opacity: 1;
            transform: scale(1.05);
        }
      `}</style>

            {/* Header / Logo */}
            <header className="py-6 flex justify-center border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img
                        src={LOGO_URL}
                        alt="Logo"
                        className="h-10 w-10 object-contain rounded-full border border-white/20 shadow-inner bg-black/20"
                    />
                    <span className="font-black text-xl tracking-tighter uppercase">
                        WG<span className="text-cyan-400"> PATCH</span>
                    </span>
                </div>
            </header>

            {/* Modal de Zoom da Imagem */}
            {isImageOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setIsImageOpen(false)}>
                    <img src={UPSELL_IMAGE_URL} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" />
                </div>
            )}

            <main className="container mx-auto px-4 py-10 max-w-3xl">
                {/* Atenção - Acima da dobra */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-xs font-bold mb-4 border border-red-500/30">
                        <ShieldAlert size={16} />
                        ESPERE! NÃO FECHE ESSA PÁGINA!
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight uppercase">
                        EDIÇÃO COPA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500">
                            MUNDIAL 2026
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl font-bold italic">
                        "Dispute o maior torneio com elencos atualizados das seleções nacionais e a atmosfera oficial."
                    </p>
                </div>

                {/* Oferta de Upsell */}
                <div className="bg-slate-800/50 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden mb-10">
                    {/* Badge de Oferta Posicionado Melhor */}
                    <div className="absolute top-0 right-0 z-20">
                        <div className="bg-cyan-500 text-slate-900 text-[10px] font-black px-4 py-2 rounded-bl-2xl uppercase tracking-[0.2em] shadow-lg">
                            OFERTA ÚNICA
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="space-y-6">
                            <div
                                className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl cursor-zoom-in group"
                                onClick={() => setIsImageOpen(true)}
                            >
                                <img
                                    src={UPSELL_IMAGE_URL}
                                    alt="Copa do Mundo 2026 Edition"
                                    className="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute inset-x-0 bottom-0 py-3 bg-black/60 backdrop-blur-md text-center text-[11px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    TOQUE PARA VER EM TELA CHEIA
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Trophy className="text-yellow-400" />
                                O que você recebe nesta edição:
                            </h2>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-400">
                                        <Check size={18} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-200">Elencos 100% Atualizados</p>
                                        <p className="text-sm text-slate-400">Todas as seleções com convocações reais e uniformes exclusivos.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-400">
                                        <Check size={18} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-200">Estádios e Atmosfera Oficial</p>
                                        <p className="text-sm text-slate-400">Sinta a emoção do mundial com interface, placares e estádios temáticos.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-400">
                                        <Check size={18} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-200">Troféu e Animações de Campeão</p>
                                        <p className="text-sm text-slate-400">Levante a taça mais cobiçada do mundo com cinematics inéditas.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Preço */}
                        <div className="text-center bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                            <p className="text-slate-500 line-through text-lg">De R$ 97,90</p>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-4xl md:text-5xl font-black text-green-400">R$ 29,90</span>
                                <span className="bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded">70% OFF</span>
                            </div>
                            <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest italic">
                                Apenas hoje • Pagamento único • Acesso imediato
                            </p>
                        </div>

                        {/* CTA Button */}
                        {/* Botões One-Click da InvictusPay */}
                        <div className="flex flex-col items-center gap-4 py-4">
                            <div className="w-full max-w-[400px]">
                                <a href="javascript:void(0)" data-fornpay="zucl3yk3k7" className="fornpay_btn animate-pulse-soft">
                                    SIM! EU ACEITO ESSA OFERTA
                                </a>
                                <a href="javascript:void(0)" data-downsell="null" className="fornpay_downsell">
                                    Não, obrigado. Prefiro recusar essa oferta especial.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Garantia e Segurança */}
                <div className="text-center space-y-4">

                    <div className="flex justify-center items-center gap-6 pt-10 opacity-30 grayscale">
                        <Trophy size={40} />
                        <div className="h-4 w-px bg-white/20"></div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Conteúdo 100% Seguro & Verificado</p>
                    </div>
                </div>
            </main>

            {/* Footer minimalista para o Upsell */}
            <footer className="py-10 text-center text-slate-600 text-xs border-top border-white/5">
                <p>© 2026 WG PATCH • Todos os direitos reservados</p>
            </footer>
        </div>
    );
}
