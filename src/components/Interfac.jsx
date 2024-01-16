import React from 'react';
import './index.css';


function Interfac() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        />
      </head>

      <body>
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>

        <div className="sidebar">
          <header>Menu</header>
          <a href="#" className="active">
            <i className="fas fa-qrcode"></i>
            <span>Dashboard</span>
          </a>
          <a href="doctorview">
            <i className="fas fa-link"></i>
            <span>DOCTORSLIST</span>
          </a>
          <a href="pview">
            <i className="fas fa-stream"></i>
            <span>PATIENT LIST</span>
          </a>
          <a href="#">
            <i className="fas fa-calendar"></i>
            <span>APPOINTMENTS</span>
          </a>
          <a href="#">
            <i className="far fa-question-circle"></i>
            <span>About</span>
          </a>
          <a href="#">
            <i className="fas fa-sliders-h"></i>
            <span>Services</span>
          </a>
          <a href="#">
            <i className="far fa-envelope"></i>
            <span>Contact</span>
          </a>
        </div>

        <div className="full-height">
       
      </div>
      </body>
    </>
);
};

export default Interfac;