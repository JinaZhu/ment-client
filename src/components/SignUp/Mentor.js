import React, { useState } from "react";
import {
  ChoiceContainer,
  Form,
  Input,
  H1,
  BackButtonContainer,
  Back,
  Arrow,
} from "./styled";
import arrow from "../../images/arrow-left.svg";

const Mentor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(name);

  return (
    <ChoiceContainer>
      <BackButtonContainer>
        <Back>
          <Arrow src={arrow} width={25} />
          Back to selection
        </Back>
      </BackButtonContainer>
      <H1>Becoming a mentor</H1>
      <Form>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
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
      </Form>
    </ChoiceContainer>
  );
};

export default Mentor;
