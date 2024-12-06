"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/dashboard/Dashboard.module.css";
import { User, Stats, Exercise, Milestone } from "./types";
import { LogExerciseForm } from "./logExerciseForm";
import Link from "next/link";
const mockData = {
  user: { id: 1, name: "Mohammad" },
  stats: {
    waterIntake: 1310,
    caloriesBurned: 2400,
    weight: 62,
  },
  milestones: {
    lifting: { progress: 77, unit: "0.77 lbs" },
    cycling: { progress: 50, unit: "2.5 miles" },
    running: { progress: 20, unit: "87.3 meters" },
  },
};

const initialWorkouts = [
  {
    category: "Upper Body",
    muscle_group: "Chest",
    workout: "Bench Press",
    equipment: "Barbell",
    sets: 4,
    reps: 10,
    weight: 30
  },
  {
    category: "Cardio",
    muscle_group: "Full Body",
    workout: "Running",
    equipment: "Treadmill",
    sets: 1,
    reps: 30, // minutes
    weight: 0
  },
  {
    category: "Flexibility",
    muscle_group: "Legs",
    workout: "Yoga Stretch",
    equipment: "None",
    sets: 3,
    reps: 15,
    weight: 0
  },
];

const Dashboard: React.FC = () => {
  const [recentWorkouts, setRecentWorkouts] = useState(initialWorkouts);
  const [data, setData] = useState<{
    user: User;
    stats: Stats;
    milestones: Record<string, Milestone>;
  } | null>(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => setData(mockData), 1000);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    // Extract form values
    const formObject = Object.fromEntries(formData.entries());
    const newWorkout: Exercise = {
      category: formObject.category as string,
      muscle_group: formObject.muscle_group as string, // Use submitted muscle_group directly
      workout: formObject.workout as string,
      equipment: formObject.equipment as string,
      sets: Number(formObject.sets),
      reps: Number(formObject.reps),
      weight: Number(formObject.weight),
    };
  
    // Add new workout to the state
    setRecentWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
    event.currentTarget.reset();
  };
  
  

  if (!data) {
    return <div>Loading...</div>;
  }

  const { user, stats, milestones } = data;

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2>FitLife</h2>
        <ul className={styles.navList}>
          <li>Home</li>
          <li>Exercise</li>
          <li>Timer</li>
          <li>Goal</li>
          <li>Settings</li>
          <li>User</li>
          <li>Log Out</li>
        </ul>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Hi, {user.name}</h1>
          <p>Your fitness progress dashboard</p>
          <input className={styles.searchBar} type="text" placeholder="Search Something" />
        </header>

        <section className={styles.statsSection}>
          <StatCard title="💧 Water Intake" value={`${stats.waterIntake} ml`} />
          <StatCard title="🔥 Calories Burned" value={`${stats.caloriesBurned} kcal`} />
          <StatCard title="⚖️ Weight" value={`${stats.weight} kg`} />
        </section>

        <section className={styles.milestoneSection}>
          <h2>Daily Hustling</h2>
          <div className={styles.milestones}>
            {Object.entries(milestones).map(([key, milestone]) => (
              <MilestoneCard key={key} name={key} milestone={milestone} />
            ))}
          </div>
        </section>

        <section className={styles.exerciseSection}>
          <div className="flex flex-row items-start justify-center space-x-6">
            {/* Log Exercise Form */}
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
              <LogExerciseForm onSubmit={handleSubmit}>
                <button
                  type="submit"
                  className="w-full rounded-md bg-black py-2 px-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Log Exercise
                </button>
              </LogExerciseForm>
            </div>

            {/* Recent Workout Table */}
            <div className="flex-grow w-full max-w-5xl p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Workout</h3>
              {recentWorkouts.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse border border-gray-300 text-gray-600">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Muscle Group</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Workout</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Equipment</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Sets</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Reps</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentWorkouts.map((workout, index) => (
                        <tr key={index} className="bg-white even:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">{workout.muscle_group}</td>
                          <td className="border border-gray-300 px-4 py-2">{workout.workout}</td>
                          <td className="border border-gray-300 px-4 py-2">{workout.equipment}</td>
                          <td className="border border-gray-300 px-4 py-2">{workout.sets}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            {workout.category === "Cardio" ? `${workout.reps} mins` : workout.reps}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">{workout.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No workouts logged yet.</p>
              )}
            </div>
          </div>
        </section>

        <section className={styles.trainerSection}>
  <h2>Our Trainers</h2>
  <p>Get personalized guidance from our certified trainers!</p>
  <div className={styles.trainerCards}>
    <TrainerCard
      image="/trainer2.jpg"
      name="Kopper Kit"
      description="Weightlifting and Muscle building."
      bio="Hi, I'm Kopper Kit, your personal trainer and fitness enthusiast. I specialize in weightlifting and muscle building. When I'm not in the gym, you can find me hiking or playing guitar."
    />
    <TrainerCard
      image="/trainer1.jpg"
      name="Jane Smith"
      description="Cardio and Yoga."
      bio="Hello, I'm Jane Smith, a certified yoga and cardio instructor. I'm passionate about helping people achieve their fitness goals through mindful movement and healthy habits. In my free time, I enjoy reading and gardening."
    />
  </div>
</section>
      </main>
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className={styles.statCard}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

const MilestoneCard: React.FC<{ name: string; milestone: Milestone }> = ({ name, milestone }) => (
  <div className={styles.milestoneCard}>
    <p>
      {name.charAt(0).toUpperCase() + name.slice(1)}: {milestone.unit}
    </p>
    <div className={styles.progressBar}>
      <div className={styles.progressFill} style={{ width: `${milestone.progress}%` }}></div>
    </div>
  </div>
);

const TrainerCard: React.FC<{ image: string; name: string; description: string; bio: string }> = ({
  image,
  name,
  description,
  bio,
}) => (
  <div className={styles.trainerCard}>
    <Image src={image} alt={name} width={150} height={150} className={styles.trainerImage} />
    <h3><strong>{name}</strong></h3>
    <p><strong>{description}</strong></p>
    <p className={styles.trainerBio}>{bio}</p>
  </div>
);

export default Dashboard;