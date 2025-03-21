import React from "react";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import Gradient from "./Gradient";

const Main = () => {
  return (
    <main className="h-screen px-4 sm:px-7 lg:px-20">
      <div className="w-full h-full flex flex-col justify-center relative">
        <Gradient />
        <div className="flex items-center justify-center text-center gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-4">
              Yasir Shahbaz <span className="text-gray-400">|</span>{" "}
              <span className="text-green-500">
                Data Scientist & Product Enthusiast
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl ">
              Transforming complex data into meaningful insights and innovative
              products using Python, Machine Learning & Analytics
            </p>
            <button className="px-10 py-2 mt-10 bg-green-500 hover:bg-green-600 cursor-pointer rounded-md font-medium text-xl">
              {" "}
              <a
                href="https://calendly.com/workwithyasir13/30min"
                target="_blank"
              >
                Currently Available
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
