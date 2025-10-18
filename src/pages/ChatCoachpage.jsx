// ChatCoach.jsx
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

export default function ChatCoachPage() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const { user, conversation } = useParams();

  // Scroll automático al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { 
      "user": user, 
      "message": input,
      "language": "spanish",
      "conversation_title": conversation
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simulación de respuesta del bot


  try {
      const answer = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      if (!answer.ok) {
        throw new Error("Error on server response");
      }

      const response = await answer.json();
      console.log("Respuesta del backend:", response);


      setMessages((prev) => [
        ...prev,
        { "user": "chatbot", 
          "message": response.model_answer 
        },
      ]);

      console.log(messages)

    } catch (error) {
      console.error("Error:", error);
    }

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

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

            {/* Espaciador (mantiene el botón centrado visualmente) */}
            <div className="w-[120px]" />
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
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
          <div className="border-t border-gray-700 p-4 bg-gray-800 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 text-gray-100 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              onClick={handleSend}
              className="ml-3 px-5 py-3 bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-500 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
