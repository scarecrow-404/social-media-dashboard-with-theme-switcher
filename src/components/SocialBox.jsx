import React from "react";

function SocialBox(props) {
  return (
    <button
      className={`flex flex-col justify-around h-[250px] w-[100%] lg:max-w-[320px] items-center bg-[hsl(227,47%,96%)] rounded-md border-t-8 ${
        props.color
      } ${
        props.isDarkMode
          ? "bg-[hsl(228,28%,20%)] hover:bg-[hsl(228,30%,25%)]"
          : "bg-[hsl(227,47%,96%)] hover:bg-[hsl(230,50%,93%)]"
      } `}
    >
      <div className="flex gap-2">
        <img src={props.icon} alt="icon" className=" w-8" />
        <h3
          className={`  ${
            props.isDarkMode
              ? "text-[hsl(228,34%,66%)]"
              : "text-[hsl(228,12%,44%)]"
          } font-bold `}
        >
          {props.name}
        </h3>
      </div>
      <h1
        className={` text-6xl font-bold ${
          props.isDarkMode ? "text-[hsl(0,0%,100%)]" : "text-[hsl(230,17%,14%)]"
        }`}
      >
        {props.follower}
      </h1>
      <h3
        className={`  ${
          props.isDarkMode ? "text-[hsl(0,0%,100%)]" : "text-[hsl(228,12%,44%)]"
        }`}
      >
        F O L L O W E R S
      </h3>
      <div className="flex items-center gap-1">
        <img src={props.upOrDown} alt="up icon" className=" w-3 h-3" />
        <h3 className={` font-bold ${props.redOrGreen}`}>
          {props.diffNumber} Today
        </h3>
      </div>
    </button>
  );
}

export default SocialBox;
