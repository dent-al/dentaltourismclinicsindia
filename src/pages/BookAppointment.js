import React, { useState } from "react";
import { useParams } from "react-router-dom";

const mockClinics = [
  { id: 1, name: "Smile Dental Care" },
  { id: 2, name: "Pearl Dental Clinic" },
  { id: 3, name: "Bright Smiles" },
];

const BookAppointment = () => {
  const { id } = useParams();
  const clinic = mockClinics.find((c) => c.id === Number(id));
  const [form, setForm] = useState({ name: "", date: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!clinic) return <div className="p-8">Clinic not found.</div>;

  return (
    <div className="p-8 min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#ede7f6] to-[#fff3e0]">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border-t-8 border-[#6548ee]">
        <h2 className="text-2xl font-bold mb-4 text-[#6548ee] text-center">
          Book Appointment at{" "}
          <span className="text-[#ff9800]">{clinic.name}</span>
        </h2>
        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded text-center font-semibold">
            Appointment booked successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6548ee] to-[#ff9800] text-white py-2 rounded font-semibold shadow hover:from-[#ff9800] hover:to-[#6548ee] transition"
            >
              Book
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
