import React from "react";

import { SectionContainer, Row, About } from "./styled";
import Detail from "./Detail";

const UserInfo = ({ userTab }) => {
  const isMentorPage = userTab ? "Seeking help in" : "Can help in";
  return (
    <SectionContainer>
      <Row>
        <Detail type={"Name"} data={"Jina Zhu"} />
      </Row>
      <h3>Contact Info</h3>
      <Row>
        <Detail type={"Email"} data={"jinazhu87@gmail.com"} />
        <Detail type={"Phone Number"} data={"(342)342-4543"} />
        <Detail
          type={"LinkedIn"}
          data={"https://www.linkedin.com/in/jina-zhu-459899ba/"}
        />
      </Row>
      <h3>About</h3>
      <Row>
        <Detail type={isMentorPage} data={"Back-end"} />
        <Detail type={"level of experience"} data={"1 years"} />
        {!userTab && <Detail type={"Company"} data={"Facebook"} />}
      </Row>
      <About>
        <p>Hi</p>
      </About>
    </SectionContainer>
  );
};

export default UserInfo;
