"use client";
import { LogExerciseForm } from "./logExerciseForm";

export default function ExercisePage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data); // Handle form data
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LogExerciseForm onSubmit={handleSubmit}>
        <button
          type="submit"
          className="w-full rounded-md bg-black py-2 px-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Log Exercise
        </button>
      </LogExerciseForm>
    </div>
  );
}

// "use client";
// import { useState } from "react";

// type ExerciseData = {
//   categories: Record<string, string[]>;
//   equipment: Record<string, string[]>;
// };

// const exerciseData: ExerciseData = {
//   categories: {
//     "Upper Body": ["Chest", "Back", "Shoulders", "Arms"],
//     "Lower Body": ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
//     Core: ["Abs", "Obliques", "Lower Back"],
//   },
//   equipment: {
//     Chest: ["Dumbbells", "Barbell", "Cable Machine", "Bodyweight"],
//     Back: ["Pull-up Bar", "Barbell", "Cable Machine", "Resistance Bands"],
//     // Add more mappings for each muscle group
//   },
// };

// const LogExercise: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("");
//   const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>("");
//   const [selectedEquipment, setSelectedEquipment] = useState<string>("");
//   const [sets, setSets] = useState<number | "">("");
//   const [reps, setReps] = useState<number | "">("");

//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(e.target.value);
//     setSelectedMuscleGroup(""); // Reset dependent state
//     setSelectedEquipment("");
//   };

//   const handleMuscleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedMuscleGroup(e.target.value);
//     setSelectedEquipment("");
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (
//       !selectedCategory ||
//       !selectedMuscleGroup ||
//       !selectedEquipment ||
//       !sets ||
//       !reps
//     ) {
//       alert("Please fill out all fields!");
//       return;
//     }
//     console.log({
//       category: selectedCategory,
//       muscleGroup: selectedMuscleGroup,
//       equipment: selectedEquipment,
//       sets,
//       reps,
//     });
//     // Save data to your backend or local state
//   };

//   return (
//     <div>
//       <h1>Log Exercise</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Category Selection */}
//         <label>
//           Category:
//           <select value={selectedCategory} onChange={handleCategoryChange}>
//             <option value="">Select Category</option>
//             {Object.keys(exerciseData.categories).map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </label>

//         {/* Muscle Group Selection */}
//         {selectedCategory && (
//           <label>
//             Muscle Group:
//             <select
//               value={selectedMuscleGroup}
//               onChange={handleMuscleGroupChange}
//             >
//               <option value="">Select Muscle Group</option>
//               {exerciseData.categories[selectedCategory].map((group) => (
//                 <option key={group} value={group}>
//                   {group}
//                 </option>
//               ))}
//             </select>
//           </label>
//         )}

//         {/* Equipment Selection */}
//         {selectedMuscleGroup && (
//           <label>
//             Equipment:
//             <select
//               value={selectedEquipment}
//               onChange={(e) => setSelectedEquipment(e.target.value)}
//             >
//               <option value="">Select Equipment</option>
//               {exerciseData.equipment[selectedMuscleGroup]?.map((equip) => (
//                 <option key={equip} value={equip}>
//                   {equip}
//                 </option>
//               ))}
//             </select>
//           </label>
//         )}

//         {/* Sets and Reps */}
//         <label>
//           Sets:
//           <input
//             type="number"
//             value={sets}
//             onChange={(e) =>
//               setSets(e.target.value === "" ? "" : Number(e.target.value))
//             }
//             min="1"
//           />
//         </label>

//         <label>
//           Reps:
//           <input
//             type="number"
//             value={reps}
//             onChange={(e) =>
//               setReps(e.target.value === "" ? "" : Number(e.target.value))
//             }
//             min="1"
//           />
//         </label>

//         <button type="submit">Log Exercise</button>
//       </form>
//     </div>
//   );
// };

// export default LogExercise;
