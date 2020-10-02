import React from 'react';
import * as S from './styles';
import CrossIcon from '../../assets/close.svg';
import ArrowDown from '../../assets/down.png';
import { object, func } from 'prop-types';

const Notification = ({ removeNotification, handleArrowClick }) => {
  return (
    <S.Wrapper>
      <S.IconContainer>
        <S.ArrowIcon src={ArrowDown} alt="arrow-down-icon" onClick={handleArrowClick} />
      </S.IconContainer>
      <S.TextContainer>
        <S.Title>Hey there!</S.Title>
        <S.Subtitle>
          Welcome to Marshian, we hit the SpaceX API to cater your spacecraft needs. Please filter between 'Dragons' or
          'Rockets', clicking on the card will show more details.
        </S.Subtitle>
      </S.TextContainer>
      <S.IconContainer>
        <S.CrossIcon src={CrossIcon} alt="cross-icon" onClick={() => removeNotification()} />
      </S.IconContainer>
    </S.Wrapper>
  );
};

export default Notification;

Notification.propTypes = {
  user: object,
  removeNotification: func
};

Notification.defaultProps = {
  user: {},
  removeNotification: () => {}
};