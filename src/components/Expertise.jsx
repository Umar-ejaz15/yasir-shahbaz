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
    <section className=" mx-auto py-16 px-7 md:px-20">
      <div className="flex flex-col justify-center items-center  md:flex-row gap-8">
        <div className="left  flex flex-col  md:w-1/3 bg-zinc-900 px-10 py-4 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">What I Do</h2>
          <p className="text-gray-300">
            Specialized in data analysis and visualization, utilizing Python,
            Power BI, and various analytical tools to transform raw data into
            meaningful insights.
          </p>
        </div>
        <div className="right md:w-2/3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertiseData.map((expertise, index) => (
              <Tilt key={index}>
                <div
                  className="bg-zinc-950 rounded-lg p-6 hover:bg-zinc-900 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-green-500 mb-4">
                    {expertise.title}
                  </h3>
                  <ul className="space-y-3">
                    {expertise.skills.map((skill, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {skill}
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