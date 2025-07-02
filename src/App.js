import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ClinicList from "./pages/ClinicList";
import ClinicDetails from "./pages/ClinicDetails";
import BookAppointment from "./pages/BookAppointment";
import RegisterClinic from "./pages/RegisterClinic";
import Login from "./pages/Login";
import PhoneRegistration from "./components/PhoneRegistration";

function App() {
  const [registered, setRegistered] = useState(false);

  // Show phone registration first
  if (!registered) {
    return <PhoneRegistration onContinue={() => setRegistered(true)} />;
  }

  return (
    <Router>
      <div className="pt-20 min-h-screen bg-[#ede7f6]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clinics" element={<ClinicList />} />
          <Route path="/clinic/:id" element={<ClinicDetails />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/register-clinic" element={<RegisterClinic />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
