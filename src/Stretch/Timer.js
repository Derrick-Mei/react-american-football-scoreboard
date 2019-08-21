import React, {useState} from 'react'
import useInterval from './useInterval'


function Timer() {
    let [tenMinute, setTenMinute] = useState(4)
    let [minute, setMinute] = useState(1)
    let [tenSecond, setTenSecond] = useState(0)
    let [second, setSecond] = useState(0)

    useInterval(()=> {
        setSecond(second - 1)
        if (second === 0 ) {
            setTenSecond(tenSecond -1)
            setSecond(9)
            if (tenSecond < 1 ) {
                setMinute(minute -1)
                setTenSecond(5)
                if (minute < 1) {
                    setTenMinute(tenMinute - 1)
                    setMinute(9)
                }
            }
        }
    }, 500)

    return (
        <div className="timer">{`${tenMinute}${minute}:${tenSecond}${second}`}</div>
    )
}

export default Timer;