import React, { useState } from "react";
import instagramIcon from "../assets/instagram.png";
import youtubeIcon from "../assets/youtube.png";
import { useNavigate } from "react-router-dom";

const plans = [
	{
		name: "Basic Plan",
		priceMonthly: 1100,
		priceYearly: 12999,
		features: [
			"✓ 1 Clinic",
			"❌ Verified Badge",
			"❌ Priority in Search Results",
			"❌ Google Reviews",
			"❌ Email Newsletter to Patients",
			"❌ All Posting Done on DTCI Platform",
			"✓ 1 Instagram Feed Post/Month",
			"❌ Instagram Stories & Highlights",
			"❌ Instagram Ad Boost",
			"❌ YouTube Clinic Video Listing",
			"❌ Homepage Banner",
			"❌ Clinic Video Editing",
			"❌ Poster Design by DTCI",
			"❌ Google Business SEO",
			"❌ Doctor Introduction Video",
			"❌ Video Consultation",
		],
	},
	{
		name: "Growth Plan",
		priceMonthly: 2200,
		priceYearly: 26999,
		features: [
			"✓ 1 Clinic",
			"✓ Verified Badge",
			"❌ Priority in Search Results",
			"✓ Google Reviews",
			"1 Email/Month to Patients",
			"❌ All Posting Done on DTCI Platform",
			"2 Instagram Feed Posts/Month",
			"4 Instagram Stories/Highlights/Month",
			"❌ Instagram Ad Boost",
			"3 YouTube Clinic Videos/Month",
			"✓ Homepage Banner",
			"❌ Clinic Video Editing",
			"❌ Poster Design by DTCI",
			"❌ Google Business SEO",
			"❌ Doctor Introduction Video",
			"❌ Video Consultation",
		],
	},
	{
		name: "Premium Plan",
		priceMonthly: 3200,
		priceYearly: 38999  ,
		features: [
			"✓ 2 Clinics",
			"✓ Verified Badge",
			"✓ Priority in Search Results",
			"✓ Google Reviews",
			"2 Emails/Month to Patients",
			"✓ All Posting Done on DTCI Platform",
			"6 Instagram Feed Posts/Month",
			"6 Instagram Stories/Highlights/Month",
			"✓ Instagram Ad Boost",
			"5 YouTube Clinic Videos/Month",
			"✓ Homepage Banner",
			"✓ Clinic Video Editing",
			"✓ 1 Poster Design/Quarter by DTCI",
			"✓ Google Business SEO",
			"✓ Doctor Introduction Video",
			"✓ Video Consultation",
		],
	},
];

const featuresList = [
	"Clinic Listing",
	"Verified Badge",
	"Priority in Search Results",
	"Google Reviews",
	"Email Newsletter to Patients",
	"All Posting Done on DTCI Platform",
	"Instagram Feed Post",
	"Instagram Stories & Highlights",
	"Instagram Ad Boost",
	"YouTube Clinic Video Listing",
	"Homepage Banner",
	"Clinic Video Editing",
	"Poster Design by DTCI",
	"Google Business SEO",
	"Doctor Introduction Video",
	"Video Consultation",
];

const PricingPlansPage = () => {
	const [billing, setBilling] = useState("month");
	const navigate = useNavigate();

	const getPrice = (plan) =>
		billing === "month"
			? `₹${plan.priceMonthly}/Month`
			: `₹${plan.priceYearly}/Year`;

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2C73D2] via-[#F5F8FF] to-[#F4A300] px-2 py-6">
			<div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-0">
				<div className="text-center mb-0 pb-0 w-full">
					<h1 className="text-3xl md:text-4xl font-extrabold text-[#2C73D2] mb-1 drop-shadow">
						Pricing on your terms
					</h1>
					<p className="text-lg text-[#15396A] mb-2">
						Whichever plan you pick, it's free until you love your listing.
						That's our promise.
					</p>
				</div>
				<div className="relative flex items-center justify-center gap-0 mb-8 w-full max-w-xs mx-auto">
					<div
						className="absolute left-0 top-0 h-full w-1/2 transition-all duration-300 z-0"
						style={{
							transform:
								billing === "month"
									? "translateX(0%)"
									: "translateX(100%)",
							background: "#fff",
							borderRadius: "9999px",
							boxShadow: "0 2px 16px 0 rgba(44,115,210,0.10)",
						}}
					/>
					<button
						className={`relative flex-1 px-8 py-3 rounded-full text-base font-semibold z-10 transition-all duration-200 ${
							billing === "month"
								? "text-[#2C73D2]"
								: "text-[#2C73D2] hover:text-[#15396A]"
						}`}
						style={{
							boxShadow:
								billing === "month"
									? "0 2px 16px 0 rgba(44,115,210,0.10)"
									: "none",
						}}
						onClick={() => setBilling("month")}
					>
						Monthly Plan
					</button>
					<button
						className={`relative flex-1 px-8 py-3 rounded-full text-base font-semibold z-10 transition-all duration-200 ${
							billing === "year"
								? "text-[#2C73D2]"
								: "text-[#2C73D2] hover:text-[#15396A]"
						}`}
						style={{
							boxShadow:
								billing === "year"
									? "0 2px 16px 0 rgba(44,115,210,0.10)"
									: "none",
						}}
						onClick={() => setBilling("year")}
					>
						Yearly Plan
					</button>
				</div>
				<div className="w-full flex flex-col md:flex-row gap-4 justify-center items-stretch mt-0 pt-0">
					{plans.map((plan, idx) => (
						<div
							key={plan.name}
							className={`flex-1 min-w-[290px] max-w-sm bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#2C73D2]/10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-[#2C73D2]/30 ${
								idx === 1
									? "ring-2 ring-[#2C73D2] scale-105 z-10"
									: ""
							}`}
							style={{ cursor: "pointer" }}
						>
							<div className="mb-3 flex flex-col items-center">
								<span className="text-xl font-bold text-[#2C73D2] mb-1">
									{plan.name}
								</span>
								<span className="font-bold text-[#F4A300] text-2xl mb-1">
									{getPrice(plan)}
								</span>
								{idx === 1 && (
									<span className="px-3 py-1 rounded-full bg-[#2C73D2] text-white text-xs font-semibold mb-2">
										Most Popular
									</span>
								)}
							</div>
							<ul className="text-[#15396A] text-sm flex-1 w-full mb-4 space-y-2">
								{plan.features.map((f, i) => (
									<li key={i} className="flex items-center gap-2">
										<span className="inline-block w-4 text-lg">
											{f.startsWith("✓")
												? "✔️"
												: f.startsWith("❌")
												? "✖️"
												: ""}
										</span>
										<span
											className={
												f.startsWith("✓")
													? "text-[#2C73D2]"
													: f.startsWith("❌")
													? "text-gray-300 line-through"
													: "text-[#15396A]"
											}
										>
											{featuresList[i]}
											{f.replace("✓", "").replace("❌", "") && ":"}
											{" "}
										<span className="font-semibold flex items-center gap-1">
						{/* Add Instagram icon if feature text includes 'Instagram' */}
						{featuresList[i].toLowerCase().includes('instagram') && (
						  <img src={instagramIcon} alt="Instagram" className="inline w-8 h-7 mr-1" style={{display:'inline'}} />
						)}
						{/* Add YouTube icon if feature text includes 'YouTube' */}
						{featuresList[i].toLowerCase().includes('youtube') && (
						  <img src={youtubeIcon} alt="YouTube" className="inline w-8 h-7 mr-1" style={{display:'inline'}} />
						)}
											{f.replace("✓ ", "").replace("❌ ", "")}
										</span>
										</span>
									</li>
								))}
							</ul>
							<button
								className="w-full py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] font-semibold text-lg hover:bg-[#2C73D2] hover:text-white transition mt-2 bg-white"
								onClick={() =>
									alert(
										`Proceed to pay for ${plan.name} (${
											billing === "month" ? "Monthly" : "Yearly"
										})`
									)
								}
							>
								Pay for {plan.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PricingPlansPage;
