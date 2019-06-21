import React from 'react'
export default function ShowHand(props) {
  if(props.playerScore > 0){
  return (
    <div className="player-hand">
      {props
        .hand
        .map(
          card => {
            const className = `heart-code-card-${card.color} heart-code-card-standard-without-transformation`
            if (card.color === 'red'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)
            }>
              {card.points} attack points
            </div>
          } else if (card.color === 'black'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)}>
              Super Attack
              <br></br> {card.points} points 
            </div>
          } else if (card.color === 'purple'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)}>
              Greater Health potion: + {card.points}
            </div>
          }
          else if (card.color === 'green'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)}>
              {card.points} health points
            </div>
          }
          else if (card.color === 'blue'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)}>
              counter opponent card
          </div>} else {
            return null
          }
        }
        )
      }
      <div className="score-wrapper">
        <p>Your score: {props.playerScore}</p>
      </div>
    </div>
  )
  }
  else return (
    <div className="player-hand">
      {props
        .hand
        .map(
          card => {
            const className = `heart-code-card-${card.color} heart-code-card-standard`
            if (card.color === 'red'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)
            }>
              {card.points} attack points
            </div>
          } else if (card.color === 'black'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)}>
              Super Attack
              <br></br> {card.points} points 
            </div>
          } else if (card.color === 'purple'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)}>
              Greater Health potion: + {card.points}
            </div>
          }
          else if (card.color === 'green'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)}>
              {card.points} health points
            </div>
          }
          else if (card.color === 'blue'){
            return <div key={card.id} className={className} onClick={() => props.onCardClick(card.id)}>
              counter opponent card
          </div>} else {
            return null
          }
        }
        )
      }
      <div className="score-wrapper">
        <p>You lost the game.....</p>
      </div>
    </div>
  )
}
