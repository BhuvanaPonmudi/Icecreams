import HeaderBar from "../src/pages/HeaderBar.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useState} from 'react';
import style  from "../src/styles/app.css";

import { createContext } from "react";

export const Context=createContext();

function App() {



  return (
    <Router>
  
    <Context.Provider value={'Explore our wide variety of Icecreams'}>
      <div className="main">
        <HeaderBar></HeaderBar>
         
      </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
