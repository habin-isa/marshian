import React from 'react';
import * as S from './styles';

import UfoImg from '../../assets/ufo.png';

const TitleContainer = ({ handleButtonClick }) => {
  const githubUrl = 'https://github.com/habin-isa/marshian';
  return (
    <S.Wrapper>
      <S.NavbarContainer>
        <S.CompanyTitle>marshian</S.CompanyTitle>
        <S.Link href={githubUrl}>Githab repo</S.Link>
      </S.NavbarContainer>
      <S.Container>
        <S.TextContainer>
          <S.Title>The smart way to buy spacecraft insurance</S.Title>
          <S.Subtitle>Everything you need to know for your first capsule cover</S.Subtitle>
          <S.Button onClick={handleButtonClick}>Prepare for lift off</S.Button>
        </S.TextContainer>
        <S.Image src={UfoImg} alt="ufo-img" />
      </S.Container>
    </S.Wrapper>
  );
};

export default TitleContainer;
