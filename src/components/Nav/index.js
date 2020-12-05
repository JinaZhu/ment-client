import React from "react";
import { Link } from "react-router-dom";

import { NavContainer, Logo, LinkContainer, StyledLink } from "./styled";

const Nav = ({ routes, currentPage }) => {
  function CheckCurrentPage(route) {
    if (currentPage === route) {
      console.log("currentPage", currentPage);
      return true;
    } else {
      return false;
    }
  }
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
