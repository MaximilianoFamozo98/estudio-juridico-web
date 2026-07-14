import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL("https://tudominio.com"),

  title: "Estudio Jurídico Fernández | Abogados en Buenos Aires",

  description:
    "Asesoramiento legal profesional en derecho civil, laboral, penal y comercial.",

  keywords: [
    "abogado",
    "estudio jurídico",
    "derecho laboral",
    "abogado penal",
    "abogado civil",
  ],

  authors: [
    {
      name: "Estudio Jurídico Fernández",
    },
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Estudio Jurídico Fernández",
    description: "Asesoramiento legal integral y personalizado.",
    url: "https://tudominio.com",
    siteName: "Estudio Jurídico Fernández",
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico Fernández",
    description: "Asesoramiento legal profesional",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://tudominio.com",
  },

  themeColor: "#1F2A40",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}