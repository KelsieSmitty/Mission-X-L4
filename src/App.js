import "./App.css";
import { HomeContent } from "./Components/KSComponents/HomeContent";
import NavBar from "./Components/KSComponents/NavBar";
import Footer from "./Components/KSComponents/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <HomeContent />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
