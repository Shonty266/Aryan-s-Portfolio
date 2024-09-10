import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { IoIosArrowDown } from 'react-icons/io';
import { useGSAP } from '@gsap/react';
// import Project from '../Project/Project'; 
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const textRefs = useRef([]);
  const projectRef = useRef(null);

  useEffect(() => {
    textRefs.current.forEach((text) => {
      if (!text) return;

      const textAnimation = gsap.to(text, {
        duration: 1.6,
        y: -25,
        ease: 'power2.inOut',
        paused: true,
      });

      const handleMouseEnter = () => {
        textAnimation.play();
        textAnimation.eventCallback('onComplete', () => {
          textAnimation.reverse();
        });
      };

      text.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        text.removeEventListener('mouseenter', handleMouseEnter);
        textAnimation.kill();
      };
    });
  }, []);

  const scrollToProject = (event) => {
    event.preventDefault();
    if (projectRef.current) {
      gsap.to(window, { duration: 1, scrollTo: projectRef.current.offsetTop });
    }
  };

const tl = gsap.timeline()

  useGSAP(() => {
    tl.from('.hero .intro-text', {
      opacity:0,
      delay:1,
      stagger: 0.2,
      duration: 1
    });
    tl.from('#project-arrow', {
      opacity:0,
      duration: 1
    });
    
    
    
  }, []);

  return (
    <div className=" relative " style={{ height: 'calc(100vh - 14rem)'}}>
      <div className="hero flex flex-col items-center text-center px-4 justify-center pt-28 pb-10">
        <h1
          className="intro-text text-3xl font-bold leading-normal cursor-default"
          ref={(el) => {
            if (el) textRefs.current[0] = el;
          }}
        >
          Hello <span className="wave ">👋</span>, My name is <span className='name'>Aryan</span>
        </h1>
        <h2
          className="intro-text text-md leading-normal mt-2"
          ref={(el) => {
            if (el) textRefs.current[1] = el;
          }}
        >
          I am a UI/UX Designer & Frontend Developer based in Gujarat, India.
        </h2>
        <h3 className="intro-text text-[#a0b1ba] font-semibold mt-4">
          Scroll down to see my work!
        </h3>
        <div className='intro-text flex w-full justify-center'>
        <Link
          to="#project"
          onClick={scrollToProject}
          // className="px-2 py-5 hover:[bg-[var(--hover-bg)]] duration-500 bottom-0 absolute animate-bounce rounded-full border-[#a0b1ba] border-2"
          className="px-2 py-5 duration-500 bottom-0 absolute rounded-full border-[#a0b1ba] border-2 hover:bg-[var(--hover-bg)] animate-bounce"
          style={{ backgroundColor: 'var(--background-color)' }} // Default background color
        >
          <IoIosArrowDown className="text-2xl text-[#a0b1ba]" />
        </Link></div>
      </div>
      
      
      <div ref={projectRef}>
      </div>
    </div>
  );
};

export default Hero;
