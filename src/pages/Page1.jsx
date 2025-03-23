import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Education from "../components/Education";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Cta from "../components/Cta";
import LocomotiveScroll from "locomotive-scroll";

const Page1 = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen flex flex-col gap-5   bg-black text-white ">
      <Navbar />
      <Main />
      <About />
      {/* <Education/> */}
      <Expertise />
      <Skills />
      <Projects />
      <Cta />
    </div>
  );
};

export default Page1;
