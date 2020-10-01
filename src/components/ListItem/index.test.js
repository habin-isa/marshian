import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import ListItem from '.';

describe('ListItem component', () => {
  const props = {
    vessel: {
      name: 'Dragon 1',
      active: true,
      flickr_images: ['https://i.imgur.com/9fWdwNv.jpg'],
      first_flight: '2006-08-17',
      success_rate_pct: 80,
      crew_capacity: 0
    },
    dragonsActive: true
  };
  it('renders with correct data', () => {
    const { container } = render(<ListItem vessel={props.vessel} dragonsActive={props.dragonsActive} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
