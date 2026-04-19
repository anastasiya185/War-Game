import React from 'react';
import Player from './Player';

export default function PlayerList({ restartGame }) {
  const statsLS = localStorage.getItem('stats') || '[]';
  const stats = JSON.parse(statsLS);

  const sortedStats = stats.sort((a, b) => {
    if ((b.wins || 0) !== (a.wins || 0)) {
      return (b.wins || 0) - (a.wins || 0);
    }

    return (b.games || 0) - (a.games || 0);
  });

  const clearResults = () => {
    localStorage.removeItem('stats');
    window.location.reload();
  };

  return (
    <main className="page leaderboardPage">
      <section className="leaderboardCard">
        <div className="leaderboardHeader">
          <div>
            <p className="smallLabel">Leaderboard</p>
            <h1>Top Players</h1>
          </div>

          <button className="secondaryButton" onClick={restartGame}>
            New Game
          </button>
        </div>

        {sortedStats.length === 0 ? (
          <div className="emptyLeaderboard">
            <h2>No results yet</h2>
            <p>Play your first game to appear on the leaderboard.</p>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Games</th>
              </tr>
            </thead>

            <tbody>
              {sortedStats.map((player, index) => (
                <Player
                  key={player.name}
                  index={index + 1}
                  name={player.name}
                  wins={player.wins || player.result || 0}
                  games={player.games || 1}
                />
              ))}
            </tbody>
          </table>
        )}

        {sortedStats.length > 0 && (
          <button className="dangerButton" onClick={clearResults}>
            Clear Results
          </button>
        )}
      </section>
    </main>
  );
}