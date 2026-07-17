"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo.jsx"; // Ajustá la ruta según dónde esté tu componente
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "h-[78px] bg-[#1F2A40]/95 backdrop-blur-md shadow-lg"
            : "h-[100px] bg-[#1F2A40]"
        }
      `}
    >
      <div className="max-w-[1400px] mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Logo scrolled={scrolled} />
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-12">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="uppercase text-[12px] tracking-[0.12em] font-medium text-[#E8E3D6] transition-colors duration-300 hover:text-white"
                >
                  {item.name}
                </Link>

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#C7A76C] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#E8E3D6] text-3xl z-50 pr-4"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`
          lg:hidden fixed top-0 left-0 w-full h-screen bg-[#1F2A40]
          flex flex-col items-center justify-center gap-8
          transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="uppercase text-[18px] tracking-[0.12em] font-medium text-[#E8E3D6] hover:text-white transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}