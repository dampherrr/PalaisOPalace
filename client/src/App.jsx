import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import Papa from "papaparse";

import Light from "./components/Light";
import Night from "./components/Night";
import Navbar from "./components/Navbar";

import "./App.css";



export default function App() {
  const grotteMaison = useLoaderData();

  const parse = () =>
    Papa.parse(grotteMaison, {
      header: true,
      complete: (result) => result,
      error: (error) => console.info(error),
    });

  const { data } = parse();

  console.info(data);

  const [currentScene, setCurrentScene] = useState("light");

  const handleSceneChange = (event) => {
    setCurrentScene(event.target.value);
  };

  return (
    <>
      <Navbar />

      <h1>coucou</h1>
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
    </>

  );
}

 
