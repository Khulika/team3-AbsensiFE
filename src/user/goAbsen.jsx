import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoMenu from "../assets/logoMenu.png";

import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Modal from "react-modal";

const userIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/ios-filled/50/ff0000/marker.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const GoAbsen = () => {
  const [attendance, setAttendance] = useState("");
  const [reason, setReason] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const radiusCenter = { lat: -6.889463823649193, lng: 107.64640538380613 };
  const radius = 50;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.userId);
      setUserName(decodedToken.userName);
    } else {
      toast.error("Token tidak ditemukan. Harap login kembali.");
    }
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        toast.error("Gagal mendapatkan lokasi. Pastikan GPS aktif.");
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      toast.error("Gagal mendapatkan userId. Harap login kembali.");
      return;
    }

    const attendanceData = {
      userId,
      locationId: 1,
      date: new Date().toISOString(),
      latitude,
      longitude,
      status: attendance.toUpperCase(),
      statusDescription: attendance === "izin" ? reason : "",
      isPresent: attendance === "hadir"
    };

    try {
      const response = await fetch("http://localhost:3001/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(attendanceData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message === "Anda sudah mencatat kehadiran hari ini.") {
          toast.warning("Anda sudah melakukan absen hari ini.");
          return;
        }
        throw new Error("Gagal menyimpan data absensi.");
      }

      toast.success(`${userName} berhasil absen`);
      setAttendance("");
      setReason("");
    } catch (error) {
      toast.error("Absen gagal, Anda tidak berada di area sekolah.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white flex flex-col items-center py-6 sidebar transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-1/4`}
      >
        <div className="mb-10">
          <img src={logoIt} alt="Logo IT Club" className="w-20 h-20 mx-auto" />
          <h2 className="text-xl font-bold mt-4">GoAbsen</h2>
        </div>
        <nav className="flex flex-col space-y-6 text-left w-full px-6">
          <Link to="/dataDiri" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
            <img src={logoBiodata} alt="Data Diri" className="max-w-full h-auto" />
            Data Diri
          </Link>
          <Link to="/goAbsen" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
            <img src={logoAbsen} alt="GoAbsen" className="max-w-full h-auto" />
            GoAbsen
          </Link>
          <Link to="/peringkat" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
            <img src={logoPeringkat} alt="Peringkat" className="max-w-full h-auto" />
            Peringkat
          </Link>
        </nav>
        <div className="mt-auto px-6 w-full">
          <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white">
            <Link to="/">Logout</Link>
          </button>
        </div>
      </div>

      {/* Tombol Burger */}
      <button className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <img src={logoMenu} alt="Menu" className="w-8 h-8" />
      </button>

      {/* Konten */}
      <div className="flex-1 bg-white p-10">
        <h1 className="text-3xl font-bold mb-6">Isi Absen</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="bg-green-500 text-white py-2 px-4 rounded-lg text-center">
            <p className="text-sm">Jam Masuk</p>
            <p className="text-lg font-bold">07.30</p>
          </div>
          <div className="bg-red-500 text-white py-2 px-4 rounded-lg text-center">
            <p className="text-sm">Jam Pulang</p>
            <p className="text-lg font-bold">13.00</p>
          </div>
        </div>
        <div className="bg-blue-900 text-white p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Nama</label>
              <input type="text" value={userName} className="w-full px-3 py-2 rounded-lg text-black" disabled />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Status Kehadiran</label>
              <select value={attendance} onChange={(e) => setAttendance(e.target.value)} className="w-full px-3 py-2 rounded-lg text-black">
                <option value="">Pilih Status</option>
                <option value="hadir">Hadir</option>
                <option value="sakit">Sakit</option>
                <option value="izin">Izin</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Simpan</button>
          </form>
        </div>
        <button onClick={() => setIsMapModalOpen(true)} className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Lihat Lokasi</button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default GoAbsen;
