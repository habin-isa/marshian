import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';

import ListItem from '../ListItem';
import { getSpaceData } from '../../services';

const ListContainer = () => {
  const [spaceData, setSpaceData] = useState([]);
  const [dragonsActive, setDragonsActive] = useState(true);

  const loadSpaceData = useCallback(async (params) => {
    try {
      const response = await getSpaceData(params);
      setSpaceData(response.data);
    } catch (error) {
      console.log('error fetching space data');
    } finally {
      console.log('loadSpaceData has completed for', params);
    }
  });

  useEffect(() => {
    loadSpaceData('dragons');
  }, []);

  const handleTabClick = (params) => {
    loadSpaceData(params);
    params === 'dragons' ? setDragonsActive(true) : setDragonsActive(false);
  };

  const renderedVessels = () =>
    spaceData.map((vessel, i) => <ListItem vessel={vessel} key={i} dragonsActive={dragonsActive} />);

  return (
    <S.Wrapper>
      <S.Tabs>
        <S.Tab active={dragonsActive} onClick={() => handleTabClick('dragons')}>
          Dragons
        </S.Tab>
        <S.Tab active={dragonsActive} onClick={() => handleTabClick('rockets')}>
          Rockets
        </S.Tab>
      </S.Tabs>
      {spaceData.length > 0 ? <div>{renderedVessels()}</div> : <div />}
    </S.Wrapper>
  );
};

export default ListContainer;
