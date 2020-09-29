import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { DRAG_DROP_TYPE } from "../../constants";

import "./style.scss";
function Piece({ piece, position }) {
  const { type, color } = piece;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      id: `${position}_${type}_${color}`,
      type: DRAG_DROP_TYPE,
    },
    collect: (monitor) => {
      return { isDragging: monitor.isDragging() };
    },
  });
  const image = require(`../../assets/img/${type}_${color}.png`);
  return (
    <>
      <DragPreviewImage src={image} connect={preview} />
      <div
        className="board-piece"
        ref={drag}
        style={{ opacity: isDragging && !isMobile ? 0 : 1 }}
      >
        <img src={image} alt={`${piece.type}`} />
      </div>
    </>
  );
}

export default Piece;
