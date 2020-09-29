import React from "react";
import { connect } from "react-redux";
import { getSquareColor, getSquarePosition } from "../../utils";
import Promotion from "../Promotion";
import Square from "../Square";
import GameOver from "../GameOver";

import "./style.scss";

function Board({ board, spares, paused, promoting, turn, game_over, message }) {
  console.log(game_over);
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
      {game_over && <GameOver message={message} />}
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
    game_over: state.chess.game_over,
    message: state.chess.game_result,
  };
};
export default connect(mapStateToProps)(Board);
