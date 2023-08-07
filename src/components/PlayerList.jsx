import React from 'react'
import Player from './Player'

export default function PlayerList({ setShowGamePage }) {
    const statsLS = localStorage.getItem('stats') || '[]';
    const stats = JSON.parse(statsLS)
    stats.sort((a, b) => b.result - a.result);


    const handleShowGamePage = () => {
        setShowGamePage(true)
    };

    return (
        <div className='tableDiv'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((val, index) => {
                        return (

                            <Player
                                key={index}
                                index={index + 1}
                                name={val.name || ''}
                                result={val.result || 0}
                            />
                        );
                    })}
                </tbody>
            </table>
            <button className='buttonTryAgain' onClick={handleShowGamePage}>TRY AGAIN</button>
        </div>

    )
}
