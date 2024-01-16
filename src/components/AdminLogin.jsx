import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = () => {
    if (username === 'jibin johny' && password === 'jbn303') {
      // Redirect to admin dashboard on successful login
      navigate('/admindashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <center>
    <div className="container">
    <h2 className="header-text">Admin Login</h2>
    <form>
      <div>
        <label className="form-label">Username:</label>
        <input
          className="input-text"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Password:</label>
        <input
          className="input-text"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="btn login-btn"
        type="button"
        onClick={handleLogin}
      >
        Login
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  </div>
  </center>
  );
}

export default AdminLogin;
