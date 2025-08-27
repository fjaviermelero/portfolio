export default function ExperienceSection() {
  const experiences = [
    {
      role: "Industry 4.0 Engineer",
      company: "COFARES (Spain)",
      years: "2025 – Now",
      details: [
        "Data ",
        "Product Owner",
        "Integración de Jenkins para despliegues continuos",
      ],
    },
    {
      role: "Industrial Internet Of Things (IIOT) Responsible",
      company: "STEELCASE (Spain)",
      years: "2022 – 2025",
      details: [
        "Management of Industrial data acquisition Infrastructure",
        "Process Improvement through production Data Analysys",
        "Responsible for Cost Reduction initiatives in Madrid plant ",
      ],
    },
    {
      role: "Project / Process Engineer",
      company: "ANTOLIN GROUP (UK + Germany)",
      years: " 2017 – 2022",
      details: [
        "Project management for manufacturing process",
        "Serial production process improvement for Door panels",
        "Clients: Toyota, BMW, Volkswagen, Audi",
      ],
    },
  ];

  return (
    <section id="experiencia" className="bg-gray-900 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
        My Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`mb-16 relative flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Punto de la timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 border-4 border-gray-900 rounded-full shadow-lg z-10"></div>

            {/* Tarjeta */}
            <div className="w-full md:w-1/2 bg-gray-800 text-gray-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <p className="text-blue-400 font-medium mb-3">
                {exp.company} · {exp.years}
              </p>
              <ul className="list-disc list-inside space-y-2">
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
