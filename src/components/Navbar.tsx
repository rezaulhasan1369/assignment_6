"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkoutState } from "@/context/WorkoutStateContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useWorkoutState();

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#1b1f28] bg-[#0f1115]">
      <nav className="mx-auto flex min-h-[67px] max-w-[1280px] items-center justify-between gap-4 px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
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

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              isWorkoutsActive
                ? "bg-[#1a2312] text-[#c2f800]"
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              isMyPlanActive
                ? "bg-[#1a2312] text-[#c2f800]"
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <Link
          href="/my-plan"
          className="flex shrink-0 items-center gap-4 text-xs"
        >
          <span className="flex items-center gap-2 text-[#d1d5db]">
            Plan
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c2f800] px-1 font-bold text-black">
              {plan.length}
            </span>
          </span>

          <span className="flex items-center gap-2 text-[#9ca3af]">
            Saved
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#2d313b] px-1 font-medium text-[#d1d5db]">
              {saved.length}
            </span>
          </span>
        </Link>
      </nav>
    </header>
  );
}