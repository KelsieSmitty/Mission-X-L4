import "./App.css";
// import MainDashboard from "./pages/MainDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import StudentProjectLibrary from "./pages/projectLibraryStudentProfile/StudentProjectLibrary";

import Home from "./pages/Home";
// import StudentProyectLibrary from "./pages/Project Library & Student Profile/StudentProjectLibrary";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
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
