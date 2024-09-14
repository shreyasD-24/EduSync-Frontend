import React from "react";
import learningarticlesimg from "../assets/learningarticlesimg.png";
import personfilled from "../assets/person_filled.png";

export default function Articlescomponent() {
  return (
    <div className="flex border border-gray-300 p-4 gap-4 max-w-[400px] rounded-xl items-center justify-center shadow-lg">
      <div>
        <img src={learningarticlesimg} alt="learningarticlesimg" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-spacegroteskregular">
          Ipsum odio et integer aliquet lorem a, sem suscipit varius.
        </div>
        <div className="flex gap-4 items-center justify-start">
          <img src={personfilled} alt="personfilled" />
          <div className="font-spacegroteskregular">Shams Tabrez</div>
        </div>
      </div>
    </div>
  );
}