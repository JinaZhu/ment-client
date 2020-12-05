import React, { useState } from "react";

import { SignInContainer, Form, H1, Input, SignInButton } from "./styled";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SignInContainer>
      <H1>Sign In</H1>
      <Form>
        <Input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <SignInButton>Sign In</SignInButton>
      </Form>
    </SignInContainer>
  );
};

export default SignIn;
