"use client";

import React from "react";
import { LogExerciseForm } from "./logExerciseForm";

interface ClientLogExerciseFormProps {
  userID: number;
}

const ClientLogExerciseForm: React.FC<ClientLogExerciseFormProps> = ({
  userID,
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newWorkout = {
      userid: userID,
      musclename: formData.get("muscle_group") as string,
      workoutname: formData.get("workout") as string,
      equipmentname: formData.get("equipment") as string,
      setschosen: Number(formData.get("sets")),
      repschosen: Number(formData.get("reps")),
      weightused: Number(formData.get("weight")),
    };

    try {
      const response = await fetch("/api/dashboard/logExercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWorkout),
      });

      if (response.ok) {
        alert("Exercise logged successfully!");
        //event.currentTarget.reset();
      } else {
        alert("Failed to log exercise. Please try again.");
      }
    } catch (error) {
      console.error("Error logging exercise:", error);
      alert("An error occurred. Please try again later.");
    }
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
