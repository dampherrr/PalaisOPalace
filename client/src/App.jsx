import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import Papa from "papaparse";

import Light from "./components/Light";
import Night from "./components/Night";
import Navbar from "./components/Navbar";
import Carrousel from "./components/Carrousel";
import AdvancedOptions from "./components/advancedOptions";

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

  const [currentScene, setCurrentScene] = useState("light");
  const [selectedOptions, setSelectedOptions] = useState({
    type: "",
    superficie: "",
    prix: "",
  });

  const handleSceneChange = (event) => {
    setCurrentScene(event.target.value);
  };

  const handleOptionsChange = (options) => {
    setSelectedOptions(options);
  };

  const filteredData = data.filter((item) => {
    return (
      (!selectedOptions.type || item.Type === selectedOptions.type) &&
      (!selectedOptions.superficie ||
        item.superficie === selectedOptions.superficie) &&
      (!selectedOptions.prix || item.prix === selectedOptions.prix)
    );
  });

  return (
    <>
      <Navbar />
      <AdvancedOptions onOptionsChange={handleOptionsChange} />
      <div className="images-container">
        {filteredData.map((item) => (
          <img key={item.nom} src={item.image} alt={item.nom} />
        ))}
      </div>

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

        <div
          className={currentScene === "light" ? "light-scene" : "night-scene"}
        >
          {currentScene === "light" && <Light />}
          {currentScene === "night" && <Night />}
        </div>

        <Carrousel />
      </div>
    </>
  );
}
