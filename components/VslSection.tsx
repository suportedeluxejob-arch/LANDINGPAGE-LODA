import React from 'react';
import { Play } from 'lucide-react';
import { VSL_VIDEO_URL } from '../constants';

export const VslSection: React.FC = () => {
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
          <iframe
            src={`${VSL_VIDEO_URL}&controls=0&showinfo=0&iv_load_policy=3&fs=0&modestbranding=1&disablekb=1`}
            title="VSL - Demonstração da Atualização EA FC"
            className="w-full h-full border-0 pointer-events-auto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* BLOCKERS - Transparent overlays to prevent clicking YouTube links */}
          {/* Top Blocker (Title/Channel) */}
          <div className="absolute top-0 left-0 w-full h-16 bg-transparent z-10"></div>
          {/* Bottom Right Blocker (Watch on YouTube logo) */}
          <div className="absolute bottom-12 right-0 w-32 h-16 bg-transparent z-10"></div>

          {/* FAKE CONTROLS & RETENTION BAR */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 z-20 pointer-events-none">
            {/* Fake Progress Bar */}
            <div className="w-full h-1.5 bg-white/30 rounded-full mb-3 overflow-hidden">
              {/* retention strategy: bar at 85% to look like 'almost done' */}
              <div className="h-full bg-red-600 w-[85%] rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow-lg scale-125"></div>
              </div>
            </div>

            {/* Fake Control Icons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 fill-white flex items-center justify-center">
                  {/* Pause Icon representation */}
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-white rounded-sm"></div>
                    <div className="w-1 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div className="flex items-center text-xs font-medium gap-1">
                  <span>14:32</span>
                  <span className="text-white/60">/</span>
                  <span className="text-white/60">15:45</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="font-bold text-[10px] bg-red-600 px-2 py-0.5 rounded text-white animate-pulse">
                  AO VIVO
                </div>
              </div>
            </div>
          </div>

          {/* Click to Play Overlay (Optional - ensures user clicks center to start) */}
          {/* Note: We rely on default youtube click-to-play through the transparent gaps or center */}
        </div>

        {/* Info Text */}
        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Mais de 840 pessoas assistindo agora
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};