import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/userlist.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fullname = localStorage.getItem('fullname');

  const fetchUsers = () => {
    axios.get('https://tour-and-travel-api.onrender.com/user/userlist')
      .then((response) => {
        const data = response.data;
        console.log("image", data)

        if (Array.isArray(data)) {
          setUsers(data);
        } else if (Array.isArray(data.message)) {
          setUsers(data.message);
        } else {
          console.error("Unexpected data format:", data);
          setUsers([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setUsers([]);
        setLoading(false);
      });
  };

  const handleDelete = (_id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    axios.delete(`https://tour-and-travel-api.onrender.com/user/delete/${_id}`)
      .then(() => fetchUsers())
      .catch((error) => console.log('Delete error:', error));
  };

  const handleEdit = (_id) => {
    navigate('/update/' + _id);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="userlist-container">
      <h2 className="register-heading">Registered Users</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length > 0 ? (
        <div className="card-grid">
          {users.map((user) => (
            
            <div className="user-card" key={user._id}>
              
              <img
                src={
                  user.profilePic
                    ? `https://tour-and-travel-api.onrender.com/uploads/${user.profilePic}`
                    : "https://via.placeholder.com/100" // fallback image
                }
                alt="Profile"
                className="user-profile-pic"
                style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "10px" }}
              />
              <h3>{user.fullname}</h3>
              <p>📱 {user.mobileno}</p>
              <p>📧 {user.email}</p>
              <p>🔒 Password: ******</p>
              {/* {fullname !== user.fullname && (
                <div className="card-action">
                  <button onClick={() => handleEdit(user._id)}>Edit</button>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </div>
              )} */}
            </div>
          ))}
        </div>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default UserList;
