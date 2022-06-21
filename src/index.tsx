import React from "react";
import { render } from "react-dom";
import { store } from "redux/store";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import App from "./App";

render(
  <React.StrictMode>
    <Normalize />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
