import React from "react";
import { FaDatabase, FaChartBar, FaPython, FaLaptopCode, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full h-auto md:h-screen flex flex-col md:flex-row gap-8 items-center px-7 md:px-20 py-16">
      <div className="w-full md:w-full flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-lg sm:text-2xl text-gray-300 text-justify md:text-left leading-relaxed">
          I'm a passionate <span className="font-bold text-green-400">Data Analyst</span> specializing in <span className="font-bold text-green-400">data analysis and visualization</span>. 
          My expertise includes working with <FaPython className="inline text-yellow-500 mx-1"/> Python, particularly with <span className="font-bold text-green-400">Pandas</span> and <span className="font-bold text-green-400">NumPy</span> for advanced data manipulation 
          and analysis. <FaLaptopCode className="inline text-purple-500 mx-1"/> I'm also proficient in SQL and various data visualization tools.
        </p>
        <p className="text-lg sm:text-2xl text-gray-300 text-justify md:text-left leading-relaxed">
          <FaDatabase className="inline text-green-500 mx-1"/> I've worked extensively with diverse datasets, transforming raw data into meaningful insights 
          through <span className="font-bold text-green-400">statistical analysis</span>, <span className="font-bold text-green-400">data cleaning</span>, and <span className="font-bold text-green-400">predictive modeling</span>. My projects have helped 
          businesses make data-driven decisions and optimize their operations for better performance.
        </p>
        <p className="text-lg sm:text-2xl text-gray-300 text-justify md:text-left leading-relaxed">
          <FaChartBar className="inline text-green-500 mx-1"/> Let's collaborate to transform your data into actionable insights and compelling 
          visualizations that drive strategic business decisions. <FaChartLine className="inline text-red-500 mx-1"/> Together, we can uncover patterns, trends, and opportunities hidden in your data.
        </p>
      </div>
    </div>
  );
};

export default About;