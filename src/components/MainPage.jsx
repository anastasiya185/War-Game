import React, { useState } from 'react'

const MainPage = ({ playerName, openGame, setOpenGame, addPlayerName })=>{
  const [errorMessage, setErrorMessage] = useState('');

     const startGame = () => {
    if (playerName.trim()) {
      setOpenGame(!openGame);
      setErrorMessage('');
    } else {
      setErrorMessage('Enter your name');
    }
  };

  return (
    <div className='container'>
        <h1 className='tit-main'>Ready for WAR</h1>
        <input type="text" onChange={(e)=>{addPlayerName(e.target.value)}} className='input-main' placeholder='Enter your name' />
        <button onClick={startGame} className='button-main'>start</button>
         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
         
    </div>

  )
}

export default MainPage;

