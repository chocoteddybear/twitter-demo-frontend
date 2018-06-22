import React, { Component } from "react";
import styled from "styled-components";
import "flexboxgrid2";
import { Link } from "react-router-dom";
import Icon_People from "../images/Icon_People.png";
import dotWhoToFollow from "../images/dotWhoToFollow.svg";
import WhoToFollow from "./WhoToFollow";

const SideBar = styled.div`
  padding-left: 3px;
`;

const FlexRowBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const WhoToFollowBlock = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

const TitleBlock = styled.div`
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
`;

const TitleBlockLinks = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  margin-top: 5px;
  margin-left: 5px;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const Icons = styled.img`
  width: 16px;
  height: 12px;
  margin-top: 2px;
`;

const UserData = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-align: left;
  letter-spacing: 0.02px;
  margin-left: 10px;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const Dot = styled.img`
  width: 2px;
  height: 2px;
  margin-top: 12px;
  margin-left: 5px;
`;

export default class LeftSideBar extends Component {
  render() {
    return (
      <div className="col-xs-3">
        <SideBar>
          <FlexRowBlock>
            <WhoToFollowBlock>
              <TitleBlock>Who to follow</TitleBlock>
              <Dot src={dotWhoToFollow} alt="" />
              <TitleBlockLinks to="/">Refresh</TitleBlockLinks>
              <Dot src={dotWhoToFollow} alt="" />
              <TitleBlockLinks to="/whotofollow">View all</TitleBlockLinks>
            </WhoToFollowBlock>
            <WhoToFollow />
            <WhoToFollowBlock>
              <Icons src={Icon_People} alt="Location" />
              <UserData to="/findpeople">Find people you know</UserData>
            </WhoToFollowBlock>
          </FlexRowBlock>
        </SideBar>
      </div>
    );
  }
}
