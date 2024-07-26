import "../styles/inscription.css";
import cloud1 from "../assets/media/pictures/cloud1.png";
import cloud2 from "../assets/media/pictures/cloud2.png";
import cloud3 from "../assets/media/pictures/cloud3.png";
import paysage from "../assets/media/pictures/grotte.webp";
import marcassin from "../assets/media/pictures/marcassin.png";
import chasseur from "../assets/media/pictures/chasseur.png";

export default function Inscription() {
  return (
    <div className="scene">
      <div className="sun"></div>
      <h2 className="title-inscription">Toi inscrire toi manger marcamouth</h2>
      <img src={paysage} alt="Paysage" className="paysage" />
      <img src={cloud1} alt="Cloud 1" className="cloud1" />
      <img src={cloud2} alt="Cloud 2" className="cloud2" />
      <img src={cloud3} alt="Cloud 3" className="cloud3" />
      <img src={cloud1} alt="Cloud 4" className="cloud4" />
      <img src={cloud2} alt="Cloud 5" className="cloud5" />
      <img src={cloud3} alt="Cloud 6" className="cloud6" />
      <img src={marcassin} alt="Marcassin" className="marcassin" />
      <div className="chasseur-container">
        <div className="tooltip">Viens ici KEBBAB!!</div>
        <img src={chasseur} alt="Chasseur" className="chasseur" />
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="nom">Nom:</label>
          <input type="text" id="nom" name="nom" required />

          <label htmlFor="prenom">Prénom:</label>
          <input type="text" id="prenom" name="prenom" required />

          <label htmlFor="email">Adresse mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
