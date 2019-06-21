import React from 'react'

export default function ShowOpponentStats(props) {
  if(props.score > 0)
  return (
    <div className="opponent-stats">
      <div className="heart-code-card-back heart-code-card-standard-without-transformation"></div>
      <div className="heart-code-card-back heart-code-card-standard-without-transformation"></div>
      <div className="heart-code-card-back heart-code-card-standard-without-transformation"></div>
      <div className="score-wrapper">
      <p>Enemy score: {props.score}</p>
      </div>
    </div>
  )
  else return (
    <div className="opponent-stats">
      <div className="heart-code-card-back heart-code-card-standard-without-transformation"></div>
      <div className="heart-code-card-back heart-code-card-standard-without-transformation"></div>
      <div className="heart-code-card-back heart-code-card-standard-without-transformation"></div>
      <div className="score-wrapper">
      <p>Enemy Lost, You win!</p>
      </div>
    </div>)
}
