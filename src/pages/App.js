import React, { Component, Fragment } from 'react';
import Game from './Game/Game';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>hello</div>
        <div style={{ width: '1200px' }}>
          <Game />
        </div>
      </Fragment>
    );
  }
}

export default App;
