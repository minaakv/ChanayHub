import { LucideIcon } from 'lucide-react';

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  STRATEGY = 'STRATEGY',
  CALENDAR = 'CALENDAR',
  RESOURCES = 'RESOURCES',
  COMPETITORS = 'COMPETITORS'
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: 'setup' | 'content' | 'outreach';
}

export interface Pillar {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  examples: string[];
  color: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  description: string;
  category: 'Government' | 'Marketing' | 'Funding' | 'Community';
}

export interface MarketTrend {
  trend: string;
  description: string;
  kenyanContext: string;
  actionItem: string;
}