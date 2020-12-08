import React, { useState } from "react";

import { PageContainer } from "../../globalStyles";
import { UserH1, Tabs, Tab } from "./styled";
import UserInfo from "./UserInfo";

const Profile = () => {
  const [userTab, setUserTab] = useState(false);

  return (
    <PageContainer>
      <Tabs>
        <UserH1>User Profile</UserH1>
        <Tab>User Info</Tab>
        <Tab>Match</Tab>
      </Tabs>
      {userTab && <UserInfo userTab={userTab} />}
      {!userTab && <UserInfo userTab={userTab} />}
    </PageContainer>
  );
};

export default Profile;
