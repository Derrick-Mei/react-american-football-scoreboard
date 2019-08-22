import React, { useState } from 'react';
import useInterval from './useInterval';

function Timer(props) {
  let [tenMinute, setTenMinute] = useState(0);
  let [minute, setMinute] = useState(1);
  let [tenSecond, setTenSecond] = useState(0);
  let [second, setSecond] = useState(0);


  useInterval(() => {
    if (second === 0 && tenSecond === 0 && minute === 0 && tenMinute === 0) {
        if (props.quarter < 4 ) {
            setTenMinute(4);
            setMinute(5);
            props.updateQuarter(props.quarter + 1)
            return
        } else {
            return props.changeInterval(null);
        }
    }
    setSecond(second - 1);
    if (second === 0) {
      setTenSecond(tenSecond - 1);
      setSecond(9);
      if (tenSecond < 1) {
        setMinute(minute - 1);
        setTenSecond(5);
        if (minute < 1) {
          setTenMinute(tenMinute - 1);
          setMinute(9);
        }
      }
    }
  }, props.interval);

  return (
    <div className="timer">
      <span className="numbers">{`${tenMinute}`}</span>
      <span className="numbers">{`${minute}`}</span>
      <span>:</span>
      <span className="numbers">{`${tenSecond}`}</span>
      <span className="numbers">{`${second}`}</span>
    </div>
  );
}

export default Timer;
