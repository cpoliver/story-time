import React, { Component } from 'react';

import Clock from './components/clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock hours={12} minutes={15} seconds={30} />
      </div>
    );
  }
}

export default App;
