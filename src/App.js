import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Board from "./Components/Board";
import { setBoard } from "./Redux/actions";
function App({ setBoard }) {
  useEffect(() => {
    setBoard();
  }, [setBoard]);
  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default connect(null, { setBoard })(App);
