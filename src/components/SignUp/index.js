import React, { useState } from "react";
import Choice from "./Choice";
import Mentor from "./Mentor";

const SignUp = () => {
  const [displayMentor, setDisplayMentor] = useState(true);
  const [displayMentee, setDisplayMentee] = useState(false);

  return (
    <div>
      {!displayMentor && !displayMentee && <Choice />}
      {displayMentor && <Mentor />}
    </div>
  );
};

export default SignUp;
