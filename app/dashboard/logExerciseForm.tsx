"use client";
import React, { useState } from "react";

const workoutNamesDict: Record<string, string[]> = {
  Chest: ["Bench Press", "PushUps", "Pec Flies"],
  Back: ["Lat pulls", "Rows"],
  Shoulders: ["Shoulder Press"],
  Biceps: ["Bicep Curls"],
  Triceps: ["Tricep Extensions", "Dips"],
  Quads: ["Squats", "Lunges", "Leg Press", "Box Jumps"],
  Hamstrings: ["Deadlift", "Lunges"],
  Glutes: ["Hip Thrusters"],
  Calves: ["Calf Raises"],
  Core: ["Crunches", "Planks"],
  FullBody: ["Deadlift"],
  Cardio: ["Running", "Cycling", "Jump Rope"],
};

const workoutEquipment: Record<string, string[]> = {
  "Pec Flies": ["Dumbbells"],
  Dips: ["None"],
  "Bench Press": ["Barbell", "Dumbbells"],
  PushUps: ["None"],
  "Bicep Curls": ["Dumbbells", "Barbell", "Cables"],
  "Tricep Extensions": ["Dumbbells", "Cables"],
  "Shoulder Press": ["Dumbbells", "Barbell"],
  "Lat pulls": ["Cables"],
  Squats: ["Barbell", "Dumbbells"],
  Lunges: ["Dumbbells", "None"],
  "Leg Press": ["Machine"],
  "Calf Raises": ["Dumbbells", "None"],
  Deadlift: ["Barbell"],
  "Hip Thrusters": ["Barbell"],
  Running: ["None"],
  Cycling: ["None"],
  "Jump Rope": ["None"],
  Planks: ["None"],
  Rows: ["Machine", "Cables", "Barbell", "Dumbbells"],
  "Box Jumps": ["None"],
  Crunches: ["None"],
};

const broadToSpecific: Record<string, string[]> = {
  "Upper Body": ["Chest", "Back", "Shoulders", "Biceps", "Triceps"],
  "Lower Body": ["Quads", "Hamstrings", "Glutes", "Calves"],
  Core: ["Core"],
  FullBody: ["Full Body"],
  Cardio: ["Cardio"],
};

export function LogExerciseForm({
  onSubmit,
  children,
}: {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) {
  const [category, setCategory] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [workout, setWorkout] = useState("");
  const [equipmentOptions, setEquipmentOptions] = useState<string[]>([]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setMuscleGroup("");
    setWorkout("");
    setEquipmentOptions([]);
  };

  const handleMuscleGroupChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedMuscleGroup = event.target.value;
    setMuscleGroup(selectedMuscleGroup);
    setWorkout("");
    setEquipmentOptions([]);
  };

  const handleWorkoutChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWorkout = event.target.value;
    setWorkout(selectedWorkout);
    setEquipmentOptions(workoutEquipment[selectedWorkout] || []);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      {/* Category Selection */}
      <div>
        <label
          htmlFor="category"
          className="block text-xs text-gray-600 uppercase"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={handleCategoryChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        >
          <option value="">Select Category</option>
          {Object.keys(broadToSpecific).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Muscle Group Selection */}
      <div>
        <label
          htmlFor="muscleGroup"
          className="block text-xs text-gray-600 uppercase"
        >
          Muscle Group
        </label>
        <select
          id="muscleGroup"
          name="muscle_group"
          value={muscleGroup}
          onChange={handleMuscleGroupChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          disabled={!category}
        >
          <option value="">Select Muscle Group</option>
          {(broadToSpecific[category] || []).map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      {/* Workout Selection */}
      <div>
        <label
          htmlFor="workout"
          className="block text-xs text-gray-600 uppercase"
        >
          Workout
        </label>
        <select
          id="workout"
          name="workout"
          value={workout}
          onChange={handleWorkoutChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          disabled={!muscleGroup}
        >
          <option value="">Select Workout</option>
          {(workoutNamesDict[muscleGroup] || []).map((work) => (
            <option key={work} value={work}>
              {work}
            </option>
          ))}
        </select>
      </div>

      {/* Equipment Selection */}
      <div>
        <label
          htmlFor="equipment"
          className="block text-xs text-gray-600 uppercase"
        >
          Equipment
        </label>
        <select
          id="equipment"
          name="equipment"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          disabled={!workout}
        >
          <option value="">Select Equipment</option>
          {equipmentOptions.map((equip) => (
            <option key={equip} value={equip}>
              {equip}
            </option>
          ))}
        </select>
      </div>

      {/* Sets */}
      <div>
        <label htmlFor="sets" className="block text-xs text-gray-600 uppercase">
          Sets
        </label>
        <input
          id="sets"
          name="sets"
          type="number"
          min="1"
          placeholder="3"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>

      {/* Reps */}
      <div>
        <label htmlFor="reps" className="block text-xs text-gray-600 uppercase">
          Reps
        </label>
        <input
          id="reps"
          name="reps"
          type="number"
          min="1"
          placeholder="12"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>

      {/* Weight */}
      <div>
        <label
          htmlFor="weight"
          className="block text-xs text-gray-600 uppercase"
        >
          Weight
        </label>
        <input
          id="weight"
          name="weight"
          type="number"
          min="1"
          placeholder="kg"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>

      {children}
    </form>
  );
}
