import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = () => {
    const section = document.getElementById("experiencia");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 text-white text-center px-4">
      {/* Animación del texto */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ¡Hola! Soy <span className="text-indigo-300">Tu Nombre</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Ingeniero de Industria 4.0 | Apasionado por la automatización, la tecnología y la innovación digital
      </motion.p>

      {/* Botón scroll */}
      <motion.button
        onClick={scrollToSection}
        className="flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-semibold shadow-lg transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Ver mi experiencia
        <ChevronDown className="animate-bounce" />
      </motion.button>
    </section>
  );
}
