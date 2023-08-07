import React, { useEffect, useState } from 'react'
import cards from '../data.js'
import GameOver from './GameOver.jsx'

const GamePage = ({ playerName, setShowGamePage }) => {
  const [deck, setDeck] = useState(cards)
  const [myCard, setMyCard] = useState()
  const [computerCard, setComputerCard] = useState()
  const [myResult, setMyResult] = useState(0)
  const [computerRusult, setComputerResult] = useState(0)

  console.log(deck);

  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  const shuffledDeck = shuffle(deck);

  const nextTurn = () => {
    const newDeck = [...shuffledDeck];
    const myCard = newDeck.pop()
    const computerCard = newDeck.pop()
    setMyCard(myCard)
    setComputerCard(computerCard)
    setDeck(newDeck)
    if (myCard.value < computerCard.value) {
      setMyResult(myResult + 1);
    } else {
      setComputerResult(computerRusult + 1);
    }
  }

  useEffect(() => {
    nextTurn()
  }, [])


  return (
    <div className='container'>
      <div className='div-computer'>
        <h1 className='tit-computer'>COMPUTER</h1>
      </div>

      <div className='computerCard'><p><img src={myCard?.src} alt="" /></p></div>
      <div className='playerCard'><p><img src={computerCard?.src} alt="" /></p></div>

      <div className='playerName-button'>
        <button className='button-next' onClick={nextTurn}>NEXT</button>
        <h1 className='playerName'>{playerName}</h1>
      </div>
      {<GameOver
        open={deck.length === 0}
        myResult={myResult}
        computerRusult={computerRusult}
        setShowGamePage={setShowGamePage}
        playerName={playerName}
      />}
    </div>
  )
}

export default GamePage;
