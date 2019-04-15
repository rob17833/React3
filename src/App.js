import React, { Component } from "react";
import "./App.css";
import Quotes from "./Quotes";
import Lamp from "./Lamp";
import Logo from "./Logo";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simpsons Lamp</h1>
          <Logo working />
        </header>

        
        <Lamp on/*est egal a lamp on='true' donc on est une variable qui a la valeur true2*//>
        <Lamp /*ici on ne met pas de variable, donc valeur indefinie, la lampe aura donc la valeur false et restera eteinte*//> 
        <Quotes/>
      </div>
    );
  }
}

export default App;