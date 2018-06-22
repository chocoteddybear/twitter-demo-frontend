import React from "react";
import { Tweet } from "./Tweet";

export const Tweets = props => (
  <div>
    <Tweet
      pin={true}
      avatar={process.env.PUBLIC_URL + "/images/EIAvatar.png"}
      name="Every Interaction"
      linkName="@EveryInteract"
      date="2 mar 2015"
      bigFont={true}
      article="We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign UI"
      media={process.env.PUBLIC_URL + "/images/content_01.png"}
      retweets="17"
      likes="47"
    />
    <Tweet
      avatar={process.env.PUBLIC_URL + "/images/EIAvatar.png"}
      name="Every Interaction"
      linkName="@EveryInteract"
      date="23h"
      bigFont={true}
      article="Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
      comments="1"
      retweets="4"
      likes="2"
    />
    <Tweet
      avatar={process.env.PUBLIC_URL + "/images/EIAvatar.png"}
      name="Every Interaction"
      linkName="@EveryInteract"
      date="Nov 18"
      bigFont={false}
      article="Variable web fonts are coming, and will open a world of opportunities for weight use online"
      preview={true}
      previewImg={process.env.PUBLIC_URL + "/images/Preview.png"}
      previewTitle="The Future of Web Fonts"
      previewText="We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…
vilijamis.com"
    />
  </div>
);
