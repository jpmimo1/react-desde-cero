import React from "react";
import "./styles/styles.scss";
import Curso from "./curso";

const cursos = [
  {
    title: "React desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    price: 40,
    profesor: "Beto Quiroga",
  },
  {
    title: "Drupal desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
    price: 30,
    profesor: "Beto Quiroga",
  },
  {
    title: "Go desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    price: 50,
    profesor: "Alexys Lozada",
  },
  {
    title: "HTML desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/original/312172bf-ddba-409b-9aa3-6bf4c758805e.jpg",
    price: 10,
    profesor: "Alvaro Felipe",
  },
];

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            src="https://images2.alphacoders.com/106/1063352.jpg"
            alt="banner"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p>Subtítulo del banner</p>
            <a href="http://google.com" className="button">
              Botón del banner
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {
        cursos.map(({ title, image, price, profesor }) => (
        <Curso title={title} image={image} price={price} profesor={profesor} />
        ))
      }
    </div>
  </>
);

export default App;
