import WorkoutLibraryClient from "@/components/WorkoutLibraryClient";
import type { Workout } from "@/types/workout";

async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch workouts.");
  }

  return response.json();
}

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="mx-auto max-w-[1280px] scroll-mt-24 px-6 py-20"
    >
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2f800]">
          Workout Library
        </p>

        <h2 className="mt-3 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl">
          The Library
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#9ca3af]">
          Choose from focused exercises, review the key training details, and
          build a workout that fits today&apos;s session.
        </p>
      </div>

      <WorkoutLibraryClient workouts={workouts} />
    </section>
  );
}