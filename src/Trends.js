import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dotWhoToFollow from "./images/dot-who-to-follow.svg";

const trends = [
  {
    id: 1,
    title: "BringYourDogToWorkDay",
    subtitle: false,
    link: "bringyourdogtoworkday",
    tweetsCount: false,
    hash: true
  },
  {
    id: 2,
    title: "FridayFeeling",
    subtitle: false,
    link: "fridayfeeling",
    tweetsCount: "12.1K",
    hash: true
  },
  {
    id: 3,
    title: "BrexitAnniversary",
    subtitle: "It’s one year since the UK voted to leave the European Union",
    link: "brexitanniversary",
    tweetsCount: false,
    hash: true
  },
  {
    id: 4,
    title: "HMS Queen Elizabeth",
    subtitle: false,
    link: "hmsqueenelizabeth",
    tweetsCount: "1,036",
    hash: false
  },
  {
    id: 5,
    title: "Joe Budden",
    subtitle: false,
    link: "joebudden",
    tweetsCount: "1,036",
    hash: false
  },
  {
    id: 6,
    title: "Trident",
    subtitle: false,
    link: "trident",
    tweetsCount: "6,136",
    hash: false
  }
];

const Container = styled.div`
  padding-bottom: 40px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
`;

const TitleLink = styled(Link)`
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

const Dot = styled.img`
  width: 2px;
  height: 2px;
  margin-top: 12px;
  margin-left: 5px;
`;

const Trend = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px 10px 15px;
`;

const UserLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const Subtitle = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #697787;
  margin-top: 3px;
`;

export default function Trends() {
  const trendsData = trends.map(trend => (
    <Trend key={trend.id}>
      <UserLink to={trend.link}>
        {trend.hash ? "#" + trend.title : trend.title}
      </UserLink>
      <Subtitle>
        {trend.subtitle
          ? trend.subtitle
          : trend.tweetsCount
            ? trend.tweetsCount + " Tweets"
            : ""}
      </Subtitle>
    </Trend>
  ));
  return (
    <Container>
      <TitleBlock>
        <Title>United Kingdom Trends</Title>
        <Dot src={dotWhoToFollow} alt="" />
        <TitleLink to="/">Change</TitleLink>
      </TitleBlock>
      {trendsData}
    </Container>
  );
}
