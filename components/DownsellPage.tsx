import React, { useEffect } from 'react';
import { Check, ShieldCheck, Trophy, ArrowRight, AlertTriangle } from 'lucide-react';
import { LOGO_URL, DOWNSELL_CHECKOUT_LINK, DOWNSELL_PRICE, UPSELL_IMAGE_URL, DOWNSELL_REJECTION_LINK } from '../constants';

export function DownsellPage() {
    useEffect(() => {
        if ((window as any).fbq) {
            (window as any).fbq('track', 'ViewContent', { content_name: 'Downsell Copa 2026', value: 19.90, currency: 'BRL' });
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-red-500/30">
            {/* Header Simplificado */}
            <header className="py-4 flex justify-center border-b border-white/5 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-2 opacity-50 grayscale">
                    <img src={LOGO_URL} alt="Logo" className="h-6 w-6 object-contain" />
                    <span className="font-bold text-sm uppercase tracking-widest">WG PATCH</span>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-2xl">

                {/* ALERTA DE ÚLTIMA CHANCE */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 mb-8 text-center animate-in fade-in slide-in-from-top duration-700">
                    <div className="flex items-center justify-center gap-2 text-red-500 font-black uppercase tracking-widest text-xs mb-2">
                        <AlertTriangle size={16} />
                        Espere! Não vá embora ainda
                    </div>
                    <p className="text-slate-200 text-sm font-medium">
                        Identificamos que você quase levou o pacote da Copa...
                    </p>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight uppercase text-white">
                        VAMOS FAZER UM <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            TRATO FINAL?
                        </span>
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                        Não quero que você perca a experiência completa do Mundial por causa do preço. <br />
                        Por isso, vou liberar meu <b>desconto de diretoria</b> pra você agora.
                    </p>
                </div>

                {/* Card da Oferta Irrecusável */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">

                    <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        Menor Preço Possível
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                        <img
                            src={UPSELL_IMAGE_URL}
                            alt="Copa 2026"
                            className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="text-center md:text-left flex-1">
                            <h3 className="text-lg font-bold text-white mb-1">Edição Copa do Mundo 2026</h3>
                            <p className="text-xs text-slate-400 mb-3">Acesso completo + Estádios + Elencos da Seleção</p>

                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <span className="text-slate-500 line-through text-sm">De R$ 29,90</span>
                                <span className="text-3xl font-black text-green-400">{DOWNSELL_PRICE}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 bg-black/20 p-4 rounded-xl mb-6">
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <Check className="text-green-500 w-4 h-4" />
                            <span>Mesmo conteúdo da oferta anterior</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <Check className="text-green-500 w-4 h-4" />
                            <span>Acesso vitalício garantido</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <Check className="text-green-500 w-4 h-4" />
                            <span>Sem taxas extras escondidas</span>
                        </div>
                    </div>

                    <a
                        href={DOWNSELL_CHECKOUT_LINK}
                        className="w-full block bg-green-600 hover:bg-green-500 text-white font-black text-center py-4 rounded-xl text-lg uppercase tracking-wide transition-all hover:scale-[1.02] shadow-lg shadow-green-900/20"
                    >
                        Quero Levar por {DOWNSELL_PRICE}
                    </a>

                    <p className="text-center mt-3 text-[10px] text-slate-500 uppercase tracking-widest opacity-60">
                        Oferta válida apenas nesta página
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href={DOWNSELL_REJECTION_LINK}
                        className="text-slate-600 text-xs font-semibold hover:text-slate-400 transition-colors border-b border-transparent hover:border-slate-600 pb-0.5"
                    >
                        Realmente não tenho interesse, quero apenas meu jogo.
                    </a>
                </div>

            </main>
        </div>
    );
}
