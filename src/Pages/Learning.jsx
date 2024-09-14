import React from "react";
import Navbar from "../Components/Navbar";
import learningchar1 from "../assets/learningchar1.png";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import learningchar2 from "../assets/learningchar2.png";
import school from "../assets/school.png";
import CourseModal from "../Components/CourseModal";
import Articlescomponent from "../Components/Articlescomponent";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Learning() {
  // const [value, setValue] = React.useState(dayjs("2024-08-25"));
  const navigate = useNavigate();
  const overalltest = () => {
    navigate("/overall");
  }
  return (
    <div>
      <div className="flex justify-center gap-[10%] items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-8 bg-gradient-to-r from-blue-300 to-cyan-100 rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col items-start justify-start gap-4">
              <h2 className="text-2xl font-spacegroteskbold text-gray-800 mb-4">
                Confused on how to get started?
              </h2>
              <p className="text-xl mb-6 font-spacegrotesksemibold">
                Don't worry take our detection of phoneme error test
              </p>
              <button onClick={overalltest} className="bg-[#89D85D] shadow-lg text-lg hover:bg-opacity-80 font-spacegrotesksemibold py-4 px-4 rounded-lg">
                Start Test <span className="ml-2">→</span>
              </button>
            </div>
            <div>
              <img src={learningchar1} alt="learningchar1" />
            </div>
          </div>
        </div>
        <div className="shadow-lg">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem>
                <DateCalendar defaultValue={dayjs("2024-08-25")} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div className="flex items-start mt-10 justify-center gap-20">
        <div className="flex flex-col gap-8 items-center justify-center p-4">
          <div className="text-2xl border-y-2 w-fit border-black font-spacegrotesksemibold">
            Correct your speech with Phonemes catalog
          </div>
          <div className="flex flex-col p-4 pt-0 gap-8 h-[800px] overflow-y-scroll custom-scrollbar">
            <CourseModal
              Phoneme1={"V"}
              Phoneme2={"B"}
              Status={"Continue Learning"}
              Progress={1}
              Color={"#2D8CFF"}
            />
            <CourseModal
              Phoneme1={"P"}
              Phoneme2={"F"}
              Status={"Completed"}
              Progress={4}
              Color={"#89D85D"}
            />
            <CourseModal
              Phoneme1={"T"}
              Phoneme2={"D"}
              Status={"Continue Learning"}
              Progress={1}
              Color={"#2D8CFF"}
            />
            <CourseModal
              Phoneme1={"S"}
              Phoneme2={"Sh"}
              Status={"Continue Learning"}
              Progress={1}
              Color={"#2D8CFF"}
            />
            <CourseModal
              Phoneme1={"F"}
              Phoneme2={"Th"}
              Status={"Continue Learning"}
              Progress={1}
              Color={"#2D8CFF"}
            />
            <CourseModal
              Phoneme1={"L"}
              Phoneme2={"T"}
              Status={"Continue Learning"}
              Progress={1}
              Color={"#2D8CFF"}
            />
          </div>
        </div>
        <div>
          <div className="bg-[#89D85D] p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center justify-center bg-[#2D8CFF] p-4 rounded-full">
                <img src={school} alt="school" />
              </div>
              <div>
                <span className="font-spacegroteskbold">20 min</span>
                <span className="mx-2">·</span>
                <span className="font-spacegroteskbold">4 Tests</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-spacegroteskbold">Today's Goal</h2>
                <h3 className="text-xl font-spacegroteskbold mb-2">
                  Phoneme V and B
                </h3>
                <p className="mb-4 font-spacegrotesksemibold">
                  Tests Left: 3 / 4
                </p>
              </div>
              <div>
                <img src={learningchar2} alt="learningchar2" />
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-spacegrotesksemibold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline">
              Start
            </button>
          </div>
          <div>
            <div className="text-2xl mt-10 border-y-2 w-fit border-black font-spacegrotesksemibold">
              Featured Articles
            </div>
            <div className="flex flex-col pt-0 pl-0 mt-10 gap-4 h-[470px] overflow-y-scroll custom-scrollbar p-4">
              <Articlescomponent />
              <Articlescomponent />
              <Articlescomponent />
              <Articlescomponent />
              <Articlescomponent />
              <Articlescomponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
