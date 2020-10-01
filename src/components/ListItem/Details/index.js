import React from 'react';
import * as S from './styles';

import { object, bool } from 'prop-types';

const Details = ({ vessel, dragonsActive }) => {
  return (
    <div>
      <S.Description>
        {vessel.description}
        {vessel.active === true ? ' (Active)' : ' (Inactive)'}
      </S.Description>
      <S.Image src={vessel.flickr_images[0]} alt={vessel.id} />
      <S.Image src={vessel.flickr_images[1]} alt={vessel.id} />
      <S.CardContainer>
        {dragonsActive === true ? (
          <S.Card>
            <S.Figure>1</S.Figure>
            Heat Shield
            <S.Figure>{vessel.heat_shield.size_meters}</S.Figure>
            /m Size
            <S.Figure>{vessel.heat_shield.temp_degrees}</S.Figure>
            /degrees Temp
          </S.Card>
        ) : (
          <S.Card>
            <S.Figure>{vessel.boosters}</S.Figure>
            Boosters
            <S.Figure>{vessel.mass.kg}</S.Figure>
            /kg Mass
            <S.Figure>{vessel.stages}</S.Figure>
            Stages
          </S.Card>
        )}
        {dragonsActive === true ? (
          <S.Card>
            <S.Figure>{vessel.launch_payload_mass.kg}</S.Figure>
            /kg Launch mass
            <S.Figure>{vessel.orbit_duration_yr}</S.Figure>
            /yrs Orbit Duration
            <S.Figure>{vessel.sidewall_angle_deg}</S.Figure>
            /degrees Sidewall
          </S.Card>
        ) : (
          <S.Card>
            <S.Figure>1</S.Figure>
            First stage
            <S.Figure>{vessel.first_stage.burn_time_sec}</S.Figure>
            /sec Burn time
            <S.Figure>{vessel.first_stage.fuel_amount_tons}</S.Figure>
            /tons Fuel amount
          </S.Card>
        )}
      </S.CardContainer>
    </div>
  );
};

export default Details;

Details.propTypes = {
  vessel: object,
  dragonsActive: bool.isRequired
};

Details.defaultProps = {
  vessel: {}
};
