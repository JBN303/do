import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const PatientView = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patient data from the backend when the component mounts
    axios.get('http://localhost:5007/api/patients') // Adjust the endpoint accordingly
      .then(response => setPatients(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Registered Patients</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Username</th>
            <th>Password</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient._id}>
              <td>{patient.Name}</td>
              <td>{patient.Address}</td>
              <td>{patient.Phone}</td>
              <td>{patient.Email}</td>
              <td>{patient.Age}</td>
              <td>{patient.Gender}</td>
              <td>{patient.Username}</td>
              <td>{patient.Password}</td>
              {/* Add more columns as needed */}
              <td><Link to={`/edit-patients/${patients._id}`}>Edit</Link></td>
            <td> <Link to={`/delete-patients/${patients._id}`}>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientView;
