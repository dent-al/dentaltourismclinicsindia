import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import consultBannerImg from '../assets/consult-banner.png';
import FullPageLoader from "../components/FullPageLoader";
import { useNavigate, Link } from "react-router-dom";
import consultImg from "../assets/consult.png";
import HeroBanner from "../components/HeroBanner";
import DentistSlider from "../components/DentistSlider";
import StatsAndHowItWorks from "../components/StatsAndHowItWorks";
import AdvantagesVirtualConsultation from "../components/AdvantagesVirtualConsultation";
import VirtualCareReviewsSlider from "../components/VirtualCareReviewsSlider";
import FAQSection from "../components/FAQSection";
import ConsultNowBanner from "../components/ConsultNowBanner";
import problems from "../data/problems";
import specialities from "../data/specialities";
// Demo specialists data
const specialists = [
  { name: "General Dentist", img: require('../assets/General Dentist.png'), desc: "Comprehensive oral care, restorative & cosmetic procedures, patient education & prevention.", points: [
    "Tooth cavities.", "White spot on teeth.", "Tooth wear.", "Dental jewellery.", "Performs regular dental check-ups.", "Clean teeth & removes plaque.", "Fills cavities."
  ] },
  { name: "Periodontist", img: require('../assets/Periodontist.png'), desc: "Treats gum disease, saves teeth by improving gum & bone health, dental implants & surgery.", points: [
    "Gum surgery.", "Teeth cleaning & polishing.", "Teeth whitening.", "Severe gum infection.", "Mouth care after cancer.", "Gum treatment.", "Bad breath.", "Gum pocket.", "Receding gums."
  ] },
  { name: "Prosthodontist", img: require('../assets/Prosthodontist.png'), desc: "Fix broken/missing teeth with natural-looking caps, dental implant caps specialists, denture specialists.", points: [
    "Wearing down of teeth.", "Teeth protector for night.", "Dental implants.", "Tooth replacement.", "Thin shells for teeth.", "Tooth crown.", "Smile makeover.", "Partial tooth cap.", "Tooth bridge."
  ] },
  { name: "Orthodontist", img: require('../assets/Orthodontist.png'), desc: "Straightens crooked teeth, uses braces & aligners to correct teeth, corrects problems like overbites, underbites & crossbites for better function.", points: [
    "Invisible braces.", "Dental braces.", "Crooked tooth.", "Braces adjustment.", "Tooth gap closure.", "Tooth alignment.", "Tooth spacing.", "Tooth crowding.", "Tooth protrusion."
  ] },
  { name: "Endodontist", img: require('../assets/Endodontist.png'), desc: "Specializes in saving teeth, performs root canal treatments, handles complex dental pain.", points: [
    "Root canal treatment.", "Tooth pain relief.", "Pulp therapy.", "Retreatment of failed root canals.", "Complex dental pain management.", "Tooth rescue treatment.", "Re-root canal treatment."
  ] },
  { name: "Cosmetic Dentist", img: require('../assets/Cosmetic Dentist.png'), desc: "Enhances smile, fixes chips, cracks, & other imperfections for a flawless look, customizes smile makeovers.", points: [
    "Tooth crown.", "Smile makeover.", "Partial tooth cap.", "Missing front tooth.", "Front tooth gap.", "Dental jewellery.", "Tooth wear.", "Teeth whitening.", "Gummy smile."
  ] },
  { name: "Pediatric Dentist", img: require('../assets/Children’s Dentistry.png'), desc: "Cares for children’s teeth, specializes in the dental needs of kids from babies to teens, helps children develop healthy brushing & flossing routines.", points: [
    "Teeth present at birth.", "Tight tongue skin.", "Thumb sucking.", "Tooth cavities.", "Tooth filling.", "Children's dentistry.", "Bad breath.", "Tooth sensitivity.", "Mouth breathing in kids."
  ] },
  { name: "Oral and Maxillofacial Surgeon", img: require('../assets/oral surgeon.png'), desc: "Wisdom tooth removal, fixes jaw issues & facial injuries through advanced surgery, places dental implants.", points: [
    "Adding bone to the socket.", "Dental implants.", "Fractured tooth.", "Facial twitch.", "Facial muscle twitching on one side.", "Hole in the roof of the mouth."
  ] },
  { name: "Holistic Dentist", img: require('../assets/Holistic Dentist.png'), desc: "Natural dental care, uses biocompatible materials & treatments that support overall health, focuses on whole-body wellness.", points: [
    "Tooth cavities.", "Tooth filling.", "Tooth rescue treatment.", "Partial tooth cap.", "Saves tooth from root canal treatment.", "Treats according to whole body wellness.", "Avoids harmful chemicals."
  ] },
  { name: "TMJ Wellness Expert", img: require('../assets/TMJ Wellness Expert.png'), desc: "Treats jaw pain & discomfort, specializes in diagnosing & treating TMJ disorders, helps alleviate headaches & muscle tension related to jaw issues.", points: [
    "Pain in the jaw joint.", "Ringing sound in ears.", "Jaw problems.​", "Jaw lock.", "Night guard.", "Headaches of one side.​", "Audible breathing.", "Jaw clenching.", "Teeth grinding."
  ] },
  { name: "Oral Medicine Specialist", img: require('../assets/Oral Medicine Specialist.png'), desc: "Diagnoses oral health disorders, specializes in identifying conditions that affect the mouth, jaw & related areas, manages chronic oral conditions.", points: [
    "Diagnosis & treating mouth problems that aren't caused by teeth.", "Mouth sores.", "Dry mouth.", "Burning sensation.", "Oral lesions.", "Tooth sensitivity.", "Mouth breathing."
  ] },
  { name: "Dental Implant Specialist", img: require('../assets/Dental Implant Specialist.png'), desc: "Specializes in placing dental implants, restores function & aesthetics, improves both the look & function of smile with implants.", points: [
    "Adding bone to the socket.", "Dental implants.", "Replacing missing teeth.", "Implant dentures.", "Smile makeover.", "Bone grafting.", "Implant-supported bridges.", "Immediate implant placement."
  ] },
  { name: "Oral Radiologist", img: require('../assets/Oral Radiologist.png'), desc: "Dental imaging expert, helps with accurate diagnosis, guides safe treatment planning.", points: [
    "CBCT expert.", "X-ray ", "MRI.", "Find dental health  problems.", "Indentify jaw joint issues.", "Detects hidden dental issues.", "Guides treatment planning."
  ] },
  { name: "Biomimetic Dentist", img: require('../assets/Biomimetic Dentist.png'), desc: "Mimics natural tooth function, uses advanced materials, techniques to restore teeth that look & function like natural ones.", points: [
    "Deep tooth cavities.", "Tooth rescue treatment.", "Sensitive teeth.", "Tooth fillings. ", "Uses natural looking materials.", "Preserves as much natural tooth as possible."
  ] },
];

const ConsultPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [problem, setProblem] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [other, setOther] = useState("");
  const [error, setError] = useState("");
  const [showSpecialistCard, setShowSpecialistCard] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Loader duration in ms
    return () => clearTimeout(timer);
  }, []);

  // Find matching speciality for selected problem
  const matchingSpeciality = problem
    ? specialities.find((s) => s.toLowerCase().includes(problem.toLowerCase()))
    : "";

  // Find matching specialist(s) for selected problem
  const matchingSpecialists = problem
    ? specialists.filter(s => s.points.some(pt => pt.toLowerCase().includes(problem.toLowerCase())))
    : "";

  const handleProblemSubmit = (e) => {
    e.preventDefault();
    if (!problem) {
      setError("Please select a Problem.");
      return;
    }
    setError("");
    setSpeciality(matchingSpeciality || "");
    setShowSpecialistCard(true);
    // Navigate to DentistList page with matching specialists
    navigate("/dentist-list", {
      state: {
        problem,
        speciality: matchingSpeciality || "",
        other,
        matchingSpecialists,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!speciality) {
      setError("Please select a Speciality.");
      return;
    }
    setError("");
    // Find matching specialists by speciality name
    const matchingSpecialistsBySpeciality = specialists.filter(s =>
      s.name.toLowerCase().includes(speciality.toLowerCase())
    );
    navigate("/dentist-list", {
      state: {
        problem,
        speciality,
        other,
        matchingSpecialists: matchingSpecialistsBySpeciality,
      },
    });
  };

  // Demo doctor names/images for illustration
  const demoDoctors = [
    { name: "AhmedK" },
    { name: "MichaelS" },
    { name: "PriyaR" }
  ];

  // Prepare doctor cards for selected speciality
  let doctorCards = [];
  if (speciality) {
    doctorCards = demoDoctors.map((doc, idx) => {
      const extensions = ["png", "jpg", "jpeg", "webp"];
      let imgSrc = require('../assets/doctor1.png'); // fallback
      for (let ext of extensions) {
        try {
          imgSrc = require(`../assets/${doc.name}.${ext}`);
          break;
        } catch {}
      }
      return (
        <div key={doc.name + idx} className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-yellow-900 font-semibold shadow flex flex-col items-center w-[180px]">
          <img src={imgSrc} alt={doc.name} className="w-14 h-14 object-cover rounded-full mb-2 border border-yellow-300" />
          <div>Dr. {doc.name} ({speciality})</div>
        </div>
      );
    });
  }

  if (loading) {
    return <FullPageLoader />;
  }
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white pb-8">
      {/* End Custom Consult Banner Section */}
      <HeroBanner consultBannerImg={consultBannerImg} />
      {/* Problem Section */}
      <div className="w-full flex flex-col items-center justify-center pt-4 pb-6 px-2 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C73D2] text-center mb-4 drop-shadow">
          Got a Dental Problem? Get Help Online in Minutes!
        </h2>
        <form
          className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center"
          onSubmit={handleProblemSubmit}
        >
          <select
            className="w-full sm:flex-1 min-w-[160px] max-w-full sm:max-w-[320px] px-4 py-3 rounded-lg border border-[#2C73D2] shadow focus:outline-none text-[#15396A] font-semibold bg-white"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          >
            <option value="">Choose your Problem</option>
            {problems.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="w-full sm:flex-1 min-w-[160px] max-w-full sm:max-w-[320px] px-4 py-3 rounded-lg border border-[#2C73D2] shadow focus:outline-none text-[#15396A] font-semibold bg-white"
            placeholder="Any other problem"
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#2C73D2] text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-[#F4A300] hover:text-white transition min-w-[120px]"
          >
            Submit
          </button>
        </form>
        {/* Show matching specialists for selected problem */}
        {problem && (
          <div className="w-full mt-4">
            <h3 className="text-lg font-bold text-[#2C73D2] mb-2">
              Matching Speciality:
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {matchingSpeciality ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-blue-900 font-semibold shadow">
                  {matchingSpeciality}
                </div>
              ) : (
                <div className="text-gray-500">No matching speciality found.</div>
              )}
            </div>
          </div>
        )}
        {showSpecialistCard && matchingSpecialists.length > 0 && (
          <div className="w-full mt-4">
            <h3 className="text-lg font-bold text-[#2C73D2] mb-2">Specialist Dentist Cards:</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {matchingSpecialists.map((spec, idx) => (
                <div key={spec.name + idx} className="bg-white border border-blue-200 rounded-lg px-6 py-4 text-blue-900 font-semibold shadow w-[260px] flex flex-col items-center">
                  <img src={spec.img} alt={spec.name} className="w-16 h-16 object-contain mb-2" />
                  <div className="text-xl font-bold mb-1">{spec.name}</div>
                  <div className="text-sm text-gray-600 mb-2 text-center">{spec.desc}</div>
                  <div className="text-xs text-gray-500 mb-2">Problems: {spec.points.filter(pt => pt.toLowerCase().includes(problem.toLowerCase())).join(", ")}</div>
                  <div className="text-sm text-gray-500">Location: Demo City</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {showSpecialistCard && matchingSpecialists.length === 0 && (
          <div className="w-full mt-4 text-center text-gray-500">No specialist found for this problem.</div>
        )}
        {error && (
          <div className="text-red-500 font-semibold mt-2">{error}</div>
        )}
      </div>
      {/* Speciality Section */}
      <div className="w-full flex flex-col items-center justify-center pt-4 pb-6 px-2 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C73D2] text-center mb-4 drop-shadow">
          Find a Specialist Dentist
        </h2>
        <form
          className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <select
            className="w-full sm:flex-1 min-w-[160px] max-w-full sm:max-w-[320px] px-4 py-3 rounded-lg border border-[#2C73D2] shadow focus:outline-none text-[#15396A] font-semibold bg-white"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            required
          >
            <option value="">Choose your Speciality</option>
            {specialities.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="w-full sm:flex-1 min-w-[160px] max-w-full sm:max-w-[320px] px-4 py-3 rounded-lg border border-[#2C73D2] shadow focus:outline-none text-[#15396A] font-semibold bg-white"
            placeholder="Any other speciality"
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#2C73D2] text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-[#F4A300] hover:text-white transition min-w-[120px]"
          >
            Submit
          </button>
        </form>
        {/* Show matching doctors for selected speciality */}
        {speciality && (
          <div className="w-full mt-4">
            <h3 className="text-lg font-bold text-[#2C73D2] mb-2">
              Matching Doctors:
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {doctorCards}
            </div>
          </div>
        )}
      </div>
      {/* Dentist Slider Section */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="relative w-full max-w-4xl">
          {/* DentistSlider with Consult Now button on each card */}
          <DentistSlider
            showArrows={true}
            arrowStyle="home"
            swipeable={true}
            transitionStyle="smooth"
            renderCard={dentist => (
              <div className="bg-white border border-blue-200 rounded-2xl px-6 py-6 text-[#15396A] font-semibold shadow w-full max-w-[340px] flex flex-col items-center">
                <img src={dentist.img} alt={dentist.name} className="w-24 h-24 object-cover rounded-full mb-4 border border-gray-200" />
                <div className="text-lg md:text-xl font-bold mb-1 text-[#2C73D2] text-center">{dentist.name}</div>
                <div className="text-base md:text-lg mb-2 text-center">{dentist.degree}</div>
                <div className="text-sm md:text-base mb-2 text-center">{dentist.speciality}</div>
                <div className="text-[#2C73D2] font-bold text-base md:text-lg mb-2">{dentist.experience}</div>
                <button
                  className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold px-5 py-2 rounded-lg shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition w-full flex items-center justify-center gap-2 border border-[#F4A300] mt-2"
                  style={{ fontSize: '1rem', marginTop: 'auto' }}
                  onClick={() => navigate('/dentist-profile', { state: { dentist, consult: true } })}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="mr-2"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2 0v10h12V5H4zm3 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V7zm4 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V7z"/></svg>
                  Consult Now
                </button>
              </div>
            )}
          />
        </div>
      </div>
      <StatsAndHowItWorks />
      <AdvantagesVirtualConsultation />
      <VirtualCareReviewsSlider />
      <ConsultNowBanner />
      <FAQSection />
    </div>
  );
};

export default ConsultPage;
