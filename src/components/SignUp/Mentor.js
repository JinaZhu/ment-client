import React, { useState } from "react";
import {
  Form,
  BackButtonContainer,
  Back,
  Arrow,
  Choice,
  ChoicesContainer,
  Question,
  Textarea,
} from "./styled";
import arrow from "../../images/arrow-left.svg";
import { Input, H1, PageContainer, Button } from "../../globalStyles";

const identities = [
  "Hispanic or Latinx",
  "Middle Eastern or Northern African",
  "Black or African American",
  "Asian",
  "White / Caucasian",
  "Native Hawaiian or Pacific Islander",
  "Indigenous Peoples",
  "A race, ethnicity, or origin not shown",
];

const genders = [
  "Agender",
  "Genderfluid",
  "Genderqueer",
  "Female",
  "Male",
  "Gender non-conforming",
  "Non-binary",
  "I choose to not disclose",
];

const knowledges = [
  "Coding Challenges",
  "Cultural Prep",
  "Front-end",
  "Back-end",
  "Interview Prep",
  "Everything and anything",
];
const Mentor = ({ setDisplay, knowledgeQuestion, isMentor, type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ethnic, setEthnic] = useState("");
  const [gender, setGender] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [level, setLevel] = useState("");
  const [Company, setCompany] = useState("");
  const [about, setAbout] = useState("");

  function CheckSelected(selected, option) {
    if (selected === option) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <PageContainer>
      <BackButtonContainer>
        <Back onClick={() => setDisplay(false)}>
          <Arrow src={arrow} width={25} />
          Back to selection
        </Back>
      </BackButtonContainer>
      <H1>Becoming a {type}</H1>
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
        <div>
          <Question>
            What your racial, ethnic, and origin you identity with you?
          </Question>
          <ChoicesContainer>
            {identities.map((identity) => {
              return (
                <Choice
                  key={identity}
                  isActive={CheckSelected(ethnic, identity)}
                  onClick={() => setEthnic(identity)}
                >
                  {identity}
                </Choice>
              );
            })}
          </ChoicesContainer>
        </div>
        <div>
          <Question>What gender do you most closely identify with?</Question>
          <ChoicesContainer>
            {genders.map((choice) => {
              return (
                <Choice
                  key={choice}
                  isActive={CheckSelected(gender, choice)}
                  onClick={() => setGender(choice)}
                >
                  {choice}
                </Choice>
              );
            })}
          </ChoicesContainer>
        </div>
        <div>
          <Question>{knowledgeQuestion}</Question>
          <ChoicesContainer>
            {knowledges.map((choice) => {
              return (
                <Choice
                  key={choice}
                  isActive={CheckSelected(knowledge, choice)}
                  onClick={() => setKnowledge(choice)}
                >
                  {choice}
                </Choice>
              );
            })}
          </ChoicesContainer>
        </div>
        <div>
          <Question>What is your level of experience?</Question>
          <Input
            type="text"
            year={"50px"}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
        {isMentor && (
          <div>
            <Question>Current Company</Question>
            <Input type="text" onChange={(e) => setCompany(e.target.value)} />
          </div>
        )}
        <div>
          <Question>
            Tell us about yourself. Why did you want to learn to code? What
            inspire you? What are your goals? Anything and everything, we want
            to know!
          </Question>
          <Textarea onChange={(e) => setAbout(e.target.value)} />
        </div>
        <Button>Sign Up</Button>
      </Form>
    </PageContainer>
  );
};

export default Mentor;
