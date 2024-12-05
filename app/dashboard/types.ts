export interface User {
    id: number;
    name: string;
  }
  
  export interface Stats {
    waterIntake: number;
    caloriesBurned: number;
    weight: number;
  }
  
  export interface Exercise {
    name: string;
    reps: string;
    sets: number;
    result: string;
  }
  
  export interface Milestone {
    progress: number;
    unit: string;
  }
  
  export interface DashboardData {
    user: User;
    stats: Stats;
    exercises: Exercise[];
    milestones: Record<string, Milestone>;
  }