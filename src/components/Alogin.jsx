import React, { useState } from 'react';
import './animations.css';
import './main.css';
import './login.css';

const Alogin = () => {
  const [AdminEmail, setAdminEmail] = useState('');
  const [AdminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <center>
       <div className="container">
      <form onSubmit={handleSubmit} >
        
        <p className="header-text">Welcome Back! BOSS</p>
        <p className="sub-text">Login with your details to continue</p>
        <label htmlFor="PatientEmail" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="Adminemail"
          className="input-text"
          placeholder="Email Address"
          value={AdminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          required
        />
        <label htmlFor="Adminpassword" className="form-label">
          Password:
        </label>
        <input
          type="password"
          name="Adminpassword"
          className="input-text"
          placeholder="Password"
          value={AdminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          required
        />
        {error && <label className="form-label" style={{ color: 'rgb(255, 62, 62)', textAlign: 'center' }}>{error}</label>}
        <input type="submit" value="Login" className="login-btn btn-primary btn" />
        <p className="sub-text" style={{ fontWeight: '280' }}>
          Don't have an account? <a href="Signup" className="hover-link1 non-style-link">Sign Up</a>
        </p>
      </form>
    </div>
    </center>
  )
}

export default Alogin