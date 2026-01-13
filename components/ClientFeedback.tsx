import React, { useState, useEffect } from 'react';
import { CLIENT_FEEDBACKS } from '../constants';
import { X, ZoomIn } from 'lucide-react';

export const ClientFeedback: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Duplicar para ter conteúdo suficiente para scroll contínuo visual
  const displayFeedbacks = [...CLIENT_FEEDBACKS, ...CLIENT_FEEDBACKS];

  // Ajustar itens por página baseado na tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(4);
      else if (window.innerWidth >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    handleResize(); // Inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Se estiver no final do conjunto original, volta pro início
        const maxIndex = displayFeedbacks.length - itemsPerPage;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerPage, displayFeedbacks.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            O que nossos <span className="text-cyan-500">clientes</span> dizem
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Veja os feedbacks reais de quem já atualizou seu EA FC com sucesso
          </p>
        </div>

        {/* Carrossel Unificado */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden py-4 -mx-4 px-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {displayFeedbacks.map((feedback, index) => (
                <div
                  key={`${feedback.id}-${index}`}
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 cursor-pointer group h-full"
                    onClick={() => setSelectedImage(feedback.image)}
                  >
                    <div className="relative aspect-[9/16] bg-slate-100">
                      <img
                        src={feedback.image}
                        alt={`Feedback ${feedback.id}`}
                        className="w-full h-full object-fill bg-center"
                        loading="lazy"
                      />
                      {/* Ícone Zoom */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-10 h-10 drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots de Navegação */}
          <div className="flex justify-center gap-2 mt-8">
            {CLIENT_FEEDBACKS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === (currentIndex % CLIENT_FEEDBACKS.length)
                    ? 'bg-blue-600 w-6'
                    : 'bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Passando automaticamente
          </p>
        </div>

        {/* Modal de Visualização (Lightbox) */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Feedback ampliado"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};
