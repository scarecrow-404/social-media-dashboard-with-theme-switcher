import React from "react";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import iconDown from "../assets/images/icon-down.svg";
import iconUp from "../assets/images/icon-up.svg";
import SocialBox from "./SocialBox";
function SocialMedia({ isDarkMode }) {
  return (
    <>
      <SocialBox
        isDarkMode={isDarkMode}
        icon={facebookIcon}
        name="@nathanf"
        follower={1987}
        upOrDown={iconUp}
        diffNumber={12}
        color={"border-[hsl(208,92%,53%)]"}
        redOrGreen="text-[hsl(163,72%,41%)]"
      />
      <SocialBox
        isDarkMode={isDarkMode}
        icon={twitterIcon}
        name="@nathanf"
        follower={1044}
        upOrDown={iconUp}
        diffNumber={99}
        color={"border-[hsl(203,89%,53%)]"}
        redOrGreen="text-[hsl(163,72%,41%)]"
      />
      <div className="flex w-[100%] justify-center lg:max-w-[320px]">
        <div className=" h-[8px] absolute bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 w-[100%] rounded-t-md lg:max-w-[320px]"></div>
        <SocialBox
          isDarkMode={isDarkMode}
          icon={instagramIcon}
          name="@realnathanf"
          follower="11K"
          upOrDown={iconUp}
          diffNumber={1099}
          color=""
          redOrGreen="text-[hsl(163,72%,41%)]"
        />
      </div>
      <SocialBox
        isDarkMode={isDarkMode}
        icon={youtubeIcon}
        name="Nathan F"
        follower={8239}
        upOrDown={iconDown}
        diffNumber={144}
        color=" border-[hsl(348,97%,39%)]"
        redOrGreen="text-[hsl(356,69%,56%)]"
      />
    </>
  );
}

export default SocialMedia;
