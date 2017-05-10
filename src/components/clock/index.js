import React from 'react';

import './clock.css';

const Clock = () => (
  <div className="clock">
    <div className="clock-center" />
    <div className="clock-hand clock-hand-hour" />
    <div className="clock-hand clock-hand-minute" />
    <div className="clock-hand clock-hand-second" />
  </div>
);

export default Clock;
