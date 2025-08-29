import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-indigo-400">Francisco Melero</h3>
          <p className="text-gray-400 text-sm">Industry 4.0 Data Expert</p>
        </div>

        {/* Links */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a 
            href="https://www.linkedin.com/in/francisco-javier-melero-bb4337147/" 
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-300 transition"
          >
            <Linkedin className="w-5 h-5" /> 
            <span>LinkedIn</span>
          </a>

          <a 
            href="mailto:franciscomelero@gmail.com" 
            className="flex items-center gap-2 hover:text-indigo-300 transition"
          >
            <Mail className="w-5 h-5" /> 
            <span>Email</span>
          </a>

          <a 
            href="https://github.com/fjaviermelero" 
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-300 transition"
          >
            <Github className="w-5 h-5" /> 
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Línea separadora + copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Francisco Javier Melero Alegría.
      </div>
    </footer>
  );
}
