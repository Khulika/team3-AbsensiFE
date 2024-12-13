import React from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";

const RekapAbsen = () => {
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
                    <Link to="/beranda">
                        <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img
                                src={logoBeranda}
                                alt="image beranda"
                                className="max-w-full h-auto"
                            />
                            <i className="fas fa-home"></i> Beranda
                        </a>
                    </Link>
                    <Link to="/dataDiri">
                        <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img
                                src={logoBiodata}
                                alt="image beranda"
                                className="max-w-full h-auto"
                            />
                            <i className="fas fa-user"></i> Data Diri
                        </a>
                    </Link>
                    <Link to="/goAbsen">
                        <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img
                                src={logoAbsen}
                                alt="image beranda"
                                className="max-w-full h-auto"
                            />
                            <i className="fas fa-clipboard-check"></i> GoAbsen
                        </a>
                    </Link>
                    <Link to="/peringkat">
                        <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img
                                src={logoPeringkat}
                                alt="image beranda"
                                className="max-w-full h-auto"
                            />
                            <i className="fas fa-chart-line"></i> Peringkat
                        </a>
                    </Link>
                    <Link to="/rekap">
                        <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img
                                src={logoRekap}
                                alt="image beranda"
                                className="max-w-full h-auto"
                            />
                            <i className="fas fa-file-alt"></i> Rekap
                        </a>
                    </Link>
                </nav>

                <div className="mt-auto px-6 w-full">
                    <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white">
                        <Link to="/">
                            Logout
                        </Link>
                    </button>
                </div>
            </div>

            {/* Page Content */}
            <div className="flex-1 bg-white p-10">
                <h1 className="text-3xl font-bold mb-6">Lihat Rekap Absen!</h1>

                <div className="bg-gray-200 rounded-lg">
                    <div className="p-4 flex justify-between mb-4 bg-[#110770] rounded-t-lg text-white p-2">
                        <p className="font-semibold">No</p>
                        <p className="font-semibold">Nama</p>
                        <p className="font-semibold">Divisi</p>
                        <p className="font-semibold">Tanggal Absen</p>
                    </div>

                    <div className="px-4 pb-5">
                        <div className="flex justify-between mb-2">
                            <p>1</p>
                            <p>Khulika</p>
                            <p>Programming</p>
                            <p>16/11/2024</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>2</p>
                            <p>Khulika</p>
                            <p>Programming</p>
                            <p>09/11/2024</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>3</p>
                            <p>Khulika</p>
                            <p>Programming</p>
                            <p>02/11/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RekapAbsen;