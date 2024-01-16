import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaUserInjured, FaChartLine } from 'react-icons/fa';
import './patient.css';

function Dashboard() {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="menu">
        <div className="menu-container">
          <div className="profile-container">
            <p className="profile-title">Admin Name</p>
            <p className="profile-subtitle">Admin Role</p>
            <button className="logout-btn">Logout</button>
          </div>

          <ul className="menu-items1">
            <li>
              <Link to="/dashboard" className="menu-button">
                <FaChartLine /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="menu-button menu-active">
                <FaUserMd /> Doctors
              </Link>
            </li>
            <li>
              <Link to="/patients" className="menu-button">
                <FaUserInjured /> Patients
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="dash-body">
        <h1>Welcome to Admin Dashboard</h1>

        {/* Add Routes for Dashboard, Doctors, and Patients views */}
        {/* Use React Router for navigation */}

        {/* Placeholder Content */}
        <div className="placeholder-chart">
          {/* Use chart.js for interactive charts */}
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
