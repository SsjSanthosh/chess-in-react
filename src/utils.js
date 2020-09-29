import { CHESS_ROWS } from "./constants";

const getXYPosition = (idx, turn) => {
  const x = turn === "w" ? idx % 8 : Math.abs((idx % 8) - 7);
  const y =
    turn === "w" ? Math.abs(Math.floor(idx / 8) - 7) : Math.floor(idx / 8);
  return { x, y };
};

export const getSquareColor = (idx, turn) => {
  const { x, y } = getXYPosition(idx, turn);
  return (x + y) % 2 === 1 ? "black" : "white";
};

export const getSquarePosition = (idx, turn) => {
  const { x, y } = getXYPosition(idx, turn);
  const row = CHESS_ROWS[x];
  return `${row}${y + 1}`;
};

export const updateGameBoard = (chess, state, { from, to }) => {
  //TODO - refactor this function to not have so many lines and conditionals
  // check for promotion if the pawn is in the penultimate row
  if (from.includes("7")) {
    const promotions = chess
      .moves({ verbose: true })
      .filter((c) => c.promotion);
    if (
      promotions &&
      promotions.some((prom) => `${prom.from}:${prom.to}` === `${from}:${to}`)
    ) {
      return {
        ...state,
        promotion: { from, to, color: promotions[0].color },
        paused: true,
        turn: chess.turn(),
      };
    }
  }
  const move = chess.move({ from, to });
  if (chess.game_over()) {
    if (chess.in_checkmate()) {
      return {
        ...state,
        board: chess.board(),
        game_over: true,
        game_result: `CHECKMATE - ${
          chess.turn() === "w" ? "BLACK" : "WHITE"
        } WINS!`,
      };
    }
    if (chess.in_draw()) {
      return {
        ...state,
        game_over: true,
        game_result: `DRAW!`,
      };
    }
  }
  if (!move) {
    return { ...state };
  }
  return { ...state, board: chess.board(), turn: chess.turn() };
};
