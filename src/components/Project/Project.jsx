import React, { useState } from "react";
import { data } from "../../Data/Data.jsx";
import "./project.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    // Animate title and line
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        start: "top 85%",
        end: "top 20%", 
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".project-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".hr", {
      width: 0,
      duration: 1,
      ease: "power3.inOut"
    }, "-=0.7")
    .from(".filter-button", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      clearProps: "all"
    }, "-=0.5");

    // Animate project cards with less dramatic animation
    const animateNewCards = () => {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all" // Clear transforms after animation
      });
    };

    // Initial animation
    animateNewCards();

    // Make the animation function available globally
    window.animateNewCards = animateNewCards;

  }, []);

  const [activeType, setActiveType] = useState("");
  const [projects, setProjects] = useState(data);
  const [loading, setLoading] = useState(
    Array(data.length).fill(true)
  );
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filterType = (category) => {
    setActiveType(category);
    setProjects(
      category === "" ? data : data.filter((item) => item.category === category)
    );
    setVisibleProjects(4);
  };

  const handleImageLoad = (index) => {
    setLoading((prev) => {
      const updatedLoading = [...prev];
      updatedLoading[index] = false;
      return updatedLoading;
    });
  };

  const loadMore = () => {
    setVisibleProjects(prev => {
      const newValue = prev + 4;
      // Wait for next render then animate new cards
      setTimeout(() => window.animateNewCards(), 0);
      return newValue;
    });
  };

  return (
    <div className="flex justify-center pt-20 cursor-default lg:px-10">
      <div className="projects py-10 lg:w-full w-full px-4" id="project">
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="project-title text-5xl py-2 font-bold tracking-[2px]">Projects</h1>
          <hr
            className="hr lg:w-[30%] w-[80%] h-1 rounded-full mt-1 bg-[#a0b1ba]"
            id="hr"
          />
        </div>

        <div className="flex items-start justify-start gap-4 w-full pl-4 mb-8">
          <button
            onClick={() => {
              setActiveType("");
              setProjects(data);
            }}
            className={`filter-button relative px-4 py-1.5 rounded-lg font-semibold transition-all duration-300 ease-in-out ${
              activeType === "" 
                ? "bg-[var(--skills-bg)] text-[var(--text-color)] shadow-md scale-105 border-2 border-[#a0b1ba]"
                : "bg-[var(--project-bg)] text-[var(--text-color)] hover:bg-[var(--skills-bg)] hover:scale-102"
            }`}
          >
            All Projects
          </button>
          
          <button
            onClick={() => filterType("frontend")}
            className={`filter-button relative px-4 py-1.5 rounded-lg font-semibold transition-all duration-300 ease-in-out ${
              activeType === "frontend"
                ? "bg-[var(--skills-bg)] text-[var(--text-color)] shadow-md scale-105 border-2 border-[#a0b1ba]"
                : "bg-[var(--project-bg)] text-[var(--text-color)] hover:bg-[var(--skills-bg)] hover:scale-102"
            }`}
          >
            Frontend
          </button>
          
          <button
            onClick={() => filterType("uiux")}
            className={`filter-button relative px-4 py-1.5 rounded-lg font-semibold transition-all duration-300 ease-in-out ${
              activeType === "uiux"
                ? "bg-[var(--skills-bg)] text-[var(--text-color)] shadow-md scale-105 border-2 border-[#a0b1ba]"
                : "bg-[var(--project-bg)] text-[var(--text-color)] hover:bg-[var(--skills-bg)] hover:scale-102"
            }`}
          >
            UI/UX
          </button>
        </div>

        <div className="w-full flex flex-col justify-center items-center" id="projects">
          <div className="project-item grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            {projects.slice(0, visibleProjects).map((item, index) => (
              <div
                key={item.id}
                className="project-card group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl"
                style={{ backgroundColor: "var(--project-bg)", opacity: 1 }}
              >
                
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full lg:h-[400px] h-[300px] object-cover transition-transform duration-500 group-hover:scale-105 ${
                      loading[index] ? "hidden" : ""
                    }`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-100 group-hover:bg-black/60 transition-all duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-[45%] group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-white/60">0{item.id}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                      <p className="text-white/70">{item.projectType}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(item.skills || []).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-medium bg-white/20 hover:bg-white/30 transition-colors duration-300 text-white rounded-full backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/90 mb-4 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>

                  <div className="flex justify-end gap-2">
                    <div className="tooltip-container group/tooltip flex items-center gap-2 relative">
                      <span className="tooltip-text bg-white/20 backdrop-blur-sm text-white/90 text-sm z-10 absolute">
                        {item.location}
                      </span>
                      <a
                        href="#top"
                        className="p-2 hover:border-white/60 rounded-lg transition-all duration-300 group/up flex items-center"
                      >
                        <svg
                          className="w-6 h-6 text-white group-hover/up:-translate-y-1 group-hover/up:rotate-[45deg] transition-all duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visibleProjects < projects.length && (
            <div className="flex flex-col items-center gap-2 mt-20 mb-10">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-[var(--project-bg)] text-[var(--text-color)] rounded-lg font-semibold hover:bg-[var(--skills-bg)] transition-all duration-300 hover:scale-105 hover:shadow-md border-2 border-[#a0b1ba]"
              >
                Show More
              </button>
              <span className="text-sm text-[var(--text-color)]">
                Showing {visibleProjects} of {projects.length} projects
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
