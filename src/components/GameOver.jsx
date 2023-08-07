import React, { useEffect, useState } from 'react'

export default function GameOver({ computerRusult, myResult, setShowGamePage, playerName, open }) {
    const [showResult, setShowResult] = useState(false);
    const [WinMessage, setWinMessage] = useState('');



    const saveResult = (name, result) => {
        const statsLS = localStorage.getItem('stats') || '[]';
        const stats = JSON.parse(statsLS)
        let newResult = stats
        const newName = stats.find((item) => {
            return item.name === name
        })
        if (!stats.length || !newName) {
            newResult = [...stats, { name, result }]
        } else if (result) {
            newResult = stats.map((item) => {
                if (item.name === name) {
                    return { name: name, result: item.result + 1 }
                } else {
                    return item
                }
            })
        }
        localStorage.setItem("stats", JSON.stringify(newResult))
    }

    const checkResult = () => {
        const conditionWin = myResult > computerRusult
        if (conditionWin) {
            setWinMessage('You win!!!');
        } else {
            setWinMessage('You lose');
        }
        setShowResult(true)
        saveResult(playerName, Number(conditionWin))
    }


    useEffect(() => {
        if (open) {
            checkResult();
        }
    }, [open]);

    const handleCheckResultClick = () => {
        setShowGamePage(false)
    };


    return (
        open && (<div className='containerGameOver'>
            <div className='titGameOver'>Game Over! No more cards in the deck.</div>
            <button className='buttonGameOver' onClick={handleCheckResultClick}>Check result</button>
            {showResult && <div className='messageGameOver'>{WinMessage}</div>}
        </div>)
    )
}
