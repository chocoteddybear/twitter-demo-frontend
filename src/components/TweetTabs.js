import React, { Component } from "react";
import styled from "styled-components";
import "flexboxgrid2";
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

export default class TweetTabs extends Component {
  render() {
    return (
      <TabNav className="col-xs">
        <TabItem>
          <TabLink to="/EveryInteraction">
            <TabText active>Tweets</TabText>
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink to="/EveryInteraction/Tweets & replies">
            <TabText>Tweets & replies</TabText>
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink to="/EveryInteraction/Media">
            <TabText>Media</TabText>
          </TabLink>
        </TabItem>
      </TabNav>
    );
  }
}
