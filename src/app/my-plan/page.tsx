"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useWorkoutState } from "@/context/WorkoutStateContext";
import type { Workout } from "@/types/workout";

type ActiveTab = "plan" | "saved";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkoutState();

  const [activeTab, setActiveTab] = useState<ActiveTab>("plan");
  const [message, setMessage] = useState<string | null>(null);

  function showMessage(text: string) {
    setMessage(text);

    window.setTimeout(() => {
      setMessage(null);
    }, 2200);
  }

  function handleMarkAsDone(workout: Workout) {
    markAsDone(workout.id);
    showMessage(`${workout.name} marked as done.`);
  }

  function handleRemove(workout: Workout) {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
      showMessage(`${workout.name} removed from today's plan.`);
      return;
    }

    removeFromSaved(workout.id);
    showMessage(`${workout.name} removed from saved workouts.`);
  }

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const displayedWorkouts =
    activeTab === "plan" ? plan : saved;

  return (
    <main className="mx-auto min-h-[70vh] max-w-[1280px] px-6 py-12">
      <section>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c2f800]">
          My Workout
        </p>

        <h1 className="mt-3 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl">
          My Plan
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-[#9ca3af]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        <MetricCard
          label="Exercises"
          value={String(plan.length)}
        />
        <MetricCard
          label="Minutes"
          value={String(totalMinutes)}
        />
        <MetricCard
          label="Calories"
          value={String(totalCalories)}
        />
      </section>

      <section className="mt-10">
        <div className="flex border-b border-[#222630]">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`border-b-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] transition ${
              activeTab === "plan"
                ? "border-[#c2f800] text-[#c2f800]"
                : "border-transparent text-[#6b7280] hover:text-white"
            }`}
          >
            Today&apos;s Plan ({plan.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] transition ${
              activeTab === "saved"
                ? "border-[#c2f800] text-[#c2f800]"
                : "border-transparent text-[#6b7280] hover:text-white"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        <div className="mt-8">
          {displayedWorkouts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {displayedWorkouts.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  activeTab={activeTab}
                  onMarkAsDone={handleMarkAsDone}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          ) : (
            <EmptyState activeTab={activeTab} />
          )}
        </div>
      </section>

      {message && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border border-[#39421f] bg-[#20251b] px-5 py-4 text-sm font-medium text-[#c2f800] shadow-2xl"
        >
          {message}
        </div>
      )}
    </main>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
};

function MetricCard({
  label,
  value,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-[#222630] bg-[#15171d] p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6b7280]">
        {label}
      </p>

      <p className="mt-3 font-[family-name:var(--font-oswald)] text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}

type PlanWorkoutCardProps = {
  workout: Workout;
  activeTab: ActiveTab;
  onMarkAsDone: (workout: Workout) => void;
  onRemove: (workout: Workout) => void;
};

function PlanWorkoutCard({
  workout,
  activeTab,
  onMarkAsDone,
  onRemove,
}: PlanWorkoutCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] sm:flex-row">
      <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:w-[190px]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 190px"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups
            .slice(0, 2)
            .map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#20251b] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#c2f800]"
              >
                {muscle}
              </span>
            ))}
        </div>

        <h2 className="mt-4 font-[family-name:var(--font-oswald)] text-xl font-bold uppercase text-white">
          {workout.name}
        </h2>

        <p className="mt-2 text-xs text-[#9ca3af]">
          {workout.equipment}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#d1d5db]">
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} cal</span>
          <span>★ {workout.rating}</span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`/workouts/${workout.id}`}
            className="text-xs font-bold uppercase tracking-[0.08em] text-[#c2f800] transition hover:text-white"
          >
            View Details →
          </Link>

          {activeTab === "plan" && (
            <button
              type="button"
              onClick={() => onMarkAsDone(workout)}
              className="rounded-[6px] bg-[#c2f800] px-4 py-2.5 text-[12px] font-bold uppercase leading-4 tracking-[0.3px] !text-black transition-opacity hover:opacity-90"
            >
              Mark as Done
            </button>
          )}

          <button
            type="button"
            onClick={() => onRemove(workout)}
            className="rounded-[6px] border border-[#343a46] bg-transparent px-4 py-2.5 text-[12px] font-bold uppercase leading-4 tracking-[0.3px] text-white transition hover:border-[#c2f800] hover:text-[#c2f800]"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

type EmptyStateProps = {
  activeTab: ActiveTab;
};

function EmptyState({
  activeTab,
}: EmptyStateProps) {
  const isPlan = activeTab === "plan";

  return (
    <div className="rounded-2xl border border-dashed border-[#303640] bg-[#15171d] px-6 py-14 text-center">
      <p className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase text-white">
        {isPlan
          ? "No workouts in today's plan"
          : "No saved workouts yet"}
      </p>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#9ca3af]">
        {isPlan
          ? "Browse the workout library and add exercises to build today's session."
          : "Save workouts from the library so you can return to them later."}
      </p>

      <Link
        href="/#library"
        className="mt-6 inline-flex min-h-10 items-center justify-center rounded-md bg-[#c2f800] px-4 py-2 font-[family-name:var(--font-oswald)] text-[11px] font-bold uppercase tracking-[0.08em] text-[#0b0d10] transition hover:bg-[#d2ff3d]"
      >
        Browse Workouts
      </Link>
    </div>
  );
}