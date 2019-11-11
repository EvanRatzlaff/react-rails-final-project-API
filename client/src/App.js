import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CarInfo from './containers/CarInfo'
import OtherCars from './containers/OtherCars'
import CarTips from './containers/CarTips'
import NavLink from './components/NavLink'
import Homepage from './components/Homepage'
//import EnterButton from './components/EnterButton'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>

      
      <div className="App">
        <header className="App-header">
          <h3 align="top">Welcome to The Car Creator App</h3>
          <NavLink />
          <div className="container" align="right">
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/new" component={CarInfo} />
            <Route exact path="/cars" component={OtherCars} />
            <Route exact path="/cars/:id" component={CarTips} />
       

            </Switch>
          </div>
        </header>
      </div>
    </Router>
    );
  }
}

export default App;
