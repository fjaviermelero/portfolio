import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-4">
      <p className="text-xl md:text-2xl mb-4 text-center">
        ChatCoach is currently <span className="text-yellow-400 font-semibold">Under Construction</span>.
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
