export default function Logo({ scrolled }) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      {/* ÍCONO */}
      <svg
        viewBox="0 0 60 60"
        className={`transition-all duration-500 ${scrolled ? "w-10 h-10" : "w-14 h-14"}`}
      >
        <ellipse
          cx="30"
          cy="30"
          rx="26"
          ry="26"
          fill="none"
          stroke="#E8E3D6"
          strokeWidth="1.5"
        />
        <text
          x="30"
          y="39"
          textAnchor="middle"
         
          fontFamily= 'var(--font-playfair), Georgia, serif'
          fontSize="24"
          fill="#E8E3D6"
        >
          GA
        </text>
      </svg>

      {/* TEXTO */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif text-[#E8E3D6] tracking-wide transition-all duration-500 ${
            scrolled ? "text-lg" : "text-2xl"
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          GUERRA
        </span>
        <span
          className="text-[10px] tracking-[0.3em] text-[#C7A76C] mt-1"
        >
          Y ASOCIADOS
        </span>
      </div>
    </a>
  );
}