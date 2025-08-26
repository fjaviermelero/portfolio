export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        
        {/* Sección de contacto */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contacto</h3>
          <p>Email: contacto@miweb.com</p>
          <p>Tel: +34 600 123 456</p>
        </div>

        {/* Sección de enlaces */}
        <div>
          <h3 className="text-lg font-bold mb-4">Enlaces</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#" className="hover:text-gray-300">Servicios</a></li>
            <li><a href="#" className="hover:text-gray-300">Nosotros</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div>
          <h3 className="text-lg font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MiWeb. Todos los derechos reservados.
      </div>
    </footer>
  );
}
