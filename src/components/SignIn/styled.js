import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SignInContainer = styled.div`
  min-height: 90vh;
  ${flexCenter}
`;

export const Form = styled.form`
  ${flexCenter}
`;

export const H1 = styled.h1`
  font-size: 50px;
`;

export const Input = styled.input`
  color: #474f58;
  border: none;
  border-bottom: 1px solid #474f58;
  background-color: transparent;
  font-family: "Darker Grotesque", sans-serif;
  font-size: 30px;
  outline: none;
  width: 300px;
  margin-bottom: 25px;
  text-align: center;
`;

export const SignInButton = styled.button`
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
