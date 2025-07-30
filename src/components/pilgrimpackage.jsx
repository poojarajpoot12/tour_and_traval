import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pilgrimpackage.css';
import axios from 'axios';

const PilgrimsPackage = () => {
  const [packages, setPackages] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingData, setBookingData] = useState({
    travelDate: '',
    numberOfPeople: 1
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPackages();
    const user = JSON.parse(localStorage.getItem('user'));
    const role = user.role;
    // console.log("logged in user role: ", role);// 'admin' or 'user'
    setIsAdmin(role === 'admin');
  }, []);

  const fetchPackages = () => {
    axios.get('https://tour-and-travel-api.onrender.com/package/all')
      .then(res => setPackages(res.data))
      .catch(err => {
        console.error('Failed to fetch packages:', err);
        alert("Failed to load packages.");
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      axios.delete(`https://tour-and-travel-api.onrender.com/package/delete/${id}`)
        .then(() => {
          setPackages(prev => prev.filter(pkg => pkg._id !== id));
          alert("Package deleted.");
        })
        .catch(err => {
          console.error("Delete error:", err);
          alert("Failed to delete.");
        });
    }
  };

  const handleEdit = (_id) => {
    navigate(`/updatepackage/${_id}`);
  };

  const handleCreate = () => {
    navigate('/createpackage');
  };

  const handleBookNow = (pkg) => {
    const userId = localStorage.getItem('userId');
    if (!userId || userId === 'undefined' || userId.trim() === '') {
      alert('⚠️ Please register or log in to book a package.');
      return;
    }

    setSelectedPackage(pkg);
    setBookingData({ travelDate: '', numberOfPeople: 1 });
    setShowBookingForm(true);
  };

  // ✅ UPDATED: Navigate to tour detail page and pass package data
  const opendetailpage = (pkg) => {
    navigate(`/tourdetails/${pkg._id}`, { state: { pkg } });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');

    if (!userId || userId === 'undefined' || userId.trim() === '') {
      alert('⚠️ Please register or log in before booking.');
      return;
    }

    if (!bookingData.travelDate) {
      alert('⚠️ Please select a travel date.');
      return;
    }

    if (!bookingData.numberOfPeople || bookingData.numberOfPeople < 1) {
      alert('⚠️ Please enter a valid number of people.');
      return;
    }

    const payload = {
      userId,
      packageId: selectedPackage._id,
      travelDate: bookingData.travelDate,
      numberOfPeople: Number(bookingData.numberOfPeople)
    };

    axios.post('https://tour-and-travel-api.onrender.com/booking/book', payload)
      .then(() => {
        alert('✅ Booking successful!');
        setShowBookingForm(false);
      })
      .catch(err => {
        console.error('❌ Booking error:', err.response?.data || err.message);
        alert('❌ Booking failed.');
      });
  };

  return (
    <div className="package-list-container">
      <div className="package-header">
        <h2>Available Packages</h2>
        {isAdmin && (
          <button className="create-button" onClick={handleCreate}>
            + Create New Package
          </button>
        )}
      </div>

      <div className="package-list-vertical">
        {packages.length === 0 ? (
          <p>No packages available.</p>
        ) : (
          packages.map(pkg => (
            <div key={pkg._id} className="package-card-vertical">
              <img
                src={`https://tour-and-travel-api.onrender.com/uploads/${pkg.images[0]}`}
                alt={pkg.packagename}
                className="package-img"
              />

              {isAdmin && (
                <div className="card-actions">
                  <button onClick={() => handleEdit(pkg._id)}>Edit</button>
                  <button onClick={() => handleDelete(pkg._id)}>Delete</button>
                </div>
              )}

              <div className="package-content">
                <h5>Name:{pkg.packagename}</h5>
                <p><strong>Destination:</strong> {pkg.destination}</p>
                <p><strong>Duration:</strong> {pkg.duration}</p>
                <p><strong>Price:</strong> ₹{pkg.pricePerPerson}</p>
                <p className="description">{pkg.description}</p>
                <div className="buttons">
                  <button onClick={() => handleBookNow(pkg)}>Book now</button>
                  <button onClick={() => opendetailpage(pkg)}>Details</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && selectedPackage && (
        <div className="booking-form-modal">
          <div>
            <img src='https://thumbs.dreamstime.com/z/travel-india-concept-indian-most-famous-sights-set-architectural-buildings-tourist-background-suitcases-sunglasses-hat-143939634.jpg' width={300} alt="Booking" />
          </div>
          <div className="booking-form-container">
            <h3>Booking for:</h3><br />
            <h6>{selectedPackage.packagename}</h6><br />
            <form onSubmit={handleBookingSubmit}>
              <div>
                <label>Travel Date:</label>
                <input
                  type="date"
                  value={bookingData.travelDate}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, travelDate: e.target.value })
                  }
                  required
                /><br />
              </div>
              <div>
                <label>Number of People:</label>
                <input
                  type="number"
                  min="1"
                  value={bookingData.numberOfPeople}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, numberOfPeople: e.target.value })
                  }
                  required
                /><br />
              </div>
              <br />
              <button type="submit">Confirm Booking</button>
              <button type="button" onClick={() => setShowBookingForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PilgrimsPackage;
