import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import allStatesAndUTs from '../data/allStatesAndUTs';
import FullPageLoader from "../components/FullPageLoader";

const labs = [
  {
    id: 1,
    name: "Smile Diagnostics Lab",
    location: "Delhi",
    rating: 4.8,
    specialty: "CBCT & OPG Scans",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80",
  },
  {
    id: 2,
    name: "Pearl Imaging Centre",
    location: "Mumbai",
    rating: 4.6,
    specialty: "CBCT & OPG Scans",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80",
  },
  {
    id: 3,
    name: "Bright Scan Lab",
    location: "Bangalore",
    rating: 4.7,
    specialty: "CBCT & OPG Scans",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=300&q=80",
  },
];

const uniqueCities = [...new Set(labs.map((lab) => lab.location))];

const CbctOpgLabList = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredLabs = labs.filter((lab) => {
    const matchesSearch = lab.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCity = city ? lab.location === city : true;
    const matchesState = selectedState ? lab.location === selectedState : true;
    return matchesSearch && matchesCity && matchesState;
  });

  if (loading) return <FullPageLoader />;

  return (
    <div className="p-8 bg-[#ede7f6] min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-[#6548ee]">CBCT & OPG Centres</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search labs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/2"
        />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/4"
        >
          <option value="">All Cities</option>
          {uniqueCities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/4"
        >
          <option value="">All States/UTs</option>
          {allStatesAndUTs.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => (
          <li
            key={lab.id}
            className="border p-6 rounded-lg shadow bg-white flex flex-col justify-between"
          >
            <img
              src={lab.image}
              alt={lab.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <div>
              <div className="font-semibold text-xl mb-1 text-[#6548ee]">
                {lab.name}
              </div>
              <div className="text-[#ff9800] mb-1 font-medium">
                {lab.specialty}
              </div>
              <div className="text-gray-600 mb-1">{lab.location}</div>
              <div className="text-yellow-500 mb-2">
                Rating: {lab.rating}
              </div>
            </div>
            <div>
              <Link
                to={`/cbct-opg-lab/${lab.id}`}
                className="mr-2 inline-block bg-[#6548ee] text-white px-4 py-2 rounded hover:bg-[#ff9800] transition"
              >
                View Details
              </Link>
              <Link
                to={`/cbct-opg-lab/${lab.id}/book`}
                className="inline-block bg-[#ff9800] text-white px-4 py-2 rounded hover:bg-[#6548ee] transition"
              >
                Book Appointment
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CbctOpgLabList;
