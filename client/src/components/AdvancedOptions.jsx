import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Papa from "papaparse";

import "../styles/advancedOptions.css";

export default function AdvancedOptions() {
  const [search, setSearch] = useState("");
  const [option, selectOption] = useState("");
  const fetechGrotte = useLoaderData();

  const parse = () =>
    Papa.parse(fetechGrotte, {
      header: true,
      complete: (result) => result,
      error: (error) => console.info(error),
    });

  const { data } = parse();

  // filtre
  const filteredType = data.filter((item) =>
    item.Type.toLowerCase().includes(search.toLowerCase())
  );
  // const filteredPrice = data.filter((item) => item.prix.includes);
  // filtre
  console.info("depuis data", data);
  console.info("depuis result", filteredType);

  const validate = () => {
    if (!inputsentence || !troc) {
      alert("Veuillez remplir les champs obligatoire");
      return;
    }
  };

  const searchRequest = (event) => {
    setSearch(event.target.value);
  };
  console.info("depuis searc", search);
  return (
    <div className="select-container">
      <div className="input-selection">
        <select>
          <option value="Trou">Trou</option>
          <option value="Grotte fienté">Grotte fienté</option>
          <option value="Trou sans fenêtre">Trou sans fenêtre</option>
          <option value="Caverne Familial">Caverne Familial</option>
          <option value="GrotteMoute">GrotteMoute</option>
          <option value="Fosse Communes">Fosse Communes</option>
        </select>
        <select>
          <option value="fourchette-A">2 à 20 gourdins </option>
          <option value="fourchette-B">25 à 50 gourdins</option>
          <option value="fourchette-C">51 à 65 gourdins</option>
          <option value="fourchette-D">100 à 135 gourdins</option>
        </select>

        <input
          type="text"
          placeholder="TROC*"
          maxLength={10}
          onChange={searchRequest}
        />
      </div>
      <p className="devise">*Uniquement en 🐗 ou 🥪</p>

      <div className="container-options-button">
        <div className="option-button">
          <input type="checkbox" onClick={() => selectOptions("Trou")} />
          <label htmlFor="Trou"> TROU</label>
        </div>

        <button
          type="button"
          className="option-button"
          onClick={() => selectOptions("Trou sans fenêtre")}
        >
          Trou sans fenêtre
        </button>
        <button
          type="button"
          className="option-button"
          onClick={() => selectOptions(" Grotte Fienté")}
        >
          Grotte Fienté
        </button>
        <button
          type="button"
          className="option-button"
          onClick={() => selectOptions("   Grotte Moute")}
        >
          GrotteMoute
        </button>
        <button
          type="button"
          className="option-button"
          onClick={() => selectOption(" Caverne Familial")}
        >
          Caverne Familial
        </button>
        <button
          type="button"
          className="option-button"
          onClick={() => selectOption(" Fosse Commune")}
        >
          Fosse Commune
        </button>
      </div>
      <button type="button" className="validate" onClick={validate}>
        Valider
      </button>
    </div>
  );
}
