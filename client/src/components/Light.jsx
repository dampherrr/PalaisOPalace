import "../styles/Light.css";
import cloud1 from "../assets/media/pictures/cloud1.png";
import cloud2 from "../assets/media/pictures/cloud2.png";
import cloud3 from "../assets/media/pictures/cloud3.png";
import forest from "../assets/media/pictures/forest.png";

const Light = () => {
  return (
    <div className="scene">
      <div className="sun"></div>
      <img src={forest} className="forest" alt="Forest" />
      <img src={cloud1} className="cloud1" alt="Cloud 1" />
      <img src={cloud2} className="cloud2" alt="Cloud 2" />
      <img src={cloud3} className="cloud3" alt="Cloud 3" />
      <img src={cloud1} className="cloud4" alt="Cloud 4" />
      <img src={cloud2} className="cloud5" alt="Cloud 5" />
      <img src={cloud3} className="cloud6" alt="Cloud 6" />
    </div>
  );
};

export default Light;
