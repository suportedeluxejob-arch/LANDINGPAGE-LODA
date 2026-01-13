import React, { useState, useEffect } from 'react';
import { VSL_VIDEO_URL } from '../constants';

export const VslSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(84); // Começa em 84% para dar a sensação de "quase acabando"

  // Extrair ID do vídeo para pegar a thumbnail
  // Formato esperado: https://www.youtube.com/embed/ZWNlAOrcqoY...
  const getVideoId = (url: string) => {
    try {
      if (url.includes('/embed/')) {
        return url.split('/embed/')[1].split('?')[0];
      }
      return 'ZWNlAOrcqoY'; // Fallback ID se der erro
    } catch (e) {
      return 'ZWNlAOrcqoY';
    }
  };

  const videoId = getVideoId(VSL_VIDEO_URL);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Simulação de progresso inteligente
  useEffect(() => {
    if (!isPlaying) return;

    // A barra avança lentamente do 84% até 98%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        // Incremento aleatório pequeno para parecer natural
        return prev + (Math.random() * 0.1);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Veja como fica o jogo <span className="text-cyan-500">após a atualização</span>
          </h2>
          <p className="text-slate-500 mt-2">Assista ao vídeo abaixo e veja a qualidade da nossa atualização</p>
        </div>

        {/* Video Wrapper */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group">

          {!isPlaying ? (
            /* CAPA PERSONALIZADA (Thumbnail) - Esconde o YouTube completamente antes do play */
            <div
              className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center bg-black"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={thumbnailUrl}
                alt="Clique para assistir"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
              />
              {/* Botão Play Personalizado */}
              <div className="absolute z-30">
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.6)] animate-pulse">
                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute text-white font-bold mt-28 text-lg shadow-black drop-shadow-lg uppercase tracking-wider">
                    Clique para assistir
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* IFRAME DO YOUTUBE (Só carrega ao clicar) */
            <>
              <iframe
                src={`${VSL_VIDEO_URL}&autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1`}
                title="VSL"
                className="w-full h-full border-0 pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* BLOCKERS - Camadas invisíveis anti-clique (Retenção) */}

              {/* Topo (Bloqueia Título e Compartilhar) */}
              <div className="absolute top-0 left-0 w-full h-20 bg-transparent z-40 pointer-events-auto cursor-default"></div>

              {/* Canto Inferior Direito (Bloqueia Logo Youtube) */}
              <div className="absolute bottom-16 right-0 w-40 h-20 bg-transparent z-40 pointer-events-auto cursor-default"></div>

              {/* BARRA DE RETENÇÃO FAKE (Simulação) */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pb-3 px-4 z-50 pointer-events-none">

                {/* Barra de Progresso Animada */}
                <div className="w-full h-2 bg-white/20 rounded-full mb-3 overflow-hidden backdrop-blur-sm">
                  <div
                    className="h-full bg-red-600 rounded-full relative transition-all duration-1000 ease-linear"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)] scale-110"></div>
                  </div>
                </div>

                {/* Controles Fakes */}
                <div className="flex items-center justify-between text-white font-medium">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      {/* Ícone Pause Fake */}
                      <div className="flex gap-1.5">
                        <div className="w-1.5 h-4 bg-white rounded-sm"></div>
                        <div className="w-1.5 h-4 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm gap-1 font-mono text-slate-200">
                      <span>14:32</span>
                      <span className="opacity-50">/</span>
                      <span className="opacity-50">15:45</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-bold text-red-400">AO VIVO</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Info Text */}
        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Mais de 840 pessoas assistindo agora
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};