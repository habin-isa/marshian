import React from 'react';
import * as S from './styles';
import ActiveIcon from '../../assets/active.png';
import InactiveIcon from '../../assets/inactive.png';
import CapsuleIcon from '../../assets/capsule.png';
import CrewIcon from '../../assets/crew.png';
import PercentageIcon from '../../assets/percentage.png';
import MoneyIcon from '../../assets/money.png';
import { object, bool } from 'prop-types';

const ListItem = ({ vessel, dragonsActive }) => {
  return (
    <S.Wrapper>
      <S.TopContainer>
        <S.Container>
          <S.VesselImg src={vessel.flickr_images[0]} />
          <S.TitleContainer>
            <S.Title>{vessel.name || vessel.rocket_name}</S.Title>
            <S.Subtitle>First flight: {vessel.first_flight}</S.Subtitle>
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
        </S.TagsContainer>
      </S.TopContainer>
    </S.Wrapper>
  );
};

export default ListItem;

ListItem.propTypes = {
  vessel: object,
  dragonsActive: bool.isRequired
};

ListItem.defaultProps = {
  vessel: {}
};
