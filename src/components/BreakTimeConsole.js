import React from 'react'
import { convertSecond } from '../functions'

export const BreakTimeConsole = ({breakDecrement, breakIncrement, running, breakSpan}) => {
  return (
  <div>
    <h5>Set Break Time Span:</h5>
    <div className="console-buttons">
      <button type="button" className="" onClick={breakDecrement} disabled={running}><i className="fas fa-caret-down"/></button>
      <span className="value">{convertSecond(breakSpan)[0]}</span>
      <span className="unit">min</span>
      <button type="button" onClick={breakIncrement} disabled={running}><i className="fas fa-caret-up"/></button>
    </div>
  </div>
  )
}
