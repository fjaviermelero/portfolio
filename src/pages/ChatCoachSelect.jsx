// ChatCoach.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams,  useNavigate } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "GB", label: "english" },
  { code: "ES", label: "spanish" },
  { code: "DE", label: "german" },
  { code: "FR", label: "french" },
];

export const ChatCoachSelect = () => {
  const [conversations, setConversations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [selectedLang, setSelectedLang] = useState(languages[0].label);

  const { user } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://chatcoachbackend.fjmelero.com/conversations/${user}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setConversations(data.conversations))
      .catch((err) => console.error("Error fetching conversations:", err));
  }, [user]);

  const handleCreateConversation = () => {
    if (!newTitle.trim()) return alert("Please enter a conversation title.");
    // Aquí podrías hacer un fetch POST para crear la conversación
    console.log("New conversation:", { user, newTitle, selectedLang });
    setShowModal(false);
    setNewTitle("");
    setSelectedLang(languages[0].label);
    navigate(`/project/ChatCoachPage/${user}/${newTitle}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <div className="flex-grow flex flex-col items-center py-8 space-y-8 px-4">
        {/* Nombre del usuario */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-400 drop-shadow-md">
          {user}
        </h1>

        {/* Contenedor principal */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 w-full max-w-5xl">
          {/* Conversations */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full lg:w-1/2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-center lg:text-left">
                Conversations
              </h2>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-900 hover:bg-blue-600 rounded-md p-3 transition duration-200"
              >
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
                    to={`/project/ChatCoachPage/${user}/${conv.conversation_title}`}
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

      {/* Modal para nueva conversación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity">
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-11/12 max-w-md">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">
              Create New Conversation
            </h3>

            <label className="block mb-4">
              <span className="block mb-2 text-gray-300">Language:</span>
              <select
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="w-full bg-gray-700 text-gray-100 rounded-md p-2"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.label}>
                    {lang.label.charAt(0).toUpperCase() + lang.label.slice(1)}
                  </option>
                ))}
              </select>
            </label>

            <label className="block mb-6">
              <span className="block mb-2 text-gray-300">Conversation Title:</span>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-gray-700 text-gray-100 rounded-md p-2"
                placeholder="Enter conversation title"
              />
            </label>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-md transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateConversation}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-500 rounded-md transition duration-200"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
