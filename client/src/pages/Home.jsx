import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Papa from "papaparse";

import Carrousel from "../components/Carrousel";
import "../styles/home.css";
import "../styles/navbar.css";

export default function Home() {
  const grotteMaison = useLoaderData();
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const parseData = () =>
      Papa.parse(grotteMaison, {
        header: true,
        complete: (result) => setCarouselData(result.data),
        error: (error) => console.info(error),
      });

    parseData();
  }, [grotteMaison]);

  return (
    <>
      {/* <div className="bg-image"></div> */}
      <div className="elementCaroussel">
        <Carrousel data={carouselData} />
      </div>
    </>
  );
}
