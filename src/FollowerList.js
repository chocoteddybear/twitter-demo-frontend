import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import followersIcon from "./images/followers.svg";

const publicUrl = process.env.PUBLIC_URL;

const followers = [
  {
    id: 1,
    img: `${publicUrl}/images/followers-1.png`
  },
  {
    id: 2,
    img: `${publicUrl}/images/followers-2.png`
  },
  {
    id: 3,
    img: `${publicUrl}/images/followers-3.png`
  },
  {
    id: 4,
    img: `${publicUrl}/images/followers-4.png`
  },
  {
    id: 5,
    img: `${publicUrl}/images/followers-5.png`
  },
  {
    id: 6,
    img: `${publicUrl}/images/followers-6.png`
  }
];

const FollowersTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 5px;
`;

const Title = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-weight: regular;
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  color: #1da1f2;
  padding-left: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const AvatarImg = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export default function FollowerList() {
  const followerData = followers.map(follower => (
    <Link to="/" key={follower.id}>
      <AvatarImg src={follower.img} alt="" />
    </Link>
  ));
  return (
    <div>
      <FollowersTitle>
        <Icon src={followersIcon} alt="" />
        <Title to="/followers">6 Followers you know</Title>
      </FollowersTitle>
      <Avatar>{followerData}</Avatar>
    </div>
  );
}
