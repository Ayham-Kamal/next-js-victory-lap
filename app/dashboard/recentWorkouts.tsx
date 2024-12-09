// File: app/dashboard/recentWorkouts.tsx
"use client";

import React, { useState } from "react";

type Exercise = {
  category: string;
  muscle_group: string;
  workout: string;
  equipment: string;
  sets: number;
  reps: number;
  weight: number;
};

const initialWorkouts: Exercise[] = [
  {
    category: "Upper Body",
    muscle_group: "Chest",
    workout: "Bench Press",
    equipment: "Barbell",
    sets: 4,
    reps: 10,
    weight: 30,
  },
  {
    category: "Cardio",
    muscle_group: "Full Body",
    workout: "Running",
    equipment: "Treadmill",
    sets: 1,
    reps: 30,
    weight: 0,
  },
  {
    category: "Flexibility",
    muscle_group: "Legs",
    workout: "Yoga Stretch",
    equipment: "None",
    sets: 3,
    reps: 15,
    weight: 0,
  },
];

const RecentWorkouts: React.FC = () => {
  const [recentWorkouts, setRecentWorkouts] = useState<Exercise[]>(initialWorkouts);

  return (
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
                  <td className="border border-gray-300 px-4 py-2">{workout.reps}</td>
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
  );
};

export default RecentWorkouts;
