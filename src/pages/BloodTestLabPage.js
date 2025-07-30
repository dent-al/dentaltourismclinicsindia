import React, { useState, useEffect } from "react";
import ClinicList from "./ClinicList";
import FullPageLoader from "../components/FullPageLoader";

const BloodTestLabPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <FullPageLoader />;
  return <ClinicList type="bloodtest" />;
};

export default BloodTestLabPage;
