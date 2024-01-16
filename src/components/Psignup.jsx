//Psignup
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Psignup = () => {
  const [inputs, setInputs] = useState({
    "Name": '',
    "Address": '',
    "Phone": '',
    "Email": '',
    "Age": '',
    "Gender": '',
    "Username": '',
    "Password": '',
  });

  const navigate = useNavigate();

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const SaveData = () => {
    axios.post("http://localhost:5007/api/pnew", inputs)
      .then((response) => {
        alert("Record Saved");
        navigate('/Patient login');
        // Optionally, you can navigate the user after successful data submission
        // navigate('/patientview')
      })
      .catch((err) => console.log(err));
  };

  return (
    <center>
      <div className="container" style={{ animation: 'transitionIn-X 0.5s' }}>
        <table border="0" className="table">
          <tbody>
            <tr>
              <td colSpan="2">
                <p className="header-text">Let's Get Started</p>
                <p className="sub-text">It's Okey, Now Create User's Account.</p>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Name" className="form-label">Name: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="Name" className="input-text" placeholder="Enter your name" onChange={InputHandler} value={inputs.Name} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Address" className="form-label">Address: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="Address" className="input-text" placeholder="Enter your address" onChange={InputHandler} value={inputs.Address} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Phone" className="form-label">Phone: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="Phone" className="input-text" placeholder="Enter your Number" onChange={InputHandler} value={inputs.Phone} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Email" className="form-label">Email: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="Email" className="input-text" placeholder="Enter your Email" onChange={InputHandler} value={inputs.Email} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Age" className="form-label">Age: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="Age" className="input-text" placeholder="Enter your Age" onChange={InputHandler} value={inputs.Age} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Gender" className="form-label">Gender: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="Gender" className="input-text" placeholder="Enter your Gender" onChange={InputHandler} value={inputs.Gender} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Username" className="form-label">Username: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="Username" className="input-text" placeholder="Enter your Username" onChange={InputHandler} value={inputs.Username} />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Password" className="form-label">Password: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="Password" className="input-text" placeholder="Enter your Password" onChange={InputHandler} value={inputs.Password} />
              </td>
            </tr>

            <tr>
              <td>
                <input type="reset" value="Reset" className="login-btn btn-primary-soft btn" />
              </td>
              <td>
                <input type="submit" value="Sign Up" onClick={SaveData} className="login-btn btn-primary btn" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <br />
                <label htmlFor="" className="sub-text" style={{ fontWeight: 280 }}>
                  Already have an account?
                  <a href="Plogin" className="hover-link1 non-style-link">
                    Login
                  </a>
                </label>
                <br /><br /><br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  );
};

export default Psignup;