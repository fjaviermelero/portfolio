import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            MiLogo
          </div>

          {/* Menu escritorio */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Inicio</a>
            <a href="#" className="hover:text-gray-200">Servicios</a>
            <a href="#" className="hover:text-gray-200">Nosotros</a>
            <a href="#" className="hover:text-gray-200">Contacto</a>
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
          <a href="#" className="block px-4 py-2 hover:bg-blue-500">Inicio</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-500">Servicios</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-500">Nosotros</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-500">Contacto</a>
        </div>
      )}
    </nav>
  );
}
