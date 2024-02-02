
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import  './login.css'
const url = 'http://localhost:3001/singup';
export default function Singup() {
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
    // Add your login logic here using 'email' and 'password'
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
          Signup
        </button>
        <div className='btn-div'>
            <Link to="/login">
                <button className="change-button">Login</button>
            </Link>
        </div>
      </div>
    </form>
  );
}
