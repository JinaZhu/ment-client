import React, { useState } from "react";

import { SignInContainer, Form, H1 } from "./styled";
import { Button, Input, PageContainer } from "../../globalStyles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageContainer>
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
        <Button>Sign In</Button>
      </Form>
    </PageContainer>
  );
};

export default SignIn;
