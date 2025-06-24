import React, { useState } from "react";
import logo from "./logo.svg";
import heart from "./heart.svg";
import {Routes, Route,Link} from "react-router-dom";
import Gnb from "./component/gnb/gnb.js";
import Body from "./component/body/body.js";
import "./App.css";

function App() {
  return (
    <div id ="App" className="App">
      <Gnb/>
      <Body/>
    </div>
  );
}

export default App;
