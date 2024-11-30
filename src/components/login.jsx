import React from "react";
import { Link } from "react-router-dom";
import imageLogin from "../assets/image_login.png";
import googleLogo from "../assets/google.png";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
        {/* login kiri */}
      <div className="flex flex-col justify-center items-center bg-blue-900 text-white lg:w-1/2 px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">Masuk GoAbsen</h2>
        <form className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Nama"
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-800 py-2 rounded-md font-semibold hover:bg-gray-400 transition"
          >
            <Link to="/beranda">Masuk</Link>
            
          </button>
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

      {/* login kanan */}
      <div className="flex justify-center items-center bg-white lg:w-1/2 p-6">
        <img
          src={imageLogin}
          alt="image login"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Login;
