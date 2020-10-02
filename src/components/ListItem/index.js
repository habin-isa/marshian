import React, { useState } from 'react';
import * as S from './styles';

import Details from './Details';
import ActiveIcon from '../../assets/active.png';
import InactiveIcon from '../../assets/inactive.png';
import CapsuleIcon from '../../assets/capsule.png';
import CrewIcon from '../../assets/crew.png';
import PercentageIcon from '../../assets/percentage.png';
import MoneyIcon from '../../assets/money.png';
import emptyLikeIcon from '../../assets/empty-like.svg';
import fullLikeIcon from '../../assets/full-like.svg';
import { object, bool } from 'prop-types';

const ListItem = ({ vessel, dragonsActive, handleLikeCount, handleLikeTitle }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [itemLiked, setItemLiked] = useState(false);

  const handleLikeClick = () => {
    setItemLiked(!itemLiked);
    if (itemLiked) {
      handleLikeCount(-1);
    } else {
      handleLikeCount(1);
    }
  };
  return (
    <S.Wrapper>
      <S.TopContainer>
        {itemLiked ? (
          <S.HeartIcon
            src={fullLikeIcon}
            onClick={() => {
              handleLikeClick();
              handleLikeTitle('', vessel.id);
            }}
          />
        ) : (
          <S.HeartIcon
            src={emptyLikeIcon}
            onClick={() => {
              handleLikeClick();
              handleLikeTitle(vessel.name || vessel.rocket_name, vessel.id);
            }}
          />
        )}
        <S.Container onClick={() => setShowDetails(!showDetails)}>
          <S.TitleContainer>
            <S.VesselImg src={vessel.flickr_images[0]} alt={vessel.id} />
            <S.Text>
              <S.Title>{vessel.name || vessel.rocket_name}</S.Title>
              <S.Subtitle>First flight: {vessel.first_flight}</S.Subtitle>
            </S.Text>
          </S.TitleContainer>
          <S.Icon src={vessel.active ? ActiveIcon : InactiveIcon} />
        </S.Container>
        <S.TagsContainer>
          {dragonsActive === true ? (
            <S.Tag>
              <S.TagIcon src={CapsuleIcon} />
              Capsule
            </S.Tag>
          ) : (
            <S.Tag>
              <S.TagIcon src={PercentageIcon} />
              Success rate: {vessel.success_rate_pct}%
            </S.Tag>
          )}
          {dragonsActive === true ? (
            <S.Tag>
              <S.TagIcon src={CrewIcon} />
              Crew capacity: {vessel.crew_capacity}
            </S.Tag>
          ) : (
            <S.Tag>
              <S.TagIcon src={MoneyIcon} />${vessel.cost_per_launch}
            </S.Tag>
          )}
          {showDetails === false ? (
            <S.Caret onClick={() => setShowDetails(true)}>▼</S.Caret>
          ) : (
            <S.Caret onClick={() => setShowDetails(false)}>▲</S.Caret>
          )}
        </S.TagsContainer>
      </S.TopContainer>
      {showDetails === true && (
        <div>
          {' '}
          <Details vessel={vessel} dragonsActive={dragonsActive} handleCaret={() => setShowDetails(!showDetails)} />
        </div>
      )}
    </S.Wrapper>
  );
};

export default ListItem;

ListItem.propTypes = {
  vessel: object,
  dragonsActive: bool
};

ListItem.defaultProps = {
  vessel: {},
  dragonsActive: true
};
