// ChatCoach.jsx
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

export default function ChatCoachPage() {
  const [messages, setMessages] = useState([]);
  const [corrections, setCorrections] = useState([]);
  const [input, setInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const messagesEndRef = useRef(null);
  const { user, conversation } = useParams();

  // Scroll to the last message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fetch corrections
  useEffect(() => {
    fetch(`http://localhost:8000/corrections/${user}/spanish`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.corrections);
        setCorrections(data.corrections || []);
      })
      .catch((err) => console.error("Error fetching corrections:", err));
  }, [user]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      user: user,
      message: input,
      language: "spanish",
      conversation_title: conversation,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const answer = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      if (!answer.ok) throw new Error("Error on server response");

      const response = await answer.json();
      console.log("Respuesta del backend:", response);
      console.log("Correcciones:", corrections);

      setMessages((prev) => [
        ...prev,
        { user: "chatbot", message: response.model_answer },
      ]);
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

      {/* Botón móvil para abrir/cerrar sidebar */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg absolute top-20 left-4 z-50 shadow-lg transition"
      >
        {showSidebar ? "Cerrar" : "Correcciones"}
      </button>

      <div className="flex flex-1 w-full">
        {/* Sidebar (correcciones) */}
     <aside
  className={`fixed md:static top-0 left-0 h-full md:h-auto w-80 bg-[#2d2f3a] border-r border-indigo-800/40 p-5 overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out shadow-xl ${
    showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  }`}
>
  <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold text-lg px-4 py-3 rounded-md shadow-md mb-4">
    🧠 Correcciones
  </div>

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
</aside>


        {/* Contenido principal del chat */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-xl flex flex-col overflow-hidden">
            {/* Título */}
            <div className="flex items-center justify-between bg-indigo-600 text-white px-6 py-4 shadow-md">
              {/* Botón volver */}
              <Link
                to={`/project/ChatCoachSelect/${user}`}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-700 hover:bg-indigo-500 rounded-lg transition-all duration-300 text-sm font-medium shadow-md"
              >
                <span className="text-lg">←</span>
                <span>Volver</span>
              </Link>

              {/* Título centrado */}
              <div className="flex-1 text-center">
                <h2 className="text-2xl font-bold tracking-wide">
                  {user}
                  <span className="text-indigo-200 font-light mx-2">•</span>
                  {conversation}
                </h2>
              </div>

              {/* Espaciador */}
              <div className="w-[120px]" />
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.user === "chatbot" ? "justify-start" : "justify-end"
                  }`}
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
            <div className="border-t border-gray-700 p-4 bg-gray-800 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-700 text-gray-100 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <button
                onClick={handleSend}
                className="ml-3 px-5 py-3 bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-500 transition"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
