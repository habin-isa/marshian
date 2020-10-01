import mockAxios from 'axios';

import * as url from './index';

const mockResponse = [
  [
    {
      id: 'dragon1',
      name: 'Dragon 1',
      type: 'capsule',
      active: true,
      crew_capacity: 0,
      sidewall_angle_deg: 15,
      orbit_duration_yr: 2,
      dry_mass_kg: 4200,
      dry_mass_lb: 9300,
      first_flight: '2010-12-08',
      heat_shield: {},
      thrusters: [],
      launch_payload_mass: { kg: 6000, lb: 13228 },
      launch_payload_vol: { cubic_meters: 25, cubic_feet: 883 },
      return_payload_mass: { kg: 3000, lb: 6614 },
      return_payload_vol: { cubic_meters: 11, cubic_feet: 388 },
      pressurized_capsule: { payload_volume: { cubic_meters: 11, cubic_feet: 388 } },
      trunk: {},
      height_w_trunk: { meters: 7.2, feet: 23.6 },
      diameter: { meters: 3.7, feet: 12 },
      flickr_images: [],
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_Dragon',
      description:
        'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).'
    }
  ]
];

describe('getSpaceData service', () => {
  it.skip('returns correct data from get call', async () => {
    const mockPromise = Promise.resolve(mockResponse[0]);
    jest.spyOn(url, 'getSpaceData').mockImplementation(() => mockPromise);
  });
  it('should call a get request', (done) => {
    url.getSpaceData('./test', {}).then((response) => {
      expect(mockAxios.request).toHaveBeenCalledWith({
        method: 'get',
        url: url
      });
      expect(response.status).toEqual(200);
    });
    done();
  });
});
