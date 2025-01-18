import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";

const Beranda = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-blue-900 text-white flex flex-col items-center py-6">
                <div className="mb-10">
                    <img
                        src={logoIt}
                        alt="Logo IT Club"
                        className="w-20 h-20 mx-auto"
                    />
                    <h2 className="text-xl font-bold mt-4">GoAbsen</h2>
                </div>
                {/* Menu Sidebar */}
                <nav className="flex flex-col space-y-6 text-left w-full px-6">
                    <Link
                        to="/beranda"
                        className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                        <img
                            src={logoBeranda}
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-home"></i> Beranda
                    </Link>
                    <Link
                        to="/dataDiri"
                        className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                        <img
                            src={logoBiodata}
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-user"></i> Data Diri
                    </Link>
                    <Link
                        to="/goAbsen"
                        className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                        <img
                            src={logoAbsen}
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-clipboard-check"></i> GoAbsen
                    </Link>
                    <Link
                        to="/peringkat"
                        className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                        <img
                            src={logoPeringkat}
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-chart-line"></i> Peringkat
                    </Link>
                    <Link
                        to="/rekap"
                        className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                        <img
                            src={logoRekap}
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-file-alt"></i> Rekap
                    </Link>
                </nav>

                <div className="mt-auto px-6 w-full">
                    <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white">
                        <Link to="/">Logout</Link>
                    </button>
                </div>
            </div>

            {/* Page Content */}
            <div className="flex-1 bg-white p-10">
                <h1 className="text-3xl font-bold mb-6">Selamat Datang {userName}!</h1>
                <Link to="/goAbsen">
                    <button className="bg-blue-900 text-white py-2 px-6 rounded-lg font-medium mb-6">
                        Absen ITClub
                    </button>
                </Link>

                <div className="bg-gray-200 p-6 rounded-lg">
                    <p>
                        Selamat datang di Aplikasi Absen ITClub. Pada aplikasi ini kalian akan bisa melakukan absen secara online dilengkapi dengan fitur batas jarak tertentu untuk mengisinya!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Beranda;
