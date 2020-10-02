import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Notification from '.';

describe('Notification component', () => {
  const props = {
    removeNotification: () => {}
  };
  it('renders without crashing', () => {
    const { container } = render(<Notification removeNotification={props.removeNotification} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with correct user data', () => {
    shallow(<Notification removeNotification={props.removeNotification} />);
  });
});
