import React, {Component} from "react";

class Square extends Component {

   clickHandler = (e) => {
      this.props.click(this.props.id);
   }

   render() {
      return (
         <div className="square" onClick={this.clickHandler}>
            <div className="mark">{this.props.value}</div>
         </div>
      )
   }
}

export default Square;
