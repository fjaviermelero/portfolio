import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function LanguagesSection() {
  const langs = [
    { name: "Spanish", code: "ES", level: "Native" },
    { name: "English", code: "GB", level: "C1: Advanced" },
    { name: "German", code: "DE", level: "B2: Intermediate" },
  ];

  const [flipped, setFlipped] = useState(null);

  const handleClick = (langName) => {
    setFlipped(flipped === langName ? null : langName);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-12 p-6 bg-gray-800 text-gray-100 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Language Skills</h2>
      <div className="grid grid-cols-3 gap-6 justify-items-center">
        {langs.map((lang) => (
          <div
            key={lang.name}
            onClick={() => handleClick(lang.name)}
            className="w-32 h-40 perspective cursor-pointer"
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flipped === lang.name ? "rotate-y-180" : ""
              }`}
            >
              {/* Cara frontal */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 rounded-2xl p-4 shadow-md backface-hidden">
                <ReactCountryFlag
                  countryCode={lang.code}
                  svg
                  style={{ width: "64px", height: "64px" }}
                  title={lang.name}
                />
                <span className="text-lg font-medium mt-2">{lang.name}</span>
              </div>

              {/* Cara trasera */}
              <div className="absolute inset-0 flex items-center justify-center bg-indigo-600 rounded-2xl p-4 shadow-md text-white text-lg font-semibold rotate-y-180 backface-hidden">
                {lang.level}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* estilos extra */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
