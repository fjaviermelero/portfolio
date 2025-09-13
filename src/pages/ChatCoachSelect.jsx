// ChatCoach.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function ChatCoachSelect() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      {/* ChatWindow ocupa todo el espacio restante */}
      <div className="flex-1">
        <ChatWindow />
      </div>

      <Footer />
    </div>
  );
}
