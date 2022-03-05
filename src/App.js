import './App.css';
import {useState} from 'react';
import { FocusTimeConsole } from './components/FocusTimeConsole';
import { BreakTimeConsole } from './components/BreakTimeConsole';
import { Timer } from './components/Timer';

function App() {
  const [focusSpan, setFocusSpan] = useState(1500);    // in seconds
  const [breakSpan, setBreakSpan] = useState(300);     // in seconds
  const [running, setRunning] = useState(false);
 

  const focusDecrement = () => {
    if(focusSpan === 60) return;
    setFocusSpan(prevState => prevState - 60 );
  }

  const focusIncrement = () => {
    if(focusSpan === 3600) return;
    setFocusSpan(prevState => prevState + 60);
  }


  const breakDecrement = () => {
    if(breakSpan === 60) return;
    setBreakSpan(prevState => prevState - 60 );

  }

  const breakIncrement = () => {
    if(breakSpan === 3600) return;
    setBreakSpan(prevState => prevState + 60);
  }


  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>
      <p><em>The Pomodoro Technique is a time management method. Work in focused, 25-minute intervals.</em></p>

      <div id="console">
        <FocusTimeConsole
        focusDecrement={focusDecrement}
        focusIncrement={focusIncrement}
        running={running}
        focusSpan={focusSpan}
        />

        <BreakTimeConsole
        breakDecrement={breakDecrement}
        breakIncrement={breakIncrement}
        running={running}
        breakSpan={breakSpan}
        />
      </div>
      
      <Timer
      running={running}
      setRunning={setRunning}
      focusSpan={focusSpan}
      breakSpan={breakSpan}
      />        
    </div>
  );
}

export default App;
