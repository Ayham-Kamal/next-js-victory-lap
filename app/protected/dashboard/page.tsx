// File: app/dashboard/page.tsx
import React from "react";
import Image from "next/image";
import styles from "./Dashboard.module.css";
import { User, Stats, Milestone, Exercise } from "./types";
import RecentWorkouts from "./recentWorkouts";
import ClientLogExerciseForm from "./clientLogExerciseForm";
import { fetchRecentWorkouts, fetchUserID, fetchName } from "../../db";
import { auth } from "app/auth";

// Define an asynchronous function component
export default async function Dashboard() {
  let session = await auth();
  let userID = (await fetchUserID(String(session?.user?.email))).at(0);
  let userInfo = (await fetchName(userID?.id)).at(0);

  // Simulate fetching data
  const mockData = {
    user: { id: userID?.id, name: userInfo?.firstname },
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

  const { user, stats, milestones } = mockData;

  // Fetch recent workouts
  const recentworkouts = await fetchRecentWorkouts(userID?.id);
  // console.log(recentWorkouts, "recent");

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
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search Something"
          />
        </header>

        <section className={styles.statsSection}>
          <StatCard title="💧 Water Intake" value={`${stats.waterIntake} ml`} />
          <StatCard
            title="🔥 Calories Burned"
            value={`${stats.caloriesBurned} kcal`}
          />
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
              <ClientLogExerciseForm userID={userID?.id} />
            </div>

            {/* Recent Workouts */}
            <RecentWorkouts recentWorkouts={recentworkouts} />
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
}

const StatCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <div className={styles.statCard}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

const MilestoneCard: React.FC<{ name: string; milestone: Milestone }> = ({
  name,
  milestone,
}) => (
  <div className={styles.milestoneCard}>
    <p>
      {name.charAt(0).toUpperCase() + name.slice(1)}: {milestone.unit}
    </p>
    <div className={styles.progressBar}>
      <div
        className={styles.progressFill}
        style={{ width: `${milestone.progress}%` }}
      ></div>
    </div>
  </div>
);

const TrainerCard: React.FC<{
  image: string;
  name: string;
  description: string;
  bio: string;
}> = ({ image, name, description, bio }) => (
  <div className={styles.trainerCard}>
    <Image
      src={image}
      alt={name}
      width={150}
      height={150}
      className={styles.trainerImage}
    />
    <h3>
      <strong>{name}</strong>
    </h3>
    <p>
      <strong>{description}</strong>
    </p>
    <p className={styles.trainerBio}>{bio}</p>
  </div>
);