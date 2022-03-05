import React, { useEffect, useState } from 'react'
import {handleZero, convertSecond} from '../functions';

export const Timer = ({ running, setRunning, focusSpan, breakSpan}) => {
    const [remainingTime, setRemainingTime] = useState(1500);
    const [intervalId, setIntervalId] = useState();
    const [phase, setPhase] = useState('focus');


    useEffect(() => {
        setRemainingTime(phase==="focus" ? focusSpan : breakSpan);
      },
      [focusSpan, breakSpan]);


    useEffect(() => {
        if(running) {
          
            const timeOutId = setTimeout(() =>
              {
                if(remainingTime > 0){
                  setRemainingTime(prevState => --prevState);
                }else{
                  blink();
                  setRunning(false);
                  (phase === 'focus') ? setRemainingTime(breakSpan) : setRemainingTime(focusSpan);
                  setPhase(prevState => {
                    return prevState==='focus' ? 'break' : 'focus'
                  });
                }
              
              }
              , 1000
            )
           
              return () => clearInterval(timeOutId); 
        }
      }, [running, remainingTime])



    const controlRestart = () => {
        if(running) setRunning(!running);
        setRemainingTime(phase==="focus" ? focusSpan : breakSpan);
        clearBlink();
    
      }
    
      const controlRunning = () => {
        setRunning(!running);
        clearBlink();
      }

      const blink = () => {
        const Timer_Display = document.getElementById("timer-display");
        const intervalId = setInterval(() => {
            Timer_Display.classList.toggle("blink");
        },
        1000
        );
        setIntervalId(intervalId);
      }
    
      const clearBlink = () => {
        clearInterval(intervalId);
        document.querySelector('.blink')?.classList.toggle('blink');
    
      }

  return (
  <div id="timer-display" className={`${phase==="focus" ? 'focus' : 'break'}`}>
    <h2>{phase}</h2>
    <h3>{handleZero(convertSecond(remainingTime)[0])} : {handleZero(convertSecond(remainingTime)[1])}</h3>
      <button type="button" onClick={controlRestart}><i className="fas fa-sync"/></button>
      {!running && <button type="button" onClick={controlRunning}><i className="fas fa-play"/></button>}
      {running && <button type="button" onClick={controlRunning}><i className="fa fa-stop"/></button>}
  </div>

  )
}
