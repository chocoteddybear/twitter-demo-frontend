import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import iconHome from "./images/icon-home.svg";
import iconMoments from "./images/icon-moments.svg";
import iconNotifications from "./images/icon-notifications.svg";
import iconMessages from "./images/icon-messages.svg";
import iconTwitterLogo from "./images/icon-twitter-logo.svg";
import iconMagnifier from "./images/icon-magnifier.svg";

const TopNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  font-color: #667580;
  justify-content: flex-start;
`;

const NavItem = styled.div`
  flex-direction: column;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  color: #667580;
  &:hover {
    color: #1da1f2;
    border-bottom: 2px solid #1da1f2;
  }
  &.active {
    color: #1da1f2;
    border-bottom: 2px solid #1da1f2;
  }
`;

const NavText = styled.span`
  margin: 5px;
`;

const TwitterLogo = styled.img`
  margin-top: 18px;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 7px;
`;

const Search = styled.input`
  background-color: #f5f8fa;
  border-radius: 21px;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  color: #14171a;
  display: block;
  font-size: 12px;
  line-height: 16px;
  padding: 8px 32px 8px 12px;
  transition: all 0.2s ease-in-out;
  min-width: 220px;
  background-image: url(${iconMagnifier});
  background-repeat: no-repeat;
  background-position: 193px 7px;
`;

const AvatarLink = styled.a`
  margin: 3px 20px 0 20px;
`;

const AvatarMini = styled.img`
  width: 32px;
  height: 32px;
`;

const TopTweetBtn = styled.button`
  cursor: pointer;
  background-color: #1da1f2;
  border-radius: 21px;
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
  text-align: center;
  padding: 8px 14px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #328ec8;
  }
`;

export const Header = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-5">
        <TopNav>
          <Nav>
            <NavItem>
              <Link to="/EveryInteraction">
                <img src={iconHome} alt="Home" />
                <NavText>Home</NavText>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/moments">
                <img src={iconMoments} alt="Moments" />
                <NavText>Moments</NavText>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/notifications">
                <img src={iconNotifications} alt="Notifications" />
                <NavText>Notifications</NavText>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/messages">
                <img src={iconMessages} alt="Messages" />
                <NavText>Messages</NavText>
              </Link>
            </NavItem>
          </Nav>
        </TopNav>
      </div>
      <div className="col-xs-2 center-lg">
        <TwitterLogo src={iconTwitterLogo} alt="Twitter" />
      </div>
      <div className="col-xs-5">
        <RightSide>
          <Search placeholder="Search Twitter" />
          <AvatarLink href="/EveryInteraction">
            <AvatarMini
              src={process.env.PUBLIC_URL + "/images/ei-avatar.png"}
            />
          </AvatarLink>
          <TopTweetBtn>Tweet</TopTweetBtn>
        </RightSide>
      </div>
    </div>
  </div>
);
