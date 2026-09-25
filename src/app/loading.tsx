export default function Loading() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-[1280px] px-6 py-16">
      <div className="animate-pulse">
        <div className="h-3 w-28 rounded bg-[#29301f]" />

        <div className="mt-5 h-10 w-64 max-w-full rounded bg-[#20232b]" />

        <div className="mt-4 h-4 w-full max-w-xl rounded bg-[#20232b]" />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d]"
            >
              <div className="aspect-[16/10] bg-[#20232b]" />

              <div className="p-5">
                <div className="h-5 w-24 rounded bg-[#29301f]" />
                <div className="mt-4 h-7 w-3/4 rounded bg-[#20232b]" />
                <div className="mt-3 h-4 w-1/2 rounded bg-[#20232b]" />

                <div className="mt-6 h-12 rounded bg-[#20232b]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}