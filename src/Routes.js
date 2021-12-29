import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ChooseDeckPage from "./pages/ChooseDeckPage";
import CreateGame from "./pages/CreateGame";
import CustomTrunfoPage from "./pages/CustomTrunfoPage";
import DogTrunfoPage from "./pages/DogTrunfoPage";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";
import ResultPage from "./pages/ResultPage";

function Routes() {
  return(
    <HashRouter>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/instructions" component={ InstructionsPage } />
      <Route exact path="/createGame" component={ CreateGame } />
      <Route exact path="/deck" component={ ChooseDeckPage } />
      <Route exact path="/gameDogTrunfo" component={ DogTrunfoPage } />
      <Route exact path="/gameCustomDeck" component={ CustomTrunfoPage } />
      <Route exact path="/results" component={ ResultPage } />
    </HashRouter>
  )
}

export default Routes;