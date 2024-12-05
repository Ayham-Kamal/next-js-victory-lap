"use client";
import React, { useState } from "react";

type Category = "Upper Body" | "Lower Body" | "Core";
type MuscleGroup =
  | "Chest"
  | "Back"
  | "Shoulders"
  | "Arms"
  | "Legs"
  | "Glutes"
  | "Calves"
  | "Abs"
  | "Obliques";
type Equipment = string;

interface SetData {
  weight: number;
  reps: number;
}

interface Workout {
  equipment: Equipment;
  sets: SetData[];
}

interface WorkoutFormProps {
  action: (formData: FormData) => void;
}

const categories: Record<Category, MuscleGroup[]> = {
  "Upper Body": ["Chest", "Back", "Shoulders", "Arms"],
  "Lower Body": ["Legs", "Glutes", "Calves"],
  Core: ["Abs", "Obliques"],
};

const equipmentOptions: Record<MuscleGroup, Equipment[]> = {
  Chest: ["Bench", "Dumbbells"],
  Back: ["Pull-up Bar", "Barbell"],
  Shoulders: ["Dumbbells", "Bands"],
  Arms: ["Curl Bar", "Kettlebells"],
  Legs: ["Squat Rack", "Leg Press"],
  Glutes: ["Bands", "Dumbbells"],
  Calves: ["Calf Raise Machine", "Weights"],
  Abs: ["Mat", "Medicine Ball"],
  Obliques: ["Twist Machine", "Dumbbells"],
};

const WorkoutForm: React.FC<WorkoutFormProps> = ({ action }) => {
  const [category, setCategory] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [equipment, setEquipment] = useState("");
  const [numSets, setNumSets] = useState(0);
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const handleAddWorkout = () => {
    const sets: SetData[] = Array.from({ length: numSets }, () => ({
      weight: 0,
      reps: 0,
    }));
    setWorkouts([...workouts, { equipment, sets }]);
  };

  const handleSetChange = (
    workoutIndex: number,
    setIndex: number,
    field: "weight" | "reps",
    value: number
  ) => {
    const updatedWorkouts = workouts.map((workout, i) =>
      i === workoutIndex
        ? {
            ...workout,
            sets: workout.sets.map((set, j) =>
              j === setIndex ? { ...set, [field]: value } : set
            ),
          }
        : workout
    );
    setWorkouts(updatedWorkouts);
  };

  return (
    <form>
      <label>
        Select Category:
        <select
          name="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setMuscleGroup("");
            setEquipment("");
            setNumSets(0);
          }}
        >
          <option value="">-- Choose Category --</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      {category && (
        <label>
          Select Muscle Group:
          <select
            name="muscleGroup"
            value={muscleGroup}
            onChange={(e) => {
              setMuscleGroup(e.target.value);
              setEquipment("");
              setNumSets(0);
            }}
          >
            <option value="">-- Choose Muscle Group --</option>
            {categories[category as Category].map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </label>
      )}

      {muscleGroup && (
        <label>
          Select Equipment:
          <select
            name="equipment"
            value={equipment}
            onChange={(e) => {
              setEquipment(e.target.value);
              setNumSets(0);
            }}
          >
            <option value="">-- Choose Equipment --</option>
            {equipmentOptions[muscleGroup as MuscleGroup].map((equip) => (
              <option key={equip} value={equip}>
                {equip}
              </option>
            ))}
          </select>
        </label>
      )}

      {equipment && (
        <label>
          Select Number of Sets (1-5):
          <select
            name="numSets"
            value={numSets}
            onChange={(e) => setNumSets(Number(e.target.value))}
          >
            <option value="">-- Choose Sets --</option>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      )}

      {numSets > 0 && (
        <button type="button" onClick={handleAddWorkout}>
          Add Workout
        </button>
      )}

      {workouts.length > 0 && (
        <div>
          <h2>Workout Details</h2>
          {workouts.map((workout, workoutIndex) => (
            <div key={workoutIndex}>
              <h3>{workout.equipment}</h3>
              {workout.sets.map((set, setIndex) => (
                <div key={setIndex}>
                  <label>
                    Set {setIndex + 1} Weight (kg):
                    <input
                      type="number"
                      value={set.weight}
                      onChange={(e) =>
                        handleSetChange(
                          workoutIndex,
                          setIndex,
                          "weight",
                          Number(e.target.value)
                        )
                      }
                    />
                  </label>
                  <label>
                    Reps:
                    <input
                      type="number"
                      value={set.reps}
                      onChange={(e) =>
                        handleSetChange(
                          workoutIndex,
                          setIndex,
                          "reps",
                          Number(e.target.value)
                        )
                      }
                    />
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default WorkoutForm;
