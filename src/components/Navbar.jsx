"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Por qué elegirnos", href: "#why" },
    { name: "Servicios", href: "#services" },
    { name: "Equipo", href: "#team" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ease-in-out
        ${
          scrolled
            ? "h-[78px] bg-[#1F2A40]/95 backdrop-blur-md shadow-lg"
            : "h-[100px] bg-[#1F2A40]"
        }
      `}
    >
      <div className="max-w-[1400px] mx-auto h-full px-10 flex items-center">
        {/* LOGO */}

        <div className="flex-shrink-0">
          <Logo scrolled={scrolled} />
        </div>

        {/* MENU */}

        <nav className="flex-1 flex justify-center">
          <ul className="flex items-center gap-12">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="
                    uppercase
                    text-[12px]
                    tracking-[0.12em]
                    font-medium
                    text-[#E8E3D6]
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {item.name}
                </a>

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-[#C7A76C]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
