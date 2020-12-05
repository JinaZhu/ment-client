import React from "react";

import { ChoiceContainer, SelectionButton, RedirectLink } from "./styled";
import { Underscore, PageContainer, H1 } from "../../globalStyles";

const Choice = ({ setDisplayMentee, setDisplayMentor }) => {
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default Choice;
