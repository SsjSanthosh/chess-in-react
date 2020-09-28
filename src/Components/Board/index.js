import React from "react";
import { connect } from "react-redux";
import { getSquareColor, getSquarePosition } from "../../utils";
import Promotion from "../Promotion";
import Square from "../Square";

import "./style.scss";

function Board({ board, spares, paused, promoting, turn }) {
  function renderBoard() {
    console.log(promoting);
    return board.map((square, idx) => {
      return (
        <Square
          square={square}
          color={getSquareColor(idx, turn)}
          position={getSquarePosition(idx, turn)}
        />
      );
    });
  }

  return (
    <div className="game-container">
      {paused && <Promotion color={promoting.color} />}
      <div className="board-container">{board.length && renderBoard()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    board:
      state.chess.turn === "w"
        ? state.chess.board.flat()
        : state.chess.board.flat().reverse(),

    spares: state.chess.spares,
    paused: state.chess.paused,
    promoting: state.chess.promotion,
    turn: state.chess.turn,
  };
};
export default connect(mapStateToProps)(Board);
