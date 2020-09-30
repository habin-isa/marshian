import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import { getSpaceData } from '../../services';
// import { string } from 'prop-types';

const ListContainer = () => {
  const [spaceData, setSpaceData] = useState([]);

  const loadSpaceData = useCallback(async (params) => {
    try {
      const response = await getSpaceData(params);
      setSpaceData(response);
    } catch (error) {
      console.log('error fetching space data');
    } finally {
      console.log('loadSpaceData has completed');
    }
  });

  useEffect(() => {
    loadSpaceData('dragons');
  }, []);

  return <S.Wrapper>ListContainer</S.Wrapper>;
};

export default ListContainer;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
