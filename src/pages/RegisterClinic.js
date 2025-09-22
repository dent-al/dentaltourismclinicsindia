
import React, { useState, useEffect } from "react";
import FullPageLoader from "../components/FullPageLoader";
import {
  registerDentalPractitioner,
  fetchDentalPractitioners,
} from "../services/dentalRegistrationService";

const RegisterClinic = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    state: "",
    qualification: "",
    file: null,
    ClinicName: "",
    ClinicPhoneNumber: "",
    ClinicAddress: "",
    ClinicFile: null,
    ClinicInstagram: "",
    ClinicWebsite: "",
    ClinicYoutube: "",
  });
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [practitioners, setPractitioners] = useState([]);

  useEffect(() => {
    fetchPractitioners();
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const fetchPractitioners = async () => {
    const res = await fetchDentalPractitioners();
    if (Array.isArray(res)) {
      setPractitioners(res);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateFiles = () => {
    // Validate file types and sizes
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!form.file) return "Personal document file is required";
    if (!allowedTypes.includes(form.file.type)) return "Only JPEG, PNG, or PDF files are allowed for personal document";
    if (form.file.size > 5 * 1024 * 1024) return "Personal document file size must be less than 5MB";
    if (form.ClinicFile) {
      if (!allowedTypes.includes(form.ClinicFile.type)) return "Only JPEG, PNG, or PDF files are allowed for clinic document";
      if (form.ClinicFile.size > 5 * 1024 * 1024) return "Clinic document file size must be less than 5MB";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    const fileError = validateFiles();
    if (fileError) {
      setError(fileError);
      return;
    }
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        formData.append(key, value);
      }
    });
    const res = await registerDentalPractitioner(formData);
    if (res.success) {
      setSubmitted(true);
      setSuccessMsg(res.message || "Dental registration created successfully");
      fetchPractitioners();
    } else {
      setError(res.message || "Registration failed");
    }
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="p-8 min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#ede7f6] to-[#fff3e0]">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 border-t-8 border-[#ff9800] mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#6548ee] text-center">
          Register Your <span className="text-[#ff9800]">Dental Clinic</span>
        </h2>
        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded text-center font-semibold">
            {successMsg || "Registration successful!"}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" required />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" required />
            <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" required />
            <input type="text" name="qualification" placeholder="Qualification" value={form.qualification} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" required />
            <label className="block text-sm font-semibold">Personal Document (JPEG/PNG/PDF, max 5MB)</label>
            <input type="file" name="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleChange} className="w-full" required />
            <input type="text" name="ClinicName" placeholder="Clinic Name (optional)" value={form.ClinicName} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" />
            <input type="tel" name="ClinicPhoneNumber" placeholder="Clinic Phone Number (optional)" value={form.ClinicPhoneNumber} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" />
            <input type="text" name="ClinicAddress" placeholder="Clinic Address (optional)" value={form.ClinicAddress} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" />
            <label className="block text-sm font-semibold">Clinic Document (JPEG/PNG/PDF, max 5MB, optional)</label>
            <input type="file" name="ClinicFile" accept=".jpg,.jpeg,.png,.pdf" onChange={handleChange} className="w-full" />
            <input type="url" name="ClinicInstagram" placeholder="Clinic Instagram (optional)" value={form.ClinicInstagram} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" />
            <input type="url" name="ClinicWebsite" placeholder="Clinic Website (optional)" value={form.ClinicWebsite} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" />
            <input type="url" name="ClinicYoutube" placeholder="Clinic Youtube (optional)" value={form.ClinicYoutube} onChange={handleChange} className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]" />
            {error && <div className="bg-red-100 text-red-700 p-2 rounded text-center font-semibold">{error}</div>}
            <button type="submit" className="w-full bg-gradient-to-r from-[#ff9800] to-[#6548ee] text-white py-2 rounded font-semibold shadow hover:from-[#6548ee] hover:to-[#ff9800] transition">Register</button>
          </form>
        )}
      </div>
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-6 border-t-4 border-[#6548ee]">
        <h3 className="text-xl font-bold mb-4 text-[#6548ee]">Registered Dental Practitioners</h3>
        {practitioners.length === 0 ? (
          <div className="text-gray-500">No registrations found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#ede7f6]">
                  <th className="px-2 py-1">Name</th>
                  <th className="px-2 py-1">Email</th>
                  <th className="px-2 py-1">Phone</th>
                  <th className="px-2 py-1">State</th>
                  <th className="px-2 py-1">Qualification</th>
                  <th className="px-2 py-1">Clinic Name</th>
                  <th className="px-2 py-1">Created At</th>
                </tr>
              </thead>
              <tbody>
                {practitioners.map((p) => (
                  <tr key={p._id} className="border-b">
                    <td className="px-2 py-1">{p.name}</td>
                    <td className="px-2 py-1">{p.email}</td>
                    <td className="px-2 py-1">{p.phoneNumber}</td>
                    <td className="px-2 py-1">{p.state}</td>
                    <td className="px-2 py-1">{p.qualification}</td>
                    <td className="px-2 py-1">{p.ClinicName || '-'}</td>
                    <td className="px-2 py-1">{new Date(p.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterClinic;
