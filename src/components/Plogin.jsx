import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Plogin = () => {
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPassword, setPatientPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!patientEmail || !patientPassword) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5007/api/plogin', {
        email: patientEmail,
        password: patientPassword,
      });

      navigate('/patient-dashboard');
      console.log(response.data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };
  return (
    <center>
      <div className="container">
        
        <form onSubmit={handleSubmit}>
          <p className="header-text">Welcome Back..!</p>
          <p className="sub-text">Login with your details to continue</p>
          <label htmlFor="PatientEmail" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="Patientemail"
            className="input-text"
            placeholder="Email Address"
            value={patientEmail}
            onChange={(e) => setPatientEmail(e.target.value)}
            required
          />
          <label htmlFor="Patientpassword" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="Patientpassword"
            className="input-text"
            placeholder="Password"
            value={patientPassword}
            onChange={(e) => setPatientPassword(e.target.value)}
            required
          />
          {error && (
            <label className="form-label" style={{ color: 'rgb(255, 62, 62)', textAlign: 'center' }}>
              {error}
            </label>
          )}
          <input type="submit" value="Login" className="login-btn btn-primary btn" />
          <p className="sub-text" style={{ fontWeight: '280' }}>
            Don't have an account? <a href="patient login" className="hover-link1 non-style-link">Sign Up</a>
          </p>
        </form>
        
      </div>
    </center>
  );
};

export default Plogin;