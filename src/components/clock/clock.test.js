import React from 'react';
import renderer from 'react-test-renderer';

import Clock from './index';

it('renders correctly', () => {
    const tree = renderer.create(
      <Clock hours={3} minutes={12} seconds={45} />
    );

    expect(tree).toMatchSnapshot();
});
