import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import "./unicode.scss";

function Unicode({ type, unicode }) {
  const [clickedUnicode, setClickedUnicode] = useState();

  function copyClipboard(code) {
    setClickedUnicode(code);
    navigator.clipboard.writeText(code);
    setTimeout(function () {
      setClickedUnicode(0);
    }, 1500);
  }

  return (
    <div className="card__unicode">
      <button
        className={
          clickedUnicode === unicode
            ? `unicode__background unicode--${type} unicode--copied`
            : `unicode__background unicode--${type}`
        }
        onClick={() => copyClipboard(unicode)}
      >
        {unicode}
        <img src={require("../../../../../Asset/copy.svg").default} />
      </button>
    </div>
  );
}

export default Unicode;
