import styled from "styled-components";

export const UserH1 = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tab = styled.p`
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
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
