import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow } from "swiper/modules";

const Projects = () => {
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
  ];

  return (
    <section className="w-full h-auto px-4 sm:px-7 md:px-20 py-8 sm:py-16" id="projects">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-white text-center">
        My Projects
      </h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, EffectCoverflow]}
        className="mySwiper !pb-12"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!w-[300px] sm:!w-[350px]">
            <div className="bg-zinc-950 hover:bg-zinc-900 transition-all duration-500 text-white rounded-xl shadow-2xl p-4 h-[450px] flex flex-col transform hover:-translate-y-2 hover:shadow-emerald-500/20">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl sm:text-2xl mt-6 font-bold mb-3 text-emerald-400">
                {project.title}
              </h3>
              <p className="text-gray-300 flex-grow text-md sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-900 text-emerald-400 rounded-full text-xs sm:text-sm hover:bg-emerald-400 hover:text-zinc-900 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;