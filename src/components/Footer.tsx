import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1b1f28] bg-[#0f1115]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md bg-[#c2f800] font-bold text-black"
            aria-hidden="true"
          >
            +
          </span>

          <span className="font-[family-name:var(--font-oswald)] text-xl font-bold tracking-[0.05em] text-white">
            FITLOG
          </span>
        </Link>

        <p className="text-xs text-[#6b7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}