import React, {Component} from "react";

class Square extends Component {

   clickHandler = (e) => {
      this.props.click(this.props.id);
   }

   render() {
      return (
         <div className="square" onClick={this.clickHandler}>
            {this.props.value}
         </div>
      )
   }
}

export default Square;
