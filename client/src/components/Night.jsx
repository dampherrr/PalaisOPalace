import React, { useEffect } from "react";
import "../styles/night.css";
import cloud1 from "../assets/media/pictures/cloud1.png";
import cloud2 from "../assets/media/pictures/cloud2.png";
import cloud3 from "../assets/media/pictures/cloud3.png";
import forest from "../assets/media/pictures/forest.png";
import fireTorch from "../assets/media/pictures/fire-torch-png.webp";

const Night = () => {
  useEffect(() => {
    const createStars = () => {
      const count = 500;
      const scene = document.querySelector(".night-scene");
      if (scene) {
        for (let i = 0; i < count; i++) {
          const star = document.createElement("i");
          const x = Math.floor(Math.random() * window.innerWidth);
          const y = Math.floor(Math.random() * window.innerHeight);
          const duration = Math.random() * 10;
          const size = Math.random() * 2;

          star.style.left = `${x}px`;
          star.style.top = `${y}px`;
          star.style.width = `${1 + size}px`;
          star.style.height = `${1 + size}px`;

          star.style.animationDuration = `${5 + duration}s`;
          star.style.animationDelay = `${1 + duration}s`;

          scene.appendChild(star);
        }
      }
    };

    createStars();
  }, []);

  return (
    <div className="night-scene">
      <div className="moon"></div>
      <img src={forest} className="forest" alt="Forest" />
      <img src={cloud1} className="cloud1" alt="Cloud 1" />
      <img src={cloud2} className="cloud2" alt="Cloud 2" />
      <img src={cloud3} className="cloud3" alt="Cloud 3" />
      <img src={cloud1} className="cloud4" alt="Cloud 4" />
      <img src={cloud2} className="cloud5" alt="Cloud 5" />
      <img src={cloud3} className="cloud6" alt="Cloud 6" />
      <div className="torch-container">
        <img src={fireTorch} className="torch" alt="Torch" />
        <p className="tooltip-text">Ça va faire tout noir !!</p>
        <div className="bubbles">
          <div className="bubble bubble1">TG!!</div>
          <div className="bubble bubble2">TG!!</div>
          <div className="bubble bubble3">Ta gueule!!</div>
          <div className="bubble bubble4">TG!!</div>
          <div className="bubble bubble5">Taaaa GUEULE!!</div>
          <div className="bubble bubble6">TG!!</div>
          <div className="bubble bubble7">Ta gueuleuuuuhhh!!</div>
        </div>
      </div>

      <div className="login-container">
        <form className="login-form">
          <h2>Connexion</h2>
          <label htmlFor="email">Adresse mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default Night;
