import React from "react";

import UserInfo from "./UserInfo";
import { SectionContainer, DataType, MatchButton } from "./styled";

const Match = ({ matchId, userTab }) => {
  if (matchId) {
    return <UserInfo userTab={userTab} />;
  }
  return (
    <SectionContainer>
      <DataType>You haven't match with anyone yet</DataType>
      <MatchButton>Match</MatchButton>
    </SectionContainer>
  );
};

export default Match;
