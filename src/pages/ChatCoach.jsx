import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChatCoach() {

  useEffect(() => {
    const form = document.getElementById('chatForm');
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const usernameInput = document.getElementById('usernameInput');
    const languageSelect = document.getElementById('languageSelect');
    const conversationTitleInput = document.getElementById('conversationTitleInput');

    function appendMessage(text, sender) {
      const msg = document.createElement('div');
      msg.className = `message ${sender}`;

      if (sender === 'bot') {
        let formatted = text.replace(/\n/g, "<br>");
        formatted = formatted.replace(/(?:<br>)?\* (.+?)(?=<br>|$)/g, "<li>$1</li>");
        if (formatted.includes("<li>")) {
          formatted = "<ul>" + formatted + "</ul>";
        }
        msg.innerHTML = formatted;
      } else {
        msg.textContent = text;
      }

      chatBox.appendChild(msg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function handleSubmit(e) {
      e.preventDefault();

      const username = usernameInput.value.trim();
      const message = input.value.trim();
      const language = languageSelect.value;
      const conversationTitle = conversationTitleInput.value.trim();

      if (!username) {
        alert("Por favor, escribe tu nombre de usuario.");
        return;
      }

      if (!conversationTitle) {
        alert("Por favor, escribe Nombre de la conversación.");
        return;
      }

      if (!message) return;

      appendMessage(`${username}: ${message}`, 'user');
      input.value = '';

      try {
        const res = await fetch('http://localhost:8000/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: username,
            message: message,
            language: language,
            conversation_title: conversationTitle
          })
        });

        const data = await res.json();
        appendMessage(`ChatCoach: ${data.model_answer}`, 'bot');

        const correctionList = document.getElementById('correctionList');

        if (data.correction && Object.keys(data.correction).length > 0) {
          for (const [incorrect, correct] of Object.entries(data.correction)) {
            const li = document.createElement('li');
            li.textContent = `"${incorrect}" → "${correct}"`;
            correctionList.appendChild(li);
          }
        }
      } catch (err) {
        appendMessage('Error de conexión.', 'bot');
        console.error(err);
      }
    }

    form.addEventListener('submit', handleSubmit);

    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="app-container">
        <div className="sidebar">
          <h3>Correcciones</h3>
          <ul id="correctionList"></ul>
        </div>

        <div className="chat-main">
          <div className="username-bar">
            <input type="text" id="usernameInput" placeholder="Tu nombre de usuario" />
            <select id="languageSelect">
              <option value="spanish">Español</option>
              <option value="english">English</option>
              <option value="german">Deutsch</option>
              <option value="french">Français</option>
            </select>
          </div>

          <div className="conversation-title-bar">
            <input type="text" id="conversationTitleInput" placeholder="Nombre de la conversación" />
          </div>

          <div id="chatBox" className="chat-box"></div>

          <form id="chatForm" className="chat-form">
            <input type="text" id="userInput" placeholder="Escribe un mensaje..." required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <Footer />

      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f2f5;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .app-container {
          display: flex;
          width: 800px;
          height: 90vh;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .sidebar {
          width: 250px;
          background-color: #f8f9fa;
          border-right: 1px solid #ccc;
          padding: 15px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .sidebar h3 {
          margin-top: 0;
          font-size: 16px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }

        #correctionList {
          list-style: none;
          padding-left: 0;
          margin: 0;
          overflow-y: auto;
          flex-grow: 1;
        }

        #correctionList li {
          margin-bottom: 10px;
          line-height: 1.4;
          background-color: #fff;
          border: 1px solid #ddd;
          padding: 6px 8px;
          border-radius: 5px;
        }

        .chat-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .username-bar {
          padding: 10px;
          border-bottom: 1px solid #ccc;
          background-color: #f8f9fa;
          display: flex;
          gap: 10px;
        }

        .username-bar input,
        .username-bar select {
          flex: 1;
          padding: 8px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .chat-box {
          flex-grow: 1;
          padding: 10px;
          overflow-y: auto;
          background-color: #fefefe;
        }

        .message {
          margin: 5px 0;
          padding: 8px 12px;
          border-radius: 20px;
          max-width: 80%;
          clear: both;
        }

        .user {
          background-color: #d1e7dd;
          align-self: flex-end;
          margin-left: auto;
        }

        .bot {
          background-color: #f8d7da;
          align-self: flex-start;
          margin-right: auto;
        }

        .chat-form {
          display: flex;
          border-top: 1px solid #ccc;
        }

        .chat-form input {
          flex-grow: 1;
          padding: 10px;
          border: none;
          font-size: 16px;
        }

        .chat-form button {
          padding: 10px 15px;
          background-color: #0d6efd;
          color: white;
          border: none;
          cursor: pointer;
        }

        .conversation-title-bar {
          margin-bottom: 10px;
        }

        #conversationTitleInput {
          width: 100%;
          padding: 8px;
          font-size: 1rem;
        }
      `}</style>
    </div>
  )
}
