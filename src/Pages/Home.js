import { HomeContent } from "../components/kSComponents/HomeContent";
import NavBar from "../components/kSComponents/NavBar";
import Footer from "../components/kSComponents/Footer";
import { BrowserRouter as Router } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <NavBar />
      <HomeContent />
      {/* <Footer /> */}
    </Router>
  );
}
