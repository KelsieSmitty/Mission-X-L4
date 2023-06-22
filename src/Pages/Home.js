import { HomeContent } from "../Components/kSComponents/HomeContent";
import NavBar from "../Components/kSComponents/NavBar";
import Footer from "../Components/kSComponents/Footer";
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
