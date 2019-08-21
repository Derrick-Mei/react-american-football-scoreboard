//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

import Timer from './Stretch/Timer';

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  let [homeScore, updateHomeScore] = useState(10);
  let [awayScore, updateAwayScore] = useState(3);

  function scoreHandler(value,score, updateFunc) {
    updateFunc(value + score);
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hard coded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          {/* <div className="timer">00:03</div> */}
          <Timer/>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=> scoreHandler(7, homeScore, updateHomeScore)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=> scoreHandler(3, homeScore, updateHomeScore)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=> scoreHandler(7, awayScore, updateAwayScore)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=> scoreHandler(3, awayScore, updateAwayScore)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
