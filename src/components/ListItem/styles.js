import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	// background-color: #433756;
	margin: 1em;
	// width: 9em;
	// height: 9em;
	border-radius: 20px;
	color: white;
	// padding: 4em;
	// visibility: visible;
	// animation: ${fadeIn} 500ms ease-in;
  // transition: visibility 500ms ease-in;
  letter-spacing: 1px;
  position: relative;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  margin: 10px;
  height: 140px;
  width: 350px;
  @media screen and (max-width: 416px) {
    width: 300px;
  }
  padding: 1.5em 2em;
  justify-content: space-between;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
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
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 2px;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

export const Subtitle = styled.span`
  text-transform: capitalize;
  font-weight: 100;
  font-size: 12px;
  color: #828282;
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const TagIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Tag = styled.div`
  background-color: white;
  height: 35px;
  text-align: center;
  border-radius: 20px;
  border: 2px solid #f2f2f2;
  color: #828282;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  display: flex;
  align-items: center;
  min-width: 45%;
  width: fit-content;
  justify-content: center;
  padding: 2px 10px;
  font-size: 12px;
  margin: 10px;
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

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  height: 35px;
  text-align: center;
  border-radius: 20px;
  border: 2px solid #f2f2f2;
  color: #828282;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  min-width: 45%;
  width: fit-content;
  justify-content: center;
  padding: 2px 10px;
  font-size: 12px;
  margin: 10px;
  &:hover {
    opacity: 0.8;
  }
`;
