import React, { Component } from 'react';
import './App.css';
import Board from "./board.js";


const PLAYER_MARK = ["X","O"];

const Moves = (props) => {
   return (
      <div>
      </div>
   )
}

class App extends Component {

   constructor(props) {
      super(props);

      this.state = {
         board: new Array(9),
         player: 0,
         move: []
      }

   }

   clickHandler = (square) => {
      //-- reset board
      if (square===-99) {
         this.setState({player:0, board: new Array(9), move: []});
         return;
      }
      //console.log(square);
      let b = this.state.board;
      b[square] = PLAYER_MARK[this.state.player];
      this.setState({board: b})
      this.setState({player: 1-this.state.player});
      let m = this.state.move;
      m.push(b);
      this.setState({move: m});
   }

  render() {
    return (
      <div className="App">
         <Board board={this.state.board} click={this.clickHandler} player={this.state.player}/>
         <Moves />
      </div>

    );
  }
}

export default App;
