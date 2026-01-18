import React, { useEffect } from 'react';
import { Check, ShieldAlert, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import { LOGO_URL, UPSELL_LINK, REJECTION_LINK, UPSELL_IMAGE_URL } from '../constants';

export function UpsellPage() {
    // Rastreamento de visualização do Upsell (opcional, para Pixel)
    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'ViewContent', { content_name: 'Upsell Ultra Realism', value: 29.90, currency: 'BRL' });
        }
        window.scrollTo(0, 0);
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
      `}</style>

            {/* Header / Logo */}
            <header className="py-6 flex justify-center border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img src={LOGO_URL} alt="Logo" className="h-10 w-10 rounded-full border border-white/20" />
                    <span className="font-black text-xl tracking-tighter uppercase">
                        WG<span className="text-cyan-400"> PATCH</span>
                    </span>
                </div>
            </header>

            <main className="container mx-auto px-4 py-10 max-w-3xl">
                {/* Atenção - Acima da dobra */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-red-500/30">
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
                    <div className="absolute top-0 right-0 p-4">
                        <span className="bg-cyan-500 text-slate-900 text-xs font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                            OFERTA ÚNICA
                        </span>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="space-y-6">
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={UPSELL_IMAGE_URL}
                                    alt="Copa do Mundo 2026 Edition"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
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
                        <a
                            href={UPSELL_LINK}
                            className="bg-green-500 hover:bg-green-600 text-white py-6 rounded-2xl text-xl font-black text-center transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 animate-pulse-soft"
                        >
                            SIM! ADICIONAR AO MEU PEDIDO POR R$ 29,90
                            <ArrowRight />
                        </a>
                    </div>
                </div>

                {/* Rejection Link */}
                <div className="text-center space-y-4">
                    <a
                        href={REJECTION_LINK}
                        className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors underline underline-offset-4"
                    >
                        Não, obrigado. Eu prefiro continuar sem o conteúdo exclusivo da Copa 2026.
                    </a>

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
