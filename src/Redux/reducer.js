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

let checkmate = "3k4/2Q5/8/8/8/8/2R1R3/8";
const chess = new Chess();
chess.load("rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3");

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
      let tempMove = {
        from: state.promotion.from,
        to: state.promotion.to,
        promotion: piece,
      };
      chess.move(tempMove);
      return {
        ...state,
        board: chess.board(),
        paused: false,
        promotion: {},
        turn: chess.turn(),
      };
    // case ACTIONS.RESET_BOARD:
    //   return { ...initialState, bo };

    default:
      return state;
  }
};
