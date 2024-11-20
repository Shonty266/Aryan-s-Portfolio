import BelmondImage from '../assets/images/frontend/Belmond.png';
import FurnitureImage from '../assets/images/frontend/Furniture.png';
import GoGlobeFImage from '../assets/images/frontend/GoGlobe.png';
import GoGlobeImage from '../assets/images/uiux/Go Globe.png';
import DecoluxeImage from '../assets/images/uiux/Decoluxe.png';
import ReceiptImage from '../assets/images/uiux/Receipt.png';
import HomeVoyageImage from '../assets/images/uiux/HomeVoyage.png';
import { FaCog } from 'react-icons/fa'; 
import React from 'react';


export const data = [
  {
    id: 8,
    name: 'HomeVoyage Landing Page',
    category: 'frontend',
    image: HomeVoyageImage,
    projectType: 'Frontend Project',
    description: 'This is a landing page currently being developed in React for an imaginary real estate website, and it is still in the development stage.', 
    link: '#',  // Placeholder link as it's still in development
    location: (
      <div className="flex items-center gap-2">
        <span>Currently in Development</span>
        <FaCog className="animate-spin mr-2 text-xl" /> {/* Spinning cog icon */}
      </div>
    ),
    skills: ['React', 'TailwindCSS', 'GSAP']
  },
 
  {
    id: 7,
    name: 'Home Voyage Landing Page',
    category: 'uiux',
    image: HomeVoyageImage,
    projectType: 'UI/UX Design Project',
    description: 'This is a landing page design for an imaginary real estate website that connects users with their dream properties effortlessly.', 
    link:'https://www.behance.net/gallery/210294549/Home-Voyage-Real-Estate-Landing-Page-Design',
    location:'View on Behance',
    skills: ['Figma']


  },
  {
    id: 6,
    name: 'Digital Receipt Generator',
    category: 'uiux',
    image: ReceiptImage,
    projectType: 'UI/UX Design Project',
    description: 'This is a landing page design for a SaaS website that generates online receipts.', 
    link:'https://www.behance.net/gallery/205200879/Landing-Page-Design-for-Digital-Receipt-Generator',
    location:'View on Behance',
    skills: ['Figma']


  },
  {
    id: 5,
    name: 'Go Globe',
    category: 'frontend',
    image: GoGlobeFImage,
    projectType: 'Frontend Project',
    description: 'Go Globe is a single-page application for the imaginary travel brand Go Globe, which I previously designed.', 
    link:'https://go-globe.netlify.app/',
    location:'View Live Project',
    skills: ['React', 'TailwindCSS','JavaScript', 'GSAP', 'Swiper.js']


  },
      {
        id: 4,
        name: 'Decoluxe Furniture',
        category: 'uiux',
        image: DecoluxeImage,
        projectType: 'UI/UX Design Project',
        description: 'Decoluxe offers a curated selection of premium furniture with an intuitive app experience for creating your dream home.', 
        link:'https://www.behance.net/gallery/204747987/Decoluxe-Furnitures-UIUX-Design',
        location:'View on Behance',
        skills: ['Figma', 'Prototyping']

      },

      {
        id: 3,
        name: 'Go Globe',
        category: 'uiux',
        image: GoGlobeImage,
        projectType: 'UI/UX Design  Project',
        description: 'GoGlobe is a website that masterfully blends vibrant brand identity with user-centric engagement, creating an immersive travel experience.', 
        link:'https://www.behance.net/gallery/203676941/Go-Globe-Case-Study',
        location:'View on Behance',
        skills: ['Figma', 'Prototyping']


      },
      {
        id: 2,
        name: 'Furniture',
        category: 'frontend',
        image: FurnitureImage,
        projectType: 'Frontend Project',
        description: 'This website serves as the frontend landing page for an imaginary ecommerce website called Furniture.', 
        link:'https://furnituress.netlify.app/',
        location:'View Live Project',
        skills: ['HTML', 'TailwindCSS','JavaScript', 'GSAP', 'Swiper.js']


      },

      {
        id: 1,
        name: 'Belmond Hotel',
        category: 'frontend',
        image: BelmondImage,
        projectType: 'Frontend Project',
        description: 'This website serves as the frontend landing page for an imaginary hotel called Belmond hotel.', 
        link:'https://belmond-hotel.netlify.app/',
        location:'View Live Project',
        skills: ['HTML', 'TailwindCSS','JavaScript', 'GSAP', 'Swiper.js']

},

      
];
  

  
  
  