import HomeHero from "../../images/src-assets/Home/hero.png";
import "./homeContent.css";
import Group1 from "../../images/src-assets/Home/Group 1.png";
import Group3 from "../../images/src-assets/Home/Group 3.png";
import Group4 from "../../images/src-assets/Home/Group 4.png";
import Group2 from "../../images/src-assets/Home/Group 2.png";
import HomeHelp from "./homeHelpDiv/HomeHelp.js";
import Classroom from "../../images/src-assets/Home/classroom.png";
import HomeLaptop from "./homeLaptop/HomeLaptop.js";
import { Login } from "./logIn/Login";
import { useState } from "react";

export const HomeContent = () => {
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenLogin = (isSignUp) => {
    setOpenLogin(isSignUp === "signup");
  };

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
        <div className="home-banner-btns">
          <button id="home-learn-btn">LEARN MORE</button>
          <button id="home_sign_btn" onClick={() => handleOpenLogin("signup")}>
            SIGN UP
          </button>
          <Login open={openLogin} handleClose={() => setOpenLogin(!false)} />
        </div>
        <p id="homeBannerP">
          *Basic subscription includes the first 15 projects free of charge.
        </p>
      </div>{" "}
      <HomeLaptop />
      <h2 id="homeTeachingH2">
        Teaching kids programming and digital skills is MORE than just writing
        code.
      </h2>
      <div className="homeTeachingImgs">
        <img src={Group1} alt="Group1Img" />
        <img src={Group3} alt="Group3Img" />
        <img src={Group4} alt="Group4Img" />
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
            <button id="home_enquire_btn">ENQUIRE NOW</button>
            <button
              id="home_sign_btn2"
              onClick={() => handleOpenLogin("signup")}
            >
              SIGN UP
            </button>
            <Login open={openLogin} handleClose={() => setOpenLogin(!false)} />
          </div>
        </div>
      </div>
    </div>
  );
};
