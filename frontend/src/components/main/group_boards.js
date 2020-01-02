import React from "react";

class BoardIndex extends React.Component{
  constructor(props){
    super(props);
  }

  // buildBoard(key){
  //   return(
  //     <li className="board-list-element">{key}</li>
  //   )
  // }

  render(){
    let boards = this.props.boards;

    let boardEles = Object.keys(boards).map((key, idx) => {
      return(
        // this.buildBoard(key)
        <li key={idx}
          className="board-list-element">
          {boards[key].title}
        </li>
      )
    });
    
    return(
      <ul className="group-board-container">
        {boardEles}
      </ul>
    )
  }
}

export default BoardIndex;