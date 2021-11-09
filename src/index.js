import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { AppProvider } from "./context";
import CocktailApp from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <CocktailApp />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
