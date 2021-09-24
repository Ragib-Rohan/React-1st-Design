import './App.css';
import * as React from 'react'; 
import {Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap5/src/css/bootstrap.min.css";
import "../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js";

//Components
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to='/'  />
      </Switch>

    </div>
  );
}

export default App;
