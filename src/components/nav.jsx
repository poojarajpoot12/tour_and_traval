import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const storedUser = localStorage.getItem('user');

  // safe check
  if (storedUser && storedUser !== "undefined") {
    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      if (window.location.pathname === '/login') {
        navigate('/');
      }
    } catch (err) {
      console.error("Invalid user data in localStorage:", err);
      localStorage.removeItem('user'); // clean the bad data
    }
  }
}, [navigate]);


  const toggleHamburger = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="navigation">
      <div className="logo">
        <img
          src="\images\logo-search-grid-2x.png"
          className="logo-img"
          alt="Logo"
        />
      </div>

      <div className="hamburger" onClick={toggleHamburger}>
        &#9776;
      </div>

      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <button onClick={() => toggleDropdown('destination')} className="nav-links">
          Destination ▼
        </button>
        {openDropdown === 'destination' && (
          <div className="dropdown">
            <ul className='navlinks'>
              <li><a onClick={() => navigate('/northindia')}>North India</a></li><br />
              <li><a onClick={()=>navigate('/southpackage')}>South India</a></li><br />
              <li><a>East India</a></li><br />
              <li><a>West India</a></li><br />
              <li><a>Central India</a></li>
            </ul>
          </div>
        )}

        <button onClick={() => toggleDropdown('holidays')} className="nav-links">
          Holidays Ideas ▼
        </button>
        {openDropdown === 'holidays' && (
          <div className="dropdown">
              <ul>
                <li>Romantic Getaways</li>
                <li>Family Vacations</li>
                <li> Adventure Trips</li>
                <li>Wellness Retreats</li>
                <li>Summer Specials</li>
                <li>Festival Holidays</li>
                <li>Beach Holidays</li>
                <li>Wildlife Safaris</li>
              </ul>
            </div>



        
        )}

        {user ? (
          <>
            {user.role === 'admin' && (
              <>
                <a onClick={() => navigate('/createpackage')} className="nav-links">Add Package</a>
                <a onClick={() => navigate('/alluser')} className="nav-links">All Users</a>
                <a onClick={() => navigate('/allPackage')} className="nav-links">All Package</a>
                <a onClick={() => navigate('/allbooking')} className="nav-links">All Booking</a>
              </>
            )}

            {/* ✅ Profile Button for all users */}
            <a onClick={() => navigate('/profile')} className="nav-links">Profile</a>

            <a onClick={handleLogout} className="nav-links">
              <button className="loginbtn">Logout</button>
            </a>
          </>
        ) : (
          <a onClick={() => navigate('/login')} className="nav-links">
            <button className="loginbtn">Login</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Nav;
