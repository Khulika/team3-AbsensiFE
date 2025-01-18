import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";
import logoMenu from "../assets/logoMenu.png";

const RekapAbsen = () => {
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
                        <div className="flex items-center gap-6 text-white px-4 py-2 rounded-lg">
                            <img src={logoBeranda} alt="Beranda" className="w-5 h-5" />
                            Beranda
                        </div>
                    </Link>
                    <Link to="/dataDiri">
                        <div className="flex items-center gap-6 text-white px-4 py-2 rounded-lg">
                            <img src={logoBiodata} alt="Data Diri" className="w-5 h-5" />
                            Data Diri
                        </div>
                    </Link>
                    <Link to="/goAbsen">
                        <div className="flex items-center gap-6 text-white px-4 py-2 rounded-lg">
                            <img src={logoAbsen} alt="GoAbsen" className="w-5 h-5" />
                            GoAbsen
                        </div>
                    </Link>
                    <Link to="/peringkat">
                        <div className="flex items-center gap-6 text-white px-4 py-2 rounded-lg">
                            <img src={logoPeringkat} alt="Peringkat" className="w-5 h-5" />
                            Peringkat
                        </div>
                    </Link>
                    <Link to="/rekap">
                        <div className="flex items-center gap-6 text-white px-4 py-2 rounded-lg">
                            <img src={logoRekap} alt="Rekap" className="w-5 h-5" />
                            Rekap
                        </div>
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
                <h1 className="text-2xl sm:text-3xl font-bold mb-6">Lihat Rekap Absen!</h1>

                <div className="bg-gray-200 rounded-lg">
                    <div className="p-4 flex justify-between bg-[#110770] rounded-t-lg text-white">
                        <p className="font-semibold">No</p>
                        <p className="font-semibold">Nama</p>
                        <p className="font-semibold">Divisi</p>
                        <p className="font-semibold">Tanggal Absen</p>
                    </div>

                    <div className="px-4 pb-5">
                        {[
                            { no: 1, name: "Khulika", division: "Programming", date: "16/11/2024" },
                            { no: 2, name: "Khulika", division: "Programming", date: "09/11/2024" },
                            { no: 3, name: "Khulika", division: "Programming", date: "02/11/2024" },
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between mb-2">
                                <p>{item.no}</p>
                                <p>{item.name}</p>
                                <p>{item.division}</p>
                                <p>{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RekapAbsen;
