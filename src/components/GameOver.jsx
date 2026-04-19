import React, { useEffect } from 'react';

export default function GameOver({
  playerName,
  myResult,
  computerResult,
  round,
  showLeaderboard,
  restartGame,
}) {
  const isWinner = myResult > computerResult;
  const isDraw = myResult === computerResult;

  const saveResult = () => {
    const statsLS = localStorage.getItem('stats') || '[]';
    const stats = JSON.parse(statsLS);

    const existingPlayer = stats.find((item) => item.name === playerName);

    let updatedStats;

    if (!existingPlayer) {
      updatedStats = [
        ...stats,
        {
          name: playerName,
          wins: isWinner ? 1 : 0,
          games: 1,
        },
      ];
    } else {
      updatedStats = stats.map((item) => {
        if (item.name === playerName) {
          return {
            ...item,
            wins: item.wins + (isWinner ? 1 : 0),
            games: item.games + 1,
          };
        }

        return item;
      });
    }

    localStorage.setItem('stats', JSON.stringify(updatedStats));
  };

  useEffect(() => {
    saveResult();
  }, []);

  const finalMessage = isDraw
    ? 'It is a draw'
    : isWinner
      ? 'You win!'
      : 'Computer wins';

  return (
    <div className="gameOverOverlay">
      <section className="gameOverCard">
        <p className="smallLabel">Game Over</p>

        <h1>{finalMessage}</h1>

        <div className="finalStats">
          <div>
            <span>{playerName}</span>
            <strong>{myResult}</strong>
          </div>

          <div>
            <span>Computer</span>
            <strong>{computerResult}</strong>
          </div>

          <div>
            <span>Rounds</span>
            <strong>{round}</strong>
          </div>
        </div>

        <div className="gameOverActions">
          <button className="primaryButton" onClick={showLeaderboard}>
            View Leaderboard
          </button>

          <button className="secondaryButton" onClick={restartGame}>
            Play Again
          </button>
        </div>
      </section>
    </div>
  );
}