import React from "react";
import PropTypes from "prop-types";

const Card = ({
  //for image
  withImg = false,
  imgSrc = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  imgAlt = "Shoes",

  //for card
  cardStyle = "w-96",
  cardTitle,
  cardTitleStyle,
  children,
  cardBodyStyle,

  //for button
  withBtn = false,
  btnStyle = "btn btn-primary",
  btnText = "Submit",
}) => {
  return (
    <div
      className={`card bg-base-200 shadow-sm ${cardStyle}`}
    >
      {withImg && (
        <figure>
          <img src={imgSrc} alt={imgAlt} />
        </figure>
      )}
      <div
        className={`card-body ${cardBodyStyle}`}
      >
        {cardTitle && (
          <h2
            className={`card-title ${cardTitleStyle}`}
          >
            {cardTitle}
          </h2>
        )}
        {children ? (
          children
        ) : (
          <p>
            If you can see this something went
            wrong.
          </p>
        )}
        {withBtn && (
          <div className="card-actions justify-end">
            <button className={btnStyle}>
              {btnText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  withImg: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  cardStyle: PropTypes.string,
  cardTitle: PropTypes.string,
  cardTitleStyle: PropTypes.string,
  cardBodyStyle: PropTypes.string,
  children: PropTypes.object,
  withBtn: PropTypes.bool,
  btnStyle: PropTypes.string,
  btnText: PropTypes.string,
};

export default Card;
