import React, { useState } from "react";
import Choice from "./Choice";
import Ment from "./Ment";
import SignInSuccess from "./SignInSuccess";

const knowledgeMentorQuestion =
  "Of the choices below, which option are you most knowledgable on?";

const knowledgeMenteeQuestion = "What do you need mentorship in?";

const SignUp = () => {
  const [displayMentor, setDisplayMentor] = useState(false);
  const [displayMentee, setDisplayMentee] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  if (signUpSuccess) {
    return <SignInSuccess />;
  }

  if (!displayMentor && !displayMentee) {
    return (
      <Choice
        setDisplayMentor={setDisplayMentor}
        setDisplayMentee={setDisplayMentee}
      />
    );
  }

  return (
    <Ment
      setDisplay={displayMentor ? setDisplayMentor : setDisplayMentee}
      knowledgeQuestion={
        displayMentor ? knowledgeMentorQuestion : knowledgeMenteeQuestion
      }
      isMentor={displayMentor}
      type={displayMentor ? "mentor" : "mentee"}
      setSignUpSuccess={setSignUpSuccess}
    />
  );
};

export default SignUp;
