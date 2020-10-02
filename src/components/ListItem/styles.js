import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 1em;
  border-radius: 20px;
  color: white;
  letter-spacing: 0.5px;
  position: relative;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #112035;
  width: 400px;
  height: 140px;
  padding: 20px 35px;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
  @media screen and (max-width: 390px) {
    height: 90px;
    width: 230px;
  }
  @media screen and (max-width: 280px) {
    height: 130px;
    width: 180px;
  }
  border-radius: 16px;
  justify-content: space-between;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05), 0px 0px 2px rgba(0, 0, 0, 0.3), 0px 3px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.3), 2px 3px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  z-index: 99999;
`;

export const HeartIcon = styled.img`
  width: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Caret = styled.div`
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VesselImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  @media screen and (max-width: 390px) {
    width: 35px;
    height: 35px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 2px;
  @media screen and (max-width: 390px) {
    font-size: 15px;
  }
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  @media screen and (max-width: 390px) {
    width: 25px;
    height: 25px;
    margin: 5px;
  }
`;

export const Subtitle = styled.span`
  text-transform: capitalize;
  font-size: 12px;
  @media screen and (max-width: 390px) {
    font-size: 10px;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TagIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Tag = styled.div`
  background-color: white;
  height: 25px;
  text-align: center;
  border-radius: 20px;
  border: 2px solid #f2f2f2;
  color: #828282;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1em 1em;
  font-size: 12px;
  @media screen and (max-width: 390px) {
    font-size: 8px;
    height: 20px;
    paddng: 0.1em;
  }
  @media screen and (max-width: 280px) {
    height: fit-content;
  }
`;

export const DetailsContainer = styled.div`
  background: white;
  position: absolute;
  min-height: 130px;
  width: 350px;
  padding: 2em;
  top: 200px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
