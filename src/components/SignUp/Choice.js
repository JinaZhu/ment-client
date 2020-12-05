import React from "react";
import { ChoiceContainer, H1, SelectionButton, Underscore } from "./styled";

const Choice = () => {
  return (
    <ChoiceContainer>
      <H1>
        Sign Up as <Underscore>_</Underscore>
      </H1>
      <div>
        <SelectionButton borderActive={"left"}>Mentee</SelectionButton>
        <SelectionButton borderActive={"right"}>Mentor</SelectionButton>
      </div>
      <p>I have an account</p>
    </ChoiceContainer>
  );
};

export default Choice;
