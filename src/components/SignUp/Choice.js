import React from "react";

import {
  ChoiceContainer,
  H1,
  SelectionButton,
  Underscore,
  RedirectLink,
} from "./styled";

const Choice = ({ setDisplayMentee, setDisplayMentor }) => {
  return (
    <ChoiceContainer>
      <H1>
        Sign Up as <Underscore>_</Underscore>
      </H1>
      <div>
        <SelectionButton
          onClick={() => setDisplayMentee(true)}
          borderActive={"left"}
        >
          Mentee
        </SelectionButton>
        <SelectionButton
          onClick={() => setDisplayMentor(true)}
          borderActive={"right"}
        >
          Mentor
        </SelectionButton>
      </div>
      <RedirectLink to="/signIn">
        <p>I have an account</p>
      </RedirectLink>
    </ChoiceContainer>
  );
};

export default Choice;
