import React from "react";
import './styles/globalStyle.css';
import SideBar from "./components/SideBar";
import AllPokemons from "./screens/AllPokemons";

function App() {
  return (
    <div style={{display:"flex"}}>
      <SideBar/>
      <AllPokemons/>
    </div>
  );
}

export default App;
