import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import FullPageLoader from "../components/FullPageLoader";

const ArticlesPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <FullPageLoader />;
  return (
    <>
      <HeroBanner />
      <div className="min-h-screen flex items-center justify-center text-[#2C73D2] text-2xl font-bold">
        Articles Page Coming Soon
      </div>
    </>
  );
};

export default ArticlesPage;
