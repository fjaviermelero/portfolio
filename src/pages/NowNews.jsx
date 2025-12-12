import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ZoomableImage from "../components/ZoomableImage";
import Footer from "../components/Footer";

import { SiApacheairflow, SiApachespark, SiGooglecloud } from "react-icons/si";

import { FaDatabase } from "react-icons/fa";

export default function NowNews() {
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
            Now News
          </h1>
          <div className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto space-y-4">
            <p>What is going on in Spain and the world?</p>
            <p>
              Now News provides real-time news updates and insights through
              interactive dashboards generated using data scraping and ETL
              processes.
            </p>
          </div>

          <br />

          <div className="flex flex-wrap justify-center gap-6 text-4xl">
            <div className="flex flex-col items-center">
              <SiGooglecloud className="text-blue-400" />
              <span className="text-sm mt-2 text-gray-300">GCP</span>
            </div>

            <div className="flex flex-col items-center">
              <SiApacheairflow className="text-red-400" />
              <span className="text-sm mt-2 text-gray-300">Airflow</span>
            </div>

            <div className="flex flex-col items-center">
              <SiApachespark className="text-orange-500" />
              <span className="text-sm mt-2 text-gray-300">Spark</span>
            </div>

            <div className="flex flex-col items-center">
              <FaDatabase className="text-red-500" />
              <span className="text-sm mt-2 text-gray-300">Big Query</span>
            </div>
          </div>

          <div
            className="w-full mt-8"
            style={{ position: "relative", paddingBottom: "58.25%", height: 0 }}
          >
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/55ea0f09-494a-47b2-ad25-af87aca8aa4e/page/eTThF"
              title="NowNews Report"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>

          <br />

          <div
            className="w-full mt-8"
            style={{ position: "relative", paddingBottom: "58.25%", height: 0 }}
          >
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/e1dd8068-a5ab-4ba7-a685-1b240b046ff2/page/lWiiF"
              title="NowNews Report"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>

          <br />

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
              href="https://github.com/fjaviermelero/NowNews"
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
        </section>
      </main>

      <br />
      <Footer />
    </div>
  );
}
