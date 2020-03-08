
import * as React from "react";
import { render } from "react-dom";
import { setStylesTarget } from "typestyle";
import App from "./components/app"

export const renderApp = () => {

    render(
       <App />,
      document.getElementById("app"),
    );
    setStylesTarget(document.getElementById("app-styles"));
  };

renderApp()