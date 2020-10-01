import styled from 'styled-components';

export const Wrapper = styled.div`
  // width: 100%;
  // height: 100vh;
  // background: #332649;
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Tab = styled.div`
  height: 60px;
  width: fit-content;
  color: white;
  border: solid 6px white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 5%;
`;
// background-color: ${({ active }) => (active === true ? '#433756' : '#CDC3DD')}
// color: ${(props) => props.inputColor || 'palevioletred'};
// background-color: ${(props) => (props.dragonsActive ? '#433756' : '#CDC3DD')}
