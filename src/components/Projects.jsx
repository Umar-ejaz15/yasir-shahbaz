import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Olympic Games Dashboard",
      description:
        "Interactive dashboard showcasing historical Olympic data, medal counts, and athlete performances across different games and countries.",
      image: "/projects/Olympic dashboard.jpg",
      tags: ["Power BI", "Data Visualization", "Analytics"],
    },
    {
      id: 3,
      title: "Hospital Management Dashboard",
      description:
        "Advanced healthcare analytics dashboard providing real-time insights into patient care, resource allocation, and hospital performance metrics.",
      image: "/projects/Hospital datadashbord with power.jpg",
      tags: ["Power BI", "Healthcare Analytics", "Dashboard"],
    },
    {
      id: 4,
      title: "Amazon Sales Analytics",
      description:
        "Comprehensive sales analysis dashboard for Amazon marketplace, tracking revenue trends, product performance, and customer behavior patterns.",
      image: "/projects/Amzon Sales Dashboard with Power BBI.jpg",
      tags: ["Power BI", "E-commerce", "Sales Analytics"],
    },
    {
      id: 5,
      title: "Financial Performance Dashboard",
      description:
        "Dynamic financial analytics platform showcasing key performance indicators, revenue metrics, and market trends analysis.",
      image: "/projects/Screenshot 2025-01-15 180212.jpg",
      tags: ["Data Analysis", "Finance", "Visualization"],
    },
    {
      id: 6,
      title: "Uber Data Analysis",
      description:
        "Comprehensive analysis of Uber ride data using Python, featuring data cleaning, visualization, and pattern recognition to derive meaningful insights about user behavior and service optimization.",
      image: "/projects/Uber data analysis with python.jpg",
      tags: ["Python", "Data Analysis", "Pandas", "Visualization"],
    },
    {
      id: 7,
      title: "Data Analysis",
      description:
        "In-depth analysis of data using Python, including content categorization, regional preferences, and viewing trends to understand audience engagement and content performance metrics.",
      image: "/projects/7.jpg",
      tags: ["Python", "Data Analysis", "Pandas", "Visualization"],
    },
  ];

  return (
    <section
      className="w-full h-auto px-4 sm:px-7 md:px-20 py-8 sm:py-16"
      id="projects"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-white text-center">
        My Projects
      </h1>
      <div className="flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!w-[280px] sm:!w-[320px] md:!w-[350px]"
            >
              <div
                className="bg-zinc-950 hover:bg-zinc-900 transition-all duration-300 text-white rounded-xl shadow-lg p-4 h-[450px] flex flex-col justify-center items-center cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="overflow-hidden rounded-lg h-48 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col flex-grow mt-4">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-zinc-800 text-emerald-400 rounded-md text-xs font-medium hover:bg-emerald-400 hover:text-zinc-900 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-emerald-400 focus:outline-none"
            >
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;