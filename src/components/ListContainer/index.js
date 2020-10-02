import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';

import LikeIcon from '../../assets/full-like.svg';
import Notification from '../Notification';
import ListItem from '../ListItem';
import { getSpaceData } from '../../services';

const ListContainer = () => {
  const [spaceData, setSpaceData] = useState([]);
  const [dragonsActive, setDragonsActive] = useState(true);
  const [showNotification, setShowNotification] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [likedList, setLikedList] = useState([]);

  const loadSpaceData = useCallback(async (params) => {
    try {
      const response = await getSpaceData(params);
      setSpaceData(response.data);
    } catch (error) {
      console.log('error fetching space data');
    } finally {
      console.log('loadSpaceData has completed for', params);
    }
  }, []);

  useEffect(() => {
    loadSpaceData('dragons');
  }, []);

  const handleTabClick = (params) => {
    loadSpaceData(params);
    params === 'dragons' ? setDragonsActive(true) : setDragonsActive(false);
  };

  const renderedVessels = () =>
    spaceData.map((vessel, i) => (
      <ListItem
        vessel={vessel}
        key={i}
        dragonsActive={dragonsActive}
        handleLikeCount={handleLikeCount}
        handleLikeTitle={handleLikeTitle}
      />
    ));

  const removeNotification = () => {
    setShowNotification(false);
  };

  const handleLikeCount = (val) => {
    setLikeCount(likeCount + val);
  };

  const handleLikeTitle = (title, id) => {
    const trimmedLikeTitle = title.trim();
    if (trimmedLikeTitle.length > 0) {
      setLikedList([...likedList, trimmedLikeTitle]);
    }
  };

  return (
    <S.Wrapper>
      {showNotification === true && <Notification removeNotification={removeNotification} />}
      <S.Instructions>Filter results by clicking on tabs:</S.Instructions>
      <S.Tabs>
        <S.Tab active={dragonsActive} onClick={() => handleTabClick('dragons')}>
          Dragons
        </S.Tab>
        <S.Tab active={dragonsActive} onClick={() => handleTabClick('rockets')}>
          Rockets
        </S.Tab>
      </S.Tabs>
      <S.HeartContainer>
        <S.HeartIcon src={LikeIcon} alt="like-icon" />
        {likeCount} likes
      </S.HeartContainer>
      {spaceData.length > 0 && <div>{renderedVessels()}</div>}
    </S.Wrapper>
  );
};

export default ListContainer;
