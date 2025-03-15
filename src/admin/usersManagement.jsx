import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIt from "./../assets/logoIT.png";
import logoPlus from "./../assets/logoPlus.png";
import logoAbsen from "../assets/logoAbsen.png";
import logoBeranda from "../assets/logoBeranda.png";
import logoBiodata from "../assets/logoBiodata.png";
import logoPeringkat from "../assets/logoPeringkat.png";
import logoRekap from "../assets/logoRekap.png";
import avatarProfil from "../assets/Group 9.png";
import axios from "axios";
import {
  FaUserEdit,
  FaTrashAlt,
  FaSearch,
  FaPlus,
  FaEye,
  FaEyeSlash,
  FaFileExcel
} from "react-icons/fa";
import { fetchUsers, createUser } from "../../pages/api/user-management";
import * as XLSX from "xlsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GenerateUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [divisi, setDivisi] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const token = localStorage.getItem("accessToken");
      const data = await fetchUsers(token);
      setUsers(data);
      setLoading(false);
    };

    getUsers();
  }, []);

  const exportToExcel = () => {
    if (users.length === 0) {
      alert("Tidak ada data untuk diekspor");
      return;
    }

    const filteredUsers = users.map(
      ({
        password,
        roleId,
        id,
        googleId,
        faceDescriptor,
        role,
        profiles,
        ...user
      }) => user
    );

    const worksheet = XLSX.utils.json_to_sheet(filteredUsers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    XLSX.writeFile(workbook, "siswa_itclub.xlsx");
  };

  const handleTambahUser = async () => {
    if (!userName || !email || !password || !divisi) {
      toast.error("Semua field harus diisi!");
      return;
    }

    try {
      await createUser({
        userName,
        email,
        password,
        divisi,
        roleId: 2
      });

      toast.success("User berhasil ditambahkan!");
    } catch (error) {
      toast.error(error.message || "Gagal menambahkan user");
    }
  };

  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onClose = () => {
    document.getElementById("tambah_modal").close();
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-900 text-white flex flex-col items-center py-6">
        <div className="mb-10">
          <img src={logoIt} alt="Logo IT Club" className="w-20 h-20 mx-auto" />
          <h2 className="text-xl font-bold mt-4">GoAbsen</h2>
        </div>
        <nav className="flex flex-col space-y-6 text-left w-full px-6">
          <Link
            to="/usersmanage"
            className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            <img
              src={logoBiodata}
              alt="image beranda"
              className="max-w-full h-auto"
            />
            <i className="fas fa-user"></i>Users Management
          </Link>
          <Link
            to="/arekap"
            className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            <img
              src={logoRekap}
              alt="image beranda"
              className="max-w-full h-auto"
            />
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
        <h1 className="text-3xl font-bold mb-6">Manajemen User</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
          {/* Header atas dengan tombol dan search */}
          <div className="flex justify-between items-center mb-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Cari user..."
              className="border border-gray-300 rounded-md px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Tombol Export dan Tambah */}
            <div className="flex gap-4">
              <button
                onClick={exportToExcel}
                className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FaFileExcel className="mr-2" /> Export Excel
              </button>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                onClick={() =>
                  document.getElementById("tambah_modal").showModal()
                }
              >
                <FaPlus className="mr-2" /> Tambah Users
              </button>
            </div>
          </div>

          {/* modal tambah */}
          <dialog id="tambah_modal" className="modal">
            <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-blue-900 mb-4">
                Tambah User
              </h3>

              {/* Input Nama */}
              <label className="text-blue-900 font-semibold block mb-1">
                Nama
              </label>
              <input
                className="w-full border border-blue-500 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Masukkan nama"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              {/* Input Email */}
              <label className="text-blue-900 font-semibold block mb-1">
                Email
              </label>
              <input
                className="w-full border border-blue-500 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Select Divisi */}
              <label className="text-blue-900 font-semibold block mb-1">
                Divisi
              </label>
              <select
                className="w-full border border-blue-500 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={divisi}
                onChange={(e) => setDivisi(e.target.value)}
              >
                <option value="">Pilih Divisi</option>
                <option value="PROGRAMMING">PROGRAMMING</option>
                <option value="NETWORKING">NETWORKING</option>
                <option value="MULTIMEDIA">MULTIMEDIA</option>
              </select>

              {/* Input Password dengan Icon */}
              <label className="text-blue-900 font-semibold block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full border border-blue-500 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-blue-500 hover:text-blue-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>

              {/* Tombol Action */}
              <div className="modal-action flex justify-end mt-4">
                <button
                  className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className="btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                  onClick={handleTambahUser}
                  disabled={loading}
                >
                  {loading ? "Menambahkan..." : "Tambah"}
                </button>
              </div>
            </div>
          </dialog>
          {/* modal edit */}
          <dialog id="edit_modal" className="modal">
            <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-blue-900 mb-4">
                Edit User
              </h3>
              {/* Input Nama */}
              <label className="text-blue-900 font-semibold block mb-1">
                Nama
              </label>
              <input
                className="w-full border border-blue-500 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Masukkan nama"
              />
              {/* Select Divisi */}
              <label className="text-blue-900 font-semibold block mb-1">
                Divisi
              </label>
              <select className="w-full border border-blue-500 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="" disabled>
                  Pilih Divisi
                </option>
                <option value="PROGRAMMING">PROGRAMMING</option>
                <option value="NETWORKING">NETWORKING</option>
                <option value="MULTIMEDIA">MULTIMEDIA</option>
              </select>
              {/* Input Password dengan Icon */}
              <label className="text-blue-900 font-semibold block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full border border-blue-500 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-blue-500 hover:text-blue-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
              Tombol Close
              <div className="modal-action flex justify-end mt-4">
                <form method="dialog">
                  <button className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          {/* Modal delete */}
          <dialog id="delete_modal" className="modal">
            <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-blue-900 mb-4">
                Hapus User
              </h3>
              <p className="text-blue-900">
                Apakah Anda yakin ingin menghapus{" "}
                <strong>{selectedUser?.userName}</strong>?
              </p>
              <div className="modal-action flex justify-end gap-2 mt-4">
                <form method="dialog">
                  <button className="btn bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition">
                    Batal
                  </button>
                </form>
                <button className="btn bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                  Hapus
                </button>
              </div>
            </div>
          </dialog>

          {/* Judul tabel */}
          <div className="bg-[#110770] font-semibold p-3 text-white rounded-t-md">
            Daftar User
          </div>

          {/* Tabel User */}
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="text-left py-3 px-4">No</th>
                <th className="text-left py-3 px-4">Nama</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Divisi</th>
                <th className="text-left py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    Loading...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    Tidak ada user
                  </td>
                </tr>
              ) : (
                currentUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4">
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className="py-3 px-4">{user.userName}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.divisi}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg"
                        onClick={() =>
                          document.getElementById("edit_modal").showModal()
                        }
                      >
                        <FaUserEdit />
                      </button>
                      <button
                        onClick={() => {
                          document.getElementById("delete_modal").showModal();
                          // handleDelete(user.id);
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          {Array.from({ length: Math.ceil(users.length / perPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-900 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateUser;
