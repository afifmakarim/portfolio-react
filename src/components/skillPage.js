import * as React from "react";
import Datas from "../data/landingpage.json";

const SkillPage = () => {
  return (
    <div id="skillPage" className="bg-gray p-6">
      <div className="title flex justify-center font-bold text-white text-3xl pt-4">
        My Skills
      </div>
      <div className="wrap grid overflow-hidden grid-cols-4 grid-rows-2 gap-4 text-white sm:grid-cols-2">
        {Datas.skills.map((skill) => (
          <div
            key={skill.name}
            className="card border-solid border-1 bg-orange py-5 px-8 flex flex-col items-center rounded-tl-2xl rounded-br-2xl"
          >
            <div className="text-xl font-bold sm:text-lg">{skill.name}</div>
            <div className="text-sm font-light">{skill.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
