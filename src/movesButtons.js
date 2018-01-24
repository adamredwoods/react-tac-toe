import React from "react";

function checkClass(rewind, i) {
   if (rewind===i) {
      return "move-button div-center move-select";
   }
   return "move-button div-center";
}

const MovesButtons = (props) => {
   const thisClick = (i) => {
      //console.log(e);
      props.moveClick(i);
   }

   return (
      <div className="move-div">
         {props.move.map((m,i) => (
            <div className={checkClass(props.rewind,i)} onClick={thisClick.bind(this,i)} key={i}>Move {i+1}</div>
         ))}

      </div>
   )
}

export default MovesButtons;
