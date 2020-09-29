import { ACTIONS } from "../constants";
import * as Chess from "chess.js";
import { updateGameBoard } from "../utils";

const initialState = {
  board: [],
  isWhitePlaying: true,
  spares: [],
  promotion: {},
  turn: "w",
  paused: false,
  game_over: false,
  game_result: "",
};

const chess = new Chess();

export const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTIONS.SET_START_BOARD:
      chess.reset();
      return { ...initialState, board: chess.board() };
    case ACTIONS.MOVE_PIECE:
      return { ...updateGameBoard(chess, state, payload) };
    case ACTIONS.PROMOTE_PAWN:
      const { piece } = payload;
      let move = {
        from: state.promotion.from,
        to: state.promotion.to,
        promotion: piece,
      };
      chess.move(move);
      return {
        ...state,
        board: chess.board(),
        paused: false,
        promotion: {},
        turn: chess.turn(),
      };
    default:
      return state;
  }
};
