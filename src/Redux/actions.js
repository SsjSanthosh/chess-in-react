import { ACTIONS } from "../constants";
export const setBoard = () => {
  return { type: ACTIONS.SET_START_BOARD };
};

export const movePiece = (from, to) => {
  return { type: ACTIONS.MOVE_PIECE, payload: { from, to } };
};

export const promotePawn = (piece) => {
  return {
    type: ACTIONS.PROMOTE_PAWN,
    payload: { piece },
  };
};
