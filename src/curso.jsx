import React from "react";
import PropTypes from "prop-types";

const Curso = ({ image, title, price, profesor }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">{`Prof: ${profesor}`}</div>
      <div className="s-main-center">
        <a
          className="button--ghost-alert button--tiny"
          href="http://google.com"
        >
          {`$ ${price} USD`}
        </a>
      </div>
    </div>
  </article>
);

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
};

Curso.defaultProps={
  title:"No se encontro título",
  image:"https://img2.rtve.es/i/?w=1600&i=1437728934781.jpg",
  price:"--",
  profesor:""
}

export default Curso;
