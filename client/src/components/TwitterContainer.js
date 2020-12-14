import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";



const TwitterContainer = () => {
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MLB"
          options={{
            tweetLimit: "10",
            width: "100%",
            height: "100%"
          }}
          theme="dark"
          noHeader="false"
          noBorders="false"
          noFooter="false"
        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

export default TwitterContainer;

