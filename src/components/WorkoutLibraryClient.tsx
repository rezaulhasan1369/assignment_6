"use client";

import { useState } from "react";
import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";

type SortOption = "default" | "duration" | "calories" | "rating";

type WorkoutLibraryClientProps = {
  workouts: Workout[];
};

export default function WorkoutLibraryClient({
  workouts,
}: WorkoutLibraryClientProps) {
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const sortedWorkouts = [...workouts];

  if (sortOption === "duration") {
    sortedWorkouts.sort((a, b) => a.duration - b.duration);
  }

  if (sortOption === "calories") {
    sortedWorkouts.sort(
      (a, b) => b.caloriesBurned - a.caloriesBurned
    );
  }

  if (sortOption === "rating") {
    sortedWorkouts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-end gap-3">
        <label
          htmlFor="workout-sort"
          className="text-xs font-bold uppercase tracking-[0.08em] text-[#9ca3af]"
        >
          Sort By
        </label>

        <select
          id="workout-sort"
          value={sortOption}
          onChange={(event) =>
            setSortOption(event.target.value as SortOption)
          }
          className="rounded-md border border-[#343a46] bg-[#15171d] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.05em] text-white outline-none transition focus:border-[#c2f800]"
        >
          <option value="default">Default</option>
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </>
  );
}