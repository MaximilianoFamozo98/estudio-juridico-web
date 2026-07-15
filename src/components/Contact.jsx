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

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <AnimationWrapper>
      <section
        id="contact"
        className="scroll-mt-[80px] bg-[#F6F2EA] min-h-screen py-28 flex items-center justify-center"
      >
        <div className="max-w-[820px] w-full px-6">
          {/* Header */}

          <div className="text-center mb-16">
            <h2 className="text-[48px] font-light tracking-tight text-[#1F2A40] mb-10">
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
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                value={formData.name}
                onChange={handleChange}
                className="h-[46px] border border-gray-400 bg-white px-4 outline-none transition-all duration-300 focus:border-[#213759] focus:ring-1 focus:ring-[#213759]"
              />

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="h-[46px] border border-gray-400 bg-white px-4 outline-none transition-all duration-300 focus:border-[#213759] focus:ring-1 focus:ring-[#213759]"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full h-[46px] border border-gray-400 bg-white px-4 outline-none transition-all duration-300 focus:border-[#213759] focus:ring-1 focus:ring-[#213759]"
            />

            <textarea
              name="message"
              placeholder="Mensaje"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[150px] border border-gray-400 bg-white p-4 outline-none resize-none transition-all duration-300 focus:border-[#213759] focus:ring-1 focus:ring-[#213759]"
            />

            <div className="flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#213759] text-white w-[105px] h-[34px] px-[28px] text-[11px] font-medium rounded-[3px] transition-all duration-300 hover:bg-white hover:text-[#213759] hover:border hover:border-[#213759] hover:shadow-md shadow-sm disabled:opacity-50"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                {status === "loading" ? "ENVIANDO..." : "ENVIAR"}
              </button>

              {status === "success" && (
                <p className="text-[13px] text-green-700">
                  ¡Mensaje enviado! Te contactaremos a la brevedad.
                </p>
              )}
              {status === "error" && (
                <p className="text-[13px] text-red-600">
                  Ocurrió un error. Intentá nuevamente o escribinos por WhatsApp.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </AnimationWrapper>
  );
}