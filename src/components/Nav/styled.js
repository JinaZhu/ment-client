import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background-color: #ffeebc;
`;

export const Logo = styled.h2`
  font-size: 30px;
  margin-left: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #474f58;
  font-size: 20px;
  margin: 0 15px;

  &:hover {
    border-bottom: 1px solid #474f58;
  }
`;
