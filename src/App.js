import StudentProjectLibrary from "./pages/StudentProjectLibrary";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentProfileViewer from "./pages/StudentProfileViewer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-project" element={<StudentProjectLibrary />} />
          <Route path="/student-profile-viewer" element={<StudentProfileViewer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
