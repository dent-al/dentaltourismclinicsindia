import React, { useState, useEffect } from "react";
import FullPageLoader from "../components/FullPageLoader";

const CBCTOPGLabPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <FullPageLoader />;
  return (
    <div className="min-h-screen flex items-center justify-center text-[#2C73D2] text-2xl font-bold">
      CBCT/OPG Lab Page Coming Soon
    </div>
  );
};

export default CBCTOPGLabPage;
