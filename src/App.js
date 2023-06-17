import './App.css';
import MainDashboard from './Pages/MainDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LearningObjectives from './Components/patrickComponents/layout/LearningObjectives';
import VideoTutorial from './Components/patrickComponents/layout/VideoTutorial';
import Instructions from './Components/patrickComponents/layout/Instructions';
import MakeProject from './Components/patrickComponents/layout/MakeProject';
import SubmitProject from './Components/patrickComponents/layout/SubmitProject';
import BonusChallenge from './Components/patrickComponents/layout/BonusChallenge';
import TaketheQuiz from './Components/patrickComponents/layout/TaketheQuiz';
import TeacherDashboard from './Components/patrickComponents/layout/TeacherDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard />}></Route>
          <Route
            path="/studentdashboard/learningobjectives"
            element={<LearningObjectives />}
          ></Route>
          <Route
            path="/studentdashboard/videotutorial"
            element={<VideoTutorial />}
          ></Route>
          <Route
            path="/studentdashboard/instructions"
            element={<Instructions />}
          ></Route>
          <Route
            path="/studentdashboard/makeproject"
            element={<MakeProject />}
          ></Route>
          <Route
            path="/studentdashboard/submitproject"
            element={<SubmitProject />}
          ></Route>
          <Route
            path="/studentdashboard/bonuschallenge"
            element={<BonusChallenge />}
          ></Route>
          <Route
            path="/studentdashboard/takethequiz"
            element={<TaketheQuiz />}
          ></Route>
          <Route
            path="/studentdashboard/projectsubmissions"
            element={<TeacherDashboard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
