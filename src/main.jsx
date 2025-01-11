import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Beranda from "./user/beranda.jsx";
import DataDiri from "./user/dataDiri.jsx"
import GoAbsen from "./user/goAbsen.jsx"
import Peringkat from "./user/peringkat.jsx"
import RekapAbsen from "./user/rekapAbsen.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/dataDiri" element={<DataDiri />} />
        <Route path="/goAbsen" element={<GoAbsen />} />
        <Route path="/peringkat" element={<Peringkat />} />
        <Route path="/rekap" element={<RekapAbsen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
