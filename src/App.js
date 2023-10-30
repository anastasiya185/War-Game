
import './App.css';
import { useState } from 'react';
import MainPage from './components/MainPage';
import GamePage from './components/GamePage';
import PlayerList from './components/PlayerList';

function App() {
  const [playerName, setPlayerName] =useState()
  const [openGame, setOpenGame] = useState(false);
  const [showGamePage, setShowGamePage] = useState(true)
  const [playerResults, setPlayerResults] = useState({});





  const addPlayerName = (playerName) =>{
    setPlayerName(playerName)
  }


  return (
    <div className="App">
      {showGamePage && openGame ?(
         <GamePage
        playerName={playerName}
        setShowGamePage={setShowGamePage}/>) : !showGamePage ? (
        <PlayerList 
        playerName={playerName}
        playerResults={playerResults}
        setShowGamePage={setShowGamePage}/>) : (<MainPage
        playerName={playerName}
        openGame={openGame}
        setOpenGame={setOpenGame}
        addPlayerName={addPlayerName}/>)}

    </div>
  );
}

export default App;
