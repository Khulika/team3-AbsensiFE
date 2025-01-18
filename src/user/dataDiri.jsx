import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";
import avatarProfil from "../assets/Group 9.png";
import logoMenu from "../assets/logoMenu.png";

const DataDiri = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
        const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
        };
    
        const handleClickOutside = (e) => {
           
            if (!e.target.closest(".sidebar") && !e.target.closest(".hamburger")) {
                setIsSidebarOpen(false);
            }
        };
    
        React.useEffect(() => {
            document.addEventListener("click", handleClickOutside);
            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
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
                                <Link to="/beranda">
                                    <a
                                        href="#"
                                        className="flex items-center gap-6 text-white px-4 py-2 rounded-lg"
                                    >
                                        <img
                                            src={logoBeranda}
                                            alt="image beranda"
                                            className="max-w-full h-auto"
                                        />
                                        Beranda
                                    </a>
                                </Link>
                                <Link to="/dataDiri">
                                    <a
                                        href="#"
                                        className="flex items-center gap-6 text-white px-4 py-2 rounded-lg"
                                    >
                                        <img
                                            src={logoBiodata}
                                            alt="image beranda"
                                            className="max-w-full h-auto"
                                        />
                                        Data Diri
                                    </a>
                                </Link>
                                <Link to="/goAbsen">
                                    <a
                                        href="#"
                                        className="flex items-center gap-6 text-white px-4 py-2 rounded-lg"
                                    >
                                        <img
                                            src={logoAbsen}
                                            alt="image beranda"
                                            className="max-w-full h-auto"
                                        />
                                        GoAbsen
                                    </a>
                                </Link>
                                <Link to="/peringkat">
                                    <a
                                        href="#"
                                        className="flex items-center gap-4 text-white px-4 py-2 rounded-lg"
                                    >
                                        <img
                                            src={logoPeringkat}
                                            alt="image beranda"
                                            className="max-w-full h-auto"
                                        />
                                        Peringkat
                                    </a>
                                </Link>
                                <Link to="/rekap">
                                    <a
                                        href="#"
                                        className="flex items-center gap-6 text-white px-4 py-2 rounded-lg"
                                    >
                                        <img
                                            src={logoRekap}
                                            alt="image beranda"
                                            className="max-w-full h-auto"
                                        />
                                        Rekap
                                    </a>
                                </Link>
                            </nav>
            
                            <div className="mt-32 px-6 w-full">
                                <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white">
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
            <div className={`flex-1 bg-white p-4 sm:p-6 lg:p-10 ${isSidebarOpen ? "ml-1/4" : ""}`}>
                <h1 className="text-2xl sm:text-3xl font-bold mb-6">Ini Biodata Kamu!</h1>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-10">
                    <div className="w-full md:w-2/5">
                        <img src={avatarProfil} alt="Avatar" className="w-full h-auto rounded-lg" />
                    </div>

                    <div className="bg-blue-900 text-white p-4 sm:p-6 rounded-lg w-full space-y-4">
                        <div className="grid grid-cols-2 px-4 sm:px-10 py-2 sm:py-3 border-b border-blue-700">
                            <p>Nama</p>
                            <p>Khulika</p>
                        </div>
                        <div className="grid grid-cols-2 px-4 sm:px-10 py-2 sm:py-3 border-b border-blue-700">
                            <p>NISN</p>
                            <p>1234567890</p>
                        </div>
                        <div className="grid grid-cols-2 px-4 sm:px-10 py-2 sm:py-3 border-b border-blue-700">
                            <p>Divisi</p>
                            <p>Programming</p>
                        </div>
                        <div className="grid grid-cols-2 px-4 sm:px-10 py-2 sm:py-3 border-b border-blue-700">
                            <p>Kelas</p>
                            <p>XII TKJ 1</p>
                        </div>
                        <button className="bg-gray-300 text-black py-2 px-4 sm:px-6 rounded-lg font-medium">
                            Ubah
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDiri;
