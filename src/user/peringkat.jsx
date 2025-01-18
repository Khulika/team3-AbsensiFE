import React from "react";
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

const Peringkat = () => {
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
                <h1 className="text-3xl font-bold mb-6">Khulika, Kamu Top 3!</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Leaderboard Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="relative bg-purple-100 p-6 rounded-lg text-center overflow-hidden h-64">
                            {/* Avatar image */}
                            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${avatarProfil})` }}>
                            </div>
                            {/* Rank */}
                            <h2 className="text-4xl font-bold text-white absolute top-4 left-4">#1</h2>
                            {/* info */}
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 p-4 rounded-lg">
                                <p className="font-medium text-white">Riyan - Programming</p>
                                <p className="text-white">Total Absen 3 Minggu</p>
                            </div>
                        </div>
                        <div className="relative bg-purple-100 p-6 rounded-lg text-center overflow-hidden h-64">
                            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${avatarProfil})` }}>
                            </div>
                            <h2 className="text-4xl font-bold text-white absolute top-4 left-4">#2</h2>
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 p-4 rounded-lg">
                                <p className="font-medium text-white">Rafli - Programming</p>
                                <p className="text-white">Total Absen 3 Minggu</p>
                            </div>
                        </div>
                        <div className="relative bg-purple-100 p-6 rounded-lg text-center overflow-hidden h-64">
                            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${avatarProfil})` }}>
                            </div>
                            <h2 className="text-4xl font-bold text-white absolute top-4 left-4">#3</h2>
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 p-4 rounded-lg">
                                <p className="font-medium text-white">Khulika - Programming</p>
                                <p className="text-white">Total Absen 3 Minggu</p>
                            </div>
                        </div>
                        <div className="relative bg-purple-100 p-6 rounded-lg text-center overflow-hidden h-64">
                            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${avatarProfil})` }}>
                            </div>
                            <h2 className="text-4xl font-bold text-white absolute top-4 left-4">#4</h2>
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 p-4 rounded-lg">
                                <p className="font-medium text-white">Wandi - Programming</p>
                                <p className="text-white">Total Absen 3 Minggu</p>
                            </div>
                        </div>
                    </div>
                    {/* Leaderboard Stats on the Right */}
                    <div className="bg-[#110770] text-white p-6 rounded-lg">
                        <div className="flex items-center gap-2">
                            <img src={logoRanking} alt="ranking" />
                            <h3 className="flex text-xl font-bold">Leaderboard Bulan November </h3>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <img src={logoRank1} alt="ranking" />
                                    <p>1. Riyan</p>
                                </div>
                                <p className="font-medium">Programming</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="flex">
                                    <img src={logoRank2} alt="ranking" />
                                    <p>2. Rafli</p>
                                </div>
                                <p className="font-medium">Programming</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="flex">
                                    <img src={logoRank3} alt="ranking" />
                                    <p>3. Khulika</p>
                                </div>
                                <p className="font-medium">Programming</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p>4. Wandi</p>
                                <p className="font-medium">Programming</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p>5. Akbar</p>
                                <p className="font-medium">Multimedia</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p>6. Nurkalam</p>
                                <p className="font-medium">Multimedia</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p>7. Sandi</p>
                                <p className="font-medium">Multimedia</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p>8. Rafli. I</p>
                                <p className="font-medium">Multimedia</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p>9. Dava</p>
                                <p className="font-medium">Multimedia</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p>10. Reza</p>
                                <p className="font-medium">Multimedia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peringkat;
