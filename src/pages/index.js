import * as React from "react";
import NavbarPage from "../components/navbar";
import LayoutPage from "../components/layout";
import Jumbotron from "../components/jumbotron";
import SkillPage from "../components/skillPage";
import ProjectPage from "../components/ProjectPage";
import ExpPage from "../components/expPage";
import FooterPage from "../components/footerPage";

const Home = () => {
  return (
    <>
      {" "}
      <LayoutPage>
        <NavbarPage />
        <Jumbotron />
        <SkillPage />
        <ProjectPage />
        <ExpPage />
        <FooterPage />
      </LayoutPage>
    </>
  );
};

export default Home;
// https://blog.logrocket.com/using-gatsby-with-tailwind-css-a-tutorial-with-examples/
