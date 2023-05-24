import React, { useEffect, useState } from 'react';

export default function Header({ studentData, sum }) {
  return (
    <div className="header">
      <div className="header-left">
        <div className="transcript">
          <p className="player">Player:</p>
          <p>{studentData.length ? studentData.length : '0'}</p>
        </div>
        <div className="transcript">
          <p className="point">Total Point:</p>
          <p>{sum}</p>
        </div>
      </div>
      <div className="">
        <h1>Player Scoreboard</h1>
      </div>
    </div>
  );
}
