import Navbar from "./components/Navbar";

import { useLoaderData } from "react-router-dom";
import React from "react";
import Papa from "papaparse";
import "./App.css";

function App() {
  const grotteMaison = useLoaderData();

  const parse = () =>
    Papa.parse(grotteMaison, {
      header: true,
      complete: (result) => result,
      error: (error) => console.info(error),
    });

  const { data } = parse();

  console.info(data);

  return (
    <>
      <Navbar />

      <h1>coucou</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vitae
        iste corporis vero ut exercitationem dolorem voluptatem rerum voluptates
        repudiandae, corrupti sequi asperiores nisi voluptatibus earum fugit
        nobis eos nesciunt!
      </p>
    </>
  );
}

export default App;
