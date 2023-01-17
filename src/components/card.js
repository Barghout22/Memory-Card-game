import React, { useState } from "react";

function CardComponent(props) {
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  const adjustScore = (value) => {
    if (value) {
      setAlreadyClicked(true);
      props.updateScore(true);
    } else {
      setAlreadyClicked(false);
      props.updateScore(false);
    }
  };
  const handleClick = () => {
    alreadyClicked ? adjustScore(false) : adjustScore(true);
  };
  return (
    <div key={props.id} onClick={handleClick}>
      {props.value}
    </div>
  );
}

export default CardComponent;
