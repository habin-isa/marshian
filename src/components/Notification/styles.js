import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    bottom: 0;
  }

  to {
    opacity: 1;
    bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  z-index: 9999;
  padding: 1em;
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05), 0px 0px 2px rgba(0, 0, 0, 0.3), 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: absolute;
  visibility: visible;
  animation: ${fadeIn} 800ms ease-in;
  transition: visibility 800ms ease-in;
  bottom: 10px;
  @media screen and (max-width: 430px) {
    width: 90%;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 15.75px;
  line-height: 21px;
  color: #1e2337;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (max-width: 430px) {
    font-size: 12.25px;
    line-height: 17px;
  }
`;

export const Subtitle = styled.span`
  font-size: 12.25px;
  line-height: 17px;
  color: #636674;
  @media screen and (max-width: 430px) {
    font-size: 12px;
    line-height: 10px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const CrossIcon = styled.img`
  padding: 10.5px;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
`;

export const ArrowIcon = styled.img`
  width: 40px;
  margin: 10.5px;
  padding-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
