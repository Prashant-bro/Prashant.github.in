export default function Loading() {
  return (
    <div className="section-card line-shimmer mx-auto mt-6 flex min-h-[58vh] w-full max-w-5xl items-center justify-center px-6 py-16 sm:px-10">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#0f766e3b] border-t-[#0f766e]" />
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0f766e]">Loading</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#153038] sm:text-3xl">
            Preparing your experience
          </h2>
          <p className="subtle-copy mt-2 text-sm sm:text-base">
            Bringing in projects, profile details, and latest updates.
          </p>
        </div>
      </div>
    </div>
  )
}
