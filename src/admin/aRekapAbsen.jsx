import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logoIt from "./../assets/logoIT.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoRekap from "../assets/logoRekap.png";
import logoMenu from "../assets/logoMenu.png";

const AdminRekap = () => {
  const [absensi, setAbsensi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchAbsensi = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          throw new Error("Token tidak ditemukan");
        }

        const userId = getUserIdFromToken(token);

        const response = await axios.get(
          `http://localhost:3001/attendance`
        );
        setAbsensi(response.data);
      } catch (error) {
        console.error("Gagal mengambil data absensi", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbsensi();
  }, []);

  const getUserIdFromToken = (token) => {
    const payload = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload.userId;
  };

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentAbsensi = absensi.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`w-64 bg-blue-900 text-white flex flex-col items-center py-6 fixed h-full transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="mb-10">
          <img src={logoIt} alt="Logo IT Club" className="w-20 h-20 mx-auto" />
          <h2 className="text-xl font-bold mt-4">GoAbsen</h2>
        </div>
        <nav className="flex flex-col space-y-6 text-left w-full px-6">
          <Link
            to="/usersmanage"
            className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            <img src={logoBiodata} alt="Users" className="max-w-full h-auto" />
            <i className="fas fa-user"></i> Users Management
          </Link>
          <Link
            to="/arekap"
            className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            <img src={logoRekap} alt="Rekap" className="max-w-full h-auto" />
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
        {/* Burger Menu Button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-4 left-4 z-50 bg-white text-white p-2 rounded-lg"
        >
          <img src={logoMenu} alt="Menu" className="w-6 h-6" />
        </button>

        <h1 className="text-3xl font-bold mb-6">Rekap Absen Siswa</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#110770] text-white py-3 px-6 font-semibold">
            Rekap Absensi
          </div>

          {/* Scrollable Table on Small Screens */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left py-3 px-4">No</th>
                  <th className="text-left py-3 px-4">Nama</th>
                  <th className="text-left py-3 px-4">Divisi</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Tanggal Absen</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6">
                      Loading...
                    </td>
                  </tr>
                ) : absensi.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-500">
                      Tidak ada data absensi
                    </td>
                  </tr>
                ) : (
                  currentAbsensi.map((data, index) => (
                    <tr
                      key={data.id}
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="py-3 px-4">
                        {indexOfFirstItem + index + 1}
                      </td>
                      <td className="py-3 px-4">{data.user.userName}</td>
                      <td className="py-3 px-4">{data.user.divisi}</td>
                      <td className="py-3 px-4">{data.status}</td>
                      <td className="py-3 px-4">
                        {new Date(data.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          {Array.from(
            { length: Math.ceil(absensi.length / perPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminRekap;
