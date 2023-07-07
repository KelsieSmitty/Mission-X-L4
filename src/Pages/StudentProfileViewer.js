import NavBar from "../components/kSComponents/NavBar.js";
import Footer from "../components/componentsLuis/Footer";
import "../styling/SPV.css";
import { Link } from "react-router-dom";
import JavierFuego from "../images/public-images/students/JavierFuego.png"

export default function StudentProfileViewer() {
  return (
    <>
      <header className="navbar">
        <NavBar />
      </header>

      <div className="main-Container">
        <div className="profile-Pic-Container">
          <img id="Profile-Pic" src={JavierFuego} alt="Student Profile Pic" />
          <div id="Profile-Buttons-Container">
            <button className="Profile-Button">EDIT PROFILE </button> <br></br>
            <button className="Profile-Button">CHANGE PHOTO</button>
          </div>
        </div>

        <div className="student-Info-Container">
          <h1>Javier Fuego</h1>

          <div className="Displayed-info">
            <ul className="static-info">
              <li>School</li>
              <li>Teacher</li>
              <li>Course</li>
              <li>Date of Birth</li>
              <li>Contact Number</li>
              <li>Email Address</li>
            </ul>

            <ul className="server-info">
              <li>Homai School</li>
              <li>Jasmina Salvador</li>
              <li>Intermediate</li>
              <li>29th Jan 2011 </li>
              <li>027 458 3655</li>
              <li>j.onfire@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div id="button">
          <Link to="/student-project">
            <button id="back-To-Projects"> BACK TO PROJECTS</button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
