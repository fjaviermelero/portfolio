// ChatWindow.jsx
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

function ChatWindow() {
  const [username, setUsername] = useState("Kiko");
  const [language, setLanguage] = useState("spanish");
  const [conversationTitle, setConversationTitle] = useState("C1");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [corrections, setCorrections] = useState([]);
  const [isCorrectionsOpen, setIsCorrectionsOpen] = useState(false);

  const chatBoxRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = { username: username || "Anónimo", text: message };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setCorrections((prev) => [...prev, `Corrección de "${message}"`]);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      {/* Barra superior */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Tu nombre"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-40 border border-gray-700 rounded-lg px-3 py-2 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-40 border border-gray-700 rounded-lg px-3 py-2 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="spanish">Español</option>
            <option value="english">English</option>
            <option value="german">Deutsch</option>
            <option value="french">Français</option>
          </select>
          <input
            type="text"
            placeholder="Nombre conversación"
            value={conversationTitle}
            onChange={(e) => setConversationTitle(e.target.value)}
            className="w-48 border border-gray-700 rounded-lg px-3 py-2 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={() => setIsCorrectionsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          Ver correcciones
        </button>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col p-6">
        {/* Chat box */}
        <div
        ref={chatBoxRef}
        className="border border-gray-700 rounded-lg p-4 bg-gray-800 mb-3 overflow-y-auto shadow-inner max-h-[400px] sm:max-h-[500px]"
        >
          {messages.length === 0 && (
            <p className="text-gray-500 italic">No hay mensajes aún...</p>
          )}
          {messages.map((m, idx) => (
            <div key={idx} className="mb-3 break-words">
              <span className="font-semibold text-blue-400">{m.username}: </span>
              <span>{m.text}</span>
            </div>
          ))}
        </div>

        {/* Formulario de envío */}
        <form
          onSubmit={handleSend}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="flex-1 border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* Panel de correcciones */}
      {isCorrectionsOpen && (
        <div className="fixed inset-y-0 right-0 w-80 bg-gray-800 border-l border-gray-700 shadow-lg z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-blue-400">Correcciones</h3>
            <button
              onClick={() => setIsCorrectionsOpen(false)}
              className="text-gray-400 hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto p-4 space-y-2">
            {corrections.length === 0 && (
              <li className="text-gray-500 italic">Sin correcciones aún...</li>
            )}
            {corrections.map((c, idx) => (
              <li
                key={idx}
                className="text-sm bg-gray-700 px-3 py-2 rounded-lg shadow-sm"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
