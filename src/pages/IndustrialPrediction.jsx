import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DemandPrediction() {
  const { projectId } = useParams();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar ocupa todo el ancho */}
      <Navbar />

      {/* Contenido principal centrado y con padding horizontal */}
      <main className="pt-20 max-w-6xl mx-auto px-4 space-y-12">
        {/* Título del proyecto */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Proyecto: {projectId}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            Descripción breve del proyecto de predicción de demanda industrial.
          </p>
        </section>

        {/* Descripción detallada */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Descripción del Proyecto</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Aquí puedes explicar el contexto del proyecto, objetivos, metodología, datasets usados, algoritmos aplicados, etc.
          </p>
        </section>

        {/* Gráficas y visualizaciones */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Resultados y Gráficas</h2>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
            <h3 className="text-lg font-medium mb-2">Predicción de demanda por mes</h3>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Gráfico placeholder
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
            <h3 className="text-lg font-medium mb-2">Comparativa real vs predicción</h3>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Gráfico placeholder
            </div>
          </div>
        </section>

        {/* Análisis y conclusiones */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Análisis y Conclusiones</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Aquí puedes añadir tus conclusiones, aprendizajes, retos superados y próximos pasos.
          </p>
        </section>
      </main>
    </div>
  );
}
