// EditDoctor.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditDoctor = ({ match }) => {
  const [doctor, setDoctor] = useState({
    uid: '',
    name: '',
    age: '',
    spec: '',
    edu: '',
    exp: '',
    lang: '',
    locat: '',
    conslt: '',
    type: '',
    cert: '',
    pic: '',
    about: '',
    phn: '',
    email: '',
    cpass: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:5007/api/doctors/${match.params.id}`)
      .then(response => setDoctor(response.data))
      .catch(error => console.error(error));
  }, [match.params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5007/api/doctors/${match.params.id}`, doctor)
      .then(response => {
        console.log('Doctor updated successfully:', response.data);
        // No need for history.push
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Edit Doctor Information</h2>
      <form>
        {/* Render input fields based on your data structure */}
        {/* Example: */}
        <label>Name: </label>
        <input type="text" name="name" value={doctor.name} onChange={handleInputChange} />

        {/* Add other fields as needed */}

        <button type="button" onClick={handleUpdate}>Update Doctor</button>
      </form>
      {/* Use Link for navigation */}
      <Link to="/doctor-list">Back to Doctor List</Link>
    </div>
  );
};

export default EditDoctor;

