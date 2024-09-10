import React, { useRef } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Project/Project'
import Footer from './components/Footer/Footer'
import Scroll from './components/Scroll/Scroll'
import gsap from 'gsap'


const App = () => {

  const mainRef = useRef(null);
  const cursorRef = useRef(null);

  const handleMouseMove = (event) => {
    const newX = event.clientX + 4; // Adjust position by adding 10px to the X coordinate
    const newY = event.clientY + 8; // Adjust position by adding 10px to the Y coordinate

    gsap.to(cursorRef.current, {
      x: newX,
      y: newY,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  

  return (
    <div className='main' id='main' ref={mainRef}
    onMouseMove={handleMouseMove}>
      <div id='cursor' className='w-4 h-4 bg-[var(--cursor-bg)] fixed lg:block hidden rounded-full z-50' ref={cursorRef}></div>
      <Scroll />
      <Navbar/> 
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default App