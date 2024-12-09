// File: app/dashboard/clientLogExerciseForm.tsx
"use client";

import React from "react";
import {LogExerciseForm} from "./logExerciseForm";

const ClientLogExerciseForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newWorkout = {
      category: formData.get("category") as string,
      muscle_group: formData.get("muscle_group") as string,
      workout: formData.get("workout") as string,
      equipment: formData.get("equipment") as string,
      sets: Number(formData.get("sets")),
      reps: Number(formData.get("reps")),
      weight: Number(formData.get("weight")),
    };

    console.log("New Workout Logged:", newWorkout);

    event.currentTarget.reset();
  };

  return (
    <LogExerciseForm onSubmit={handleSubmit}>
      <button
        type="submit"
        className="w-full rounded-md bg-black py-2 px-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        Log Exercise
      </button>
    </LogExerciseForm>
  );
};

export default ClientLogExerciseForm;
