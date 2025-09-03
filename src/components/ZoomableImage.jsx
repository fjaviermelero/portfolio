// src/components/ZoomableImage.jsx
import { useState } from "react";

export default function ZoomableImage({ src, alt }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center cursor-pointer"
      onClick={() => setIsZoomed(!isZoomed)}
    >
      <img
        src={src}
        alt={alt}
        className={`rounded-xl shadow-md transition-all duration-300 object-contain
          ${isZoomed 
            ? "w-[800px] z-10 scale-105"  // tamaño al hacer zoom
            : "w-[400px]"}                 // tamaño normal
        `}
      />
    </div>
  );
}
