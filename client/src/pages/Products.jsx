import { useLoaderData, Link } from "react-router-dom";
import Papa from "papaparse";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "../styles/products.css";

export default function Products() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: false,
    slides: {
      perView: 3,
      spacing: 200,
    },
  });

  const grotteMaison = useLoaderData();
  const parse = () =>
    Papa.parse(grotteMaison, {
      header: true,
      complete: (result) => result,
      error: (error) => console.info(error),
    });

  const { data } = parse();

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {data.map((merguez) => (
          <div className="keen-slider__slide number-slide">
            <Link
              className="slider"
              style={{
                backgroundImage: `url(${merguez.image})`,
                backgroundSize: "cover",
                height: "15rem",
                width: "100%",
                zIndex: 10,
              }}
              to={""}
            >
              <div className="fontSlider">{merguez.nom}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
