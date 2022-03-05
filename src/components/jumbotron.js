import * as React from "react";
import Figura from "../images/Frame.svg";

const Jumbotron = () => {
  return (
    <div className="wrap flex justify-center gap-4 sm:flex-col p-4">
      <div className="title flex-col">
        <h1 className="text-7xl font-bold tracking-wide leading-relaxed flex-wrap text-gray">
          Hello,
          <br />
          I'm <span className="text-orange">Afif</span>
        </h1>
        <p className="text-base tracking-wide leading-relaxed my-6 text-gray">
          Based in the South Jakarta, Indonesia. <br />
          If you'd like to start a new project, need help with an existing
          project or have any other enquiry, please get in touch.
        </p>
        <a
          href="#projects"
          class="drop-shadow-xl bg-orange hover:bg-gray text-white py-2 px-10 rounded"
        >
          Learn More
        </a>
      </div>
      <div className="figura order-first">
        <img src={Figura} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Jumbotron;
