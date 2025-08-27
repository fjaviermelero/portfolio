export default function ExperienceSection() {
  const experiences = [
    {
      role: "Ingeniero de Industria 4.0",
      company: "Cofares",
      years: "2024 – Actualidad",
      details: [
        "Implementación de sistemas de trazabilidad en tiempo real",
        "Automatización de procesos logísticos con SAP S4",
        "Integración de Jenkins para despliegues continuos",
      ],
    },
    {
      role: "Consultor IT",
      company: "Empresa XYZ",
      years: "2022 – 2024",
      details: [
        "Migración de sistemas legacy a arquitecturas modernas",
        "Gestión de redundancia en infraestructuras críticas",
        "Optimización de almacenes automatizados",
      ],
    },
    {
      role: "Analista de Sistemas",
      company: "Empresa ABC",
      years: "2020 – 2022",
      details: [
        "Desarrollo de reportes automatizados",
        "Mantenimiento de sistemas legacy",
        "Participación en proyectos de digitalización",
      ],
    },
  ];

  return (
    <section id="experiencia" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-extrabold mb-20 text-center text-gray-800 dark:text-white">
        Mi Experiencia
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`mb-16 relative flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Punto de la timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 border-4 border-white rounded-full shadow-lg z-10"></div>

            {/* Tarjeta */}
            <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
              <p className="text-blue-600 font-medium mb-3">
                {exp.company} · {exp.years}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
