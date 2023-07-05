import { useState } from "react";
import { useNavigate } from "react-router";
import { Modal } from "@mui/material";
import "./logIn.css";
import ModalCloseBtn from "../../../images/src-assets/LoginSignup/esc.png";
import Teacher from "../../../images/src-assets/LoginSignup/teachers.png";
import Students from "../../../images/src-assets/LoginSignup/students.png";
import axios from "axios";

export const Login = ({ open, handleClose }) => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentConfirmPassword, setStudentConfirmPassword] = useState("");
  const [signupStudentResult, setSignupStudentResult] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherConfirmPassword, setTeacherConfirmPassword] = useState("");
  const [signupTeacherResult, setSignupTeacherResult] = useState("");
  const [loginStudentResult, setLoginStudentResult] = useState("");
  const [loginTeacherResult, setLoginTeacherResult] = useState("");
  const [studentFormType, setStudentFormType] = useState("signup");
  const [teacherFormType, setTeacherFormType] = useState("signup");

  const handleStudentEmailChange = (e) => {
    setStudentEmail(e.target.value);
  };

  const handleStudentPasswordChange = (e) => {
    setStudentPassword(e.target.value);
  };

  const handleStudentConfirmPasswordChange = (e) => {
    setStudentConfirmPassword(e.target.value);
  };

  const handleTeacherEmailChange = (e) => {
    setTeacherEmail(e.target.value);
  };

  const handleTeacherPasswordChange = (e) => {
    setTeacherPassword(e.target.value);
  };

  const handleTeacherConfirmPasswordChange = (e) => {
    setTeacherConfirmPassword(e.target.value);
  };

  const goTo = useNavigate();
  const handleStudentLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:/4000/loginStudent", {
        email: studentEmail,
        password: studentPassword,
      })
      .then((response) => {
        setLoginStudentResult(
          <span className="login-successful">Login Successful!</span>
        );
        console.log(response);
        goTo(`/StudentProjectDashboard`);
      })
      .catch((error) => {
        setLoginStudentResult(
          <span className="login-failed">Login Failed. Please Try Again.</span>
        );
        console.log(error);
      });
  };

  const handleStudentSignup = (e) => {
    e.preventDefault();

    if (studentPassword !== studentConfirmPassword) {
      setSignupStudentResult(
        <span className="passwords-failed">
          Passwords do not match, please try again.
        </span>
      );
      return;
    }
    axios
      .post("http://localhost4000/signupStudent", {
        name: studentName,
        email: studentEmail,
        password: studentPassword,
        confirmPassword: studentConfirmPassword,
      })
      .then((response) => {
        setSignupStudentResult(
          <span className="signup-successful">Sign Up Successful</span>
        );
        console.log(response);
      })
      .catch((error) => {
        setSignupStudentResult(
          <span className="signup-failed">
            Sign Up Failed. Please Try Again.
          </span>
        );
        console.log(error);
      });
  };

  const handleTeacherLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost4000/loginTeacher", {
        email: teacherEmail,
        password: teacherPassword,
      })
      .then((response) => {
        setLoginTeacherResult(
          <span className="login-successful">Login Successful!</span>
        );
        console.log(response);
        goTo(`submissionpagelink`);
      })
      .catch((error) => {
        setLoginTeacherResult(
          <span className="login-failed">Login Failed. Please Try Again</span>
        );
        console.log(error);
      });
  };
  const handleTeacherSignup = (e) => {
    setSignupTeacherResult(
      <span className="passwords-failed">
        {" "}
        Passwords do not match, please try again.
      </span>
    );
    return;
  };
  axios
    .post("http://localhost4000/signupTeacher", {
      name: teacherName,
      email: teacherEmail,
      password: teacherPassword,
      confirmPassword: teacherConfirmPassword,
    })
    .then((response) => {
      setSignupTeacherResult(
        <span className="signup-successful">Sign Up Successful</span>
      );
    })
    .catch((error) => {
      setSignupTeacherResult(
        <span className="signup-failed hidden">
          Sign Up Failed. Please Try Again.
        </span>
      );
      console.log(error);
    });

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="signup-modal">
        <img
          src={ModalCloseBtn}
          id="login_close_btn"
          alt="Close Pop Up Symbol"
          onClick={handleClose}
        />
        <div className="signup-modal-content">
          <div className="student-teacher-split">
            <div className="signup-students">
              <img
                src={Students}
                className="login-signup-imgs"
                alt="Students"
              />
              <h1 className="login-signup-header">Students</h1>

              <div className="login-signup-sub-headings">
                <button
                  className={`login-signup-btns ${
                    studentFormType === "signup"
                  }`}
                  onClick={() => setStudentFormType("login")}
                >
                  {" "}
                  LOG IN
                </button>
                <button
                  className={`login-signup-btns ${studentFormType === "login"}`}
                  onClick={() => setStudentFormType("signup")}
                >
                  SIGN UP
                </button>
              </div>
              {studentFormType === "login" ? (
                <div>
                  <form onSubmit={handleStudentLogin}>
                    <div className="login-signup-input-container">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={studentEmail}
                        onChange={handleStudentEmailChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={studentPassword}
                        onChange={handleStudentPasswordChange}
                        className="login-signup-input-field"
                      />
                      <p className="result_p">{loginStudentResult}</p>
                      <button type="submit" className="login-signup-button">
                        LOG IN
                      </button>
                    </div>{" "}
                  </form>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleStudentSignup}>
                    <div className="login-signup-input-container">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="login-signup-input-field"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={studentEmail}
                        onChange={handleStudentEmailChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={studentPassword}
                        onChange={handleStudentPasswordChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Confirm Password"
                        value={studentConfirmPassword}
                        onChange={handleStudentConfirmPasswordChange}
                        className="login-signup-input-field"
                      />
                      <p id="result_p">{signupStudentResult}</p>
                      <button type="submit" className="login-signup-button">
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="signup-students">
            <div className="signup-teachers">
              <img src={Teacher} className="login-signup-imgs" alt="Teacher" />
              <h1 className="login-signup-header">Teachers</h1>

              <div className="login-signup-sub-headings">
                <button
                  className={`login-signup-btns ${
                    teacherFormType === "signup"
                  }`}
                  onClick={() => setTeacherFormType("login")}
                >
                  LOG IN
                </button>
                <button
                  className={`login-signup-btns ${teacherFormType === "login"}`}
                  onClick={() => {
                    setTeacherFormType("signup");
                  }}
                >
                  SIGN UP
                </button>
              </div>
              {teacherFormType === "login" ? (
                <div>
                  <form onSubmit={handleTeacherLogin}>
                    <div className="login-signup-input-container">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={teacherEmail}
                        onChange={handleTeacherEmailChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={teacherPassword}
                        onChange={handleTeacherPasswordChange}
                        className="login-signup-input-field"
                      />
                      <p id="result_p">{loginTeacherResult}</p>
                      <button type="submit" className="login-signup-button">
                        LOG IN
                      </button>
                    </div>{" "}
                  </form>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleTeacherSignup}>
                    <div className="login-signup-input-container">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        className="login-signup-input-field"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={teacherEmail}
                        onChange={handleTeacherEmailChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={teacherPassword}
                        onChange={handleTeacherPasswordChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Confirm Password"
                        value={teacherConfirmPassword}
                        onChange={handleTeacherConfirmPasswordChange}
                        className="login-signup-input-field"
                      />
                      <p id="result_p">{signupTeacherResult}</p>
                      <button type="submit" className="login-signup-button">
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
