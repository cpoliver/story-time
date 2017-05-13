import React, { Component } from 'react';

import Clock from '../clock';
import Overlay from '../overlay';

const getTime = () => {
  const to12hr = hours => hours > 12 ? hours % 12 : hours;

  const now = new Date();
  const hours = to12hr(now.getHours());

  return {
    hours,
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
      <div>
        <Overlay />
        <Clock hours={hours} minutes={minutes} seconds={seconds} />
      </div>
    );
  }
}

export default App;
