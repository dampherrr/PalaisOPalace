export default function AdvancedOptions() {
  return (
    <div className="select-container">
      <div className="input-selection">
        <input type="text" placeholder="Input sentence" />
        <input type="text" placeholder="TROC*" />
      </div>
      <div className="note">*Uniquement en 🐗 ou en 🥪</div>
      <div className="options">
        <button type="button" className="option">
          Trou
        </button>
        <button type="button" className="option">
          Trou sans fenêtre
        </button>
        <button type="button" className="option">
          Grotte Fienté
        </button>
        <button type="button" className="option">
          GrotteMoute
        </button>
        <button type="button" className="option">
          Caverne Familial
        </button>
        <button type="button" className="option">
          Fosse Commune
        </button>
      </div>
      <button type="button" className="validate">
        Valider
      </button>
    </div>
  );
}
