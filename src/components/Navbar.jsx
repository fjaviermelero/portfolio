import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Branding tipo footer */}
          <div className="flex flex-col items-center md:items-start justify-center px-4 py-2">
            <span
              className="text-indigo-400 font-bold text-base tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Francisco Melero
            </span>
            <span className="text-gray-400 text-xs md:text-sm">
              Industry 4.0 Data Expert
            </span>
          </div>

          {/* Menú escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <HashLink
              smooth
              to="/#home"
              className="hover:text-indigo-300 transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#experience"
              className="hover:text-indigo-300 transition-colors"
              onClick={handleLinkClick}
            >
              Experience
            </HashLink>

            {/* Dropdown proyectos */}
            <div className="relative">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="flex items-center gap-1 hover:text-indigo-300 transition-colors"
              >
                Projects <ChevronDown className="w-4 h-4" />
              </button>
              {isProjectsOpen && (
                <div className="absolute mt-2 bg-gray-900 rounded-md shadow-lg min-w-max py-2">
                  <Link
                    to="/project/IndustrialPrediction"
                    className="block px-6 py-2 hover:bg-gray-700 whitespace-nowrap"
                    onClick={handleLinkClick}
                  >
                    Industrial Workload Predictor
                  </Link>
                  <HashLink
                    smooth
                    to="/project/ChatCoach"
                    className="block px-6 py-2 hover:bg-gray-700 whitespace-nowrap"
                    onClick={handleLinkClick}
                  >
                    ChatCoach
                  </HashLink>
                </div>
              )}
            </div>

            {/* Contacto */}
            <HashLink
              smooth
              to="/#contact"
              className="hover:text-indigo-300 transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </HashLink>
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
        <div className="md:hidden bg-gray-900">
          <HashLink
            smooth
            to="/#home"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={handleLinkClick}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#experience"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={handleLinkClick}
          >
            Experience
          </HashLink>

          {/* Submenú móvil proyectos */}
          <div>
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-700"
            >
              Projects{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isProjectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProjectsOpen && (
              <div className="bg-gray-800">
                <Link
                  to="/project/IndustrialPrediction"
                  className="block px-6 py-2 hover:bg-gray-700 whitespace-nowrap"
                  onClick={handleLinkClick}
                >
                  Industrial Workload Predictor
                </Link>
                <HashLink
                  smooth
                  to="/project/ChatCoach"
                  className="block px-6 py-2 hover:bg-gray-700 whitespace-nowrap"
                  onClick={handleLinkClick}
                >
                  ChatCoach
                </HashLink>
              </div>
            )}
          </div>

          {/* Contacto móvil */}
          <HashLink
            smooth
            to="/#contact"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={handleLinkClick}
          >
            Contact
          </HashLink>
        </div>
      )}
    </nav>
  );
}
