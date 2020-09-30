import axios from 'axios';

/**
 * @param {string} url url for spaceX API endpoint
 * @param {string} params search query
 */

const url = 'https://api.spacexdata.com/v3/';

export const getSpaceData = async (params) => {
  const response = await axios.get(url + params);
  console.log('data', response.data);
  return response;
};
