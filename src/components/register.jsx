import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imageLogin from "../assets/image_login.png";
import googleLogo from "../assets/google.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    divisi: "",
    password: "",
    roleId: 2
  });

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    if (!validateEmail(formData.email)) {
      setError("Format email tidak valid.");
      toast.error("Format email tidak valid.");
      return;
    }
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Pendaftaran gagal");
      }

      toast.success("Pendaftaran berhasil! Silakan masuk.");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Terjadi kesalahan, silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Bagian kiri */}
      <div className="flex flex-col justify-center items-center bg-blue-900 text-white lg:w-1/2 px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">Daftar GoAbsen</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <input
            type="text"
            name="userName"
            placeholder="Nama"
            value={formData.userName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none ${
              error ? "border-red-500" : ""
            }`}    
          />
          <select
            name="divisi"
            value={formData.divisi}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none"
            required
          >
            <option value="" disabled>
              Pilih Divisi
            </option>
            <option value="NETWORKING">NETWORKING</option>
            <option value="PROGRAMMING">PROGRAMMING</option>
            <option value="MULTIMEDIA">MULTIMEDIA</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-800 py-2 rounded-md font-semibold hover:bg-gray-400 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Daftar"}
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <p className="text-center">Atau</p>
          <button
            type="button"
            className="w-full bg-white text-gray-800 py-2 rounded-md font-semibold flex justify-center items-center gap-3 border hover:bg-gray-100 transition"
          >
            <img src={googleLogo} alt="Google Logo" className="w-5 h-5" />
            Daftar menggunakan Google
          </button>
          <p className="text-center mt-4">
            Sudah punya akun?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Masuk disini
            </Link>
          </p>
        </form>
      </div>

      {/* Bagian kanan */}
      <div className="flex justify-center items-center bg-white lg:w-1/2 p-6">
        <img src={imageLogin} alt="image login" className="max-w-full h-auto" />
      </div>
      
      {/* Notifikasi Toast */}
      <ToastContainer />
    </div>
  );
};

export default Register;
