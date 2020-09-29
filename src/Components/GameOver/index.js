import React from "react";
import { connect } from "react-redux";
import { setBoard } from "../../Redux/actions";

import "./style.scss";
function GameOver({ message, setBoard }) {
  return (
    <div className="game-over">
      <p className="game-over-message">{message}</p>
      <button onClick={() => setBoard()}>Start new game</button>
    </div>
  );
}

export default connect(null, { setBoard })(GameOver);
