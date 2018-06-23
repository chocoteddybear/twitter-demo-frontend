import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import verify from "./images/verify.png";
import iconPeople from "./images/icon-people.png";
import dotWhoToFollow from "./images/dot-who-to-follow.svg";

const publicUrl = process.env.PUBLIC_URL;

const users = [
  {
    id: 1,
    title: "AppleInsider",
    nick: "@appleinsider",
    link: "AppleInsider",
    img: `${publicUrl}/images/apple-insider.png`
  },
  {
    id: 2,
    title: "Creode",
    nick: "@Creode",
    link: "Creode",
    img: `${publicUrl}/images/creode-avatar.png`,
    verify: true
  },
  {
    id: 3,
    title: "Epiphany Search",
    nick: "@Epiph…",
    link: "EpiphanySearch",
    img: `${publicUrl}/images/epiphany-search.png`
  }
];

const User = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid #e6ecf0;
`;

const ToFollow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

const FollowBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  border-radius: 21px;
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  color: #1da1f2;
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  line-height: 14px;
  text-align: center;
  padding: 8px 15px;
  transition: all 0.2s ease-in-out;
  min-width: 99px;
  margin-top: 10px;
  &:hover {
    background-color: #e5f0f8;
  }
`;

const AvatarImg = styled.img`
  border-radius: 100px;
  width: 48px;
  height: 48px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Text = styled.div`
  display: flex;
  font-size: 13px;
  line-height: 15px;
  text-align: left;
  color: #697787;
  margin-top: 5px;

  > span {
    font-weight: bold;
    color: #000;
    margin-right: 5px;
  }
`;

const Verify = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  line-height: 20px;
`;

const ToFollowLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
`;

const TitleBlockLink = styled(Link)`
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

const Icon = styled.img`
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

export default function WhoToFollow() {
  const usersData = users.map(toFollow => (
    <User key={toFollow.id}>
      <ToFollowLink to={toFollow.link}>
        <AvatarImg src={toFollow.img} alt="" />
      </ToFollowLink>
      <TitleBlock>
        <ToFollowLink to={toFollow.link}>
          <Text>
            <span>{toFollow.title}</span>
            {toFollow.verify && <Verify src={verify} alt="" />} {toFollow.nick}
          </Text>
        </ToFollowLink>
        <div>
          <FollowBtn>Follow</FollowBtn>
        </div>
      </TitleBlock>
    </User>
  ));
  return (
    <div>
      <ToFollow>
        <Title>Who to follow</Title>
        <Dot src={dotWhoToFollow} alt="" />
        <TitleBlockLink to="/">Refresh</TitleBlockLink>
        <Dot src={dotWhoToFollow} alt="" />
        <TitleBlockLink to="/whotofollow">View all</TitleBlockLink>
      </ToFollow>
      {usersData}
      <ToFollow>
        <Icon src={iconPeople} alt="Location" />
        <UserData to="/findpeople">Find people you know</UserData>
      </ToFollow>
    </div>
  );
}
