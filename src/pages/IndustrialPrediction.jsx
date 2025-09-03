import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ZoomableImage from "../components/ZoomableImage";

import trainTestSplit from "../assets/images/IndustrialPrediction/TrainTestSplit.png";
import trendStationality from "../assets/images/IndustrialPrediction/TrendStationality.png";
import modelComparison from "../assets/images/IndustrialPrediction/ModelComparison.png";
import modelDeploy from "../assets/images/IndustrialPrediction/ModelDeploy.png";

import sarima from "../assets/images/IndustrialPrediction/Sarima.png";
import exponential from "../assets/images/IndustrialPrediction/ExponentialSmoothing.png";
import prophet from "../assets/images/IndustrialPrediction/Prophet.png";
import XGBoost from "../assets/images/IndustrialPrediction/XGBoost.png";

export default function DemandPrediction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <main className="pt-20 max-w-6xl mx-auto px-4 space-y-16">
        {/* Título y descripción */}
        <section className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
            Industrial Workload Prediction
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            In this project, the workload of a real manufacturing plant has been measured, and the future workload for each line of the plant has been predicted using several models.
          </p>
        </section>

        {/* Gráficas y visualizaciones */}
        <section className="space-y-12 animate-fade-in">
          <h2 className="text-2xl font-semibold text-blue-400 text-center">
            Results and Visualizations
          </h2>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Train-Test Split Visualization
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage
                src={trainTestSplit}
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Trend, Stationality and Residuals study
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage
                src={trendStationality}
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Model Comparison Results
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage
                src={modelComparison}
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Model Deploy
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage
                src={modelDeploy}
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Sarima Model Results
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage
                src={sarima}
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Exponential Smoothing Model Results
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage
                src={exponential}
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Prophet Model Results
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage
                src={prophet}
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              XGBoost Model Results
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage
                src={XGBoost}
                alt=""
              />
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
