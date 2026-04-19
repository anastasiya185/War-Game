import './App.css';
import { useState } from 'react';

import MainPage from './components/MainPage';
import GamePage from './components/GamePage';
import PlayerList from './components/PlayerList';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const startGame = (name) => {
    setPlayerName(name);
    setCurrentPage('game');
  };

  const showLeaderboard = () => {
    setCurrentPage('leaderboard');
  };

  const restartGame = () => {
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <MainPage
          playerName={playerName}
          setPlayerName={setPlayerName}
          startGame={startGame}
          showLeaderboard={showLeaderboard}
        />
      )}

      {currentPage === 'game' && (
        <GamePage
          playerName={playerName}
          showLeaderboard={showLeaderboard}
          restartGame={restartGame}
        />
      )}

      {currentPage === 'leaderboard' && (
        <PlayerList
          restartGame={restartGame}
        />
      )}
    </div>
  );
}

export default App;