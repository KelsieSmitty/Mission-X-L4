import React from 'react'

export default function StudentProyectLibrary() {
  return (
    <>
      <div className="navbar">
        <h1>Here goes the Nav Bar</h1>
      </div>
      <div className="projects-container">
        <h1>PROJECTS</h1>
        <p>
          Welcome to the library project.You can use the filters on the right to
          help you search for specific projects
        </p>
        <div className='buttons-on-left'>
          <button>BEGINNER</button>
          <button>INTERMEDIATE</button>
          <button>ADVANCED</button>
        </div>
        <div className='buttons-on-right'>
        <h3>SHOW</h3>
        <button>5</button>
        <button>10</button>
        <button>All</button>
        </div>
      </div>

      <div className="myCheckbox">
        <h1>SUBSCRIPTION</h1>
        <hr />
        <input type="checkbox" />
        <label> Free</label>
        <br />
        <input type="checkbox" />
        <label> Premium</label>
        <br />
        <h1>ACTIVITY TYPE</h1>
        <hr />
        <input type="checkbox" />
        <label> Animation</label>
        <br />
        <input type="checkbox" />
        <label> Game</label>
        <br />
        <input type="checkbox" />
        <label> Chatbot</label>
        <br />
        <input type="checkbox" />
        <label> Augmented Reality</label>
        <br />
        <h1> YEAR LEVEL</h1>
        <hr />
        <input type="checkbox" />
        <label> 1 - 4</label>
        <br />
        <input type="checkbox" />
        <label> 5 - 6</label>
        <br />
        <input type="checkbox" />
        <label> 7 - 8 </label>
        <br />
        <input type="checkbox" />
        <label> 9 - 13</label>
        <br />
        <h1> SUBJECT MATTER</h1>
        <hr />
        <input type="checkbox" />
        <label> Computer Science</label>
        <br />
        <input type="checkbox" />
        <label> Maths</label>
        <br />
        <input type="checkbox" />
        <label> Science</label>
        <br />
        <input type="checkbox" />
        <label> Language</label>
        <br />
        <input type="checkbox" />
        <label> Art</label>
        <br />
        <input type="checkbox" />
        <label> Music</label>
        <br />
      </div>
    </>
  );
}
