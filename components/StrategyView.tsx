import React from 'react';
import { CONTENT_PILLARS } from '../constants';
import { Camera, MapPin, BadgeCheck, Sticker, Megaphone } from 'lucide-react';

const StrategyView: React.FC = () => {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      
      {/* Intro */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Brand Strategy Framework</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          The goal: Establish a professional presence so when you go viral, people trust you enough to buy.
          Designed for <span className="font-semibold text-green-700">Chanay Agri-processors</span>.
        </p>
      </div>

      {/* Phase 1: Setup */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 p-6 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <BadgeCheck className="text-green-600" />
            Phase 1: The Setup (Optimization)
          </h3>
        </div>
        <div className="p-6 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700 flex items-center gap-2">
              <Camera size={18} /> Instagram
            </h4>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-600">
              <p className="font-medium text-slate-900 mb-2">Bio Template:</p>
              <p>🍃 No Preservatives | ♻️ Glass Packaging Available</p>
              <p>📍 Pickup: Biashara Spot</p>
              <p className="text-xs text-slate-400 mt-2 italic">Why: Clear value prop + location trust.</p>
            </div>
          </div>
          <div className="space-y-4">
             <h4 className="font-semibold text-slate-700 flex items-center gap-2">
              <Megaphone size={18} /> LinkedIn (Investor Focus)
            </h4>
             <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-600">
              <p className="font-medium text-slate-900 mb-2">Bio Focus:</p>
              <p>"Agro-processing enterprise focused on sustainability and local value addition. Seeking impact partners."</p>
              <p className="text-xs text-slate-400 mt-2 italic">Why: Positions you for grants like Hustler Fund/Ma Fund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Pillars */}
      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-6">Phase 2: Content Pillars</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {CONTENT_PILLARS.map((pillar) => (
            <div key={pillar.id} className={`${pillar.color} bg-opacity-30 rounded-xl p-6 border border-transparent hover:border-slate-200 transition-all`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-white/50 backdrop-blur-sm`}>
                  <pillar.icon size={24} />
                </div>
                <h4 className="font-bold text-lg">{pillar.title}</h4>
              </div>
              <p className="text-sm opacity-90 mb-4 font-medium">{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.examples.map((ex, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Phase 4: Growth */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
        <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <Sticker className="text-green-600" />
          Phase 3 & 4: Growth Strategy
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-green-800 mb-2">Micro-Influencers</h5>
            <p className="text-sm text-slate-600">
              Target Nairobi food bloggers with 2k-10k followers. Don't go for celebs. Send them a free glass jar in exchange for a genuine recipe video.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-green-800 mb-2">The "Sticker" Charm</h5>
            <p className="text-sm text-slate-600">
              You mentioned "Affordable Stickers". Own it. Show the process of manual labeling. Authenticity sells. It shows you are a growing Kenyan business.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-green-800 mb-2">Investor Bait</h5>
            <p className="text-sm text-slate-600">
              On LinkedIn, don't just sell sauce. Sell your "Process", "Challenges", and "Wins". Tag funds to show you are professional and active.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StrategyView;