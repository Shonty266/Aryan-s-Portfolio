import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import React, {useEffect, useRef, useState} from 'react'
import gsap from 'gsap'
import contactImage from '../../assets/images/contact.svg'
import { CgClose } from "react-icons/cg";
import { useGSAP } from '@gsap/react'
import Scroll from '../Scroll/Scroll'


const Contact = () => {

  const textRefs = useRef([]);

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


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c48506b2-e8d8-4409-9add-32ffaa23083d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      const alert = document.getElementById('alert');
      if (true) {
        alert.style.display = 'flex';
        alert.style.opacity = '100';
      
        setTimeout(() => {
          alert.style.display = 'none';
        }, 3000);
      }
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  
    const close = () => {
      const alert = document.getElementById('alert');
      if (alert) {
        alert.style.display = 'none';
      }
    };
    
    
    useGSAP(() => {
      gsap.from('.contact', {
        opacity:0,
        delay:1,
        // stagger: 0.2,
        duration: 2,
      });
    }, []);

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
  
    const handleNameChange = (event) => {
      const newName = event.target.value;
      setName(newName);
      setSubject(`${newName} sent you a message from Portfolio`);
    };
    
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
    <div ref={mainRef}
    onMouseMove={handleMouseMove}>
      <div id='cursor' className='w-4 h-4 bg-[var(--cursor-bg)] lg:fixed hidden lg:block rounded-full z-50 x-10 y-10' ref={cursorRef}></div>

      <Scroll />

      <Navbar />
       
       <div className='absolute right-10 top-20 rounded-lg py-2 border-2 border-[#263238] items-center justify-center gap-4 px-4 transition duration-500 ease-in-out hidden' id='alert' >
    <div>{result}</div>
    <div>
        <CgClose className='font-bold text-xl cursor-pointer' onClick={close} />
    </div>
</div>

        <div className='contact flex gap-14 lg:px-20 px-4 py-10 items-center lg:flex-row flex-col'>
          <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
            <h1 className='text-4xl font-bold text-center lg:text-left' 
            ref={(el) => {
              if (el) textRefs.current[0] = el;
            }}
          >Get in Touch</h1>
          
          <form onSubmit={onSubmit}>
            <div  className="flex flex-col items-between gap-4">
    <input
      type="text"
      className="w-full h-[50px] pl-6 outline-none rounded-md border border-gray-300"
      placeholder="Enter Your Name"
      name="name"
      onChange={handleNameChange}
      required
    />
    <input type="hidden" name="subject" value={subject} />
    <input
      type="email"
      className="w-full h-[50px] pl-6 outline-none rounded-md border border-gray-300"
      placeholder="Enter Your Email"
      name="email"
      required
    />
    <textarea
      className="w-full h-[150px] pl-6 pt-4 outline-none rounded-md border border-gray-300"
      placeholder="Enter Your Message"
      name="message"
      required
    />
    <button
      className="w-full py-3 rounded-md font-bold text-[#a0b1ba] hover:bg-[#d7dee2] border-[#a0b1ba] border-2 duration-500 text-xl hover:text-[#263238]"
      type="submit"
    >
      Send
    </button>
    </div>
</form>

          </div>
          <div className='py-2 rounded-lg overflow-hidden lg:w-1/2 max-h-[450px] w-full shadow flex justify-center items-center'>
          <img src={contactImage} alt="" className='w-full h-full object-cover' />
          </div> 
        </div>

        

        <Footer />
    </div>
  )
}

export default Contact