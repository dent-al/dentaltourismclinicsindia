import React from "react";
import { useParams, Link } from "react-router-dom";

const mockClinics = [
  {
    id: 1,
    name: "Smile Dental Care",
    location: "Delhi",
    rating: 4.8,
    address: "123 Main St, Delhi",
    timings: "10am - 7pm",
    specialty: "Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80",
    doctors: [
      {
        name: "Dr. A Sharma",
        specialty: "Cosmetic Dentist",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Dr. B Singh",
        specialty: "Implantologist",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
    reviews: ["Great service!", "Very professional."],
  },
  {
    id: 2,
    name: "Pearl Dental Clinic",
    location: "Mumbai",
    rating: 4.6,
    address: "456 Park Ave, Mumbai",
    timings: "9am - 6pm",
    specialty: "Orthodontics",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80",
    doctors: [
      {
        name: "Dr. C Patel",
        specialty: "Orthodontist",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    ],
    reviews: ["Clean and modern clinic."],
  },
  {
    id: 3,
    name: "Bright Smiles",
    location: "Bangalore",
    rating: 4.7,
    address: "789 Lake Rd, Bangalore",
    timings: "11am - 8pm",
    specialty: "Pediatric Dentistry",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=300&q=80",
    doctors: [
      {
        name: "Dr. D Rao",
        specialty: "Pediatric Dentist",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
      },
      {
        name: "Dr. E Kumar",
        specialty: "Endodontist",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
    reviews: ["Friendly staff."],
  },
];

const ClinicDetails = () => {
  const { id } = useParams();
  const clinic = mockClinics.find((c) => c.id === Number(id));

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
        to={`/clinics/${clinic.id}/book`}
        className="inline-block bg-[#6548ee] text-white px-6 py-2 rounded hover:bg-[#ff9800] transition mb-4"
      >
        Book Appointment
      </Link>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-[#6548ee]">Doctors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {clinic.doctors.map((doc, idx) => (
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
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#6548ee]">Reviews</h3>
        <ul className="space-y-2">
          {clinic.reviews.map((review, idx) => (
            <li key={idx} className="bg-[#fff3e0] p-3 rounded">
              {review}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClinicDetails;
