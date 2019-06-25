import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getGames, joinGame, updateGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import Button from '@material-ui/core/Button'
import {userId} from '../../jwt'
import ShowHand from './ShowHand'
import ShowStack from './ShowStack'
import Paper from '@material-ui/core/Paper'
import './GameDetails.css'
import ShowOpponentStats from './ShowOpponentStats';

class GameDetails extends PureComponent {

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  joinGame = () => this.props.joinGame(this.props.game.id)

  onCardClick = (cardId) => {
    const {game, userId} = this.props

    const player = game.players.find(p => p.userId === userId)

    if (player && player.symbol === game.turn) {
      // console.log("oncardclick test game: ", game)
      this.props.updateGame(game.id, cardId)
    } else {
      console.log("Its not your turn")
    }
  }

  render() {
    const {game, users, authenticated, userId} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)
    const opponent = game.players.find(p => p.userId !== userId)
  
    const opponentStats = opponent &&
      game.status !== 'Waiting for opponent to join game' &&
      <ShowOpponentStats score={opponent.score}/>
    
    const stack = player && game.status !== 'Waiting for opponent to join game'  && 
      <ShowStack stack={game.stack} player={player} game={game} 
      />

    const hand = player &&
      game.status !== 'Waiting for opponent to join game' &&
      <ShowHand
        hand={player.hand}
        playerScore={player.score}
        onCardClick={this.onCardClick}
      />

    const winner = game.players
      .filter(p => p.symbol === game.winner)
      .map(p => p.userId)[0]

    return (
      <Paper className="outer-paper">
        <h1>Game #{game.id}</h1>

          <p>Status: {game.status}</p>
          {
            game.status === 'started' &&
            player &&
            player.symbol === game.turn &&
            <div>It's your turn!</div>
          }

          {
            game.status === 'pending' &&
            game.players.map(p => p.userId).indexOf(userId) === -1 &&
            <Button
            color="secondary"
            variant="contained"
            size="big" onClick={this.joinGame}>Deal me some cards!</Button>
          }

          {
            winner &&
            <p>Winner: {users[winner].firstName}</p>
          }

          <hr />
          {opponentStats}
          {stack}
          {hand}
        </Paper>
    )
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users
})

const mapDispatchToProps = {
  getGames, getUsers, joinGame, updateGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails)
