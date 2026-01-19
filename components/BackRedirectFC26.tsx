import React, { useState, useEffect } from 'react';
import { Zap, Clock, ShieldCheck, ChevronRight, CheckCircle2, Star, DownloadCloud, Lock } from 'lucide-react';
import { LOGO_URL, BACK_REDIRECT_FC26_PRICE, BACK_REDIRECT_FC26_LINK, BACK_REDIRECT_TITLE, BACK_REDIRECT_SUBTITLE, BACK_REDIRECT_FC26_IMAGE } from '../constants';

const BackRedirectFC26: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes (05:00)

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const features = [
        "Todos os Times do Brasileirão (Série A & B)",
        "Contratações e Elencos 100% Atualizados",
        "Ligas Europeias (La Liga)",
        "Novos Estádios e Faces Realistas",
        "Kits e Uniformes Temporada 2026",
        "Suporte e Atualizações Automáticas"
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-600 selection:text-white">
            {/* Dynamic Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-900/20 via-blue-900/5 to-transparent"></div>
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px]"></div>
            </div>

            <nav className="relative z-20 py-6 border-b border-white/5 backdrop-blur-md sticky top-0">
                <div className="container mx-auto px-4 flex flex-col items-center gap-4">
                    <img src={LOGO_URL} alt="Logo" className="h-8 md:h-10 brightness-200" />
                    <div className="flex items-center gap-2 bg-red-600/10 border border-red-500/20 px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] md:text-xs font-black font-mono text-red-500 tabular-nums uppercase">OFERTA EXPIRA EM: {formatTime(timeLeft)}</span>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 container mx-auto px-4 py-10 lg:py-16">
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <Star className="w-3 h-3 fill-current" /> Condição Exclusiva de Desistência
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
                            {BACK_REDIRECT_TITLE}
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            {BACK_REDIRECT_SUBTITLE}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-start">

                        {/* Image Column - Significantly Larger */}
                        <div className="lg:col-span-7 group">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-900">
                                    <img
                                        src={BACK_REDIRECT_FC26_IMAGE}
                                        alt="Pacote Definitivo EA FC 26"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Pricing and Action Column */}
                        <div className="lg:col-span-5 sticky top-28">
                            <div className="bg-slate-900/80 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl shadow-2xl">

                                <div className="mb-8">
                                    <span className="text-slate-500 text-xs font-black uppercase tracking-widest block mb-1">PRODUTO SELECIONADO</span>
                                    <h3 className="text-2xl font-black text-white">Patch EA FC 26: Pacote Global</h3>
                                </div>

                                {/* Price Display */}
                                <div className="mb-8 p-6 bg-blue-600/5 rounded-2xl border border-blue-500/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-slate-500 line-through text-sm font-bold">R$ 119,90</span>
                                        <span className="bg-green-600/20 text-green-500 text-[10px] font-black px-2 py-1 rounded-md">ECONOMIA DE 65%</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black text-white">{BACK_REDIRECT_FC26_PRICE}</span>
                                    </div>
                                    <p className="text-blue-400 text-xs font-bold mt-2 uppercase flex items-center gap-2">
                                        <DownloadCloud className="w-4 h-4" /> Acesso Imediato após aprovação
                                    </p>
                                </div>

                                {/* Course-style Deliverables */}
                                <div className="mb-8">
                                    <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <DownloadCloud className="w-4 h-4 text-blue-400" /> Conteúdo do Pacote
                                    </h3>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                                        {/* Module Header */}
                                        <div className="bg-blue-600/10 p-4 border-b border-white/5 flex items-center justify-between">
                                            <span className="text-blue-400 font-bold text-xs uppercase tracking-tighter">Módulo: EA FC 26 Definitivo</span>
                                            <ChevronRight className="w-4 h-4 text-blue-400 rotate-90" />
                                        </div>

                                        {/* Lessons/Files */}
                                        <div className="divide-y divide-white/5">
                                            <div className="p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                                                        <DownloadCloud className="w-4 h-4 text-blue-400" />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-300">Instalador Automático + Patch (Exclusivo)</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-mono text-slate-500">2.4 GB</span>
                                                    <Lock className="w-3 h-3 text-slate-600" />
                                                </div>
                                            </div>

                                            <div className="p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center">
                                                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-red-500 border-b-[5px] border-b-transparent ml-1"></div>
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-300">Tutorial de Instalação e Ativação</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-mono text-slate-500">03:45</span>
                                                    <Lock className="w-3 h-3 text-slate-600" />
                                                </div>
                                            </div>

                                            <div className="p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-300">Times Brasileiros (Séries A & B) Atualizados</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-mono text-slate-500">Arquivo</span>
                                                    <Lock className="w-3 h-3 text-slate-600" />
                                                </div>
                                            </div>

                                            <div className="p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-amber-600/20 flex items-center justify-center">
                                                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-300">Liga Europeia (La Liga) Atualizada</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-mono text-slate-500">Arquivo</span>
                                                    <Lock className="w-3 h-3 text-slate-600" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Immediate Access Footer */}
                                        <div className="bg-black/20 p-3 text-center border-t border-white/5">
                                            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Acesso Imediato Liberado após Confirmação</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={BACK_REDIRECT_FC26_LINK}
                                    className="group relative flex items-center justify-center w-full bg-white text-slate-950 font-black text-lg md:text-2xl py-5 md:py-6 px-4 rounded-2xl transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98] overflow-hidden text-center"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 leading-tight">
                                        GARANTIR ACESSO TOTAL <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 flex-shrink-0" />
                                    </span>
                                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-slate-200"></div>
                                </a>

                                <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold">Compra 100% Protegida</h4>
                                            <p className="text-xs text-slate-500 font-medium">Gateway de pagamento criptografada.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust badges footer */}
                            <div className="mt-8 flex items-center justify-center gap-6 opacity-30 grayscale">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Visa</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mastercard</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Pix</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">PayPal</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <footer className="relative z-10 py-12 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em] max-w-2xl mx-auto">
                        Ao sair desta página, esta oferta única e exclusiva baseada no seu interesse atual será revogada por tempo indeterminado.
                    </p>
                </div>
            </footer>

            <style dangerouslySetInnerHTML={{
                __html: `
        body { background-color: #020617; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}} />
        </div>
    );
};

export default BackRedirectFC26;
