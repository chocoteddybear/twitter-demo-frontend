import React, { Component } from "react";
import styled from "styled-components";
import "flexboxgrid2";
import { NavLink } from "react-router-dom";
import Icon_Location from "../images/Icon_Location.svg";
import Icon_Joined from "../images/Icon_Joined.svg";
import Icon_Link from "../images/Icon_Link.svg";
import Followers from "./FollowerList";
import ProfileMedia from "./ProfileMedia";

const SideBar = styled.div`
  position: relative;
  top: -215px;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 35px;
  margin-bottom: 16px;
`;

const FlexRowBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const AvatarBig = styled.img`
  position: relative;
  cursor: pointer;
  bottom: 15px;
`;

const UserName = styled.span`
  padding-right: 5px;
  font-weight: Bold;
  font-size: 22px;
  line-height: 22px;
  text-align: left;
  letter-spacing: 0.02px;
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
  letter-spacing: 0.02px;
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
  letter-spacing: 0.02px;
  color: #697787;
  flex-wrap: wrap;
`;

const Description = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  letter-spacing: 0.01px;
  color: #14171a;
  margin-bottom: 12px;
`;

const UserData = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  letter-spacing: 0.02px;
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
  letter-spacing: 0.02px;
  color: #1da1f2;
  padding-left: 10px;
`;

const Icons = styled.img`
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
  letter-spacing: 0.01px;
  transition: all 0.2s ease-in-out;
  padding: 12px 32px;
  margin-top: 15px;
  margin-right: 5px;
  &:hover {
    background-color: #328ec8;
  }
`;

export default class LeftSideBar extends Component {
  render() {
    return (
      <SideBar className="col-xs-3">
        <AvatarBig src={process.env.PUBLIC_URL + "/images/Avatar.png"} />
        <FlexRowBlock>
          <UserName>Every Interaction</UserName>
          <ConfirmedIcon
            src={process.env.PUBLIC_URL + "/images/Tick.png"}
            alt="Confirmed"
          />
        </FlexRowBlock>
        <FlexRowBlock>
          <UserLink to="/EveryInteraction">@EveryInteract</UserLink>
          <FollowsYou>Follows You</FollowsYou>
        </FlexRowBlock>
        <FlexRowBlock>
          <Description>
            UX Design studio focussed problem solving creativity. Design to us
            is how can we make things *work* amazing.
          </Description>
        </FlexRowBlock>
        <FlexRowBlock>
          <Icons src={Icon_Location} alt="Location" />
          <UserData>London, UK</UserData>
        </FlexRowBlock>
        <FlexRowBlock>
          <Icons src={Icon_Link} alt="Link" />
          <UserWebsite href="https://www.everyinteraction.com/" target="_blank">
            everyinteraction.com
          </UserWebsite>
        </FlexRowBlock>
        <FlexRowBlock>
          <Icons src={Icon_Joined} alt="Joined" />
          <UserData>Joined May 2008</UserData>
        </FlexRowBlock>
        <FlexRowBlock>
          <BlueBtn>Tweet to</BlueBtn>
          <BlueBtn>Message</BlueBtn>
        </FlexRowBlock>
        <Followers />
        <ProfileMedia />
      </SideBar>
    );
  }
}
