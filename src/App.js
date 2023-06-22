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

function App() {
  return (
    <div className="App">
      <Home />
      //{" "}
      {/* <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       {/* <Route path="/studentdashboard" element={<MainDashboard />}></Route>
    //       <Route
    //         path="/studentdashboard/learningobjectives"
    //         element={<LearningObjectives />}
    //       ></Route>
    //       <Route
    //         path="/studentdashboard/videotutorial"
    //         element={<VideoTutorial />}
    //       ></Route>
    //       <Route
    //         path="/studentdashboard/instructions"
    //         element={<Instructions />}
    //       ></Route>
    //       <Route
    //         path="/studentdashboard/makeproject"
    //         element={<MakeProject />}
    //       ></Route>
    //       <Route
    //         path="/studentdashboard/submitproject"
    //         element={<SubmitProject />}
    //       ></Route>
    //       <Route
    //         path="/studentdashboard/bonuschallenge"
    //         element={<BonusChallenge />}
    //       ></Route>
    //       <Route
    //         path="/studentdashboard/takethequiz"
    //         element={<TaketheQuiz />}
    //       ></Route>
    //       <Route
    //         path="/studentdashboard/projectsubmissions"
    //         element={<TeacherDashboard />}
    //       ></Route>
    //       <Route
    //         path="/studentprojectlibrary"
    //         element={<StudentProjectLibrary />}
    //       /> */}
      {/* //     </Routes> */}
      {/* //   </BrowserRouter> */}
    </div>
  );
}

export default App;
