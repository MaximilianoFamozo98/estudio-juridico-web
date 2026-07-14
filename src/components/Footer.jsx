import AnimationWrapper from "./AnimationWrapper";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <AnimationWrapper>
      <footer className="bg-[#1F2A40]">
        {/* Redes */}

        <div className="py-28">
          <div className="flex justify-center items-center gap-12 text-[#E8D7B9] text-[44px]">
            <a
              href="https://www.instagram.com/guerra.abogados"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-white hover:-translate-y-1"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="transition-all duration-300 hover:text-white hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="transition-all duration-300 hover:text-white hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Línea */}

        <div className="border-t border-white/10"></div>

        {/* Copyright */}

        <div className="py-8">
          <p className="text-center text-[14px] text-[#BFC5D2]">
            © 2026 Guerra y Asociados | Todos los derechos reservados
          </p>
        </div>
      </footer>
    </AnimationWrapper>
  );
}
