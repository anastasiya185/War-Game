import React, { useEffect, useState } from 'react';
import cards from '../data.js';
import GameOver from './GameOver.jsx';

const shuffle = (array) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

export default function GamePage({ playerName, showLeaderboard, restartGame }) {
  const [deck, setDeck] = useState([]);
  const [myCard, setMyCard] = useState(null);
  const [computerCard, setComputerCard] = useState(null);
  const [myResult, setMyResult] = useState(0);
  const [computerResult, setComputerResult] = useState(0);
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [roundMessage, setRoundMessage] = useState('Click Next Round to draw cards');

  useEffect(() => {
    setDeck(shuffle(cards));
  }, []);

  const nextTurn = () => {
    if (deck.length < 2) {
      setGameOver(true);
      return;
    }

    const newDeck = [...deck];
    const playerCard = newDeck.pop();
    const botCard = newDeck.pop();

    setMyCard(playerCard);
    setComputerCard(botCard);
    setDeck(newDeck);
    setRound((prev) => prev + 1);

    if (playerCard.value > botCard.value) {
      setMyResult((prev) => prev + 1);
      setRoundMessage(`${playerName} wins this round`);
    } else if (playerCard.value < botCard.value) {
      setComputerResult((prev) => prev + 1);
      setRoundMessage('Computer wins this round');
    } else {
      setRoundMessage('Draw');
    }

    if (newDeck.length < 2) {
      setGameOver(true);
    }
  };

  return (
    <main className="page gamePage">
      <section className="gameHeader">
        <div>
          <p className="smallLabel">Round {round}</p>
          <h1>War Card Battle</h1>
        </div>

        <div className="scoreBoard">
          <div>
            <span>{playerName}</span>
            <strong>{myResult}</strong>
          </div>

          <div>
            <span>Computer</span>
            <strong>{computerResult}</strong>
          </div>

          <div>
            <span>Cards left</span>
            <strong>{deck.length}</strong>
          </div>
        </div>
      </section>

      <section className="battleArena">
        <div className="playerPanel">
          <h2>Computer</h2>

          <div className="cardSlot">
            {computerCard ? (
              <img src={computerCard.src} alt="Computer card" />
            ) : (
              <div className="cardBack">?</div>
            )}
          </div>
        </div>

        <div className="centerPanel">
          <div className="versusBadge">VS</div>
          <p>{roundMessage}</p>

          <button
            className="primaryButton"
            onClick={nextTurn}
            disabled={gameOver}
          >
            Next Round
          </button>
        </div>

        <div className="playerPanel">
          <h2>{playerName}</h2>

          <div className="cardSlot">
            {myCard ? (
              <img src={myCard.src} alt="Player card" />
            ) : (
              <div className="cardBack">?</div>
            )}
          </div>
        </div>
      </section>

      {gameOver && (
        <GameOver
          playerName={playerName}
          myResult={myResult}
          computerResult={computerResult}
          round={round}
          showLeaderboard={showLeaderboard}
          restartGame={restartGame}
        />
      )}
    </main>
  );
}