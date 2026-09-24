import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 pt-12">
      <div className="mx-auto grid min-h-[430px] max-w-[1280px] overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-14">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#c2f800]">
            Workout Library
          </p>

          <h1 className="max-w-[620px] font-[family-name:var(--font-oswald)] text-[44px] font-bold uppercase leading-[1.03] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[56px]">
            Train With Intent. Log
            <br />
            Every Set.
          </h1>

          <p className="mt-5 max-w-[500px] text-sm leading-6 text-[#9ca3af]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-7">
            <a
              href="#library"
              className="inline-flex items-center justify-center rounded-md bg-[#c2f800] px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#d2ff3d]"
            >
              Browse Workouts
            </a>
          </div>
        </div>

        <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[430px]">
          <Image
            src="/assets/banner.png"
            alt="Anatomical illustration of an athlete performing a workout"
            fill
            priority
            className="object-contain object-center p-6 lg:p-8"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}