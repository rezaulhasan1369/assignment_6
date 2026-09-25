import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types/workout";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block"
      aria-label={`View details for ${workout.name}`}
    >
      <article className="h-full overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#39421f]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#20251b] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#c2f800]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase text-white">
            {workout.name}
          </h3>

          <p className="mt-2 text-xs text-[#9ca3af]">
            {workout.equipment}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#222630] pt-4">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#6b7280]">
                Duration
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {workout.duration} min
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#6b7280]">
                Calories
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {workout.caloriesBurned}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#6b7280]">
                Rating
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                ★ {workout.rating}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}