import React, { useState} from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithubSquare, FaBehanceSquare } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { delay } from 'framer-motion';
import Resume from '../../assets/Aryan-s Resume.pdf'



const Navbar = () => {

  const [nav, setNav] = useState(false);
  
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
  useGSAP(() => {
    gsap.from('.navbar', {
      y: -100,
      opacity:0,
      stagger: 0.2,
      duration: 1
    })
    tl.to('.animated-name span', {
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      delay: 5,
      ease: 'power2.inOut'  
    })
    .to('.animated-name span', {
      opacity: 1,  
      stagger: 0.2,
      duration: 2,
      ease: 'power2.inOut'  
    });
    
    
  }, []);



  




  return (
    <div> 
        <div className='navbar flex justify-between items-center py-8 lg:px-20 px-10 relative z-50'>
        <div className='nav-left font-navLinks gap-5 text-[17px] font-semibold hidden lg:flex'>
      <Link to='/' className='link hover:text-[#a0b1ba] duration-500'>
        Work
      </Link>
      <Link to='/about' className='link hover:text-[#a0b1ba] duration-500'>
        About
      </Link>
      <Link to='/contact' className='link hover:text-[#a0b1ba] duration-500'>
        Contact
      </Link>
      <Link to={Resume} className='link hover:text-[#a0b1ba] duration-500' target='_blank' rel='noopener noreferrer'>
  Resume
</Link>

    </div>


<Link to="/" className='animated-name text-3xl font-bold tracking-[2px] text-center hover:text-[#a0b1ba] duration-500'>
      <span>A</span>
      <span>R</span>
      <span>Y</span>
      <span>A</span>
      <span>N</span>
    </Link>


<div className='text-2xl flex gap-10'>

  <a href="mailto:work.aryan26@gmail.com" target="_blank"
          rel="noopener noreferrer" className='hover:text-[#a0b1ba] duration-500 hidden lg:block'><MdEmail /></a>
  
  <a href="https://www.linkedin.com/in/aryan-h/" target="_blank"
          rel="noopener noreferrer" className='hover:text-[#a0b1ba] duration-500 hidden lg:block'><FaLinkedin/></a>
  
  <a href="https://github.com/Shonty266" target="_blank"
          rel="noopener noreferrer" className='hover:text-[#a0b1ba] duration-500 hidden lg:block'><FaGithubSquare/></a>
  
  <a href="https://www.behance.net/aryanh" target="_blank"
          rel="noopener noreferrer" className='hover:text-[#a0b1ba] duration-500 hidden lg:block'><FaBehanceSquare/></a>


  <div 
        onClick={() => setNav(!nav)} 
        className='lg:hidden flex cursor-pointer justify-start'
      >
        {nav ? <IoMdClose /> : <HiMenu />}
      </div>


</div>
       

        

<div 
  className={`menu font-navLinks text-[17px] absolute w-[90%] font-bold flex flex-col items-center shadow-md bg-[#f9f9fd] rounded-lg z-40 duration-500 ease-in-out transform ${nav ? 'top-24 opacity-100 left-1/2 -translate-x-1/2' : 'top-[-200%] opacity-0 left-1/2 -translate-x-1/2'} py-2 rounded-lg`}
>
        <Link to='/' className='hover:text-[#a0b1ba] duration-500 py-2'>
          Work
        </Link>
        <hr className='h-[2px] bg-gray-300 w-[90%]' />

        <Link to='/about' className='hover:text-[#a0b1ba] duration-500 py-2'>
          About
        </Link>     
        <hr className='h-[2px] bg-gray-300 w-[90%]' />


        <Link to='/contact' className='hover:text-[#a0b1ba] duration-500 py-2'>
          Contact
        </Link>
        <hr className='h-[2px] bg-gray-300 w-[90%]' />


        <a href={Resume} className='hover:text-[#a0b1ba] duration-500 py-2'>
          Resume
        </a>
      </div>
      </div>
      </div>

   
  )
}

export default Navbar


