import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  './login.css'
import { Link } from 'react-router-dom';
const url = 'http://localhost:3001/login';
const Login : React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e : any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e : any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
    
      if (res.ok) {
        const data = await res.json();
    
        // Assuming the server responds with a token in the 'token' property
        const token = data.token;
    
        // Save the token in local storage
        localStorage.setItem('token', token);
    
        console.log('Token saved successfully:', token);
        navigate('/gettodo');

      } else {
        console.error('Error:', res.status, res.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="form-group btn">
        <button type="submit" className="submit-button">
          Login
        </button>
        <div className='btn-div'>
            <Link to="/">
                <button className="change-button">Signup</button>
            </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
