"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center p-5 bg-[#060a14] text-[#e6ecf7]">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="mt-2 text-sm text-[#8b98b3]">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:opacity-90"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
