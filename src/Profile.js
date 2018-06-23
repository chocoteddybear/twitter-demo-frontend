import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { MidNavBar } from "./MidNavBar";
import { ProfileInfo } from "./ProfileInfo";
import { TweetTabs } from "./TweetTabs";
import { Tweets } from "./Tweets";
import WhoToFollow from "./WhoToFollow";
import Trends from "./Trends";

const MainContainer = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #fff;
`;

const ProfileImage = styled.div`
  background: url(${process.env.PUBLIC_URL + "./images/profile-image.png"})
    no-repeat;
  background-size: cover;
  width: 100%;
  height: 380px;
`;

const TweetBlock = styled.div`
  background: #fff;
  padding: 0;
  margin-top: 12px;
`;

const Content = styled.div`
  margin: 0;
  background-color: #e6ecf0;
`;

const RightSideBar = styled.div`
  margin-top: 12px;
`;

const FlexRowBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 12px;
`;

const Footer = styled.div`
  font-size: 13px;
  line-height: 18px;
  text-align: left;
  color: #718290;
  > span {
    margin-right: 5px;
  }
`;

const FooterLink = styled(Link)`
  color: #718290;
  text-decoration: none;
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const SideBar = styled.div`
  position: relative;
  top: -200px;
  padding-right: 10px;
  margin-top: 35px;
  margin-bottom: 16px;
`;

const AvatarBig = styled.img`
  position: relative;
  cursor: pointer;
  bottom: 15px;
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
      <Content>
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <SideBar>
                <AvatarBig
                  src={process.env.PUBLIC_URL + "/images/avatar.png"}
                />
                <ProfileInfo />
              </SideBar>
            </div>
            <div className="col-xs-6">
              <TweetBlock>
                <TweetTabs />
                <Tweets />
              </TweetBlock>
            </div>
            <div className="col-xs-3">
              <RightSideBar>
                <FlexRowBlock>
                  <WhoToFollow />
                </FlexRowBlock>
                <FlexRowBlock>
                  <Trends />
                </FlexRowBlock>
                <Footer>
                  <span>© 2018 Twitter</span>{" "}
                  <FooterLink to="/about">About</FooterLink>{" "}
                  <FooterLink to="/helpcenter">Help Center</FooterLink>{" "}
                  <FooterLink to="/terms">Terms</FooterLink>{" "}
                  <FooterLink to="/privacypolicy">Privacy policy</FooterLink>{" "}
                  <FooterLink to="/cookies">Cookies</FooterLink>
                  <FooterLink to="/adsinfo">Ads info</FooterLink>
                </Footer>
              </RightSideBar>
            </div>
          </div>
        </div>
      </Content>
    </MainContainer>
  </div>
);

export default Profile;
