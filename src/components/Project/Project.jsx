import React, { useState } from 'react';
import { data } from '../../Data/Data.js';
import './project.css';
import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  
  useGSAP(() => {
    gsap.from('.projects', {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 90%',
        end: 'top 60%',
        toggleActions: 'play none none none',
        scrub: true
      }
    });

    gsap.utils.toArray('.project-item').forEach(item => {
      gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'top 30%',
          toggleActions: 'play none none none',
          scrub: true
        }
      });
    });
  });

  const [activeType, setActiveType] = useState('');
  const [projects, setProjects] = useState(data);

  const filterType = (category) => {
    setActiveType(category); 
    setProjects(
      category === '' ? data : data.filter((item) => item.category === category)
    );
  };

  return (
    <div className='flex justify-center pt-36 cursor-default lg:px-10'>
      <div className='projects py-10 lg:w-full px-4' id="project">
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl py-2 font-bold tracking-[2px]'>Projects</h1>
          <hr className='hr lg:w-[30%] w-[80%] h-1 rounded-full mt-1 bg-[#a0b1ba]' id='hr' />
        </div>
        
        <div className='flex items-center justify-start pt-8 pb-2 gap-4 flex-wrap'>
          <button
            onClick={() => {
              setActiveType(''); 
              setProjects(data);  
            }}
            className={`duration-300 font-semibold lg:text-md text-md py-1 px-4 rounded-md  ${
              activeType === '' ? 'bg-[var(--background-button)] text-[var(--text-skill-active)] ' : 'bg-[var(--background-button-bg)] '
            }`}
            style={{
              border: `2px solid var(--filter-button)`,
            }}
          >
            View All
          </button>
          <button
            onClick={() => filterType('frontend')}
            className={`duration-300 font-semibold lg:text-md text-sm relative z-100 flex items-center justify-center overflow-hidden rounded-md py-2 px-4 ${
              activeType === 'frontend' 
                ? 'bg-[var(--background-button)] shadow-sm shadow-gray-300 text-[var(--text-skill-active)]'
                : 'bg-[var(--background-button-bg)] shadow-sm shadow-gray-300'
            }`}
          >
            Frontend Projects
          </button>
          <button
            onClick={() => filterType('uiux')}
            className={`relative duration-300 font-semibold lg:text-md text-sm flex items-center justify-center overflow-hidden ${
              activeType === 'uiux' 
                ? 'bg-[var(--background-button)] shadow-sm shadow-gray-300 text-[var(--text-skill-active)]'
                : 'bg-[var(--background-button-bg)] shadow-sm shadow-gray-300'
            } rounded-md py-2 px-4`}
          >
            UI/UX Design
          </button>
          
         
        </div>

        <div className='w-full flex justify-center items-center ' id='projects'>
          <div className='project-item grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4 w-full '>
            {projects.map((item, index) => (
              <div
                key={index}
                className='project shadow-lg rounded-lg overflow-hidden p-4'
                style={{ backgroundColor: 'var(--project-bg)' }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full lg:h-96 h-50 object-cover rounded-lg  '
                />
                <div className='flex flex-col justify-between px-4 pb-4 pt-4'>
                  <div className='flex gap-4 items-center'>
                    <div className='flex items-center pb-4'>
                      <p className='font-bold lg:text-7xl text-4xl text-[#cfd8dc]'>0{item.id}</p>
                    </div>
                    <div className='flex flex-col flex-wrap'>
                      <p className='font-bold lg:text-4xl text-2xl'>{item.name}</p>
                      <p className='lg:text-md text-md text-[#a0b1ba] font-semibold lg:mt-2'>{item.projectType}</p>
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-2 mt-2'>
  {(item.skills || []).map((skill, idx) => (
    <span
      key={idx}
      className='bg-[var(--skills-bg)] font-semibold text-sm lg:px-5 px-3 py-1 rounded-full flex-wrap'
    >
      {skill}
    </span>
  ))}
</div>

                  <div className='flex flex-row pb-4 lg:items-center items-end'>
                    <p className='mt-4 lg:text-lg text-md'>{item.description}</p>
                    
                    <div className='tooltip-container relative inline-block pl-2 mt-4'>
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='px-2 py-2 bg-none text-[var-(--text-skill)] hover:bg-gray-300 border-gray-300 border-2 duration-500 rounded-lg cursor-pointer inline-block'
                      >
                        <MdArrowOutward className='lg:text-4xl text-2xl' />
                      </a>
                      <p className='tooltip-text bottom-[-60%] lg:bottom-[-50%]'>{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
