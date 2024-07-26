import { Link } from "react-router-dom";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "../styles/products.css";

function Carrousel({ data }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: false,
    slides: {
      perView: 3,
      spacing: 200,
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {data.map((item) => (
          <div key={item.id} className="keen-slider__slide number-slide">
            <Link
              className="slider"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                height: "15rem",
                width: "100%",
                zIndex: 10,
              }}
              to={""}
            >
              <div className="fontSlider">{item.nom}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Carrousel;
