import React from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";
import avatarProfil from "../assets/Group 9.png";

const DataDiri = () => {
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
                <h1 className="text-3xl font-bold mb-6">Ini Biodata Kamu!</h1>
                <div className="flex gap-10">
                    <div className="w-2/5">
                    <img src={avatarProfil} alt=""/>
                    </div>

                    <div className="bg-blue-900 text-white p-6 rounded-lg w-full space-y-4">
                        <div className="bagan-nama grid grid-cols-2 px-10 py-3 border-b-2">
                            <p>
                                Nama
                            </p>
                            <p>
                                Khulika
                            </p>
                        </div>
                        <div className="bagan-nisn grid grid-cols-2 px-10 py-3 border-b-2">
                            <p>
                                NISN
                            </p>
                            <p>
                                1234567890
                            </p>
                        </div>
                        <div className="bagan-divisi grid grid-cols-2 px-10 py-3 border-b-2">
                            <p>
                                Divisi
                            </p>
                            <p>
                                Programming
                            </p>
                        </div>
                        <div className="bagan-kelas grid grid-cols-2 px-10 py-3 border-b-2">
                            <p>
                                Kelas
                            </p>
                            <p>
                                XII TKJ 1
                            </p>
                        </div>
                        <button className="bg-[#D9D9D9] text-black py-2 px-6 rounded-lg font-medium mb-6">
                            Ubah
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDiri;