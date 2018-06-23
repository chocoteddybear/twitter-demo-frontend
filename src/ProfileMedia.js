import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import photoAndVideo from "./images/photos-and-videos.svg";

const publicUrl = process.env.PUBLIC_URL;

const medias = [
  {
    id: 1,
    img: `${publicUrl}/images/photo-video-1.png`
  },
  {
    id: 2,
    img: `${publicUrl}/images/photo-video-2.png`
  },
  {
    id: 3,
    img: `${publicUrl}/images/photo-video-3.png`
  },
  {
    id: 4,
    img: `${publicUrl}/images/photo-video-4.png`
  },
  {
    id: 5,
    img: `${publicUrl}/images/photo-video-5.png`
  },
  {
    id: 6,
    img: `${publicUrl}/images/photo-video-6.png`
  }
];

const MediaTitle = styled.div`
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

export default function ProfileMedia() {
  const mediaData = medias.map(media => (
    <Link to="/" key={media.id}>
      <Preview src={media.img} alt="" />
    </Link>
  ));
  return (
    <div>
      <MediaTitle>
        <Icon src={photoAndVideo} alt="" />
        <Title to="/followers">522 Photos and videos</Title>
      </MediaTitle>
      <Media>{mediaData}</Media>
    </div>
  );
}
