import { motion } from "framer-motion";
import React from "react";
import { BiData } from "react-icons/bi";
import {
  FaDatabase,
  FaPython,
  FaChartBar,
  FaChartLine,
  FaFileExcel,
  FaChartPie,
} from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";

// Explicitly mapping Tailwind colors to avoid issues in production
const colorClasses = {
  blue: "text-blue-500 bg-blue-500/20",
  yellow: "text-yellow-500 bg-yellow-500/20",
  red: "text-red-500 bg-red-500/20",
  purple: "text-purple-500 bg-purple-500/20",
  green: "text-green-500 bg-green-500/20",
  orange: "text-orange-500 bg-orange-500/20",
  cyan: "text-cyan-500 bg-cyan-500/20",
  pink: "text-pink-500 bg-pink-500/20",
  indigo: "text-indigo-500 bg-indigo-500/20",
};

const skillsData = [
  {
    icon: FaDatabase,
    color: "blue",
    title: "SQL & Databases",
    skills: [
      { proficiency: "95%", name: "MySQL" },
      { proficiency: "90%", name: "PostgreSQL" },
      { proficiency: "85%", name: "MongoDB" },
      { proficiency: "90%", name: "Query Optimization" },
    ],
  },
  {
    icon: FaPython,
    color: "yellow",
    title: "Programming",
    skills: [
      { proficiency: "95%", name: "Python" },
      { proficiency: "85%", name: "R" },
      { proficiency: "90%", name: "VBA" },
      { proficiency: "80%", name: "Shell Scripting" },
    ],
  },
  {
    icon: TbMathFunction,
    color: "red",
    title: "Statistical Analysis",
    skills: [
      { proficiency: "90%", name: "Hypothesis Testing" },
      { proficiency: "85%", name: "Regression Analysis" },
      { proficiency: "85%", name: "A/B Testing" },
      { proficiency: "80%", name: "Time Series Analysis" },
    ],
  },
  {
    icon: FaChartPie,
    color: "purple",
    title: "Data Visualization",
    skills: [
      { proficiency: "95%", name: "Tableau" },
      { proficiency: "90%", name: "Power BI" },
      { proficiency: "85%", name: "Matplotlib" },
      { proficiency: "85%", name: "Plotly" },
    ],
  },
  {
    icon: FaFileExcel,
    color: "green",
    title: "Excel & Spreadsheets",
    skills: [
      { proficiency: "95%", name: "Advanced Excel" },
      { proficiency: "90%", name: "Google Sheets" },
      { proficiency: "90%", name: "Pivot Tables" },
      { proficiency: "85%", name: "Macros" },
    ],
  },
  {
    icon: FaChartBar,
    color: "orange",
    title: "Analytics Tools",
    skills: [
      { proficiency: "90%", name: "Google Analytics" },
      { proficiency: "85%", name: "Marketing Analytics" },
      { proficiency: "85%", name: "Web Analytics" },
      { proficiency: "80%", name: "SEO Analytics" },
    ],
  },
  {
    icon: BiData,
    color: "cyan",
    title: "Data Processing",
    skills: [
      { proficiency: "90%", name: "Data Cleaning" },
      { proficiency: "85%", name: "ETL Processes" },
      { proficiency: "90%", name: "Data Wrangling" },
      { proficiency: "85%", name: "Data Quality" },
    ],
  },
  {
    icon: FaChartLine,
    color: "pink",
    title: "Business Intelligence",
    skills: [
      { proficiency: "90%", name: "KPI Development" },
      { proficiency: "85%", name: "Dashboard Design" },
      { proficiency: "85%", name: "Report Automation" },
      { proficiency: "90%", name: "Data Storytelling" },
    ],
  },
  {
    icon: FaChartBar,
    color: "indigo",
    title: "Machine Learning",
    skills: [
      { proficiency: "85%", name: "Predictive Models" },
      { proficiency: "80%", name: "Classification" },
      { proficiency: "80%", name: "Clustering" },
      { proficiency: "75%", name: "Model Evaluation" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen py-16 px-4 bg-black">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-16">
          Data Analysis Skills
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              key={index}
              className="bg-zinc-950 hover:bg-zinc-900 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all "
            >
              <div className="flex items-center justify-center mb-4">
                <skill.icon
                  className={`text-4xl ${colorClasses[skill.color]}`}
                />
              </div>
              <h3 className="text-xl font-bold text-center text-white mb-4">
                {skill.title}
              </h3>
              <div className="text-gray-300 space-y-2">
                {skill.skills.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div
                      className={`w-20 ${
                        colorClasses[skill.color]
                      } rounded px-2 py-1`}
                    >
                      {item.proficiency}
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;