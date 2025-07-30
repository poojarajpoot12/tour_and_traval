import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css';

const Login = () => {
  const [fullname, setFullName] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilepic, setProfilePic] = useState(null);
  const [formMessage, setFormMessage] = useState('');
  const [mode, setMode] = useState('login');

  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const pageType = location.pathname.split('/')[1];
    if (pageType === 'update') {
      fetchSingleUser(params._id);
      setMode('update');
    }
  }, [location.pathname, params._id]);

  const fetchSingleUser = async () => {
    try {
      const res = await axios.get(`https://tour-and-travel-api.onrender.com/user/singleuserlist/${params._id}`);
      const user = res.data.message; // Ensure backend sends "message" key
      setFullName(user.fullname);
      setMobileNo(user.mobileno);
      setEmail(user.email);
      setPassword(user.password);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (mode !== 'login' && (!fullname || !mobileno))) {
      alert('Please fill all the fields');
      return;
    }

    try {
      if (mode === 'login') {
        const res = await axios.post('https://tour-and-travel-api.onrender.com/user/login', { email, password });

        if (res.data.message.includes('successful')) {
 
          const user = res.data.user;

          // Admin check
          if (email === 'admin@gmail.com' && password === 'admin123') {
            user.role = 'admin';
          }

          // Save user in localStorage
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('userId', user._id);
          localStorage.setItem('role', user.role);

          navigate(user.role === 'admin' ? '/' : '/');
        } else {
          setFormMessage('User not found. Switching to registration...');
          setMode('register');
        }
      } else if (mode === 'register') {
        const formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('mobileno', mobileno);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profilePic', profilepic);

        await axios.post('https://tour-and-travel-api.onrender.com/user/registration', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setMode('login');
        setFormMessage('');
        setFullName('');
        setMobileNo('');
        setEmail('');
        setPassword('');
        setProfilePic(null);
        alert('User registered successfully!');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className='login-container'>
      <div className="form">
        <h2 className='formname'>
          {mode === 'login' ? 'Login Form' : 'Registration Form'}
        </h2>

        <form onSubmit={handleSubmit}>
          {mode !== 'login' && (
            <>
              <input
                className='loginput'
                type='text'
                placeholder='Full Name'
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              /><br /><br />

              <input
                className='loginput'
                type='text'
                placeholder='Mobile No'
                value={mobileno}
                onChange={(e) => setMobileNo(e.target.value)}
              /><br /><br />

              <input 
              className='loginput'
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={(e) => setProfilePic(e.target.files[0])}
              /><br /><br />
            </>
          )}

          <input
            className='loginput'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />

          <input
            className='loginput'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />

          <button type="submit" className="loginbtn">
            {mode === 'login' ? 'Login' : 'Register'}
          </button><br /><br />

          {formMessage && <p className="form-message">{formMessage}</p>}

          {mode === 'login' && (
            <p className='formname'>
              First time here?{' '}
              <a
                onClick={() => setMode('register')}
                style={{ color: 'blue', cursor: 'pointer' }}
              >
                Register
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
