import React from "react";

import { H1, PageContainer } from "../../globalStyles";
import { RedirectLink } from "./styled";

const SignInSuccess = () => {
  return (
    <PageContainer>
      <H1>Welcome to Ment</H1>
      <RedirectLink to="/signIn">Sign in here</RedirectLink>
    </PageContainer>
  );
};

export default SignInSuccess;
