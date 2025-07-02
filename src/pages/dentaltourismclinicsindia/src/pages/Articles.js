import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#ede7f6] to-[#fff3e0] flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#6548ee]">
                Read top articles from dental health experts
            </h1>
            <p className="text-lg md:text-xl mb-8 text-[#6548ee]">
                Dental health articles that keep you informed about good health practices and achieve your goals.
            </p>
            <Link to="/articles" className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6548ee] to-[#ff9800] text-white font-semibold text-lg shadow hover:from-[#ff9800] hover:to-[#6548ee] transition">
                Read articles
            </Link>
            <div className="flex gap-4 mt-8">
                <div className="w-64 h-40 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={require('../assets/article-image-1.png')} alt="Article 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-64 h-40 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={require('../assets/article-image-2.png')} alt="Article 2" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Articles;