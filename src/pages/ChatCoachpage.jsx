// ChatCoach.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatWindow from "../components/ChatCoach/ChatWindow";

export default function ChatCoachPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      
      <br />

      {/* ChatWindow ocupa todo el espacio restante */}
      <div className="flex-1">
        <ChatWindow />
      </div>

      <br />

      <Footer />
      
    </div>
  );
}
