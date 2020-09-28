import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect, Provider } from "react-redux";
import store from "./Redux/store";
import Board from "./Components/Board";
import { setBoard } from "./Redux/actions";
function App({ setBoard }) {
  useEffect(() => {
    setBoard();
  }, []);
  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default connect(null, { setBoard })(App);
