import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar menú móvil al hacer click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">MiLogo</div>

          {/* Menú escritorio */}
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-gray-200">Inicio</a>
            <a href="#experiencia" className="hover:text-gray-200">Experiencia</a>
            <a href="#proyectos" className="hover:text-gray-200">Proyectos</a>
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
            Experiencia
          </a>
          <a
            href="#proyectos"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={handleLinkClick}
          >
            Proyectos
          </a>
        </div>
      )}
    </nav>
  );
}
