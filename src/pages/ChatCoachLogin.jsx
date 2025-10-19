// ChatCoachLogin.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChatCoachLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      navigate(`/project/ChatCoachSelect/${user}`)

    } else {
      console.log("Login failed");
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <br />

      <div className="flex justify-center items-center flex-grow">
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

          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

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

      <br />
      <Footer />
    </div>
  );
};
