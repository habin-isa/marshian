import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 388px;
  // width: 100%
  border: 6px solid #112035;
  height: 300px;
  overflow: scroll;
  padding: 50px 35px 30px 35px;
  position: relative;
  top: -27px;
  border-radius: 16px;
  overflow: scroll;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    width: 288px;
  }
  @media screen and (max-width: 390px) {
    height: 90px;
    width: 218px;
  }
  @media screen and (max-width: 280px) {
    height: 130px;
    width: 170px;
  }
`;

export const Description = styled.div`
  color: #112035;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-align: justify;
`;

export const Image = styled.img`
  width: 20em;
  margin: 1em;
  @media screen and (max-width: 390px) {
    width: 10em;
    margin: 5px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Figure = styled.h2`
  font-weight: bold;
  font-size: 16px;
  color: #ff4e75;
  margin-right: 5px;
`;

export const Card = styled.div`
  background-color: #f8f9fa;
  height: 150px;
  text-align: center;
  color: #112035;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 3em;
  justify-content: flex-end;
  font-size: 12px;
  margin: 10px;
`;

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 35px;
  text-align: center;
  border-radius: 20px;
  color: white;
  background-color: #112035;
  font-size: 14px;
  width: fit-content;
  justify-content: center;
  padding: 2px 20px;
  font-size: 12px;
  margin: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

export const TagIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Caret = styled.div`
  text-align: center;
  color: #ff4e75;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
