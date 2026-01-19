import React, { useState, useEffect } from 'react';
import { AlertTriangle, Zap, Clock, ShieldAlert, ArrowRight } from 'lucide-react';
import { LOGO_URL, BACK_REDIRECT_FC25_PRICE, BACK_REDIRECT_FC25_LINK } from '../constants';

const BackRedirectFC25: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(300); // Only 5 minutes for FC25

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-[#070000] text-white flex flex-col items-center justify-center p-4 font-sans selection:bg-red-600 selection:text-white">
            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] animate-pulse"></div>
            </div>

            <main className="relative z-10 max-w-xl w-full">
                {/* Urgent Alert Header */}
                <div className="bg-red-600 text-white py-3 px-6 rounded-t-3xl text-center font-black text-sm tracking-[0.2em] flex items-center justify-center gap-3 animate-pulse">
                    <AlertTriangle className="w-5 h-5 fill-white text-red-600" /> SISTEMA DE SAÍDA BLOQUEADO <AlertTriangle className="w-5 h-5 fill-white text-red-600" />
                </div>

                <div className="bg-zinc-900 border-x-2 border-b-2 border-red-600/50 rounded-b-3xl p-8 shadow-[0_30px_60px_rgba(220,38,38,0.2)]">
                    <div className="mb-8 flex justify-center">
                        <img src={LOGO_URL} alt="Logo" className="h-8 grayscale brightness-200" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-center mb-6 leading-none italic tracking-tighter">
                        PARE TUDO! <br />
                        <span className="text-red-500 not-italic">NÃO VÁ EMBORA!</span>
                    </h1>

                    <div className="bg-red-500/10 border-l-4 border-red-600 p-6 mb-8">
                        <p className="text-white font-bold text-lg mb-2">ERRO NO PAGAMENTO?</p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Nós liberamos uma <span className="text-white underline">contingência especial</span> para você. Não queremos que você fique de fora por causa de preço. Esta é a oferta final e definitiva.
                        </p>
                    </div>

                    {/* Offer Card */}
                    <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-6 mb-8 text-center bg-zinc-800/30">
                        <h3 className="text-zinc-500 font-bold uppercase text-xs tracking-widest mb-2">Liberação Única: EA FC 25</h3>
                        <div className="flex flex-col items-center">
                            <span className="text-zinc-600 line-through font-bold">R$ 99,90</span>
                            <div className="text-6xl font-black text-red-500 flex items-start mt-1">
                                <span className="text-2xl mt-2 mr-1">R$</span> {BACK_REDIRECT_FC25_PRICE.replace('R$', '').trim()}
                            </div>
                            <div className="mt-4 inline-flex items-center gap-2 bg-red-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                                <Clock className="w-3 h-3" /> Link Expira em: {formatTime(timeLeft)}
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a
                        href={BACK_REDIRECT_FC25_LINK}
                        className="group relative block w-full bg-red-600 hover:bg-red-500 text-white font-black text-xl md:text-2xl py-6 rounded-2xl text-center transition-all duration-300 shadow-[0_0_50px_rgba(220,38,38,0.5)] transform hover:scale-[1.05] active:scale-[0.95]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            QUERO GARANTIR AGORA <ArrowRight className="w-6 h-6 animate-bounce-x" />
                        </span>
                    </a>

                    <div className="mt-8 flex flex-col items-center gap-4 text-zinc-500 font-bold text-[10px] uppercase">
                        <div className="flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-red-500" /> OFERTA VÁLIDA SOMENTE NESTA SESSÃO
                        </div>
                        <div className="w-full h-px bg-zinc-800"></div>
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Pix</span>
                            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Cartão</span>
                            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Acesso On-time</span>
                        </div>
                    </div>
                </div>
            </main>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x { animation: bounce-x 0.6s infinite; }
        body { background-color: #070000; }
      `}} />
        </div>
    );
};

export default BackRedirectFC25;
