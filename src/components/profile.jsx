import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/profile.css';
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ fullname: '', mobileno: '', password: '', profilePic: null });
  const [showBookings, setShowBookings] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchBookings(parsedUser._id);
      setFormData({
        fullname: parsedUser.fullname || '',
        mobileno: parsedUser.mobileno || '',
        password: parsedUser.password || '',
        profilePic: null
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchBookings = async (userId) => {
    try {
      const response = await axios.get(`https://tour-and-travel-api.onrender.com/booking/user/${userId}`);
      setBookings(response.data.bookings); // ✅ Corrected
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePic') {
      setFormData({ ...formData, profilePic: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    try {
      const data = new FormData();
      data.append("fullname", formData.fullname);
      data.append("mobileno", formData.mobileno);
      data.append("password", formData.password);
      if (formData.profilePic) {
        data.append("profilePic", formData.profilePic);
      }

      const res = await axios.put(`https://tour-and-travel-api.onrender.com/user/update/${user._id}`, data);

      if (res.data.message) {
        const updatedUser = res.data.message;
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setEditMode(false);
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const toggleBookings = () => {
    setShowBookings(!showBookings);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Profile</h2>

        {editMode ? (
          <>
            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" />
            <input type="text" name="mobileno" value={formData.mobileno} onChange={handleChange} placeholder="Mobile Number" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <input type="file" name="profilePic" onChange={handleChange} />
          </>
        ) : (
          <>
            <img src={`https://tour-and-travel-api.onrender.com/uploads/${user?.profilePic}`} alt="Profile" className="profile-image" />
            <p><strong>Full Name:</strong> {user?.fullname}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Mobile:</strong> {user?.mobileno}</p>
          </>
        )}

        {editMode ? (
          <button className="save-btn" onClick={handleSave}>Save</button>
          
        ) : (
          <button className="edit-btn" onClick={handleEditToggle}>Edit</button>
        )}

        <button className="see-bookings-btn" onClick={toggleBookings}>
          {showBookings ? 'Hide Bookings' : 'See More'}
        </button>
      </div>

      {showBookings && (
        <div className="bookings">
          <h3>Your Bookings</h3>
          {bookings.length > 0 ? (
            <ul className="booking-cards-container">
              {bookings.map((booking, index) => (
                <li key={index}>
                  <div className="booking-card">
                  <p><strong>Package Name:</strong> {booking.packageId?.packagename || 'N/A'}</p>
                  <p><strong>Destination:</strong> {booking.packageId?.destination || 'N/A'}</p>
                  <p><strong>Price per Person:</strong> ₹{booking.packageId?.pricePerPerson || 'N/A'}</p>
                  <p><strong>Travel Date:</strong> {new Date(booking.travelDate).toLocaleDateString()}</p>
                  <p><strong>People:</strong> {booking.numberOfPeople}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
