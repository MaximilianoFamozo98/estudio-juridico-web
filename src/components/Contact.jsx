"use client";

import { useState } from "react";
import AnimationWrapper from "./AnimationWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    alert("Formulario enviado");
  }

  return (
    <AnimationWrapper>
      <section
        id="contact"
        className="
    scroll-mt-[80px]
    bg-[#F6F2EA]
    min-h-screen
py-28
    flex
    items-center
    justify-center
    
  "
      >
        <div className="max-w-[820px] w-full px-6">
          {/* Header */}

          <div className="text-center mb-16">
            <h2 className="text-[48px] font-light tracking-tight text-[#1F2A40] mb-80">
              Contacto
            </h2>

            <h3 className="text-[27px] font-light leading-tight text-[#1F2A40] mb-10">
              ¿Necesitás asesoramiento legal?
            </h3>

            <p className="text-[15px] text-gray-600 leading-7">
              Contactanos para analizar tu caso y recibir orientación
              profesional.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Nombre - Email */}

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="
                  h-[46px]
                  border
                  border-gray-400
                  bg-white
                  px-4
                  outline-none
                  transition-all
duration-300
focus:border-[#213759]
focus:ring-1
focus:ring-[#213759]

                "
              />

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="
                  h-[46px]
                  border
                  border-gray-400
                  bg-white
                  px-4
                  outline-none
                  transition-all
duration-300
focus:border-[#213759]
focus:ring-1
focus:ring-[#213759]
                "
              />
            </div>

            {/* Asunto */}

            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              className="
                w-full
                h-[46px]
                border
                border-gray-400
                bg-white
                px-4
                outline-none
                transition-all
duration-300
focus:border-[#213759]
focus:ring-1
focus:ring-[#213759]
              "
            />

            {/* Mensaje */}

            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              className="
                w-full
                h-[150px]
                border
                border-gray-400
                bg-white
                p-4
                outline-none
                resize-none
                transition-all
duration-300
focus:border-[#213759]
focus:ring-1
focus:ring-[#213759]
              "
            />

            {/* Botón */}

            <div className="flex justify-center">
              <button
                type="submit"
                className="
                  bg-[#213759]
                  text-white
                  w-[105px]
h-[34px]
                  px-[28px]
                  text-[11px]
                  font-medium
                  rounded-[3px]
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#213759]
                  hover:border
                  hover:border-[#213759]
                  hover:shadow-md
                  shadow-sm
                "
                style={{
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </section>
    </AnimationWrapper>
  );
}
