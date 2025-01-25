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
    <path d="M12 3a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V7a4 4 0 0 0-4-4z" />
    <path d="M12 11v10" />
    <path d="M9 17l3 3 3-3" />
    <path d="M8 7h8" />
    <circle cx="10" cy="6" r="1" />
    <circle cx="14" cy="6" r="1" />
  </svg>
);

export default Penguin;