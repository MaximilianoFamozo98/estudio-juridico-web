import AnimationWrapper from "./AnimationWrapper";

export default function Services() {
  const services = [
    {
      title: "Familia",
      description:
        "Alimentos, régimen de comunicación, cuidado personal, divorcios, violencia familiar, acuerdos y ejecución de alimentos.",
    },
    {
      title: "Civil y comercial",
      description:
        "Contratos, deudas, incumplimientos, cartas documento y reclamos civiles.",
    },
    {
      title: "Penal",
      description:
        "Denuncias, defensas, lesiones, amenazas, violencia y urgencias.",
    },
    {
      title: "Sucesiones",
      description:
        "Herencias, declaratoria de herederos, bienes, autos, inmuebles y cuentas bancarias.",
    },
    {
      title: "Laboral",
      description:
        "Despidos, trabajo en negro, diferencias salariales, indemnizaciones, ART y accidentes de tránsito.",
    },
    {
      title: "Tributario",
      description:
        "ARCA/ex AFIP, monotributo, deudas fiscales, intimaciones, multas, inspecciones y ejecuciones fiscales. Penal tributario: evasión, facturación apócrifa y causas fiscales complejas.",
    },
    {
      title: "Defensa del consumidor",
      description:
        "Reclamos contra empresas, bancos, financieras, tarjetas, garantías y planes de ahorro.",
    },
    {
      title: "Inmobiliario/alquileres",
      description:
        "Contratos, problemas con propietarios o inquilinos y desalojos.",
    },
  ];

  return (
    <AnimationWrapper>
      <section
        id="services"
        className="scroll-mt-[80px] py-28 flex justify-center"
      >
        <div className="max-w-[1200px] w-full px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-[32px] md:text-[46px] font-light uppercase tracking-[2px] text-[#1F2A40] mb-6">
              Servicios
            </h2>

            <p className="w-full max-w-[760px] text-[14px] md:text-[15px] leading-6 md:leading-7 text-gray-700">
              Priorizamos las necesidades de nuestros clientes, brindando
              asesoramiento y representación legal en distintas áreas del
              derecho.
            </p>
          </div>

          {/* Servicios */}
         <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-20 place-items-center">
  {services.map((service, index) => (
    <div key={index} className="flex flex-col items-center text-center px-4">
      <div className="mb-4 md:mb-5 text-xl md:text-2xl text-[#30476D]">✓</div>

      <h3 className="text-[16px] md:text-[17px] font-semibold text-[#1F2A40] mb-3 md:mb-4">
        {service.title}
      </h3>

      <p className="text-gray-500 leading-6 text-[13px] md:text-[14px] max-w-[420px]">
        {service.description}
      </p>
    </div>
  ))}
</div>
        </div>
      </section>
    </AnimationWrapper>
  );
}
