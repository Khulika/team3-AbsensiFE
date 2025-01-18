import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imageLogin from "../assets/image_login.png";
import googleLogo from "../assets/google.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    if (!validateEmail(email)) {
      setError("Format email tidak valid.");
      return;
    }
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userName", data.userName);
      navigate("/beranda");
      toast.success("Login berhasil !");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Login kiri */}
      <div className="flex flex-col justify-center items-center bg-blue-900 text-white lg:w-1/2 px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">Masuk GoAbsen</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none ${
              error ? "border-red-800" : ""
            }`}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-800 py-2 rounded-md font-semibold hover:bg-gray-400 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Masuk"}
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <p className="text-center">Atau</p>
          <button
            type="button"
            className="w-full bg-white text-gray-800 py-2 rounded-md font-semibold flex justify-center items-center gap-3 border hover:bg-gray-100 transition"
          >
            <img src={googleLogo} alt="Google Logo" className="w-5 h-5" />
            Masuk menggunakan Google
          </button>
          <p className="text-center mt-4">
            Tidak punya akun?{" "}
            <Link to="/register" className="text-blue-300 hover:underline">
              Daftar disini
            </Link>
          </p>
        </form>
      </div>

      {/* Login kanan */}
      <div className="flex justify-center items-center bg-white lg:w-1/2 p-6">
        <img src={imageLogin} alt="image login" className="max-w-full h-auto" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
