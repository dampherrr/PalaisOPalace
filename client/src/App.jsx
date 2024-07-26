import React, { useState } from "react";
import Light from "./components/Light";
import Night from "./components/Night";
import "./App.css";

function App() {
  const [currentScene, setCurrentScene] = useState("light");

  const handleSceneChange = (event) => {
    setCurrentScene(event.target.value);
  };

  return (
    <div
      className={`app-body ${
        currentScene === "light" ? "light-body" : "night-body"
      }`}
    >
      <select
        className="select-container"
        onChange={handleSceneChange}
        value={currentScene}
      >
        <option value="light">Light</option>
        <option value="night">Night</option>
      </select>

      <div className={currentScene === "light" ? "light-scene" : "night-scene"}>
        {currentScene === "light" && <Light />}
        {currentScene === "night" && <Night />}
      </div>

      <div className="container-body">
        <h1>Palais Ô Palace</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          vitae iste corporis vero ut exercitationem dolorem voluptatem rerum
          voluptates repudiandae, corrupti sequi asperiores nisi voluptatibus
          earum fugit nobis eos nesciunt!
        </p>
      </div>
    </div>
  );
}

export default App;
