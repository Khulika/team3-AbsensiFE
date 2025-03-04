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
} from "react-icons/fa";

const GenerateUser = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          throw new Error("Token tidak ditemukan");
        }

        const response = await axios.get(`http://localhost:3001/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUsers(response.data);
      } catch (error) {
        console.error("Gagal mengambil data user", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <img src={logoBiodata} alt="image beranda" className="max-w-full h-auto" />
            <i className="fas fa-user"></i>Users Management
          </Link>
          <Link
            to="/arekap"
            className="flex items-center gap-3 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
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
        <h1 className="text-3xl font-bold mb-6">Manajemen User</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex bg-[#110770] text-white font-semibold place-content-between">
            <p className="py-3 px-6">Daftar User</p>
            <button className="px-6 flex p-1 place-items-center">
              <FaPlus className="mr-2 bg-blue text-2xl"/>
            </button>
          </div>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="text-left py-3 px-4">No</th>
                <th className="text-left py-3 px-4">Nama</th>
                <th className="text-left py-3 px-4">Divisi</th>
                <th className="text-left py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" className="text-center py-6">Loading...</td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500">
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
                    <td className="py-3 px-4">{indexOfFirstItem + index + 1}</td>
                    <td className="py-3 px-4">{user.userName}</td>
                    <td className="py-3 px-4">{user.divisi}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg">
                        <FaUserEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
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
          {Array.from(
            { length: Math.ceil(users.length / perPage) },
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


export default GenerateUser;
