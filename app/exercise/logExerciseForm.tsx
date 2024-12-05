"use client";
export function LogExerciseForm({
  onSubmit,
  children,
}: {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) {
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
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        >
          <option value="">Select Category</option>
          <option value="Upper Body">Upper Body</option>
          <option value="Lower Body">Lower Body</option>
          <option value="Core">Core</option>
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
          name="muscleGroup"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        >
          <option value="">Select Muscle Group</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Shoulders">Shoulders</option>
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
        >
          <option value="">Select Equipment</option>
          <option value="Dumbbells">Dumbbells</option>
          <option value="Barbell">Barbell</option>
          <option value="Cable Machine">Cable Machine</option>
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

      {children}
    </form>
  );
}
