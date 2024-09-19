import React from "react";
import { useNavigate } from "react-router-dom";
import learningphonemechar from "../assets/learningphonemechar.png";

export default function CourseModal({
  Phoneme1,
  Phoneme2,
  Status,
  Color,
  Progress,
}) {
  const navigate = useNavigate();
  const coursetest = () => {
    navigate(`/course/${Phoneme1}`);
  };
  return (
    <div>
      <div className="bg-[#F5F0F0] w-[800px] gap-8 flex items-center justify-center p-8 rounded-xl shadow-xl">
        <div className="bg-[#E5D1FF] p-6 rounded-xl">
          <img src={learningphonemechar} alt="learningphonemechar" />
        </div>
        <div className="flex gap-20 justify-between items-center">
          <div>
            <div>
              <p className="font-spacegrotesksemibold text-xl">
                Phoneme {Phoneme1} and {Phoneme2}
              </p>
            </div>
            <div>
              <p className="font-spacegroteskregular">Progress</p>
            </div>
          </div>
          <div>
            <p className="font-spacegrotesksemibold text-xl">
              Tests: {Progress} / 4
            </p>
          </div>
          <div>
            <div
              onClick={coursetest}
              style={{ backgroundColor: Color }}
              className="p-2 rounded-lg"
            >
              <button className="font-spacegrotesksemibold text-white text-md">
                {Status} <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
