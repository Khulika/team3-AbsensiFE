import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";
import avatarProfil from "../assets/Group 9.png";
import logoRanking from "../assets/Ranking.png";
import logoRank1 from "../assets/rank1.png";
import logoRank2 from "../assets/rank2.png";
import logoRank3 from "../assets/rank3.png";
import logoMenu from "../assets/logoMenu.png";

const Peringkat = () => {
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
                className={`${isSidebarOpen ? "block" : "hidden"} fixed inset-0 z-50 w-2/4 md:w-1/4 bg-blue-900 text-white flex flex-col items-center py-6 md:block md:relative md:z-10 sidebar`}
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
                            <img src={logoBeranda} alt="Beranda" className="max-w-full h-auto" />
                            Beranda
                        </div>
                    </Link>
                    <Link to="/dataDiri">
                        <div className="flex items-center gap-6 text-white px-4 py-2 rounded-lg">
                            <img src={logoBiodata} alt="Data Diri" className="max-w-full h-auto" />
                            Data Diri
                        </div>
                    </Link>
                    <Link to="/goAbsen">
                        <div className="flex items-center gap-6 text-white px-4 py-2 rounded-lg">
                            <img src={logoAbsen} alt="GoAbsen" className="max-w-full h-auto" />
                            GoAbsen
                        </div>
                    </Link>
                    <Link to="/peringkat">
                        <div className="flex items-center gap-4 text-white px-4 py-2 rounded-lg">
                            <img src={logoPeringkat} alt="Peringkat" className="max-w-full h-auto" />
                            Peringkat
                        </div>
                    </Link>
                    <Link to="/rekap">
                        <div className="flex items-center gap-6 text-white px-4 py-2 rounded-lg">
                            <img src={logoRekap} alt="Rekap" className="max-w-full h-auto" />
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
            <div className={`flex-1 bg-white p-4 md:p-10 ${isSidebarOpen ? "ml-1/4" : ""}`}>
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Khulika, Kamu Top 3!</h1>

                {/* Leaderboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {[1, 2, 3, 4].map((rank) => (
                        <div
                            key={rank}
                            className="relative bg-purple-100 p-6 rounded-lg text-center overflow-hidden h-64"
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${avatarProfil})` }}
                            ></div>
                            <h2 className="text-4xl font-bold text-white absolute top-4 left-4">
                                #{rank}
                            </h2>
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 p-4 rounded-lg">
                                <p className="font-medium text-white">
                                    {rank === 1
                                        ? "Riyan"
                                        : rank === 2
                                        ? "Rafli"
                                        : rank === 3
                                        ? "Khulika"
                                        : "Wandi"}{" "}
                                    - Programming
                                </p>
                                <p className="text-white">Total Absen 3 Minggu</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leaderboard Stats */}
                <div className="bg-blue-900 text-white p-6 rounded-lg">
                    <div className="flex items-center gap-2">
                        <img src={logoRanking} alt="ranking" />
                        <h3 className="text-xl font-bold">Leaderboard Bulan November</h3>
                    </div>
                    <div className="mt-4">
                        {[
                            { rank: 1, name: "Riyan", course: "Programming", icon: logoRank1 },
                            { rank: 2, name: "Rafli", course: "Programming", icon: logoRank2 },
                            { rank: 3, name: "Khulika", course: "Programming", icon: logoRank3 },
                            { rank: 4, name: "Wandi", course: "Programming" },
                            { rank: 5, name: "Akbar", course: "Multimedia" },
                            { rank: 6, name: "Nurkalam", course: "Multimedia" },
                            { rank: 7, name: "Sandi", course: "Multimedia" },
                            { rank: 8, name: "Rafli. I", course: "Multimedia" },
                            { rank: 9, name: "Dava", course: "Multimedia" },
                            { rank: 10, name: "Reza", course: "Multimedia" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center mt-2 border-b border-white pb-2"
                            >
                                <div className="flex items-center gap-2">
                                    {item.icon && <img src={item.icon} alt={`rank ${item.rank}`} />}
                                    <p>{item.rank}. {item.name}</p>
                                </div>
                                <p className="font-medium">{item.course}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peringkat;
