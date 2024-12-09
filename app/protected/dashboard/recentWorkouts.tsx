"use client";

import React, { useState } from "react";
import { Exercise } from "./types";

interface RecentWorkoutsProps {
  recentWorkouts: Exercise[];
}

const RecentWorkouts: React.FC<RecentWorkoutsProps> = ({ recentWorkouts }) => {
  const [initialWorkouts, setInitialWorkouts] =
    useState<Exercise[]>(recentWorkouts);

  return (
    <div className="flex-grow w-full max-w-5xl p-6 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Workout
      </h3>
      {recentWorkouts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 text-gray-600">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Muscle Group
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Workout
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Equipment
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Sets
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Reps
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Weight
                </th>
              </tr>
            </thead>
            <tbody>
              {recentWorkouts.map((workout, index) => (
                <tr key={index} className="bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {workout.musclename}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {workout.workoutname}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {workout.equipmentname}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {workout.setschosen}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {workout.repschosen}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {workout.weightused}
                  </td>
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
