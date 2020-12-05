import React, { useState } from "react";
import Choice from "./Choice";
import Mentor from "./Mentor";

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
    <Mentor
      setDisplay={displayMentor ? setDisplayMentor : setDisplayMentee}
      knowledgeQuestion={
        displayMentor ? knowledgeMentorQuestion : knowledgeMenteeQuestion
      }
      isMentor={displayMentor}
      type={displayMentor ? "Mentor" : "Mentee"}
    />
  );
};

export default SignUp;
