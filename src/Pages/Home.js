<<<<<<< HEAD
import { HomeContent } from '../Components/KSComponents/HomeContent';
import NavBar from '../Components/KSComponents/NavBar';
import Footer from '../Components/KSComponents/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeContent />
      {/* <Footer /> */}
      <Footer></Footer>
    </div>
=======
import { HomeContent } from "../components/kSComponents/HomeContent";
import NavBar from "../components/kSComponents/NavBar";
import Footer from "../components/componentsLuis/Footer";


export default function Home() {
  return (
    <>
      <NavBar />
      <HomeContent />
      <Footer />
    </>
>>>>>>> LuisR
  );
}
