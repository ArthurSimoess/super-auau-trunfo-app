import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateGame from "./pages/CreateGame";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";

function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/instructions" component={ InstructionsPage } />
      <Route exact path="/createGame" component={ CreateGame } />
    </Switch>
  )
}

export default Routes;