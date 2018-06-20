import React, { Component } from "react";
import styled from "styled-components";
import "flexboxgrid2";
import Icon_Home from "../images/Icon_Home.svg";
import Icon_Moments from "../images/Icon_Moments.svg";
import Icon_Notifications from "../images/Icon_Notifications.svg";
import Icon_Messages from "../images/Icon_Messages.svg";
import Icon_TwitterLogo from "../images/Icon_TwitterLogo.svg";
import EIAvatar from "../images/EIAvatar.png";
import Icon_Magnifier from "../images/Icon_Magnifier.svg";

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
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.01px;
  color: #667580;
`;

const NavLink = styled.a`
  text-decoration: none;
  display: flex;
  padding: 10px;
`;

const NavText = styled.span`
  color: #667580;
  line-height: 15px;
  margin: 5px;
`;

const TwitterLogo = styled.img`
  margin-top: 13px;
`;

const TopBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Search = styled.input`
  background-color: #f5f8fa;
  border-radius: 21px;
  border: 1px solid #e6ecf0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #14171a;
  display: block;
  font-size: 12px;
  height: 32px;
  line-height: 16px;
  padding: 8px 32px 8px 12px;
  transition: all 0.2s ease-in-out;
  width: 220px;
  background-image: url(${Icon_Magnifier});
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
  height: 32px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.01px;
  padding: 8px 15px;
  transition: all 0.2s ease-in-out;
  min-width: 72px;
`;

export default class TopNavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TopNav className="col-xs-5">
            <Nav>
              <NavItem>
                <NavLink href="#">
                  <img src={Icon_Home} alt="Home" />
                  <NavText>Home</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <img src={Icon_Moments} alt="Moments" />
                  <NavText>Moments</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <img src={Icon_Notifications} alt="Notifications" />
                  <NavText>Notifications</NavText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <img src={Icon_Messages} alt="Messages" />
                  <NavText>Messages</NavText>
                </NavLink>
              </NavItem>
            </Nav>
          </TopNav>
          <div className="col-xs-2 center-lg">
            <TwitterLogo src={Icon_TwitterLogo} alt="Twitter" />
          </div>
          <TopBarRight className="col-xs-5">
            <Search placeholder="Search Twitter" />
            <AvatarLink href="#">
              <AvatarMini src={EIAvatar} />
            </AvatarLink>
            <TopTweetBtn>Tweet</TopTweetBtn>
          </TopBarRight>
        </div>
      </div>
    );
  }
}
