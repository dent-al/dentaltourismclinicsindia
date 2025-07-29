import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FullPageLoader from "../components/FullPageLoader";


const ClinicDetails = () => {
  const [clinic, setClinic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/clinics/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Clinic not found");
        return res.json();
      })
      .then((data) => {
        setClinic(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <FullPageLoader />;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!clinic) return <div className="p-8">Clinic not found.</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded shadow">
      <img
        src={clinic.image}
        alt={clinic.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-3xl font-bold mb-2 text-[#6548ee]">{clinic.name}</h2>
      <div className="mb-1 text-[#ff9800] font-medium">{clinic.specialty}</div>
      <div className="mb-1 text-gray-700">
        {clinic.address} | {clinic.location}
      </div>
      <div className="mb-1 text-yellow-500">Rating: {clinic.rating}</div>
      <div className="mb-1">
        Timings:{" "}
        <span className="font-semibold">{clinic.timings}</span>
      </div>
      <Link
        to={`/clinics/${clinic._id || clinic.id}/book`}
        className="inline-block bg-[#6548ee] text-white px-6 py-2 rounded hover:bg-[#ff9800] transition mb-4"
      >
        Book Appointment
      </Link>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-[#6548ee]">Doctors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {clinic.doctors && clinic.doctors.length > 0 ? clinic.doctors.map((doc, idx) => (
            <div
              key={idx}
              className="flex items-center bg-[#ede7f6] p-3 rounded"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <div className="font-semibold">{doc.name}</div>
                <div className="text-[#ff9800] text-sm">
                  {doc.specialty}
                </div>
              </div>
            </div>
          )) : <div className="text-gray-500">No doctors listed.</div>}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#6548ee]">Reviews</h3>
        <ul className="space-y-2">
          {clinic.reviews && clinic.reviews.length > 0 ? clinic.reviews.map((review, idx) => (
            <li key={idx} className="bg-[#fff3e0] p-3 rounded">
              {review}
            </li>
          )) : <li className="text-gray-500">No reviews yet.</li>}
        </ul>
      </div>
    </div>
  );
};

export default ClinicDetails;
