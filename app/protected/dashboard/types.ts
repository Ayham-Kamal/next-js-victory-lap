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
  musclename: string;
  workoutname: string;
  equipmentname: string;
  setschosen: number;
  repschosen: number;
  weightused: number;
}

export interface DashboardData {
  user: User;
  stats: Stats;
  milestones: Record<string, Milestone>;
}
