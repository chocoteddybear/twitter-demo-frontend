import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import { Link } from "react-router-dom";
import verify from "../images/verify.png";

const whoToFollow = [
  {
    id: 1,
    title: "AppleInsider",
    nick: "@appleinsider",
    link: "AppleInsider",
    img: process.env.PUBLIC_URL + "/images/apple-insider.png"
  },
  {
    id: 2,
    title: "Creode",
    nick: "@Creode",
    link: "Creode",
    img: process.env.PUBLIC_URL + "/images/creode-avatar.png",
    verify: true
  },
  {
    id: 3,
    title: "Epiphany Search",
    nick: "@Epiph…",
    link: "EpiphanySearch",
    img: process.env.PUBLIC_URL + "/images/epiphany-search.png"
  }
];

const WhoToFollowBlock = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom: 1px solid #e6ecf0;
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
  letter-spacing: 0.01px;
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

function ProfileMedia(props) {
  const whoToFollowElements = props.whoToFollow.map(toFollow => (
    <WhoToFollowBlock key={toFollow.id}>
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
    </WhoToFollowBlock>
  ));
  return <div>{whoToFollowElements}</div>;
}

export default props => <ProfileMedia whoToFollow={whoToFollow} />;
