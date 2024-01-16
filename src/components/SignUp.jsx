import React, { useState } from 'react';

import './animations.css';
import './main.css';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function SignUp() {

  var [inputs,setInputs] = useState({
    "uid":'',
    "name":'',
    "age":'',
    "spec":'',
    "edu":'',
    "exp":'',
    "lang":'',
    "locat":'',
    "conslt":'',
    "type":'',
    "cert":'',
    "pic":'',
    "about":'',
    "phn":'',
    "email":'',
    "cpass":'',

    })

   const navigate = useNavigate();

  const InputHandler = (event) => {
    const {name,value} = event.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
  }

  const SaveData = () => {
    axios.post("http://localhost:5007/api/dnew", inputs) //axios.post("http://localhost:4007/dnew", inputs)
      .then((response) => {
        alert("Record Saved successfully");
        navigate('/login');
      })
      .catch(err => console.log(err));
  };
  

  return (
    <center>
    <div className="container" style={{ animation: 'transitionIn-X 0.5s' }} >
      
      
      <table border="0" className="table">
        <tbody>
        <tr>
            <td colSpan="2">
              <p className="header-text">Let's Get Started</p>
              <p className="sub-text">It's Okey, Now Create doctor's Account.</p>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label  className="form-label">NMC UID: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="number" name="uid" className="input-text" placeholder="ex:1757"  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.uid} />
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label  className="form-label">NAME: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="text" name="name" className="input-text" placeholder="DR."  onChange={InputHandler }  value={inputs.name}/>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label htmlFor="phn" className="form-label">AGE: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="number" name="age" className="input-text" placeholder=""  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.age} />
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label htmlFor="phn" className="form-label">SPECIALTIES: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="text" name="spec" className="input-text" placeholder=""  onChange={InputHandler } pattern="[0]{1}[0-9]{9}"  value={inputs.spec}/>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label  className="form-label">QUALIFICATION: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="teXT" name="edu" className="input-text" placeholder="MBBS,MD,..."  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.edu}/>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label className="form-label">EXPERIENCE: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="STRING" name="exp" className="input-text" placeholder="in years"  onChange={InputHandler }  value={inputs.exp}/>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label className="form-label">LANGUAGE: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="text" name="lang" className="input-text" placeholder="for communication"  onChange={InputHandler }  value={inputs.lang}/>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label className="form-label">LOCATION: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="url" name="locat" className="input-text" placeholder="google map link"  onChange={InputHandler }  value={inputs.locat}/>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label className="form-label">EXPERIENCE: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="text" name="conslt" className="input-text" placeholder="till now"  onChange={InputHandler }  value={inputs.conslt}/>
            </td>
          </tr>
          <tr>
<td className="label-td" colSpan="2">
  <label className="form-label">Consultation Type: </label>
</td>
</tr>
<tr>
<td className="label-td" colSpan="2">
  <select name="type" className="input-text" onChange={InputHandler} value={inputs.type}>
    <option value="online ">online consultation</option>
    <option value="inclinic">inclinic consultation</option>
    <option value="Both">Both</option>
  </select>
</td>
</tr>

<tr>
<td className="label-td" colSpan="2">
  <label  className="form-label">Upload Certificate: </label>
</td>
</tr>
<tr>
<td className="label-td" colSpan="2">
  <input type="file" name="cert" className="input-text" onChange={InputHandler} value={inputs.cert} />
</td>
</tr>

<tr>
<td className="label-td" colSpan="2">
  <label className="form-label">Profile Photo: </label>
</td>
</tr>
<tr>
<td className="label-td" colSpan="2">
  <input type="file" name="pic" className="input-text" onChange={InputHandler} value={inputs.pic}/>
</td>
</tr>
<tr>
<td className="label-td" colSpan="2">
  <label className="form-label">About You: </label>
</td>
</tr>
<tr>
<td className="label-td" colSpan="2">
  <textarea name="about" className="input-text" placeholder="Details about the doctor" onChange={InputHandler} value={inputs.about}></textarea>
</td>
</tr>
<tr>
            <td className="label-td" colSpan="2">
              <label className="form-label">Mobile Number: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="number" name="phn" className="input-text" placeholder="ex: 9712345678" value={inputs.phn} onChange={InputHandler } pattern="[0]{1}[0-9]{9}" />
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label className="form-label" >Email: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="email" name="email" className="input-text" placeholder="Email Address" value={inputs.email} onChange={InputHandler }  />
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label  className="form-label">Create New Password: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="password" name="npass" className="input-text" placeholder="New Password" />
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <label  className="form-label">Confirm Password: </label>
            </td>
          </tr>
          <tr>
            <td className="label-td" colSpan="2">
              <input type="password" name="cpass" className="input-text" placeholder="Confirm Password" value={inputs.cpass} onChange={InputHandler }  />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {/* $error variable replacement */}
              {Error && <p>{Error}</p>}
            </td>
          </tr>
          <tr>
            <td>
              <input type="reset" value="Reset" className="login-btn btn-primary btn" />
            </td>
            <td>
              <input type="submit" value="Sign Up" onClick={SaveData }  className="login-btn btn-primary btn" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <br />
              <label htmlFor="" className="sub-text" style={{ fontWeight: 280 }}>
                Already have an account?
                <a href="Login" className="hover-link1 non-style-link">
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
}

export default SignUp;