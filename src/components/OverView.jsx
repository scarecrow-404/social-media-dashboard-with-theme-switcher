import React from "react";
import OverViewBox from "./OverViewBox";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import iconDown from "../assets/images/icon-down.svg";
import iconUp from "../assets/images/icon-up.svg";
function OverView({ isDarkMode }) {
  return (
    <div className={`p-10 ${isDarkMode ? "bg-[hsl(230,17%,14%)]" : ""}`}>
      <h1
        className={`font-bold text-[hsl(228,12%,44%)] text-4xl ${
          isDarkMode ? "text-[hsl(0,0%,100%)]" : ""
        }`}
      >
        Overview - Today
      </h1>
      <div className="flex flex-col mt-6 gap-8 lg:flex-row lg:flex-wrap lg:">
        <OverViewBox
          isDarkMode={isDarkMode}
          name="Page Views"
          logo={facebookIcon}
          number={87}
          upOrDown={iconUp}
          percentage={3}
          redOrGreen="text-[hsl(163,72%,41%)]"
        />
        <OverViewBox
          isDarkMode={isDarkMode}
          name="Likes"
          logo={facebookIcon}
          number={52}
          upOrDown={iconDown}
          percentage={2}
          redOrGreen="text-[hsl(356,69%,56%)]"
        />
        <OverViewBox
          isDarkMode={isDarkMode}
          name="Likes"
          logo={instagramIcon}
          number={5462}
          upOrDown={iconUp}
          percentage={2257}
          redOrGreen="text-[hsl(163,72%,41%)]"
        />
        <OverViewBox
          isDarkMode={isDarkMode}
          name="Profile Views"
          logo={instagramIcon}
          number="53K"
          upOrDown={iconUp}
          percentage={1375}
          redOrGreen="text-[hsl(163,72%,41%)]"
        />
        <OverViewBox
          isDarkMode={isDarkMode}
          name="Retweets"
          logo={twitterIcon}
          number={117}
          upOrDown={iconUp}
          percentage={303}
          redOrGreen="text-[hsl(163,72%,41%)]"
        />
        <OverViewBox
          isDarkMode={isDarkMode}
          name="Likes"
          logo={twitterIcon}
          number={507}
          upOrDown={iconUp}
          percentage={553}
          redOrGreen="text-[hsl(163,72%,41%)]"
        />
        <OverViewBox
          isDarkMode={isDarkMode}
          name="Likes"
          logo={youtubeIcon}
          number={107}
          upOrDown={iconDown}
          percentage={19}
          redOrGreen="text-[hsl(356,69%,56%)]"
        />
        <OverViewBox
          isDarkMode={isDarkMode}
          name="Total Views"
          logo={youtubeIcon}
          number={1407}
          upOrDown={iconDown}
          percentage={12}
          redOrGreen="text-[hsl(356,69%,56%)]"
        />
      </div>
    </div>
  );
}

export default OverView;
