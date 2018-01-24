import React, { Component } from 'react';
import './App.css';
import Board from "./board.js";


const mark = ["X","O"];

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
      //console.log(square);
      let b = this.state.board;
      b[square] = mark[this.state.player];
      this.setState({board: b})
      this.setState({player: 1-this.state.player});
   }

  render() {
    return (
      <div className="App">
         <Board board={this.state.board} click={this.clickHandler} player={this.state.player}/>
      </div>
    );
  }
}

export default App;
