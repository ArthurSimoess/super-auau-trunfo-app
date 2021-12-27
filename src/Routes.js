import React from "react";
import { Route, Switch } from "react-router-dom";
import ChooseDeckPage from "./pages/ChooseDeckPage";
import CreateGame from "./pages/CreateGame";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";

function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/instructions" component={ InstructionsPage } />
      <Route exact path="/createGame" component={ CreateGame } />
      <Route exact path="/deck" component={ ChooseDeckPage } />
    </Switch>
  )
}

export default Routes;