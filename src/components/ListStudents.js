import React, { useEffect, useState } from 'react';

export default function ListStudents({ data }) {
  const [player, setPlayer] = useState([]);
  const [highestScoreIndices, setHighestScoreIndices] = useState([]);
  const [crownColor, setCrownColor] = useState('gray');

  useEffect(() => {
    setPlayer(data);
  }, [data]);

  useEffect(() => {
    let highestScore = 0;
    let indices = [];

    for (let i = 0; i < player.length; i++) {
      if (player[i].point > highestScore) {
        highestScore = player[i].point;
        indices = [i];
      } else if (player[i].point === highestScore) {
        indices.push(i);
      }
    }

    setHighestScoreIndices(indices);

    if (indices.length > 0) {
      const color = 'yellow';
      setCrownColor(color);
    }
  }, [player]);

  const handleDelete = (index) => {
    const updatedPlayers = [...player];
    updatedPlayers.splice(index, 1);
    setPlayer(updatedPlayers);
  };

  const handlePlus = (index) => {
    const updatedPlayers = [...player];
    updatedPlayers[index].point += 1;
    setPlayer(updatedPlayers);
  };

  const handleMinus = (index) => {
    const updatedPlayers = [...player];
    if (updatedPlayers[index].point > 0) {
      updatedPlayers[index].point -= 1;
      setPlayer(updatedPlayers);
    }
  };

  return (
    <ul className="list-content">
      {player.map((item, index) => {
        const isHighestScore = highestScoreIndices.includes(index) && item.point > 0;
        return (
          <li className="item-content" key={index}>
            <div className="content-left">
              <button onClick={() => handleDelete(index)} className="btn-delete">
                x
              </button>
              <i
                className="fa-solid fa-crown"
                style={isHighestScore ? { color: crownColor } : null}
              />
              <p>{item.name}</p>
            </div>
            <div className="goal">
              <button onClick={() => handleMinus(index)} className="btn btn-minus">
                -
              </button>
              <input type="text" value={item.point} readOnly="" />
              <button onClick={() => handlePlus(index)} className="btn btn-plus">
                +
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
