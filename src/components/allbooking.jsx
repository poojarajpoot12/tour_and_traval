import { useEffect, useState } from "react";
import axios from "axios";
import '../css/profile.css';


const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://tour-and-travel-api.onrender.com/booking/all") // You need to create this endpoint in backend (see below)
      .then((res) => {
        setBookings(res.data.bookings || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching all bookings:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading all bookings...</p>;
  if (!bookings.length) return <p>No bookings found.</p>;

  return (
    <>
    
        <div className="booking-cards-container">
          {bookings.map((booking, index) => (
            <div className="booking-card" key={index}>
              <h3>📦 {booking.packageId?.packagename}</h3>
              <p><strong>Destination:</strong> {booking.packageId?.destination}</p>
              <p><strong>Price:</strong> ₹{booking.packageId?.pricePerPerson}</p>
              <p><strong>Travel Date:</strong> {new Date(booking.travelDate).toLocaleDateString()}</p>
              <p><strong>People:</strong> {booking.numberOfPeople}</p>
              <hr />
              <h4>👤 Booked By:</h4>
              <p><strong>Name:</strong> {booking.userId?.fullname}</p>
              <p><strong>Email:</strong> {booking.userId?.email}</p>
              <p><strong>Mobile:</strong> {booking.userId?.mobileno}</p>
              <p><strong>Status:</strong> {booking.status}</p>
            </div>
          ))}
        </div>
    
    </>
  );
};

export default AllBookings;
