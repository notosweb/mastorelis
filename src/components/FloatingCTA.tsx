"use client";

export default function FloatingCTA() {
  return (
    <a
      href="viber://chat?number=%2B306971843971"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#7360F2] flex items-center justify-center shadow-lg shadow-[#7360F2]/30 hover:scale-110 transition-transform"
      aria-label="Viber"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M18.6 6.82a10.37 10.37 0 0 0-5.77-2.65c-.1-.01-.2-.02-.31-.02a11.66 11.66 0 0 0-4.9.63A8.62 8.62 0 0 0 4.1 7.83a7.45 7.45 0 0 0-.84 4.35 9.32 9.32 0 0 0 1.78 4.48l-.01.01-.9 3.24 3.36-.87a12.3 12.3 0 0 0 4.5 1.16h.38a9.73 9.73 0 0 0 4.55-1.07 7.66 7.66 0 0 0 3.36-3.76 7.18 7.18 0 0 0 .5-3.59 9.14 9.14 0 0 0-2.17-4.96z"/>
      </svg>
    </a>
  );
}
