import NavBar from "../components/kSComponents/NavBar.js";
import Footer from "../components/componentsLuis/Footer.jsx";
import "../styling/SPV.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
  

export default function Test2SPV() {
    const [student, setStudent] = useState("");

    useEffect(() => {
      fetchStudent();
    }, []);

    const fetchStudent = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/students/7");
        const data = await response.json();
        setStudent(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
  return (
     
    <>
   
      <header className="navbar">
        <NavBar />
      </header>

      <div className="main-Container">
        <div className="profile-Pic-Container">
          <img id="Profile-Pic" src={student.profile_pic} alt="Student Profile Pic" />
          <div id="Profile-Buttons-Container">
            <button className="Profile-Button">EDIT PROFILE </button> <br></br>
            <button className="Profile-Button">CHANGE PHOTO</button>
          </div>
        </div>

        <div className="student-Info-Container">
          <h1>{student.name}</h1>

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
              <li>{student.school}</li>
              <li>Jasmina Salvador</li>
              <li>{student.course}</li>
              <li>{student.date_of_birth}</li>
              <li>{student.contact_number}</li>
              <li>{student.email} </li>
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
