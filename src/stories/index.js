import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import App from '../App';
import Clock from '../components/clock';

storiesOf('App', module)
  .add('beer o\'clock', () => (
    <App />
  ))

storiesOf('Clock', module)
  .add('breakfast time', () => (
    <Clock hours={7} minutes={0} seconds={15} />
  ))
  .add('lunch time', () => (
    <Clock hours={12} minutes={55} seconds={15} />
  ))
  .add('dinner time', () => (
    <Clock hours={7} minutes={45} seconds={5} />
  ))
  .add('bed time', () => (
    <Clock hours={12} minutes={55} seconds={10} />
  ));
