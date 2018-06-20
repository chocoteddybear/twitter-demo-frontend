import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import Icon_Comments from "../images/Icon_Comments.svg";
import Icon_Retweet from "../images/Icon_Retweet.svg";
import Icon_Loves from "../images/Icon_Loves.svg";
import Icon_LovesRED from "../images/Icon_LovesRED.png";
import Icon_Envelope from "../images/Icon_Envelope.svg";
import Icon_Pinned from "../images/Icon_Pinned.svg";

const PinBox = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e1e8ed;
`;

const PinBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 55px;
  margin-top: 12px;
`;

const PinText = styled.span`
  color: #707e88;
  font-size: 12px;
  line-height: 14px;
  padding-left: 10px;
`;

const TweetBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  border-bottom: 1px solid #e1e8ed;
`;

const TweetAvatar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0 0 13px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

const TweetBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const TweetHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #14171a;
`;

const TweetName = styled.a`
  color: #14171a;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 5px;
  line-height: 16px;
  text-decoration: none;
`;

const TweetTag = styled.a`
  margin: 10px 5px;
  font-size: 13px;
  color: #697787;
  letter-spacing: 0.02px;
  line-height: 16px;
  text-decoration: none;
`;

const TweetTime = styled.span`
  margin: 10px 5px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02px;
  color: #697787;
`;

const Dot = styled.div`
  margin-top: 10px;
`;

const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #14171a;
`;

const Article = styled.p`
  line-height: ${props => (props.size ? "30px" : "22px")};
  font-size: ${props => (props.size ? "25px" : "16px")};
  font-weight: ${props => (props.size ? "200" : "400")};
  letter-spacing: ${props => (props.size ? "0" : "-0.22px")};
  color: #292f33;
  margin-top: 0;
  margin-left: 5px;
`;

const Media = styled.img`
  margin: 20px 5px;
  width: 100%;
`;

const TweetFooter = styled.div`
  display: flex;
  padding: 0 5px 15px 5px;
`;

const TweetExtension = styled.div`
  display: flex;
  margin-right: 44px;
`;

const TweetIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
`;

const TweetClickCount = styled.span`
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  text-align: left;
  letter-spacing: -0.19px;
  cursor: pointer;
`;

const Preview = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const PreviewImg = styled.img`
  flex-grow: 1;
`;

const PreviewBlock = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  font-size: 15px;
  line-height: 22px;
  text-align: left;
  padding: 0 15px;
`;

const PreviewTitle = styled.span`
  display: flex;
  font-weight: bold;
`;

const PreviewText = styled.span`
  display: flex;
  font-weight: normal;
`;

export const Tweet = ({
  pin,
  avatar,
  name,
  linkName,
  date,
  bigFont,
  article,
  media,
  preview,
  previewImg,
  previewTitle,
  previewText,
  comments,
  retweets,
  likes,
  envelope
}) => (
  <div>
    <PinBox>
      {pin && (
        <PinBlock>
          <div>
            <img src={Icon_Pinned} alt="Pinned" />
          </div>
          <PinText>Pinned Tweet</PinText>
        </PinBlock>
      )}
    </PinBox>
    <TweetBox>
      <TweetAvatar>
        <Avatar src={avatar} />
      </TweetAvatar>
      <TweetBlock>
        <TweetHeader>
          <TweetName href="">{name}</TweetName>
          <TweetTag href="">{linkName}</TweetTag>
          <Dot>•</Dot>
          <TweetTime>{date}</TweetTime>
        </TweetHeader>
        <TweetBody>
          <Article size={bigFont}>{article}</Article>
          {media && <Media src={media} />}
          {preview && (
            <Preview>
              <PreviewImg src={previewImg} />
              <PreviewBlock>
                <PreviewTitle>{previewTitle}</PreviewTitle>
                <PreviewText>{previewText}</PreviewText>
              </PreviewBlock>
            </Preview>
          )}
        </TweetBody>
        <TweetFooter>
          <TweetExtension>
            <TweetIcon src={Icon_Comments} alt="" />
            <TweetClickCount>{comments}</TweetClickCount>
          </TweetExtension>
          <TweetExtension>
            <TweetIcon src={Icon_Retweet} alt="" />
            <TweetClickCount>{retweets}</TweetClickCount>
          </TweetExtension>
          <TweetExtension>
            {likes ? (
              <TweetIcon src={Icon_LovesRED} />
            ) : (
              <TweetIcon src={Icon_Loves} />
            )}
            <TweetClickCount>{likes}</TweetClickCount>
          </TweetExtension>
          <TweetExtension>
            <TweetIcon src={Icon_Envelope} alt="" />
            <TweetClickCount>{envelope}</TweetClickCount>
          </TweetExtension>
        </TweetFooter>
      </TweetBlock>
    </TweetBox>
  </div>
);
