import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import logo from '../assets/custom-logo.png';
import allStatesAndUTs from '../data/allStatesAndUTs';

// Updated features array with new titles, descriptions, and links
const features = [
	{
		image: require("../assets/consult.png"),
		title: "Instant Video Consultation",
		desc: "Consult a dentist online instantly from anywhere.",
		link: "/consult"
	},
	{
		image: require("../assets/clinic.png"),
		title: "Find a Trusted Dental Clinic Near You",
		desc: "Search and book appointments with top-rated dental clinics.",
		link: "/clinics"
	},
	{
		image: require("../assets/scan.png.png"),
		title: "3D Dental Scan Near You",
		desc: "Locate CBCT & OPG dental scan centers easily.",
		link: "/cbct-opg-lab"
	},
	{
		image: require("../assets/bloodtest.png.png"),
		title: "Blood Test Near You",
		desc: "Book a blood test at a lab close to your location.",
		link: "/blood-test-lab"
	},
];

// Slider data for problems (62 real problems)
const sliderProblems = [
  { name: "Adding Bone to the Socket" },
  { name: "Bad Breath" },
  { name: "Burning Mouth" },
  { name: "Biting Down Hard" },
  { name: "Complete Denture" },
  { name: "Children’s Dentistry" },
  { name: "Dental Implants" },
  { name: "Dental Braces" },
  { name: "Dry Mouth" },
  { name: "Dental Jewellery" },
  { name: "Fractured Tooth" },
  { name: "Facial Twitch" },
  { name: "Facial Muscle Twitching on One Side" },
  { name: "Front Tooth Gap" },
  { name: "Gum Treatment" },
  { name: "Hole in the Roof of the Mouth" },
  { name: "Lump on the Facial Nerve" },
  { name: "Loud Sleeping" },
  { name: "Mouth Guard for Sports" },
  { name: "Missing Front Tooth" },
  { name: "Mouth Ulcer" },
  { name: "Mouth Red Patch" },
  { name: "Mouth Infection" },
  { name: "Mouth Cancer" },
  { name: "Mouth Care After Cancer" },
  { name: "One Sided Facial Weakness" },
  { name: "Partial Tooth Cap" },
  { name: "Producing Too Much Saliva" },
  { name: "Pain in the Jaw Joint" },
  { name: "Ringing Sound in Ears" },
  { name: "Root Canal Treatment" },
  { name: "Re-Root Canal Treatment" },
  { name: "Removable Teeth" },
  { name: "Split Lip" },
  { name: "Smoking Habit" },
  { name: "Stone in the Saliva Gland" },
  { name: "Smile Makeover" },
  { name: "Severe Gum Infection" },
  { name: "Tight Tongue Skin" },
  { name: "Teeth Present at Birth" },
  { name: "Tongue Pushing" },
  { name: "Trapped Back Tooth" },
  { name: "Tooth Crown" },
  { name: "Tooth Wear" },
  { name: "Tooth Rescue Treatment" },
  { name: "Tooth Removal" },
  { name: "Teeth Whitening" },
  { name: "Thin Shells for Teeth" },
  { name: "Teeth Cleaning & Polishing" },
  { name: "Tooth Replacement" },
  { name: "Tooth is Stuck" },
  { name: "Thumb Sucking" },
  { name: "Teeth Protector for Night" },
  { name: "Tooth Cavities" },
  { name: "White Spots on Teeth" },
  { name: "Invisible Braces" },
  { name: "Dry Peeling Lips" },
  { name: "Wearing Down of Teeth" },
  { name: "Gum Pocket" },
  { name: "Sensitive Teeth" },
  { name: "Tooth Filling" },
  { name: "Crooked Tooth" },
].map((problem) => {
  let image;
  let points = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  switch (problem.name) {
    case "Adding Bone to the Socket":
      points = [
        "Tooth loss.",
        "Loose tooth.",
        "Failed previous implants.",
        "Shrinking gums."
      ];
      break;
    case "Bad Breath":
      points = [
        "Unpleasant smell from mouth.",
        "Dry mouth.",
        "Sour taste.",
        "White or coated tongue."
      ];
      break;
    case "Burning Mouth":
      points = [
        "Dry mouth.",
        "Burning feeling after having food.",
        "Numbness in mouth.",
        "Altered taste."
      ];
      break;
    case "Biting Down Hard":
      points = [
        "Jaw pain or tightness.",
        "Headaches.",
        "Tooth sensitivity.",
        "Ear pain."
      ];
      break;
    case "Complete Denture":
      points = [
        "Total tooth loss.",
        "No tooth in mouth.",
        "Inability to support partial fake teeth."
      ];
      break;
    case "Children’s Dentistry":
      points = [
        "Tooth cavities.",
        "Thumb sucking.",
        "Monitoring tooth eruption & jaw development.",
        "Nursing bottle caries."
      ];
      break;
    case "Dental Implants":
      points = [
        "Missing or severely damaged teeth.",
        "Poorly fitting dentures.",
        "Desire for permanent teeth."
      ];
      break;
    case "Dental Braces":
      points = [
        "Crooked teeth.",
        "Overbite, underbite or crossbite.",
        "Crowded teeth.",
        "Gaps or spacing"
      ];
      break;
    case "Dry Mouth":
      points = [
        "Cracked lips or dry corners of the mouth.",
        "Increased thirst.",
        "Loss of taste sensation.",
        "Dry, rough tongue."
      ];
      break;
    case "Dental Jewellery":
      points = [
        "Cosmetic improvement.",
        "Tooth surface preservation.",
        "Temporary decorative accessory."
      ];
      break;
    case "Fractured Tooth":
      points = [
        "Visible crack or fracture.",
        "Pain or sensitivity in any tooth.",
        "Tooth mobility.",
        "Pain in tooth while chewing."
      ];
      break;
    case "Facial Twitch":
      points = [
        "Gradual facial weakness.",
        "Hearing loss.",
        "Ringing in ear.",
        "Balance problems.",
        "Sometimes facial numbness or tingling"
      ];
      break;
    case "Facial Muscle Twitching on One Side":
      points = [
        "Sudden, sharp, electric shock like pain.",
        "Pain triggered by touching, eating, brushing, wind.",
        "Affects cheeks, jaw & lips."
      ];
      break;
    case "Front Tooth Gap":
      points = [
        "Asymmetry in smile.",
        "Cosmetic concerns.",
        "Teeth appearing too small or large.",
        "Noticeable space between front teeth"
      ];
      break;
    case "Gum Treatment":
      points = [
        "Frequent bad deposits in mouth.",
        "Gum enlargement.",
        "Tooth root exposure.",
        "Many teeth mobile."
      ];
      break;
    case "Hole in the Roof of the Mouth":
      points = [
        "Opening in the roof of mouth.",
        "Communication between oral & nasal cavities.",
        "Nasal regurgitation of milk."
      ];
      break;
    case "Lump on the Facial Nerve":
      points = [
        "Involuntary twitching or jerking of muscles.",
        "Starts near eye and can spread to cheek & mouth.",
        "May get worse with stress or fatigue."
      ];
      break;
    case "Loud Sleeping":
      points = [
        "Protect your teeth.",
        "Shields your lips and gums.",
        "Prevents jaw injuries.",
        "May reduce risk of    mouth injuries."
      ];
      break;
    case "Mouth Guard for Sports":
      points = [
        "Protect your teeth.",
        "Shields your lips and gums.",
        "Prevents jaw injuries.",
        "May reduce risk of    mouth injuries."
      ];
      break;
    case "Missing Front Tooth":
      points = [
        "Aesthetic concern.",
        "Speech problems.",
        "Tooth shifting.",
        "Bite imbalance.",
        "Bone loss."
      ];
      break;
    case "Mouth Ulcer":
      points = [
        "Painful ulcers.",
        "Burning or tingling sensation in mouth.",
        "Frequent ulcers.",
        "Non healing ulcers."
      ];
      break;
    case "Mouth Red Patch":
      points = [
        "Infection.",
        "Trauma or irritation.",
        "Allergic reactions.",
        "Red patches"
      ];
      break;
    case "Mouth Infection":
      points = [
        "Swelling or redness.",
        "Pain or soreness.",
        "Unpleasant taste or bad breath.",
        "Fever or general discomfort."
      ];
      break;
    case "Mouth Cancer":
      points = [
        "Non healing ulcers.",
        "Persistent red or white patches.",
        "Lumps.",
        "Difficulty in chewing, swallowing or speaking."
      ];
      break;
    case "Mouth Care After Cancer":
      points = [
        "Dry mouth.",
        "Mouth sores.",
        "Increased risk of infections.",
        "Changes in taste."
      ];
      break;
    case "One Sided Facial Weakness":
      points = [
        "Loss of taste.",
        "One side of face looks uneven or droopy.",
        "Difficulty in closing of eye.",
        "Drooling from one side of face."
      ];
      break;
    case "Partial Tooth Cap":
      points = [
        "Moderate to severe decay.",
        "Wish to save the natural tooth.",
        "High chewing pressure areas."
      ];
      break;
    case "Producing Too Much Saliva":
      points = [
        "Neurological disorders.",
        "Oral infections or irritations.",
        "Side effects of medications.",
        "Gastroesophageal conditions."
      ];
      break;
    case "Pain in the Jaw Joint":
      points = [
        "Jaw pain.",
        "Clicking or popping sounds from jaw joint.",
        "Deviated jaw.",
        "Limited jaw movement."
      ];
      break;
    case "Ringing Sound in Ears":
      points = [
        "Ringing.",
        "Roaring or buzzing.",
        "Whistling or clicking noises.",
        "Sounds in the ear."
      ];
      break;
    case "Root Canal Treatment":
      points = [
        "Tooth decay.",
        "Fractured tooth.",
        "Cavity near to the pulp.",
        "Pain in tooth."
      ];
      break;
    case "Re-Root Canal Treatment":
      points = [
        "Persistent toothache.",
        "Prolonged sensitivity.",
        "Swelling.",
        "Failed root canal treatment."
      ];
      break;
    case "Removable Teeth":
      points = [
        "Partial missing tooth.",
        "Financial constraints.",
        "Wish for restoring all missing teeth.",
        "Unable to chew because of missing teeth."
      ];
      break;
    case "Split Lip":
      points = [
        "Separation or gap in the upper lip.",
        "Flattened or asymmetrical nose.",
        "Wide nasal base."
      ];
      break;
    case "Smoking Habit":
      points = [
        "Tooth discoloration.",
        "Gingivitis & periodontitis.",
        "Delayed wound healing.",
        "Wanted to quit the smoking habit."
      ];
      break;
    case "Stone in the Saliva Gland":
      points = [
        "Painless swelling or lump.",
        "Numbness or facial weakness.",
        "Dry mouth.",
        "Difficulty swallowing."
      ];
      break;
    case "Smile Makeover":
      points = [
        "Discoloured or stained teeth.",
        "Chipped & cracked teeth.",
        "Gapped & crooked teeth."
      ];
      break;
    case "Severe Gum Infection":
      points = [
        "Bleeding gums.",
        "Swollen & red gums.",
        "Gums going down.",
        "Loose teeth."
      ];
      break;
    default:
      points = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  }
  try {
    image = require(`../assets/${problem.name}.png`);
  } catch (e) {
    image = require("../assets/consult.png");
  }
  return {
    image,
    name: problem.name,
    points
  };
});

// Specialists data (with descriptions)
const specialists = [
  { name: "General Dentist", desc: "Everyday dental care provider" },
  { name: "Periodontist", desc: "Gum specialist" },
  { name: "Prosthodontist", desc: "Tooth replacement expert" },
  { name: "Orthodontist", desc: "Braces and aligners specialist" },
  { name: "Endodontist", desc: "Root canal expert" },
  { name: "Cosmetic Dentist", desc: "Smile makeover specialist" },
  { name: "Pediatric Dentist", desc: "Children’s dentist" },
  { name: "Oral and Maxillofacial Surgeon", desc: "Surgical tooth and jaw expert" },
  { name: "Holistic Dentist", desc: "Whole-body dental care focus" },
  { name: "TMJ Wellness Expert", desc: "Jaw alignment and balance specialist" },
  { name: "Oral Pathologist", desc: "Mouth disease and condition expert" },
  { name: "Oral Medicine Specialist", desc: "Comprehensive mouth and body health expert" },
  { name: "Dental Implant Specialist", desc: "Natural-looking tooth replacement expert" },
  { name: "Oral Radiologist", desc: "Early detection of dental issues through imaging" },
  { name: "Biomimetic/Biologic Dentist", desc: "High-tech, natural dental care" },
];

const specialistSlides = [];
for (let i = 0; i < specialists.length; i += 3) {
  specialistSlides.push(specialists.slice(i, i + 3));
}

// Products data for the shop slider
const products = [
  { name: 'Tooth Brush', img: require('../assets/consult.png') },
  { name: 'Tooth Paste', img: require('../assets/consult.png') },
  { name: 'Mouth Wash', img: require('../assets/consult.png') },
  { name: 'Tongue Cleaner', img: require('../assets/consult.png') },
  { name: 'Flossers', img: require('../assets/consult.png') },
  { name: 'Gum Paints', img: require('../assets/consult.png') },
  { name: 'Nicotine Tablets', img: require('../assets/consult.png') },
];

// Testimonials data for the slider
const testimonials = [
  {
    text: "The booking process was seamless and the clinic was top-notch. Highly recommend for anyone traveling to India!",
    name: "John Smith",
    type: "International"
  },
  {
    text: "I found the best dentist in my city through this platform. The reviews were very helpful!",
    name: "Priya Sharma",
    type: "National"
  },
  {
    text: "Excellent service and support. I felt confident booking my appointment from abroad.",
    name: "Maria Garcia",
    type: "International"
  },
  {
    text: "Very easy to use and the clinic staff were very professional. Will use again!",
    name: "Amit Patel",
    type: "National"
  },
  {
    text: "I was able to compare clinics and book an appointment in minutes. The process was smooth and transparent.",
    name: "Sophie Dubois",
    type: "International"
  },
  {
    text: "Great platform for finding trusted dentists. The user interface is very friendly.",
    name: "Rahul Verma",
    type: "National"
  },
  {
    text: "I appreciate the detailed reviews and easy booking system. Made my dental trip to India stress-free!",
    name: "Elena Rossi",
    type: "International"
  },
  {
    text: "Booking a dental appointment for my parents was never this easy. Thank you!",
    name: "Neha Gupta",
    type: "National"
  }
];

const testimonialMaxIndex = testimonials.length - 1;

// Banner/poster data for the top-of-page rotating ad
const banners = [
  {
    image: require("../assets/clinic.png"),
    title: "MediVista SUPERSPECIALITY DENTAL CLINIC",
    subtitle: "Nashik Maharashtra",
    website: "medivistahospital.com",
    phone: "+91 8626070298",
    rightImage: require("../assets/clinic.png"),
  },
  {
    image: require("../assets/scan.png.png"),
    title: "SmileCare ADVANCED DENTAL CENTER",
    subtitle: "Mumbai Maharashtra",
    website: "smilecaremumbai.com",
    phone: "+91 9876543210",
    rightImage: require("../assets/scan.png.png"),
  },
  {
    image: require("../assets/bloodtest.png.png"),
    title: "Pearl Dental & Implant Clinic",
    subtitle: "Pune Maharashtra",
    website: "pearldentalpune.com",
    phone: "+91 9988776655",
    rightImage: require("../assets/bloodtest.png.png"),
  },
];

const Home = () => {
	const [search, setSearch] = useState("");
	const [selectedState, setSelectedState] = useState("");
	const [filteredStates, setFilteredStates] = useState(allStatesAndUTs);
	const [specialistIndex, setSpecialistIndex] = useState(0);
	const [problemSliderIndex, setProblemSliderIndex] = useState(0);
	const [productSliderIndex, setProductSliderIndex] = useState(0);
	const [testimonialIndex, setTestimonialIndex] = useState(0);
	const [testimonialPaused, setTestimonialPaused] = useState(false);
	const [bannerIndex, setBannerIndex] = useState(0);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navigate = useNavigate();

	const specialistVisible = 3;
	const specialistMaxIndex = Math.max(specialistSlides.length - 1, 0);
	const problemsPerSlide = 4;
	const problemMaxIndex = Math.max(Math.ceil(sliderProblems.length / problemsPerSlide) - 1, 0);
	const productsPerSlide = 4;
	const productMaxIndex = Math.max(Math.ceil(products.length / productsPerSlide) - 1, 0);
	const testimonialsPerSlide = 4;
	const testimonialMaxIndex = Math.max(Math.ceil(testimonials.length / testimonialsPerSlide) - 1, 0);

	// Auto-slide for Problems
	useEffect(() => {
		const interval = setInterval(() => {
			setProblemSliderIndex(prev => prev >= problemMaxIndex ? 0 : prev + 1);
		}, 3000);
		return () => clearInterval(interval);
	}, [problemMaxIndex]);

	// Auto-slide for Specialists
	useEffect(() => {
		const interval = setInterval(() => {
			setSpecialistIndex(prev => prev >= specialistMaxIndex ? 0 : prev + 1);
		}, 3000);
		return () => clearInterval(interval);
	}, [specialistMaxIndex]);

	// Auto-slide for Products
	useEffect(() => {
		const interval = setInterval(() => {
			setProductSliderIndex(prev => prev >= productMaxIndex ? 0 : prev + 1);
		}, 3000);
		return () => clearInterval(interval);
	}, [productMaxIndex]);

	// Auto-slide for Testimonials (pause on hover)
	useEffect(() => {
		if (testimonialPaused) return;
		const interval = setInterval(() => {
			setTestimonialIndex(prev => prev >= testimonialMaxIndex ? 0 : prev + 1);
		}, 3000);
		return () => clearInterval(interval);
	}, [testimonialMaxIndex, testimonialPaused]);

	// Auto-rotate banner every 2s
	useEffect(() => {
		const interval = setInterval(() => {
			setBannerIndex((prev) => (prev + 1) % banners.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		if (search.trim()) {
			navigate(`/clinics?search=${encodeURIComponent(search)}`);
		}
	};

	// Filter state dropdown options as user types in the search input
	useEffect(() => {
		if (!search.trim()) {
			setFilteredStates(allStatesAndUTs);
		} else {
			setFilteredStates(
				allStatesAndUTs.filter(state =>
					state.toLowerCase().includes(search.toLowerCase())
				)
			);
		}
	}, [search]);

	return (
		<>
			{/* Remove all margin/padding from html/body via global style */}
			{/* Add Poppins font import and set global font-family */}
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
				html, body, #root {
					margin: 0 !important;
					padding: 0 !important;
					box-sizing: border-box;
					font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
				}
				body > * { margin-top: 0 !important; padding-top: 0 !important; }
			`}</style>
			<div className="min-h-screen bg-white flex flex-col" style={{margin:0, padding:0, boxSizing:'border-box', fontFamily: 'Poppins, Arial, Helvetica, sans-serif'}}>

				{/* Header Section (all-in-one: logo, heading, and menu in a single unified row) */}
				<div className="w-full bg-white border-b border-gray-200 flex flex-row items-center gap-4 md:gap-8 h-[110px] px-6 relative"
     style={{marginTop:0, paddingTop:0}}>
  {/* Logo + Site Name */}
  <div className="flex flex-row items-center gap-4 md:gap-8" style={{minHeight: '60px'}}>
    <img
      src={logo}
      alt="Dental Tourism Logo"
      className="h-[100px] w-[100px] object-cover rounded-full shadow"
      style={{flexShrink: 0, background: '#fff', borderRadius: '50%', boxShadow: '0 2px 8px 0 rgba(0,39,118,0.10)'}}
    />
    <span className="font-extrabold text-[32px] text-[#002776] tracking-wide font-[Poppins] leading-tight text-left drop-shadow-lg"
          style={{lineHeight: 1.1, textShadow: '0 2px 8px rgba(0,39,118,0.08)'}}>
      Dental Tourism<br />
      Clinics India
    </span>
  </div>
  {/* Desktop Menu Section (right side, in same row) */}
  <nav className="hidden md:flex flex-1 items-center justify-end gap-6 font-[Poppins]">
    <Link to="/" className="text-[#002776] text-[16px] font-semibold no-underline hover:text-[#0a7ffb] transition">Home</Link>
    <Link to="/clinics" className="text-[#002776] text-[16px] font-semibold no-underline hover:text-[#0a7ffb] transition">Find Dental Clinics</Link>
    <Link to="/consult" className="text-[#002776] text-[16px] font-semibold no-underline hover:text-[#0a7ffb] transition">Consult Now</Link>
    <Link to="/cbct-opg-lab" className="text-[#002776] text-[16px] font-semibold no-underline hover:text-[#0a7ffb] transition">CBCT & OPG Centres</Link>
    <Link to="/blood-test-lab" className="text-[#002776] text-[16px] font-semibold no-underline hover:text-[#0a7ffb] transition">Book Blood Test</Link>
    <Link to="/shop" className="text-[#002776] text-[16px] font-semibold no-underline hover:text-[#0a7ffb] transition">Shop Now</Link>
    <Link to="/help-support" className="text-[#002776] text-[16px] font-semibold no-underline hover:text-[#0a7ffb] transition">Help and Support</Link>
    <Link to="/login" className="flex items-center gap-2 px-4 py-1 border-2 border-[#002776] rounded-full text-[#002776] font-semibold hover:bg-[#002776] hover:text-white transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
      </svg>
      Log In
    </Link>
  </nav>
  {/* Hamburger Icon for Mobile */}
  <button
    className="md:hidden ml-auto flex items-center justify-center p-2 rounded focus:outline-none"
    aria-label="Open menu"
    onClick={() => setMobileMenuOpen(true)}
  >
    <svg className="w-7 h-7 text-[#002776]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
  {/* Mobile Menu Drawer */}
  {mobileMenuOpen && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:hidden" onClick={() => setMobileMenuOpen(false)}>
      <div className="w-64 bg-white h-full shadow-lg flex flex-col p-6" onClick={e => e.stopPropagation()}>
        <button className="self-end mb-6" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>
          <svg className="w-7 h-7 text-[#002776]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col gap-4 font-[Poppins]">
          <Link to="/" className="text-[#002776] text-lg font-semibold no-underline hover:text-[#0a7ffb]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/clinics" className="text-[#002776] text-lg font-semibold no-underline hover:text-[#0a7ffb]" onClick={() => setMobileMenuOpen(false)}>Find Dental Clinics</Link>
          <Link to="/consult" className="text-[#002776] text-lg font-semibold no-underline hover:text-[#0a7ffb]" onClick={() => setMobileMenuOpen(false)}>Consult Now</Link>
          <Link to="/cbct-opg-lab" className="text-[#002776] text-lg font-semibold no-underline hover:text-[#0a7ffb]" onClick={() => setMobileMenuOpen(false)}>CBCT & OPG Centres</Link>
          <Link to="/blood-test-lab" className="text-[#002776] text-lg font-semibold no-underline hover:text-[#0a7ffb]" onClick={() => setMobileMenuOpen(false)}>Book Blood Test</Link>
          <Link to="/shop" className="text-[#002776] text-lg font-semibold no-underline hover:text-[#0a7ffb]" onClick={() => setMobileMenuOpen(false)}>Shop Now</Link>
          <Link to="/help-support" className="text-[#002776] text-lg font-semibold no-underline hover:text-[#0a7ffb]" onClick={() => setMobileMenuOpen(false)}>Help and Support</Link>
          <Link to="/login" className="flex items-center gap-2 px-4 py-2 border-2 border-[#002776] rounded-full text-[#002776] font-semibold hover:bg-[#002776] hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
            </svg>
            Log In
          </Link>
        </nav>
      </div>
    </div>
  )}
				</div>
				{/* Hero Section */}
				<motion.section
					className="flex flex-col items-center justify-center flex-1 px-4 pt-12 pb-8 text-center"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<motion.h1
						className="text-3xl md:text-5xl font-bold mb-4 text-[#6548ee]"
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						Find Top Dental Clinics in India{" "}
						<span role="img" aria-label="India">
							🇮🇳
						</span>
					</motion.h1>
					<motion.p
						className="text-lg md:text-xl mb-8 text-[#6548ee]"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						Book appointments, compare clinics, and get the best dental care for
						your smile.
					</motion.p>
					<div className="w-full flex justify-center">
		<form
			onSubmit={handleSearch}
			className="w-full max-w-xl flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
		>
			<input
				type="text"
				placeholder="Search by city, treatment, or state..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="flex-1 px-4 py-3 rounded-lg border-2 border-[#6548ee] focus:outline-none focus:border-[#ff9800] text-lg shadow min-w-[180px]"
			/>
			<select
				value={selectedState}
				onChange={e => setSelectedState(e.target.value)}
				className="flex-1 px-4 py-3 rounded-lg border-2 border-[#6548ee] focus:outline-none focus:border-[#ff9800] text-lg shadow min-w-[180px]"
			>
				<option value="">All States/UTs</option>
				{filteredStates.map(state => (
					<option key={state} value={state}>{state}</option>
				))}
			</select>
			<button
				type="submit"
				className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6548ee] to-[#ff9800] text-white font-semibold text-lg shadow hover:from-[#ff9800] hover:to-[#6548ee] transition min-w-[120px]"
			>
				Search
			</button>
		</form>
	</div>
				</motion.section>
				{/* Features Section */}
				<motion.section
					className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 px-4"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.3 }}
				>
					{features.map((f, idx) => (
	  <Link to={f.link} key={f.title} className="no-underline">
		<motion.div
		  className="bg-white shadow-lg flex flex-col items-center p-0 pt-0 transition rounded-2xl"
		  whileHover={{ scale: 1.05 }}
		  style={{
			overflow: 'visible',
			width: 220,
			height: 320,
			boxSizing: 'border-box',
			background: '#fff',
			padding: 0
		  }}
		>
		  {/* Circular image at top, shadow, border, hover ring */}
		  <div className="relative group mt-6 mb-4">
			<img
			  src={f.image}
			  alt={f.title}
			  className="w-32 h-32 rounded-full shadow-2xl object-cover border-4 border-white group-hover:ring-4 group-hover:ring-[#6548ee] transition duration-300"
			/>
		  </div>
		  {/* Title and description below image */}
		  <div className="flex flex-col items-center justify-center w-full px-4 mb-2">
			<div className="font-bold text-base md:text-lg text-center w-full mb-2" style={{color:'#002776', lineHeight:1.2}}>
			  {f.title}
			</div>
			<div className="text-[14px] text-center w-full mt-1" style={{color:'#6548ee', opacity:0.85}}>
			  {f.desc}
			</div>
		  </div>
		</motion.div>
	  </Link>
	))}
				</motion.section>
				{/* Problems Slider Section */}
				<div className="w-full max-w-5xl mx-auto pb-12 px-4">
					{/* Slider Heading and Subheading */}
					<div className="text-center mb-6">
						<h2 className="text-2xl md:text-3xl font-bold text-[#6548ee] mb-2 font-[Poppins]">Consult Dentist Online</h2>
						<p className="text-gray-700 text-base md:text-lg font-[Poppins]">Private online consultations with verified dentists in all specialists.</p>
					</div>
					<div className="flex items-center justify-center min-h-[320px] w-full">
						<button
							onClick={() => setProblemSliderIndex((prev) => Math.max(prev - 1, 0))}
							className="p-2 mr-4 rounded-full bg-white shadow-2xl hover:bg-[#6548ee] hover:text-white transition disabled:opacity-50"
							disabled={problemSliderIndex === 0}
							aria-label="Previous"
						>
							<FaChevronLeft />
						</button>
						<div className="flex gap-8 py-6 w-full justify-center">
							{sliderProblems.slice(problemSliderIndex * problemsPerSlide, problemSliderIndex * problemsPerSlide + problemsPerSlide).map((problem, idx) => (
  <div
    key={problemSliderIndex * problemsPerSlide + idx}
    className="flex flex-col items-center min-w-[220px]"
  >
    <div className="relative group">
      <img
        src={problem.image}
        alt={problem.name}
        className="w-44 h-44 rounded-full shadow-2xl object-cover border-4 border-white group-hover:ring-4 group-hover:ring-[#6548ee] transition duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-white/80 rounded-full">
        {Array.isArray(problem.points) ? (
          <ul className="text-[#6548ee] text-center px-4 font-normal list-disc list-inside">
            {problem.points.map((point, i) => (
              <li key={i} className="font-normal text-base" style={{ fontWeight: 400 }}>{point}</li>
            ))}
          </ul>
        ) : (
          <span className="text-[#6548ee] text-center px-4 font-normal" style={{ fontWeight: 400 }}>{problem.points}</span>
        )}
      </div>
    </div>
    <Link to="/consult" className="mt-4 text-lg font-semibold text-[#6548ee] hover:underline no-underline transition text-center">
      {problem.name}
    </Link>
    <Link to="/consult" className="mt-1 text-[#0a7ffb] font-bold underline text-base transition">Consult Now</Link>
  </div>
))}
						</div>
						<button
							onClick={() => setProblemSliderIndex((prev) => Math.min(prev + 1, problemMaxIndex))}
							className="p-2 ml-4 rounded-full bg-white shadow-2xl hover:bg-[#6548ee] hover:text-white transition disabled:opacity-50"
							disabled={problemSliderIndex >= problemMaxIndex}
							aria-label="Next"
						>
							<FaChevronRight />
						</button>
					</div>
					{/* Pagination Dots */}
					<div className="flex justify-center mt-2 gap-2">
						{Array.from({ length: problemMaxIndex + 1 }).map((_, idx) => (
							<button
								key={idx}
								onClick={() => setProblemSliderIndex(idx)}
								className={`w-3 h-3 rounded-full ${problemSliderIndex === idx ? 'bg-[#6548ee]' : 'bg-gray-300'} transition`}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>
				{/* Specialists Slider Section */}
				<div className="w-full max-w-5xl mx-auto pb-12 px-4">
					{/* Specialists Slider Heading and Subheading */}
					<div className="text-center mb-6">
						<h2 className="text-2xl md:text-3xl font-bold text-[#6548ee] mb-2 font-[Poppins]">Book an appointment for an in-clinic consultation</h2>
						<p className="text-gray-700 text-base md:text-lg font-[Poppins]">Find experienced dentists across all specialties.</p>
					</div>
					<div className="flex items-center justify-center">
						<button
							onClick={() => setSpecialistIndex((prev) => Math.max(prev - 1, 0))}
							className="p-2 rounded-full bg-white shadow hover:bg-[#6548ee] hover:text-white transition mr-4 disabled:opacity-50"
							disabled={specialistIndex === 0}
							aria-label="Previous"
						>
							<FaChevronLeft />
						</button>
						<div className="flex gap-8 py-6 w-full justify-center">
							{specialistSlides[specialistIndex]?.map((spec, idx) => (
								<Link
									to="/clinics"
									key={spec.name}
									className="flex flex-col items-start min-w-[300px]"
								>
									<div className="relative group w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-2">
										<img
											src={require("../assets/consult.png")}
											alt={spec.name}
											className="w-full h-full object-cover transition duration-300"
										/>
									</div>
									<div className="text-lg font-bold text-[#6548ee] text-left w-full mb-1">{spec.name}</div>
									<div className="text-base text-[#6548ee] text-left w-full mb-2">{spec.desc}</div>
								</Link>
							))}
						</div>
						<button
							onClick={() => setSpecialistIndex((prev) => Math.min(prev + 1, specialistMaxIndex))}
							className="p-2 rounded-full bg-white shadow hover:bg-[#6548ee] hover:text-white transition ml-4 disabled:opacity-50"
							disabled={specialistIndex >= specialistMaxIndex}
							aria-label="Next"
						>
							<FaChevronRight />
						</button>
					</div>
					{/* Pagination Dots */}
					<div className="flex justify-center mt-2 gap-2">
						{Array.from({ length: specialistMaxIndex + 1 }).map((_, idx) => (
							<button
								key={idx}
								onClick={() => setSpecialistIndex(idx)}
								className={`w-3 h-3 rounded-full ${specialistIndex === idx ? 'bg-[#6548ee]' : 'bg-gray-300'} transition`}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>
				{/* Products Shop Section (now with slider, nav arrows, and drop shadow) */}
				<div className="w-full max-w-5xl mx-auto pb-12 px-4">
					<div className="text-center mb-6">
						<h2 className="text-2xl md:text-3xl font-bold text-[#6548ee] mb-2 font-[Poppins]">Shop Dental Essentials</h2>
						<p className="text-gray-700 text-base md:text-lg font-[Poppins]">Order top dental care products online.</p>
					</div>
					<div className="flex items-center justify-center min-h-[220px] w-full">
						<button
							onClick={() => setProductSliderIndex((prev) => Math.max(prev - 1, 0))}
							className="p-2 mr-4 rounded-full bg-white shadow-2xl hover:bg-[#6548ee] hover:text-white transition disabled:opacity-50"
							disabled={productSliderIndex === 0}
							aria-label="Previous"
						>
							<FaChevronLeft />
						</button>
						<div className="flex gap-8 py-6 w-full justify-center">
							{products.slice(productSliderIndex * productsPerSlide, productSliderIndex * productsPerSlide + productsPerSlide).map((item, idx) => (
								<Link
									to="/shop"
									key={productSliderIndex * productsPerSlide + idx}
									className="flex flex-col items-center group no-underline"
								>
									<img
										src={item.img}
										alt={item.name}
										className="w-28 h-28 rounded-full shadow-2xl object-cover border-4 border-white mb-3 group-hover:ring-4 group-hover:ring-[#6548ee] transition duration-300"
									/>
									<span className="text-lg font-semibold text-[#6548ee] group-hover:text-[#002776] transition-colors duration-200 select-none" style={{ textDecoration: 'none' }}>{item.name}</span>
								</Link>
							))}
						</div>
						<button
							onClick={() => setProductSliderIndex((prev) => Math.min(prev + 1, productMaxIndex))}
							className="p-2 ml-4 rounded-full bg-white shadow-2xl hover:bg-[#6548ee] hover:text-white transition disabled:opacity-50"
							disabled={productSliderIndex >= productMaxIndex}
							aria-label="Next"
						>
							<FaChevronRight />
						</button>
					</div>
					{/* Pagination Dots */}
					<div className="flex justify-center mt-2 gap-2">
						{Array.from({ length: productMaxIndex + 1 }).map((_, idx) => (
							<button
								key={idx}
								onClick={() => setProductSliderIndex(idx)}
								className={`w-3 h-3 rounded-full ${productSliderIndex === idx ? 'bg-[#6548ee]' : 'bg-gray-300'} transition`}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>
				{/* Read Articles Section */}
				<div className="w-full max-w-5xl mx-auto pb-16 px-4">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10">
                        {/* Left: Text and Button */}
                        <div className="flex-1 flex flex-col justify-center md:justify-start md:items-start items-center text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[Poppins]">
                                Read top articles from dental health experts
                            </h2>
                            <p className="text-gray-700 text-lg md:text-xl mb-8 font-[Poppins]">
                                Dental health articles that keep you informed about good health practices and achieve your goals.
                            </p>
                            <Link
                                to="/articles"
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6548ee] to-[#ff9800] text-white font-semibold text-lg shadow hover:from-[#ff9800] hover:to-[#6548ee] transition"
                            >
                                Read more
                            </Link>
                        </div>
                        {/* Right: Images */}
                        <div className="flex flex-row gap-6 flex-1 justify-center md:justify-end">
                            <img
                                src={require("../assets/clinic.png")}
                                alt="Dental Article 1"
                                className="w-[260px] h-[180px] rounded-xl shadow-xl object-cover border-2 border-white bg-white"
                            />
                            <img
                                src={require("../assets/consult.png")}
                                alt="Dental Article 2"
                                className="w-[260px] h-[180px] rounded-xl shadow-xl object-cover border-2 border-white bg-white"
                            />
                        </div>
                    </div>
                </div>
                {/* Testimonials Section */}
                <div className="w-full max-w-5xl mx-auto pb-16 px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#6548ee] mb-2 font-[Poppins]">
                            What our users have to say
                        </h2>
                    </div>
                    <div className="flex items-center justify-center"
                        onMouseEnter={() => setTestimonialPaused(true)}
                        onMouseLeave={() => setTestimonialPaused(false)}
                    >
                        <button
                            onClick={() => setTestimonialIndex((prev) => Math.max(prev - 1, 0))}
                            className="p-2 mr-4 rounded-full bg-white shadow-2xl hover:bg-[#6548ee] hover:text-white transition disabled:opacity-50"
                            disabled={testimonialIndex === 0}
                            aria-label="Previous"
                        >
                            <FaChevronLeft />
                        </button>
                        <div className="flex flex-col items-center justify-center w-full max-w-2xl">
                            <p className="text-gray-800 text-lg md:text-xl text-center mb-4 max-w-2xl">{testimonials[testimonialIndex].text}</p>
                            <div className="flex items-center gap-2 font-bold text-[#6548ee] text-base mb-1">
                                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                    {/* User SVG icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke='6548ee' className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
                                    </svg>
                                </span>
                                {testimonials[testimonialIndex].name}
                            </div>
                            <div className="text-sm text-gray-500 mb-2">{testimonials[testimonialIndex].type}</div>
                        </div>
                        <button
                            onClick={() => setTestimonialIndex((prev) => Math.min(prev + 1, testimonialMaxIndex))}
                            className="p-2 ml-4 rounded-full bg-white shadow-2xl hover:bg-[#6548ee] hover:text-white transition disabled:opacity-50"
                            disabled={testimonialIndex >= testimonialMaxIndex}
                            aria-label="Next"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-2 gap-2">
                        {Array.from({ length: testimonialMaxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setTestimonialIndex(idx)}
                                className={`w-3 h-3 rounded-full ${testimonialIndex === idx ? 'bg-[#6548ee]' : 'bg-gray-300'} transition`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
                {/* Subscribe Section */}
                {/* Subscribe Section */}
                <div className="w-full max-w-3xl mx-auto pb-16 px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0a2258] mb-8 text-center font-serif">Subscribe to get exclusive updates</h2>
                    <form className="flex flex-row items-end gap-0 justify-center">
                        <div className="flex flex-col flex-1 min-w-[250px]">
                            <label htmlFor="subscribe-email" className="text-[#6548ee] font-semibold mb-1 ml-1">Email *</label>
                            <input
                                id="subscribe-email"
                                type="email"
                                required
                                placeholder="e.g., email@example.com"
                                className="border-2 border-[#6548ee] rounded-l-lg px-4 py-3 text-[#6548ee] text-base focus:outline-none focus:border-[#ff9800] bg-white font-sans"
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex-1 min-w-[200px] rounded-r-lg bg-gradient-to-r from-[#6548ee] to-[#ff9800] text-white font-sans text-base py-3 px-4 border-2 border-l-0 border-[#6548ee] transition hover:from-[#ff9800] hover:to-[#6548ee] font-semibold"
                        >
                            Join Our Mailing List
                        </button>
                    </form>
                </div>
                {/* Footer Section */}
                <footer className="w-full bg-[#002776] border-t border-[#002776] py-10 px-4 mt-0">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start items-center gap-8">
                        {/* Footer Columns */}
                        <div className="flex flex-col md:flex-row gap-8 w-full md:justify-between">
                            <div className="flex flex-col min-w-[150px] mb-4 md:mb-0">
                                <span className="font-bold text-white text-lg mb-2">Dental Tourism Clinics India</span>
                                <a href="#" className="text-white text-sm mb-1 hover:underline">Contact Us</a>
                                <a href="#" className="text-white text-sm hover:underline">Articles</a>
                            </div>
                            <div className="flex flex-col min-w-[150px] mb-4 md:mb-0">
                                <span className="font-bold text-white text-lg mb-2">For Patients</span>
                                <a href="#" className="text-white text-sm mb-1 hover:underline">Search Dentist</a>
                                <a href="#" className="text-white text-sm mb-1 hover:underline">Search Dental Clinics</a>
                                <a href="#" className="text-white text-sm hover:underline">Consult Now</a>
                            </div>
                            <div className="flex flex-col min-w-[120px] mb-4 md:mb-0">
                                <span className="font-bold text-white text-lg mb-2">For Dentist</span>
                                <a href="#" className="text-white text-sm hover:underline">Profile</a>
                            </div>
                            <div className="flex flex-col min-w-[120px] mb-4 md:mb-0">
                                <span className="font-bold text-white text-lg mb-2">For CBCT & OPG Centre</span>
                                <a href="#" className="text-white text-sm hover:underline">Profile</a>
                            </div>
                            <div className="flex flex-col min-w-[120px] mb-4 md:mb-0">
                                <span className="font-bold text-white text-lg mb-2">For Blood Test Lab</span>
                                <a href="#" className="text-white text-sm hover:underline">Profile</a>
                            </div>
                            <div className="flex flex-col min-w-[120px] mb-4 md:mb-0">
                                <span className="font-bold text-white text-lg mb-2">For Dental Products</span>
                                <a href="#" className="text-white text-sm hover:underline">Profile</a>
                            </div>
                            <div className="flex flex-col min-w-[120px] mb-4 md:mb-0">
                                <span className="font-bold text-white text-lg mb-2">More</span>
                                <a href="#" className="text-white text-sm mb-1 hover:underline">Help</a>
                                <a href="#" className="text-white text-sm mb-1 hover:underline">Privacy Policy</a>
                                <a href="#" className="text-white text-sm hover:underline">Terms and Conditions</a>
                            </div>
                            <div className="flex flex-col min-w-[100px] mb-4 md:mb-0">
                                <span className="font-bold text-white text-lg mb-2">Social</span>
                                <div className="flex gap-3 mt-1">
                                    <a href="https://www.instagram.com/dentaltourismclinicsindia?igsh=MWF1aG1nN21pczVnYw%3D%3D&utm_source=qr" aria-label="Instagram" className="inline-block"><img src="https://img.icons8.com/fluency/32/instagram-new.png" alt="Instagram" className="rounded-full" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-8 gap-4 w-full">
                      <img src={logo} alt="Dental Tourism Clinics India Logo" className="w-[100px] h-[100px] object-cover rounded-full shadow" style={{flexShrink: 0, background: '#fff', borderRadius: '50%', boxShadow: '0 2px 8px 0 rgba(0,39,118,0.10)'}} />
                      <span className="text-white font-bold text-base md:text-lg whitespace-nowrap">Copyright &copy; {new Date().getFullYear()}, Dental Tourism Clinics India. All rights reserved.</span>
                    </div>
                </footer>
			</div>
		</>
	);
};

export default Home;
