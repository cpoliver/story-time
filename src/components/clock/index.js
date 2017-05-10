import React from 'react';

import './clock.css';

const calculateRotation = (divisor, value) => value * 360 / divisor;

const makeStyle = (divisor, value) => ({
  transform: `rotate(${calculateRotation(divisor, value)}deg)`
});

function Clock({ hours, minutes, seconds }) {
  return (
    <div className="clock">
      <div className="clock-center" />
      <div className="clock-hand clock-hand-hour" style={makeStyle(12, hours)} />
      <div className="clock-hand clock-hand-minute" style={makeStyle(60, minutes)} />
      <div className="clock-hand clock-hand-second" style={makeStyle(60, seconds)} />
    </div>
  );
}

const makeValidator = max => (props, propName, componentName) => {
  const value = props[propName];

  console.log(props, propName, componentName);

  if (value === undefined || typeof value !== 'number' || value < 0 || value > max) {
    return new Error(
      `Invalid prop "${propName}" supplied to "${componentName}".
       The value should be a number between 0 and ${max}`
    );
  }
};

Clock.propTypes = {
  hours: makeValidator(12),
  minutes: makeValidator(60),
  seconds: makeValidator(60)
};

export default Clock;
