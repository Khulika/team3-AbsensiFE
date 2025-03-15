const API_URL = import.meta.env.VITE_API_URL;

export const fetchUsers = async (token) => {
  try {
    if (!token) throw new Error("Token tidak ditemukan");

    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Gagal mengambil data user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createUser = async (userData) => {
  try {
    const token = localStorage.getItem("accessToken"); 

    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Gagal menambahkan user");
    }

    return await response.json();
  } catch (error) {
    console.error("Error saat menambahkan user:", error);
    throw error;
  }
};
