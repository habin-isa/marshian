import React, { useState } from 'react';
import * as S from './styles';

// import ReactPageScroller from 'react-page-scroller';
import TitleContainer from '../components/TitleContainer';
import ListContainer from '../components/ListContainer';

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  return (
    <S.Wrapper>
      {/* <React.Fragment>
        <ReactPageScroller pageOnChange={handlePageChange} customPageNumber={currentPage}> */}
      <TitleContainer handleButtonClick={() => handlePageChange(1)} />
      <ListContainer handleArrowClick={() => handlePageChange(1)} />
      {/* </ReactPageScroller> */}
      {/* </React.Fragment> */}
    </S.Wrapper>
  );
};

export default App;
