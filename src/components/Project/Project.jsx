import React, { useState } from 'react'
import { data } from '../../Data/Data.js'
import './project.css'
import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  
  useGSAP(() => {
    // Animate the projects container
    gsap.from('.projects', {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 90%',
        end: 'top 60%',
        // markers: true,
        toggleActions: 'play none none none',
        scrub: true
      }
    });

    // Animate each project item
    gsap.utils.toArray('.project-item').forEach(item => {
      gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'top 30%',
          // markers: true,
          toggleActions: 'play none none none',
          scrub: true
        }
      });
    });
  });

 
 


    
  

    // console.log(data);

    const [activeType, setActiveType] = useState('');
    const [projects, setProjects] = useState(data);
  
    const filterType = (category) => {
      setActiveType(category); 
      setProjects(
        category === '' ? data : data.filter((item) => item.category === category)
      );
    };
  
  return (
    <div className=' flex justify-center pt-36'>

<div className='projects py-10 lg:w-[70%] px-4 ' id="project">
<div className='flex flex-col justify-center items-center'>
<h1 className='text-5xl py-2 font-bold tracking-[2px] text-[#263238]'>Projects</h1>
<hr className='hr lg:w-[30%] w-[80%] h-1 rounded-full mt-1 bg-[#a0b1ba]' id='hr' />

</div>
      
<div className='flex items-center justify-start pt-8 pb-2 gap-4 flex-wrap '>

<button
            onClick={() => {
              setActiveType(''); 
              setProjects(data);  
            }}
            className={`duration-300 font-semibold lg:text-md text-md py-1 px-4 rounded-md text-[#2632 ${
              activeType === '' ? 'bg-[#e6e6e9]' : 'bg-[#f9f9fd] border-2 border-[#263238]'
            } border-2 border-[#263238]  `}
          >
            View All
          </button>


            <button
    onClick={() => filterType('uiux')}
    className={`relative duration-300 font-semibold lg:text-md text-sm flex items-center justify-center overflow-hidden text-[#263238] ${
      activeType === 'uiux' 
        ? 'bg-[#e6e6e9] shadow-sm shadow-gray-300'
        : 'bg-[#f9f9fd]  shadow-sm shadow-gray-300'
    } rounded-md py-2 px-4`}
  >
    UI/UX Design
  </button>
  
  
  
  
              <button
    onClick={() => filterType('frontend')}
    className={`duration-300 font-semibold lg:text-md text-sm relative z-100 flex items-center justify-center overflow-hidden rounded-md py-2 px-4 text-[#263238] ${
      activeType === 'frontend' 
        ? 'bg-[#e6e6e9] shadow-sm shadow-gray-300'
        : 'bg-[#f9f9fd]  shadow-sm shadow-gray-300'
    }`}
  >
    Frontend Projects
  </button>
  
  
          
          </div>

          <div className='w-full flex justify-center items-center' id='projects'>
      <div className='project-item grid grid-cols-1 lg:grid-cols-1 gap-10 pt-4 w-full'>
        {projects.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg overflow-hidden'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full object-cover rounded-t-lg hover:scale-105 duration-300 cursor-pointer hover:shadow-lg shadow-black'
            />
            <div className='flex flex-col justify-between px-4 pb-4 pt-8'>
              <div className='flex gap-4 items-center'>
                <div className='flex items-center pb-4'>
                  <p className='font-bold lg:text-7xl text-4xl text-[#cfd8dc]'>0{item.id}</p>
                </div>
                <div>
                  <p className='font-bold lg:text-4xl text-2xl cursor-pointer text-[#263238]'>{item.name}</p>
                  <p className='lg:text-md text-md text-[#a0b1ba] font-semibold'>{item.projectType}</p>
                </div>
              </div>
              <div className='flex pb-4 lg:items-center items-end justify-between'>
                <p className='mt-4 lg:text-lg text-md text-[#455A64]'>{item.description}</p>
                <div className='tooltip-container relative inline-block pl-2'>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-2 py-2 bg-none text-[#a0b1ba] hover:bg-[#d7dee2] border-[#dee4e7] border-2 duration-500 rounded-lg cursor-pointer inline-block'
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

export default Projects