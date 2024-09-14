import Mic from "../assets/Mic.png";
import Engaging from "../assets/engaging_interface.png";
import Progress from "../assets/progress_tracking.png";
import Phonic from "../assets/holistic_phonic_training.png";
import Motor from "../assets/motor_based.png";
import Visual from "../assets/visual_auditory_stimulation.png";
import Learning from "../assets/multimodal_learning.png";
import RealTIme from "../assets/RealTIme.png";
import Dimensional from "../assets/threeDimensional.png";
import Illustration from "../assets/Illustration.png";
import Contact from "../assets/Contact Us.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Home() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const getstarted = () => {
    if (isAuthenticated) {
      navigate("/learning");
    } else {
      loginWithRedirect();
    }
  };
  const mySectionRef = useRef(null);
  const scrollToSection = () => {
    mySectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="lg:grid-cols-2 grid grid-cols-1">
        <div className="flex flex-col lg:pl-20 justify-center">
          <div>
            <div className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl lg:text-left text-center flex flex-col gap-4 font-spacegrotesksemibold">
              <div>
                Speak.<span className="text-[#2D8CFF]"> Learn</span>. Thrive
              </div>
              <div>Bridging the gap with</div>
              <div>every word</div>
            </div>
            <div className="lg:hidden flex justify-center mt-10">
              <img src={Mic} />
            </div>
            <div className="lg:text-xl md:text-xl text-lg font-spacegroteskregular my-10 text-center lg:text-start p-1 lg:p-0">
              Our goal is to empower individuals with speech challenges. Unlock
              your potential through personalized speech training.
            </div>
          </div>

          <div className="flex flex-col lg:flex-row sm:flex-row lg:justify-start gap-8 sm:justify-center">
            <div onClick={getstarted} className="flex justify-center">
              <button className="border rounded-md font-spacegroteskmedium flex items-center justify-center px-12 py-4 bg-[#89D85D] text-black hover:bg-opacity-70 border-black">
                <p>Get Started</p>
              </button>
            </div>
            <div className="flex justify-center">
              <button onClick={scrollToSection} className="border flex font-spacegroteskmedium items-center justify-center rounded-md px-7 py-4 border-black hover:bg-black hover:text-white">
                <p>Browse Features</p>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <img src={Mic} />
        </div>
      </div>

      <div ref={mySectionRef}>
        <div className="flex items-center justify-center lg:block">
          <div className="border-y-4 lg:mt-36 md:mt-32 sm:mt-14 mt-16 font-spacegrotesksemibold border-black font-medium lg:text-4xl md:text-3xl sm:text-2xl text-2xl w-fit lg:ml-20 text-center">
            Features
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center gap-8 p-10">
            <div className="bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl lg:h-64 lg:w-96 md:h-64 md:w-96 sm:w-96 max-w-96">
              <div className="flex items-center justify-center lg:items-start lg:justify-start md:items-start md:justify-start">
                <img
                  src={Engaging}
                  alt="arrows"
                  className="lg:h-24 md:h-24 h-14"
                />
              </div>
              <div className="font-spacegrotesksemibold lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start text-white mb-2">
                Engaging Interfacing
              </div>
              <div className="text-white font-spacegrotesklight text-center lg:text-start md:text-start">
                Interactive sessions for an immersive learning experience.
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-2xl lg:h-64 lg:w-96 md:h-64 md:w-96 max-w-96">
              <div className="flex items-center justify-center lg:items-start lg:justify-start md:items-start md:justify-start">
                <img
                  src={Progress}
                  alt=""
                  className="mb-4 lg:h-20 md:h-20 h-14"
                />
              </div>
              <div className="font-spacegrotesksemibold mb-2 lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start">
                Progress Tracking
              </div>
              <div className="font-spacegrotesklight text-center lg:text-start md:text-start">
                Track success, analyze and celebrate milestone.
              </div>
            </div>

            <div className="bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl lg:h-64 lg:w-96 md:h-64 md:w-96 max-w-96">
              <div className="flex items-center justify-center lg:items-start lg:justify-start md:items-start md:justify-start">
                <img src={Phonic} alt="" className="lg:h-24 md:h-24 h-14" />
              </div>
              <div className="font-spacegrotesksemibold text-white mb-2 lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start">
                Holistic Phonics Training
              </div>
              <div className="font-spacegrotesklight text-center lg:text-start md:text-start text-white">
                The software covers the sounds of Hindi in isolation and within
                different words across all word positions.
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-2xl lg:h-64 lg:w-96 md:h-64 md:w-96 max-w-96">
              <div className="flex items-center justify-center lg:items-start lg:justify-start md:items-start md:justify-start">
                <img src={Motor} alt="" className="mb-4 lg:h-20 md:h-20 h-14" />
              </div>
              <div className="font-spacegrotesksemibold mb-2 lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start">
                Motor-Based Intervention
              </div>
              <div className=" font-spacegrotesklight text-center lg:text-start md:text-start">
                Incorporates both perceptual and production training.
              </div>
            </div>

            <div className="bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl lg:h-64 lg:w-96 md:h-64 md:w-96 max-w-96">
              <div className="flex items-center justify-center lg:items-start lg:justify-start md:items-start md:justify-start">
                <img src={Visual} alt="" className="lg:h-24 md:h-24 h-14" />
              </div>
              <div className="font-spacegrotesksemibold text-white mb-2 lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start">
                Visual, Auditory Stimulation
              </div>
              <div className="text-white font-spacegrotesklight text-center lg:text-start md:text-start">
                Emphasize the importance of both senses in the learning process
                for individuals with speech disorders.
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-2xl lg:h-64 lg:w-96 md:h-64 md:w-96 max-w-96">
              <div className="flex items-center justify-center lg:items-start lg:justify-start md:items-start md:justify-start">
                <img
                  src={Learning}
                  alt=""
                  className="mb-4 lg:h-20 md:h-20 h-14"
                />
              </div>
              <div className="font-spacegrotesksemibold mb-2 lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start">
                Multimodal Learning
              </div>
              <div className="font-spacegrotesklight text-center lg:text-start md:text-start">
                Multimodal approach with visual & cues and 3-Dimensional
                animations for effective learning.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center lg:block">
          <div className="border-y-4 p-1 lg:mt-36 md:mt-32 sm:mt-14 mt-16 font-spacegrotesksemibold border-black font-medium lg:text-4xl md:text-3xl sm:text-2xl text-2xl w-fit lg:ml-20 text-center">
            Strengths
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:ml-20 flex flex-col gap-8 items-center justify-center">
              <div className="lg:hidden flex justify-center items-center mt-10">
                <img
                  src={RealTIme}
                  alt=""
                  className="h-[200px] md:h-[300px] sm:h-[300px]"
                />
              </div>
              <div className="lg:text-4xl md:text-3xl text-xl p-1 lg:p-0 lg:text-start text-center font-spacegrotesksemibold">
                Real-Time Speech Detection and Weekly Test Analysis
              </div>
              <div className="font-spacegroteskregular lg:text-xl md:text-xl text-sm lg:text-start text-center p-4 lg:p-0">
                Unlock the potential of your voice through cutting-edge
                technology. Our platform not only hears your words but guides
                you towards eloquence with precision.
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src={RealTIme} alt="" className="h-[400px]" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="flex justify-center mt-10 lg:mt-0 md:mt-0">
              <img
                src={Dimensional}
                alt=""
                className="lg:h-[400px] md:h-[400px] h-[200px]"
              />
            </div>
            <div className="lg:ml-20 ml-0 flex flex-col gap-8 items-center justify-center lg:mt-0 md:mt-0 mt-10">
              <div className="lg:text-4xl md:text-3xl text-xl p-1 lg:p-0 lg:text-start text-center font-spacegrotesksemibold">
                Real-Time Speech Detection and Weekly Test Analysis
              </div>
              <div className="font-spacegroteskregular lg:text-xl md:text-xl text-sm lg:text-start text-center p-4 lg:p-0">
                Unlock the potential of your voice through cutting-edge
                technology. Our platform not only hears your words but guides
                you towards eloquence with precision.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#F3F3F3] lg:my-32 md:my-32 my-10 mx-4 md:mx-32 rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="text-center p-10 flex flex-col lg:items-start items-center justify-center gap-6">
              <div className="lg:text-4xl md:text-3xl text-2xl font-spacegroteskmedium">
                Let's Make things happen!
              </div>
              <div className="font-spacegroteskregular lg:text-lg md:text-lg text-sm lg:text-start text-center">
                To get started and gain some insights and knowledge about speech
                disorders, how to cure them and related stuff go to the articles
                section.
              </div>
              <div className="flex justify-center items-center w-full lg:justify-start">
                <button className="p-4 bg-[#89D85D] rounded-md font-spacegroteskmedium hover:bg-opacity-90">
                  Read Articles →
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:p-4 order-1 ">
              <img
                src={Illustration}
                alt=""
                className="lg:w-[300px] lg:h-[320px] md:w-[300px] md:h-[320px] w-[200px] h-[220px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center lg:block">
          <div className="border-y-4 p-1 lg:mt-36 md:mt-32 sm:mt-14 mt-16 font-spacegrotesksemibold border-black font-medium lg:text-4xl md:text-3xl sm:text-2xl text-2xl w-fit lg:ml-20 text-center">
            Contact Us
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 lg:mt-12 md:mt-12">
            <div className="flex justify-center lg:mt-0 md:mt-0 mt-10">
              <img src={Contact} alt="" className="lg:h-4/5" />
            </div>

            <div>
              <div className="lg:p-8 md:p-8 p-2">
                <div className="flex items-center justify-center">
                  <div className="font-spacegroteskmedium lg:text-4xl md:text-3xl hidden lg:block">
                    Connect With Us
                  </div>
                </div>
                <div>
                  <div className="flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between">
                    <input
                      className="px-4 py-3 lg:w-full md:w-full outline-none font-spacegrotesksemibold m-3 rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="First Name"
                      type="text"
                    />

                    <input
                      className="px-4 py-3 lg:w-full md:w-full outline-none m-3 font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="px-4 py-3 outline-none m-3 font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="Email"
                      type="text"
                    />
                    <input
                      className="px-4 py-3 outline-none m-3 font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="Phone Number"
                      type="text"
                    />

                    <input
                      className="px-4 py-3 outline-none m-3  font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="Message"
                      type="text"
                    />
                    <div className="flex justify-items-center">
                      <button className="bg-[#89D85D] border-[#89D85D] w-full px-4 py-3 m-3 font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95]">
                        Send the message →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
