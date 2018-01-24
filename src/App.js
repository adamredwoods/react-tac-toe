import React, { Component } from 'react';
import './App.css';
import Board from "./board.js";
import MovesButtons from "./movesButtons"

const PLAYER_MARK = ["X","O"];
const WIN_CASES = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];



const Message = (props) => {
   if(props.winner) {
      return <div className="div-center">Winner: {props.winner.player}</div>;
   } else {
      return <div className="div-center">Player: {PLAYER_MARK[props.player]}  Turn: {props.turn}</div>;
   }
   return <div></div>;
}

class App extends Component {

   constructor(props) {
      super(props);

      this.state = {
         board: new Array(9),
         player: 0,
         move: [],
         winner: null,
         turn: 1,
         rewind: 0
      }
   }

   reset =() => {
      this.setState({player:0, board: new Array(9), move: [], winner:null, turn: 1});
   }



   checkForWin = (board) => {

      for(let i=0; i<WIN_CASES.length; i++) {
         let a=WIN_CASES[i][0];
         let b=WIN_CASES[i][1];
         let c=WIN_CASES[i][2];

         if(board[a] && board[a]===board[b] && board[b]===board[c] ) {
            //winner
            this.setState({winner: {player: board[a], a:a,b:b,c:c}});
            //this.showWinner(board[a]);
         }
      }
   }

   clickHandler = (square) => {
      //-- reset board
      if (square===-99) {
         this.reset();
         return;
      }

      //--do nothing if winner
      if(this.state.winner) return;

      //--make sure we have latest board
      //--and do nothing if space is not empty

      //let b = this.state.board.slice();
      let b =[];
      if (this.state.move.length>0) {
         b = this.state.move[this.state.move.length-1].slice();

      } else {
         b = this.state.board.slice();
      }
      if(b[square]) return;

      b[square] = PLAYER_MARK[this.state.player];
      this.setState({board: b})
      this.setState({player: 1-this.state.player});
      let m = this.state.move;
      m.push(b);
      this.setState({move: m, turn: this.state.turn+1, rewind: this.state.turn+1});

      this.checkForWin(b);
   }

   moveClick = (num) => {
      this.setState({board: this.state.move[num], rewind: num});
   }

  render() {
    return (
      <div className="App">
         <Board board={this.state.board} click={this.clickHandler} player={this.state.player} winner={this.state.winner}/>
         <Message player={this.state.player} winner={this.state.winner} turn={this.state.turn} />
         <MovesButtons move={this.state.move} moveClick={this.moveClick} rewind={this.state.rewind}/>

      </div>

    );
  }
}

export default App;
