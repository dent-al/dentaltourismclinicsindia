import React, { useState, useEffect } from "react";
import {
  registerPharmaBrand,
  fetchPharmaBrands,
} from "../services/pharmaBrandService";

const plans = [
  {
    name: "Basic Plan",
    price: "₹3,999/year",
    highlight: false,
    color: "from-blue-100 to-blue-50",
    features: [
      { label: "Listing in Product Directory", value: "Up to 2 Products" },
      { label: "Product Images & Description", value: true },
      { label: "Visibility Priority", value: false },
      { label: "Social Media Exposure", value: false },
      { label: "Featured on Home Page", value: false },
      { label: "Access to Advertisement Plans", value: "Optional Add on" },
    ],
  },
  {
    name: "Featured Plan",
    price: "₹6,999/year",
    highlight: true,
    color: "from-purple-100 to-purple-50",
    features: [
      { label: "Listing in Product Directory", value: "Up to 4 Products" },
      { label: "Product Images & Description", value: true },
      { label: "Visibility Priority", value: false },
      { label: "Social Media Exposure", value: "1 Instagram & Facebook post/Month" },
      { label: "Featured on Home Page", value: true },
      { label: "Access to Advertisement Plans", value: "Optional Add on" },
    ],
  },
  {
    name: "Premium Plan",
    price: "₹9,999/year",
    highlight: false,
    color: "from-yellow-100 to-yellow-50",
    features: [
      { label: "Listing in Product Directory", value: "Unlimited" },
      { label: "Product Images & Description", value: true },
      { label: "Visibility Priority", value: true },
      { label: "Social Media Exposure", value: "2 Instagram, Facebook, YouTube post/Month" },
      { label: "Featured on Home Page", value: true },
      { label: "Access to Advertisement Plans", value: "Optional Add on" },
    ],
  },
];

const iconCheck = (
  <span className="inline-block text-green-500 text-xl font-bold align-middle">✔</span>
);
const iconCross = (
  <span className="inline-block text-red-600 text-xl font-bold align-middle">✖</span>
);


const PharmaBrandsRegistrationForm = () => {
  const [form, setForm] = useState({
    brandName: '',
    ownerName: '',
    email: '',
    phoneNumber: '',
    alternativeNumber: '',
    websiteURL: '',
    agreeDisclaimer: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const res = await fetchPharmaBrands();
    if (res.success && Array.isArray(res.brands)) {
      setBrands(res.brands);
    } else {
      setBrands([]);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!form.brandName || !form.ownerName || !form.email || !form.phoneNumber || !form.websiteURL) {
      return "All required fields must be filled";
    }
    if (!/^\d{10}$/.test(form.phoneNumber)) {
      return "Phone number must be 10 digits";
    }
    if (form.alternativeNumber && !/^\d{10}$/.test(form.alternativeNumber)) {
      return "Alternate number must be 10 digits";
    }
    if (!/^https?:\/\/.+/.test(form.websiteURL)) {
      return "Website URL must be valid";
    }
    if (!form.agreeDisclaimer) {
      return "You must agree to the disclaimer";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    const payload = {
      brandName: form.brandName,
      OwnerName: form.ownerName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      alternativeNumber: form.alternativeNumber,
      websiteURL: form.websiteURL,
    };
    const res = await registerPharmaBrand(payload);
    if (res.success) {
      setSubmitted(true);
      setSuccessMsg(res.message || "Pharma brand created successfully");
      fetchBrands();
    } else {
      setError(res.message || "Registration failed");
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#F6FAFF] min-h-screen w-full flex flex-col items-center pt-8">
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 max-w-6xl w-full flex flex-col items-center mt-8 mb-6">
          <h2 className="text-2xl font-bold text-[#2C73D2] mb-2 text-center">{successMsg || "Thank you for registering!"}</h2>
          <p className="text-[#2C73D2] text-center mb-8">We have received your details and will contact you soon.</p>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`flex-1 bg-gradient-to-br ${plan.color} rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 ${plan.highlight ? 'border-[#7c3aed] ring-2 ring-[#7c3aed]' : 'border-[#2C73D2]'} transition-transform duration-200 hover:scale-105 hover:shadow-2xl`}
                style={{ minWidth: 280, maxWidth: 350 }}
              >
                <div className="w-full flex flex-col items-center mb-4">
                  <h3 className={`text-2xl font-bold mb-1 text-center ${plan.highlight ? 'text-[#7c3aed]' : 'text-[#2C73D2]'}`}>{plan.name}</h3>
                  <div className="text-3xl font-extrabold text-[#F4A300] mb-2">{plan.price}</div>
                </div>
                <ul className="w-full mb-6">
                  {plan.features.map((f, i) => (
                    <li key={f.label} className="flex items-center justify-between py-2 border-b border-dashed border-[#E0E7FF] last:border-0 text-[#2C73D2] text-base">
                      <span className="font-medium">{f.label}</span>
                      <span className="font-semibold">
                        {typeof f.value === 'boolean'
                          ? (f.value ? iconCheck : iconCross)
                          : f.value || iconCross}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold text-lg shadow-lg transition-all duration-200 ${plan.highlight ? 'bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white hover:from-[#a78bfa] hover:to-[#7c3aed]' : 'bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white hover:from-[#F4A300] hover:to-[#2C73D2]'}`}
                  style={{ boxShadow: '0 4px 16px #b0b8d1' }}>
                  Pay Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F6FAFF] min-h-screen w-full flex flex-col items-center pt-8">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full flex flex-col gap-6 mt-4">
        <h2 className="text-3xl font-bold text-[#2C73D2] mb-2 text-center drop-shadow">Pharma & Brands Registration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="brandName"
            value={form.brandName}
            onChange={handleChange}
            placeholder="Brand Name"
            required
            className="py-3 px-4 rounded-lg border border-[#E0E7FF] bg-[#F6FAFF] text-[#2C73D2] placeholder-[#A0AEC0] shadow-sm focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2] focus:outline-none"
          />
          <input
            type="text"
            name="ownerName"
            value={form.ownerName}
            onChange={handleChange}
            placeholder="Owner/Manager Name"
            required
            className="py-3 px-4 rounded-lg border border-[#E0E7FF] bg-[#F6FAFF] text-[#2C73D2] placeholder-[#A0AEC0] shadow-sm focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2] focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="py-3 px-4 rounded-lg border border-[#E0E7FF] bg-[#F6FAFF] text-[#2C73D2] placeholder-[#A0AEC0] shadow-sm focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2] focus:outline-none md:col-span-2"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="py-3 px-4 rounded-lg border border-[#E0E7FF] bg-[#F6FAFF] text-[#2C73D2] placeholder-[#A0AEC0] shadow-sm focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2] focus:outline-none"
          />
          <input
            type="tel"
            name="alternativeNumber"
            value={form.alternativeNumber}
            onChange={handleChange}
            placeholder="Alternate Mobile Number"
            className="py-3 px-4 rounded-lg border border-[#E0E7FF] bg-[#F6FAFF] text-[#2C73D2] placeholder-[#A0AEC0] shadow-sm focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2] focus:outline-none"
          />
          <input
            type="url"
            name="websiteURL"
            value={form.websiteURL}
            onChange={handleChange}
            placeholder="Website URL"
            required
            className="py-3 px-4 rounded-lg border border-[#E0E7FF] bg-[#F6FAFF] text-[#2C73D2] placeholder-[#A0AEC0] shadow-sm focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2] focus:outline-none md:col-span-2"
          />
        </div>
        {/* Disclaimer Checkbox */}
        <div className="flex items-start gap-3 mt-4 p-4 bg-[#F6FAFF] rounded-xl border border-[#2C73D2]/20">
          <input 
            type="checkbox" 
            name="agreeDisclaimer" 
            checked={form.agreeDisclaimer} 
            onChange={handleChange} 
            id="pharmaDisclaimer" 
            className="mt-1 text-[#2C73D2] focus:ring-[#2C73D2]"
            required 
          />
          <label htmlFor="pharmaDisclaimer" className="text-sm text-[#2C73D2] leading-relaxed">
            <span className="font-semibold">Disclaimer:</span> I hereby declare that all the information provided above is true and accurate to the best of my knowledge. I understand that any false information may lead to the rejection of my registration. I agree to the terms and conditions of the platform and consent to the use of my data for verification and communication purposes.
          </label>
        </div>
        {error && <div className="bg-red-100 text-red-700 p-2 rounded text-center font-semibold">{error}</div>}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#2C73D2] text-white font-bold text-lg shadow-md hover:bg-[#F4A300] hover:text-[#2C73D2] transition mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PharmaBrandsRegistrationForm;