import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";
import avatarProfil from "../assets/Group 9.png";

const DataDiri = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);  // State for editing
    const [formData, setFormData] = useState({  // State for form data
        nisn: "",
        divisi: "",
        class: "",
        address: "",
        avatar: "",
    });
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            setError("User ID tidak ditemukan! Silakan login kembali.");
            setLoading(false);
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:3001/profiles/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setProfile(data);
                    setFormData({
                        nisn: data.nisn || "",
                        divisi: data.divisi || "",
                        class: data.class || "",
                        address: data.address || "",
                        avatar: data.avatar || "",
                    });
                } else {
                    setProfile(null);
                }
            } catch (error) {
                setError("Terjadi kesalahan saat mengambil data.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId]);

    const handleEditProfile = () => {
        setIsEditing(true);  // Activate editing mode
    };

    const handleCancelEdit = () => {
        setIsEditing(false);  // Deactivate editing mode
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveProfile = async () => {
        try {
            const response = await fetch(`http://localhost:3001/profiles/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const updatedProfile = await response.json();
                setProfile(updatedProfile);
                setIsEditing(false);  // Deactivate editing mode after save
            } else {
                setError("Gagal memperbarui profil.");
            }
        } catch (error) {
            setError("Terjadi kesalahan saat memperbarui profil.");
        }
    };

    if (loading) {
        return <div className="flex h-screen justify-center items-center">Loading...</div>;
    }

    if (error) {
        return (
            <div className="flex h-screen justify-center items-center text-red-500">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-blue-900 text-white flex flex-col items-center py-6">
                <div className="mb-10">
                    <img src={logoIt} alt="Logo IT Club" className="w-20 h-20 mx-auto" />
                    <h2 className="text-xl font-bold mt-4">GoAbsen</h2>
                </div>
                <nav className="flex flex-col space-y-6 text-left w-full px-6">
                    <Link to="/beranda" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img src={logoBeranda} alt="image beranda" className="max-w-full h-auto" />
                        <i className="fas fa-home"></i> Beranda
                    </Link>
                    <Link to="/dataDiri" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img src={logoBiodata} alt="image beranda" className="max-w-full h-auto" />
                        <i className="fas fa-user"></i> Data Diri
                    </Link>
                    <Link to="/goAbsen" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img src={logoAbsen} alt="image beranda" className="max-w-full h-auto" />
                        <i className="fas fa-clipboard-check"></i> GoAbsen
                    </Link>
                    <Link to="/peringkat" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img src={logoPeringkat} alt="image beranda" className="max-w-full h-auto" />
                        <i className="fas fa-chart-line"></i> Peringkat
                    </Link>
                    <Link to="/rekap" className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
                        <img src={logoRekap} alt="image beranda" className="max-w-full h-auto" />
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
                <h1 className="text-3xl font-bold mb-6">Ini Biodata Kamu!</h1>

                {profile ? (
                    <div className="flex gap-10">
                        <div className="w-2/5">
                            <img src={profile.avatar || avatarProfil} alt="Avatar" className="w-full h-auto" />
                        </div>

                        <div className="bg-blue-900 text-white p-6 rounded-lg w-full space-y-4">
                            <div className="bagan-nama grid grid-cols-2 px-10 py-3 border-b-2">
                                <p>Nama</p>
                                <p>{profile.user?.userName}</p>
                            </div>
                            <div className="bagan-nisn grid grid-cols-2 px-10 py-3 border-b-2">
                                <p>NISN</p>
                                <p>{isEditing ? (
                                    <input
                                        type="text"
                                        name="nisn"
                                        value={formData.nisn}
                                        onChange={handleChange}
                                        className="bg-blue-700 text-white rounded-lg px-3 py-2 w-full"
                                    />
                                ) : (
                                    profile.nisn || "Tidak tersedia"
                                )}</p>
                            </div>
                            <div className="bagan-divisi grid grid-cols-2 px-10 py-3 border-b-2">
                                <p>Divisi</p>
                                <p>{isEditing ? (
                                    <select
                                        name="divisi"
                                        value={formData.divisi}
                                        onChange={handleChange}
                                        className="bg-blue-700 text-white rounded-lg px-3 py-2 w-full"
                                    >
                                        <option value="">Pilih Divisi</option>
                                        <option value="PROGRAMMING">PROGRAMMING</option>
                                        <option value="NETWORKING">NETWORKING</option>
                                        <option value="MULTIMEDIA">MULTIMEDIA</option>
                                    </select>
                                ) : (
                                    profile.user?.divisi || "Tidak tersedia"
                                )}</p>
                            </div>
                            <div className="bagan-kelas grid grid-cols-2 px-10 py-3 border-b-2">
                                <p>Kelas</p>
                                <p>{isEditing ? (
                                    <input
                                        type="text"
                                        name="class"
                                        value={formData.class}
                                        onChange={handleChange}
                                        className="bg-blue-700 text-white rounded-lg px-3 py-2 w-full"
                                    />
                                ) : (
                                    profile.class || "Tidak tersedia"
                                )}</p>
                            </div>
                            <div className="bagan-alamat grid grid-cols-2 px-10 py-3 border-b-2">
                                <p>Alamat</p>
                                <p>{isEditing ? (
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="bg-blue-700 text-white rounded-lg px-3 py-2 w-full"
                                    />
                                ) : (
                                    profile.address || "Tidak tersedia"
                                )}</p>
                            </div>

                            {isEditing ? (
                                <div className="flex gap-4">
                                    <button
                                        onClick={handleSaveProfile}
                                        className="bg-blue-600 text-white py-2 px-6 rounded-lg"
                                    >
                                        Simpan
                                    </button>
                                    <button
                                        onClick={handleCancelEdit}
                                        className="bg-gray-600 text-white py-2 px-6 rounded-lg"
                                    >
                                        Batal
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleEditProfile}
                                    className="bg-[#D9D9D9] text-black py-2 px-6 rounded-lg font-medium mb-6"
                                >
                                    Ubah
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="mb-4">Profil belum tersedia.</p>
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
                            Tambah Profil
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataDiri;
