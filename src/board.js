import React, {Component} from "react";
import Square from "./square.js";

class Board extends Component {

   resetClick= () => {
      this.props.click(-99);
   }

   render() {
      return (
         <div>
            <button className="button" onClick={this.resetClick}>Reset</button>
            <div className="board unselectable">
               <div className="row">
                  <Square value={this.props.board[0]} click={this.props.click} id="0"/>
                  <Square value={this.props.board[1]} click={this.props.click} id="1"/>
                  <Square value={this.props.board[2]} click={this.props.click} id="2"/>
               </div>
               <div className="row">
                  <Square value={this.props.board[3]} click={this.props.click} id="3"/>
                  <Square value={this.props.board[4]} click={this.props.click} id="4"/>
                  <Square value={this.props.board[5]} click={this.props.click} id="5"/>
               </div>
               <div className="row">
                  <Square value={this.props.board[6]} click={this.props.click} id="6"/>
                  <Square value={this.props.board[7]} click={this.props.click} id="7"/>
                  <Square value={this.props.board[8]} click={this.props.click} id="8"/>
               </div>
            </div>
         </div>
      )
   }
}

export default Board;
