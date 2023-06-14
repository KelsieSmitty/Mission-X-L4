import './App.css';
import MainDashboard from './Pages/MainDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LearningObjectives from './Components/patrickComponents/layout/LearningObjectives';
import VideoTutorial from './Components/patrickComponents/layout/VideoTutorial';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
