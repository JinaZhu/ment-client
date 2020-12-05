import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const ChoiceContainer = styled.div`
  min-height: 90vh;
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

export const RedirectLink = styled(Link)`
  text-decoration: none;
  color: #474f58;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 20px 10%;
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

export const BackButtonContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 10%;
`;

export const Back = styled.button`
  border: none;
  background-color: transparent;
  color: #474f58;
  font-size: 25px;
  font-family: "Darker Grotesque", sans-serif;
  outline: none;
  cursor: pointer;
`;

export const Arrow = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Choice = styled.div`
  font-size: 30px;
  font-family: "Darker Grotesque", sans-serif;
  padding: 10px;
  border: 1px solid #474f58;
  margin: 5px;
  width: auto;
  cursor: pointer;

  ${(props) => {
    if (props.isActive) {
      return css`
        color: #ffeebc;
        background-color: #474f58;
      `;
    }
  }}

  :hover {
    color: #ffeebc;
    background-color: #474f58;
  }
`;

export const Question = styled.p`
  font-size: 30px;
  font-family: "Darker Grotesque", sans-serif;
`;

export const Textarea = styled.textarea`
  color: #474f58;
  border: 1px solid #474f58;
  background-color: transparent;
  font-family: "Darker Grotesque", sans-serif;
  font-size: 30px;
  outline: none;
  width: 350px;
  height: 100px;
  margin-bottom: 25px;
`;

export const SignUpButton = styled.button`
  color: #474f58;
  border: 1px solid #474f58;
  background-color: transparent;
  font-family: "Darker Grotesque", sans-serif;
  font-size: 30px;
  outline: none;
  padding: 0 15px;
  cursor: pointer;

  :hover {
    color: #ffeebc;
    background-color: #474f58;
  }
`;
