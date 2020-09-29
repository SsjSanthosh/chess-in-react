import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

const getBackendBasedOnViewPort = () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // The viewport is less than 768 pixels wide
    return TouchBackend;
  } else {
    // The viewport is at least 768 pixels wide
    return HTML5Backend;
  }
};
ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={getBackendBasedOnViewPort()}>
      <App />
    </DndProvider>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
