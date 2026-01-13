import React, { useState } from 'react';
import { CLIENT_FEEDBACKS } from '../constants';
import { X, ZoomIn } from 'lucide-react';

export const ClientFeedback: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
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

        {/* Grid de Feedbacks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {CLIENT_FEEDBACKS.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 cursor-pointer group"
              onClick={() => setSelectedImage(feedback.image)}
            >
              <div className="relative aspect-[9/16] bg-slate-100">
                <img
                  src={feedback.image}
                  alt={`Feedback do cliente ${feedback.id}`}
                  className="w-full h-full object-fill bg-center"
                  loading="lazy"
                />

                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-10 h-10 drop-shadow-lg" />
                </div>
              </div>
            </div>
          ))}
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

        {/* Info texto abaixo */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-500 max-w-2xl mx-auto px-2">
            Estes são apenas alguns dos muitos feedbacks que recebemos diariamente de nossos clientes satisfeitos.
          </p>
        </div>
      </div>
    </section>
  );
};
