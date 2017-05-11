import React from 'react';
import { append, concat, flip, map, range, when } from 'ramda';

import './clock.css';

const calculateRotation = (divisor, value) => value * 360 / divisor;

const makeStyle = (divisor, value) => ({
  transform: `rotate(${calculateRotation(divisor, value)}deg)`
});

const repeat = (count, fn) => map(fn, range(0, count));

const createSecondMarkers = () => repeat(30, i => {
  let className = when(
    () => i % 5 === 0,
    flip(concat)(' clock-second-marker-bold')
  )('clock-marker clock-second-marker');

  return <div key={i} className={className} style={makeStyle(60, i)} />
});

const createHourMarkers = () => {
  const markers = range(0, 8).map(i =>
    <div key={i} className="clock-marker clock-hour-marker clock-hour-marker-round" />
  );

  return append([
    <div key={8} className="clock-marker clock-hour-marker clock-hour-marker-triangle" />,
    <div key={9} className="clock-marker clock-hour-marker clock-hour-marker-baton" />,
    <div key={10} className="clock-marker clock-hour-marker clock-hour-marker-baton" />
  ], markers);
}

const Clock = ({ hours, minutes, seconds }) => (
  <div className="clock">
    {createHourMarkers()}
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
