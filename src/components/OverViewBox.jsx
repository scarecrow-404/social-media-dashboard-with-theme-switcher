import React from "react";

function OverViewBox(props) {
  return (
    <div className="flex justify-around">
      <button
        className={`flex flex-col justify-around h-[140px] w-[100%] lg:min-w-[310px] items-center  rounded-md  ${
          props.isDarkMode
            ? "bg-[hsl(228,28%,20%)] hover:bg-[hsl(228,30%,25%)]"
            : "bg-[hsl(227,47%,96%)] hover:bg-[hsl(230,50%,93%)]"
        }`}
      >
        <div className="flex justify-between items-center w-[80%]">
          <h1
            className={` font-bold   ${
              props.isDarkMode
                ? "text-[hsl(228,34%,66%)]"
                : "text-[hsl(228,12%,44%)]"
            }`}
          >
            {props.name}
          </h1>
          <img src={props.logo} alt="" className=" w-8" />
        </div>
        <div className="flex justify-between items-center w-[80%]">
          <h1
            className={` text-4xl font-bold ${
              props.isDarkMode
                ? "text-[hsl(0,0%,100%)]"
                : "text-[hsl(228,12%,44%)]"
            }`}
          >
            {props.number}
          </h1>
          <div className="flex gap-1 items-center">
            <img src={props.upOrDown} alt="" className=" w-3 h-3" />
            <h3 className={`font-bold ${props.redOrGreen}`}>
              {props.percentage}%
            </h3>
          </div>
        </div>
      </button>
    </div>
  );
}

export default OverViewBox;
