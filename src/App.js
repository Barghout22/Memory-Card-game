import "./App.css";
import Anubis from "./cardPictures/Anubis.png";
import Atum from "./cardPictures/Atum.png";
import Bastet from "./cardPictures/Bastet.png";
import Geb from "./cardPictures/Geb.png";
import Horus from "./cardPictures/Horus.png";
import Khnum from "./cardPictures/Khnum.png";
import Osiris from "./cardPictures/Osiris.png";
import Sethan from "./cardPictures/Sethan.png";
import Thoth from "./cardPictures/Thoth.png";

import CardComponent from "./components/card";
import React, { useState } from "react";
import uniqid from "uniqid";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [itemList, setItemList] = useState([
    { value: Anubis, name: "Anubis", id: uniqid() },
    { value: Atum, name: "Atum", id: uniqid() },
    { value: Bastet, name: "Bastet", id: uniqid() },
    { value: Geb, name: "Geb", id: uniqid() },
    { value: Horus, name: "Horus", id: uniqid() },
    { value: Khnum, name: "Khnum", id: uniqid() },
    { value: Osiris, name: "Osiris", id: uniqid() },
    { value: Sethan, name: "Sethan", id: uniqid() },
    { value: Thoth, name: "Thoth", id: uniqid() },
  ]);
  const [gameResult, setGameResult] = useState("");
  const [yourScore, setYourScore] = useState(0);

  const updateScore = (value) => {
    if (value) {
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > highScore) setHighScore(highScore + 1);
      if (currentScore + 1 === 9) {
        setGameResult("You Won!");
        setYourScore(currentScore);
        setCurrentScore(0);
        setEndGame(true);
      }
    } else {
      setGameResult("Game Over!");
      setYourScore(currentScore);
      setCurrentScore(0);
      setEndGame(true);
    }
    setYourScore(currentScore);
    moveCardsAround();
  };

  const restartGame = () => {
    setEndGame(false);
  };

  const moveCardsAround = () => {
    let tempArray1 = itemList;
    let tempArray2 = [];
    while (tempArray1.length > 0) {
      tempArray2.push(
        ...tempArray1.splice(Math.floor(Math.random() * tempArray1.length), 1)
      );
    }
    setItemList(tempArray2);
  };

  return (
    <div className="App">
      <div className="Title">Jojo's memory game adventure! </div>
      <div className="Title">
        Face Each one of the nine gods only once to pass through!
      </div>
      {!endGame && (
        <div>
          <div className="scores">Current Score:{currentScore}</div>
          <div className="scores">High Score: {highScore}</div>
        </div>
      )}
      {/* <img src="./card_pictures/Anubis.png" alt="osiris" /> */}
      {!endGame && (
        <div className="cardContainer">
          {itemList.map((item) => (
            <CardComponent
              value={item.value}
              key={item.id}
              name={item.name}
              updateScore={updateScore}
              currentScore={currentScore}
            />
          ))}
        </div>
      )}
      {endGame && (
        <div>
          <div className="scores">{gameResult}</div>
          <div className="scores">
            Your Score:{gameResult === "You Won!" ? 9 : yourScore}
          </div>
          <button className="newGameBtn" onClick={restartGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
