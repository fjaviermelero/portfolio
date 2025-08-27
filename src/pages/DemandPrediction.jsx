import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DemandPrediction() {
  const { projectId } = useParams();

  // Aquí podrías cargar datos dinámicamente según projectId
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-20">
      <Navbar />
      
      <h1 className="text-4xl font-bold mb-4">Proyecto: {projectId}</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Aquí irá la descripción detallada del proyecto, imágenes, tecnologías usadas, retos y logros.
      </p>
    </div>
  );
}
