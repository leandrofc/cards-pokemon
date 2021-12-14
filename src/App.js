import React from "react";
import './styles/globalStyle.css';
import Routes from "./routes";
import PokemonsProvider from "./context/listPokemons";

function App() {
  return (
    <div style={{display:"flex"}}>
      <PokemonsProvider>
        <Routes />
      </PokemonsProvider>
    </div>
  );
}

export default App;
