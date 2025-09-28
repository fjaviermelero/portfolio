// ChatCoach.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const user = "Kiko";

export const ChatCoachSelect = () =>  {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/conversations/${user}`, { method: "GET" })
      .then(response => response.json())
      .then(data => setConversations(data.conversations))
      .catch(err => console.error("Error fetching conversations:", err));
  }, []); 

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <br/>
      <h1 className="text-3xl font-bold mb-4 text-center">{user}</h1>

      <ul>
        {conversations.map((conv, index) => (
          <li key={index}>
            
            <Link to={`/project/ChatCoach/${user}/${conv.conversation_id}`} className="text-blue-500 underline">
              <strong>{conv.conversation_title}</strong>{" "}
            </Link>

          </li>
        ))}
      </ul>

      <br/>
      <Footer />
    </div>
  );
}
