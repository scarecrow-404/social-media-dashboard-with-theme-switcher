import { useState, useEffect } from "react";
import "./App.css";
import SocialMedia from "./components/SocialMedia";
import OverView from "./components/OverView";

function App() {
  const [isDarkMode, setIsDArkMode] = useState(false);
  //console.log(isDarkMode);
  const ToggleSwitch = ({ setIsDarkMode, isDarkMode }) => {
    const [isChecked, setIsChecked] = useState(isDarkMode);

    const handleToggle = () => {
      const newValue = !isChecked;
      setIsChecked(newValue);
      setIsDarkMode(newValue);
    };

    useEffect(() => {
      setIsChecked(isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
      setIsChecked(isDarkMode);
    }, []);

    return (
      <label className="flex items-center cursor-pointer">
        <div className="relative group">
          <input
            type="checkbox"
            className="sr-only hover:bg-[#10D5C2]"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div
            className={` group-hover:bg-gradient-to-r group-hover:from-[hsl(210,78%,56%)] group-hover:to-[hsl(146,68%,55%)] bg-[#CDD7EE] w-10 h-6 rounded-full ${
              isChecked
                ? "bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]"
                : "bg-[hsl(230,22%,74%)]"
            }`}
          ></div>
          <div
            className={` absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isDarkMode? "bg-red-800":""} ${
              !isChecked ? "translate-x-full" : "translate-x-0"
            } `}
          ></div>
        </div>
      </label>
    );
  };
  return (
    <>
      <div className={`${isDarkMode ? "bg-[hsl(230,17%,14%)]" : ""}`}>
        <div
          className={`absolute w-[100%] h-[300px] z-20 rounded-b-3xl ${
            isDarkMode ? "bg-[hsl(230,17%,16%)]" : "bg-[hsl(225,100%,98%)]"
          } `}
        ></div>

        <div className={`p-10 relative z-30 `}>
          <h1
            className={` text-start  text-4xl font-bold z-40 ${
              isDarkMode ? "text-[hsl(0,0%,100%)]" : "text-[hsl(230,17%,14%)]"
            }`}
          >
            Social Media Dashboard
          </h1>
          <h3
            className={` text-start z-40 ${
              isDarkMode ? "text-[hsl(228,34%,66%)]" : "text-[hsl(228,12%,44%)]"
            } font-bold mt-2`}
          >
            Total Followers: 23,004
          </h3>
          <hr className=" border-gray-400 mt-4 z-40" />
          <div className="flex flex-col gap-5 relative items-center mt-4 z-40 lg:flex-row lg:flex-wrap">
            <div className="flex justify-between  w-[100%]">
              <h3
                className={`${
                  isDarkMode
                    ? "text-[hsl(228,34%,66%)]"
                    : "text-[hsl(228,12%,44%)]"
                } font-bold`}
              >
                Dark Mode
              </h3>
              <ToggleSwitch
                setIsDarkMode={setIsDArkMode}
                isDarkMode={isDarkMode}
              />
            </div>

            <SocialMedia isDarkMode={isDarkMode} />
          </div>
        </div>
        <OverView isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

export default App;
