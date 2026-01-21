import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { CHECKOUT_LINK } from '../constants';

export const ScarcityBar: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after 2 seconds to grab attention
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                } else {
                    clearInterval(interval);
                    return { minutes: 0, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-red-600 text-white shadow-lg border-t-4 border-yellow-400 animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <div className="bg-white/20 p-2 rounded-full animate-pulse">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-sm sm:text-base leading-tight uppercase tracking-tight">
                            Oferta por Tempo Limitado
                        </p>
                        <p className="text-xs sm:text-sm text-red-100 font-medium">
                            O desconto de 50% expira em: <span className="font-black bg-white text-red-600 px-1.5 rounded ml-1 tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
                        </p>
                    </div>
                </div>

                <a
                    href={CHECKOUT_LINK}
                    className="w-full sm:w-auto bg-yellow-400 text-red-900 font-extrabold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                    Garantir Meu Desconto
                    <AlertTriangle className="w-4 h-4" />
                </a>

            </div>
        </div>
    );
};
