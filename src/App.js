import React, { Component, Fragment } from 'react';
import Game from './pages/Game/Game';
import './App.scss'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id="content">
          Web Content...
        </div>
        <Game />
        <footer>Footer here</footer>
      </Fragment>
    );
  }
}

export default App;
