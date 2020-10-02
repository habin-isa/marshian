import React from 'react';
import * as S from './styles';

import TitleContainer from '../components/TitleContainer';
import ListContainer from '../components/ListContainer';

const App = () => {
  return (
    <S.Wrapper>
      <TitleContainer />
      <ListContainer />
    </S.Wrapper>
  );
};

export default App;
