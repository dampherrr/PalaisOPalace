import logo from "../assets/Images/Logo.svg";
import "../styles/navbar.css";
import AdvancedOptions from "./advancedOptions";

export default function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <ul className="Navbuttons">
          <img src={logo} alt="Logo - Back to home page" className="LogoPoP" />
          <li>Louer</li>
          <li>Acheter</li>
          <li>Estimer</li>
        </ul>
        <ul className="Log">
          <li>Connexion</li>
          <li>Inscription</li>
        </ul>
      </div>
      <AdvancedOptions />
    </nav>
  );
}
