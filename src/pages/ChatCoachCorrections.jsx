import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "GB", label: "english" },
  { code: "ES", label: "spanish" },
  { code: "DE", label: "german" },
  { code: "FR", label: "french" },
];

export const ChatCoachCorrections = () => {
  const [corrections, setCorrections] = useState({});
  const { user, language } = useParams();
  const correctionsRef = useRef(null); // <-- Ref para scroll

  useEffect(() => {
    fetch(
      `https://chatcoachbackend.fjmelero.com/corrections/${user}/${language}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCorrections(data.corrections || {});
      })
      .catch((err) => console.error("Error fetching corrections:", err));
  }, [language, user]);

  // Scroll automático al final
  useEffect(() => {
    const container = correctionsRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [corrections]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <div className="flex-grow flex flex-col items-center py-8 space-y-8 px-4">
        {/* Banderas de lenguajes */}
        <div className="flex space-x-4">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              to={`/project/ChatCoachCorrections/${user}/${lang.label.toLowerCase()}`}
              className="transition duration-300 hover:scale-105"
            >
              <div
                className={`transition duration-300 ${
                  lang.label.toLowerCase() === language.toLowerCase()
                    ? "p-1 border-4 border-blue-400 rounded-full bg-gray-800 scale-110"
                    : ""
                }`}
              >
                <ReactCountryFlag
                  countryCode={lang.code}
                  svg
                  style={{
                    width: "3em",
                    height: "3em",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Correcciones */}
        <div className="flex justify-center w-full max-w-5xl">
          <div className="bg-gray-800 rounded-xl shadow-lg w-full sm:w-3/4 lg:w-1/2">
            {/* Encabezado y botón fuera del scroll */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Corrections</h2>
              <Link
                to={`/project/ChatCoachSelect/${user}`}
                className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300"
              >
                ← Back
              </Link>
            </div>

            {/* Contenedor de correcciones con scroll */}
            <div
              ref={correctionsRef}
              className="p-6 overflow-y-auto max-h-[60vh] space-y-3"
            >
              <ul>
                {Object.entries(corrections).map(
                  ([original, corrected], index) => (
                    <li
                      key={index}
                      className="bg-gray-700 hover:bg-gray-600 rounded-md p-3 transition duration-200"
                    >
                      <strong className="text-red-400">{original}</strong> →{" "}
                      <span className="text-green-400">{corrected}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
