import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";

function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/instructions" component={ InstructionsPage } />
    </Switch>
  )
}

export default Routes;