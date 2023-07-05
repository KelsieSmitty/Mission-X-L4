import "../styling/SPL.css";
import NavBar from "../kSComponents/NavBar.js";
import ScrollUp from "../componentsLuis/ScrollUp.js";
import Footer from "../componentsLuis/Footer.jsx";
import FilteringLibraryProjects from "../componentsLuis/FilteringLibraryProjects";

export default function StudentProyectLibrary() {
  return (
    <>
      <header className="navbar">
        <NavBar />
      </header>

      <div className="main-SPL-container">
        <section className="myCheckbox">
          <h1>SUBSCRIPTION</h1>
          <hr />
          <div>
            <input type="checkbox" />
            <label> Free</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Premium</label>
          </div>

          <br />
          <h1>ACTIVITY TYPE</h1>
          <hr />
          <div>
            <input type="checkbox" />
            <label> Animation</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Game</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Chatbot</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Augmented Reality</label>
          </div>
          <br />
          <h1> YEAR LEVEL</h1>
          <hr />
          <div>
            <input type="checkbox" />
            <label> 1 - 4</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> 5 - 6</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> 7 - 8 </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> 9 - 13</label>
          </div>
          <br />
          <h1> SUBJECT MATTER</h1>
          <hr />
          <div>
            <input type="checkbox" />
            <label> Computer Science</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Maths</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Science</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Language</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Art</label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Music</label>
          </div>
          <br />
        </section>

        <section className="projects-container">
          <h1>PROJECTS</h1>
          <p>
            Welcome to the library project.You can use the filters on the right
            to help you search for specific projects
          </p>
              <FilteringLibraryProjects/>
          <ScrollUp />
        </section>
      </div>
      <Footer />
    </>
  );
}
