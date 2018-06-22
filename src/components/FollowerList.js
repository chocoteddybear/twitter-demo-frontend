import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import { Link } from "react-router-dom";
import followersIcon from "../images/followers.svg";

const followers = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/images/followers1.png"
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/images/followers2.png"
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/images/followers3.png"
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + "/images/followers4.png"
  },
  {
    id: 5,
    img: process.env.PUBLIC_URL + "/images/followers5.png"
  },
  {
    id: 6,
    img: process.env.PUBLIC_URL + "/images/followers6.png"
  }
];

const FollowersBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Icons = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 5px;
`;

const MyFollowers = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-weight: regular;
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  letter-spacing: 0.02px;
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

function FollowerList(props) {
  const followerElements = props.followers.map(follower => (
    <Link to="/">
      <AvatarImg key={follower.id} src={follower.img} alt="" />
    </Link>
  ));
  return (
    <div>
      <FollowersBlock>
        <Icons src={followersIcon} alt="" />
        <MyFollowers to="/followers">6 Followers you know</MyFollowers>
      </FollowersBlock>
      <Avatar>{followerElements}</Avatar>
    </div>
  );
}

export default props => <FollowerList followers={followers} />;
