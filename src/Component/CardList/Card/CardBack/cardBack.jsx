import React from "react";
import "./cardBack.scss";

function CardBack({
  type,
  latinSmall,
  latinCapital,
  handleFlip,
  laDigit,
  recommended,
}) {
  const CharacterType = () => {
    if (type == "Digit") {
      return <p className="card__character--digit">{laDigit}</p>;
    } else if (latinSmall == "Not Available") {
      return <p className="card__character--notAvalible">{latinSmall}</p>;
    } else {
      return (
        <React.Fragment>
          <p className="card__character">
            {latinSmall}
            <br></br>
            {latinCapital}
          </p>
          {recommended ? (
            <span className="recommended">Recommended Character *</span>
          ) : (
            ""
          )}
        </React.Fragment>
      );
    }
  };

  return (
    <div
      className={`card__content card__content--back card--${type}`}
      onClick={handleFlip}
    >
      <CharacterType />
    </div>
  );
}

export default CardBack;
