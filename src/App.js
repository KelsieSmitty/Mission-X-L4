import "./Styling/Footer.css";
import "./Styling/SPL.css";
import Footer from "./Components/Footer.jsx";
import StudentProyectLibrary from "./Pages/Project Library & Student Profile/StudentProjectLibrary";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <StudentProyectLibrary />
      <Footer />
    </div>
  );
}
export default App;
