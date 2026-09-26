import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Workout } from "@/types/workout";
import WorkoutActions from "@/components/WorkoutActions";

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getWorkout(id: string): Promise<Workout | null> {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch workout details.");
  }

  return response.json();
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-12">
      <Link
        href="/#library"
        className="inline-flex text-xs font-bold uppercase tracking-[0.15em] text-[#c2f800] transition hover:text-white"
      >
        ← Back to Library
      </Link>

      <section className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#20251b] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c2f800]"
              >
                {muscle}
              </span>
            ))}

            <span className="rounded-full border border-[#303640] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#9ca3af]">
              {workout.difficulty}
            </span>
          </div>

          <h1 className="mt-5 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#9ca3af]">
            {workout.description}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d]">
            <div className="grid grid-cols-2 sm:grid-cols-3">
              <DetailItem label="Equipment" value={workout.equipment} />
              <DetailItem label="Difficulty" value={workout.difficulty} />
              <DetailItem label="Sets" value={String(workout.sets)} />
              <DetailItem label="Reps" value={workout.reps} />
              <DetailItem
                label="Duration"
                value={`${workout.duration} min`}
              />
              <DetailItem
                label="Calories"
                value={String(workout.caloriesBurned)}
              />
              <DetailItem label="Rating" value={`★ ${workout.rating}`} />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-4 rounded-xl border border-[#222630] bg-[#15171d] p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c2f800] text-xs font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-[#d1d5db]">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <WorkoutActions workout={workout} />
        </div>
      </section>
    </main>
  );
}

type DetailItemProps = {
  label: string;
  value: string;
};

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="border-b border-r border-[#222630] p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6b7280]">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );}