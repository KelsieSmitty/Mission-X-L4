import "../styling/SPL.css";
import NavBar from "../components/kSComponents/NavBar.js";
import ScrollUp from "../components/componentsLuis/ScrollUp";
import Footer from "../components/componentsLuis/Footer";
import FilteringLibraryProjects from "../components/componentsLuis/FilteringLibraryProjects";
import CheckboxFilteringProjects from "../components/componentsLuis/CheckboxFilteringProjects";
import TestBackendLibraryProjects from "../components/componentsLuis/TestBackendLibraryProjects";

export default function StudentProyectLibrary() {
  return (
    <>
      <header className="navbar">
        <NavBar />
      </header>

      <div className="main-SPL-container">
        {/* <section className="myCheckbox">
           
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
          </section> */}

        <section className="projects-container">
          <h1>PROJECTS</h1>

          <p>
            Welcome to the library project.You can use the filters on the right
            to help you search for specific projects
          </p>

          {/* <div className="myCheckbox">
            <h1 style={{ fontSize: "16px" }}>SUBSCRIPTION</h1>
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
            <h1 style={{ fontSize: "16px" }}>ACTIVITY TYPE</h1>
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
            <h1 style={{ fontSize: "16px" }}> YEAR LEVEL</h1>
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
            <h1 style={{ fontSize: "16px" }}> SUBJECT MATTER</h1>
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
          </div> */}

          {/* <FilteringLibraryProjects /> */}
          <TestBackendLibraryProjects />
          <ScrollUp />
        </section>
      </div>
      <Footer />
    </>
  );
}
