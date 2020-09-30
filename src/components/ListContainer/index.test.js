import React from 'react';
import { shallow } from 'enzyme';
import ListContainer from '.';

describe('ListContainer component', () => {
  it('renders without crashing', () => {
    shallow(<ListContainer />);
  });
});
