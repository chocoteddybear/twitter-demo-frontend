import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TabNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TabItem = styled.div`
  flex-direction: column;
  font-style: bold;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01px;
  margin: 15px 30px 10px 10px;
`;

const TabLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #1da1f2;
  &:hover:not(.active) {
    text-decoration: underline;
  }
  &.active {
    color: #14171a;
  }
`;

const TabText = styled.span`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.1px;
`;

export const TweetTabs = () => (
  <div className="col-xs">
    <TabNav>
      <TabItem>
        <TabLink to="/EveryInteraction">
          <TabText active>Tweets</TabText>
        </TabLink>
      </TabItem>
      <TabItem>
        <TabLink to="/EveryInteraction/tweetsandreplies">
          <TabText>Tweets & replies</TabText>
        </TabLink>
      </TabItem>
      <TabItem>
        <TabLink to="/EveryInteraction/media">
          <TabText>Media</TabText>
        </TabLink>
      </TabItem>
    </TabNav>
  </div>
);
