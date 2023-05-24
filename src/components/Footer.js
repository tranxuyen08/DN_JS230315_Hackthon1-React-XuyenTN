import React, { useState } from 'react';

export default function Footer({ onAdd }) {
  const [player, setPlayer] = useState('');

  const handleInputPlayer = (e) => {
    setPlayer(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (player) {
      const addPlayer = {
        name: player,
        point: 0
      };
      onAdd(addPlayer);
      setPlayer('');
    }
  };

  return (
    <div className="footer">
      <input
        onChange={handleInputPlayer}
        value={player}
        className="input-player"
        type="text"
        placeholder="Enter a player's name"
      />
      <button onClick={handleAdd} className="btn btn-add">
        ADD PLAYER
      </button>
    </div>
  );
}
