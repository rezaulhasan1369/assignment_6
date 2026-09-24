import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-[1280px] scroll-mt-24 px-6 py-20"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2f800]">
          Workout Library
        </p>

        <h2 className="mt-3 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white">
          The Library
        </h2>

        <p className="mt-4 text-sm text-[#9ca3af]">
          Workout cards will be added in the next development stage.
        </p>
      </section>
    </main>
  );
}