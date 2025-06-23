import React from "react";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import Gradient from "./Gradient";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <main className="h-screen px-4 sm:px-7 lg:px-20 bg-black">
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
                Hi, I'm Yasir{" "}
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
                  className="text-green-400"
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
                  className="text-green-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Transforming Data into Insights
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-2xl md:w-3/4 mx-auto mt-4 leading-relaxed"
            >
              Turning complex data into actionable business insights through advanced 
              analytics and statistical modeling. Expert in data visualization, 
              predictive analytics, and developing data-driven solutions that drive 
              strategic decision-making.
            </motion.p>
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="px-10 py-3 mt-8  border border-green-600 bg-green-500 hover:bg-green-600 cursor-pointer rounded-full font-medium text-xl shadow-lg"
            >
              <a
                href="https://calendly.com/workwithyasir13/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Let's Connect
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Main;