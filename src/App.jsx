import { useState } from "react";

// Lag en funksjon som retunerer et tall mellom 1-6



function App() {
  const [currentPlayer, setCurrenPlayer] = useState(null)
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const rollDice = () => {
    const randomNumber = Math.floor(getRandomNumber(1, 7))
    const randomDeducter = Math.floor(getRandomNumber(1, 10))
    currentPlayer === "Player 1" ? setNum(num + randomNumber) : setNum2(num2 + randomNumber)
    
    
    if(randomNumber === 6){
      const confirm = window.confirm("You rolled 6, press to go again")
      if(confirm){
        currentPlayer === "Player 1" ? setNum(num + randomNumber) : setNum2(num2 + randomNumber)
      }
    }else if(randomNumber === 1){
      const confirm = window.confirm(`You rolled 1, you lose ${randomDeducter}`);
      if(confirm){
        currentPlayer === "Player 1" ? setNum(num - randomDeducter) : setNum2(num2 - randomDeducter)
      }
    }
    console.log(randomNumber)
  }

  const startGame = () => {
    const startingPlayer = Math.floor(getRandomNumber(1, 3))
    if(startingPlayer === 1){
      setCurrenPlayer("Player 1")
    }else if(startingPlayer === 2){
      setCurrenPlayer("Player 2")
    }
  }



  return (
    <div className="App">
      <button onClick={startGame}>Start Game</button>
      <button onClick={rollDice}>Roll</button>
      <h1>Current Player: {currentPlayer}</h1>
      <h1>Player 1 score: {num}</h1>
      <h1>Player 2 score: {num2}</h1>
    </div>
  );
}

export default App;
