// ChatCoachLogin.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { FaReact } from "react-icons/fa";
import { SiDocker, SiFastapi } from "react-icons/si";
import { PiOpenAiLogo } from "react-icons/pi";

export const ChatCoachLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Scroll up
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hardcodeHash =
    "912021f888a598607098250846def9af0a6a44a83ee26fe5ee655f386e66cdb0";
  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordHash = await hashPassword(password);
    if (passwordHash === hardcodeHash) {
      console.log("Login successful");
      navigate(`/project/ChatCoachSelect/${user}`);
    } else {
      console.log("Login failed");
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <main className="pt-20 max-w-6xl mx-auto px-4 space-y-16">
        <div className="flex flex-col items-center flex-grow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
            Chat Coach
          </h1>
          <div className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto space-y-4 mb-6 text-center">
            <p>Practice any language with Chat Coach!</p>

            <p>
              Chat naturally in your chosen language and receive real-time
              corrections and feedback to improve your grammar, vocabulary, and
              fluency.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-4xl">
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-400" />
              <span className="text-sm mt-2 text-gray-300">React</span>
            </div>

            <div className="flex flex-col items-center">
              <SiFastapi className="text-red-400" />
              <span className="text-sm mt-2 text-gray-300">Fast API</span>
            </div>

            <div className="flex flex-col items-center">
              <PiOpenAiLogo className="text-green-500" />
              <span className="text-sm mt-2 text-gray-300">OPEN AI</span>
            </div>

            <div className="flex flex-col items-center">
              <SiDocker className="text-blue-500" />
              <span className="text-sm mt-2 text-gray-300">Docker</span>
            </div>
          </div>

          <br />

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
              Login
            </h2>

            <div className="mb-4">
              <label className="block text-gray-200 text-sm font-bold mb-2">
                User
              </label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* GitHub Project */}

        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center">
          <h3 className="text-lg font-medium mb-4 text-gray-100">
            GitHub Repository
          </h3>
          <p className="text-gray-300 mb-4">
            You can find the full code and implementation details of this
            project on GitHub.
          </p>
          <a
            href="https://github.com/fjaviermelero/NowNews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.478 11.478 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.622-5.475 5.922.43.372.823 1.104.823 2.225v3.296c0 .32.192.694.8.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            View on GitHub
          </a>
        </div>
      </main>
      <br />
      <Footer />
    </div>
  );
};
