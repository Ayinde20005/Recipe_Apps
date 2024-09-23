import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import GlobalState from "./Context/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <GlobalState>
      <App/>
    </GlobalState>
    </React.StrictMode>
  </BrowserRouter>
);

