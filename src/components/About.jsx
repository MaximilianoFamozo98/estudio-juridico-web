import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";

export default function About() {
  return (
    <AnimationWrapper>
      <section id="about" className="scroll-mt-[80px] py-32 flex justify-center" style={{ border: "5px solid red" }}>
        <div className="max-w-[1240px] w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20 items-center">

            {/* Texto */}
            <div>
              <span className="text-[13px] tracking-[0.2em] font-medium text-[#C7A76C] uppercase">
                Quiénes somos
              </span>

              <h2 className="mt-4 text-[36px] md:text-[42px] font-medium text-[#1F2A40] leading-tight">
                Compromiso y
                <br />
                representación cercana
              </h2>

              <p className="mt-6 text-gray-600 text-[15px] leading-8">
                Nuestro equipo de abogados combina experiencia jurídica con
                una atención personalizada. Entendemos que detrás de cada
                caso hay una persona y una situación particular, por eso
                trabajamos con un enfoque a medida, acompañándote en cada
                etapa del proceso.
              </p>

              <p className="mt-4 text-gray-600 text-[15px] leading-8">
                Nuestra trayectoria y la confianza de quienes nos eligen
                reflejan nuestro compromiso con un ejercicio profesional
                serio, responsable y cercano.
              </p>
            </div>

            {/* Imagen */}
            <div className="relative h-[400px] md:h-[540px] overflow-hidden">
              <Image
                src="/images/reunion2.png"
                alt="Equipo del estudio"
                fill
                sizes="(max-width:768px)100vw,50vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}