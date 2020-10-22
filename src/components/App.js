import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Info from './Info'

class Game extends Component {

  render(){
    return (
      <Router>
        <div className="container center">
          <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route path="/start">
              <Info />
            </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default Game;
