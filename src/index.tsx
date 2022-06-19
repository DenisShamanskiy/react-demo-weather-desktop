import { store } from "redux/store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
