import React, { useState } from 'react';

function Button() {
  let [homeScore, updateHomeScore] = useState(10);
  let [awayScore, updateAwayScore] = useState(3);

  function score(value, score, updateFunc) {
    updateFunc(value + score);
  }

  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={() => score(7, homeScore, updateHomeScore)}>
          Home Touchdown
        </button>
        <button className="homeButtons__fieldGoal" onClick={() => score(3, homeScore, updateHomeScore)}>
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => score(7, awayScore, updateAwayScore)}>
          Away Touchdown
        </button>
        <button className="awayButtons__fieldGoal" onClick={() => score(3, awayScore, updateAwayScore)}>
          Away Field Goal
        </button>
      </div>
    </section>
  );
}

export default Button;
