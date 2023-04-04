import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authentication";
import Styles from "./Profile.module.css";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = (value) => {
    auth.logout();
    navigate("/");
    localStorage.clear();
  };

  return (
    <div>
      <div class="main">
        <h2>PROFILE</h2>
        <Card className={Styles.profile}>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{auth.user}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>lohithhj07@gmail.com</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>Karnataka, India</td>
              </tr>
              <tr>
                <td>Hobbies</td>
                <td>:</td>
                <td>Diving, Reading Book</td>
              </tr>
              <tr>
                <td>Job</td>
                <td>:</td>
                <td>Frontend Developer</td>
              </tr>
              <tr>
                <td>Skill</td>
                <td>:</td>
                <td> HTML, CSS, Javascript</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}

export default Profile;
