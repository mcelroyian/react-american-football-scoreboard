//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  
  const [down, setDown] = useState(1)
  const [seriesStart, setseriesStart] = useState(20)
  const [fieldPosition, setFieldPosition] = useState(20)
  const [quarter, setQuarter] = useState(1)

  const runPlay = event => {
    //needs to keep track of current down, yard positition
    setDown(down + 1) 
    setFieldPosition(fieldPosition + 3)
    // can calulcate 
    //drive starts at initial yardline. 4 attempts to increase currentyardline
    // 10 yards from initialYardline
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow down={down} seriesStart={seriesStart} fieldPosition={fieldPosition} quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
        

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners.
          onClick={setHomeScore(homeScore + 7)}
          onClick={setHomeScore(homeScore + 3)}
          onClick={setAwayScore(awayScore + 7)}
          onClick={setAwayScore(awayScore + 3)}

           */}
          <button className="homeButtons__touchdown" onClick={e => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={e => setHomeScore(homeScore + 3)}>Home Field Goal</button>
          <button className="homeButtons__runPlay" onClick={runPlay}>Run a play</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={e => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={e => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
