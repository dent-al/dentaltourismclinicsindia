import React from "react";
import { Link } from "react-router-dom";

const ArticleSection = () => {
    return (
        <div className="w-full max-w-5xl mx-auto pb-12 px-4">
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#6548ee] mb-2 font-[Poppins]">
                    Read top articles from dental health experts
                </h2>
                <p className="text-gray-700 text-base md:text-lg font-[Poppins]">
                    Dental health articles that keep you informed about good health practices and achieve your goals.
                </p>
            </div>
            <div className="flex gap-8">
                <div className="flex-1 shadow-lg rounded-lg overflow-hidden">
                    <img src={require("../assets/article1.jpg")} alt="Article 1" className="w-full h-48 object-cover" />
                </div>
                <div className="flex-1 shadow-lg rounded-lg overflow-hidden">
                    <img src={require("../assets/article2.jpg")} alt="Article 2" className="w-full h-48 object-cover" />
                </div>
            </div>
            <div className="text-center mt-6">
                <Link to="/articles" className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6548ee] to-[#ff9800] text-white font-semibold text-lg shadow hover:from-[#ff9800] hover:to-[#6548ee] transition">
                    Read articles
                </Link>
            </div>
        </div>
    );
};

export default ArticleSection;