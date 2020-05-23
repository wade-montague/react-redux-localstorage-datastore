import React from "react";
import { render } from "react-dom";
import SuperGoTeam from "./SuperGoTeam";
import { Provider as ReduxStoreProvider } from "react-redux";
import store from "./datastore";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import "./SuperGoTeam.css";
import "./app.css";

import { Buttons } from "./Buttons";

const App = () => {
  const [started, setStarted] = React.useState(false);
  return started ? (
    <Buttons primary={1} danger={4} />
  ) : (
    <ReduxStoreProvider store={store}>
      <SuperGoTeam onClick={() => setStarted(true)} />
    </ReduxStoreProvider>
  );
};

render(<App />, document.getElementById("root"));
