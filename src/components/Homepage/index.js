import React from "react";
import carolina_img from './images/carolina_img.jpeg';
import jina_img from './images/jina_img.jpeg';
import kim_img from './images/kim_img.jpeg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';
import portfolio from './images/link.svg';
import { H1, PageContainer, Underscore } from "../../globalStyles";
import {
  InfoContainer,
  WhyWeMadeThisAppDiv,
  WhyWeMadeThisAppText,
  ReasonsText,
  EngineerInfoDiv,
  MeetTheMakersDiv,
  MeetTheMakersText,
  DescriptionContainer,
  PicDiv,
  PictureStyling,
  DescriptionAndSocialDiv,
  DescriptionDiv,
  SocialMediaLogosDiv,
  Logo
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
          <br />
          <br />
          One of the many lessons they've learned as Software Engineers is that there are multiple ways to get to a solution. Like all problems, the solution can always be accomplished with the help of others. By creating this platform, these engineers hope to connect their users with people from a variety of different backgrounds, creating a more understanding and collaborative environment. To get the most out of an experience is to broaden our horizons and open our minds to endless possibilities. By having the opportunity to connect with someone new, Carolina, Jina, and Kim hope Ment_ can do this for you! 
        </ReasonsText>
      </InfoContainer>
      <EngineerInfoDiv>
        <MeetTheMakersDiv>
          <MeetTheMakersText>Meet The Makers</MeetTheMakersText>
        </MeetTheMakersDiv>
        <DescriptionContainer>
          <DescriptionAndSocialDiv>
          <PicDiv>
            <PictureStyling src={carolina_img} alt="Carolina" />
          </PicDiv>
          <SocialMediaLogosDiv>
            <a href="https://www.linkedin.com/in/carolina-trofimov/">
              <Logo src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/carolina-trofimov">
              <Logo src={github} alt="Github" />
            </a>
          </SocialMediaLogosDiv>
          </DescriptionAndSocialDiv>
          <DescriptionDiv>
          Carolina is a Brazilian producer and actress turned software engineer, interested in the intersection of technology and human interactions. 
          In 2020 she graduated from Hackbright and found in this new path a career where she can be creative. Where she can be always growing and learning.
          </DescriptionDiv>
        </DescriptionContainer>
        <p />
        <DescriptionContainer>
          <DescriptionAndSocialDiv>
          <PicDiv>
            <PictureStyling src={jina_img} alt="Jina" />
          </PicDiv>
          <SocialMediaLogosDiv>
            <a href="https://www.linkedin.com/in/jina-zhu-459899ba/">
              <Logo src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/JinaZhu">
              <Logo src={github} alt="Github" />
            </a>
            <a href="https://jinazhu.github.io/portfolio/">
              <Logo src={portfolio} alt="Portfolio" />
            </a>
          </SocialMediaLogosDiv>
          </DescriptionAndSocialDiv>
          <DescriptionDiv>
          Jina is a graduate from Hackbright. Previously a copywriter, she transitioned from writing stories to code. She loves building frontend applications and watching it come to life, but is focusing on backend work to become a well rounded full-stack engineer. 
          </DescriptionDiv>
        </DescriptionContainer>
        <p />
        <DescriptionContainer>
          <DescriptionAndSocialDiv>
          <PicDiv>
            <PictureStyling src={kim_img} alt="Kim" />
          </PicDiv>
          <SocialMediaLogosDiv>
          <a href="https://www.linkedin.com/in/kimberlymchuc/">
              <Logo src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/kmchuc">
              <Logo src={github} alt="Github" />
            </a>
          </SocialMediaLogosDiv>
          </DescriptionAndSocialDiv>
          <DescriptionDiv>
            Kim is a passionate baker and avid thrifter. She previously worked as an EMT and discovered her passion for problem solving and technology, leading to her graduation from Hackbright Academy. Her interests focused on backend engineering, but has lately become very passionate about learning and using frontend development. Her abilities to learn at a fast pace has allowed her to discover new concepts during quarantine. 
          </DescriptionDiv>
        </DescriptionContainer>
      </EngineerInfoDiv>
    </div>  
  );
};

export default Homepage;
