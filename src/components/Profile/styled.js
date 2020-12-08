import styled, { css } from "styled-components";

export const UserH1 = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tab = styled.button`
  font-size: 25px;
  margin-left: 20px;
  cursor: pointer;
  color: #474f58;
  background-color: transparent;
  font-family: Darker Grotesque;
  border: none;
  outline: none;

  ${(props) => {
    if (props.isActive) {
      return css`
        border-bottom: 2px solid #474f58;
      `;
    }
  }}
`;

export const SectionContainer = styled.div`
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;

export const DetailWrapper = styled.div`
  border: 1px solid #474f58;
  width: 200px;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: scroll;
  will-change: transform;
`;

export const About = styled.div`
  border: 1px solid #474f58;
  width: 300px;
  height: 150px;
`;

export const DataType = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const DetailData = styled.div`
  margin: 0;
  font-family: Darker Grotesque;
  font-size: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatchButton = styled.div`
  font-size: 25px;
  margin-left: 20px;
  cursor: pointer;
  color: #474f58;
  background-color: transparent;
  font-family: Darker Grotesque;
  outline: none;
  border: 1px solid #474f58;
  padding: 5px 50px;
  margin: 20px;
  font-weight: bold;

  &:hover {
    color: #ffeebc;
    background-color: #474f58;
  }
`;
