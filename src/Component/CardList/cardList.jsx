import React, { useState } from "react";
import "./cardList.scss";
import { finalResults } from "./utils.js";
import Card from "./Card/card";

function CardList() {
  const [characterList, setCharacterList] = useState(finalResults);

  return (
    <div className="wrapper">
      <div className="main ">
        {characterList.map((item) => (
          <Card
            type={item.type}
            unicode={item.unicode}
            example={item.example}
            character={item.character}
            latinSmall={item.latinSmall}
            latinCapital={item.latinCapital}
            arDigit={item.arDigit}
            arDigitUnicode={item.arDigitUnicode}
            laDigit={item.laDigit}
            laDigitUnicode={item.laDigitUnicode}
            recommended={item.recommended}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
