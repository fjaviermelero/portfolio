import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold text-blue-500 animate-pulse mb-6">
        404
      </h1>
      <p className="text-xl md:text-2xl mb-4 text-center">
        Ooops! This page is <span className="text-yellow-400 font-semibold">under construction</span>.
      </p>
      <p className="text-center text-gray-400 mb-8">
        We're working hard to get it ready. Stay tuned!
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
      >
        Go Home
      </button>
    </div>
  );
};
