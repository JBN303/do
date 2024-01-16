// DoctorList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './doctorslist.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  const toggleStatus = async (id) => {
    try {
      await axios.put(`http://localhost:5007/api/doctors/toggle/${id}`);
      // Refresh the doctor list after toggling the status
      const response = await axios.get('http://localhost:5007/api/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5007/api/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
    <h2>Registered Doctors</h2>
    <table border="1">
      <thead>
        <tr>
          <th>status</th>
          <th>NMC UID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Specialty</th>
          <th>Qualification</th>
          
          <th>Language</th>
          <th>Location</th>
          <th>Experience</th>
          <th>Consultation Type</th>
          <th>cirtificate</th>
          <th>Profile photo</th>
          <th>About </th>
          <th>Mobile numer</th>
          <th>Email</th>
          <th>password</th>
          <th></th>
          
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {doctors.map(doctor => (
          <tr key={doctor._id}>
            <td>
              {doctor.status === 'active' ? 'Active' : 'Inactive'}
              </td>
            <td>{doctor.uid}</td>
            <td>{doctor.name}</td>
            <td>{doctor.age}</td>
            <td>{doctor.spec}</td>
            <td>{doctor.edu}</td>
            <td>{doctor.lang}</td>
            <td>{doctor.locat}</td>
            <td>{doctor.conslt}</td>
            <td>{doctor.type}</td>
            <td>{doctor.cert}</td>
            <td>{doctor.pic}</td>
            <td>{doctor.about}</td>
            <td>{doctor.phn}</td>
            <td>{doctor.email}</td>
            <td>{doctor.cpass}</td>
            
              <td>
              <button className="login-btn btn-primary btn" onClick={() => toggleStatus(doctor._id)}>change Status</button>
            </td>
            
            
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default DoctorList;
