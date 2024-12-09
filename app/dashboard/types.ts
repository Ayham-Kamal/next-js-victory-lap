export interface User {
  id: number;
  name: string;
}

export interface Stats {
  waterIntake: number;
  caloriesBurned: number;
  weight: number;
}

export interface Milestone {
  progress: number;
  unit: string;
}

export interface Exercise {
  category: string;
  muscle_group: string;
  workout: string;
  equipment: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface DashboardData {
  user: User;
  stats: Stats;
  milestones: Record<string, Milestone>;
}
