import React, { useState } from "react";

import { PageContainer } from "../../globalStyles";
import { UserH1, Tabs, Tab } from "./styled";
import UserInfo from "./UserInfo";
import Match from "./Match";

const Profile = ({ matchId }) => {
  const [userTab, setUserTab] = useState(true);
  const [matchTab, setMatchTab] = useState(false);

  function whichTab(tab) {
    if (tab === "user") {
      setUserTab(true);
      setMatchTab(false);
    } else {
      setUserTab(false);
      setMatchTab(true);
    }
  }

  return (
    <PageContainer>
      <Tabs>
        <UserH1>User Profile</UserH1>
        <Tab onClick={() => whichTab("user")} isActive={userTab}>
          User Info
        </Tab>
        <Tab onClick={() => whichTab("match")} isActive={matchTab}>
          Match
        </Tab>
      </Tabs>
      {userTab && <UserInfo userTab={userTab} />}
      {!userTab && <Match userTab={userTab} />}
    </PageContainer>
  );
};

export default Profile;
