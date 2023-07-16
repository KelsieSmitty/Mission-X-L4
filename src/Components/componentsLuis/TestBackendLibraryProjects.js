import React, { useEffect, useState } from "react";
import "../../styling/SPL.css";


export default function TestBackendLibraryProjects() {
  const fetchProject = () => {
    fetch(`http://localhost:4000/api/project-library/`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("pictureData", JSON.stringify(data)); // Store the fetched data in local storage
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Check if the data exists in local storage
  const storedData = localStorage.getItem("pictureData");
  const pictureData = storedData ? JSON.parse(storedData) : [];

  useEffect(() => {
    if (!storedData) {
      fetchProject();
    }
  }, []);

  console.log("pictureData:", pictureData);

  const [displayedProjects, setDisplayedProjects] = useState(pictureData);
  const [valueSelected, setValueSelected] = useState("");
  const [quantityDisplayed, setQuantityDisplayed] = useState(pictureData.length);

  const handleSelection = (value) => {
    setValueSelected(value);
    if (value === "Beginner") {
      const beginnerProjects = pictureData.filter(
        (project) => project.level === "Beginner"
      );
      setDisplayedProjects(beginnerProjects);
    } else if (value === "Intermediate") {
      const intermediateProjects = pictureData.filter(
        (project) => project.level === "Intermediate"
      );
      setDisplayedProjects(intermediateProjects);
    } else if (value === "Advanced") {
      const advancedProjects = pictureData.filter(
        (project) => project.level === "Advanced"
      );
      setDisplayedProjects(advancedProjects);
    } else {
      setDisplayedProjects(valueSelected);
    }
  };
  const handleQuantity = (total) => {
    setQuantityDisplayed(total);
  };

  const filteredQuantity = displayedProjects.slice(0, quantityDisplayed);

  return (
    <>
      <div className="button-container">
        <div className="buttons left">
          <button
            id="beginner"
            onClick={() => handleSelection("Beginner")}
            style={{
              backgroundColor:
                valueSelected === "Beginner" ? "rgb(15, 150, 241)" : "",
              color: valueSelected === "Beginner" ? "white" : "",
            }}
          >
            BEGINNER
          </button>

          <button
            id="intermediate"
            onClick={() => handleSelection("Intermediate")}
            style={{
              backgroundColor:
                valueSelected === "Intermediate" ? "rgb(15, 150, 241)" : "",
              color: valueSelected === "Intermediate" ? "white" : "",
            }}
          >
            INTERMEDIATE
          </button>

          <button
            id="advanced"
            onClick={() => handleSelection("Advanced")}
            style={{
              backgroundColor:
                valueSelected === "Advanced" ? "rgb(15, 150, 241)" : "",
              color: valueSelected === "Advanced" ? "white" : "",
            }}
          >
            ADVANCED
          </button>
        </div>
        <div className="buttons right">
          <h3>SHOW</h3>
          <button
            id="five"
            onClick={() => handleQuantity(5)}
            style={{
              backgroundColor:
                quantityDisplayed === 5 ? "rgb(15, 150, 241)" : "",
              color: quantityDisplayed === 5 ? "white" : "",
            }}
          >
            5
          </button>
          <button
            id="ten"
            onClick={() => handleQuantity(10)}
            style={{
              backgroundColor:
                quantityDisplayed === 10 ? "rgb(15, 150, 241)" : "",
              color: quantityDisplayed === 10 ? "white" : "",
            }}
          >
            10
          </button>
          <button
            id="all"
            onClick={() => handleQuantity(pictureData.length)}
            style={{
              backgroundColor:
                quantityDisplayed === pictureData.length
                  ? "rgb(15, 150, 241)"
                  : "",
              color: quantityDisplayed === pictureData.length ? "white" : "",
            }}
          >
            All
          </button>
        </div>
      </div>

      <div className="image-container">
        {filteredQuantity.map((project) => (
          <div className="image" key={project.project_id}>
            <img src={project.project_pic} alt="Project" />
            <h2>{project.name}</h2>
            <p>
              {project.course} | {project.activity_type}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
