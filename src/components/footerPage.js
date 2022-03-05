import * as React from "react";

const FooterPage = () => {
  return (
    <div className="universal">
      <div className="bg-orange flex h-60 sm:flex-col">
        <div className="text-white bg-github-pattern bg-center bg-cover box-github h-full basis-full flex items-center justify-center">
          <a
            href="#"
            className="hover:text-orange text-7xl sm:text-3xl font-bold"
          >
            Github
          </a>
        </div>
        <div className="text-white bg-trakteer-pattern box-trakteer bg-center bg-cover box-github h-full basis-full flex items-center justify-center">
          <a
            href="#"
            className="hover:text-orange text-7xl sm:text-3xl font-bold"
          >
            Trakteer
          </a>
        </div>
      </div>
      <div className="text-xs footer bg-orange p-4 font-light text-white flex justify-center">
        Copyright 2022 - All right reserved - Afif Makarim
      </div>
    </div>
  );
};

export default FooterPage;
