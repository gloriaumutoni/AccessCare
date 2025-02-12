import { Routes, Route } from "react-router"
import "./App.css"
import Home from "./Pages/Home"
import Bookings from "./Pages/Bookings"
import Login from "./Pages/Login"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
