import ProjectCard from "./ProjectCard";
import IndustrialPredictionImage from "../assets/images/IndustrialPrediction.png";
import ChatCoachImage from "../assets/images/ChatCoach.jpg";

export default function ProjectsSection() {
  const projects = [
    { title: "Industrial Workload Predictor", image: IndustrialPredictionImage, link: "/project/IndustrialPrediction" },
    { title: "ChatCoach", image: ChatCoachImage, link: "/project/NotFound" },
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
      Some of my  Projects
    </h2>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:${columnsClass} gap-8 justify-center`}>
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
