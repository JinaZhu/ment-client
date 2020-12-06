import React from "react";

import { NavContainer, Logo, LinkContainer, StyledLink } from "./styled";

const Nav = ({ routes }) => {
  return (
    <NavContainer>
      <Logo>Ment_</Logo>
      <LinkContainer>
        {routes.map((route) => {
          return (
            <StyledLink key={route[0]} to={route[1]}>
              {route[0]}
            </StyledLink>
          );
        })}
      </LinkContainer>
    </NavContainer>
  );
};

export default Nav;
