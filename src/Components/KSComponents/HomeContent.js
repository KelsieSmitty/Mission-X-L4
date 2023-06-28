import HomeHero from "../../images/src-assets/Home/hero.png";
import "./homeContent.css";
import { HomeLearnBtn, HomeSignBtn, HomeSignBtn2 } from "./HomeContentElements";
// import Animation from "../../images/src-assets/Home/animation.png";
// import Games from "../../images/src-assets/Home/games.png";
// import Chatbots from "../../images/src-assets/Home/chatbots.png";
// import AugReality from "../../images/src-assets/Home/augreality.png";
// import Laptop1 from "../../images/src-assets/Home/laptop1.png";
import Group1 from "../../images/src-assets/Home/Group 1.png";
import Group3 from "../../images/src-assets/Home/Group 3.png";
import Group4 from "../../images/src-assets/Home/Group 4.png";
import Group2 from "../../images/src-assets/Home/Group 2.png";
import HomeHelp from "./homeHelpDiv/HomeHelp.js";
import Classroom from "../../images/src-assets/Home/classroom.png";
import HomeLaptop from "./homeLaptop/HomeLaptop.js";

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
        <h1 id="homeBannerH1">
          Prepare young minds for a better <span id="homeFuture">future.</span>
        </h1>
        <h6 id="homeBannerH6">
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </h6>
        <div className="homeBannerBtns">
          <HomeLearnBtn to="/LearnMore">LEARN MORE</HomeLearnBtn>
          <HomeSignBtn to="/SignUp">SIGN UP</HomeSignBtn>
        </div>
        <p id="homeBannerP">
          *Basic subscription includes the first 15 projects free of charge.
        </p>
      </div>{" "}
      <HomeLaptop />
      {/* <div className="homeSection1">
        <div className="whatWeOffer">
          <h1 id="homeOfferH1">What we offer</h1>
          <p id="homeOfferP">
            The Creative Problem Solving programme is series of digital creation
            projects aimed to encourage self-motivation and student agency,
            designed by New Zealand’s leading IT industry experts and schools.
          </p>
          <h3 id="homeOfferH3">What will students create?</h3> */}
      {/* <div className="homeOfferImgs">
            <img src={Animation} alt="AnimationImg"></img>
            <img src={Games} alt="GameImg"></img>
            <img src={Chatbots} alt="ChatbotsImg"></img>
            <img src={AugReality} alt="AugRealityImg"></img>
          </div>
          <div className="homeLaptopImgs">
            <img src={Laptop1} alt="Laptop1Img"></img>
          </div> */}
      {/* </div> */}
      {/* </div> */}
      <h2 id="homeTeachingH2">
        Teaching kids programming and digital skills is MORE than just writing
        code.
      </h2>
      <div className="homeTeachingImgs">
        <img src={Group1} alt="Group1Img" />
        <img src={Group3} alt="Group3Img" />
        <img src={Group4} alt="Group4Img" />
        <img src={Group2} alt="Group2Img" />
      </div>
      <HomeHelp />
      <div className="homeStart"></div>
      <div className="homeWaiting">
        <img src={Classroom} alt="Classroom" id="homeWaitingImg" />
        <div className="homeWaitingText">
          <h1 id="homeWaitingH1">What are you waiting for?</h1>
          <h3 id="homeWaitingH3">Start teaching Digital Technologies today.</h3>
          <p id="homeWaitingP">
            If you need more information, we are happy to answer any questions
            you may have.
          </p>
          <div className="homeWaitingBtns">
            <button id="homeEnquireBtn">ENQUIRE NOW</button>
            <HomeSignBtn2 to="/SignUp">SIGN UP</HomeSignBtn2>
          </div>
        </div>
      </div>
    </div>
  );
};
