export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      {/* Background */}

      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/hero.png')",
  }}
/>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}

      <div className="relative z-10 max-w-[1240px] mx-auto h-full px-6">

  <div className="absolute left-10 md:left-24 lg:left-40 bottom-16 md:bottom-24 lg:bottom-32 max-w-[430px]">
          <h1
            className="
    text-white
    text-[32px]
    font-extrabold
    leading-[50px]
    uppercase
  "
            style={{
              textShadow: "0px 0px 6px rgba(0,0,0,0.74)",
            }}
          >
            ESTRATEGIA <br />Y ACOMPAÑAMIENTO
          </h1>

          <p className="text-white mt-6 text-[15px] leading-7 max-w-[450px]">
            Brindamos asesoramiento jurídico integral, acompañando cada proceso
            con compromiso y experiencia.
          </p>

          <a
  href="#contact"
  className="
    inline-flex
    items-center
    justify-center
    mt-8
    bg-[#213759]
    text-white
    h-[32px]
    px-[26px]
    text-[11px]
    font-medium
    rounded-[3px]
    leading-[32px]
    whitespace-nowrap
    transition-all
    duration-300
    ease-in-out
    hover:bg-white
    hover:text-[#213759]
  "
  style={{
    fontFamily: "Roboto, sans-serif",
  }}
>
  SOLICITAR CONSULTA
</a>
        </div>
      </div>
    </section>
  );
}
