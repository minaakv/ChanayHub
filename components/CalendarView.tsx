import React from 'react';
import { WEEKLY_SCHEDULE } from '../constants';
import { CalendarCheck, ChevronRight } from 'lucide-react';

const CalendarView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Weekly Routine</h2>
          <p className="text-slate-500">A rotating schedule to manage consistency without burnout.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100 transition">
          <CalendarCheck size={18} /> Sync to Calendar
        </button>
      </div>

      <div className="grid gap-4">
        {WEEKLY_SCHEDULE.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center gap-6 group hover:border-green-200 transition-all">
            
            {/* Day Indicator */}
            <div className="flex items-center gap-4 md:w-48">
              <div className={`p-3 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors ${item.color}`}>
                <item.icon size={24} />
              </div>
              <div>
                <span className="block text-sm font-bold uppercase tracking-wider text-slate-400">{item.day}</span>
                <span className="font-bold text-slate-800">{item.theme}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 space-y-2 md:border-l md:border-slate-100 md:pl-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="bg-slate-100 px-2 py-0.5 rounded text-xs text-slate-500">{item.platform}</span>
              </div>
              <p className="text-slate-600">{item.action}</p>
            </div>

            {/* Action Arrow */}
            <div className="hidden md:block text-slate-300 group-hover:text-green-500 transition-colors">
              <ChevronRight size={24} />
            </div>
            
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mt-8">
        <h4 className="font-bold text-amber-900 text-sm mb-1">💡 Pro Tip for Kenya:</h4>
        <p className="text-amber-800 text-sm">
          Friday afternoons (2 PM - 5 PM) are peak times for entertainment content in Nairobi as people start checking out for the weekend. Post your fun TikToks then!
        </p>
      </div>
    </div>
  );
};

export default CalendarView;