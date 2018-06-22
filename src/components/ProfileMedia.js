import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import { Link } from "react-router-dom";
import photoVideo from "../images/Videos.svg";

const mediaFiles = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/images/photoVideo1.png"
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/images/photoVideo2.png"
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/images/photoVideo3.png"
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + "/images/photoVideo4.png"
  },
  {
    id: 5,
    img: process.env.PUBLIC_URL + "/images/photoVideo5.png"
  },
  {
    id: 6,
    img: process.env.PUBLIC_URL + "/images/photoVideo6.png"
  }
];

const MediaBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Icons = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 5px;
`;

const MyMedia = styled(Link)`
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

const Media = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Preview = styled.img`
  width: 83px;
  height: 83px;
  margin-right: 5px;
  margin-bottom: 3px;
`;

function ProfileMedia(props) {
  const mediaElements = props.mediaFiles.map(media => (
    <Link to="/">
      <Preview key={media.id} src={media.img} alt="" />
    </Link>
  ));
  return (
    <div>
      <MediaBlock>
        <Icons src={photoVideo} alt="" />
        <MyMedia to="/followers">522 Photos and videos</MyMedia>
      </MediaBlock>
      <Media>{mediaElements}</Media>
    </div>
  );
}

export default props => <ProfileMedia mediaFiles={mediaFiles} />;
