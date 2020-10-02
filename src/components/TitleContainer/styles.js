import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100wh;
  height: 100vh;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 5%;
`;

export const CompanyTitle = styled.h1`
  font-size: 30px;
  color: #ff4e75;
  font-weight: bold;
  font-family: 'Averia Sans Libre', cursive;
`;

export const Link = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #222;
  letter-spacing: 0.5px;
  &:hover {
    color: #ff4e75;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 0 10%;
  align-items: flex-end;
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #112035;
  letter-spacing: 0.5px;
`;

export const LinkBox = styled.a`
  text-decoration: none;
  background-color: #ff4e75;
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
  font-size: 14px;
  border: none;
  padding: 1.2em 3em;
  width: fit-content;
  letter-spacing: 0.5px;
  margin-top: 10px;
  &:hover {
    color: #ffcbd5;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  max-width: 530px;
  margin-bottom: 8px;
  font-size: 52px;
  line-height: 120%;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.div`
  font-size: 21px;
  line-height: 150%;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Image = styled.img`
  height: 230px;
  margin: 0 20px;
  @media screen and (max-width: 480px) {
    height: 60px;
    margin: 0 5px;
  }
`;
