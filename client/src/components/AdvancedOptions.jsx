import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Papa from "papaparse";

import "../styles/advancedOptions.css";

export default function AdvancedOptions({ onOptionsChange }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [superficie, setSuperficie] = useState("");
  const [prix, setPrix] = useState("");

  const fetechGrotte = useLoaderData();

  const parse = () =>
    Papa.parse(fetechGrotte, {
      header: true,
      complete: (result) => result,
      error: (error) => console.info(error),
    });

  const { data } = parse();

  const handleTypeChange = (event) => {
    setType(event.target.value);
    onOptionsChange({ type: event.target.value, superficie, prix });
  };

  const handleSuperficieChange = (event) => {
    setSuperficie(event.target.value);
    onOptionsChange({ type, superficie: event.target.value, prix });
  };

  const handlePrixChange = (event) => {
    setPrix(event.target.value);
    onOptionsChange({ type, superficie, prix: event.target.value });
  };

  // filtre
  const filteredType = data.filter((item) =>
    item.Type.toLowerCase().includes(search.toLowerCase())
  );

  console.info("depuis data", data);
  console.info("depuis filterType", filteredType);

  const searchRequest = (event) => {
    setSearch(event.target.value);
  };

  console.info("depuis searc", search);
  return (
    <div className="select-container-option">
      <div className="input-selection">
        <select onChange={handleTypeChange}>
          <option value="">Select Type</option>
          {Array.from(new Set(data.map((item) => item.Type))).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select onChange={handleSuperficieChange}>
          <option value="">Select Superficie</option>
          {Array.from(new Set(data.map((item) => item.superficie))).map(
            (superficie) => (
              <option key={superficie} value={superficie}>
                {superficie}
              </option>
            )
          )}
        </select>
        <input
          type="text"
          placeholder="TROC*"
          maxLength={10}
          onChange={handlePrixChange}
        />
      </div>
      <p className="devise">*Uniquement en 🐗 ou 🥪</p>
    </div>
  );
}
