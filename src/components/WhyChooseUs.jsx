"use client";

import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

export default function WhyChooseUs() {
  return (
    <AnimationWrapper>
      <section
        id="why"
        className="scroll-mt-[80px] py-20 bg-white"
      >
        <div className="max-w-[1240px] mx-auto px-6">

          {/* Título */}

          <div className="text-center mb-16">
            <h2
              className="text-[36px] md:text-[42px] font-light tracking-wide text-black"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              POR QUÉ ELEGIRNOS
            </h2>
          </div>

          {/* Contenido */}

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Imágenes superpuestas */}

            <div className="relative w-full h-[480px]">
              <div className="absolute top-0 left-0 w-[85%] h-[380px] overflow-hidden">
                <Image
                  src="/images/reunion1.avif"
                  alt="Reunión con cliente"
                  fill
                  sizes="(max-width:1024px)85vw,45vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[55%] h-[200px] overflow-hidden border-[6px] border-white shadow-lg">
                <Image
                  src="/images/manoestrechada1.avif"
                  alt="Acuerdo con cliente"
                  fill
                  sizes="(max-width:1024px)55vw,25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Texto */}

            <div className="flex flex-col gap-10">

              <div>
                <h3 className="text-[22px] font-bold text-black mb-3">
                  Enfoque personalizado
                </h3>
                <p className="text-[15px] leading-7 text-gray-500">
                  Analizamos cada caso en profundidad para ofrecerte una
                  estrategia legal a medida de tu situación.
                </p>
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-black mb-3">
                  Trayectoria y experiencia
                </h3>
                <p className="text-[15px] leading-7 text-gray-500">
                  Contamos con años de trayectoria en distintas áreas del
                  derecho, brindando soluciones sólidas y confiables.
                </p>
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-black mb-3">
                  Comunicación cercana
                </h3>
                <p className="text-[15px] leading-7 text-gray-500">
                  Te mantenemos informado en cada etapa de tu caso, con un
                  trato claro, directo y accesible.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </AnimationWrapper>
  );
}