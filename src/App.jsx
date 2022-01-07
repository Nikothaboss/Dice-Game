import { useState } from "react";

function App() {
  const [currentPlayer, setCurrenPlayer] = useState(null)
  const [currentRoll, setCurrentRoll] = useState("?")
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Velger en random spiller til å begynne gamet
  const startGame = () => {
    const startingPlayer = Math.floor(getRandomNumber(1, 3))
    if(startingPlayer === 1){
      setCurrenPlayer(true)
    }else if(startingPlayer === 2){
      setCurrenPlayer(false)
    }
  }
  
  // Ruller terningen og oppdaterer poengsummen
  const rollDice = () => {
    const randomNumber = Math.floor(getRandomNumber(1, 7))
    const randomDeducter = Math.floor(getRandomNumber(1, 10))

    // Displayer hvilket tall som ble rullet 
    setCurrentRoll(randomNumber)

    // Setter en delay på oppdateringen av Poengsummen på 1000ms/1sek + resetter currentRoll state til "?"
    setTimeout(()=>{
      if(randomNumber === 6){
        const confirm = window.confirm("You rolled 6, press to go again")
        if(confirm){
          currentPlayer === true ? setNum(num + randomNumber) : setNum2(num2 + randomNumber)
        }
      }else if(randomNumber === 1){
        const confirm = window.confirm(`You rolled 1, you lose ${randomDeducter} points`);
        if(confirm){
          currentPlayer === true ? setNum(num - randomDeducter) : setNum2(num2 - randomDeducter)
          setCurrenPlayer(!currentPlayer)
        }
      }else{
          currentPlayer ? setNum(num + randomNumber) : setNum2(num2 + randomNumber)
          setCurrenPlayer(!currentPlayer)
      }

      setCurrentRoll("?")
    }, 1000)
    
    
  }

  // Resetter spillet
  const reset = () => {
    setNum(0)
    setNum2(0)
    setCurrenPlayer(null)
    setCurrentRoll("?")
  }



  return (
    <div className="App">
      <button onClick={startGame}>Start Game</button>
      <button onClick={rollDice}>Roll</button>
      <button onClick={reset}>Reset</button>
      <h1>Current Player: {currentPlayer === null ? "Player ?" : currentPlayer ? "Player 1" : "Player 2"}</h1>
      <h1>Rolled: {currentRoll}</h1>
      <h1>Player 1 score: {num}</h1>
      <h1>Player 2 score: {num2}</h1>
    </div>
  );
}

export default App;
