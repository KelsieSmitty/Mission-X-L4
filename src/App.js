import "./App.css";
// import MainDashboard from "./pages/MainDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LearningObjectives from "./components/patrickComponents/layout/LearningObjectives";
// import VideoTutorial from "./components/patrickComponents/layout/VideoTutorial";
// import Instructions from "./components/patrickComponents/layout/Instructions";
// import MakeProject from "./components/patrickComponents/layout/MakeProject";
// import SubmitProject from "./components/patrickComponents/layout/SubmitProject";
// import BonusChallenge from "./components/patrickComponents/layout/BonusChallenge";
// import TaketheQuiz from "./components/patrickComponents/layout/TaketheQuiz";
// import TeacherDashboard from "./components/patrickComponents/layout/TeacherDashboard";
// import ProgressTracker from "./pages/ProgressTracker";
// import "./styling/Footer.css";
// // import "./styling/SPL.css";
// import Footer from "./components/Footer.jsx";
// import StudentProjectLibrary from "./pages/projectLibraryStudentProfile/StudentProjectLibrary";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
// import StudentProyectLibrary from "./pages/Project Library & Student Profile/StudentProjectLibrary";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          {/* <Route
            path="/studentprojectlibrary"
            element={<StudentProyectLibrary />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
