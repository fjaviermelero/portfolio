import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ZoomableImage from "../components/ZoomableImage";
import Footer from "../components/Footer";

import trainTestSplit from "../assets/images/IndustrialPrediction/TrainTestSplit.png";
import trendStationality from "../assets/images/IndustrialPrediction/TrendStationality.png";
import modelComparison from "../assets/images/IndustrialPrediction/ModelComparison.png";
import modelDeploy from "../assets/images/IndustrialPrediction/ModelDeploy.png";

import sarima from "../assets/images/IndustrialPrediction/Sarima.png";
import exponential from "../assets/images/IndustrialPrediction/ExponentialSmoothing.png";
import prophet from "../assets/images/IndustrialPrediction/Prophet.png";
import XGBoost from "../assets/images/IndustrialPrediction/XGBoost.png";

export default function IndustrialPrediction() {
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
            In this project, the workload of a manufacturing plant has been
            measured using data from real-time production systems. <br />
          </p>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            <br />
            The future workload for each manufacturing line of the plant has
            been predicted 16 weeks in advance using several models, reaching an
            overall accuracy of around 80% (20% Mean Absolute Percentage Error)
          </p>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            <br />
            Finally, the model has been deployed to generate real-time
            predictions for the manufacturing plant, using a visualization
            interface programmed with Streamlit
          </p>

          <br />
          {/* Icono de descarga */}
          <a
            href="/Industrial_Workload_Prediction.pdf"
            download="Industrial_Workload_Prediction.pdf"
            className="inline-flex items-center justify-center px-5 py-2 bg-gray-700 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition-colors duration-300 space-x-2"
            title="Download full project documentation (PDF)"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt="PDF Icon"
              className="w-6 h-6"
            />
            <span>Download Project Documentation (Spanish) </span>
          </a>
        </section>

        {/* GitHub Project */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center">
          <h3 className="text-lg font-medium mb-4 text-gray-100">
            GitHub Repository
          </h3>
          <p className="text-gray-300 mb-4">
            You can find the full code and implementation details of this
            project on GitHub.
          </p>
          <a
            href="https://github.com/fjaviermelero/TimeSeriesPrediction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.478 11.478 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.622-5.475 5.922.43.372.823 1.104.823 2.225v3.296c0 .32.192.694.8.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Gráficas y visualizaciones */}
        <section className="space-y-12 animate-fade-in">
          <h2 className="text-2xl font-semibold text-blue-400 text-center">
            Results and Visualizations (Summary)
          </h2>

          {/* Train-Test Split */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Train-Test Split Visualization
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage src={trainTestSplit} alt="" />
            </div>
            <p className="text-gray-300 mt-4">
              To evaluate the predictive performance of our models, the dataset
              was split into training and testing sets. The training set was
              used to fit the models, while the testing set served to validate
              the accuracy and robustness of predictions. This ensures that the
              models generalize well to unseen data.
            </p>
          </div>

          {/* Trend, Stationarity and Residuals */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Trend, Stationarity and Residuals Study
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage src={trendStationality} alt="" />
            </div>
            <p className="text-gray-300 mt-4">
              Before training the models, we analyzed the data for trends,
              seasonality, and stationarity. Residuals were examined to ensure
              that models capture the main patterns without leaving systematic
              errors. This step is crucial for time series forecasting models
              like SARIMA and Prophet.
            </p>
          </div>

          {/* Model Comparison */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Model Comparison Results
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage src={modelComparison} alt="" />
            </div>
            <p className="text-gray-300 mt-4">
              Several models, including SARIMA, Exponential Smoothing, Prophet,
              and XGBoost, were trained on the dataset. Their performance was
              compared using metrics such as Mean Absolute Error (MAE) and Root
              Mean Squared Error (RMSE). The comparison helps select the best
              model for accurate workload prediction.
            </p>
          </div>

          {/* Model Deploy */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Model Deployment
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage src={modelDeploy} alt="" />
            </div>
            <p className="text-gray-300 mt-4">
              The different models have been deployed in order to generate
              real-time predictions for the manufacturing plant. The deployment
              pipeline ensures that future workload predictions can be updated
              automatically as new data becomes available. The results are shown
              using a visual interface programmed in Streamlit, the precission
              of each model can also be consulted through this interface.
            </p>
          </div>

          {/* SARIMA */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              SARIMA Model Results (detail)
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage src={sarima} alt="" />
            </div>
            <p className="text-gray-300 mt-4">
              The SARIMA model was trained to capture both seasonal and trend
              patterns in the data. It is particularly effective for time series
              with strong seasonal effects and was used to generate short-term
              workload forecasts.
            </p>
          </div>

          {/* Exponential Smoothing */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Exponential Smoothing Model Results (detail)
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage src={exponential} alt="" />
            </div>
            <p className="text-gray-300 mt-4">
              The Exponential Smoothing model was applied to capture trends and
              seasonal components by weighting recent observations more heavily.
              It provides smooth predictions suitable for gradual changes in
              workload.
            </p>
          </div>

          {/* Prophet */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              Prophet Model Results (detail)
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage src={prophet} alt="" />
            </div>
            <p className="text-gray-300 mt-4">
              Prophet, developed by Facebook, is a robust model for forecasting
              time series with multiple seasonalities and holiday effects. It
              was trained on the plant data to produce accurate long-term
              forecasts.
            </p>
          </div>

          {/* XGBoost */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-lg font-medium mb-4 text-gray-100">
              XGBoost Model Results (detail)
            </h3>
            <div className="min-h-64 flex items-center justify-center">
              <ZoomableImage src={XGBoost} alt="" />
            </div>
            <p className="text-gray-300 mt-4">
              XGBoost, a gradient boosting algorithm, was used to capture
              non-linear relationships in the workload data. It complements the
              time series models by leveraging additional features and improving
              prediction accuracy.
            </p>
          </div>
        </section>

      </main>
      <br />

      <Footer />
    </div>
  );
}
