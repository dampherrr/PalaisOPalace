import { Link } from "react-router-dom";
import logo from "../assets/media/icons/Logo.svg";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="Navbar">
          <ul className="Navbuttons">
            <Link to={"/"}>
              <img
                className="LogoPoP"
                src={logo}
                alt="Logo - Back to home page"
              />
            </Link>
            <li>
              <Link to={"/search"}>Louer/Acheter</Link>
            </li>
          </ul>
          <ul className="Log">
            <li>
              <Link to={"/connexion"}>Connexion</Link>
            </li>
            <li>
              <Link to={"/inscription"}>Inscription</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
