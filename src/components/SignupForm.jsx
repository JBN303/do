import React from 'react';
import './animations.css';
import './main.css';
import './signup.css';

function SignupForm() {
  return (
    <div className="container" style={{ animation: 'transitionIn-X 0.5s' }}>
      <center>
        <table border="0" style={{ width: '69%' }}>
          <tbody>
            <tr>
              <td colSpan="2">
                <p className="header-text">Let's Get Started</p>
                <p className="sub-text">It's Okey, Now Create User Account.</p>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="newemail" className="form-label">Email: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="email" name="newemail" className="input-text" placeholder="Email Address" required />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="tele" className="form-label">Mobile Number: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="tel" name="tele" className="input-text" placeholder="ex: 0712345678" pattern="[0]{1}[0-9]{9}" />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="newpassword" className="form-label">Create New Password: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="password" name="newpassword" className="input-text" placeholder="New Password" required />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="password" className="form-label">Conform Password: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="password" name="cpassword" className="input-text" placeholder="Conform Password" required />
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
                <input type="reset" value="Reset" className="login-btn btn-primary-soft btn" />
              </td>
              <td>
                <input type="submit" value="Sign Up" className="login-btn btn-primary btn" />
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
      </center>
    </div>
  );
}

export default SignupForm;
