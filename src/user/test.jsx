import React, { useState } from "react";

const GoAbsen = () => {
    const [status, setStatus] = useState("");
    const [reason, setReason] = useState("");

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        if (event.target.value !== "Izin") {
            setReason("");
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-blue-900 text-white flex flex-col items-center py-6">
                <div className="mb-10">
                    <img
                        src="./../assets/logoIT.png"
                        alt="Logo IT Club"
                        className="w-20 h-20 mx-auto"
                    />
                    <h2 className="text-xl font-bold mt-4">GoAbsen</h2>
                </div>
                {/* Menu Sidebar */}
                <nav className="flex flex-col space-y-6 text-left w-full px-6">
                    <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img
                            src="../assets/logoBeranda.png"
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-home"></i> Beranda
                    </a>
                    <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img
                            src="../assets/logoBiodata.png"
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-user"></i> Data Diri
                    </a>
                    <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img
                            src="../assets/logoAbsen.png"
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-clipboard-check"></i> GoAbsen
                    </a>
                    <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img
                            src="../assets/logoPeringkat.png"
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-chart-line"></i> Peringkat
                    </a>
                    <a href="#" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img
                            src="../assets/logoRekap.png"
                            alt="image beranda"
                            className="max-w-full h-auto"
                        />
                        <i className="fas fa-file-alt"></i> Rekap
                    </a>
                </nav>

                <div className="mt-auto px-6 w-full">
                    <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white">
                        Logout
                    </button>
                </div>
            </div>

            {/* Page Content */}
            <div className="flex-1 bg-white p-10">
                <h1 className="text-3xl font-bold mb-6">Dashboard Kehadiran</h1>

                {/* Statistik Kehadiran */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                        <h2 className="text-xl font-bold">Hadir</h2>
                        <p className="text-3xl">75%</p>
                    </div>
                    <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
                        <h2 className="text-xl font-bold">Izin</h2>
                        <p className="text-3xl">15%</p>
                    </div>
                    <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                        <h2 className="text-xl font-bold">Absen</h2>
                        <p className="text-3xl">10%</p>
                    </div>
                </div>

                {/* Tabel Riwayat Kehadiran */}
                <div className="overflow-x-auto bg-blue-900 text-white p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Riwayat Kehadiran</h2>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Tanggal</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">2024-12-01</td>
                                <td className="border px-4 py-2">Hadir</td>
                                <td className="border px-4 py-2">-</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2024-12-02</td>
                                <td className="border px-4 py-2">Izin</td>
                                <td className="border px-4 py-2">Keperluan keluarga</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2024-12-03</td>
                                <td className="border px-4 py-2">Absen</td>
                                <td className="border px-4 py-2">Tidak ada keterangan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GoAbsen;
