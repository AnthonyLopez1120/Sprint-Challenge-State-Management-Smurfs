import React from "react";
import "./App.css";
import Smurfs from "./Smurfs"
import Form from "./Form"

const App = props => {
  
    return (
      <div className="App">
        <h1>Smurf Generator</h1>
        <Form/>
        <Smurfs/>
      </div>
    );
  }


export default App;
