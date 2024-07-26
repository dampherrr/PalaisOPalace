import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Papa from "papaparse";

import "../styles/advancedOptions.css";

export default function AdvancedOptions({ onOptionsChange }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [superficie, setSuperficie] = useState("");
  const [prix, setPrix] = useState("");
  const navigate = useNavigate();
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
    onOptionsChange({ type: event.target.value });
  };

  const handleSuperficieChange = (event) => {
    setSuperficie(event.target.value);
    onOptionsChange({ superficie: event.target.value });
  };

  const handlePrixChange = (event) => {
    setPrix(event.target.value);
    onOptionsChange({ prix: event.target.value });
  };

  const handleImageClick = (grotteId) => {
    navigate(`/grotte/${nom}`);
  };

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

      <div className="images-container">
        {data
          .filter((item) => {
            if (type && item.Type !== type) return false;
            if (superficie && item.superficie !== superficie) return false;
            if (prix && item.prix !== prix) return false;
            return true;
          })
          .map((grotte) => (
            <div key={grotte.id} onClick={() => handleImageClick(grotte.nom)}>
              <img src={grotte.image} alt={grotte.nom} />
              <p>{grotte.nom}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
