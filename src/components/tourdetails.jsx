import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/tourdetailpage.css';

const TourDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [pkg, setPkg] = useState(location.state?.pkg || null);

  useEffect(() => {
    if (!pkg) {
      axios.get(`https://tour-and-travel-api.onrender.com/package/${id}`)
        .then((res) => setPkg(res.data))
        .catch((err) => {
          console.error("Failed to fetch package:", err);
          alert("Failed to load tour details.");
        });
    }
  }, [id, pkg]);

  if (!pkg) {
    return <div className="container"><p>Loading tour details...</p></div>;
  }

  return (
    <div className="container">
      <h1>{pkg.packageName}</h1>

      <div className="tour-info">
        <p><strong>Destination:</strong> {pkg.destination}</p>
        <p><strong>Duration:</strong> {pkg.duration}</p>
        <p><strong>Price:</strong> ₹{pkg.pricePerPerson} per person</p>
        <p><strong>Starts From:</strong> {pkg.startingPoint || 'Not mentioned'}</p>
      </div>

      <div>
        <img
          src={`https://tour-and-travel-api.onrender.com/uploads/${pkg.images?.[0]}`}
          alt={pkg.packageName}
          style={{ width: '300px', borderRadius: '10px', marginTop: '10px' }}
        />
      </div>

      <div className="section">
        <h2>Description</h2>
        <p>{pkg.description}</p>
      </div>

      {/* Conditional Rendering: Itinerary & Inclusions */}
      {pkg.packageName === "Char Dham Yatra" && (
        <>
          <div className="section">
            <h2>Tour Itinerary</h2>
            <ul>
              <li>Day 1: Haridwar Arrival & Ganga Aarti</li>
              <li>Day 2: Haridwar to Barkot</li>
              <li>Day 3: Yamunotri Darshan</li>
              <li>Day 4: Barkot to Uttarkashi</li>
              <li>Day 5: Gangotri Darshan</li>
              <li>Day 6: Uttarkashi to Guptkashi</li>
              <li>Day 7: Kedarnath Yatra</li>
              <li>Day 8: Return to Guptkashi</li>
              <li>Day 9: Guptkashi to Badrinath</li>
              <li>Day 10: Badrinath Darshan</li>
              <li>Day 11: Return to Rudraprayag</li>
              <li>Day 12: Back to Haridwar / Delhi</li>
            </ul>
          </div>

          <div className="section">
            <h2>Inclusions</h2>
            <ul>
              <li>AC Accommodation</li>
              <li>All transfers & sightseeing</li>
              <li>Daily breakfast & dinner</li>
              <li>Puja assistance at temples</li>
              <li>Tour Guide & Escort</li>
            </ul>
          </div>
        </>
      )}

      {pkg.packageName === "Vaishno Devi Tour" && (
        <>
          <div className="section">
            <h2>Tour Itinerary</h2>
            <ul>
              <li>Day 1: Jammu Arrival</li>
              <li>Day 2: Katra – Vaishno Devi Darshan</li>
              <li>Day 3: Return</li>
            </ul>
          </div>

          <div className="section">
            <h2>Inclusions</h2>
            <ul>
              <li>Train Tickets</li>
              <li>Hotel in Katra</li>
              <li>Yatra Registration</li>
              <li>Pickup & Drop</li>
            </ul>
          </div>
        </>
      )}

      {/* Add more packages below like Kedarnath, Amarnath, etc. */}
    </div>
  );
};

export default TourDetailPage;
