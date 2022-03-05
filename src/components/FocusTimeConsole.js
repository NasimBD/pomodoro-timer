import React from 'react'
import { convertSecond } from '../functions'

export const FocusTimeConsole = ({focusDecrement, focusIncrement, running, focusSpan}) => {
  return (
    <div>
          <h5>Set Focus Time Span:</h5>
          <div className="console-buttons">
            <button type="button" className="" onClick={focusDecrement} disabled={running}><i className="fas fa-caret-down"/></button>
            <span className="value">{convertSecond(focusSpan)[0]}</span>
            <span className="unit">min</span>
            <button type="button" onClick={focusIncrement} disabled={running}><i className="fas fa-caret-up"/></button>
          </div>   
    </div>
  )
}
