import { motion } from "motion/react";
import React from "react";
import {
  FaDatabase,
  FaCode,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

const aboutData = {
  title: "About Me",
  description: "I am a passionate software developer with a deep love for creating innovative solutions and tackling complex technical challenges. With years of experience in the field, I've developed a comprehensive skill set that allows me to bring ideas to life through code. My approach combines technical expertise with creative problem-solving to deliver high-quality, user-centric applications that make a real impact.",
  cards: [
    {
      icon: FaCode,
      title: "Development Expertise",
      description: "Passionate developer specializing in creating modern, efficient, and scalable solutions. Proficient in cutting-edge technologies and best practices for delivering exceptional results."
    },
    {
      icon: FaDatabase,
      title: "System Architecture",
      description: "Expert in designing and implementing robust system architectures that prioritize performance, security, and scalability while maintaining clean code practices."
    },
    {
      icon: FaBrain,
      title: "Problem Solving",
      description: "Analytical thinker with a proven track record of solving complex technical challenges through innovative solutions and strategic approaches to development."
    },
    {
      icon: FaRocket,
      title: "Innovation Driven",
      description: "Committed to pushing technological boundaries and embracing new challenges. Always exploring cutting-edge solutions to deliver exceptional results."
    }
  ]
};

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className="w-full min-h-screen bg-black flex flex-col md:flex-row gap-12 items-center px-8 md:px-24 py-20"
    >
      <div className="w-full flex flex-col gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-5xl md:text-6xl font-bold text-center mb-10 text-green-400"
        >
          {aboutData.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-lg text-gray-300 leading-relaxed text-center mb-12"
        >
          {aboutData.description}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {aboutData.cards.map((card, index) => (
            <div key={index} className="border bg-zinc-950 border-zinc-400/20 hover:scale-105 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm">
              <card.icon className="text-5xl text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;