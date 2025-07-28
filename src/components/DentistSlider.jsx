// DentistSlider.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import OptimizedImage from './OptimizedImage';

const dentists = [
	{
		name: "Dr. Shikha",
		title: "B.D.S, M.D.S\nD.Acupuncture, D.Cupping\nProsthodontist & Oral Implantologist,\nHolistic Dentist, Biological Dentist\nAcupuncturist, Cupping Therapist",
		experience: "17+ years of experience",
		image: doctor1,
	},
	{
		name: "Dr. Vruushali Patil",
		title: "B.D.S, M.D.S\nPeriodontist & Oral Implantologist",
		experience: "20+ years of experience",
		image: doctor2,
	},
	{
		name: "Dr. Anil Kumar",
		title: "B.D.S, M.D.S\nOral & Maxillofacial Surgeon",
		experience: "15+ years of experience",
		image: doctor1,
	},
	{
		name: "Dr. Priya Sharma",
		title: "B.D.S, M.D.S\nPediatric Dentist",
		experience: "10+ years of experience",
		image: doctor2,
	},
	{
		name: "Dr. Rajesh Singh",
		title: "B.D.S, M.D.S\nEndodontist",
		experience: "12+ years of experience",
		image: doctor1,
	},
	{
		name: "Dr. Meera Patel",
		title: "B.D.S, M.D.S\nOrthodontist",
		experience: "18+ years of experience",
		image: doctor2,
	},
];

const useResponsiveChunk = (arr, desktopSize, mobileSize) => {
	const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

	React.useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const size = isMobile ? mobileSize : desktopSize;
	const result = [];
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
};

const DentistSlider = () => {
	const slides = useResponsiveChunk(dentists, 3, 1);
	const [current, setCurrent] = useState(0);
	const navigate = useNavigate();

	const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

	const handleConsultClick = (dentist) => {
		// Navigate to new page with dentist info
		navigate('/consult-form', { state: { dentist } });
	};

	return (
		<div className="w-full flex flex-col items-center mt-10 bg-white pb-8">
			<h2 className="text-3xl md:text-4xl font-bold text-[#2C73D2] text-center mb-10">Your Trusted Dentists</h2>
			<div className="relative flex items-center justify-center w-full gap-4">
				<button
					className="absolute left-[-32px] top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 transition"
					onClick={prevSlide}
					aria-label="Previous"
					style={{ left: '-32px' }}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="12" fill="white" />
						<path d="M14.5 7L9.5 12L14.5 17" stroke="#A0AEC0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
				{slides.length > 0 && slides[current].map((dentist, idx) => (
					<div key={dentist.name + idx} className="bg-white border border-blue-200 rounded-xl px-8 py-6 text-blue-900 font-semibold shadow w-[300px] h-[420px] flex flex-col items-center justify-start transition-all duration-300">
						<OptimizedImage
							src={dentist.image}
							alt={dentist.name}
							className="w-28 h-28 rounded-full object-cover border-4 border-white shadow mb-4"
						/>
						<div className="text-center flex flex-col flex-1 justify-center">
							<span className="font-bold text-lg text-[#15396A]">{dentist.name}</span>
							<div className="text-[#15396A] text-sm whitespace-pre-line mt-1 mb-2">{dentist.title}</div>
							<div className="text-[#2C73D2] font-semibold mt-2">{dentist.experience}</div>
						</div>
						<button
							className="bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold px-3 py-1 rounded-md shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition flex items-center justify-center gap-1 border border-[#F4A300] mt-3 text-xs"
							style={{ fontSize: '0.85rem', marginTop: 'auto', minWidth: '90px' }}
							onClick={() => handleConsultClick(dentist)}
						>
							<svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" className="mr-1"><path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2 0v10h12V5H4zm3 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V7zm4 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V7z"/></svg>
							Consult Now
						</button>
					</div>
				))}
				<button
					className="absolute right-[-32px] top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 transition"
					onClick={nextSlide}
					aria-label="Next"
					style={{ right: '-32px' }}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="12" fill="white" />
						<path d="M9.5 7L14.5 12L9.5 17" stroke="#A0AEC0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div>
			{/* Modal removed; form will be on new page */}
		</div>
	);
};

export default DentistSlider;
