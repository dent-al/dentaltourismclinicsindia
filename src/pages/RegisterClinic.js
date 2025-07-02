import React, { useState } from "react";

const plans = [
  { value: "basic", label: "Basic (Free)" },
  { value: "premium", label: "Premium (Paid)" },
];

const RegisterClinic = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    plan: plans[0].value,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to backend or store in localStorage
    let clinics = JSON.parse(localStorage.getItem("registeredClinics") || "[]");
    clinics.push(form);
    localStorage.setItem("registeredClinics", JSON.stringify(clinics));
    setSubmitted(true);
  };

  return (
    <div className="p-8 min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#ede7f6] to-[#fff3e0]">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 border-t-8 border-[#ff9800]">
        <h2 className="text-2xl font-bold mb-4 text-[#6548ee] text-center">
          Register Your{" "}
          <span className="text-[#ff9800]">Dental Clinic</span>
        </h2>
        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded text-center font-semibold">
            Registration successful! We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Clinic Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Contact Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
              required
            />
            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
            >
              {plans.map((plan) => (
                <option key={plan.value} value={plan.value}>
                  {plan.label}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ff9800] to-[#6548ee] text-white py-2 rounded font-semibold shadow hover:from-[#6548ee] hover:to-[#ff9800] transition"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterClinic;
