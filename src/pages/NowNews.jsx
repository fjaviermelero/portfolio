import { useEffect } from "react";
import Navbar from "../components/Navbar";
import ZoomableImage from "../components/ZoomableImage";
import Footer from "../components/Footer";

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
            NowNews
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Real-Time News Aggregator and Summarization Platform
            <br />
            This project is currently under development... <br />
          </p>

<div className="w-full mt-8" style={{ position: 'relative', paddingBottom: '58.25%', height: 0 }}>
  <iframe
    src="https://lookerstudio.google.com/embed/reporting/55ea0f09-494a-47b2-ad25-af87aca8aa4e/page/eTThF"
    title="NowNews Report"
    frameBorder="0"
    allowFullScreen
    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0,
    }}
  />
</div>


        </section>
      </main>

      <br />
      <Footer />
    </div>
  );
}
