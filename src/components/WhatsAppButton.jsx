import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "5491167239832";
  const message = "Hola, quisiera hacer una consulta legal.";

  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
}