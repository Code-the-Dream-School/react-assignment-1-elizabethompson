import React, {Component} from 'react';

class Info extends Component{
  render(){
    return (
      <form>
        <label>Player <span className="niceFont">X</span></label>
        <input type="text" name="playerX" />
        <label>Player <span className="niceFont">O</span></label>
        <input type="text" name="playerO" />
        <button type="submit">Start Game</button>
      </form>
    )
  }
}


export default Info;
