import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Notification from '.';

describe('Notification component', () => {
  const props = {
    user: {
      user: {
        key: '/recommends/',
        name: 'Mixcloud Recommends',
        pictures: {
          large: 'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/f/c/5/b/bfd1-7a83-41c5-bbaf-1c6253f7966b'
        },
        url: 'url: "https://www.mixcloud.com/recommends/'
      }
    }
  };
  it('renders without crashing', () => {
    const { container } = render(<Notification user={props.user} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with correct user data', () => {
    shallow(<Notification user={props.user} />);
  });
});
