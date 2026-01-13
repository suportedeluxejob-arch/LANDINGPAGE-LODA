import React from 'react';
import { TEAMS_IMAGE_URL } from '../constants';
import { FolderOpen } from 'lucide-react';

export const TeamShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-full mb-6 border border-blue-500/30">
          <FolderOpen className="w-5 h-5 text-blue-400 mr-2" />
          <span className="text-blue-200 font-medium">Patch já exclusivo da WG</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-8">
          Todos os Grandes Clubes Brasileiros
        </h2>

        <div className="max-w-4xl mx-auto bg-slate-800/50 p-2 rounded-2xl border border-slate-700">
          {/* Reference Image 2 (Folders/Logos) */}
          <img
            src={TEAMS_IMAGE_URL}
            alt="Lista de Times Atualizados"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {['Flamengo', 'Palmeiras', 'São Paulo', 'Corinthians', 'Fluminense', 'Botafogo', 'Grêmio', 'Inter'].map((team) => (
            <div key={team} className="p-3 bg-white/5 rounded-lg border border-white/10 text-sm font-medium hover:bg-white/10 transition cursor-default">
              {team}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};