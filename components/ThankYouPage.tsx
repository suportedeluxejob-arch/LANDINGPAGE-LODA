import React, { useEffect } from 'react';
import { CheckCircle2, DownloadCloud, MessageCircle } from 'lucide-react';
import { LOGO_URL } from '../constants';

export function ThankYouPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-md w-full bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl shadow-2xl">

                <div className="mb-8 flex justify-center">
                    <img src={LOGO_URL} alt="WG Patch" className="h-8 object-contain opacity-80" />
                </div>

                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border-4 border-green-500/20 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-black mb-2 leading-tight">
                    Tudo Pronto!
                </h1>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                    Sua inscrição foi confirmada com sucesso. <br />
                    O acesso ao material será enviado para seu e-mail e WhatsApp cadastrados.
                </p>

                <div className="space-y-4">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left flex items-start gap-4">
                        <div className="bg-blue-500/20 p-2 rounded-lg shrink-0">
                            <DownloadCloud className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-slate-200">Acesso via E-mail</h3>
                            <p className="text-xs text-slate-500 mt-1">Verifique sua caixa de entrada (e spam) pelo remetente da InvictusPay/WG Patch.</p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/5521969839028?text=Ola%2C%20acabei%20de%20comprar%20o%20patch%20FC26%20e%20gostaria%20de%20confirmar%20meu%20acesso."
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-green-900/20"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chamar no Suporte
                    </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                    <p className="text-[10px] text-slate-600 font-medium uppercase tracking-widest">
                        ID DO PEDIDO: #{Math.floor(Math.random() * 90000) + 10000}
                    </p>
                </div>
            </div>
        </div>
    );
}
