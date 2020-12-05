import styled, { css, keyframes } from "styled-components";

export const ChoiceContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 50px;
`;

export const SelectionButton = styled.button`
  background-color: transparent;
  color: #474f58;
  font-size: 50px;
  font-family: "Darker Grotesque", sans-serif;
  border: none;
  outline: none;
  margin: 35px;
  border-bottom: 1px solid #474f58;
  cursor: pointer;
  padding-top: 0;

  &:hover {
    ${(props) => {
      if (props.borderActive === "left") {
        return css`
          border-left: 1px solid #474f58;
        `;
      } else {
        return css`
          border-right: 1px solid #474f58;
        `;
      }
    }}
  }
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
