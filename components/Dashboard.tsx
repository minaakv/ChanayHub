import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, ArrowRight } from 'lucide-react';
import { Task, AppView } from '../types';

interface DashboardProps {
  changeView: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ changeView }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Update Instagram Bio with "Biashara Spot" location', completed: false, category: 'setup' },
    { id: '2', text: 'Take high-res photos of Price List', completed: false, category: 'content' },
    { id: '3', text: 'Create LinkedIn profile focusing on Impact', completed: true, category: 'setup' },
    { id: '4', text: 'Shoot 1 video of the pickup location walk-through', completed: false, category: 'content' },
    { id: '5', text: 'Identify 3 Nairobi micro-influencers', completed: false, category: 'outreach' },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const progress = Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Karibu, Chanay Team.</h2>
        <p className="text-slate-600 mt-2">Here is your immediate action plan to dominate the Kenyan agri-processing market.</p>
      </header>

      {/* Progress Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-slate-800">Setup Progress</h3>
            <span className="text-sm font-bold text-green-600">{progress}% Complete</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3">
            <div 
              className="bg-green-600 h-3 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Focus on completing the <span className="font-medium text-slate-700">Setup Phase</span> to ensure your profiles are ready for traffic.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-700 to-green-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="font-semibold text-lg mb-2">Quick Tip</h3>
          <p className="text-green-100 text-sm mb-4">
            "Authenticity sells better than perfection." Don't hide the affordable stickers. Show the hustle.
          </p>
          <button 
            onClick={() => changeView(AppView.STRATEGY)}
            className="text-xs bg-white text-green-900 px-3 py-2 rounded-md font-semibold hover:bg-green-50 transition"
          >
            View Strategy
          </button>
        </div>
      </div>

      {/* Priority Tasks */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-semibold text-lg text-slate-800">Priority Action Items</h3>
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium flex items-center gap-1">
            <AlertCircle size={12} /> This Week
          </span>
        </div>
        <div className="divide-y divide-slate-50">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              onClick={() => toggleTask(task.id)}
              className="p-4 hover:bg-slate-50 transition cursor-pointer flex items-center gap-4 group"
            >
              <button className={`transition-colors ${task.completed ? 'text-green-600' : 'text-slate-300 group-hover:text-green-500'}`}>
                {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </button>
              <span className={`flex-1 ${task.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                {task.text}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium px-2 py-1 bg-slate-100 rounded">
                {task.category}
              </span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
          <button onClick={() => changeView(AppView.CALENDAR)} className="text-sm text-green-700 font-medium hover:text-green-800 flex items-center justify-center gap-1">
            View Full Schedule <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;