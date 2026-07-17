import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

export default function Team() {
  return (
    <AnimationWrapper>
      <section id="team" className="scroll-mt-[80px] py-32 bg-white flex justify-center">
        <div className="max-w-[1240px] w-full px-6">
          {/* Título */}

          <div className="text-center mb-24">
            <h2
              className="text-[56px] font-light text-[#1F2A40]"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              EQUIPO
            </h2>
          </div>

          {/* Contenido */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full h-[540px] overflow-hidden">
              <Image
                src="/images/imagenteam.jpeg"
                alt="Equipo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Texto */}

            <div>
              <h3 className="text-[52px] font-bold leading-[58px] text-[#23385B] mb-12">
                Profesionales
                <br />
                especializados en
                <br />
                distintas áreas del
                <br />
                derecho.
              </h3>

              <p className="text-[20px] font-semibold text-[#1F2A40] leading-9 mb-10">
                Nuestro equipo está integrado por abogados con experiencia en
                diversas materias jurídicas.
              </p>

              <p className="text-[18px] text-gray-600 leading-9 mb-8">
                Trabajamos de manera coordinada para brindar soluciones
                integrales y acompañar a cada cliente con cercanía, compromiso y
                profesionalismo.
              </p>

              <p className="text-[18px] text-gray-600 leading-9">
                Nos ocupamos de que siempre estés informado sobre el avance de
                tu caso y de que cada decisión se tome con claridad y confianza.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}
