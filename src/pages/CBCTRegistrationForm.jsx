import React, { useState } from "react";

const cbctPlans = [
  {
    name: "Basic Plan",
    price: "₹2,999/year",
    features: [
      { label: "Visibility", value: "1 Clinic" },
      { label: "Banner / Photos", value: "❌" },
      { label: "Radiologist Profile", value: "❌" },
      { label: "Scan Sample Images", value: "✅" },
      { label: "Social Media Exposure", value: "❌" },
      { label: "Priority in Search Results", value: "❌" },
    ],
    button: "Pay Now",
    highlight: false,
  },
  {
    name: "Featured Plan",
    price: "₹5,999/year",
    features: [
      { label: "Visibility", value: "1 Clinic" },
      { label: "Banner / Photos", value: "❌" },
      { label: "Radiologist Profile", value: "❌" },
      { label: "Scan Sample Images", value: "✅" },
      { label: "Social Media Exposure", value: "1 Instagram & Facebook post/Month" },
      { label: "Priority in Search Results", value: "Medium" },
    ],
    button: "Pay Now",
    highlight: true,
  },
  {
    name: "Premium Plan",
    price: "₹14,999/year",
    features: [
      { label: "Visibility", value: "2 Clinics" },
      { label: "Banner / Photos", value: "✅" },
      { label: "Radiologist Profile", value: "✅" },
      { label: "Scan Sample Images", value: "✅" },
      { label: "Social Media Exposure", value: "2 Instagram, Facebook, YouTube post/Month" },
      { label: "Priority in Search Results", value: "Top Rank" },
    ],
    button: "Pay Now",
    highlight: false,
  },
];

const CBCTRegistrationForm = () => {
  const [form, setForm] = useState({
    centerName: '',
    ownerName: '',
    email: '',
    phone: '',
    altPhone: '',
    website: '',
    agreeDisclaimer: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Add API call or further logic here
  };

  if (submitted) {
    return (
      <div className="bg-[#F6FAFF] min-h-screen w-full flex flex-col items-center pt-8">
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 max-w-xl w-full flex flex-col items-center mt-8 mb-6">
          <h2 className="text-2xl font-bold text-[#2C73D2] mb-4 text-center">Thank you for registering!</h2>
          <p className="text-[#2C73D2] text-center mb-2">We have received your details and will contact you soon.</p>
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#2C73D2] mb-6 text-center">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {cbctPlans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`rounded-2xl shadow-xl bg-white p-6 flex flex-col items-center border-2 transition-transform duration-200 hover:scale-105 hover:shadow-2xl ${plan.highlight ? 'border-[#F4A300] ring-2 ring-[#F4A300]' : 'border-[#2C73D2]'}`}
              >
                <h3 className="text-xl font-bold text-[#2C73D2] mb-2 text-center">{plan.name}</h3>
                <div className="text-2xl font-bold text-[#F4A300] mb-4">{plan.price}</div>
                <ul className="mb-4 w-full">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex justify-between text-[#2C73D2] py-1 border-b border-dashed border-[#E0E7FF] last:border-0">
                      <span className="font-medium">{f.label}</span>
                      <span className="font-semibold">{f.value}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg font-bold text-lg transition ${plan.highlight ? 'bg-[#F4A300] text-white hover:bg-[#2C73D2] hover:text-[#F4A300]' : 'bg-[#2C73D2] text-white hover:bg-[#F4A300] hover:text-[#2C73D2]'}`}>{plan.button}</button>
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
        <h2 className="text-3xl font-bold text-[#2C73D2] mb-2 text-center drop-shadow">CBCT & OPG Center Registration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="centerName"
            value={form.centerName}
            onChange={handleChange}
            placeholder="Center Name"
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
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="py-3 px-4 rounded-lg border border-[#E0E7FF] bg-[#F6FAFF] text-[#2C73D2] placeholder-[#A0AEC0] shadow-sm focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2] focus:outline-none"
          />
          <input
            type="tel"
            name="altPhone"
            value={form.altPhone}
            onChange={handleChange}
            placeholder="Alternate Mobile Number"
            className="py-3 px-4 rounded-lg border border-[#E0E7FF] bg-[#F6FAFF] text-[#2C73D2] placeholder-[#A0AEC0] shadow-sm focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2] focus:outline-none"
          />
          <input
            type="url"
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="Website URL"
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
            id="cbctDisclaimer" 
            className="mt-1 text-[#2C73D2] focus:ring-[#2C73D2]"
            required 
          />
          <label htmlFor="cbctDisclaimer" className="text-sm text-[#2C73D2] leading-relaxed">
            <span className="font-semibold">Disclaimer:</span> I hereby declare that all the information provided above is true and accurate to the best of my knowledge. I understand that any false information may lead to the rejection of my registration. I agree to the terms and conditions of the platform and consent to the use of my data for verification and communication purposes.
          </label>
        </div>
        
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

export default CBCTRegistrationForm;
