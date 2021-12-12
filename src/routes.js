import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AllPokemons from "./screens/AllPokemons";
import MyDeck from "./screens/MyDeck";
import MyFavorites from "./screens/MyFavorites";
import PokemonDetails from "./screens/PokemonDetails";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AllPokemons} />
      <Route exact path="/my-deck" component={MyDeck} />
      <Route exact path="/my-favorites" component={MyFavorites} />
      <Route path="/pokemon-details/:name" component={PokemonDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
