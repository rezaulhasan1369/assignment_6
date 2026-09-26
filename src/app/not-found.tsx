import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[1280px] items-center justify-center px-6 py-20">
      <section className="w-full max-w-2xl text-center">
        <p className="font-[family-name:var(--font-oswald)] text-8xl font-bold leading-none text-[#c2f800] sm:text-9xl">
          404
        </p>

        <h1 className="mt-6 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl">
          Workout Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#9ca3af] sm:text-base">
          The workout or page you&apos;re looking for doesn&apos;t exist.
          Head back to the library and choose another workout.
        </p>

        <Link
          href="/#library"
          className="mt-8 inline-flex items-center justify-center rounded-[6px] bg-[#c2f800] px-6 py-3 text-[12px] font-bold uppercase leading-4 tracking-[0.3px] !text-black transition-opacity hover:opacity-90"
        >
          Browse Workouts
        </Link>
      </section>
    </main>
  );
}