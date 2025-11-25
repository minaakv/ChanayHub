import React from 'react';
import { KENYAN_RESOURCES } from '../constants';
import { ExternalLink, BookOpen, ShieldCheck, Banknote } from 'lucide-react';

const ResourcesView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Kenyan Business Resources</h2>
        <p className="text-slate-600">Curated links for growth, compliance, and funding in East Africa.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {KENYAN_RESOURCES.map((resource, idx) => {
          let Icon = BookOpen;
          if (resource.category === 'Government') Icon = ShieldCheck;
          if (resource.category === 'Funding') Icon = Banknote;

          return (
            <a 
              key={idx} 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-green-500 hover:shadow-md transition-all h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide
                  ${resource.category === 'Government' ? 'bg-slate-100 text-slate-600' : ''}
                  ${resource.category === 'Funding' ? 'bg-green-100 text-green-700' : ''}
                  ${resource.category === 'Marketing' ? 'bg-purple-100 text-purple-700' : ''}
                  ${resource.category === 'Community' ? 'bg-amber-100 text-amber-700' : ''}
                `}>
                  {resource.category}
                </span>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-green-600" />
              </div>
              
              <h3 className="font-bold text-slate-800 mb-2 group-hover:text-green-700">{resource.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-3">{resource.description}</p>
            </a>
          );
        })}
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
        <h3 className="font-bold text-blue-900 mb-3">Looking for Content Inspiration?</h3>
        <p className="text-sm text-blue-800 mb-4">
          Check out these successful Kenyan/African content styles:
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">#MadeInKenya</span>
          <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">#Biashara</span>
          <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">#KilimoBiashara</span>
          <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">#NairobiFoodies</span>
          <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">#SMEKenya</span>
        </div>
      </div>
    </div>
  );
};

export default ResourcesView;