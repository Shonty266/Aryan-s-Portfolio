import React ,{ useState, useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithubSquare, FaBehanceSquare } from "react-icons/fa";
import { IoIosArrowUp } from 'react-icons/io';
import DarkMode from '../DarkMode/DarkMode';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="w-full mt-10">
      <div className="w-full flex justify-center mb-4">
        <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[var(--text-color)] to-transparent opacity-20" />
      </div>
      
      <div className='w-full flex flex-col items-center gap-6 justify-center py-10'>
        <DarkMode />
        
        <div className='text-2xl flex gap-8'>
          <a 
            href="mailto:work.aryan26@gmail.com" 
            target="_blank"
            rel="noopener noreferrer" 
            className='text-[var(--text-color)] hover:text-[var(--hover-bg)] duration-300 transform hover:scale-110 hover:rotate-6'
          >
            <MdEmail />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aryan-h/" 
            target="_blank"
            rel="noopener noreferrer" 
            className='text-[var(--text-color)] hover:text-[var(--hover-bg)] duration-300 transform hover:scale-110 hover:rotate-6'
          >
            <FaLinkedin/>
          </a>
          
          <a 
            href="https://github.com/Shonty266" 
            target="_blank"
            rel="noopener noreferrer" 
            className='text-[var(--text-color)] hover:text-[var(--hover-bg)] duration-300 transform hover:scale-110 hover:rotate-6'
          >
            <FaGithubSquare/>
          </a>
          
          <a 
            href="https://www.behance.net/aryanh" 
            target="_blank"
            rel="noopener noreferrer" 
            className='text-[var(--text-color)] hover:text-[var(--hover-bg)] duration-300 transform hover:scale-110 hover:rotate-6'
          >
            <FaBehanceSquare/>
          </a>
        </div>

        <p className="text-[var(--text-color)] opacity-70">Copyright © Aryan 2024</p>

        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-none text-[var(--text-color)] hover:text-[var(--background-color)] hover:bg-[var(--text-color)] border-[var(--text-color)] border-2 rounded-full shadow-lg transition duration-300"
          >
            <IoIosArrowUp size={24} />
          </button>
        )}
      </div>
    </footer>
  )
}

export default Footer