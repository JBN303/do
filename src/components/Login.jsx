import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5007/api/login', {
        email: userEmail,
        cpass: userPassword,
      });

      navigate('/myapp');// If login is successful, you might perform actions here
      console.log(response.data); // Placeholder for successful login handling
      
      
    } catch (err) {
      // If there's an error with login (e.g., invalid credentials)
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
        <table className="login-table">
          <tbody>
            <tr>
              <td colSpan="2">
                <p className="header-text">Welcome Back!</p>
                <p className="sub-text">Login with your details to continue</p>
              </td>
            </tr>
            <tr>
              <td className="label-td">
                <label htmlFor="useremail" className="form-label">
                  Email:
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  name="useremail"
                  className="input-text"
                  placeholder="Email Address"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="label-td">
                <label htmlFor="userpassword" className="form-label">
                  Password:
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  name="userpassword"
                  className="input-text"
                  placeholder="Password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                {error && (
                  <label className="form-label" style={{ color: 'rgb(255, 62, 62)', textAlign: 'center' }}>
                    {error}
                  </label>
                )}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Login" className="login-btn btn-primary btn" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p className="sub-text" style={{ fontWeight: '280' }}>
                  Don't have an account? <a href="Signnav" className="hover-link1 non-style-link">Sign Up</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </center>
);
}

export default Login;