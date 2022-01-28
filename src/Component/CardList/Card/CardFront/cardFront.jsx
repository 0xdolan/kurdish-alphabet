import React, { useState } from "react";
import UniCode from "./UniCode/unicode";
import "./cardFront.scss";

function CardFront({
  type,
  unicode,
  character,
  example,
  handleFlip,
  arDigit,
  arDigitUnicode,
}) {
  const CardFlip = () => {
    switch (type) {
      case "Consonant":
        return (
          <span
            className="card__flip--consonant card__flip"
            onClick={handleFlip}
          >
            Tap to flip ↩︎
          </span>
        );
      case "Vowel":
        return (
          <span className="card__flip--vowel card__flip" onClick={handleFlip}>
            Tap to flip ↩︎
          </span>
        );
      case "Digit":
        return (
          <span className="card__flip--digit card__flip" onClick={handleFlip}>
            Tap to flip ↩︎
          </span>
        );
      default:
        return null;
    }
  };

  const CardContent = () => {
    switch (type) {
      case "Digit":
        return (
          <React.Fragment>
            <p className="card__character">{arDigit}</p>
            <UniCode unicode={arDigitUnicode} type={type}></UniCode>
            <p className="card__expamle"></p>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <p
              className={
                character == "Not Available"
                  ? "card__character--notAvalible"
                  : "card__character"
              }
            >
              {character}
            </p>
            <UniCode unicode={unicode} type={type}></UniCode>
            <p className="card__expamle">{example}</p>
          </React.Fragment>
        );
    }
  };

  return (
    <div className="card__content card__content--front">
      <CardFlip />
      <CardContent />
    </div>
  );
}

export default CardFront;
