import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";
import logoMenu from "../assets/logoMenu.png";

const GoAbsen = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [attendance, setAttendance] = useState("");
    const [reason, setReason] = useState("");

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleAttendanceChange = (e) => {
        setAttendance(e.target.value);
    };

    const handleReasonChange = (e) => {
        setReason(e.target.value);
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
                    <img src={logoIt} alt="Logo IT Club" className="w-20 h-20 mx-auto" />
                    <h2 className="text-xl font-bold mt-4">GoAbsen</h2>
                </div>
                <nav className="flex flex-col space-y-6 text-left w-full px-6">
                    <Link to="/beranda">
                        <div className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img src={logoBeranda} alt="Beranda" className="w-6 h-6" />
                            Beranda
                        </div>
                    </Link>
                    <Link to="/dataDiri">
                        <div className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img src={logoBiodata} alt="Data Diri" className="w-6 h-6" />
                            Data Diri
                        </div>
                    </Link>
                    <Link to="/goAbsen">
                        <div className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img src={logoAbsen} alt="GoAbsen" className="w-6 h-6" />
                            GoAbsen
                        </div>
                    </Link>
                    <Link to="/peringkat">
                        <div className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img src={logoPeringkat} alt="Peringkat" className="w-6 h-6" />
                            Peringkat
                        </div>
                    </Link>
                    <Link to="/rekap">
                        <div className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                            <img src={logoRekap} alt="Rekap" className="w-6 h-6" />
                            Rekap
                        </div>
                    </Link>
                </nav>
                <div className="mt-auto px-6 w-full">
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
            <div className={`flex-1 bg-white p-14 ${isSidebarOpen ? "ml-1/4" : ""}`}>
                <h1 className="text-3xl font-bold mb-6">Isi Absen</h1>
                {/* Info Jam Masuk dan Pulang */}
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

                {/* Form Absen */}
                <div className="bg-blue-900 text-white p-6 rounded-lg">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="nisn" className="block mb-2">NISN</label>
                            <input
                                type="text"
                                id="nisn"
                                name="nisn"
                                className="w-full px-3 py-2 rounded-lg text-black"
                                placeholder="NISN Kamu"
                                disabled
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Nama</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 rounded-lg text-black"
                                placeholder="Masukkan Nama"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="attendance" className="block mb-2">Status Kehadiran</label>
                            <select
                                id="attendance"
                                name="attendance"
                                value={attendance}
                                onChange={handleAttendanceChange}
                                className="w-full px-3 py-2 rounded-lg text-black"
                            >
                                <option value="">Pilih Status</option>
                                <option value="hadir">Hadir</option>
                                <option value="sakit">Sakit</option>
                                <option value="izin">Izin</option>
                            </select>
                        </div>
                        {attendance === "izin" && (
                            <div className="mb-4">
                                <label htmlFor="reason" className="block mb-2">Alasan Izin</label>
                                <input
                                    type="text"
                                    id="reason"
                                    name="reason"
                                    value={reason}
                                    onChange={handleReasonChange}
                                    className="w-full px-3 py-2 rounded-lg text-black"
                                    placeholder="Masukkan Alasan Izin"
                                />
                            </div>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GoAbsen;
