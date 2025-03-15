import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imageLogin from "../assets/image_login.png";
import googleLogo from "../assets/google.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "../../pages/api/auth/login-user";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      const data = await loginUser(email, password);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("userId", data.userId);
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

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-blue-500 hover:text-blue-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-800 py-2 rounded-md font-semibold hover:bg-gray-400 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Masuk"}
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
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
