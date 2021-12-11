import React from "react";
import './styles/globalStyle.css';
import SideBar from "./components/SideBar";
import Routes from "./routes";

function App() {
  return (
    <div style={{display:"flex"}}>
      {/* <SideBar /> */}
      <Routes />
    </div>
  );
}

export default App;
