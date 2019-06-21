import React from 'react'
import './GameDetails.css'

export default function ShowStack(props) {
  const lastCard = props.stack[props.stack.length-1]
  // const player = props.player
  // console.log(player.symbol)
  
  if(lastCard){
    const className = `heart-code-card-${lastCard.color} heart-code-card-standard-without-transformation`
    function lastCardRender(lastCard){
    switch (lastCard.color) {
      case 'red':
        return <div key={lastCard.id} className={className}>
          {lastCard.points} attack points
          <span>Card played by {lastCard.symbol}</span>
        </div>
        
      case 'black':
        return <div key={lastCard.id} className={className}>Super Attack<br></br> {lastCard.points} 
        points 
        <br></br>
        <span>Card played by {lastCard.symbol}</span>
        </div>
      case 'purple':
        return <div key={lastCard.id} className={className}>Greater Health potion: + {lastCard.points} 
        <br></br>
        <span>Card played by {lastCard.symbol}</span></div>
      case 'green':
        return <div key={lastCard.id} className={className}>{lastCard.points} health points
        <span>Card played by {lastCard.symbol}</span></div>
      case 'blue':
        return <div key={lastCard.id} className={className}>counter card <br></br>
        <span>Card played by {lastCard.symbol}</span></div>
      default: 
    }
  }

    return (
      <div> 
        <div className="stack-last-card">
        {lastCardRender(lastCard)} 
        </div>
      </div>
    )
  }

  else 
  return (<div className="heart-code-card-back heart-code-card-standard-without-transformation"></div>)
}