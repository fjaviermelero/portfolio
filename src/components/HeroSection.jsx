import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = () => {
    const section = document.getElementById("experience");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex flex-col justify-center items-center h-screen text-white text-center px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e3a8a, #4338ca, #6366f1)",
      }}
    >
      {/* Efecto de fondo animado */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Contenido */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi! I am {" "}
        <span className="text-indigo-200">Francisco Melero</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-4 max-w-2xl text-indigo-100 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        4.0 Industry Data Expert | Process & Project Engineer
      </motion.p>

      <motion.div
        className="flex items-center gap-2 text-sm md:text-base text-indigo-200 mt-2 mb-10 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span className="px-4 py-2 bg-indigo-800/40 rounded-full backdrop-blur-sm shadow-md border border-indigo-500/30">
          📍 Based in Madrid
        </span>
      </motion.div>

      {/* Botón scroll */}
      <motion.button
        onClick={scrollToSection}
        className="flex items-center gap-2 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-semibold shadow-lg transition relative z-10 hover:shadow-indigo-400/40 hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        See my Experience
        <ChevronDown className="animate-bounce" />
      </motion.button>
    </section>
  );
}
