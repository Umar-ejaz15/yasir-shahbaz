import React from "react";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import Gradient from "./Gradient";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <main className="h-screen px-4 sm:px-7 lg:px-20">
      <div className="w-full h-full flex flex-col justify-center relative">
        <Gradient />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center text-center gap-4"
        >
          <div>
            <motion.div className="overflow-hidden md:h-16">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-2"
              >
                Yasir Shahbaz{" "}
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-gray-400"
                >
                  |
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-green-500"
                >
                  Data Scientist
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.div 
              className="h-16 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.h1
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-2"
              >
                <motion.span 
                  className="text-green-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  & Product Enthusiast
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-2xl md:w-2/3 mx-auto mt-2"
            >
              Transforming complex data into meaningful insights and innovative
              products using Python, Machine Learning & Analytics
            </motion.p>
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-10 py-2 mt-6 bg-green-500 hover:bg-green-600 cursor-pointer rounded-md font-medium text-xl"
            >
              <a
                href="https://calendly.com/workwithyasir13/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Currently Available
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Main;