import React from 'react';
import { MARKET_TRENDS } from '../constants';
import { TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

const CompetitorAnalysis: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">East Africa Market Pulse</h2>
        <p className="text-slate-600">Tailored insights for the Nairobi agri-processing landscape.</p>
      </div>

      {/* Warning / Risk Mitigation Section (Requested) */}
      <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-red-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-900 mb-2">Risk Mitigation: "The Warning"</h3>
            <p className="text-sm text-red-800 mb-4">
              Addressing potential risks in the Kenyan market regarding food safety and small biz trust.
            </p>
            <ul className="list-disc list-inside text-sm text-red-800 space-y-1">
              <li><strong>KEBS Compliance:</strong> Nairobi consumers are skeptical. Even if you are small, show your hygiene standards constantly.</li>
              <li><strong>Crisis Plan:</strong> If a glass jar breaks during delivery (common with boda bodas), have a "No Questions Asked" replacement policy. It builds immense trust.</li>
              <li><strong>Feedback Loop:</strong> Use IG Polls weekly. "Did your order arrive safely?" Transparency wins.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Trends Grid */}
      <section className="grid md:grid-cols-2 gap-6">
        {MARKET_TRENDS.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-green-600" size={20} />
              <h4 className="font-bold text-slate-800">{item.trend}</h4>
            </div>
            <p className="text-slate-600 text-sm mb-4 border-b border-slate-100 pb-4">
              {item.description}
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Kenyan Context</p>
                <p className="text-sm text-slate-800">{item.kenyanContext}</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg flex gap-2 items-start">
                <Lightbulb size={16} className="text-green-700 mt-0.5 shrink-0" />
                <p className="text-xs text-green-900 font-medium">{item.actionItem}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Competitor Strategy */}
      <section className="bg-slate-900 text-white rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-4">Competitor Landscape: How to Win</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-green-400 mb-2">The "Supermarket" Brands</h4>
            <p className="text-sm text-slate-300">
              <strong>Weakness:</strong> Impersonal, packed with preservatives, plastic packaging.
            </p>
            <p className="text-sm text-white mt-2">
              <strong>Your Edge:</strong> Personal story, "Clean Label", Glass jars.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-2">Other Small "IG Sellers"</h4>
            <p className="text-sm text-slate-300">
              <strong>Weakness:</strong> Inconsistent posting, poor photography, lack of "Business" legitimacy (no pickup spot).
            </p>
            <p className="text-sm text-white mt-2">
              <strong>Your Edge:</strong> The "Biashara Spot" (trust), Consistent Schedule, Professional "Impact" focus.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-2">The "Imported" Goods</h4>
            <p className="text-sm text-slate-300">
              <strong>Weakness:</strong> Expensive, high carbon footprint.
            </p>
            <p className="text-sm text-white mt-2">
              <strong>Your Edge:</strong> #BuyKenyaBuildKenya pride. Freshness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompetitorAnalysis;