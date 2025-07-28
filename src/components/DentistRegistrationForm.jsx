import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];
const specialities = [
  "General Dentist", "Orthodontist", "Periodontist", "Endodontist", "Prosthodontist", "Oral Surgeon", "Pedodontist", "Oral Radiologist", "Other"
];

const dentistBg = require("../assets/Dental Implants.png"); // Use a relevant dentist image from assets


// List of dental problems (customize as needed)
const DENTAL_PROBLEMS = [
  "Adding Bone to the Socket",
  "Bad Breath",
  "Burning Mouth",
  "Complete Denture",
  "Biting Down Hard",
  "Dental Implants",
  "Dental Braces",
  "Dry Mouth",
  "Dental Jewellery",
  "Fractured Tooth",
  "Facial Twitch",
  "Mouth Breathing in Kids",
  "Front Tooth Gap",
  "Gum Treatment",
  "Diabetic Mouth Changes",
  "Lump on the Facial Nerve",
  "Loud Sleeping",
  "Mouth Guard for Sports",
  "Missing Front Tooth",
  "Mouth Ulcer",
  "Mouth Red Patch",
  "Mouth Infection",
  "Mouth Cancer",
  "Mouth Care After Cancer",
  "One Sided Facial Weakness",
  "Partial Tooth Cap",
  "Producing Too Much Saliva",
  "Pain in the Jaw Joint",
  "Root Canal Treatment",
  "Ringing Sound in Ears",
  "Re-Root Canal Treatment",
  "Removable Teeth",
  "Split Lip",
  "Smoking Habit",
  "Stone in the Saliva Gland",
  "Smile Makeover",
  "Severe Gum Infection",
  "Tight Tongue Skin",
  "Teeth Present at Birth",
  "Tongue Pushing",
  "Trapped Back Tooth",
  "Tooth Crown",
  "Tooth Wear",
  "Tooth Rescue Treatment",
  "Tooth Removal",
  "Teeth Whitening",
  "Thin Shells for Teeth",
  "Teeth Cleaning & Polishing",
  "Tooth Replacement",
  "Tooth is Stuck",
  "Thumb Sucking",
  "Teeth Protector for Night",
  "Tooth Cavities",
  "White Spots on Teeth",
  "Invisible Braces",
  "Dry Peeling Lips",
  "Wearing Down of Teeth",
  "Gum Pocket",
  "Sensitive Teeth",
  "Tooth Filling",
  "Crooked Tooth",
  "Bleeding Gums",
  "Swollen Gums",
  "Loose Teeth",
  "Discoloured Teeth",
  "Swelling Inside Mouth",
  "Eruption Issues in Kids",
  "Grinding Teeth at Night",
  "Audible Breathing",
  "Uncomfortable Denture",
  "Facial Asymmetry",
  "Oral Cancer Screening",
  "Delayed Eruption of Teeth",
  "Hole in the Roof of the Mouth",
  "Nutrition Deficiency Symptoms",
  "Difficulty in Chewing & Kids Speaking",
  "Facial Muscle Twitching on One Side",
  "Braces Adjustment",
  "Toothache",
  "Dental Implant Pain",
  "Wisdom Tooth Swelling"
];

const DentistRegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    problems: [], // new field for selected problems
    image: null,
    gradCollege: "",
    gradYear: "",
    gradReg: "",
    postCollege: "",
    postYear: "",
    postSpec: "",
    otherQual: "",
    hasClinic: false,
    clinicName: "",
    clinicPhone: "",
    clinicAddress: "",
    clinicInsta: "",
    clinicWebsite: "",
    clinicYoutube: "",
    clinicImage: null,
    agreeDisclaimer: false
  });
  const [problemsOpen, setProblemsOpen] = useState(false);
  const [problemsSearch, setProblemsSearch] = useState("");
  const problemsRef = React.useRef();
  const navigate = useNavigate();


  const handleChange = e => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm(f => ({ ...f, [name]: checked }));
    } else if (type === "file") {
      const file = files[0];
      if (file) {
        // Check file size (200KB = 200 * 1024 bytes)
        if (file.size > 200 * 1024) {
          alert(`File size must be less than 200KB. Selected file is ${(file.size / 1024).toFixed(1)}KB`);
          e.target.value = ''; // Clear the input
          return;
        }
      }
      setForm(f => ({ ...f, [name]: file }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  // Multi-select handlers for problems
  const handleProblemToggle = (problem) => {
    setForm(f => ({
      ...f,
      problems: f.problems.includes(problem)
        ? f.problems.filter(p => p !== problem)
        : [...f.problems, problem]
    }));
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (problemsRef.current && !problemsRef.current.contains(e.target)) {
        setProblemsOpen(false);
      }
    }
    if (problemsOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [problemsOpen]);

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/pricing-plans');
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#eaf2fb] relative"
      style={{
        backgroundImage: `url(${dentistBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for blur and dim */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl" />
      <form
        className="relative z-10 w-full max-w-2xl mx-auto rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col gap-8 bg-white/80 backdrop-blur-2xl border border-[#2C73D2]/10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold text-[#2C73D2] mb-2 text-center drop-shadow-lg">Dentist Registration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="rounded-xl shadow-md px-5 py-3 border border-gray-200 focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2]/30 outline-none bg-white/90 transition-all text-[#15396A] text-base" required />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="rounded-xl shadow-md px-5 py-3 border border-gray-200 focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2]/30 outline-none bg-white/90 transition-all text-[#15396A] text-base" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-xl shadow-md px-5 py-3 border border-gray-200 focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2]/30 outline-none bg-white/90 transition-all text-[#15396A] text-base" required />
          <select name="state" value={form.state} onChange={handleChange} className="rounded-xl shadow-md px-5 py-3 border border-gray-200 focus:border-[#2C73D2] focus:ring-2 focus:ring-[#2C73D2]/30 outline-none bg-white/90 transition-all text-[#15396A] text-base" required>
            <option value="">Select State</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          {/* Multi-select for dental problems (full width) */}
          <div className="md:col-span-2 flex flex-col gap-1" ref={problemsRef}>
            <label className="text-sm font-semibold text-[#2C73D2]">Problems You Treat (Select Multiple)</label>
            <div className="relative">
              <div
                className="flex flex-wrap items-center gap-2 p-2 min-h-[40px] text-sm border border-gray-200 bg-white/90 rounded-xl shadow-md cursor-text focus-within:ring-2 focus-within:ring-[#2C73D2]/30"
                onClick={() => setProblemsOpen(true)}
              >
                {form.problems.length === 0 && (
                  <span className="text-gray-400">Select problems...</span>
                )}
                {form.problems.map(problem => (
                  <span key={problem} className="flex items-center gap-1 bg-[#eaf2fb] text-[#2C73D2] font-medium px-2 py-1 rounded-md">
                    {problem}
                    <button
                      type="button"
                      className="text-[#2C73D2] hover:text-red-500 rounded-full ml-1"
                      onClick={e => {
                        e.stopPropagation();
                        handleProblemToggle(problem);
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  value={problemsSearch}
                  onChange={e => setProblemsSearch(e.target.value)}
                  onFocus={() => setProblemsOpen(true)}
                  placeholder={form.problems.length === 0 ? "Select problems..." : ""}
                  className="flex-grow bg-transparent border-none outline-none text-[#15396A] placeholder:text-gray-400 text-sm p-0 min-w-[80px]"
                />
              </div>
              {problemsOpen && (
                <div className="absolute z-10 w-full mt-2 border border-gray-200 bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto animate-popover-in">
                  <ul className="p-1">
                    {DENTAL_PROBLEMS.filter(p =>
                      !form.problems.includes(p) &&
                      p.toLowerCase().includes(problemsSearch.toLowerCase())
                    ).map(problem => (
                      <li
                        key={problem}
                        className="p-2 cursor-pointer rounded-md hover:bg-[#eaf2fb] text-[#15396A]"
                        onClick={() => handleProblemToggle(problem)}
                      >
                        {problem}
                      </li>
                    ))}
                    {DENTAL_PROBLEMS.filter(p =>
                      !form.problems.includes(p) &&
                      p.toLowerCase().includes(problemsSearch.toLowerCase())
                    ).length === 0 && (
                      <li className="p-2 text-center text-gray-400">No options found.</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-semibold text-[#2C73D2]">Dentist Image (Max 200KB)</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} className="rounded-xl shadow-md px-5 py-3 border border-gray-200 bg-white/90" />
          </div>
        </div>
        <div className="bg-[#F5F8FF]/80 rounded-2xl p-6 shadow-inner">
          <h3 className="font-bold text-[#2C73D2] mb-2">Qualification</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <input name="gradCollege" value={form.gradCollege} onChange={handleChange} placeholder="Graduation College Name" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" required />
            <input name="gradYear" value={form.gradYear} onChange={handleChange} placeholder="Passing Year with Intern" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" required />
            <input name="gradReg" value={form.gradReg} onChange={handleChange} placeholder="Registration Number" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <input name="postCollege" value={form.postCollege} onChange={handleChange} placeholder="Postgraduation College Name" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
            <input name="postYear" value={form.postYear} onChange={handleChange} placeholder="Postgraduation Passing Year" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
            <select name="postSpec" value={form.postSpec} onChange={handleChange} className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base">
              <option value="">Speciality</option>
              {specialities.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <input name="otherQual" value={form.otherQual} onChange={handleChange} placeholder="Other Qualifications" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" name="hasClinic" checked={form.hasClinic} onChange={handleChange} id="hasClinic" />
          <label htmlFor="hasClinic" className="font-semibold text-[#2C73D2]">Have a Dental Clinic? Fill Out This Form</label>
        </div>
        
        {/* Disclaimer Checkbox */}
        <div className="flex items-start gap-3 mt-4 p-4 bg-[#F5F8FF]/60 rounded-xl border border-[#2C73D2]/20">
          <input 
            type="checkbox" 
            name="agreeDisclaimer" 
            checked={form.agreeDisclaimer} 
            onChange={handleChange} 
            id="agreeDisclaimer" 
            className="mt-1 text-[#2C73D2] focus:ring-[#2C73D2]"
            required 
          />
          <label htmlFor="agreeDisclaimer" className="text-sm text-[#15396A] leading-relaxed">
            <span className="font-semibold text-[#2C73D2]">Disclaimer:</span> I hereby declare that all the information provided above is true and accurate to the best of my knowledge. I understand that any false information may lead to the rejection of my registration. I agree to the terms and conditions of the platform and consent to the use of my data for verification and communication purposes.
          </label>
        </div>
        {form.hasClinic && (
          <div className="bg-[#F5F8FF]/80 rounded-2xl p-6 mt-2 shadow-inner">
            <h3 className="font-bold text-[#2C73D2] mb-2">Clinic Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="clinicName" value={form.clinicName} onChange={handleChange} placeholder="Clinic Name" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
              <input name="clinicPhone" value={form.clinicPhone} onChange={handleChange} placeholder="Clinic Phone Number" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
              <input name="clinicAddress" value={form.clinicAddress} onChange={handleChange} placeholder="Clinic Address" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
              <input name="clinicInsta" value={form.clinicInsta} onChange={handleChange} placeholder="Clinic Instagram" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
              <input name="clinicWebsite" value={form.clinicWebsite} onChange={handleChange} placeholder="Clinic Website" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
              <input name="clinicYoutube" value={form.clinicYoutube} onChange={handleChange} placeholder="Clinic Youtube" className="rounded-xl shadow px-4 py-3 border border-gray-200 focus:border-[#2C73D2] outline-none bg-white/90 text-[#15396A] text-base" />
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm font-semibold text-[#2C73D2]">Clinic Image (Max 200KB)</label>
                <input type="file" name="clinicImage" accept="image/*" onChange={handleChange} className="rounded-xl shadow px-4 py-3 border border-gray-200 bg-white/90" />
              </div>
            </div>
          </div>
        )}
        <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2C73D2] to-[#2056AE] text-white font-bold text-xl shadow-lg hover:from-[#2056AE] hover:to-[#2C73D2] transition mt-4 tracking-wide">Submit</button>
      </form>
    </div>
  );
};

export default DentistRegistrationForm;
