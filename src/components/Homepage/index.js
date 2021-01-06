import React from "react";

import { H1, PageContainer, Underscore } from "../../globalStyles";
import {
  InfoContainer,
  WhyWeMadeThisAppDiv,
  WhyWeMadeThisAppText,
  ReasonsText
} from "./styled";

const Homepage = () => {
  return (
    <div>
      <PageContainer>
        <H1>
          Meet your Ment<Underscore>_</Underscore>
        </H1>
      </PageContainer>
      <InfoContainer>
        <WhyWeMadeThisAppDiv>
          <WhyWeMadeThisAppText>Why We Made This App</WhyWeMadeThisAppText>
        </WhyWeMadeThisAppDiv>
        <ReasonsText>
          Diveristy has allowed companies within the tech industry to become more and more inclusive within the past years. As graduates from Hackbright Academy, Carolina, Jina, and Kim come from nontradiational backgrounds as Software Engineers. From their experiences along their job hunting journeys during COVID19 times, they've learned that the most important thing is to stay connected. Either it be with a family member, friend, or member of the engineering community. Ment_ is a product of their brainstorming sessions as a way to stay connected during this pandemic.

          One of the many lessons they've learned as Software Engineers is that there are multiple ways to get to a solution. Like all problems, the solution can always be accomplished with the help of others. By creating this platform, these engineers hope to connect their users with people from a variety of different backgrounds, creating a more understanding and collaborative environment. To get the most out of an experience is to broaden our horizons and open our minds to endless possibilities. By having the opportunity to connect with someone new, Carolina, Jina, and Kim hope Ment_ can do this for you! 
        </ReasonsText>
      </InfoContainer>
    </div>  
  );
};

export default Homepage;
