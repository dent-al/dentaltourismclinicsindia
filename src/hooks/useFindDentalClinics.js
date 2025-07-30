import { useState, useEffect } from "react";

const mockClinics = [
  {
    id: 1,
    Name: "Smile Dental Care",
    Specialty: "General Dentistry",
    Address: "123 Main Street",
    City: "Mumbai",
    State: "Maharashtra",
    Rating: "4.8",
    Website: "https://smiledentalcare.com",
    Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80",
    OpenTime: "09:00 AM",
    CloseTime: "08:00 PM",
    Contact: "+91 9876543210",
    Offers: "10% off on first visit",
    Directions: "https://goo.gl/maps/xyz123"
  },
  {
    id: 2,
    Name: "Pearl Dental Studio",
    Specialty: "Cosmetic Dentistry",
    Address: "456 Park Avenue",
    City: "Delhi",
    State: "Delhi",
    Rating: "4.6",
    Website: "https://pearldentalstudio.com",
    Image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80",
    OpenTime: "10:00 AM",
    CloseTime: "07:00 PM",
    Contact: "+91 9988776655",
    Offers: "Free consultation for new patients",
    Directions: "https://goo.gl/maps/abc456"
  },
  {
    id: 3,
    Name: "Bright Smiles Clinic",
    Specialty: "Orthodontics",
    Address: "789 Lake Road",
    City: "Bangalore",
    State: "Karnataka",
    Rating: "4.9",
    Website: "https://brightsmilesclinic.com",
    Image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=facearea&w=400&h=300&q=80",
    OpenTime: "08:30 AM",
    CloseTime: "09:00 PM",
    Contact: "+91 9123456780",
    Offers: "Complimentary dental checkup",
    Directions: "https://goo.gl/maps/def789"
  }
];

export default function useFindDentalClinics() {
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.sheetbest.com/sheets/83d5bf7a-6241-4ebb-bddd-ac457a6c4d4a')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setClinics(data);
        } else if (Array.isArray(data.data) && data.data.length > 0) {
          setClinics(data.data);
        } else {
          setClinics(mockClinics); // fallback to mock data if API returns empty
        }
        setLoading(false);
      })
      .catch(err => {
        setClinics(mockClinics); // fallback to mock data on error
        setError(err);
        setLoading(false);
      });
  }, []);

  return { clinics, loading, error };
}
