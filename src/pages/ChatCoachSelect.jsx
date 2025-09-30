// ChatCoach.jsx
import React, { useEffect, useState } from "react";
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

export const ChatCoachSelect = () => {
  const [conversations, setConversations] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/conversations/${user}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setConversations(data.conversations))
      .catch((err) => console.error("Error fetching conversations:", err));
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <div className="flex-grow flex flex-col items-center py-8 space-y-8 px-4">
        {/* Nombre del usuario */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-400 drop-shadow-md">
          {user}
        </h1>

        {/* Contenedor responsive: Corrections izquierda, Conversations derecha */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 w-full max-w-5xl">
          {/* Conversations */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full lg:w-1/2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-center lg:text-left">
                Conversations
              </h2>
              <button className="bg-blue-900 hover:bg-blue-600 rounded-md p-3 transition duration-200">
                New Conversation
              </button>
            </div>

            <ul className="space-y-3">
              {conversations.map((conv, index) => (
                <li
                  key={index}
                  className="bg-gray-700 hover:bg-gray-600 rounded-md p-3 transition duration-200"
                >
                  <Link
                    to={`/project/ChatCoach/${user}/${conv.conversation_title}`}
                    className="text-blue-400 hover:underline"
                  >
                    <strong>{conv.conversation_title}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <br />

          {/* Corrections */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Corrections
            </h2>
            <div className="grid grid-cols-2 gap-4 text-center">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  to={`/project/ChatCoachCorrections/${user}/${lang.label}`}
                  className="flex flex-col items-center justify-center 
                 bg-gray-700 hover:bg-gray-600 rounded-lg p-4 
                 transition duration-200 w-full h-full"
                >
                  <ReactCountryFlag
                    countryCode={lang.code}
                    svg
                    style={{ width: "48px", height: "48px" }}
                    title={lang.label}
                  />
                  <span className="mt-2 font-medium">{lang.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
