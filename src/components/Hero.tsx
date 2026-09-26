import Image from "next/image";
import Link from "next/link";

export default function Hero(){
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-12">
      <div className="grid items-center gap-10 rounded-2xl border border-[#222630] bg-[#15171d] p-8 md:grid-cols-[1fr_auto] md:p-[57px]">
        <div className="max-w-[576px]">
          <p className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-[#c2f800]">
            Workout Library
          </p>

          <h1 className="mt-5 font-[family-name:var(--font-oswald)] text-4xl font-extrabold uppercase leading-none tracking-[-1px] text-white sm:text-5xl md:text-[60px] md:leading-[60px] md:tracking-[-1.5px]">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-[512px] text-sm leading-6 text-[#9ca3af] sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <div className="mt-7">
            <Link
              href="#library"
              className="inline-flex items-center justify-center rounded-[6px] bg-[#c2f800] px-6 py-3 text-center text-[12px] font-bold uppercase leading-4 tracking-[0.3px] !text-black shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition hover:bg-[#c2f800] hover:!text-black"
            >
              Browse Workouts
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[334px]">
          <Image
            src="/assets/banner.png"
            alt="FitLog workout training"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 80vw, 334px"
          />
        </div>
      </div>
    </section>
  );}