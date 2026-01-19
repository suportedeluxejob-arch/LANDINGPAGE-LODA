import React, { useState, useEffect } from 'react';
import { Shield, Zap, TrendingUp, Clock, AlertTriangle } from 'lucide-react';
import { BACK_REDIRECT_TITLE, BACK_REDIRECT_SUBTITLE, BACK_REDIRECT_URGENCY, LOGO_URL } from '../constants';

interface BackRedirectPageProps {
    productName: string;
    price: string;
    checkoutLink: string;
}

export const BackRedirectPage: React.FC<BackRedirectPageProps> = ({ productName, price, checkoutLink }) => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-sans selection:bg-yellow-500 selection:text-black">
            {/* Background patterns */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>

            <div className="max-w-2xl w-full bg-zinc-900/80 border-2 border-yellow-600/50 rounded-2xl p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(202,138,4,0.2)]">
                {/* Urgent Header */}
                <div className="absolute top-0 left-0 w-full bg-yellow-600 py-1 text-center font-black text-black text-sm tracking-widest uppercase animate-pulse">
                    ⚠️ OFERTA ÚNICA DETECTADA ⚠️
                </div>

                <div className="mt-6 mb-8 flex justify-center">
                    <img src={LOGO_URL} alt="Logo" className="h-12 w-auto grayscale brightness-200" />
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-center mb-6 leading-tight tracking-tighter">
                    {BACK_REDIRECT_TITLE}
                </h1>

                <p className="text-xl text-zinc-400 text-center mb-8 font-medium">
                    {BACK_REDIRECT_SUBTITLE}
                </p>

                {/* Product Card */}
                <div className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-xl mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Produto Selecionado</span>
                        <span className="bg-yellow-600/20 text-yellow-500 text-[10px] font-black px-2 py-1 rounded-full uppercase border border-yellow-600/30">Privado</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Patch {productName} - Acesso VIP Total</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-zinc-500 line-through text-lg">R$ 119,90</span>
                        <span className="text-4xl font-black text-yellow-500">{price}</span>
                    </div>
                </div>

                {/* Scarcity */}
                <div className="flex flex-col items-center mb-8">
                    <span className="text-sm text-zinc-500 font-bold mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-500" /> {BACK_REDIRECT_URGENCY}
                    </span>
                    <div className="text-5xl font-mono font-black text-red-600 tabular-nums">
                        {formatTime(timeLeft)}
                    </div>
                </div>

                {/* CTA Button */}
                <a
                    href={checkoutLink}
                    className="group relative block w-full bg-yellow-600 hover:bg-yellow-500 text-black font-black text-2xl py-6 rounded-xl text-center transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(202,138,4,0.4)] overflow-hidden"
                >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        SIM! QUERO APROVEITAR AGORA <Zap className="w-6 h-6 fill-current" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </a>

                <p className="mt-6 text-center text-zinc-500 text-xs font-medium flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" /> Pagamento 100% Seguro & Acesso Imediato
                </p>

                {/* Features Row */}
                <div className="mt-12 grid grid-cols-2 gap-4 border-t border-zinc-800 pt-8">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-yellow-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Alta Lucratividade</h4>
                            <p className="text-xs text-zinc-500">Aproveite o preço de custo hoje.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Vagas Limitadas</h4>
                            <p className="text-xs text-zinc-500">Somente para redirecionamentos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
        </div>
    );
};
