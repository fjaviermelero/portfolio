import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de trazabilidad",
      image: "/images/proyecto1.jpg",
      link: "/project/DemandPrediction"
    },
    {
      title: "Automatización de almacén",
      image: "/images/proyecto2.jpg",
      link: "/project/DemandPrediction"
    },
    {
      title: "Integración Jenkins",
      image: "/images/proyecto3.jpg",
      link: "/project/DemandPrediction"
    }
  ];

  return (
    <section id="proyectos" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Destacados</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
