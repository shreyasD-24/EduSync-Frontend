import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSavedArticle } from "../utils/articleUtils"; // Import the utility function
import Component from "../assets/Component 35.png";
import Trophy from "../assets/Trophy.png";
import char from "../assets/character_de1111a819 1.png";
import boat from '../assets/boat.mp4';
import tree from '../assets/tree.mp4';
import sunday from '../assets/sunday.mp4';

export default function Articles() {
  const [percentage, setPercentage] = useState(null);
  const [remedy, setRemedy] = useState(null);
  const [videoSrc, setVideoSrc] = useState(boat); // State for video source
  const navigate = useNavigate();

  // Extract percentage from URL
  useEffect(() => {
    const url = window.location.href;
    const percentageFromUrl = url.match(/\/detect\/(\d+)/);
    if (percentageFromUrl) {
      setPercentage(parseInt(percentageFromUrl[1]));
    }
  }, []);

  // Fetch remedy based on percentage
  useEffect(() => {
    if (percentage !== null) {
      fetch(`http://localhost:5000/remedy/${percentage}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.remedy) {
            setRemedy(data.remedy);
          }
        })
        .catch((error) => console.error("Error fetching remedy:", error));
    }
  }, [percentage]);

  // Fetch letter and set video source
  useEffect(() => {
    const letter = getSavedArticle(); // Get the saved letter

    // Determine the video based on the letter
    switch (letter.toLowerCase()) {
      case "t":
        setVideoSrc(tree); // Video for letter T
        break;
      case "s":
        setVideoSrc(sunday); // Video for letter S
        break;
      default:
        setVideoSrc(boat); // Default video for any other letter
    }
  }, []);

  const backtolearning = () => {
    navigate("/learning");
  };

  const backtotryagain = () => {
    navigate("/course");
  };

  return (
    <div>
      <div>
        <div className="border-y-4 font-spacegrotesksemibold border-black font-medium lg:text-2xl md:text-2xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center">
          {`Phenome V and B`}
        </div>
        <div className="font-spacegrotesksemibold border-black font-medium lg:text-2xl md:text-xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-28">
          Test Number : {`2`}
        </div>
        <div className="font-spacegrotesksemibold border-black text-sky-400 font-medium lg:text-2xl md:text-xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-10">
          Details about the test:
        </div>
        <div className="md:flex font-spacegrotesksemibold justify-between items-center font-medium lg:text-2xl md:text-xl sm:text-xl text-xl lg:ml-20 ml-2 lg:mr-20 mr-2 text-center mt-10">
          <div>Words to be spelled: {`Boat`}</div>
          <div>Phenome word: {`Voat`}</div>
          <div>Average correct percentage: {`${percentage}`}%</div>
        </div>
        <div className="border-y-4 font-spacegrotesksemibold border-black font-medium lg:text-2xl md:text-2xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-40 mb-14">
          Analysis Result
        </div>
        <div className="relative w-full mx-auto mt-4">
          {/* Background Image */}
          <img className="w-9/12 h-[300px] mx-2 md:mx-20" src={Component} />
          {/* Progress Bar */}
          <div className="font-spacegrotesksemibold relative z-10 w-9/12 mx-2 md:mx-20 h-12 bg-[#E5D1FF]">
            {/* Progress Indicator */}
            <div
              className="flex items-center justify-center bg-purple-600 text-white font-bold h-full"
              style={{ width: `${percentage}%` }}
            >
              <img
                src={char}
                alt="Cat"
                className="absolute h-40 w-50"
                style={{ left: `${percentage - 5}%` }}
              />
              <span>{percentage}%</span>
            </div>
          </div>
          {/* Trophy Image */}
          <img
            src={Trophy}
            alt="Trophy"
            className="absolute z-20 right-[440px] bottom-0 transform translate-x-1/2"
          />
        </div>

        {/* Conditionally render Model and Remedies */}
        {percentage <= 50 && (
          <>
            <div className="font-spacegrotesksemibold border-y-4 border-black font-medium lg:text-2xl md:text-2xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-48">
              Model and Remedies
            </div>
            <div className="md:flex justify-between items-center m-20 md:mx-80">
              <div className="rounded">
                {/* Video based on letter */}
                <video
                  width="320"
                  height="320"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  controls={false}
                  // controlslist="nodownload"
                  // webkitallowfullscreen
                  // mozallowfullscreen
                  // allowfullscreen
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>

              <div>
                <div className="font-spacegrotesksemibold bg-white rounded-3xl p-10 shadow-2xl lg:h-80 lg:w-96 md:h-80 md:w-96 max-w-96 mt-10">
                  <div className="md:flex items-center gap-20 justify-center lg:items-start lg:justify-start md:items-start md:justify-start"></div>
                  <div>
                    <div className="font-spacegrotesksemibold mb-2 lg:text-xl md:text-xl text-lg text-center bg-[#89D85D] rounded-2xl w-max p-2 mt-2 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.7)]">
                      Instructions
                    </div>
                    <div className="font-spacegrotesklight text-center md:text-xl text-lg lg:text-start md:text-start font-semibold mt-5">
                      {remedy ? remedy[0] : `Loading...`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="font-spacegrotesksemibold md:flex gap-20 ml-40 mx-20 lg:mx-80 my-10 mb-20">
        <button
          className="w-[20rem] h-[4rem] bg-[#0984E3] mt-10 rounded-lg text-white drop-shadow-[1px_2px_1px_rgba(0,0,0,0.7)] hover:opacity-80 flex justify-center ml-20 items-center"
          onClick={backtotryagain}
        >
          <div className="mx-1 text-xl">Test Again</div>
        </button>
        <button
          className="font-spacegrotesksemibold w-[20rem] h-[4rem] bg-[#89D85D] mt-10 rounded-lg drop-shadow-[1px_2px_1px_rgba(0,0,0,0.7)] hover:opacity-80 flex justify-center items-center"
          onClick={backtolearning}
        >
          <div className="mx-1 text-xl">Back To Learning</div>
        </button>
      </div>
    </div>
  );
}
