import React from "react";
import "./App.css";
import { Boards } from "./components/Boards.js";
import { Menu } from "./components/Menu.js";
import { Sidenav } from "./components/Sidenav.js";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Menu />
      <main>
        <Sidenav />
        <Boards path="/boards" />
      </main>
    </div>
  );
}

export default App;
