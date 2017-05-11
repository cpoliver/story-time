import React from 'react';
import { concat, map, range, when } from 'ramda';

import './clock.css';

const calculateRotation = (divisor, value) => value * 360 / divisor;

const makeStyle = (divisor, value) => ({
  transform: `rotate(${calculateRotation(divisor, value)}deg)`
});

const repeat = (count, fn) => map(fn, range(0, count));

const createSecondMarkers = () => repeat(30, i => {
  let className = when(
    () => i % 5 === 0,
    concat('clock-second-marker-bold ')
  )('clock-marker clock-second-marker');

  return <div key={i} className={className} style={makeStyle(60, i)} />
});

const Clock = ({ hours, minutes, seconds }) => (
  <div className="clock">
    <div className="clock-inner" />
    {createSecondMarkers()}
    <div className="clock-center" />
    <div className="clock-hand clock-hand-hour" style={makeStyle(12, hours)} />
    <div className="clock-hand clock-hand-minute" style={makeStyle(60, minutes)} />
    <div className="clock-hand clock-hand-second" style={makeStyle(60, seconds)} />
  </div>
);

const makeValidator = max => (props, propName, componentName) => {
  const value = props[propName];

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
