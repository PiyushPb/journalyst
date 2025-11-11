export interface StatBadge {
  value: string;
}

export interface StatProgress {
  min: number;
  max: number;
  value: number;
}

export interface StatCard {
  id: number;
  title: string;
  description: string;
  value: string;
  badge?: StatBadge;
  progress?: StatProgress;
}
