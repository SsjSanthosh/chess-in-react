import React from "react";
import Piece from "../Piece";
import "./style.scss";
import { useDrop } from "react-dnd";
import { DRAG_DROP_TYPE } from "../../constants";
import { movePiece } from "../../Redux/actions";
import { connect } from "react-redux";
function Square({ square, color, position, movePiece, paused }) {
  //   const color = isWhite ? "white-square" : "black-square";
  const [, drop] = useDrop({
    accept: DRAG_DROP_TYPE,
    drop: (item) => {
      !paused && movePiece(item.id.split("_")[0], position);
    },
  });
  return (
    <div className={`board-square ${color}-square`} ref={drop}>
      {square && <Piece color={color} piece={square} position={position} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { paused: state.chess.paused };
};
export default connect(mapStateToProps, { movePiece })(Square);
