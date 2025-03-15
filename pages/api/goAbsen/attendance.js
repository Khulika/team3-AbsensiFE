const API_URL = import.meta.env.VITE_API_URL;

export const submitAttendance = async ({ userId, userName, attendance, reason, latitude, longitude }) => {
  if (!userId) {
    throw new Error("Gagal mendapatkan userId. Harap login kembali.");
  }

  const attendanceData = {
    userId,
    locationId: 1,
    date: new Date().toISOString(),
    latitude,
    longitude,
    status: attendance.toUpperCase(),
    statusDescription: attendance === "izin" ? reason : "",
    isPresent: attendance === "hadir",
  };

  const response = await fetch(`${API_URL}/attendance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(attendanceData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.message === "Anda sudah mencatat kehadiran hari ini.") {
      throw new Error("Anda sudah melakukan absen hari ini.");
    }
    throw new Error("Gagal mencatat absensi.");
  }

  return userName;
};
