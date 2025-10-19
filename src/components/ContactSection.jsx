import { useState } from "react";
import { Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      message: `Name: ${name}, Email: ${email}, Message: ${message}`
    };

    try {
      const response = await fetch("https://portfoliotelegram.fjmelero.com/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Información de contacto */}
        <div className="md:w-1/2 bg-gray-800 text-white p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-xl font-semibold mb-4">Let’s get in touch!</h3>

          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/in/francisco-javier-melero-bb4337147/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-400 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/fjaviermelero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-400 transition"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-gray-800 dark:bg-gray-900 text-gray-100 p-8 rounded-2xl shadow-lg space-y-4"
        >
          <div>
            <label className="block mb-1 text-gray-100">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-700 bg-gray-700 dark:bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-100">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-700 bg-gray-700 dark:bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-100">Message</label>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-700 bg-gray-700 dark:bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Send
          </button>

          {status && <p className="mt-2 text-gray-100">{status}</p>}
        </form>
      </div>
    </section>
  );
}
