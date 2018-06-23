import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import iconMore from "./images/icon-more.png";

const Container = styled.div`
  boxshadow: 0 1px 3px 0 #b0b8be;
  margin: 0;
`;

const MidNav = styled.div`
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
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
`;

const NavText = styled.span`
  text-align: center;
  font-size: 12px;
  line-height: 21px;
`;

const NavNumber = styled.span`
  text-align: center;
  font-size: 18px;
  line-height: 21px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  color: #788a98;
  border-bottom: ${props => (props.active ? "2px solid #1da1f2" : "0")};
  &:hover {
    border-bottom: 2px solid #1da1f2;
  }
  &:hover ${NavNumber} {
    color: #1da1f2;
  }
  &.active {
    border-bottom: 2px solid #1da1f2;
  }
  &.active ${NavNumber} {
    color: #1da1f2;
  }
`;

const FollowBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FollowBtn = styled.button`
  cursor: pointer;
  background-color: #fff;
  border-radius: 21px;
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  color: #1da1f2;
  display: block;
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  line-height: 14px;
  text-align: center;
  padding: 8px 15px;
  transition: all 0.2s ease-in-out;
  min-width: 99px;
  &:hover {
    background-color: #e5f0f8;
  }
`;

const MoreBtn = styled.button`
  cursor: pointer;
  margin: 0 18px;
  background-image: url(${iconMore});
  border: none;
  width: 4px;
  height: 14px;
  background-repeat: no-repeat;
  background-position: center center;
`;

const RightButtons = () => (
  <FollowBlock className="col-xs-3">
    <FollowBtn>Follow</FollowBtn>
    <MoreBtn />
  </FollowBlock>
);

export const MidNavBar = () => (
  <Container>
    <div className="container">
      <div className="row">
        <div className="col-xs-3" />
        <div className="col-xs-6">
          <MidNav>
            <Nav>
              <NavItem>
                <Link to="/EveryInteraction">
                  <NavText>Tweets</NavText>
                  <NavNumber active>8,058</NavNumber>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/EveryInteraction/Following">
                  <NavText>Following</NavText>
                  <NavNumber>721</NavNumber>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/EveryInteraction/Followers">
                  <NavText>Followers</NavText>
                  <NavNumber>1,815</NavNumber>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/EveryInteraction/Likes">
                  <NavText>Likes</NavText>
                  <NavNumber>460</NavNumber>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/EveryInteraction/Lists">
                  <NavText>Lists</NavText>
                  <NavNumber>2</NavNumber>
                </Link>
              </NavItem>
            </Nav>
          </MidNav>
        </div>
        <RightButtons />
      </div>
    </div>
  </Container>
);
