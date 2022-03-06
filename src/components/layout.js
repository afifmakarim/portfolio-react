import * as React from "react";
import { Helmet } from "react-helmet";

const LayoutPage = ({ children }) => {
  return (
    <div className="portfolio">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Afif Makarim Portfolio</title>
        <link rel="canonical" href="https://afif.rojoinferno.com" />
      </Helmet>
      {children}
    </div>
  );
};

export default LayoutPage;
