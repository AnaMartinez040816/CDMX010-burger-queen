import './App.css';
// import { Router, Route, Switch } from "react-router";
import { Users } from './Components/content/Users';
import {Navbar} from './Components/navbar/Navbar';
import {boardWaiter} from './Components/boardWaiter/boardWaiter';

// let Router = require("react-router").Router;
// let Route  = require("react-router").Route;
// let Switch = require("react-router").Switch;


export function App() {
  return (
    <div className="App">
       <Navbar />
       <Users />
       <boardWaiter />
       
    </div>
  );
}

export default App;
