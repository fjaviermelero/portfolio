// src/components/ZoomableImage.jsx
import { useState } from "react";

export default function ZoomableImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Imagen clicable */}
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain rounded-xl shadow-md cursor-pointer
                   transform transition-transform duration-300 hover:scale-105"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-auto p-4"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-full rounded-xl shadow-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

    </>
  );
}
