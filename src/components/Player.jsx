import React from 'react'

export default function Player({ name, result, index }) {
    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{result}</td>
        </tr>
    )
}
