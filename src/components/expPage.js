import * as React from "react";
import Datas from "../data/landingpage.json";
// import imagePath from "../images/projects/";

const ExpPage = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center px-6 py-8">
      <div className="title flex justify-center font-bold text-white text-3xl pt-4">
        Works Experience
      </div>
      <div className="wrap flex flex-col gap-6 text-white justify-center">
        {Datas.experience.map((item) => (
          <div className="institution flex flex-col items-center">
            <h1 className="text-2xl sm:text-lg">{item.name}</h1>
            <p className="text-sm font-light">
              {item.role} ({item.startDate} - {item.endDate})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpPage;
