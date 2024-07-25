import { useState } from "react";

import "../styles/advancedOptions.css";

export default function AdvancedOptions() {
  const [inputsentence, setInputSentence] = useState("");
  const [troc, setTroc] = useState("");

  const validate = () => {
    if (!inputsentence || !troc) {
      alert("Veuillez remplir les champs obligatoire");
      return;
    }
  };

  return (
    <div className="select-container">
      <div className="input-selection">
        <input type="text" placeholder="Input sentence" maxLength={30} />
        <input type="text" placeholder="TROC*" maxLength={10} />
      </div>
      <p className="devise">*Uniquement en 🐗 ou 🥪</p>
      <div className="container-options-button">
        <button type="button" className="option-button">
          Trou
        </button>
        <button type="button" className="option-button">
          Trou sans fenêtre
        </button>
        <button type="button" className="option-button">
          Grotte Fienté
        </button>
        <button type="button" className="option-button">
          GrotteMoute
        </button>
        <button type="button" className="option-button">
          Caverne Familial
        </button>
        <button type="button" className="option-button">
          Fosse Commune
        </button>
      </div>
      <button type="button" className="validate" onClick={validate}>
        Valider
      </button>
    </div>
  );
}
