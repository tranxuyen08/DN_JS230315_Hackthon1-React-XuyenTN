import React, { useEffect, useState } from 'react';

export default function ListStudents({ data, onDelete, onPlus, onMinus }) {
  const [player, setPlayer] = useState([]);
  const [highestScoreIndices, setHighestScoreIndices] = useState([]);

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handlePlus = (index) => {
    onPlus(index);
  };

  const handleMinus = (index) => {
    onMinus(index);
  };

  useEffect(() => {
    let highestScore = 0;
    let indices = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].point > highestScore) {
        highestScore = data[i].point;
        indices = [i];
      } else if (data[i].point === highestScore) {
        indices.push(i);
      }
    }

    setHighestScoreIndices(indices);
  }, [data]);

  return (
    <ul className="list-content">
      {data.length > 0 ? (
        data.map((item, index) => {
          const isHighestScore = highestScoreIndices.includes(index) && item.point > 0;

          return (
            <li className="item-content" key={index}>
              <div className="content-left">
                <button onClick={() => handleDelete(index)} className="btn-delete">
                  x
                </button>
                <i
                  className={`fa-solid fa-crown ${isHighestScore ? 'yellow' : 'gray'}`}
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
        })
      ) : (
        <li className="item-content">
          <p>Không còn người chơi.</p>
        </li>
      )}
    </ul>
  );
}
