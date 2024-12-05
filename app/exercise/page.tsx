"use client";
import { useState } from "react";

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

const ExercisePage: React.FC = () => {
  const [category, setCategory] = useState<Category | "">("");
  const [muscleGroup, setMuscleGroup] = useState<MuscleGroup | "">("");
  const [equipment, setEquipment] = useState<Equipment | "">("");
  const [numSets, setNumSets] = useState<number>(0);
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const categories: Record<Category, MuscleGroup[]> = {
    "Upper Body": ["Chest", "Back", "Shoulders", "Arms"],
    "Lower Body": ["Legs", "Glutes", "Calves"],
    "Core": ["Abs", "Obliques"],
  };

  const equipmentOptions: Record<MuscleGroup, Equipment[]> = {
    Chest: ["Bench Press", "Dumbbells", "Push-up Bars"],
    Back: ["Pull-up Bar", "Lat Pulldown Machine", "Rowing Machine"],
    Shoulders: ["Dumbbells", "Shoulder Press Machine", "Resistance Bands"],
    Arms: ["Dumbbells", "EZ Bar", "Cable Machine"],
    Legs: ["Squat Rack", "Leg Press Machine", "Kettlebells"],
    Glutes: ["Hip Thrust Machine", "Resistance Bands", "Barbell"],
    Calves: ["Calf Raise Machine", "Dumbbells", "Leg Press Machine"],
    Abs: ["Ab Wheel", "Plank Mat", "Sit-up Bench"],
    Obliques: ["Medicine Ball", "Cable Machine", "Dumbbells"],
  };

  const handleAddWorkout = () => {
    if (equipment && numSets > 0) {
      const sets: SetData[] = Array.from({ length: numSets }, () => ({ weight: 0, reps: 0 }));
      setWorkouts([...workouts, { equipment, sets }]);
    }
  };
  

  const handleSetChange = (
    workoutIndex: number,
    setIndex: number,
    field: keyof SetData,
    value: number
  ) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[workoutIndex].sets[setIndex][field] = value;
    setWorkouts(updatedWorkouts);
  };

  return (
    <div style={styles.container}>
      <h1>Exercise Planner</h1>
      <div style={styles.card}>
        <label style={styles.label}>
          Select Category:
          <select
            style={styles.select}
            value={category}
            onChange={(e) => {
              const selectedCategory = e.target.value as Category;
              setCategory(selectedCategory);
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
          <label style={styles.label}>
            Select Muscle Group:
            <select
              style={styles.select}
              value={muscleGroup}
              onChange={(e) => {
                const selectedMuscleGroup = e.target.value as MuscleGroup;
                setMuscleGroup(selectedMuscleGroup);
                setEquipment("");
                setNumSets(0);
              }}
            >
              <option value="">-- Choose Muscle Group --</option>
              {categories[category].map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </label>
        )}

        {muscleGroup && (
          <label style={styles.label}>
            Select Equipment:
            <select
              style={styles.select}
              value={equipment}
              onChange={(e) => {
                setEquipment(e.target.value);
                setNumSets(0);
              }}
            >
              <option value="">-- Choose Equipment --</option>
              {equipmentOptions[muscleGroup].map((equip) => (
                <option key={equip} value={equip}>
                  {equip}
                </option>
              ))}
            </select>
          </label>
        )}

        {equipment && (
          <label style={styles.label}>
            Select Number of Sets (1-5):
            <select
              style={styles.select}
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
          <button style={styles.button} onClick={handleAddWorkout}>
            Add Workout
          </button>
        )}
      </div>

      {workouts.length > 0 && (
        <div>
          <h2 style={styles.subTitle}>Workout Details</h2>
          {workouts.map((workout, workoutIndex) => (
            <div key={workoutIndex} style={styles.workoutCard}>
              <h3>{workout.equipment}</h3>
              {workout.sets.map((set, setIndex) => (
                <div key={setIndex} style={styles.setRow}>
                  <label style={styles.rowLabel}>
                    Set {setIndex + 1} Weight (kg):
                    <input
                      style={styles.input}
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
                  <label style={styles.rowLabel}>
                    Reps:
                    <input
                      style={styles.input}
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
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  subTitle: {
    marginTop: "20px",
    marginBottom: "10px",
  },
  card: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  workoutCard: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
  },
  select: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  setRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  rowLabel: {
    marginRight: "15px",
  },
  input: {
    width: "50px",
    padding: "5px",
  },
};

export default ExercisePage;
