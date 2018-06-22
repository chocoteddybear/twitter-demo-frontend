import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "flexboxgrid2";
import { Header } from "./Header";
import { MidNavBar } from "./components/MidNavBar";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import TweetTabs from "./components/TweetTabs";
// import Tweet from "./components/Tweet";
import { Tweets } from "./components/Tweets";

const MainContainer = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #fff;
`;

const ProfileImage = styled.div`
  background: url(${process.env.PUBLIC_URL + "./images/ProfileImage.png"})
    no-repeat;
  background-size: cover;
  width: 100%;
  height: 380px;
`;

const MainTweetBlock = styled.div`
  background: #fff;
  padding: 0;
`;

const Block = styled.div`
  margin: 0;
  background-color: #e6ecf0;
`;

const Profile = () => (
  <div>
    <Helmet>
      <title>Every Interaction</title>
      <meta name="description" content="Every Interaction (@EveryInteract)" />
    </Helmet>
    <MainContainer>
      <Header />
      <ProfileImage />
      <MidNavBar />
      <Block className="row">
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            <LeftSideBar />
            <MainTweetBlock className="col-xs-6">
              <TweetTabs />
              <Tweets />
            </MainTweetBlock>
            <RightSideBar />
          </div>
        </div>
      </Block>
    </MainContainer>
  </div>
);

export default Profile;
