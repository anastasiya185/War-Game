import React from 'react';

export default function Player({ name, wins, games, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{wins}</td>
      <td>{games}</td>
    </tr>
  );
}