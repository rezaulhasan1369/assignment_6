"use client";

import { useState } from "react";
import { useWorkoutState } from "@/context/WorkoutStateContext";
import type { Workout } from "@/types/workout";

type WorkoutActionsProps = {
  workout: Workout;
};

type Message = {
  text: string;
  type: "success" | "warning";
} | null;

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    plan,
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useWorkoutState();

  const [message, setMessage] = useState<Message>(null);

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);
  const planIsFull = plan.length >= 5;

  function showMessage(
    text: string,
    type: "success" | "warning"
  ) {
    setMessage({ text, type });

    window.setTimeout(() => {
      setMessage(null);
    }, 2200);
  }

  function handleAddToPlan() {
    if (inPlan) {
      showMessage(
        "Workout is already in today's plan.",
        "warning"
      );
      return;
    }

    if (planIsFull) {
      showMessage(
        "Today's plan is limited to 5 workouts.",
        "warning"
      );
      return;
    }

    const added = addToPlan(workout);

    if (added) {
      showMessage("Added to today's plan.", "success");
    }
  }

  function handleSaveWorkout() {
    if (saved) {
      showMessage("Workout is already saved.", "warning");
      return;
    }

    const added = saveWorkout(workout);

    if (added) {
      showMessage("Workout saved for later.", "success");
    }
  }

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToPlan}
          disabled={inPlan || planIsFull}
          className="rounded-lg bg-[#c2f800] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-[#d2ff3d] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {inPlan ? "Added to Plan" : "Add to Today's Plan"}
        </button>

        <button
          type="button"
          onClick={handleSaveWorkout}
          disabled={saved}
          className="rounded-lg border border-[#343a46] px-6 py-3 text-sm font-bold uppercase text-white transition hover:border-[#c2f800] hover:text-[#c2f800] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {saved ? "Saved" : "Save for Later"}
        </button>
      </div>

      {message && (
        <div
          role="status"
          className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
            message.type === "success"
              ? "border-[#39421f] bg-[#20251b] text-[#c2f800]"
              : "border-[#4a4030] bg-[#241f18] text-[#f5c76b]"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}