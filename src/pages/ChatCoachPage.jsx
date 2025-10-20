// ChatCoach.jsx
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

export default function ChatCoachPage() {
  const [messages, setMessages] = useState([]);
  const [corrections, setCorrections] = useState({});
  const [input, setInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectLang, setSelectLang] = useState("spanish");

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null); // Contenedor de mensajes
  const correctionsEndRef = useRef(null); // Contenedor de correcciones

  const { user, conversation } = useParams();

  // Scroll automático en mensajes
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages]);

  // Scroll automático en correcciones
  useEffect(() => {
    const container = correctionsEndRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [corrections]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      user: user,
      message: input,
      language: selectLang,
      conversation_title: conversation,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const answer = await fetch("https://chatcoachbackend.fjmelero.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });

      if (!answer.ok) throw new Error("Error on server response");

      const response = await answer.json();
      console.log("Respuesta del backend:", response);

      setMessages((prev) => [
        ...prev,
        { user: "chatbot", message: response.model_answer },
      ]);

      setCorrections((prev) => ({ ...prev, ...response.correction }));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 relative">
      <Navbar />

      <div className="flex flex-1 w-full overflow-hidden">
        {/* Sidebar (correcciones) */}
        <aside
          className={`fixed top-[80px] left-0 h-[calc(100%-80px)] w-72 sm:w-80 bg-[#2d2f3a] border-r border-indigo-800/40 p-5 overflow-hidden z-30 transform transition-transform duration-300 ease-in-out shadow-xl
            ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold text-lg px-4 py-3 rounded-md shadow-md mb-4 flex justify-between items-center z-10">
            🧠 Corrections
            <button
              onClick={() => setShowSidebar(false)}
              className="bg-gray-800 hover:bg-gray-700 text-sm px-3 py-1 rounded-md border border-gray-600"
            >
              {showSidebar ? "Close" : "Open"}
            </button>
          </div>

          {/* Contenedor scroll de correcciones */}
          <div
            ref={correctionsEndRef}
            className="overflow-y-auto max-h-[calc(100%-80px)]"
          >
            {Object.keys(corrections).length > 0 ? (
              <ul className="space-y-3">
                {Object.entries(corrections).map(([original, corrected], i) => (
                  <li
                    key={i}
                    className="bg-gray-800 hover:bg-gray-700 border border-gray-700/50 rounded-lg p-3 transition duration-200 shadow-sm"
                  >
                    <p className="text-sm text-gray-300 mb-1">
                      <span className="font-medium text-indigo-400">Original:</span>{" "}
                      <span className="text-red-400 italic">{original}</span>
                    </p>
                    <p className="text-sm text-green-400">
                      <span className="font-medium">Corrección:</span>{" "}
                      <span className="italic">{corrected}</span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-400 text-sm italic bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
                No hay correcciones aún.
              </div>
            )}
          </div>
        </aside>

        {/* Ventana del chat */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-hidden">
          <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-xl flex flex-col overflow-hidden h-[80vh]">
            {/* Título */}
            <div className="flex flex-wrap items-center justify-between bg-indigo-600 text-white px-4 py-3 shadow-md gap-2">
              <Link
                to={`/project/ChatCoachSelect/${user}`}
                className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-indigo-700 hover:bg-indigo-500 rounded-lg transition-all duration-300 text-sm font-medium shadow-md min-w-fit"
              >
                <span className="text-lg">←</span>
                <span>Back</span>
              </Link>

              <div className="flex-1 text-center min-w-0">
                <h2 className="text-lg sm:text-xl font-bold tracking-wide truncate">
                  {conversation}
                </h2>
              </div>

              <div className="w-[70px] sm:w-[120px]" />
            </div>

            {/* Área de mensajes */}
            <div
              ref={messagesContainerRef}
              className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-800"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.user === "chatbot" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm md:text-base transition-all duration-300 ${
                      msg.user !== "chatbot"
                        ? "bg-indigo-600 text-white rounded-br-none shadow-md"
                        : "bg-gray-700 text-gray-100 rounded-bl-none shadow-md"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Campo de entrada */}
            <div className="border-t border-gray-700 p-4 bg-gray-800 flex flex-col sm:flex-row sm:items-center gap-3">
              <select
                value={selectLang}
                onChange={(e) => setSelectLang(e.target.value)}
                className="bg-gray-700 text-gray-100 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full sm:w-auto"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="german">German</option>
                <option value="french">French</option>
              </select>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Write your message..."
                className="bg-gray-700 text-gray-100 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition flex-1 w-full"
              />

              <div className="flex justify-between w-full sm:w-auto gap-2">
                {/* Botón de Correcciones */}
                <button
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="px-5 py-3 bg-gray-700 rounded-xl font-semibold hover:bg-gray-600 transition w-full sm:w-auto"
                >
                  {showSidebar ? "Close" : "Corrections"}
                </button>

                {/* Botón de Enviar */}
                <button
                  onClick={handleSend}
                  className="px-5 py-3 bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-500 transition w-full sm:w-auto"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
