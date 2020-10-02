import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;

export const Instructions = styled.h1`
  font-family: 'Roboto Mono', monospace;
`;

export const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const HeartIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tab = styled.div`
  height: 40px;
  color: white;
  background-color: #ff4e75;
  cursor: pointer;
  margin: 10px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 15%;
  cusor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
