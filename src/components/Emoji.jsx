import React from "react";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.symbol}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.desc}</dd>
    </div>
  );
}

export default Emoji;
