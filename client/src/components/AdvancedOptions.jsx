import { useState } from "react";

import "../styles/advancedOptions.css";

export default function AdvancedOptions() {
  const [search, setSearch] = useState("");

  const [troc, setTroc] = useState("");

  const validate = () => {
    if (!inputsentence || !troc) {
      alert("Veuillez remplir les champs obligatoire");
      return;
    }
  };

  const searchRequest = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="select-container">
      <div className="input-selection">
        <input
          type="text"
          placeholder="Input sentence"
          maxLength={30}
          onChange={searchRequest}
        />
        <input
          type="text"
          placeholder="TROC*"
          maxLength={10}
          onChange={searchRequest}
        />
      </div>
      <p className="devise">*Uniquement en 🐗 ou 🥪</p>
      <div className="container-options-button">
        <button
          type="button"
          className="option-button"
          onClick={() => selectOptions("Trou")}
        >
          Trou
        </button>
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
