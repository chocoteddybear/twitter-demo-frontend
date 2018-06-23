import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import iconLocation from "./images/icon-location.svg";
import iconJoined from "./images/icon-joined.svg";
import iconLink from "./images/icon-link.svg";
import FollowerList from "./FollowerList";
import ProfileMedia from "./ProfileMedia";

const FlexRowBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const UserName = styled.span`
  padding-right: 5px;
  font-weight: Bold;
  font-size: 22px;
  line-height: 22px;
  text-align: left;
`;

const ConfirmedIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 3px;
`;

const UserLink = styled(NavLink)`
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  color: #697787;
  padding-right: 7.5px;
  margin-bottom: 12px;
  text-decoration: none;
`;

const FollowsYou = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
  text-align: left;
  color: #697787;
  flex-wrap: wrap;
`;

const Description = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: #14171a;
  margin-bottom: 12px;
`;

const UserData = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #697787;
  padding-left: 10px;
`;

const UserWebsite = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: regular;
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #1da1f2;
  padding-left: 10px;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 5px;
`;

const BlueBtn = styled.button`
  cursor: pointer;
  background-color: #1da1f2;
  border-radius: 21px;
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  padding: 12px 32px;
  margin-top: 15px;
  margin-right: 5px;
  &:hover {
    background-color: #328ec8;
  }
`;

export const ProfileInfo = () => (
  <div>
    <FlexRowBlock>
      <UserName>Every Interaction</UserName>
      <ConfirmedIcon
        src={process.env.PUBLIC_URL + "/images/tick.png"}
        alt="Confirmed"
      />
    </FlexRowBlock>
    <FlexRowBlock>
      <UserLink to="/EveryInteraction">@EveryInteract</UserLink>
      <FollowsYou>Follows You</FollowsYou>
    </FlexRowBlock>
    <FlexRowBlock>
      <Description>
        UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.
      </Description>
    </FlexRowBlock>
    <FlexRowBlock>
      <Icon src={iconLocation} alt="Location" />
      <UserData>London, UK</UserData>
    </FlexRowBlock>
    <FlexRowBlock>
      <Icon src={iconLink} alt="Link" />
      <UserWebsite href="https://www.everyinteraction.com/" target="_blank">
        everyinteraction.com
      </UserWebsite>
    </FlexRowBlock>
    <FlexRowBlock>
      <Icon src={iconJoined} alt="Joined" />
      <UserData>Joined May 2008</UserData>
    </FlexRowBlock>
    <FlexRowBlock>
      <BlueBtn>Tweet to</BlueBtn>
      <BlueBtn>Message</BlueBtn>
    </FlexRowBlock>
    <FollowerList />
    <ProfileMedia />
  </div>
);
