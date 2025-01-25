const Penguin = () => (
  <svg
    className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity duration-300 hover:animate-scale-up"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5Z" />
    <path d="M12 10v6" />
    <path d="M8 16h8" />
    <path d="M9 20h6" />
    <circle cx="10" cy="7" r="1" fill="currentColor" />
    <circle cx="14" cy="7" r="1" fill="currentColor" />
  </svg>
);

export default Penguin;