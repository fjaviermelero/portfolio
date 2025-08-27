import ProjectCard from "./ProjectCard";
import tempSeries from "../assets/images/TempSeries.png"; // importa tus imágenes aquí

export default function ProjectsSection() {
  const projects = [
    { title: "Sistema de trazabilidad", image: tempSeries, link: "/project/DemandPrediction" },
    { title: "Automatización de almacén", image: tempSeries, link: "/project/DemandPrediction" },
    { title: "Integración Jenkins", image: tempSeries, link: "/project/DemandPrediction" },
    { title: "Proyecto Extra", image: tempSeries, link: "/project/DemandPrediction" },
  ];

  // Determinar número de columnas dinámicamente según cantidad de proyectos
  const columnsClass = projects.length <= 2
    ? "grid-cols-2"
    : projects.length === 3
    ? "grid-cols-3"
    : "grid-cols-4";

  return (
    <section id="proyectos" className="container mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
      My Projects
    </h2>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:${columnsClass} gap-8 justify-center`}>
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
