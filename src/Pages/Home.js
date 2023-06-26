import { HomeContent } from "../components/kSComponents/HomeContent";
import NavBar from "../components/kSComponents/NavBar";
import HomeFooter from "../components/kSComponents/HomeFooter";
// import { BrowserRouter as Router } from "react-router-dom";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeContent />
      <HomeFooter />
    </>
  );
}
