import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Profile from './Components/Profile';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Navbar/>
            <Form/>
          </Route>
          <Route exact path='/profile'>
            <Profile/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
