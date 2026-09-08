"use client";

export default function WhatsAppButton() {
  const phoneNumber = "971565564136";
  const defaultMessage = encodeURIComponent(
    "Hi Stibin, I saw your portfolio and would like to connect regarding a project / opportunity."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Quick Contact"
      className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp chat with Stibin Augustine"
        className="group relative flex size-12 sm:size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/35 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/50 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
      >
        {/* Continuous Radar Pulse Waves */}
        <span
          className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-3 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none"
          aria-hidden="true"
        />

        {/* Live Status Badge */}
        <span
          className="absolute -top-0.5 -right-0.5 flex size-3.5 items-center justify-center rounded-full bg-white dark:bg-slate-900 ring-1 ring-white"
          aria-hidden="true"
        >
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
        </span>

        {/* WhatsApp Vector Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 sm:size-7 transition-transform duration-300 group-hover:rotate-6"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.21 8.21 0 0 1-1.26-4.48c0-4.54 3.7-8.24 8.24-8.24zm4.79 11.66c-.2-.1-.18-.09-.98-.49-.79-.4-1.04-.4-1.18-.18-.14.2-.55.69-.67.83-.12.14-.24.16-.44.06-.2-.1-.85-.31-1.63-1-.6-.53-1.01-1.19-1.13-1.39-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.35.1-.12.14-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.45-1.09-.62-1.5-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.35.05-.53.25-.19.2-.71.7-.71 1.7 0 1 .73 1.97.83 2.11.1.14 1.43 2.19 3.47 3.07.49.21.87.33 1.16.43.49.16.94.13 1.3.08.39-.06 1.2-.49 1.37-.96.17-.48.17-.89.12-.98-.05-.1-.19-.15-.39-.25z" />
        </svg>

        {/* Hover Pill Label for Desktop */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-(--border) bg-(--surface-2)/95 px-3.5 py-1.5 text-xs font-semibold text-(--foreground) opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1 sm:inline-block"
        >
          💬 Chat with Stibin on WhatsApp
        </span>
      </a>
    </aside>
  );
}
