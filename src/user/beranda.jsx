import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";
import logoMenu from "../assets/logoMenu.png";

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
            <div
                className={`${isSidebarOpen ? "block" : "hidden"
                    } fixed inset-0 z-50 w-2/4 md:w-1/4 bg-blue-900 text-white flex flex-col items-center py-6 md:block md:relative md:z-10 sidebar`}
            >
                <div className="mb-10">
                    <img
                        src={logoIt}
                        alt="Logo IT Club"
                        className="w-20 h-20 mx-auto"
                    />
                    <h2 className="text-xl text-center font-bold mt-4">GoAbsen</h2>
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

                <div className="mt-32 px-6 w-full">
                    <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white">
                        <Link to="/">Logout</Link>
                        <Link to="/">Logout</Link>
                    </button>
                </div>
            </div>

            {/* Tombol Hamburger */}
            <button
                            className="md:hidden text-white text-2xl p-4 hamburger absolute left-0 top-0"
                            onClick={toggleSidebar}
                        >
                            <img src={logoMenu} className="w-10 " alt="" />
                            <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"}`}></i>
                        </button>

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
                        Jarkom 13122024
                        <br />
                        Assalamu'alaikum Warahmatullahi Wabarakatuh
                    <br />
                        Selamat siang teman", diberitahukan untuk semuanya bahwa akan diadakan kegiatan eskul pada :
                    <br />
                        Hari/tanggal : Sabtu, 14 Desember 2024 <br />
                        Tempat : Lab RI <br />
                        Waktu : 07.30 s.d selesai
<br />
                        Tambahan <br />
                        1. Di usahakan datang lebih awal <br />
                        2. Wajib hadir tepat waktu <br />
                        3. Jika berhalangan hadir diharapkan izin terlebih dahulu ke Humas dan Pembimbing IT CLUB

<br />
                        Terima Kasih, wassalamu'alaikum warahmatullahi wabarakatuh

<br />

                        HumasITC'24
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Beranda;

