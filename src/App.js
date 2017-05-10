import React, { Component } from 'react';

import Clock from './components/clock';

const getTime = () => {
  const now = new Date();

  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getTime();
  }

  componentDidMount() {
    this.tick = this.tick.bind(this);
    this.setState({ intervalId: setInterval(this.tick, 500) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  tick() {
    this.setState({ ...getTime() });
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div className="App">
        <Clock hours={hours} minutes={minutes} seconds={seconds} />
      </div>
    );
  }
}

export default App;
