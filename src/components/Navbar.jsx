import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // desplegable proyectos

  // Función para cerrar menú móvil al hacer click
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
            FM
          </div>

          {/* Menú escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="hover:text-gray-200 transition-colors">
              Home
            </a>
            <a href="#experiencia" className="hover:text-gray-200 transition-colors">
              Experience
            </a>

            {/* Dropdown proyectos */}
            <div className="relative">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="flex items-center gap-1 hover:text-gray-200 transition-colors"
              >
                Projects <ChevronDown className="w-4 h-4" />
              </button>
              {isProjectsOpen && (
                <div className="absolute mt-2 bg-blue-700 rounded-md shadow-lg min-w-max py-2">
                  <a
                    href="#proyecto1"
                    className="block px-6 py-2 hover:bg-blue-500 whitespace-nowrap"
                    onClick={handleLinkClick}
                  >
                    Industrial Workload Predictor
                  </a>
                  <a
                    href="#proyecto2"
                    className="block px-6 py-2 hover:bg-blue-500 whitespace-nowrap"
                    onClick={handleLinkClick}
                  >
                    ChatCoach
                  </a>
                </div>
              )}
            </div>

            {/* Contacto */}
            <a
              href="#contacto"
              className="hover:text-gray-200 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a
            href="#inicio"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={handleLinkClick}
          >
            Inicio
          </a>
          <a
            href="#experiencia"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={handleLinkClick}
          >
            Experience
          </a>

          {/* Submenú móvil proyectos */}
          <div>
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-blue-500"
            >
              Projects{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isProjectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProjectsOpen && (
              <div className="bg-blue-600">
                <a
                  href="#proyecto1"
                  className="block px-6 py-2 hover:bg-blue-500 whitespace-nowrap"
                  onClick={handleLinkClick}
                >
                  Industrial Workload Predictor
                </a>
                <a
                  href="#proyecto2"
                  className="block px-6 py-2 hover:bg-blue-500 whitespace-nowrap"
                  onClick={handleLinkClick}
                >
                  ChatCoach
                </a>
              </div>
            )}
          </div>

          {/* Contacto móvil */}
          <a
            href="#contacto"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
