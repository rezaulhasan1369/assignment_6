"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;}) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[1280px] items-center justify-center px-6 py-20">
      <section className="w-full max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c2f800]">
          Something Went Wrong
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-oswald)] text-4xl font-bold uppercase text-white sm:text-5xl">
          We couldn&apos;t load this page
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#9ca3af] sm:text-base">
          An unexpected error occurred. Try loading the page again.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-[6px] bg-[#c2f800] px-6 py-3 text-[12px] font-bold uppercase leading-4 tracking-[0.3px] !text-black transition-opacity hover:opacity-90"
        >
          Try Again
        </button>
      </section>
    </main>
  );}