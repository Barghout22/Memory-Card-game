import "./App.css";
import CardComponent from "./components/card";
import React, { useState } from "react";
import uniqid from "uniqid";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [itemList, setItemList] = useState([
    { value: "1", id: uniqid() },
    { value: "2", id: uniqid() },
    { value: "3", id: uniqid() },
    { value: "4", id: uniqid() },
    { value: "5", id: uniqid() },
    { value: "6", id: uniqid() },
    { value: "7", id: uniqid() },
    { value: "8", id: uniqid() },
    { value: "9", id: uniqid() },
  ]);

  const updateScore = (value) => {
    if (value) {
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > highScore) setHighScore(highScore + 1);
    } else {
      setCurrentScore(0);
      setEndGame(true);
    }
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
      <div>Jojo's memory game adventure! </div>
      <div>Face Each one of the nine gods only once to pass through!</div>
      <div>Current Score:{currentScore}</div>
      <div>High Score: {highScore}</div>
      {/* <img src="./card_pictures/Anubis.png" alt="osiris" /> */}
      {!endGame && (
        <div className="cardContainer">
          {itemList.map((item) => (
            <CardComponent
              value={item.value}
              key={item.id}
              updateScore={updateScore}
              currentScore={currentScore}
            />
          ))}
        </div>
      )}
      {endGame && (
        <div>
          <div>Game Over!</div>
          <button onClick={restartGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default App;
