import HomeHero from "../../images/src-assets/Home/hero.png";
import "./homeContent.css";
import { HomeLearnBtn, HomeSignBtn } from "./HomeContentElements";
import Animation from "../../images/src-assets/Home/animation.png";
import Games from "../../images/src-assets/Home/games.png";
import Chatbots from "../../images/src-assets/Home/chatbots.png";
import AugReality from "../../images/src-assets/Home/augreality.png";
import Laptop1 from "../../images/src-assets/Home/laptop1.png";
import Group1 from "../../images/src-assets/Home/Group 1.png";
import Group3 from "../../images/src-assets/Home/Group 3.png";
import Group4 from "../../images/src-assets/Home/Group 4.png";
import Group2 from "../../images/src-assets/Home/Group 2.png";

export const HomeContent = () => {
  return (
    <div className="home">
      <div
        className="homeBanner"
        style={{
          backgroundImage: `url(${HomeHero})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="homeBannerH1">
          Prepare young minds for a better <span id="homeFuture">future.</span>
        </h1>
        <h6 className="homeBannerH6">
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </h6>
        <div className="homeBannerBtns">
          <HomeLearnBtn to="/LearnMore">LEARN MORE</HomeLearnBtn>
          <HomeSignBtn to="/SignUp">SIGN UP</HomeSignBtn>
        </div>
        <p className="homeBannerP">
          *Basic subscription includes the first 15 projects free of charge.
        </p>
      </div>
      <div className="homeSection1">
        <div className="whatWeOffer">
          <h1 className="homeOfferH1">What we offer</h1>
          <p className="homeOfferP">
            The Creative Problem Solving programme is series of digital creation
            projects aimed to encourage self-motivation and student agency,
            designed by New Zealand’s leading IT industry experts and schools.
          </p>
          <h3 className="homeOfferH3">What will students create?</h3>
          <div className="homeOfferImgs">
            <img src={Animation} alt="AnimationImg"></img>
            <img src={Games} alt="GameImg"></img>
            <img src={Chatbots} alt="ChatbotsImg"></img>
            <img src={AugReality} alt="AugRealityImg"></img>
          </div>
          <div className="homeLaptopImgs">
            <img src={Laptop1} alt="Laptop1Img"></img>
          </div>
        </div>
      </div>
      <h2 className="homeTeachingH2">
        Teaching kids programming and digital skills is MORE than just writing
        code.
      </h2>
      <div className="homeTeachingImgs">
        <img src={Group1} alt="Group1Img"></img>
        <img src={Group3} alt="Group3Img"></img>
        <img src={Group4} alt="Group4Img"></img>
        <img src={Group2} alt="Group2Img"></img>
      </div>
      <h1 className="homeHelpH1">
        How our programme helps teachers and schools
      </h1>
      <div className="homeBtns">
        <btn className="homeBtnLink">LEARNING PATHWAYS</btn>
        <btn className="homeBtnLink">DIGITAL TECHNOLOGIES</btn>
        <btn className="homeBtnLink">KEY COMPETENCIES</btn>
        <btn className="homeBtnLink">IR4.0</btn>
      </div>
      <div className="homeHelpSection">
        <h3 className="homeHelpH3">Enhance key competencies</h3>
        <p className="homeHelpP">
          The programme enhances capabilities of students in the 5 Key
          Competencies identified in the New Zealand Curriculum:
        </p>
      </div>
    </div>
  );
};
