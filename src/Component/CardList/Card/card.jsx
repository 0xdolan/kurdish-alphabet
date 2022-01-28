import React, { useState } from "react";
import CardFront from "./CardFront/cardFront";
import CardBack from "./CardBack/cardBack";
import "./card.scss";

function Card(props) {
  const [flipStatus, setFlipStatus] = useState(false);

  function handleFlip() {
    setFlipStatus(!flipStatus);
  }

  return (
    <div className="card">
      <div
        className={flipStatus ? "card__inner card__inner--flip" : "card__inner"}
      >
        <CardFront
          type={props.type}
          character={props.character}
          example={props.example}
          unicode={props.unicode}
          arDigit={props.arDigit}
          arDigitUnicode={props.arDigitUnicode}
          handleFlip={handleFlip}
        />
        <CardBack
          type={props.type}
          latinSmall={props.latinSmall}
          latinCapital={props.latinCapital}
          latinCharacter={props.latinCharacter}
          laDigit={props.laDigit}
          laDigitUnicode={props.laDigitUnicode}
          recommended={props.recommended}
          handleFlip={handleFlip}
        />
      </div>
    </div>
  );
}

export default Card;
