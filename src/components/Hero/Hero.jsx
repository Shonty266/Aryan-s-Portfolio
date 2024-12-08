import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { Draggable } from 'gsap/Draggable';
import HtmlIcon from '../../assets/images/3D Logos/HTML.png';
import CssIcon from '../../assets/images/3D Logos/CSS.png';
import JsIcon from '../../assets/images/3D Logos/JavaScript.png';
import TailwindIcon from '../../assets/images/3D Logos/Tailwind.png';
import FigmaIcon from '../../assets/images/3D Logos/Figma.png';
import ReactIcon from '../../assets/images/3D Logos/React.png';

gsap.registerPlugin(ScrollToPlugin, Draggable);

const Hero = () => {
  const textRefs = useRef([]);
  const containerRef = useRef(null);

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

    setTimeout(() => {
      const icons = document.querySelectorAll('.floating-icon');
      const bounds = containerRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight - 130;

      if (window.innerWidth <= 768) {
        // Calculate positions to span full width
        const positions = [
          { x: bounds.width * 0.1 },  // 10% from left
          { x: bounds.width * 0.3 },  // 30% from left
          { x: bounds.width * 0.5 },  // center
          { x: bounds.width * 0.7 },  // 70% from left
          { x: bounds.width * 0.9 },  // 90% from left
          { x: bounds.width * 0.2 }   // 20% from left for the last icon
        ];

        icons.forEach((icon, index) => {
          gsap.set(icon, {
            x: positions[index].x - (icon.offsetWidth / 2), // Center the icon at position
            y: -100,
            opacity: 0,
            cursor: 'move'
          });

          // Add bouncing animation
          gsap.to(icon, {
            y: screenHeight - 200,
            opacity: 1,
            duration: 1.5,
            ease: "bounce.out", // Add bounce effect
            delay: index * 0.2,
            onComplete: () => {
              // Add a small bounce after landing
              gsap.to(icon, {
                y: screenHeight - 150,
                duration: 0.2,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
              });

              const draggable = Draggable.create(icon, {
                type: "x,y",
                bounds: containerRef.current,
                inertia: true,
                onDragStart: function() {
                  this.target.style.zIndex = "20";
                  gsap.to(this.target, {
                    scale: 1.1,
                    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                    duration: 0.2
                  });
                },
                onDragEnd: function() {
                  this.target.style.zIndex = "15";
                  gsap.to(this.target, {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.2
                  });
                }
              })[0];

              draggable.enable();
            }
          });
        });

      } else {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const centerX = bounds.left + bounds.width / 2;
          const centerY = bounds.top + bounds.height / 2;

          icons.forEach((image) => {
            const speed = image.getAttribute('data-speed');
            const x = (centerX - clientX) * speed;
            const y = (centerY - clientY) * speed;
            
            const maxX = bounds.width / 4;
            const maxY = bounds.height / 4;
            const boundedX = Math.max(Math.min(x, maxX), -maxX);
            const boundedY = Math.max(Math.min(y, maxY), -maxY);
            
            gsap.to(image, {
              x: boundedX,
              y: boundedY,
              duration: 1,
              ease: 'power2.out'
            });
          });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    }, 800);
  }, []);

  const tl = gsap.timeline()

  useGSAP(() => {
    tl.from('.hero .intro-text', {
      opacity: 0,
      delay: 1,
      stagger: 0.2,
      duration: 1
    });
    tl.from('.floating-icon', {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div className="relative h-[calc(100vh-13rem)] overflow-hidden rounded-lg" ref={containerRef}>
      <img src={HtmlIcon} 
           className="floating-icon absolute w-24 md:w-20 h-24 md:h-20 top-[10%] left-[12%] cursor-move z-[11]" data-speed="0.05" alt="HTML" />
      <img src={CssIcon} 
           className="floating-icon absolute w-24 md:w-20 h-24 md:h-20 top-[10%] right-[15%] cursor-move z-[12]" data-speed="0.05" alt="CSS" />
      <img src={JsIcon} 
           className="floating-icon absolute w-24 md:w-20 h-24 md:h-20 bottom-[40%] left-[20%] z-[16]" data-speed="0.05" alt="JavaScript" />
      <img src={TailwindIcon} 
           className="floating-icon absolute w-24 md:w-20 h-24 md:h-20 bottom-[2%] left-[8%] z-[15]" data-speed="0.05" alt="Tailwind" />
      <img src={FigmaIcon} 
           className="floating-icon absolute w-24 md:w-20 h-24 md:h-20 lg:bottom-[30%] lg:right-[10%] z-[13]" data-speed="0.05" alt="Figma" />
      <img src={ReactIcon} 
           className="floating-icon absolute w-24 md:w-20 h-24 md:h-20 lg:bottom-[10%] lg:right-[25%] z-[14]" data-speed="0.05" alt="React" />
      <div className="hero flex flex-col items-center text-center px-4 justify-center pt-28 pb-10 mx-auto max-w-3xl relative z-10">
        <h1
          className="intro-text text-3xl font-bold leading-normal cursor-default"
          ref={(el) => {
            if (el) textRefs.current[0] = el;
          }}
        >
          Hello <span className="wave">👋</span>, My name is <span className='name'>Aryan</span>
        </h1>
        <h2
          className="intro-text text-md leading-normal mt-2"
          ref={(el) => {
            if (el) textRefs.current[1] = el;
          }}
        >
          I am a Frontend Developer &  UI/UX Designer based in Gujarat, India.
        </h2>
        <h3 className="intro-text text-[#a0b1ba] font-semibold mt-4">
          Scroll down to see my work!
        </h3>
      </div>
    </div>
  );
};

export default Hero;
