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
    <section className="flex flex-col justify-center items-center h-screen text-white text-center px-4"
      style={{
        background: "linear-gradient(180deg, #1e3a8a, #4338ca, #6366f1)"
      }}
      >

      {/* Animación del texto */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi! I am <span className="text-indigo-300">Francisco Melero</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-2 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
      4.0 Industry Data Expert | Process and Project Engineer
      </motion.p>


      <motion.div
        className="flex items-center gap-2 text-sm md:text-base text-indigo-200 mt-2 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span className="px-3 py-1 bg-indigo-700/40 rounded-full backdrop-blur-sm shadow-sm mb-10">
          📍 Based in Madrid
        </span>
      </motion.div>

      {/* Botón scroll */}
      <motion.button
        onClick={scrollToSection}
        className="flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-semibold shadow-lg transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        See my Experience
        <ChevronDown className="animate-bounce" />
      </motion.button>
    </section>
  );
}
