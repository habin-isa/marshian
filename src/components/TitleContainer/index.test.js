import React from 'react';
import { shallow } from 'enzyme';
import TitleContainer from '.';

describe('TitleContainer component', () => {
  it('renders without crashing', () => {
    shallow(<TitleContainer />);
  });
});
