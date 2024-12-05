"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/dashboard/Dashboard.module.css";
import { User, Stats, Exercise, Milestone } from "./types";

const mockData = {
  user: { id: 1, name: "Mohammad" },
  stats: {
    waterIntake: 1310,
    caloriesBurned: 2400,
    weight: 62,
  },
  exercises: [
    { name: "Boxing & Chest", reps: "15 Into 15 Repetition", sets: 26, result: "75%" },
    { name: "Weight & Lifting", reps: "30 Into 10 Repetition", sets: 26, result: "65%" },
    { name: "Biceps & Lowercase", reps: "45 Into 15 Repetition", sets: 26, result: "98%" },
  ],
  milestones: {
    lifting: { progress: 77, unit: "0.77 lbs" },
    cycling: { progress: 50, unit: "2.5 miles" },
    running: { progress: 20, unit: "87.3 meters" },
  },
};

const Dashboard: React.FC = () => {
  const [data, setData] = useState<{
    user: User;
    stats: Stats;
    exercises: Exercise[];
    milestones: Record<string, Milestone>;
  } | null>(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => setData(mockData), 1000);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { user, stats, exercises, milestones } = data;

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
          <h2>Daily Exercise</h2>
          <ExerciseTable exercises={exercises} />
        </section>

        <section className={styles.trainerSection}>
          <h2>Our Trainers</h2>
          <div className={styles.trainerCards}>
            <TrainerCard
              image="/trainer2.jpg"
              name="Kopper Kit"
              description="Weightlifting and Muscle building."
            />
            <TrainerCard
              image="/trainer1.jpg"
              name="Jane Smith"
              description="Cardio and Yoga."
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

const ExerciseTable: React.FC<{ exercises: Exercise[] }> = ({ exercises }) => (
  <table className={styles.exerciseTable}>
    <thead>
      <tr>
        <th>Name of Exercise</th>
        <th>Reps</th>
        <th>Sets</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      {exercises.map((exercise, index) => (
        <tr key={index}>
          <td>{exercise.name}</td>
          <td>{exercise.reps}</td>
          <td>{exercise.sets}</td>
          <td>{exercise.result}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const TrainerCard: React.FC<{ image: string; name: string; description: string }> = ({
  image,
  name,
  description,
}) => (
  <div className={styles.trainerCard}>
    <Image src={image} alt={name} width={150} height={150} className={styles.trainerImage} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default Dashboard;