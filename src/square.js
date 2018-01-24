import React, {Component} from "react";

class Square extends Component {

   clickHandler = (e) => {
      this.props.click(this.props.id);
   }

   render() {

      let markClass = "mark";

      if(this.props.winner) {
         let id = parseInt(this.props.id);
         if(this.props.winner.a === id ||
            this.props.winner.b === id || this.props.winner.c === id ) {
            markClass = "win-mark mark";

         }
      }

      return (
         <div className="square" onClick={this.clickHandler}>
            <div className={markClass}>{this.props.value}</div>
         </div>
      )
   }
}

export default Square;
