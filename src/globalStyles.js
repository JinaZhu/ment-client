import styled, { keyframes } from "styled-components";

export const H1 = styled.h1`
  font-size: 50px;
`;

export const PageContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const blink = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const Underscore = styled.span`
  animation: ${blink} 0.5s infinite ease;
`;

export const Button = styled.button`
  color: #474f58;
  border: 1px solid #474f58;
  background-color: transparent;
  font-family: "Darker Grotesque", sans-serif;
  font-size: 30px;
  outline: none;
  padding: 5px 25px;
  cursor: pointer;
  margin-top: 20px;

  :hover {
    color: #ffeebc;
    background-color: #474f58;
  }
`;

export const Input = styled.input`
  color: #474f58;
  border: none;
  border-bottom: 1px solid #474f58;
  background-color: transparent;
  font-family: "Darker Grotesque", sans-serif;
  font-size: 30px;
  outline: none;
  width: ${(props) => props.year || "300px"};
  margin-bottom: 25px;
  text-align: center;
`;
