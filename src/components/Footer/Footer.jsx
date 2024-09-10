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
    <div>
        <div className='w-full flex flex-col items-center gap-4 justify-center py-10'>
          <DarkMode />
        <div className='text-2xl flex gap-8 mt-2'>

        <a href="mailto:work.aryan26@gmail.com" target="_blank"
          rel="noopener noreferrer" className='hover:text-[#a0b1ba] duration-500'><MdEmail /></a>
  
  <a href="https://www.linkedin.com/in/aryan-h/" target="_blank"
          rel="noopener noreferrer" className='hover:text-[#a0b1ba] duration-500'><FaLinkedin/></a>
  
  <a href="https://github.com/Shonty266" target="_blank"
          rel="noopener noreferrer" className='hover:text-[#a0b1ba] duration-500'><FaGithubSquare/></a>
  
  <a href="https://www.behance.net/aryanh" target="_blank"
          rel="noopener noreferrer" className='hover:text-[#a0b1ba] duration-500'><FaBehanceSquare/></a>
</div>
<p>Copyright © Aryan 2024</p>

{isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-none text-[#a0b1ba] hover:bg-[#d7dee2] border-[#a0b1ba] border-2 rounded-full shadow-lg hover:bg- transition duration-300"
        >
          <IoIosArrowUp size={24} />
        </button>
      )}
        </div>



    </div>
  )
}

export default Footer