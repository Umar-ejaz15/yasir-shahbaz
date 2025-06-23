import React from "react";
import Tilt from "react-parallax-tilt";

const expertiseData = [
  {
    title: "Data Analysis",
    skills: [
      "Python: Pandas, NumPy, SciPy",
      "Statistical Analysis & Modeling",
      "Data Cleaning & Preprocessing",
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      "Power BI: Dashboard Creation, Reports",
      "Python Libraries: Matplotlib, Seaborn",
      "Interactive Visualizations: Plotly",
    ],
  },
  {
    title: "Business Intelligence",
    skills: [
      "ETL Processes & Data Warehousing",
      "SQL for Data Analysis",
      "Advanced Excel & Pivot Tables",
    ],
  },
  {
    title: "Data Tools",
    skills: [
      "Jupyter Notebooks & Google Colab",
      "Tableau & Data Studio",
      "Machine Learning Libraries",
    ],
  },
];

const Expertise = () => {
  return (
    <section className=" mx-auto py-20 px-7 md:px-20">
      <div className="flex flex-col justify-center items-center md:flex-row gap-12">
        <div className="left flex flex-col md:w-1/3 bg-zinc-950 px-10 py-8 rounded-2xl shadow-[0_0_15px_rgba(34,197,94,0.2)] transform hover:scale-105 transition-all duration-500">
          <h2 className="text-5xl font-bold text-green-500 mb-6 animate-fade-in">What I Do</h2>
          <p className="text-gray-300 leading-relaxed hover:text-green-100 transition-colors duration-300">
            Specialized in data analysis and visualization, utilizing Python,
            Power BI, and various analytical tools to transform raw data into
            meaningful insights.
          </p>
        </div>
        <div className="right md:w-2/3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertiseData.map((expertise, index) => (
              <Tilt
                key={index}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#22c55e"
                glarePosition="all"
                scale={1.02}
              >
                <div
                  className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-green-500 transition-all duration-500 shadow-lg hover:shadow-green-500/20"
                >
                  <h3 className="text-2xl font-bold text-green-500 mb-6 transform hover:translate-x-2 transition-transform duration-300">
                    {expertise.title}
                  </h3>
                  <ul className="space-y-4">
                    {expertise.skills.map((skill, i) => (
                      <li key={i} className="text-gray-300 flex items-center group">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:w-3 group-hover:h-3 transition-all duration-300"></span>
                        <span className="group-hover:text-green-400 transition-colors duration-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;