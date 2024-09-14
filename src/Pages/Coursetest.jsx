import { useEffect, useState } from "react";
import RecordButton from "../Components/RecordButton";
import Mic from "../Components/Mic";
import NavButton from "../Components/NavButton";
import RecordingLoader from "../Components/RecordingLoader";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000";

const Overalltest = () => {
  const navigate = useNavigate();
  let [letter, setLetter] = useState("B");
  let [attempts, setAttempts] = useState([]);
  let [word, setWord] = useState("");
  let [pronounciation, setPronounciation] = useState("");
  let averageAccuracy = 0;
  let [image, setImage] = useState("");
  let [recording, setRecording] = useState(false);

  const improvisationNeeded = () => {
    let average = Math.round((averageAccuracy / attempts.length));
    navigate("/detect/" + average);
  }

  useEffect(() => {
    async function letterCall() {
      let url = baseUrl + "/generate_word/" + "B";
      const res = await fetch(url);
      const data = await res.json();
      setImage(data.image_link);
      setWord(data.word1);
      setPronounciation(data.pronunciation);
    }

    letterCall();
  }, [letter]);

  const nextLetter = () => {
    setLetter((prevLetter) => {
      if (prevLetter === "A") return "B";
      if (prevLetter === "B") return "Z";
      return "A"; // If the letter is 'Z', wrap around to 'A'
    });
  };

  const previousLetter = () => {
    setLetter((prevLetter) => {
      if (prevLetter === "A") return "Z";
      if (prevLetter === "Z") return "B";
      return "A"; // If the letter is 'B', wrap around to 'A'
    });
  };

  const recordButtonHandler = async () => {
    setRecording(true);
    const url = baseUrl + "/record";
    const res = await fetch(url);
    const data = await res.json();
    setAttempts((prev) => {
      let newAttempts = [...prev, data.percentage];
      return newAttempts;
    });
    setTimeout(() => {
      setRecording(false);
    }, 5000);
  };

  const stopRecordHandler = () => {
    setRecording(false);
  };

  for (let i = 0; i < attempts.length; i++) {
    averageAccuracy += attempts[i];
  }

  return (
    <div className="md:px-[9rem] pb-[4rem] font-spacegroteskmedium">
      <div className="text-md font-semibold mb-6">Letter : {letter}</div>

      <div className="flex justify-between text-md font-semibold mb-5">
        <span className="">
          Word to be spelled : {word.charAt(0).toUpperCase() + word.slice(1)}
        </span>
        <span className="me-[4rem]">
          Average Correct Percentage -{" "}
          {attempts.length != 0
            ? (averageAccuracy / attempts.length).toFixed(2)
            : averageAccuracy}{" "}
          %
        </span>
      </div>

      <center className="text-2xl">
        <div className="mb-1">{word}</div>
        <div className="mb-8">{pronounciation}</div>
        {/* {image.length != 0 ? (
          <img src={image} className="h-[12rem] my-8 rounded-xl" />
        ) : null} */}
        {!recording ? <Mic /> : <RecordingLoader />}
      </center>

      <div className="flex w-[75%] mx-auto justify-center mt-5">
        {!recording ? (
          <RecordButton
            bgColor="#89D85D"
            text="Start Recording"
            onClickHandler={recordButtonHandler}
          />
        ) : (
          <RecordButton
            bgColor="#E3E2E7"
            textColor="black"
            text="Recording..."
          />
        )}
        <RecordButton
          bgColor="#D86C5D"
          text="Stop Recording"
          onClickHandler={stopRecordHandler}
        />
        <RecordButton
          bgColor="#0984E3"
          text="Reset all tries"
          onClickHandler={() => {
            setAttempts([]);
          }}
        />
      </div>

      <div className="my-[5rem]">
        <div className="text-[#2D8CFF] font-medium">Attempts :</div>

        <div className="flex justify-center gap-x-[4rem] mt-5">
          <div
            className="h-[7rem] w-[14rem] rounded-lg flex flex-col justify-center items-center text-white font-semibold text-md gap-y-3 text-center drop-shadow-[3px_4px_2px_rgba(0,0,0,0.7)]"
            style={
              attempts[0]
                ? attempts[0] >= 50
                  ? { backgroundColor: "#89D85D" }
                  : { backgroundColor: "#D86C5D" }
                : { backgroundColor: "#E3E2E7", color: "black" }
            }
          >
            <div>Attempt 1</div>
            {attempts[0] && <div>Accuracy {attempts[0]}</div>}
          </div>

          <div
            className="h-[7rem] w-[14rem] rounded-lg flex flex-col justify-center items-center text-white font-semibold text-md gap-y-3 text-center drop-shadow-[3px_4px_2px_rgba(0,0,0,0.7)]"
            style={
              attempts[1]
                ? attempts[1] >= 50
                  ? { backgroundColor: "#89D85D" }
                  : { backgroundColor: "#D86C5D" }
                : { backgroundColor: "#E3E2E7", color: "black" }
            }
          >
            <div>Attempt 2</div>
            {attempts[1] && <div>Accuracy {attempts[1]}</div>}
          </div>

          <div
            className="h-[7rem] w-[14rem] rounded-lg flex flex-col justify-center items-center text-white font-semibold text-md gap-y-3 text-center drop-shadow-[3px_4px_2px_rgba(0,0,0,0.7)]"
            style={
              attempts[2]
                ? attempts[2] >= 50
                  ? { backgroundColor: "#89D85D" }
                  : { backgroundColor: "#D86C5D" }
                : { backgroundColor: "#E3E2E7", color: "black" }
            }
          >
            <div>Attempt 3</div>
            {attempts[2] && <div>Accuracy {attempts[2]}</div>}
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center gap-x-[4rem] mt-[7rem]">
        {letter != "A" && (
          <NavButton
            text="Previous"
            currLetter={letter}
            onClickHandler={previousLetter}
          />
        )}
        {letter != "Z" && (
          <NavButton
            text="Next"
            currLetter={letter}
            onClickHandler={nextLetter}
          />
        )}
      </div> */}
      {
        (averageAccuracy / attempts.length >= 50 && attempts.length == 3) ? (
          <div className="flex items-center justify-center">
            <button className="bg-lime-600 p-4 rounded-lg text-white shadow-md">Great going!</button>
          </div>
        ) : (
          <></>
        )
      }
      {
        (averageAccuracy / attempts.length < 50 && attempts.length == 3) ? (
          <div className="flex items-center justify-center">
            <button onClick={improvisationNeeded} className="bg-blue-600 p-4 rounded-lg text-white shadow-md">You need to practice more!</button>
          </div>
        ) : (
          <></>
        )
      }
    </div>
  );
};

export default Overalltest;
