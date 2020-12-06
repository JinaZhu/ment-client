import React, { useState } from "react";
import Choice from "./Choice";
import Ment from "./Ment";

const knowledgeMentorQuestion =
  "Of the choices below, which option are you most knowledgable on?";

const knowledgeMenteeQuestion = "What do you need mentorship in?";

const SignUp = () => {
  const [displayMentor, setDisplayMentor] = useState(false);
  const [displayMentee, setDisplayMentee] = useState(false);

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
    />
  );
};

export default SignUp;
