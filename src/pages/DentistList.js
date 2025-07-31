import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import FullPageLoader from "../components/FullPageLoader";

// Specialists array copied from Home.js
const specialists = [
  { name: "General Dentist", img: require('../assets/General Dentist.png'), desc: "Comprehensive oral care, restorative & cosmetic procedures, patient education & prevention.", points: [
    "Tooth cavities.",
    "White spot on teeth.",
    "Tooth wear.",
    "Dental jewellery.",
    "Performs regular dental check-ups.",
    "Clean teeth & removes plaque.",
    "Fills cavities."
  ] },
  { name: "Periodontist", img: require('../assets/Periodontist.png'), desc: "Treats gum disease, saves teeth by improving gum & bone health, dental implants & surgery.", points: [
    "Gum surgery.",
    "Teeth cleaning & polishing.",
    "Teeth whitening.",
    "Severe gum infection.",
    "Mouth care after cancer.",
    "Gum treatment.",
    "Bad breath.",
    "Gum pocket.",
    "Receding gums."
  ] },
  { name: "Prosthodontist", img: require('../assets/Prosthodontist.png'), desc: "Fix broken/missing teeth with natural-looking caps, dental implant caps specialists, denture specialists.", points: [
    "Wearing down of teeth.",
    "Teeth protector for night.",
    "Dental implants.",
    "Tooth replacement.",
    "Thin shells for teeth.",
    "Tooth crown.",
    "Smile makeover.",
    "Partial tooth cap.",
    "Tooth bridge."
  ] },
  { name: "Orthodontist", img: require('../assets/Orthodontist.png'), desc: "Straightens crooked teeth, uses braces & aligners to correct teeth, corrects problems like overbites, underbites & crossbites for better function.", points: [
    "Invisible braces.",
    "Dental braces.",
    "Crooked tooth.",
    "Braces adjustment.",
    "Tooth gap closure.",
    "Tooth alignment.",
    "Tooth spacing.",
    "Tooth crowding.",
    "Tooth protrusion."
  ] },
  { name: "Endodontist", img: require('../assets/Endodontist.png'), desc: "Specializes in saving teeth, performs root canal treatments, handles complex dental pain.", points: [
    "Root canal treatment.",
    "Tooth pain relief.",
    "Pulp therapy.",
    "Retreatment of failed root canals.",
    "Complex dental pain management.",
    "Tooth rescue treatment.",
    "Re-root canal treatment."
  ] },
  { name: "Oral and Maxillofacial Surgeon", img: require('../assets/oral surgeon.png'), desc: "Wisdom tooth removal, fixes jaw issues & facial injuries through advanced surgery, places dental implants.", points: [
    "Adding bone to the socket.",
    "Dental implants.",
    "Fractured tooth.",
    "Facial twitch.",
    "Facial muscle twitching on one side.",
    "Hole in the roof of the mouth."
  ] },
  { name: "Holistic Dentist", img: require('../assets/Holistic Dentist.png'), desc: "Natural dental care, uses biocompatible materials & treatments that support overall health, focuses on whole-body wellness.", points: [
    "Tooth cavities.",
    "Tooth filling.",
    "Tooth rescue treatment.",
    "Partial tooth cap.",
    "Saves tooth from root canal treatment.",
    "Treats according to whole body wellness.",
    "Avoids harmful chemicals."
  ] },
  { name: "TMJ Wellness Expert", img: require('../assets/TMJ Wellness Expert.png'), desc: "Treats jaw pain & discomfort, specializes in diagnosing & treating TMJ disorders, helps alleviate headaches & muscle tension related to jaw issues.", points: [
    "Pain in the jaw joint.",
    "Ringing sound in ears.",
    "Jaw problems.​",
    "Jaw lock.",
    "Night guard.",
    "Headaches of one side.​",
    "Audible breathing.",
    "Jaw clenching.",
    "Teeth grinding."
  ] },
  { name: "Oral Medicine Specialist", img: require('../assets/Oral Medicine Specialist.png'), desc: "Diagnoses oral health disorders, specializes in identifying conditions that affect the mouth, jaw & related areas, manages chronic oral conditions.", points: [
    "Diagnosis & treating mouth problems that aren't caused by teeth.",
    "Mouth sores.",
    "Dry mouth.",
    "Burning sensation.",
    "Oral lesions.",
    "Tooth sensitivity.",
    "Mouth breathing."
  ] },
  { name: "Dental Implant Specialist", img: require('../assets/Dental Implant Specialist.png'), desc: "Specializes in placing dental implants, restores function & aesthetics, improves both the look & function of smile with implants.", points: [
    "Adding bone to the socket.",
    "Dental implants.",
    "Replacing missing teeth.",
    "Implant dentures.",
    "Smile makeover.",
    "Bone grafting.",
    "Implant-supported bridges.",
    "Immediate implant placement."
  ] },
  { name: "Oral Radiologist", img: require('../assets/Oral Radiologist.png'), desc: "Dental imaging expert, helps with accurate diagnosis, guides safe treatment planning.", points: [
    "CBCT expert.",
    "X-ray ",
    "MRI.",
    "Find dental health  problems.",
    "Indentify jaw joint issues.",
    "Detects hidden dental issues.",
    "Guides treatment planning."
  ] },
];

const DentistList = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const selectedProblem = location.state?.problem || "";
  // Use matchingSpecialists from navigation state if available
  const matchingSpecialists = location.state?.matchingSpecialists && Array.isArray(location.state.matchingSpecialists)
    ? location.state.matchingSpecialists
    : specialists.filter(spec =>
        spec.points.some(point =>
          point.toLowerCase().includes(selectedProblem.toLowerCase()) || selectedProblem.toLowerCase().includes(point.toLowerCase())
        )
      );

  // Ensure matchingSpecialists is always an array
  const safeMatchingSpecialists = Array.isArray(matchingSpecialists) && matchingSpecialists.length > 0
    ? matchingSpecialists
    : specialists.slice(0, 1); // fallback: show 5 demo cards for General Dentist

  // If a speciality is selected, filter specialists by that speciality
  const selectedSpeciality = location.state?.speciality || "";
  const filteredSpecialists = selectedSpeciality
    ? specialists.filter(s => s.name.toLowerCase().includes(selectedSpeciality.toLowerCase()))
    : safeMatchingSpecialists;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <FullPageLoader />;

  return (
    <div className="min-h-screen w-full bg-[#15396A] flex flex-col items-center justify-start pt-24 pb-8">
      <HeroBanner />
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 border border-[#2C73D2] mt-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C73D2] mb-6 text-center">Dentist List</h2>
        {selectedProblem && (
          <h3 className="text-xl font-bold text-[#2C73D2] mb-4 text-center">Specialist(s) for: {selectedProblem}</h3>
        )}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredSpecialists.length > 0 ? filteredSpecialists.map((spec, idx) => (
            <React.Fragment key={spec.name}>
              {[1,2,3,4,5].map((num) => (
                <div key={spec.name + num} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 w-[260px] min-h-[320px]">
                  <img src={spec.img} alt={spec.name} className="h-20 w-20 object-contain rounded-full mb-4" />
                  <div className="text-lg font-bold text-[#2C73D2] mb-2 text-center">Dr. Demo {num}</div>
                  <div className="text-base text-gray-700 text-center mb-2">{spec.desc}</div>
                  <div className="text-sm text-gray-500 mb-2">Speciality: {spec.name}</div>
                  <div className="text-sm text-gray-500">Location: Demo City</div>
                </div>
              ))}
            </React.Fragment>
          )) : (
            <div className="text-base text-gray-500">No matching specialist found for this problem.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DentistList;
