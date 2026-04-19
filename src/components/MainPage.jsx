import React, { useState } from 'react';

export default function MainPage({ playerName, setPlayerName, startGame, showLeaderboard }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleStartGame = () => {
    if (!playerName.trim()) {
      setErrorMessage('Please enter your name');
      return;
    }

    setErrorMessage('');
    startGame(playerName.trim());
  };

  return (
    <main className="page homePage">
      <section className="heroCard">
        <div className="gameBadge">♠ WAR CARD GAME ♥</div>

        <h1>Ready for War?</h1>

        <p>
          Enter your name, draw cards against the computer, and climb the leaderboard.
        </p>

        <div className="startForm">
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="input-main"
            placeholder="Enter your name"
          />

          {errorMessage && <p className="errorMessage">{errorMessage}</p>}

          <button onClick={handleStartGame} className="primaryButton">
            Start Game
          </button>

          <button onClick={showLeaderboard} className="secondaryButton">
            View Leaderboard
          </button>
        </div>
      </section>
    </main>
  );
}